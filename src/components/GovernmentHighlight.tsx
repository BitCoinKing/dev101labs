"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, FileBadge2, ClipboardList, Send, Trophy } from "lucide-react";

type Step = {
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const steps: Step[] = [
  {
    label: "Step 01",
    title: "Discover Opportunities",
    description:
      "Identify RFQs and RFPs that match your capabilities, budget, and timeline.",
    icon: Search,
  },
  {
    label: "Step 02",
    title: "Get Contract-Ready",
    description:
      "Complete SAM.gov, vendor onboarding, and required registrations without the guesswork.",
    icon: FileBadge2,
  },
  {
    label: "Step 03",
    title: "Build the Proposal",
    description:
      "Structure pricing, technical narratives, and required forms so you're fully compliant.",
    icon: ClipboardList,
  },
  {
    label: "Step 04",
    title: "Submit & Follow Through",
    description:
      "Package and submit on-time, respond to questions, and support post-submittal requests.",
    icon: Send,
  },
  {
    label: "Step 05",
    title: "Win & Scale",
    description:
      "Turn the first award into a repeatable system to grow your pipeline of government work.",
    icon: Trophy,
  },
];

export default function GovernmentHighlightSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        {/* LEFT: Animated playbook / stepper */}
        <div className="relative w-full lg:w-1/2">
          {/* Glow background */}
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/15 via-transparent to-emerald-500/10 blur-2xl" />
          <div className="relative rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-5 shadow-[0_0_40px_rgba(15,23,42,0.8)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">
                  Playbook
                </span>
                <span className="text-sm text-neutral-300">
                  Government Contract Journey
                </span>
              </div>
              <div className="rounded-full border border-neutral-700/70 px-3 py-1 text-[11px] text-neutral-400">
                From discovery to award
              </div>
            </div>

            {/* Stepper list */}
            <div className="relative mt-4">
              {/* Vertical line */}
              <div className="absolute left-4 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-400/50 via-neutral-700 to-emerald-400/40" />

              <div className="space-y-3 pl-9">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.07,
                        ease: "easeOut",
                      }}
                      className="group flex cursor-default items-start gap-3 rounded-2xl px-3 py-2.5 hover:bg-neutral-800/70"
                    >
                      {/* Node */}
                      <div className="relative mt-1 flex h-5 w-5 items-center justify-center">
                        <span className="absolute inline-flex h-5 w-5 rounded-full bg-cyan-500/20 transition group-hover:bg-cyan-400/25" />
                        <span className="inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center justify-between gap-2">
                          <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                            {step.label}
                          </p>
                          <Icon className="h-4 w-4 flex-shrink-0 text-neutral-500 group-hover:text-cyan-400" />
                        </div>
                        <h3 className="text-sm font-semibold text-neutral-50">
                          {step.title}
                        </h3>
                        <p className="text-[12px] leading-relaxed text-neutral-400">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-3 text-[11px] text-neutral-500">
              <span>Built for small businesses and growing teams.</span>
              <span className="rounded-full bg-neutral-800 px-2 py-1 text-[10px] uppercase tracking-wide text-cyan-300">
                RFQs · RFPs · Grants
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT: Existing text content */}
        <div className="w-full space-y-4 lg:w-1/2">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Navigate and Win in the Government Marketplace.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            Dev101Labs operates as a full-service technology provider to
            government agencies, bidding and winning contracts to deliver
            digital infrastructure, application development, and strategic
            solutions that agencies need for their mission-critical operations.
          </p>

          <div className="pt-2">
            <Link
              href="/government"
              className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              Learn more about Government Solutions
              <span className="ml-1 text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
