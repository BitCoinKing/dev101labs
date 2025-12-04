"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";

type Reason = {
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const reasons: Reason[] = [
  {
    label: "Strategy",
    title: "Strategy-First Approach",
    description:
      "Every solution begins with a deep understanding of your objectives, constraints, and where you want to go next.",
    icon: Target,
  },
  {
    label: "Compliance",
    title: "Compliance-Ready Solutions",
    description:
      "Expert guidance ensures your projects and proposals meet regulatory, security, and industry standards.",
    icon: ShieldCheck,
  },
  {
    label: "Execution",
    title: "Full-Stack Execution",
    description:
      "From concept to deployment, we architect, design, build, and iterate across your entire digital stack.",
    icon: Workflow,
  },
  {
    label: "Synergy",
    title: "Creative + Technical Synergy",
    description:
      "Design, engineering, and growth teams work together so your brand, product, and funnel move in the same direction.",
    icon: Sparkles,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Why Choose Dev101Labs?
          </h2>
          <p className="max-w-2xl text-sm text-neutral-400 md:text-base">
            Strategy, compliance, engineering, and creative all under one roof,
            designed to deliver high-stakes government contracts and grow brands with confidence.
          </p>
        </div>

        {/* Trust micro-row */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-500">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/70 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            RFQs, SaaS builds, & real estate campaigns in one team.
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/70 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Built for founders, agencies, and growing teams.
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.25, delay: index * 0.08 }}
                className="group relative h-full"
              >
                {/* Gradient border wrapper */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/25 via-neutral-800 to-neutral-900 p-[1px]">
                  <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                        {reason.label}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base md:text-lg font-semibold text-white">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {reason.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-cyan-300">
                      <span>How this shows up in your projects</span>
                      <span className="transition-transform duration-150 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
