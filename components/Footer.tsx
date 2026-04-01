"use client";

import Link from "next/link";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const year = new Date().getFullYear();

export default function Footer() {
  // Keep this SSR-safe to avoid hydration mismatches.
  const utmLink =
    "https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=devnexora";

  return (
    <footer
      className="relative border-t border-white/10"
      style={{ background: "rgba(7,10,18,0.98)" }}
    >
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center glow-purple">
                <span className="text-white font-bold text-lg font-grotesk">N</span>
              </div>
              <span className="text-white font-grotesk font-bold text-xl">
                DevNexora
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              We craft scalable digital solutions for startups and enterprises
              worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-neon-purple hover:border-neon-purple/40 transition-all"
                aria-label="GitHub"
              >
                <SiGithub size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-neon-blue hover:border-neon-blue/40 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-white transition-all"
                aria-label="X / Twitter"
              >
                <SiX size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-neon-magenta hover:border-neon-magenta/40 transition-all"
                aria-label="Instagram"
              >
                <SiInstagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-grotesk font-semibold text-sm mb-4 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Web Development",
                "Mobile Apps",
                "SEO Optimization",
                "WordPress Dev",
                "UI/UX Design",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-muted-foreground text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-grotesk font-semibold text-sm mb-4 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Portfolio" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="text-muted-foreground text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-grotesk font-semibold text-sm mb-4 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@devnexora.com"
                  className="text-muted-foreground text-sm hover:text-white transition-colors"
                >
                  hello@devnexora.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="text-muted-foreground text-sm">Worldwide Remote</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            &copy; {year} DevNexora. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-purple hover:text-neon-cyan transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{
          background:
            "linear-gradient(90deg, var(--neon-purple), var(--neon-blue), var(--neon-cyan), var(--neon-magenta))",
        }}
      />
    </footer>
  );
}

