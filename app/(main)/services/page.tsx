"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Search, Settings, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const services = [
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "Modern, blazing-fast web applications",
    color: "#8B5CF6",
    description:
      "We architect and build high-performance web applications using React, Next.js, and Node.js. Every project is engineered for speed, scalability, and conversion — not just aesthetics.",
    features: [
      "Custom React & Next.js applications",
      "RESTful & GraphQL API development",
      "Serverless & cloud-native architecture",
      "Progressive Web Apps (PWA)",
      "Authentication & security hardening",
      "Performance optimization (Core Web Vitals)",
    ],
    benefits: [
      "Faster load times = higher conversions",
      "SEO-optimized from day one",
      "Scalable to millions of users",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Native-quality cross-platform apps",
    color: "#3B82F6",
    description:
      "We build stunning mobile experiences with Flutter and React Native that feel native on both iOS and Android. From MVP to enterprise-scale — your app ships fast and performs flawlessly.",
    features: [
      "Flutter & React Native development",
      "iOS & Android simultaneous launch",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App Store & Play Store submission",
      "In-app purchases & subscriptions",
    ],
    benefits: [
      "Single codebase, 2× faster delivery",
      "App Store approval handled for you",
      "Performance parity with native apps",
    ],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    subtitle: "Rank #1 and stay there",
    color: "#22D3EE",
    description:
      "Data-driven SEO strategies that go beyond keywords. We analyze your competition, fix technical issues, build authority through content, and implement structured data — all to make Google love you.",
    features: [
      "Technical SEO audits & fixes",
      "Keyword research & content strategy",
      "On-page & off-page optimization",
      "Core Web Vitals improvement",
      "Schema markup & structured data",
      "Monthly performance reporting",
    ],
    benefits: [
      "Compound organic growth over time",
      "Reduced dependency on paid ads",
      "Higher-quality inbound leads",
    ],
  },
  {
    icon: Settings,
    title: "WordPress Development",
    subtitle: "Custom WordPress solutions that scale",
    color: "#D946EF",
    description:
      "From custom themes to complex WooCommerce stores — we build WordPress solutions that are fast, secure, and easy for your team to manage. No bloated page builders, just clean custom code.",
    features: [
      "Custom theme development",
      "WooCommerce store setup & optimization",
      "Custom plugin development",
      "WordPress multisite architecture",
      "Speed optimization (sub-2s load times)",
      "Security hardening & maintenance",
    ],
    benefits: [
      "Full ownership of your content",
      "Easy for non-technical teams to manage",
      "Scalable from blog to enterprise",
    ],
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "It varies by scope. A landing page takes 1–2 weeks. A full web app MVP takes 4–8 weeks. Mobile apps typically take 6–12 weeks. We always provide a detailed timeline before starting.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes! We offer flexible maintenance retainers covering bug fixes, performance monitoring, security updates, and feature additions. Plans start at $299/month.",
  },
  {
    q: "What's your pricing model?",
    a: "We offer fixed-price project quotes and milestone-based billing. This means you know exactly what you'll pay upfront — no hourly billing surprises.",
  },
  {
    q: "Can you work with our existing tech stack?",
    a: "Absolutely. We've integrated with virtually every major platform. Whether you have an existing codebase or starting from scratch, we adapt to your situation.",
  },
  {
    q: "How do you handle revisions and feedback?",
    a: "We work in agile 1–2 week sprints with regular check-ins. You get to review work in progress and provide feedback before the next sprint begins.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. We sign NDA and IP assignment agreements before any project kickoff. Your ideas and code are fully yours.",
  },
];

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-32 pb-16">
        <div
          className="absolute top-20 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        />
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-grotesk font-extrabold text-4xl md:text-5xl text-white mb-5">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive digital solutions that take your product from idea to market — and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container space-y-24">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              {...fadeUp(0.1)}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-5"
                  style={{
                    background: `${svc.color}18`,
                    color: svc.color,
                    border: `1px solid ${svc.color}30`,
                  }}
                >
                  <svc.icon size={15} />
                  {svc.title}
                </div>
                <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-white mb-3">{svc.subtitle}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{svc.description}</p>
                <div className="space-y-2 mb-6">
                  {svc.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} style={{ color: svc.color }} className="flex-shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold gradient-bg hover:opacity-90 transition-all shadow-glow-purple"
                  data-ocid={`services.item.${i + 1}.primary_button`}
                >
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>

              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="glass-card rounded-2xl p-8">
                  <h4 className="font-grotesk font-semibold mb-5" style={{ color: svc.color }}>
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                          style={{ background: `${svc.color}20` }}
                        >
                          <CheckCircle size={11} style={{ color: svc.color }} />
                        </span>
                        <span className="text-muted-foreground text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="section-container max-w-3xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-3xl text-white mb-3">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>
          <motion.div {...fadeUp(0.1)}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`faq-${i}`}
                  className="glass-card rounded-xl border-white/10 px-6"
                  data-ocid={`faq.item.${i + 1}`}
                >
                  <AccordionTrigger className="text-white font-medium text-left py-5 hover:no-underline hover:text-neon-purple transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

