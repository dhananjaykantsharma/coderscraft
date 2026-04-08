"use client";

import React, { useState } from "react";
import BlogEditor from "./BlogEditor";

type BlogFormProps = {
  initialData?: any;
  onSubmit: (data: any) => void;
};

export default function BlogForm({ initialData, onSubmit }: BlogFormProps) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    author: initialData?.author || "",
    featured_image: initialData?.featured_image || "",
    content: initialData?.content || "",
    meta_title: initialData?.meta_title || "",
    meta_description: initialData?.meta_description || "",
    meta_keyword: initialData?.meta_keyword || "",
  });

  const [error, setError] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.title) newErrors.title = "Title is required";
    if (!form.slug) newErrors.slug = "Slug is required";
    if (!form.author) newErrors.author = "Author is required";
    if (!form.content) newErrors.content = "Content is required";
    if (!form.excerpt) newErrors.excerpt = "Excerpt is required";

    setError(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  await onSubmit(form);
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* 🔹 Basic Info */}
      <h2 className="text-xl font-bold">Basic Info</h2>

      <input
        name="title"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.title}
        onChange={handleChange}
      />
      {error.title && <p className="text-red-500 text-sm">{error.title}</p>}

      <input
        name="slug"
        placeholder="Slug (unique URL)"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.slug}
        onChange={handleChange}
      />
      {error.slug && <p className="text-red-500 text-sm">{error.slug}</p>}

      <input
        name="author"
        placeholder="Author"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.author}
        onChange={handleChange}
      />
      {error.author && <p className="text-red-500 text-sm">{error.author}</p>}

      <input
        name="featured_image"
        placeholder="Featured Image URL"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.featured_image}
        onChange={handleChange}
      />

      <textarea
        name="excerpt"
        placeholder="Short Description (Excerpt)"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.excerpt}
        onChange={handleChange}
      />
      {error.excerpt && <p className="text-red-500 text-sm">{error.excerpt}</p>}
      {/* 🔹 Content */}
      <h2 className="text-xl font-bold">Content</h2>

      <BlogEditor
  value={form.content}
  onChange={(content) =>
    setForm((prev) => ({ ...prev, content }))
  }
/>
{error.title && <p className="text-red-500 text-sm">{error.title}</p>}  

      {/* 🔹 SEO Fields */}
      <h2 className="text-xl font-bold">SEO</h2>

      <input
        name="meta_title"
        placeholder="Meta Title"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.meta_title}
        onChange={handleChange}
      />

      <textarea
        name="meta_description"
        placeholder="Meta Description"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.meta_description}
        onChange={handleChange}
      />

      <input
        name="meta_keyword"
        placeholder="Meta Keywords"
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={form.meta_keyword}
        onChange={handleChange}
      />

      <button className="bg-black text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}