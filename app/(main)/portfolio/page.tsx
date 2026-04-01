"use client";

import Link from "next/link";
import { ExternalLink, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Category = "All" | "Web" | "Mobile" | "SEO" | "WordPress";

const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "Web" as Category,
    description:
      "Real-time financial analytics SaaS platform for tracking expenses, income, and investment portfolios with custom charts.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    image: "/assets/generated/portfolio-fintrack.dim_800x500.jpg",
    result: "300% faster reporting",
    metric: "$2M ARR in year 1",
  },
  {
    id: 2,
    title: "FlowMed Health App",
    category: "Mobile" as Category,
    description:
      "Cross-platform mobile health monitoring app with real-time vitals tracking and telemedicine integration.",
    tech: ["Flutter", "Firebase", "Python", "ML"],
    image: "/assets/generated/portfolio-flowmed.dim_800x500.jpg",
    result: "4.9★ App Store rating",
    metric: "50k active users",
  },
  {
    id: 3,
    title: "GrowthSEO Agency",
    category: "SEO" as Category,
    description:
      "Comprehensive SEO overhaul for a digital marketing agency — technical fixes, content strategy, and link building.",
    tech: ["Next.js", "Technical SEO", "GA4", "Ahrefs"],
    image: "/assets/generated/portfolio-growthseo.dim_800x500.jpg",
    result: "2× organic traffic",
    metric: "#1 rankings for 47 keywords",
  },
  {
    id: 4,
    title: "ShopNest E-Commerce",
    category: "WordPress" as Category,
    description:
      "Custom WooCommerce store with bespoke checkout flow, inventory management, and abandoned cart recovery.",
    tech: ["WordPress", "WooCommerce", "PHP", "Redis"],
    image: "/assets/generated/portfolio-shopnest.dim_800x500.jpg",
    result: "$500k monthly GMV",
    metric: "35% cart abandonment drop",
  },
  {
    id: 5,
    title: "LaunchPad SaaS MVP",
    category: "Web" as Category,
    description:
      "Full-stack SaaS MVP built in 5 weeks — authentication, billing, dashboard, and API — ready for YC demo day.",
    tech: ["Next.js", "Stripe", "Prisma", "TypeScript"],
    image: "",
    gradientStyle: { background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" },
    result: "Shipped in 5 weeks",
    metric: "$50k raised post-demo",
  },
  {
    id: 6,
    title: "NovaTech Mobile",
    category: "Mobile" as Category,
    description:
      "B2B field service management app enabling 500+ technicians to manage jobs, invoices, and schedules offline-first.",
    tech: ["React Native", "SQLite", "Node.js"],
    image: "",
    gradientStyle: { background: "linear-gradient(135deg, #22D3EE, #3B82F6)" },
    result: "40% faster job completion",
    metric: "500+ daily active users",
  },
  {
    id: 7,
    title: "Organic Bloom SEO",
    category: "SEO" as Category,
    description:
      "12-month SEO campaign for an organic food brand, growing from 0 to 80k monthly visitors.",
    tech: ["Content SEO", "Schema", "Link Building"],
    image: "",
    gradientStyle: { background: "linear-gradient(135deg, #22D3EE, #8B5CF6)" },
    result: "80k monthly visitors",
    metric: "420% revenue from organic",
  },
  {
    id: 8,
    title: "Crafted Blog Platform",
    category: "WordPress" as Category,
    description:
      "High-traffic editorial WordPress platform handling 1M+ monthly views with custom CDN and caching layer.",
    tech: ["WordPress", "Nginx", "CloudFlare", "PHP"],
    image: "",
    gradientStyle: { background: "linear-gradient(135deg, #D946EF, #8B5CF6)" },
    result: "1M+ monthly views",
    metric: "0.8s average load time",
  },
];

const categories: Category[] = ["All", "Web", "Mobile", "SEO", "WordPress"];

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-32 pb-16">
        <div
          className="absolute top-20 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #22D3EE, transparent)" }}
        />
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-grotesk font-extrabold text-4xl md:text-5xl text-white mb-5">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Real products, real results. Every project below is a story of ambition turned into outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-container">
          <div className="flex gap-2 flex-wrap justify-center mb-12">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "gradient-bg text-white shadow-glow-purple"
                    : "glass-card text-muted-foreground hover:text-white hover:border-white/20"
                }`}
                data-ocid="portfolio.filter.tab"
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass-card-hover rounded-2xl overflow-hidden"
                  data-ocid={`portfolio.item.${i + 1}`}
                >
                  <div className="h-44 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center"
                        style={project.gradientStyle}
                      >
                        <span className="font-grotesk font-bold text-white text-2xl opacity-60">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-grotesk font-semibold text-white text-lg">
                        {project.title}
                      </h3>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full ml-2 flex-shrink-0"
                        style={{
                          background: "rgba(139,92,246,0.15)",
                          color: "#8B5CF6",
                          border: "1px solid rgba(139,92,246,0.25)",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full text-muted-foreground"
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Zap size={13} className="text-neon-cyan" />
                        <span className="text-neon-cyan text-xs font-medium">
                          {project.result}
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-neon-purple transition-colors font-medium"
                        data-ocid={`portfolio.item.${i + 1}.button`}
                      >
                        Build Similar <ExternalLink size={11} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

