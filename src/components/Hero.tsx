"use client";

import { useState } from "react";
import { Mail, ChevronDown, Terminal, Database, Server, Code, GitBranch, Layers } from "lucide-react";
import { personalInfo } from "@/data/resume";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinSvg = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const [activeHalf, setActiveHalf] = useState<"left" | "right" | null>(null);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#06070b]">
        <div className="absolute left-1/4 top-1/3 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.03] blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/[0.03] blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Desktop: two halves layout */}
      <div className="relative z-10 hidden lg:flex min-h-screen">
        {/* Left Half - DevOps */}
        <div
          className="group relative flex flex-1 cursor-pointer items-center justify-center transition-all duration-700 ease-out"
          style={{ flex: activeHalf === "left" ? 1.5 : activeHalf === "right" ? 0.5 : 1 }}
          onMouseEnter={() => setActiveHalf("left")}
          onMouseLeave={() => setActiveHalf(null)}
        >
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: "radial-gradient(ellipse at center, rgba(6,182,212,0.07) 0%, transparent 70%)",
              opacity: activeHalf === "left" ? 1 : 0,
            }}
          />
          <div className="relative z-10 px-8 text-center">
            <div
              className="mb-6 flex items-center justify-center gap-3 transition-all duration-500"
              style={{ opacity: activeHalf === "left" ? 1 : activeHalf === "right" ? 0.1 : 0.3 }}
            >
              <Terminal size={28} style={{ color: activeHalf === "left" ? "rgb(6,182,212)" : "rgba(148,163,184,0.4)", filter: activeHalf === "left" ? "drop-shadow(0 0 10px rgba(6,182,212,0.6))" : "none", transition: "all 0.5s" }} />
              <Server size={24} style={{ color: activeHalf === "left" ? "rgb(6,182,212)" : "rgba(148,163,184,0.3)", filter: activeHalf === "left" ? "drop-shadow(0 0 8px rgba(6,182,212,0.5))" : "none", transition: "all 0.5s" }} />
              <Layers size={24} style={{ color: activeHalf === "left" ? "rgb(6,182,212)" : "rgba(148,163,184,0.3)", filter: activeHalf === "left" ? "drop-shadow(0 0 8px rgba(6,182,212,0.5))" : "none", transition: "all 0.5s" }} />
            </div>
            <h2
              className="text-3xl font-bold tracking-tight transition-all duration-500 xl:text-5xl"
              style={{
                color: activeHalf === "left" ? "rgb(6,182,212)" : "rgba(148,163,184,0.15)",
                textShadow: activeHalf === "left" ? "0 0 40px rgba(6,182,212,0.4)" : "none",
                opacity: activeHalf === "right" ? 0.1 : 1,
              }}
            >
              DevOps & Tools
            </h2>
            <p
              className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-gray-500 transition-all duration-500"
              style={{ opacity: activeHalf === "left" ? 1 : 0, transform: activeHalf === "left" ? "translateY(0)" : "translateY(8px)" }}
            >
              Containerizing services with Docker, setting up CI/CD pipelines, and working with Linux environments.
            </p>
            <div
              className="mt-5 flex flex-wrap justify-center gap-2 transition-all duration-500"
              style={{ opacity: activeHalf === "left" ? 1 : 0, transform: activeHalf === "left" ? "translateY(0)" : "translateY(10px)" }}
            >
              {["Docker", "Docker Compose", "CI/CD", "Linux", "Git"].map((t) => (
                <span key={t} className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Info - Desktop */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <div
            className="pointer-events-auto text-center transition-all duration-500"
            style={{ opacity: activeHalf ? 0 : 1, transform: activeHalf ? "scale(0.95)" : "scale(1)" }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-xs text-gray-400">Open to work</span>
            </div>

            <h1 className="mb-3 text-5xl font-bold tracking-tight text-white xl:text-7xl">
              Saleh{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, rgb(6,182,212), rgb(59,130,246))" }}
              >
                Askarzadeh
              </span>
            </h1>

            <p className="mb-4 font-mono text-sm tracking-wide text-gray-500">
              {"{"} Backend Developer · Go · API & Microservices {"}"}
            </p>

            <p className="mx-auto mb-8 max-w-lg px-4 text-sm leading-relaxed text-gray-400">
              Building scalable backend services and RESTful APIs with Go.
              <br />
              From database design to containerized deployments — focused on
              <span className="text-cyan-400"> clean code</span> and <span className="text-blue-400">reliable systems</span>.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a href="#contact" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a href="#projects" className="rounded-xl border border-white/10 bg-white/5 px-7 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
                View Projects
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10">
                <GithubIcon size={17} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-blue-500/50 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                <LinkedinSvg size={17} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-blue-500/50 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10">
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Half - Backend */}
        <div
          className="group relative flex flex-1 cursor-pointer items-center justify-center transition-all duration-700 ease-out"
          style={{ flex: activeHalf === "right" ? 1.5 : activeHalf === "left" ? 0.5 : 1 }}
          onMouseEnter={() => setActiveHalf("right")}
          onMouseLeave={() => setActiveHalf(null)}
        >
          <div
            className="absolute inset-0 transition-opacity duration-700"
            style={{
              background: "radial-gradient(ellipse at center, rgba(37,99,235,0.07) 0%, transparent 70%)",
              opacity: activeHalf === "right" ? 1 : 0,
            }}
          />
          <div className="relative z-10 px-8 text-center">
            <div
              className="mb-6 flex items-center justify-center gap-3 transition-all duration-500"
              style={{ opacity: activeHalf === "right" ? 1 : activeHalf === "left" ? 0.1 : 0.3 }}
            >
              <Code size={28} style={{ color: activeHalf === "right" ? "rgb(96,165,250)" : "rgba(148,163,184,0.4)", filter: activeHalf === "right" ? "drop-shadow(0 0 10px rgba(37,99,235,0.6))" : "none", transition: "all 0.5s" }} />
              <Database size={24} style={{ color: activeHalf === "right" ? "rgb(96,165,250)" : "rgba(148,163,184,0.3)", filter: activeHalf === "right" ? "drop-shadow(0 0 8px rgba(37,99,235,0.5))" : "none", transition: "all 0.5s" }} />
              <GitBranch size={24} style={{ color: activeHalf === "right" ? "rgb(96,165,250)" : "rgba(148,163,184,0.3)", filter: activeHalf === "right" ? "drop-shadow(0 0 8px rgba(37,99,235,0.5))" : "none", transition: "all 0.5s" }} />
            </div>
            <h2
              className="text-3xl font-bold tracking-tight transition-all duration-500 xl:text-5xl"
              style={{
                color: activeHalf === "right" ? "rgb(96,165,250)" : "rgba(148,163,184,0.15)",
                textShadow: activeHalf === "right" ? "0 0 40px rgba(37,99,235,0.4)" : "none",
                opacity: activeHalf === "left" ? 0.1 : 1,
              }}
            >
              Backend Developer
            </h2>
            <p
              className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-gray-500 transition-all duration-500"
              style={{ opacity: activeHalf === "right" ? 1 : 0, transform: activeHalf === "right" ? "translateY(0)" : "translateY(8px)" }}
            >
              Building high-performance APIs and microservices with Go, PostgreSQL, and gRPC.
            </p>
            <div
              className="mt-5 flex flex-wrap justify-center gap-2 transition-all duration-500"
              style={{ opacity: activeHalf === "right" ? 1 : 0, transform: activeHalf === "right" ? "translateY(0)" : "translateY(10px)" }}
            >
              {["Go", "PostgreSQL", "MySQL", "REST API", "gRPC"].map((t) => (
                <span key={t} className="rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-300 backdrop-blur-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Divider */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[15] w-px -translate-x-1/2">
          <div
            className="h-full w-full transition-all duration-700"
            style={{
              background: activeHalf === "left"
                ? "linear-gradient(to bottom, transparent, rgba(6,182,212,0.3), transparent)"
                : activeHalf === "right"
                  ? "linear-gradient(to bottom, transparent, rgba(37,99,235,0.3), transparent)"
                  : "linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)",
            }}
          />
        </div>
      </div>

      {/* Mobile & Tablet: simple centered layout */}
      <div className="relative z-10 flex lg:hidden min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-xs text-gray-400">Open to work</span>
          </div>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Saleh{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(6,182,212), rgb(59,130,246))" }}
            >
              Askarzadeh
            </span>
          </h1>

          <p className="mb-4 font-mono text-xs tracking-wide text-gray-500 sm:text-sm">
            {"{"} Backend Developer · Go · API & Microservices {"}"}
          </p>

          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-gray-400">
            Building scalable backend services and RESTful APIs with Go.
            From database design to containerized deployments — focused on
            <span className="text-cyan-400"> clean code</span> and <span className="text-blue-400">reliable systems</span>.
          </p>

          <div className="flex items-center justify-center gap-3">
            <a href="#contact" className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25">
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#projects" className="rounded-xl border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10">
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400">
              <GithubIcon size={17} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-blue-500/50 hover:text-blue-400">
              <LinkedinSvg size={17} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-blue-500/50 hover:text-blue-400">
              <Mail size={17} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={20} className="animate-bounce text-gray-600" />
        </a>
      </div>
    </section>
  );
}