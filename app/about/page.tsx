import Image from "next/image";
import { Metadata } from "next";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Mountain,
  Users,
  Cloud,
  Rocket,
  Mail,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Saleh Askarzadeh | About",
  description:
    "Get to know Saleh — Backend Developer, cloud enthusiast, and mountain lover.",
};

const GithubIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-[#e8f1fc] overflow-hidden">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-[#2563eb]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#38bdf8]/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        {/* Back link */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#64839e] hover:text-[#e8f1fc] transition-colors mb-10 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:-translate-x-1"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          Back to Home
        </a>

        {/* ──────────────── Hero: Photo + Intro ──────────────── */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile image — large */}
          <div className="relative shrink-0">
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-[#2563eb]/50 via-[#38bdf8]/30 to-[#818cf8]/50 blur-xl opacity-50" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_40px_rgba(37,99,235,0.2)]">
              <Image
                src="/images/profile.jpg"
                alt="Mohammad Saleh Askarzadeh"
                width={220}
                height={220}
                className="object-cover"
                style={{ width: 220, height: 220 }}
                priority
              />
            </div>
          </div>

          {/* Name + quick info */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Mohammad Saleh{" "}
              <span className="text-[#60a5fa]">Askarzadeh</span>
            </h1>
            <p className="mt-2 text-base sm:text-lg text-[#64839e]">
              Backend Developer · 21 y/o
            </p>

            {/* Info chips */}
            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1c3a5e]/60 bg-[#0a1628]/80 px-3 py-1 text-xs text-[#64839e]">
                <MapPin size={12} className="text-[#60a5fa]" />
                Kerman, Iran
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1c3a5e]/60 bg-[#0a1628]/80 px-3 py-1 text-xs text-[#64839e]">
                <Briefcase size={12} className="text-[#60a5fa]" />
                1.5 years experience
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1c3a5e]/60 bg-[#0a1628]/80 px-3 py-1 text-xs text-[#64839e]">
                <GraduationCap size={12} className="text-[#60a5fa]" />
                B.Sc. Computer Engineering
              </span>
            </div>

            {/* Social links */}
            <div className="mt-5 flex items-center justify-center md:justify-start gap-2.5">
              <a
                href="https://github.com/SalehGoML"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1c3a5e]/50 text-[#64839e] transition-all hover:text-[#e8f1fc] hover:border-[#2563eb]/40 hover:bg-[#2563eb]/10"
              >
                <GithubIcon />
              </a>
              <a
                href="https://linkedin.com/in/mohammad-saleh-askarzadeh-go/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1c3a5e]/50 text-[#64839e] transition-all hover:text-[#e8f1fc] hover:border-[#2563eb]/40 hover:bg-[#2563eb]/10"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:msaskarzadeh@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#1c3a5e]/50 text-[#64839e] transition-all hover:text-[#e8f1fc] hover:border-[#2563eb]/40 hover:bg-[#2563eb]/10"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ──────────────── Divider ──────────────── */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-[#1c3a5e]/60 to-transparent" />

        {/* ──────────────── Story ──────────────── */}
        <section className="space-y-5 text-[15px] leading-relaxed text-[#64839e]">
          <h2 className="text-xl font-semibold text-[#e8f1fc]">My Story</h2>
          <p>
            I got into programming out of pure curiosity — I wanted to
            understand how the systems behind the apps and services I used every
            day actually worked. That curiosity quickly turned into a passion for
            backend development, where I could dive deep into APIs, databases,
            and the infrastructure that powers everything behind the scenes.
          </p>
          <p>
            Over the past 1.5 years I&apos;ve been building RESTful APIs and
            gRPC services with <strong className="text-[#e8f1fc]">Golang</strong>, working
            with <strong className="text-[#e8f1fc]">PostgreSQL</strong>,{" "}
            <strong className="text-[#e8f1fc]">MySQL</strong>, and{" "}
            <strong className="text-[#e8f1fc]">MongoDB</strong>, and containerizing
            everything with Docker. I&apos;ve also picked up full-stack skills
            using Next.js, React, and TypeScript — because understanding the
            full picture makes me a better backend engineer.
          </p>
          <p>
            Right now I&apos;m working on{" "}
            <a
              href="https://pazireshdr.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#60a5fa] hover:underline"
            >
              Paziresh Doctor
            </a>
            , an online medical appointment platform, where I handle both the
            backend (Go) and the frontend (Next.js). It&apos;s the kind of
            project I love — real users, real impact, and plenty of interesting
            engineering challenges.
          </p>
        </section>

        {/* ──────────────── What Drives Me ──────────────── */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#e8f1fc] mb-6">
            What Drives Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-[#1c3a5e]/40 bg-[#0a1628]/50 p-5 backdrop-blur-sm">
              <Cloud size={22} className="text-[#38bdf8] mb-3" />
              <h3 className="text-sm font-semibold text-[#e8f1fc] mb-2">
                Cloud & Infrastructure
              </h3>
              <p className="text-xs leading-relaxed text-[#64839e]">
                I&apos;m passionate about cloud-native architecture, Docker,
                CI/CD pipelines, and building systems that scale. There&apos;s
                something deeply satisfying about a well-orchestrated deployment
                pipeline.
              </p>
            </div>
            <div className="rounded-xl border border-[#1c3a5e]/40 bg-[#0a1628]/50 p-5 backdrop-blur-sm">
              <Rocket size={22} className="text-[#60a5fa] mb-3" />
              <h3 className="text-sm font-semibold text-[#e8f1fc] mb-2">
                Large-Scale Projects
              </h3>
              <p className="text-xs leading-relaxed text-[#64839e]">
                I thrive on complex, ambitious projects. The bigger the
                challenge, the more motivated I get. I love thinking about
                system design, microservices, and how all the pieces fit
                together.
              </p>
            </div>
            <div className="rounded-xl border border-[#1c3a5e]/40 bg-[#0a1628]/50 p-5 backdrop-blur-sm">
              <Users size={22} className="text-[#818cf8] mb-3" />
              <h3 className="text-sm font-semibold text-[#e8f1fc] mb-2">
                Team Collaboration
              </h3>
              <p className="text-xs leading-relaxed text-[#64839e]">
                I believe great software is built by great teams. I genuinely
                enjoy collaborating with others, sharing ideas, doing code
                reviews, and growing together as a team.
              </p>
            </div>
          </div>
        </section>

        {/* ──────────────── Beyond Code ──────────────── */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#e8f1fc] mb-4">
            Beyond Code
          </h2>
          <div className="rounded-xl border border-[#1c3a5e]/40 bg-[#0a1628]/50 p-6 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <Mountain size={24} className="text-[#38bdf8] mt-0.5 shrink-0" />
              <div className="text-[15px] leading-relaxed text-[#64839e]">
                <p>
                  When I&apos;m not writing code, you&apos;ll probably find me
                  in the mountains. Hiking and mountaineering help me clear my
                  mind, recharge, and come back to my work with fresh
                  perspective. There&apos;s a lot in common between climbing a
                  peak and tackling a tough engineering problem — both require
                  patience, planning, and persistence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────── Tech Stack ──────────────── */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#e8f1fc] mb-5">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Go",
              "TypeScript",
              "Next.js",
              "React",
              "RESTful API",
              "gRPC",
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Docker",
              "Docker Compose",
              "CI/CD",
              "Git",
              "Linux",
              "WebSocket",
              "Microservices",
              "System Design",
              "Cloud Native",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#1c3a5e]/50 bg-[#0a1628]/60 px-3 py-1.5 text-xs font-mono text-[#64839e] transition-colors hover:text-[#e8f1fc] hover:border-[#2563eb]/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ──────────────── Work History (brief) ──────────────── */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[#e8f1fc] mb-5">
            Work History
          </h2>
          <div className="space-y-4">
            {[
              {
                role: "Developer",
                company: "Ros",
                url: "https://rosbrand.ir",
                period: "Feb 2025 — Present",
              },
              {
                role: "Developer (Remote)",
                company: "Rafak",
                url: "https://pazireshdr.ir",
                period: "Nov 2024 — Present",
              },
              {
                role: "Golang Intern",
                company: "Rahkare Sanat Avapardaz",
                url: "https://rahkarsanat.ir",
                period: "Jul 2024 — Feb 2025",
              },
              {
                role: "Frontend Developer",
                company: "Esperlos",
                url: "https://esperlos.ir",
                period: "Sep 2023 — Mar 2024",
              },
            ].map((job) => (
              <div
                key={job.company}
                className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-[#1c3a5e]/30 bg-[#0a1628]/40 px-5 py-4 gap-2"
              >
                <div>
                  <span className="text-sm font-medium text-[#e8f1fc]">
                    {job.role}
                  </span>
                  <span className="text-[#64839e] text-sm"> · </span>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#60a5fa] hover:underline inline-flex items-center gap-1"
                  >
                    {job.company}
                    <ExternalLink size={11} />
                  </a>
                </div>
                <span className="text-xs text-[#64839e]">{job.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ──────────────── CTA ──────────────── */}
        <section className="mt-14 rounded-2xl border border-[#1c3a5e]/40 bg-[#0a1628]/40 backdrop-blur-sm p-8 text-center">
          <h3 className="text-lg font-semibold text-[#e8f1fc]">
            Let&apos;s build something together
          </h3>
          <p className="mt-2 text-sm text-[#64839e]">
            I&apos;m open to freelance projects, full-time opportunities, and
            interesting collaborations.
          </p>
          <a
            href="/#contact"
            className="mt-5 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-xl border border-white/10 bg-white/5 px-7 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 ml-3"
          >
            Download Resume
          </a>
        </section>
      </div>
    </main>
  );
}