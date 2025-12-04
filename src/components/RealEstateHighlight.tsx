"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Camera, Video, Drone, Orbit, Sparkles } from "lucide-react";

const mediaChips = [
  { label: "Pro Photo", icon: Camera },
  { label: "Cinematic Video", icon: Video },
  { label: "Drone Aerials", icon: Drone },
  { label: "Virtual Tours", icon: Orbit },
];

export default function RealEstateHighlightSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        {/* LEFT: Text content (your existing copy) */}
        <div className="w-full space-y-4 lg:w-1/2">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
            Elevate Your Property Listings with Cutting-Edge Media & Web
            Solutions.
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            We specialize in real estate technology and media solutions,
            supporting agents, brokerages, and property developers with custom
            high-performing real estate websites, IDX/MLS-integrated property
            pages, professional photography and cinematic videography, aerial
            drone footage, virtual tours, walkthroughs, and interview-style
            agent videos.
          </p>

          <div className="pt-2">
            <Link
              href="/real-estate"
              className="inline-flex items-center text-sm font-medium text-cyan-300 hover:text-cyan-200"
            >
              Discover Real Estate Services
              <span className="ml-1 text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT: Interactive media stack */}
        <div className="relative w-full lg:w-1/2">
          {/* Background glow */}
          <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/15 blur-2xl" />

          <div className="relative flex min-h-[260px] items-center justify-center rounded-3xl border border-neutral-800/80 bg-neutral-900/60 p-4 shadow-[0_0_40px_rgba(15,23,42,0.8)] backdrop-blur">
            {/* "Device" with property preview */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full max-w-sm rounded-2xl border border-neutral-700/80 bg-neutral-950/95 px-4 py-3 text-xs text-neutral-300"
            >
              {/* Top bar */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-semibold text-emerald-300">
                    RE
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-medium text-neutral-100">
                      Dev101 Property Page
                    </span>
                    <span className="text-[10px] text-neutral-500">
                      IDX / MLS integrated
                    </span>
                  </div>
                </div>
                <Sparkles className="h-4 w-4 text-emerald-300" />
              </div>

              {/* Property "card" layout */}
              <div className="flex gap-3">
                {/* Fake media preview block */}
                <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-neutral-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)]" />
                  <div className="absolute bottom-1 left-1 right-1 flex items-center justify-between text-[9px] text-neutral-50">
                    <span className="rounded-full bg-black/60 px-1.5 py-0.5">
                      4K Walkthrough
                    </span>
                    <span className="rounded-full bg-black/60 px-1.5 py-0.5">
                      Drone
                    </span>
                  </div>
                </div>

                {/* Listing meta */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-neutral-100">
                      921 Sunset Ridge · Modern Luxury Home
                    </p>
                    <p className="text-[10px] text-neutral-500">
                      Designed, filmed & marketed by Dev101Labs.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-400">
                    <span>3D tour · Drone · Agent video</span>
                    <span className="rounded-full bg-neutral-900 px-2 py-0.5 text-[9px] text-emerald-300">
                      Listing views ↑ 148%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating media chips */}
            {mediaChips.map((chip, index) => {
              const Icon = chip.icon;
              const basePositions = [
                "top-4 -left-2",
                "bottom-5 left-6",
                "top-6 -right-2",
                "bottom-3 right-4",
              ];

              return (
                <motion.div
                  key={chip.label}
                  className={`absolute ${basePositions[index]} rounded-2xl border border-neutral-700/80 bg-neutral-900/90 px-3 py-1.5 text-[11px] text-neutral-100 shadow-sm`}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  animate={{
                    y: [0, -4, 0],
                    transition: {
                      duration: 5 + index,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{ scale: 1.04 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.15 + index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex items-center gap-1.5">
                    <Icon className="h-3.5 w-3.5 text-emerald-300" />
                    <span>{chip.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
