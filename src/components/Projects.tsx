"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block font-mono text-xs text-secondary">
            {"projects"}
          </span>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            My{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-2xl border border-border/40 bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-text">
                  {project.title}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition-colors hover:text-primary-light"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border/30 bg-background/60 px-3 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
