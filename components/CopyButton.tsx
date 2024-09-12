"use client";

import { useState } from 'react';

export function CopyButton({ children }: { children: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      className="absolute top-2 right-2 p-1 rounded text-xs bg-gray-700 hover:bg-gray-600 text-white"
      onClick={copy}
    >
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
}