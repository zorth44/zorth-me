import { title, subtitle } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={title()}>文档中心</h1>
      <p className={subtitle()}>欢迎来到我的文档中心.</p>
    </div>
  );
}
