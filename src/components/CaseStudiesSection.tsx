"use client";

import { motion } from "framer-motion";
import { Landmark, CloudCog, Building2, ArrowRight } from "lucide-react";

type CaseStudy = {
  category: "Government" | "SaaS" | "Real Estate";
  title: string;
  summary: string;
  highlight: string;
  meta: string;
  icon: React.ElementType;
};

const caseStudies: CaseStudy[] = [
  {
    category: "Government",
    title: "City RFQ Support",
    summary:
      "Helped a client successfully navigate a complex city Request for Quotation, resulting in a new multi-year award.",
    highlight: "First time vendor · RFQ win",
    meta: "RFQ strategy · Compliance review · Submission support",
    icon: Landmark,
  },
  {
    category: "SaaS",
    title: "SaaS Platform Launch",
    summary:
      "Developed and launched a scalable SaaS platform, improving operational efficiency and market reach for a tech startup.",
    highlight: "Launch in 90 days",
    meta: "Product strategy · Full-stack build · GTM landing pages",
    icon: CloudCog,
  },
  {
    category: "Real Estate",
    title: "Luxury Property Campaign",
    summary:
      "Executed a high-impact digital marketing and media campaign for a luxury real estate development.",
    highlight: "Listing inquiries ↑ 180%",
    meta: "Custom site · Photo & video · Paid media funnel",
    icon: Building2,
  },
];

const categoryColors: Record<CaseStudy["category"], string> = {
  Government: "from-cyan-500/70 to-emerald-400/80",
  SaaS: "from-indigo-500/70 to-cyan-400/80",
  ["Real Estate"]: "from-emerald-500/70 to-lime-400/80",
};

export default function CaseStudiesSection() {
  return (
    <section className="bg-neutral-950 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400">
            Our Impact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Selected Case Studies
          </h2>
          <p className="max-w-2xl text-sm text-neutral-400 md:text-base">
            Examples of Dev101Labs winning government contracts, building SaaS platforms,
            and executing real estate marketing campaigns for key clients and agencies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            const gradient = categoryColors[item.category];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-neutral-800/80 bg-neutral-900/70 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.75)] backdrop-blur-md"
              >
                {/* Top gradient "thumbnail" */}
                <div className="relative mb-4 h-28 overflow-hidden rounded-2xl bg-neutral-900">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
                  />
                  {/* subtle diagonal shimmer */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_60%)] mix-blend-screen" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.2)_0%,transparent_40%,rgba(15,23,42,0.6)_100%)]" />
                  {/* Icon + category */}
                  <div className="relative flex h-full flex-col justify-between p-3 text-xs text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1 text-[10px] font-medium uppercase tracking-wide">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        {item.category}
                      </span>
                      <Icon className="h-4 w-4 text-white/80" />
                    </div>
                    <p className="max-w-[80%] text-[11px] leading-snug text-white/90">
                      {item.highlight}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400">{item.summary}</p>
                </div>

                {/* Meta & CTA */}
                <div className="mt-4 flex flex-col gap-3 text-xs text-neutral-500">
                  <p>{item.meta}</p>
                  <button className="inline-flex items-center justify-start text-[11px] font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                    View Case Study
                    <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Hover overlay effect */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
