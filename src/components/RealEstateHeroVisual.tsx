"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function RealEstateHeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/25 via-transparent to-cyan-500/25 blur-3xl" />

      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/80 shadow-[0_24px_60px_rgba(15,23,42,0.85)] backdrop-blur-md">
        {/* Fake browser chrome */}
        <div className="flex items-center justify-between border-b border-neutral-800/70 bg-neutral-950/90 px-4 py-2 text-[10px] text-neutral-500">
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
        <div className="relative h-64 w-full overflow-hidden bg-neutral-900 sm:h-72 lg:h-80">
          <motion.iframe
            src="https://72413th.vercel.app"
            title="724 13th Street Property Experience"
            loading="lazy"
            className="h-full w-full border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          {/* subtle top fade for readability */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-neutral-950/60 to-transparent" />
        </div>

        {/* Bottom stats + CTA */}
        <div className="flex flex-col gap-3 border-t border-neutral-800/80 bg-neutral-950/95 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Signature Listing Experience
            </p>
            <p className="text-xs text-neutral-400">
              Built to sell a $5.99M Manhattan Beach home with cinematic
              visuals, clear stats, and high-intent calls to action.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[11px] md:items-end">
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                High-end media
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Conversion-focused UX
              </span>
            </div>

            <Link
              href="https://72413th.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-3 py-1.5 font-semibold text-[11px] text-neutral-100 hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              View Live Property Demo
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
