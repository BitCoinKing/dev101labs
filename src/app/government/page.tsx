"use client";

import { CheckCircle, BriefcaseBusiness, Lightbulb, TrendingUp, FileText, ShieldCheck, Server, ArrowRight, Users, PhoneCall, Search, Sparkles, FileSignature, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const engagementSteps = [
  {
    id: 1,
    label: "Discovery Call",
    title: "Understand Your Goals & Constraints",
    description:
      "A focused strategy call to understand your agency, programs, and where technology or contracts are blocking progress.",
    icon: PhoneCall,
  },
  {
    id: 2,
    label: "Opportunity Scan",
    title: "Identify the Right Vehicles",
    description:
      "We analyze open RFIs, RFQs, and RFPs, as well as cooperative contracts, to find aligned opportunities and contracting paths.",
    icon: Search,
  },
  {
    id: 3,
    label: "Solution Design",
    title: "Design the Technical & Delivery Plan",
    description:
      "We map requirements to architecture, delivery plan, and teaming partners so your proposal is technically sound and executable.",
    icon: Sparkles,
  },
  {
    id: 4,
    label: "Proposal & Submission",
    title: "Build a Compliant, Competitive Response",
    description:
      "We support narrative writing, compliance matrices, pricing structure, and submission packaging to maximize your evaluation score.",
    icon: FileSignature,
  },
  {
    id: 5,
    label: "Award & Support",
    title: "Transition Into Delivery & Growth",
    description:
      "Post-award, we assist with kickoff, reporting, and scaling your contract into a repeatable growth engine across new awards.",
    icon: Handshake,
  },
];

export default function GovernmentPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.12),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),transparent_60%)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-16 pt-20 md:flex-row md:items-center md:justify-between md:pt-24">
          {/* LEFT: Gov Engagement visual */}
          <div className="relative w-full max-w-md">
            {/* glow background */}
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.4),transparent_55%)] blur-3xl opacity-40" />

            <div className="relative rounded-[2rem] border border-emerald-500/25 bg-neutral-950/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                    Engagement Map
                  </p>
                  <p className="mt-1 text-sm text-neutral-200">
                    Strategy → Compliance → Delivery
                  </p>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
                  Public Sector
                </div>
              </div>

              {/* three-step flow */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-neutral-900/80 p-3 ring-1 ring-emerald-500/40">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      RFQ / RFP Strategy
                    </p>
                    <p className="text-[11px] text-neutral-300">
                      Positioning, story, and structure so proposals stand out in
                      competitive rooms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-neutral-900/60 p-3 ring-1 ring-neutral-800">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Registration & Compliance
                    </p>
                    <p className="text-[11px] text-neutral-300">
                      SAM.gov, local portals, and audit-ready documentation for
                      federal, state, and city work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-neutral-900/60 p-3 ring-1 ring-neutral-800">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                    <Server className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      Technology Delivery
                    </p>
                    <p className="text-[11px] text-neutral-300">
                      Full-stack builds, integrations, and support aligned with
                      awarded contracts.
                    </p>
                  </div>
                </div>
              </div>

              {/* small footer stats */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-800 pt-3 text-[11px] text-neutral-400">
                <span>Ideal for agencies, vendors, and consultants.</span>
                <span className="rounded-full bg-neutral-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
                  RFQ · RFP · SAM.gov
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: keep existing heading, copy, and CTA */}
          <div className="max-w-xl space-y-5">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Government Solutions
            </h1>

            <h2 className="text-xl font-semibold sm:text-2xl">
              Government Technology Solutions Provider
            </h2>

            <p className="text-sm text-neutral-300 md:text-base">
              Dev101Labs bids and wins federal, state, and local government
              contracts to deliver the digital infrastructure and applications
              that agencies need. From web development to data systems, we
              build what government needs.
            </p>

            <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-lg shadow-white/10 transition hover:bg-neutral-200">
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Government Technology Delivery */}
      <section className="border-t border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16),transparent_55%),_linear-gradient(to_bottom,_#020617,_#020617)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
                Delivery Framework
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                Government Technology Delivery
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-[15px]">
                A structured, end-to-end process designed to move you from{" "}
                <span className="text-emerald-300">first RFQ</span> to{" "}
                <span className="text-emerald-300">ongoing contract execution</span>{" "}
                with clarity, compliance, and confidence.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-100">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300" />
              Built for federal, state, and local programs
            </div>
          </div>

          {/* Roadmap Grid */}
          <div className="relative">
            {/* connecting line on desktop */}
            <div className="pointer-events-none absolute left-[11%] right-[11%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-emerald-500/0 via-emerald-500/25 to-emerald-500/0 md:block" />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {/* Phase 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_22px_60px_rgba(16,185,129,0.35)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    <span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-xs">
                      1
                    </span>
                    <span>Discovery & Proposal</span>
                  </div>
                  <FileText className="h-5 w-5 text-emerald-300/80" />
                </div>
                <p className="text-sm font-medium text-white">
                  RFQ / RFP Support
                </p>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Comprehensive assistance with proposal development, bid writing,
                  and strategic positioning to maximize your success rate in the
                  evaluation room.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_22px_60px_rgba(16,185,129,0.35)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    <span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-xs">
                      2
                    </span>
                    <span>Registration & Compliance</span>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-emerald-300/80" />
                </div>
                <p className="text-sm font-medium text-white">
                  SAM.gov & Vendor Portals
                </p>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Guidance through SAM.gov registration, local vendor portals, and
                  ensuring adherence to all federal and state compliance
                  requirements.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_22px_60px_rgba(16,185,129,0.35)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    <span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-xs">
                      3
                    </span>
                    <span>Win-Room Strategy</span>
                  </div>
                  <Users className="h-5 w-5 text-emerald-300/80" />
                </div>
                <p className="text-sm font-medium text-white">
                  Workshops & Coaching
                </p>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Collaborative workshops to develop winning strategies, identify key
                  differentiators, and prepare for competitive bids and oral
                  presentations.
                </p>
              </div>

              {/* Phase 4 */}
              <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/80 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-transform duration-200 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_22px_60px_rgba(16,185,129,0.35)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    <span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-300 flex items-center justify-center text-xs">
                      4
                    </span>
                    <span>Growth & Expansion</span>
                  </div>
                  <TrendingUp className="h-5 w-5 text-emerald-300/80" />
                </div>
                <p className="text-sm font-medium text-white">
                  Acquisition Strategy
                </p>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  Develop long-term strategies for market entry, growth, and scaling
                  your government business with confidence and repeatable processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Process Timeline */}
      <section className="border-t border-neutral-900 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),transparent_55%),_linear-gradient(to_bottom,_#020617,_#020617)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
                How We Work Together
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
                Our Engagement Process
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-neutral-300 md:text-[15px]">
                A clear, repeatable path from first conversation to{" "}
                <span className="text-emerald-300">contract award</span> and{" "}
                <span className="text-emerald-300">long-term partnership</span>. Each
                stage is designed to reduce risk, increase clarity, and keep
                stakeholders aligned.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-100">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              From first call to funded program
            </div>
          </div>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* glowing line behind steps */}
              <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-emerald-500/0 via-emerald-400/40 to-emerald-500/0" />

              <ol className="relative z-10 grid grid-cols-5 gap-5">
                {engagementSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.li
                      key={step.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: index * 0.08, duration: 0.35, ease: "easeOut" }}
                      className="group flex flex-col items-center text-center"
                    >
                      {/* Node + icon */}
                      <div className="mb-4 flex flex-col items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10 text-[12px] font-semibold text-emerald-100 shadow-[0_0_25px_rgba(16,185,129,0.6)]">
                          {step.id}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900/80 shadow-[0_14px_30px_rgba(0,0,0,0.6)] ring-1 ring-neutral-700/80 group-hover:ring-emerald-400/80 group-hover:bg-neutral-900 transition-colors">
                          <Icon className="h-5 w-5 text-emerald-200" />
                        </div>
                      </div>

                      {/* Copy */}
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200/80">
                        {step.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-white">
                        {step.title}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-300">
                        {step.description}
                      </p>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden">
            <ol className="space-y-5">
              {engagementSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.li
                    key={step.id}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.06, duration: 0.3, ease: "easeOut" }}
                    className="relative flex gap-4 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
                  >
                    {/* left rail */}
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10 text-[11px] font-semibold text-emerald-100">
                        {step.id}
                      </div>
                      {index !== engagementSteps.length - 1 && (
                        <div className="mt-1 h-full w-px bg-gradient-to-b from-emerald-400/50 to-transparent" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 inline-flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900/90 ring-1 ring-neutral-700/80">
                          <Icon className="h-4 w-4 text-emerald-200" />
                        </div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200/80">
                          {step.label}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-white">{step.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-electricCyan to-blue-400 text-darkNavy py-16 px-6 text-center rounded-2xl shadow-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
            Ready to partner on government technology needs?
          </h2>
          <Link href="/contact" className="bg-darkNavy text-electricCyan px-10 py-4 rounded-full font-semibold text-xl hover:bg-offWhite transition-colors inline-flex items-center justify-center">
            Discuss Government Contracts <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
