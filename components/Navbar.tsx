"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${
        scrolled ? "shadow-glow-purple" : ""
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center glow-purple flex-shrink-0">
              <span className="text-white font-bold text-lg font-grotesk">N</span>
            </div>
            <span className="text-white font-grotesk font-bold text-xl tracking-tight">
              DevNexora
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                href={link.to}
                className="text-muted-foreground hover:text-white transition-colors text-sm font-medium"
                data-ocid={`nav.link.${i + 1}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-white text-sm font-semibold gradient-bg hover:opacity-90 transition-opacity shadow-glow-purple"
              data-ocid="nav.primary_button"
            >
              Get Started
            </Link>
            <button
              type="button"
              className="md:hidden text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 overflow-hidden"
            style={{ background: "rgba(7,10,18,0.97)" }}
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <Link
                  key={link.to}
                  href={link.to}
                  className="text-muted-foreground hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 transition-all font-medium text-sm"
                  onClick={() => setMobileOpen(false)}
                  data-ocid={`nav.link.${i + 1}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="gradient-bg text-white py-3 px-5 rounded-full text-center font-semibold text-sm mt-3"
                onClick={() => setMobileOpen(false)}
                data-ocid="nav.primary_button"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

