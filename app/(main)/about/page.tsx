"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Code,
  DollarSign,
  Eye,
  Globe,
  MessageSquare,
  Rocket,
  Target,
} from "lucide-react";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Figma"],
  Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"],
  Mobile: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
  Tools: ["AWS", "Docker", "Git", "CI/CD", "Vercel", "WordPress"],
};

const whyChooseUs = [
  { icon: Rocket, title: "Fast Delivery", desc: "Agile sprints mean your product ships on time, every time." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Daily updates and transparent project tracking — no surprises." },
  { icon: Code, title: "Scalable Code", desc: "Clean architecture designed to grow with your business." },
  { icon: Clock, title: "On-Time Delivery", desc: "95% of our projects are delivered on or ahead of schedule." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. Fixed-price or milestone-based billing." },
  { icon: Globe, title: "Global Experience", desc: "We've worked with clients in 20+ countries across industries." },
];

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-32 pb-20">
        <div
          className="absolute top-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
        />
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-neon-purple mr-2 animate-pulse-glow" />
              Our Story
            </span>
            <h1 className="font-grotesk font-extrabold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              DevNexora is a boutique software agency founded by a passionate full-stack developer with a mission to
              democratize access to world-class digital craftsmanship for startups.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div {...fadeUp()}>
              <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-5">
                From Bedroom Coder to <span className="gradient-text-pb">Global Agency</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It started in 2020 with a laptop, a strong coffee habit, and an obsession with beautiful, performant
                  web experiences. I bootstrapped DevNexora while freelancing for Y Combinator startups, Fortune 500
                  companies, and scrappy two-person teams with big ideas.
                </p>
                <p>
                  By 2022, what started as solo freelancing evolved into a small but mighty distributed team of
                  developers, designers, and growth specialists — all sharing one philosophy:
                  <span className="text-white font-medium"> every line of code should move the business forward.</span>
                </p>
                <p>
                  Today we've shipped 50+ products across fintech, healthtech, e-commerce, and SaaS, working with
                  clients from San Francisco to Singapore to Stockholm.
                </p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Projects Shipped", color: "#8B5CF6" },
                { value: "20+", label: "Countries", color: "#3B82F6" },
                { value: "95%", label: "On-time Delivery", color: "#22D3EE" },
                { value: "4.9★", label: "Average Rating", color: "#D946EF" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                  <div className="font-grotesk font-bold text-3xl mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl text-white mb-3">
              Mission &amp; <span className="gradient-text">Vision</span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              {...fadeUp(0.1)}
              className="glass-card-hover rounded-2xl p-8"
              style={{ borderLeft: "3px solid #8B5CF6" }}
            >
              <Target className="text-neon-purple mb-4" size={32} />
              <h3 className="font-grotesk font-bold text-xl text-white mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower ambitious startups and entrepreneurs with premium digital products — delivered with the speed
                of a startup and the quality of a top-tier agency. We believe great software should be accessible to
                every great idea.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp(0.2)}
              className="glass-card-hover rounded-2xl p-8"
              style={{ borderLeft: "3px solid #22D3EE" }}
            >
              <Eye className="text-neon-cyan mb-4" size={32} />
              <h3 className="font-grotesk font-bold text-xl text-white mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where the best digital experiences aren't reserved for companies with billion-dollar budgets. We
                envision being the go-to remote engineering partner for the next generation of category-defining
                startups.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl text-white mb-3">
              Skills &amp; <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground">A comprehensive toolkit for every digital challenge</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div key={category} {...fadeUp(i * 0.1)} className="glass-card rounded-2xl p-6">
                <h4 className="font-grotesk font-semibold text-white mb-4 gradient-text-pb">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full text-muted-foreground"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl text-white mb-3">
              Why Choose <span className="gradient-text">DevNexora</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We're more than developers — we're invested partners in your growth.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.08)}
                className="glass-card-hover rounded-2xl p-7"
                data-ocid={`about.item.${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(139,92,246,0.15)",
                    border: "1px solid rgba(139,92,246,0.3)",
                  }}
                >
                  <item.icon className="text-neon-purple" size={20} />
                </div>
                <h3 className="font-grotesk font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-container">
          <motion.div {...fadeUp()} className="text-center">
            <h2 className="font-grotesk font-bold text-3xl text-white mb-4">
              Ready to work <span className="gradient-text">together?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let's build something extraordinary. Book a free 30-minute strategy call today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold gradient-bg hover:opacity-90 transition-all shadow-glow-purple"
              data-ocid="about.primary_button"
            >
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

