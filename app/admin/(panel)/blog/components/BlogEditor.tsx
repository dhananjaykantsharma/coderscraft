"use client";

import dynamic from "next/dynamic";

const BlogEditorClient = dynamic(
  () => import("./BlogEditorClient"),
  {
    ssr: false,
    loading: () => <div>Loading editor...</div>,
  }
);

export default function BlogEditor({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: string) => void;
}) {
  return <BlogEditorClient value={value} onChange={onChange} />;
}
