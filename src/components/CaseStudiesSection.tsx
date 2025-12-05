"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Landmark, CloudCog, Building2, ArrowRight } from "lucide-react";
import { InfoModal } from "./ui/InfoModal";

type CaseStudy = {
  id: string;
  category: "Government" | "SaaS" | "Real Estate";
  title: string;
  summary: string;
  highlight: string;
  meta: string;
  icon: React.ElementType;
  subtitle: string;
  metrics: string[];
  challenge: string;
  approach: string[];
  results: string[];
  tag?: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "city-rfq",
    category: "Government",
    title: "City RFQ Support",
    summary:
      "Helped a client successfully navigate a complex city Request for Quotation, resulting in a new multi-year award.",
    highlight: "First time vendor · RFQ win",
    meta: "RFQ strategy · Compliance review · Submission support",
    icon: Landmark,
    subtitle: "From first-time vendor to multi-year award.",
    metrics: [
      "Multi-year RFQ award",
      "Zero compliance findings",
      "Vendor now pre-qualified for future bids",
    ],
    challenge:
      "A city department released an RFQ for a complex technology project. Our client was a first-time public vendor, with no internal bid team and no experience navigating government RFQ language, compliance, or submission portals.",
    approach: [
      "Clarified the scope, eligibility, and evaluation criteria and translated RFQ requirements into a clear work plan.",
      "Ran working sessions with the client's subject-matter experts to extract the right technical and operational details.",
      "Drafted a persuasive, compliant response including past experience, delivery approach, schedule, and risk mitigation.",
      "Built a compliance checklist to ensure every mandatory form, attachment, and signature was complete before submission.",
    ],
    results: [
                  "Client was shortlisted and later awarded a **multi-year contract** as a new city vendor.",
      "Submission passed compliance review on the first pass – no missing forms, signatures, or qualifications.",
      "The RFQ response is now a reusable template for future technology bids, saving the client time and legal cost.",
    ],
  },
  {
    id: "saas-launch",
    category: "SaaS",
    title: "SaaS Platform Launch",
    summary:
      "Developed and launched a scalable SaaS platform, improving operational efficiency and market reach for a tech startup.",
    highlight: "Launch in 90 days",
    meta: "Product strategy · Full-stack build · GTM landing pages",
    icon: CloudCog,
    subtitle: "From concept to live platform in ~90 days.",
    metrics: [
      "MVP launched in ~90 days",
      "Founders closed first paid pilot quickly after launch",
      "Architecture ready for the next round of investors",
    ],
    challenge:
      "A startup needed to go from idea to a working SaaS platform quickly. They had a strong concept but no product design, no architecture, and limited engineering resources. Investor conversations were stalled without something real to demo.",
    approach: [
      "Co-designed the product vision, feature roadmap, and user journeys with the founding team.",
      "Defined a lean, investment-ready MVP scope that solved one high-value problem extremely well.",
      "Designed the UX/UI and built the frontend in Next.js/React, backed by a secure, scalable API layer.",
      "Implemented authentication, roles, basic analytics, and an admin panel to support early customers.",
    ],
    results: [
      "Launched a polished **MVP platform in about 90 days**, ready for demos and pilot customers.",
      "Founders secured early pilot deals and re-engaged investor conversations with a real, working product.",
      "Codebase and architecture are structured for future growth – not a throwaway prototype.",
    ],
  },
  {
    id: "luxury-property",
    category: "Real Estate",
    title: "Luxury Property Campaign",
    summary:
      "Executed a high-impact digital marketing and media campaign for a luxury real estate development.",
    highlight: "Listing inquiries ↑ 180%",
    meta: "Custom site · Photo & video · Paid media funnel",
    icon: Building2,
    subtitle: "Driving qualified inquiries for a high-end listing.",
    metrics: [
      "Listing inquiries ↑ 180% during the campaign",
      "High-intent leads (private tour requests) increased significantly",
      "Broker gained a reusable marketing system for future listings",
    ],
    challenge:
      "A luxury real estate development needed more qualified buyers viewing the property. The existing listing was lost in crowded portals, and the marketing relied heavily on static photos and generic descriptions.",
    approach: [
      "Designed a bespoke property website with cinematic visuals, lifestyle-focused copy, and clear CTAs.",
      "Produced high-impact media: photo, video, and drone footage to showcase the property's best angles and story.",
      "Set up targeted campaigns and retargeting audiences to focus on high-intent buyer segments.",
      "Implemented analytics and event tracking to measure listing engagement and tour requests.",
    ],
    results: [
      "Drove a **~180% increase in qualified listing inquiries** over the campaign period.",
      "Increased the number of private tour requests and serious buyer conversations for the listing agent.",
      "The broker now has a repeatable playbook for future high-value listings: site, media, and funnel.",
    ],
  },
];

const categoryColors: Record<CaseStudy["category"], string> = {
  Government: "from-cyan-500/70 to-emerald-400/80",
  SaaS: "from-indigo-500/70 to-cyan-400/80",
  ["Real Estate"]: "from-emerald-500/70 to-lime-400/80",
};

export default function CaseStudiesSection() {
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);

  const activeCase = caseStudies.find(cs => cs.id === activeCaseId) ?? null;

  return (
    <>
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
                    <button
                      type="button"
                      onClick={() => setActiveCaseId(item.id)}
                      className="inline-flex items-center justify-start text-[11px] font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                    >
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

      {/* Modal renderer */}
      {activeCase && (
        <InfoModal
          open={!!activeCase}
          onClose={() => setActiveCaseId(null)}
          tag={`${activeCase.category} · ${activeCase.tag}`}
          title={activeCase.title}
          subtitle={activeCase.subtitle}
          content={
            <div className="space-y-5">
              {/* Metrics / quick stats */}
              {activeCase.metrics && (
                <div className="grid gap-3 md:grid-cols-3">
                  {activeCase.metrics.map((m) => (
                    <div
                      key={m}
                      className="rounded-2xl bg-white/5 px-3 py-2 text-xs md:text-[13px] text-slate-100/90 border border-white/5"
                    >
                      {m}
                    </div>
                  ))}
                </div>
              )}

              {/* Challenge */}
              <section className="space-y-1.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Challenge
                </h3>
                <p>{activeCase.challenge}</p>
              </section>

              {/* Approach */}
              <section className="space-y-1.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Our Approach
                </h3>
                <ul className="list-disc space-y-1.5 pl-5">
                  {activeCase.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Results */}
              <section className="space-y-1.5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Results
                </h3>
                <ul className="list-disc space-y-1.5 pl-5">
                  {activeCase.results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* CTA */}
              <section className="pt-2 border-t border-white/5 mt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <p className="text-xs md:text-sm text-slate-300/85 max-w-md">
                  Want to design a similar win for your agency, SaaS, or property? 
                  Dev101Labs blends government expertise, product builds, and media to help you win contracts, customers, and listings.
                </p>
                <a
                  href="mailto:info@dev101labs.com?subject=Case%20Study%20Consultation%20-%20Dev101Labs&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AI%27d%20like%20to%20discuss%20a%20project%20similar%20to%20the%20case%20studies%20on%20your%20site.%0D%0A%0D%0AHere%27s%20a%20quick%20overview%20of%20what%20I%27m%20working%20on%3A%0D%0A%0D%0A-%20Organization%3A%0D%0A-%20Project%20type%20(government%20bid%2C%20SaaS%2C%20real%20estate%2C%20other)%3A%0D%0A-%20Timeline%3A%0D%0A-%20Budget%20range%3A%0D%0A%0D%0AHow%20did%20you%20hear%20about%20Dev101Labs%3F%0D%0A%5BReferral%20or%20source%5D%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
                >
                  Book a Strategy Call
                </a>
              </section>
            </div>
          }
        />
      )}
    </>
  );
}
