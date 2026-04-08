"use client";

import { useState } from "react";
import BlogForm from "./BlogForm";

type BlogEditClientProps = {
  id: string;
  blog: any;
};

export default function BlogEditClient({ id, blog }: BlogEditClientProps) {
  const [isSaving, setIsSaving] = useState(false);

  const handleUpdate = async (data: any) => {
    setIsSaving(true);
    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error?.error || "Failed to update blog");
        return;
      }

      alert("Blog updated successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to update blog");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div>
      <BlogForm initialData={blog} onSubmit={handleUpdate} />
      {isSaving && <p>Saving...</p>}
    </div>
  );
}
