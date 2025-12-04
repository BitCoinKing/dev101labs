"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function RealEstateShowcaseSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400">
              Featured Work
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              724 13th Street — Luxury Listing Experience
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400 md:text-base">
              A high-end, story-driven property site for a Manhattan Beach
              residence. Built to feel like a digital brochure: immersive
              visuals, clear details, and conversion-focused calls to action for
              private showings and gallery views.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-neutral-400 md:mt-0 md:text-xs">
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-700/80 bg-neutral-900/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Custom property site
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-neutral-700/80 bg-neutral-900/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Conversion-focused layout
            </span>
          </div>
        </div>

        {/* Main card */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/70 p-4 shadow-[0_22px_55px_rgba(15,23,42,0.85)] backdrop-blur">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left: "Browser frame" with live preview */}
            <div className="relative w-full lg:w-3/5">
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/90">
                {/* Fake browser chrome */}
                <div className="flex items-center justify-between border-b border-neutral-800/80 bg-neutral-950/90 px-3 py-2 text-[10px] text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="truncate text-[10px] text-neutral-400">
                    https://72413th.vercel.app
                  </span>
                  <span className="w-8" />
                </div>

                {/* Live iframe preview */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-900 sm:h-80 lg:h-96">
                  <motion.iframe
                    src="https://72413th.vercel.app"
                    title="724 13th Street Live Preview"
                    loading="lazy"
                    className="h-full w-full border-0"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay fade for readability on top edge */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-neutral-950/50 to-transparent" />
                </div>
              </div>
            </div>

            {/* Right: Details + bullets + CTAs */}
            <div className="flex w-full flex-col justify-between lg:w-2/5">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">
                  Designed for high-intent buyers.
                </h3>
                <p className="text-sm text-neutral-400">
                  The page focuses on the essentials buyers care about:
                  location, price, lifestyle, and a clear path to request a
                  private showing or view the full gallery. Visual hierarchy,
                  microcopy, and spacing are all tuned for readability and
                  trust.
                </p>

                <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                  <li>• Hero layout with clear pricing and property stats</li>
                  <li>• Tour scheduling and gallery CTAs above the fold</li>
                  <li>• Responsive design optimized for mobile buyers</li>
                  <li>• Brandable framework we can customize for any listing</li>
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="https://72413th.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-emerald-400 transition"
                >
                  View Live Demo
                  <ExternalLink className="ml-1.5 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-100 hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  Build a Similar Experience
                  <span className="ml-1 text-lg">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
