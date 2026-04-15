"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils/formatdate";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blog");
      const data = await response.json();
      console.log("Fetched blogs:", data);
      if (response.ok) {
        setBlogs(data);
      } else {
        console.error("Failed to fetch blogs:", data.error);
      }
    }
    fetchBlogs();
  }, [])

  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
        <button 
        className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800"
        onClick={() => router.push("/admin/blog/add")}
        >
          + Add Blog
        </button>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-4">Title</th>
              <th className="p-4">Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog: any) => (
              <tr key={blog.id} className="border-t">
                <td className="p-4 text-gray-900">{blog.title}</td>
                <td className="p-4 text-gray-600">{formatDate(blog.createdAt)}</td>
                <td className="space-x-2 p-4">
                  <button 
                  className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white"
                  onClick = {() => router.push(`/admin/blog/edit/${blog.slug}`)}
                  >
                    Edit
                  </button>
                  <button className="rounded-md bg-red-500 px-3 py-1 text-sm text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}