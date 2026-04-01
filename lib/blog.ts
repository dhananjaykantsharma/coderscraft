export enum BlogCategory {
  AI = "AI",
  SEO = "SEO",
  WebDev = "WebDev",
  Freelancing = "Freelancing",
}

export type BlogPost = {
  id: bigint;
  title: string;
  content: string;
  publishedDate: bigint;
  slug: string;
  authorName: string;
  summary: string;
  category: BlogCategory;
};

