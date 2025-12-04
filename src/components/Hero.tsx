"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const STRATEGY_EMAIL_TO = "info@dev101labs.com";
const STRATEGY_EMAIL_SUBJECT = "Strategy Call Request – Dev101Labs Website";
const STRATEGY_EMAIL_BODY = `
Hi Dev101Labs team,

I'd like to schedule a strategy call to discuss working together.

Name:
Company / Organization:
Role / Title:
Website or Project URL (if any):

What do you need help with?
- Government RFQ/RFP & technology solutions
- SaaS / product build
- Real estate media & property websites
- Branding, UX, or campaign strategy
- Other (please describe)

Ideal timeline:
Approximate budget range:
Anything else we should know before the call?

Thank you!
`;

const strategyCallMailto = `mailto:${STRATEGY_EMAIL_TO}?subject=${encodeURIComponent(
  STRATEGY_EMAIL_SUBJECT
)}&body=${encodeURIComponent(STRATEGY_EMAIL_BODY)}`;

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
            We Build Technology, Media, and Strategy
            <br />
            That Win Contracts, Customers, and Listings.
          </h1>

          <p className="mt-6 max-w-xl text-sm text-neutral-300 md:text-base">
            Dev101Labs partners with government agencies, SaaS teams, and real estate
            professionals to design, build, and launch the systems, experiences, and
            campaigns that actually move the needle.
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
