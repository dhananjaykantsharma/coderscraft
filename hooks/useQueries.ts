"use client";

import { useEffect, useState } from "react";
import type { BlogPost } from "@/lib/blog";

export function useGetAllBlogPosts(): { data: BlogPost[]; isLoading: boolean } {
  const [data, setData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Backend will be wired later. Keep the UI working for now.
    setIsLoading(false);
    setData([]);
  }, []);

  return { data, isLoading };
}

