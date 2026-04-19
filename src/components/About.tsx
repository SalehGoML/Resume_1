"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { personalInfo } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block font-mono text-xs text-secondary">
            {"about me"}
          </span>
          <h2 className="text-3xl font-bold text-text sm:text-4xl">
            Get to know{" "}
            <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
              me
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/40 bg-surface/50 p-8 backdrop-blur-sm"
          >
            <p className="mb-6 leading-relaxed text-muted">
              {personalInfo.bio}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted">
                <MapPin size={16} className="text-primary-light" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <Briefcase size={16} className="text-primary-light" />
                <span>{personalInfo.title}</span>
              </div>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Years Experience", value: "2+" },
              { label: "Technologies", value: "15+" },
              { label: "Projects Delivered", value: "5+" },
              { label: "Uptime Focused", value: "99.9%" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-2xl border border-border/40 bg-surface/50 p-6 text-center backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-glow"
              >
                <span className="mb-1 text-2xl font-bold text-primary-light">
                  {stat.value}
                </span>
                <span className="text-xs text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
