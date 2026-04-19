"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/resume";

const categoryColors: Record<string, string> = {
  Languages: "from-blue-500 to-cyan-400",
  Infrastructure: "from-violet-500 to-purple-400",
  Backend: "from-emerald-500 to-green-400",
  Databases: "from-orange-500 to-yellow-400",
  Monitoring: "from-pink-500 to-rose-400",
  Tools: "from-sky-500 to-indigo-400",
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="mb-2 inline-block font-mono text-xs text-secondary">
            {"skills & tools"}
          </span>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Tech{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
        </motion.div>

        {/* Skill categories */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group rounded-2xl border border-border/40 bg-surface/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-glow h-full"
            >
              {/* Category header */}
              <div className="mb-5 flex items-center gap-3">
                <div
                  className={`h-8 w-1 rounded-full bg-gradient-to-b ${
                    categoryColors[category.category] || "from-primary to-secondary"
                  }`}
                />
                <h3 className="text-sm font-semibold text-text">
                  {category.category}
                </h3>
              </div>

              {/* Skill items */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border/30 bg-background/60 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-primary/40 hover:text-primary-light"
                  >
                    {skill}
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
