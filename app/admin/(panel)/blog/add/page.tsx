"use client";

import BlogForm from "../components/BlogForm";

type Props = {
    title: string;
    content: string;
};

export default function AddBlogPage() {
  const handleAdd = async (data: Props) => {
    await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div>
      <h1 className="text-3xl mb-2 fold-bold">Add Blog</h1>
      <BlogForm onSubmit={handleAdd} />
    </div>
  );
}