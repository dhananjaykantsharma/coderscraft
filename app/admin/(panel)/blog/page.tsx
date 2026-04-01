"use client";

import { useState } from "react";

export default function BlogPage() {
  const [blogs] = useState([
    {
      id: 1,
      title: "How to Grow Your Business",
      date: "2026-03-30",
    },
    {
      id: 2,
      title: "Top 10 Coding Tips",
      date: "2026-03-29",
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
        <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800">
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
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="p-4 text-gray-900">{blog.title}</td>
                <td className="p-4 text-gray-600">{blog.date}</td>
                <td className="space-x-2 p-4">
                  <button className="rounded-md bg-blue-500 px-3 py-1 text-sm text-white">
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