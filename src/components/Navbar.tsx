"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/resume";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 shadow-glow backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-60" />
            <Image
              src="/images/profile.jpg"
              alt="Saleh Askarzadeh"
              width={32}
              height={32}
              className="relative rounded-full border border-white/20 object-cover"
              style={{ width: 32, height: 32 }}
            />
          </div>
          <span className="text-sm font-semibold text-text hidden sm:block">
            saleh<span className="text-primary-light">.dev</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          <li>
            <a
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-3 py-2 text-sm text-muted transition-colors hover:text-text rounded-lg hover:bg-surface-light/50 whitespace-nowrap"
            >
              About
            </a>
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3 py-2 text-sm text-muted transition-colors hover:text-text rounded-lg hover:bg-surface-light/50 whitespace-nowrap"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#contact"
              className="rounded-lg bg-primary/20 border border-primary/40 px-4 py-2 text-sm font-medium text-primary-light transition-all hover:bg-primary/30 hover:shadow-glow whitespace-nowrap"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-muted hover:text-text transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-surface/95 backdrop-blur-xl border-b border-border/50 px-6 pb-6">
          <ul className="flex flex-col gap-1">
            <li>
              <a
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:text-text hover:bg-surface-light/50"
              >
                About
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm text-muted transition-colors hover:text-text hover:bg-surface-light/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-primary-light transition-colors hover:bg-primary/10"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
