"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { experiences, type Experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block font-mono text-xs text-secondary">
            {"experience"}
          </span>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Work{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              History
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp: Experience, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[14px] top-1 z-10 flex h-3 w-3 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                <span className="h-3 w-3 rounded-full border-2 border-primary bg-background shadow-glow" />
              </div>

              {/* Card */}
              <div
                className={`ml-10 w-full rounded-2xl border border-border/40 bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-glow md:ml-0 md:w-[calc(50%-2rem)] ${
                  idx % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                {/* Header */}
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-text">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-light transition-colors hover:text-secondary hover:underline"
                    >
                      {exp.company}
                    </a>
                  </div>
                  <div className="flex items-center gap-1 rounded-full border border-border/30 bg-background/50 px-3 py-1 text-xs text-muted">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}