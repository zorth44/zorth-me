"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarItem {
  slug: string;
  title: string;
}

function SidebarLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`block py-2 px-4 text-sm rounded transition-colors duration-150 ${
        isActive
          ? 'bg-blue-500 text-white font-medium'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
    >
      {children}
    </Link>
  );
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch('/api/sidebar-items')
      .then(response => response.json())
      .then(data => setSidebarItems(data));
  }, []);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6">Documentation</h2>
          <nav>
            <ul className="space-y-1">
              {sidebarItems.map((item) => (
                <li key={item.slug}>
                  <SidebarLink
                    href={`/blog/${item.slug}`}
                    isActive={pathname === `/blog/${item.slug}`}
                  >
                    {item.title}
                  </SidebarLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-grow bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}