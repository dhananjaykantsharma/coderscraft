"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiGithub, SiInstagram, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { toast } from "sonner";
import { useActor } from "@/hooks/useActor";

export default function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!actor) return;
    setStatus("loading");
    try {
      await actor.submitContactForm(name, email, message);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent! We'll get back to you within 24 hours.");
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div className="overflow-x-hidden">
      <section className="relative pt-32 pb-16">
        <div
          className="absolute top-20 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
        />
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-grotesk font-extrabold text-4xl md:text-5xl text-white mb-5">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to build your next digital product? Reach out and let&apos;s talk. Free consultation, zero pressure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-grotesk font-bold text-white text-2xl mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground text-sm mb-7">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                    data-ocid="contact.success_state"
                  >
                    <CheckCircle className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                    <h3 className="font-grotesk font-bold text-white text-xl mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-neon-purple hover:text-neon-cyan transition-colors text-sm font-medium"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-white text-sm font-medium block mb-2"
                      >
                        Full Name
                      </label>
                      <Input
                        id="contact-name"
                        type="text"
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="bg-white/5 border-white/15 text-white placeholder:text-muted-foreground focus:border-neon-purple/60 rounded-xl"
                        data-ocid="contact.name_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-white text-sm font-medium block mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/5 border-white/15 text-white placeholder:text-muted-foreground focus:border-neon-purple/60 rounded-xl"
                        data-ocid="contact.email_input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="text-white text-sm font-medium block mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell us about your project — what you're building, your timeline, and budget..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="bg-white/5 border-white/15 text-white placeholder:text-muted-foreground focus:border-neon-purple/60 rounded-xl resize-none"
                        data-ocid="contact.message_textarea"
                      />
                    </div>

                    {status === "error" && (
                      <div
                        className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3"
                        data-ocid="contact.error_state"
                      >
                        <AlertCircle size={15} />
                        Failed to send. Please try emailing us directly at hello@devnexora.com
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading" || !actor}
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold gradient-bg hover:opacity-90 transition-all shadow-glow-purple disabled:opacity-50"
                      data-ocid="contact.submit_button"
                    >
                      {status === "loading" ? (
                        <>
                          <div
                            className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"
                            data-ocid="contact.loading_state"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div
                className="rounded-2xl p-7 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(59,130,246,0.2))",
                  border: "1px solid rgba(139,92,246,0.35)",
                }}
              >
                <h3 className="font-grotesk font-bold text-white text-lg mb-2">
                  Book a Free Call
                </h3>
                <p className="text-muted-foreground text-sm mb-5">
                  30-min strategy session. No commitment. Pure value.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold gradient-bg hover:opacity-90 transition-all shadow-glow-purple text-sm"
                  data-ocid="contact.primary_button"
                >
                  Book Consultation <ArrowRight size={14} />
                </a>
              </div>

              <div className="glass-card rounded-2xl p-7 space-y-5">
                <h3 className="font-grotesk font-semibold text-white">Get in Touch</h3>
                <div className="flex items-start gap-3">
                  <Mail className="text-neon-purple flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="text-white text-sm font-medium">Email</div>
                    <a
                      href="mailto:hello@devnexora.com"
                      className="text-muted-foreground text-sm hover:text-white transition-colors"
                    >
                      hello@devnexora.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-neon-cyan flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <div className="text-white text-sm font-medium">Location</div>
                    <div className="text-muted-foreground text-sm">Remote — Worldwide</div>
                  </div>
                </div>
                <a
                  href="https://wa.me/+1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl font-semibold text-sm transition-all"
                  style={{
                    background: "rgba(37,211,102,0.12)",
                    border: "1px solid rgba(37,211,102,0.3)",
                    color: "#25D366",
                  }}
                  data-ocid="contact.secondary_button"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="glass-card rounded-2xl p-7">
                <h3 className="font-grotesk font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: SiGithub, href: "https://github.com", label: "GitHub" },
                    { icon: FaLinkedinIn, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: SiX, href: "https://x.com", label: "X" },
                    { icon: SiInstagram, href: "https://instagram.com", label: "Instagram" },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-white transition-all hover:border-white/25"
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

