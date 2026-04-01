"use client";

import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Palette,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import NetworkMesh from "@/components/NetworkMesh";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance React & Next.js apps built to convert visitors into customers.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Cross-platform Flutter & React Native apps for iOS and Android.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that rank your business at the top of Google.",
  },
  {
    icon: Settings,
    title: "WordPress Dev",
    desc: "Custom WordPress themes and plugins tailored to your brand.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Scalable online stores with seamless checkout experiences.",
  },
];

const portfolioProjects = [
  {
    title: "FinTrack Dashboard",
    desc: "Real-time financial analytics platform for tracking expenses and investments.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/assets/generated/portfolio-fintrack.dim_800x500.jpg",
    result: "300% faster reporting",
  },
  {
    title: "FlowMed Health App",
    desc: "Mobile health monitoring app serving 10k+ users daily.",
    tech: ["Flutter", "Firebase", "Python"],
    image: "/assets/generated/portfolio-flowmed.dim_800x500.jpg",
    result: "4.9★ App Store rating",
  },
  {
    title: "GrowthSEO Agency",
    desc: "Full SEO overhaul for a digital marketing agency doubling organic traffic.",
    tech: ["Next.js", "SEO", "Analytics"],
    image: "/assets/generated/portfolio-growthseo.dim_800x500.jpg",
    result: "2× organic traffic",
  },
  {
    title: "ShopNest E-Commerce",
    desc: "Premium WooCommerce store with custom checkout and inventory management.",
    tech: ["WordPress", "WooCommerce", "PHP"],
    image: "/assets/generated/portfolio-shopnest.dim_800x500.jpg",
    result: "$500k+ monthly GMV",
  },
];

const testimonials = [
  {
    quote:
      "DevNexora transformed our MVP into a production-ready platform in just 6 weeks. Exceptional quality and communication throughout.",
    name: "Sarah Chen",
    role: "CTO @ LaunchPad Ventures",
    initials: "SC",
    color: "#8B5CF6",
  },
  {
    quote:
      "The SEO work doubled our organic traffic in 3 months. ROI was immediate and results keep compounding.",
    name: "Marcus Williams",
    role: "Founder @ GrowthHQ",
    initials: "MW",
    color: "#3B82F6",
  },
  {
    quote:
      "Best investment we made for our startup. The mobile app they built has 4.9 stars and our users love it.",
    name: "Priya Patel",
    role: "CEO @ NovaTech",
    initials: "PP",
    color: "#22D3EE",
  },
  {
    quote:
      "Delivered two weeks ahead of schedule with zero bugs. DevNexora's code quality and architecture are world-class.",
    name: "James O'Brien",
    role: "MD @ DigitalEdge",
    initials: "JO",
    color: "#D946EF",
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "WordPress",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "AWS",
  "Figma",
  "Docker",
  "GraphQL",
  "Tailwind CSS",
  "React Native",
];

const trustStats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5★", label: "Average Rating" },
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Countries Served" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen flex items-center pt-16">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #8B5CF6, transparent)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #3B82F6, transparent)",
          }}
        />

        <div className="section-container w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-muted-foreground mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow" />
                Worked with startups worldwide
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-grotesk font-extrabold text-4xl sm:text-5xl xl:text-6xl leading-tight text-white mb-6"
              >
                We Build <span className="gradient-text">Scalable Digital</span>{" "}
                Solutions
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg"
              >
                From blazing-fast web apps and mobile experiences to SEO
                domination and WordPress solutions — we deliver digital products
                that grow your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold gradient-bg hover:opacity-90 transition-all shadow-glow-purple"
                  data-ocid="hero.primary_button"
                >
                  Get a Free Consultation <ArrowRight size={16} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold glass-card hover:border-neon-purple/40 transition-all"
                  data-ocid="hero.secondary_button"
                >
                  View Portfolio
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative h-96"
            >
              <NetworkMesh />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 border-y border-white/8">
        <div className="section-container">
          <motion.p
            {...fadeUp()}
            className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-8"
          >
            Trusted by startups &amp; entrepreneurs worldwide
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fadeUp(i * 0.1)}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="font-grotesk font-bold text-3xl gradient-text-pb mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business goals and
              growth trajectory.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                {...fadeUp(i * 0.08)}
                className="glass-card-hover rounded-2xl p-7"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.25))",
                  }}
                >
                  <svc.icon className="text-neon-purple" size={22} />
                </div>
                <h3 className="font-grotesk font-semibold text-white text-lg mb-2">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {svc.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-neon-purple hover:text-neon-cyan transition-colors font-medium"
              data-ocid="services.primary_button"
            >
              Explore all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
              Featured <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A snapshot of projects where we turned ambitious ideas into measurable
              results.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp(i * 0.1)}
                className="glass-card-hover rounded-2xl overflow-hidden"
                data-ocid={`portfolio.item.${i + 1}`}
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-grotesk font-semibold text-white text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full text-neon-cyan"
                        style={{
                          background: "rgba(34,211,238,0.1)",
                          border: "1px solid rgba(34,211,238,0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm">
                    <Zap size={13} className="text-neon-cyan" />
                    <span className="text-neon-cyan font-medium">
                      {project.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold glass-card hover:border-neon-purple/40 transition-all"
              data-ocid="portfolio.secondary_button"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="font-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hear directly from the founders and leaders we've partnered with.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp(i * 0.1)}
                className="glass-card-hover rounded-2xl p-6"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={13}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold font-grotesk flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, #3B82F6)`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/8">
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <h2 className="font-grotesk font-bold text-2xl text-white mb-2">
              Our Tech Stack
            </h2>
            <p className="text-muted-foreground text-sm">
              Modern tools for modern problems
            </p>
          </motion.div>
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="glass-card px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-white hover:border-neon-purple/40 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <motion.div
            {...fadeUp()}
            className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))",
              border: "1px solid rgba(139,92,246,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)",
              }}
            />
            <h2 className="font-grotesk font-extrabold text-3xl md:text-4xl text-white mb-4 relative z-10">
              Ready to Build Something <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto relative z-10">
              Let's turn your vision into a high-performing digital product. Free
              consultation, no strings attached.
            </p>
            <div className="flex flex-wrap gap-4 justify-center relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold gradient-bg hover:opacity-90 transition-all shadow-glow-purple text-lg"
                data-ocid="cta.primary_button"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold glass-card hover:border-white/30 transition-all text-lg"
                data-ocid="cta.secondary_button"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
