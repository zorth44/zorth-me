import fs from 'fs';
import path from 'path';
import { bundleMDX } from 'mdx-bundler';
import { getMDXComponent } from 'mdx-bundler/client';
import rehypePrettyCode from 'rehype-pretty-code';
import { title } from "@/components/primitives";
import { CopyButton } from "@/components/CopyButton";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${params.slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        [rehypePrettyCode, {
          theme: 'github-dark',
          onVisitLine(node: { children: Array<{ type: string, value: string }> }) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: { properties: { className: string[] } }) {
            node.properties.className.push('highlighted');
          },
          onVisitHighlightedWord(node: { properties: { className: string | string[] } }) {
            node.properties.className = ['word'];
          },
        }],
      ];
      return options;
    },
    cwd: postsDirectory,
  });

  const Content = getMDXComponent(code);

  const components = {
    pre: ({ children, ...props }: React.ComponentProps<'pre'>) => (
      <pre className="relative" {...props}>
        <CopyButton>{(children as any).props.children}</CopyButton>
        {children}
      </pre>
    ),
  };

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className={title({ color: "blue", className: "mb-4" })}>{frontmatter.title}</h1>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Last updated: {new Date(frontmatter.date).toLocaleDateString()}
      </div>
      <Content components={components} />
    </article>
  );
}