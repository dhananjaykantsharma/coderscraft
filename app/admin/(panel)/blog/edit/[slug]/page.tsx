"use client";

import { useParams } from "next/navigation";
import BlogEditClient from "../../components/BlogEditClient";
import { useEffect, useState } from "react";

export default function EditBlogPage() {

  const { slug } = useParams();
  const id = slug as string;  // ← cast to string
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        const data = await response.json();
        console.log("Fetched blog:", data); 
        if (response.ok) {
          setBlog(data);
        } else {
          console.error("Failed to fetch blog:", data.error);
        }
      }
      catch (error) { 
        console.error("Error fetching blog:", error);
      }
    }
    fetchBlog();
  }, [slug]);

  return (
    <div>
      <h1>Edit Blog</h1>
      <BlogEditClient id={id} blog={blog} />
    </div>
  );
}