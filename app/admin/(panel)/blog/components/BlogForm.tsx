"use client";

import React, { useState, useEffect } from "react";
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
    content: initialData?.details.content || "",
    meta_title: initialData?.details.meta_title || "",
    meta_description: initialData?.details.meta_description || "",
    meta_keyword: initialData?.details.meta_keyword || "",
  });

  // add this below your useState
  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        slug: initialData.slug || "",
        excerpt: initialData.excerpt || "",
        author: initialData.author || "",
        featured_image: initialData.featured_image || "",
        content: initialData.details.content || "",
        meta_title: initialData.details.meta_title || "",
        meta_description: initialData.details.meta_description || "",
        meta_keyword: initialData.details.meta_keyword || "",
      });
    }
  }, [initialData]); // ← runs whenever initialData changes

  const [error, setError] = useState<Record<string, string>>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(initialData?.featured_image || "");

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));

  }

  const UploadImage = async (file: File): Promise<string> => {
    console.log("UploadImage called with file:", file.name, "size:", file.size, "type:", file.type);

    const formData = new FormData();
    formData.append("file", file);

    console.log("Sending POST request to /api/upload");
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    console.log("Upload response status:", response.status);
    const data = await response.json();
    console.log("Upload response data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Image upload failed");
    }

    return data.url;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Starting blog submission...");
    console.log("Image file selected:", imageFile);
    console.log("Current featured_image in form:", form.featured_image);

    let imageUrl = form.featured_image;
    if (imageFile) {
      console.log("Attempting to upload image...");
      try {
        imageUrl = await UploadImage(imageFile);
        console.log("Image upload successful, URL:", imageUrl);
      } catch (error) {
        console.error("Image upload failed:", error);
        alert("Image upload failed. Please try again.");
        return;
      }
    } else {
      console.log("No image file selected, using existing URL or empty");
    }

    const finalData = {
      ...form,
      featured_image: imageUrl,
    };
    console.log("Final data to submit:", finalData);

    await onSubmit(finalData);
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
        className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {(imagePreview || form.featured_image) && (
        <img src={imagePreview || form.featured_image} alt="Preview" className="w-40 mt-2 rounded" />
      )}

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