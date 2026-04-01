"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { BlogCategory, type BlogPost } from "@/lib/blog";
import { useGetAllBlogPosts } from "@/hooks/useQueries";

type FilterCategory = BlogCategory | "all";

const samplePosts: BlogPost[] = [
  {
    id: 1n,
    title: "10 React Performance Optimization Techniques You Must Know",
    summary:
      "Discover proven strategies to speed up your React applications — from lazy loading and memoization to virtualization and bundle splitting.",
    category: BlogCategory.WebDev,
    publishedDate: BigInt(new Date("2025-03-10").getTime()),
    slug: "react-performance-optimization",
    authorName: "Alex Rivera",
    content: "",
  },
  {
    id: 2n,
    title: "SEO in 2025: The Complete Guide to AI-Driven Search",
    summary:
      "Search is evolving with AI overviews and semantic search. Learn how to adapt your SEO strategy to rank in the new era of Google.",
    category: BlogCategory.SEO,
    publishedDate: BigInt(new Date("2025-02-28").getTime()),
    slug: "seo-2025-ai-search-guide",
    authorName: "Priya Sharma",
    content: "",
  },
  {
    id: 3n,
    title: "How We Built a $2M ARR SaaS in 12 Months as a Freelancer",
    summary:
      "A candid case study on how our team helped a solo founder go from idea to $2M ARR — the stack, the mistakes, and the wins.",
    category: BlogCategory.Freelancing,
    publishedDate: BigInt(new Date("2025-02-15").getTime()),
    slug: "freelancer-saas-case-study",
    authorName: "Marcus Cole",
    content: "",
  },
  {
    id: 4n,
    title: "AI Tools That Are Quietly Replacing Junior Developers",
    summary:
      "From Copilot to Cursor to custom AI agents — a honest look at how AI is changing the software development landscape in 2025.",
    category: BlogCategory.AI,
    publishedDate: BigInt(new Date("2025-01-30").getTime()),
    slug: "ai-tools-replacing-junior-devs",
    authorName: "Jordan Park",
    content: "",
  },
  {
    id: 5n,
    title: "Next.js 15 App Router: Everything You Need to Know",
    summary:
      "A deep dive into Next.js 15's new features — Server Components, partial prerendering, and the updated App Router patterns.",
    category: BlogCategory.WebDev,
    publishedDate: BigInt(new Date("2025-01-20").getTime()),
    slug: "nextjs-15-app-router-guide",
    authorName: "Alex Rivera",
    content: "",
  },
  {
    id: 6n,
    title: "How to Price Your Freelance Services and Never Undersell Again",
    summary:
      "Practical frameworks for setting rates, writing proposals, and having money conversations with clients confidently.",
    category: BlogCategory.Freelancing,
    publishedDate: BigInt(new Date("2025-01-10").getTime()),
    slug: "freelance-pricing-strategies",
    authorName: "Sarah Kim",
    content: "",
  },
];

const categoryLabels: Record<FilterCategory, string> = {
  all: "All",
  [BlogCategory.WebDev]: "Web Dev",
  [BlogCategory.SEO]: "SEO",
  [BlogCategory.AI]: "AI",
  [BlogCategory.Freelancing]: "Freelancing",
};

const categoryColors: Record<BlogCategory, string> = {
  [BlogCategory.WebDev]: "#8B5CF6",
  [BlogCategory.SEO]: "#22D3EE",
  [BlogCategory.AI]: "#3B82F6",
  [BlogCategory.Freelancing]: "#D946EF",
};

function formatDate(ts: bigint): string {
  const ms = Number(ts);
  const d = new Date(ms);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Blog() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const { data: backendPosts, isLoading } = useGetAllBlogPosts();

  const allPosts =
    backendPosts && backendPosts.length > 0 ? backendPosts : samplePosts;
  const filtered =
    filter === "all" ? allPosts : allPosts.filter((p) => p.category === filter);

  const filterCategories: FilterCategory[] = [
    "all",
    BlogCategory.WebDev,
    BlogCategory.SEO,
    BlogCategory.AI,
    BlogCategory.Freelancing,
  ];

  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-32 pb-16">
        <div
          className="absolute top-20 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #D946EF, transparent)" }}
        />
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-grotesk font-extrabold text-4xl md:text-5xl text-white mb-5">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Insights on web development, SEO, AI, and the freelance journey — written by practitioners.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="flex gap-2 flex-wrap justify-center mb-12">
            {filterCategories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "gradient-bg text-white shadow-glow-purple"
                    : "glass-card text-muted-foreground hover:text-white hover:border-white/20"
                }`}
                data-ocid="blog.filter.tab"
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {isLoading && (
            <div className="flex justify-center py-20" data-ocid="blog.loading_state">
              <div className="w-8 h-8 rounded-full border-2 border-neon-purple border-t-transparent animate-spin" />
            </div>
          )}

          {!isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((post, i) => (
                <motion.article
                  key={String(post.id)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass-card-hover rounded-2xl p-7 flex flex-col"
                  data-ocid={`blog.item.${i + 1}`}
                >
                  <div className="mb-4">
                    <span
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: `${categoryColors[post.category]}18`,
                        color: categoryColors[post.category],
                        border: `1px solid ${categoryColors[post.category]}30`,
                      }}
                    >
                      {categoryLabels[post.category]}
                    </span>
                  </div>

                  <h2 className="font-grotesk font-bold text-white text-lg leading-snug mb-3 flex-grow">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {post.summary}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                    <span className="flex items-center gap-1.5">
                      <User size={11} /> {post.authorName}
                    </span>
                    {formatDate(post.publishedDate) && (
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} /> {formatDate(post.publishedDate)}
                      </span>
                    )}
                  </div>

                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-neon-purple hover:text-neon-cyan transition-colors"
                    data-ocid={`blog.item.${i + 1}.button`}
                  >
                    Read More <ArrowRight size={13} />
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}

          {!isLoading && filtered.length === 0 && (
            <div className="text-center py-20" data-ocid="blog.empty_state">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

