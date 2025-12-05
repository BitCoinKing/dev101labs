"use client";

import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Workflow,
  Sparkles,
} from "lucide-react";
import { useServiceModal } from "../hooks/useServiceModal";
import { ServiceModal } from "./ui/ServiceModal";

type Reason = {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const reasons: Reason[] = [
  {
    id: "why-strategy",
    label: "Strategy",
    title: "Strategy-First Approach",
    description:
      "Every solution begins with a deep understanding of your objectives, constraints, and where you want to go next.",
    icon: Target,
  },
  {
    id: "why-compliance",
    label: "Compliance",
    title: "Compliance-Ready Solutions",
    description:
      "Expert guidance ensures your projects and proposals meet regulatory, security, and industry standards.",
    icon: ShieldCheck,
  },
  {
    id: "why-execution",
    label: "Execution",
    title: "Full-Stack Execution",
    description:
      "From concept to deployment, we architect, design, build, and iterate across your entire digital stack.",
    icon: Workflow,
  },
  {
    id: "why-synergy",
    label: "Synergy",
    title: "Creative + Technical Synergy",
    description:
      "Design, engineering, and growth teams work together so your brand, product, and funnel move in the same direction.",
    icon: Sparkles,
  },
];

export default function WhyChooseSection() {
  const { active, open, close } = useServiceModal();

  return (
    <>
      <section className="bg-neutral-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-400">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Why Choose Dev101Labs?
            </h2>
            <p className="max-w-2xl text-sm text-neutral-400 md:text-base">
              Strategy, compliance, engineering, and creative all under one roof,
              designed to deliver high-stakes government contracts and grow brands with confidence.
            </p>
          </div>

          {/* Trust micro-row */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-500">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              RFQs, SaaS builds, & real estate campaigns in one team.
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Built for founders, agencies, and growing teams.
            </span>
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.25, delay: index * 0.08 }}
                  className="group relative h-full"
                >
                  {/* Gradient border wrapper */}
                  <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/25 via-neutral-800 to-neutral-900 p-[1px]">
                    <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                          {reason.label}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-base md:text-lg font-semibold text-white">
                          {reason.title}
                        </h3>
                        <p className="text-sm text-neutral-400">
                          {reason.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => open(reason.id as any)}
                        className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                      >
                        <span>How this shows up in your projects</span>
                        <span className="transition-transform duration-150 group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal renderer */}
      <ServiceModalRoot active={active} onClose={close} />
    </>
  );
}

type ServiceModalRootProps = {
  active: string | null;
  onClose: () => void;
};

const ServiceModalRoot = ({ active, onClose }: ServiceModalRootProps) => {
  if (!active) return null;

  switch (active) {
    case "why-strategy":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Strategy-First Approach"
          subtitle="Every engagement starts with clarity, not code."
        >
          <p>
            Every solution begins with a deep understanding of your objectives, constraints, audience, and decision-makers. We don't jump into implementation until we have a clear map of where you're going and why you're going there.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Discovery sessions</span> to understand your goals, constraints, audience, and decision-makers.
            </li>
            <li>
              <span className="font-semibold">Asset audit</span> of your current sites, funnels, proposals, and media to find quick wins and hidden risks.
            </li>
            <li>
              <span className="font-semibold">Clear roadmap</span> that connects strategy → implementation → measurable outcomes.
            </li>
            <li>
              <span className="font-semibold">Prioritized backlog</span> of "high-impact first" work, instead of random feature requests.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            <a
              href="mailto:info@dev101labs.com?subject=Strategy-First%20Discovery%20Call&body=Hi%20Dev101Labs%2C%0D%0A%0D%0ATell%20us%20about%20your%20project%20goals%2C%20timelines%2C%20and%20what%20a%20win%20would%20look%20like%20for%20you.%0D%0A%0D%0AOrganization%3A%0D%0AProject%20type%3A%0D%0ACurrent%20challenges%3A%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
            >
              Book Discovery Call
            </a>
          </p>
        </ServiceModal>
      );

    case "why-compliance":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Compliance-Ready Solutions"
          subtitle="Bid, build, and launch with regulators already in mind."
        >
          <p>
            Government agencies, enterprises, and institutional clients don't accept "we'll get there later" as an answer. We design compliance into every layer of what we build, so your solution is ready for procurement, audit, and scale from day one.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Regulatory guidance</span> for aligning proposals and platforms with government and enterprise requirements.
            </li>
            <li>
              <span className="font-semibold">Procurement support</span> with registrations, vendor portals, and documentation.
            </li>
            <li>
              <span className="font-semibold">Secure architecture</span> that meets accessibility, privacy, and security reviews.
            </li>
            <li>
              <span className="font-semibold">Reusable checklists</span> and documentation for your team's future bids and builds.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            <a
              href="mailto:info@dev101labs.com?subject=Compliance-Ready%20Project&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AShare%20what%20agencies%20or%20enterprises%20you%27re%20working%20with%20and%20where%20compliance%20feels%20unclear.%0D%0A%0D%0AOrganization%3A%0D%0ACompliance%20requirements%3A%0D%0ASecurity%20needs%3A%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
            >
              Talk Compliance & Readiness
            </a>
          </p>
        </ServiceModal>
      );

    case "why-execution":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Full-Stack Execution"
          subtitle="From idea to launch with one accountable team."
        >
          <p>
            No more "developers disappeared" or "your dev team vs. their marketing team" conflicts. One consolidated partner manages the entire technical stack, from discovery to deployment, so you get clear accountability and smooth delivery.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Technical architecture</span> that supports today’s MVP and tomorrow’s growth.
            </li>
            <li>
              <span className="font-semibold">Unified team</span> handling UX, frontend, backend, and integrations.
            </li>
            <li>
              <span className="font-semibold">Iterative delivery</span> with visible milestones and regular updates.
            </li>
            <li>
              <span className="font-semibold">Launch support</span> and training for seamless operation post-launch.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            <a
              href="mailto:info@dev101labs.com?subject=Full-Stack%20Execution%20Plan&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AWhat%20are%20you%20trying%20to%20ship%2C%20and%20by%20when%3F%0D%0A%0D%0AFeatures%20needed%3A%0D%0AExisting%20stack%3A%0D%0ATimeline%3A%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
            >
              Plan Your Build
            </a>
          </p>
        </ServiceModal>
      );

    case "why-synergy":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Creative + Technical Synergy"
          subtitle="Brand, product, and growth all moving in the same direction."
        >
          <p>
            Government RFQs require strategy, SaaS products need usability, real estate needs visual appeal. Whatever your project, we ensure the tech serves the story, the marketing amplifies the product, and everything works together to achieve measurable results.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Messaging alignment</span> that speaks to decision-makers, buyers, and end users.
            </li>
            <li>
              <span className="font-semibold">UX that matches your brand</span> as closely as your presentations.
            </li>
            <li>
              <span className="font-semibold">Growth-minded development</span> with tracking and experiments built-in.
            </li>
            <li>
              <span className="font-semibold">Unified partner</span> covering RFQs, SaaS, and real estate marketing.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            <a
              href="mailto:info@dev101labs.com?subject=Brand%20%2B%20Product%20Synergy&body=Hi%20Dev101Labs%2C%0D%0A%0D%0ATell%20us%20where%20your%20brand%2C%20site%2C%20and%20campaigns%20feel%20out%20of%20sync%20today.%0D%0A%0D%0ACurrent%20brand%20materials%3A%0D%0APast%20campaigns%3A%0D%0AGrowth%20goals%3A%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-4 py-2 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
            >
              Align Brand, Product, & Growth
            </a>
          </p>
        </ServiceModal>
      );

    default:
      return null;
  }
};
