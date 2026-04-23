"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { strategyCallMailto } from "@/lib/contact";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AUDIENCES = [
  {
    id: "gov",
    label: "Government agencies & public sector teams",
    tag: "Government Contract Facilitation",
  },
  {
    id: "saas",
    label: "SaaS founders & product teams",
    tag: "Full-Stack Platforms & Apps",
  },
  {
    id: "re",
    label: "Real estate brands & top producers",
    tag: "Media, Websites & Campaigns",
  },
];

const ENGAGEMENT_HIGHLIGHTS = [
  {
    title: "Government bids",
    description: "Procurement support, compliance guidance, and delivery planning.",
  },
  {
    title: "Product launches",
    description: "Modern websites, apps, and automation for fast-moving teams.",
  },
  {
    title: "Listing campaigns",
    description: "Media, funnels, and polished property experiences that convert.",
  },
] as const;

const LATEST_PROJECT = {
  name: "ClaimDrop",
  href: "https://claimdrop-phi.vercel.app/",
  label: "Latest Project",
  event: "USC Hackathon Demo",
  description:
    "Send SOL with a shareable claim link so anyone can test the flow without starting with wallet friction.",
} as const;

export default function Hero() {
  const [audienceIndex, setAudienceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAudienceIndex((prev) => (prev + 1) % AUDIENCES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      {/* Animated background layer */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft radial glow */}
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Subtle gradient beams */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent" />

        {/* Animated orbs */}
        <motion.div
          className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-emerald-500/15 blur-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 top-16 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Faint grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.14),_transparent_60%)] opacity-60 mix-blend-screen" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:flex-row lg:items-center lg:gap-12 lg:px-8 lg:pb-28">
        {/* Left: Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl space-y-6 text-center lg:text-left"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase text-emerald-300">
            Technology, strategy, and media for high-stakes work
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.05]">
            We Build the Systems and Campaigns
            <br />
            That Win Contracts, Customers, and Listings.
          </h1>

          <p className="mt-6 max-w-xl text-sm text-neutral-300 md:text-base">
            Dev101Labs partners with government agencies, SaaS teams, and real estate
            professionals to scope, build, and launch the digital systems, media, and
            strategy work that creates real momentum.
          </p>

          <div className="mt-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-neutral-700/80 bg-neutral-900/80 px-4 py-2 text-xs text-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.7)] backdrop-blur">
              <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Who we build for
              </span>

              <AnimatePresence mode="wait">
                <motion.span
                  key={AUDIENCES[audienceIndex].id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xs sm:text-sm text-neutral-100"
                >
                  {AUDIENCES[audienceIndex].label}
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="mt-2 text-[11px] text-neutral-400">
              {AUDIENCES[audienceIndex].tag}
            </p>
          </div>

          <motion.a
            href={LATEST_PROJECT.href}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="group relative overflow-hidden rounded-[28px] border border-sky-400/20 bg-gradient-to-r from-slate-950 via-[#101a32] to-[#13274b] p-[1px] text-left shadow-[0_24px_70px_rgba(37,99,235,0.18)] transition"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.2),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.18),_transparent_40%)]" />
            <div className="relative flex flex-col gap-4 rounded-[27px] bg-slate-950/90 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                    {LATEST_PROJECT.label}
                  </span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                    {LATEST_PROJECT.event}
                  </span>
                </div>

                <div className="mt-3">
                  <p className="text-xl font-semibold text-white sm:text-2xl">
                    Demo {LATEST_PROJECT.name}
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-slate-300">
                    {LATEST_PROJECT.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start rounded-full border border-sky-300/20 bg-white/8 px-4 py-2 text-sm font-medium text-white transition group-hover:border-sky-300/40 group-hover:bg-white/12 sm:self-center">
                <span>Open ClaimDrop</span>
                <ArrowUpRight className="h-4 w-4 text-sky-200" />
              </div>
            </div>
          </motion.a>

          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={strategyCallMailto}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 shadow-lg hover:bg-slate-100 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 transition"
            >
              Book a Strategy Call
              <span className="ml-2 text-lg">→</span>
            </a>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-100/90 hover:border-cyan-400 hover:text-cyan-200"
            >
              Explore Services
            </Link>
          </div>

          <p className="text-xs text-neutral-400">
            Share your goals, timeline, and budget and we will point you to the
            fastest sensible next step.
          </p>

          {/* Small "credibility" stats row */}
          <div className="mt-5 flex flex-col items-center gap-4 text-xs text-neutral-500 sm:flex-row sm:justify-start sm:text-[13px]">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>Government RFQ & RFP facilitation</span>
            </div>
            <span className="hidden h-px w-6 bg-neutral-800 sm:inline-block" />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Full-stack builds, marketing, and real estate media</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Interactive "pill" stack / radar */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mt-10 w-full max-w-md lg:mt-0 lg:flex-1"
        >
          <div className="relative mx-auto flex h-72 max-w-sm items-center justify-center rounded-3xl border border-neutral-800/80 bg-neutral-950/70 p-4 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur">
            {/* Rotating ring */}
            <motion.div
              className="absolute h-56 w-56 rounded-full border border-dashed border-cyan-500/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* Pulsing center node */}
            <motion.div
              className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-400 shadow-[0_0_35px_rgba(45,212,191,0.6)]"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wide text-neutral-900">
                Dev101
              </span>
            </motion.div>

            {/* Floating pills */}
            <motion.div
              className="absolute -top-3 left-6 rounded-2xl border border-neutral-700/80 bg-neutral-900/90 px-3 py-2 text-xs text-neutral-100 shadow-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              RFQ & RFP Strategy
            </motion.div>
            <motion.div
              className="absolute -bottom-3 right-4 rounded-2xl border border-neutral-700/80 bg-neutral-900/90 px-3 py-2 text-xs text-neutral-100 shadow-sm"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              Full-Stack Builds
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-10 -translate-x-1/2 rounded-2xl border border-neutral-700/80 bg-neutral-900/90 px-3 py-2 text-xs text-neutral-100 shadow-sm"
              animate={{ x: [-4, 4, -4] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              Growth & Real Estate Media
            </motion.div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {ENGAGEMENT_HIGHLIGHTS.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-neutral-800/80 bg-neutral-900/70 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.45)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {highlight.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
