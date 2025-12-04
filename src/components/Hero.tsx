"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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

export default function Hero() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-3 py-1 text-xs text-neutral-400 backdrop-blur">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Technology, strategy, and creative for high-stakes work.</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            We Supply Government Agencies
            <span className="block">With Technology Solutions They Need.</span>
          </h1>

          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            Dev101Labs secures partnerships with government entities, bidding
            and winning contracts to deliver the technology infrastructure,
            digital transformations, and strategic solutions agencies require.
          </p>

          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-200"
            >
              Book a Strategy Call
              <span className="ml-2 text-lg">→</span>
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-medium text-neutral-100/90 hover:border-cyan-400 hover:text-cyan-200"
            >
              Explore Services
            </Link>
          </div>

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
        </motion.div>
      </div>
    </section>
  );
}
