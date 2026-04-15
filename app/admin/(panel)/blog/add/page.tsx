"use client";

import { toast } from "sonner";
import BlogForm from "../components/BlogForm";
import { useRouter } from "next/navigation";

type Props = {
    title: string;
    content: string;
};

export default function AddBlogPage() {
  const router = useRouter();
  const handleAdd = async (data: Props) => {
    const res = await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log("response of add", res);

    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.message || "Failed to add blog");
      return;
    }
    toast.success("Blog added successfully");
    router.push("/admin/blog");


  };

  return (
    <div>
      <h1 className="text-3xl mb-2 fold-bold">Add Blog</h1>
      <BlogForm onSubmit={handleAdd} />
    </div>
  );
}