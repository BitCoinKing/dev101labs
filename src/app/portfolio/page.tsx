"use client";
import { Globe2, Building2, Gavel, ShieldCheck, HeartHandshake, Sparkles, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

type Sector =
  | "Government"
  | "Non-Profit"
  | "Real Estate"
  | "Justice Tech"
  | "SaaS"
  | "Safety"
  | "Dating";

type PortfolioProject = {
  name: string;
  url: string;
  sector: Sector[];
  role: string;
  summary: string;
  status?: string;
  highlight?: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    name: "CourtVis – Supervised Visitation Platform",
    url: "https://www.courtvis.com/",
    sector: ["Justice Tech", "SaaS"],
    role: "Product strategy, UX, full-stack build, AI assistant (Visi)",
    summary:
      "End-to-end platform for supervised visitation, including scheduling, secure messaging, AI-powered summaries, and judge-friendly reports.",
    status: "Live",
    highlight: "Designed to become the standard infrastructure for court-ordered visits.",
  },
  {
    name: "COSVO – California Office of Supervised Visitation Oversight",
    url: "https://www.cosvo.org/",
    sector: ["Government", "Justice Tech"],
    role: "Concept, brand, site, and policy-oriented UX",
    summary:
      "Public-facing initiative site for a proposed California state agency overseeing supervised visitation standards and provider licensing.",
    status: "Live",
    highlight: "Built for clarity, credibility, and legislative stakeholders.",
  },
  {
    name: "CMACFAR – Congressional Civic Movement",
    url: "https://www.cmacfar.org/",
    sector: ["Non-Profit", "Government"],
    role: "Site architecture, messaging, and design system",
    summary:
      "Mission-driven site supporting a civic movement focused on congressional accountability, citizen education, and advocacy.",
    status: "Live",
    highlight: "Balances policy depth with accessible storytelling.",
  },
  {
    name: "RoyalGor – Photography & Cinema",
    url: "https://www.royalgor.com/",
    sector: ["Real Estate", "Non-Profit"],
    role: "Portfolio site, booking flows, media presentation",
    summary:
      "High-impact media portfolio for photography and cinema, showcasing weddings, events, and real estate storytelling.",
    status: "Live",
    highlight: "Optimized for visual impact and lead generation.",
  },
  {
    name: "Kalvira – Emergency Safety Platform",
    url: "https://www.kalvira.com/",
    sector: ["Safety", "SaaS"],
    role: "Brand concept, landing page UX, product narrative",
    summary:
      "Emergency safety app concept with modern, investor-ready landing page centered on calm, vigilance, and rapid response.",
    status: "Live",
    highlight: "Designed to impress both users and investors at first glance.",
  },
  {
    name: "Sparkwavv – Career Discovery Engine",
    url: "https://www.sparkwavv.com/",
    sector: ["SaaS"],
    role: "Advisor; review of decks, product story, and UX",
    summary:
      "Early-stage platform helping people discover aligned career paths using behavioral data, assessments, and smart recommendations.",
    status: "Live",
    highlight: "Supports investor-facing narrative and future SaaS build-out.",
  },
  {
    name: "Fearless Dating – AI-Guided Intentional Dating",
    url: "https://www.fearless.dating/",
    sector: ["Dating", "SaaS"],
    role: "Product strategy, brand concept, app & site direction",
    summary:
      "Next-gen dating experience where AI curates matches instead of endless swiping, emphasizing safety, intention, and real connection.",
    status: "Beta",
    highlight: "Positioned as a differentiated, AI-first dating platform.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="w-full py-10 sm:py-14 lg:py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Portfolio & Case Studies
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Selected digital products, platforms, and campaigns we've helped bring to life.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 lg:mt-10">
        <div className="grid gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => {
              const primarySector = project.sector[0];

              const sectorIcon = (() => {
                switch (primarySector) {
                  case "Government":
                    return Building2;
                  case "Real Estate":
                    return Globe2;
                  case "Justice Tech":
                    return Gavel;
                  case "Safety":
                    return ShieldCheck;
                  case "Dating":
                    return HeartHandshake;
                  default:
                    return Sparkles;
                }
              })();

              const Icon = sectorIcon;

              return (
                <motion.article
                  key={project.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-950/70 px-6 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8 shadow-[0_18px_60px_-30px_rgba(0,0,0,0.9)] hover:border-teal-400/70 hover:bg-slate-950 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 260, damping: 24 }}
                >
                  {/* Soft glow background */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 via-sky-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300" />

                  <div className="relative flex flex-col justify-between">
                    {/* Top: Category + Case */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-1 font-medium text-[11px] uppercase tracking-wide text-teal-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                        {primarySector} · {project.status || "Live"}
                      </span>
                      <span className="text-[11px] tracking-[0.18em] uppercase">Case 0{index + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h2 className="text-lg sm:text-xl font-semibold text-white">
                        {project.name}
                      </h2>

                      {/* Sector tags */}
                      <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                        {project.sector.map((sector) => (
                          <span key={sector} className="rounded-full border border-slate-700/80 px-2 py-0.5">
                            {sector}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">{project.summary}</p>

                      <p className="text-xs text-slate-400">
                        <span className="font-semibold text-slate-200">Our role:</span>{" "}
                        {project.role}
                      </p>

                      {project.highlight && (
                        <p className="text-[11px] text-teal-300/90 italic">
                          {project.highlight}
                        </p>
                      )}
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-5 pt-4 border-t border-slate-800/70 flex items-center justify-between">
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-50 hover:border-teal-400 hover:bg-slate-900/95 hover:text-teal-100 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
                      >
                        <span>View live project</span>
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-800">
                          <ArrowUpRight className="h-3 w-3" />
                        </span>
                      </Link>

                      <span className="text-[10px] text-slate-500">
                        Dev101Labs
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
    </main>
  );
};
