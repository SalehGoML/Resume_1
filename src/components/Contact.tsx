"use client";

import { motion } from "framer-motion";
import { Mail, Send, Phone } from "lucide-react";
import { personalInfo } from "@/data/resume";

const GithubIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const contactLinks = [
  {
    label: "Telegram",
    href: "https://t.me/Msalehreal",
    icon: <TelegramIcon />,
    hoverColor: "hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-500/10 hover:shadow-sky-500/20",
    gradient: "from-sky-400 to-blue-500",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={20} />,
    hoverColor: "hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:shadow-emerald-500/20",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: <GithubIcon />,
    hoverColor: "hover:text-white hover:border-gray-400/50 hover:bg-white/10 hover:shadow-gray-500/20",
    gradient: "from-gray-300 to-gray-500",
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: <LinkedinIcon />,
    hoverColor: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 hover:shadow-blue-500/20",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    label: "Phone",
    href: "tel:+989037122820",
    icon: <Phone size={20} />,
    hoverColor: "hover:text-violet-400 hover:border-violet-400/50 hover:bg-violet-500/10 hover:shadow-violet-500/20",
    gradient: "from-violet-400 to-purple-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block font-mono text-xs text-secondary">
            {"contact"}
          </span>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-muted">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10"
        >
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "Phone" ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`group relative flex flex-col items-center gap-3 rounded-2xl border border-border/40 bg-surface/50 p-6 backdrop-blur-sm transition-all duration-300 text-muted hover:-translate-y-1 hover:shadow-lg ${link.hoverColor}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${link.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-[0.07]`} />
              <div className="relative transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </div>
              <span className="relative text-xs font-medium transition-colors group-hover:text-text">
                {link.label}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-border/40 bg-surface/50 p-8 backdrop-blur-sm"
        >
          <form
            action={`mailto:${personalInfo.email}`}
            method="POST"
            encType="text/plain"
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted">Name</label>
                <input id="name" name="name" type="text" required className="w-full rounded-xl border border-border/40 bg-background/60 px-4 py-3 text-sm text-text outline-none transition-all placeholder:text-muted/40 focus:border-primary/60 focus:shadow-glow" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl border border-border/40 bg-background/60 px-4 py-3 text-sm text-text outline-none transition-all placeholder:text-muted/40 focus:border-primary/60 focus:shadow-glow" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full resize-none rounded-xl border border-border/40 bg-background/60 px-4 py-3 text-sm text-text outline-none transition-all placeholder:text-muted/40 focus:border-primary/60 focus:shadow-glow" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light hover:shadow-glow-lg">
              <Send size={16} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-muted/60">
            <a href={`mailto:${personalInfo.email}`} className="text-primary-light hover:underline">{personalInfo.email}</a>
            {" · "}
            <a href="https://t.me/Msalehreal" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:underline">@Msalehreal</a>
            {" · "}
            <a href="tel:+989037122820" className="text-primary-light hover:underline">09037122820</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}