"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Rocket,
  Building2,
  ArrowRight,
} from "lucide-react";
import { useServiceModal, PillarKey } from "../hooks/useServiceModal";
import { ServiceModal } from "./ui/ServiceModal";

type Service = {
  name: string;
  tag: string;
  description: string;
  points: string[];
  icon: React.ElementType;
};

const services: Service[] = [
  {
    name: "Government Contract Facilitation",
    tag: "Public Sector",
    description:
      "We bid and win government contracts, delivering technology solutions to agencies nationwide.",
    points: [
      "RFQ / RFP bidding and winning",
      "Technology implementation and delivery",
      "Ongoing support and compliance maintenance",
    ],
    icon: Briefcase,
  },
  {
    name: "Full-Stack Development",
    tag: "Products & Platforms",
    description:
      "Custom websites, web apps, mobile applications, scalable SaaS platforms, and cloud systems.",
    points: [
      "Next.js / React frontends",
      "API integrations & automation",
      "Secure, scalable architectures",
    ],
    icon: Code2,
  },
  {
    name: "Digital Marketing & Growth",
    tag: "Demand Generation",
    description:
      "Targeted advertising, lead generation funnels, conversion optimization, and brand identity.",
    points: [
      "Facebook, Instagram, TikTok, Google Ads",
      "Landing pages & funnels built to convert",
      "Analytics, tracking, and optimization",
    ],
    icon: Rocket,
  },
  {
    name: "Real Estate Media & Websites",
    tag: "Property & Listings",
    description:
      "Custom realtor sites, IDX/MLS integration, professional photography, video, and virtual tours.",
    points: [
      "High-performing agent & brokerage sites",
      "Cinematic photo, video, and drone media",
      "Virtual tours & property landing pages",
    ],
    icon: Building2,
  },
];

export function WhatWeDoSection() {
  const { active, open, close } = useServiceModal();

  return (
    <>
      <section
        id="services"
        className="bg-neutral-950 py-16 md:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mb-12 flex flex-col items-center text-center gap-3">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-cyan-400 uppercase">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              What We Do
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-neutral-400">
              Dev101Labs combines government expertise, full-stack engineering,
              growth marketing, and world-class real estate media to deliver
              government projects, build SaaS platforms, and market properties.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {/* Government Contract Facilitation */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0 * 0.08 }}
              className="group h-full"
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/30 via-neutral-800 to-neutral-900 p-[1px]">
                <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Public Sector
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Government Contract Facilitation
                    </h3>
                    <p className="text-sm text-neutral-400">
                      We bid and win government contracts, delivering technology solutions to agencies nationwide.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                    {["RFQ / RFP bidding and winning", "Technology implementation and delivery", "Ongoing support and compliance maintenance"].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-cyan-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => open("gov")}
                    className="mt-6 inline-flex items-center text-sm font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 text-lg" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Full-Stack Development */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 1 * 0.08 }}
              className="group h-full"
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/30 via-neutral-800 to-neutral-900 p-[1px]">
                <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Products & Platforms
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Full-Stack Development
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Custom websites, web apps, mobile applications, scalable SaaS platforms, and cloud systems.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                    {["Next.js / React frontends", "API integrations & automation", "Secure, scalable architectures"].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-cyan-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => open("fullstack")}
                    className="mt-6 inline-flex items-center text-sm font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 text-lg" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Digital Marketing & Growth */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 2 * 0.08 }}
              className="group h-full"
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/30 via-neutral-800 to-neutral-900 p-[1px]">
                <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Rocket className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Demand Generation
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Digital Marketing & Growth
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Targeted advertising, lead generation funnels, conversion optimization, and brand identity.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                    {["Facebook, Instagram, TikTok, Google Ads", "Landing pages & funnels built to convert", "Analytics, tracking, and optimization"].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-cyan-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => open("growth")}
                    className="mt-6 inline-flex items-center text-sm font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 text-lg" />
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Real Estate Media & Websites */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 3 * 0.08 }}
              className="group h-full"
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/30 via-neutral-800 to-neutral-900 p-[1px]">
                <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide text-neutral-500">
                      Property & Listings
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                      Real Estate Media & Websites
                    </h3>
                    <p className="text-sm text-neutral-400">
                      Custom realtor sites, IDX/MLS integration, professional photography, video, and virtual tours.
                    </p>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                    {["High-performing agent & brokerage sites", "Cinematic photo, video, and drone media", "Virtual tours & property landing pages"].map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-cyan-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => open("realEstate")}
                    className="mt-6 inline-flex items-center text-sm font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    Learn more
                    <ArrowRight className="ml-1 text-lg" />
                  </button>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Modal renderer */}
      <ServiceModalRoot active={active} onClose={close} />
    </>
  );
}

type ServiceModalRootProps = {
  active: PillarKey | null;
  onClose: () => void;
};

const ServiceModalRoot = ({ active, onClose }: ServiceModalRootProps) => {
  if (!active) return null;

  switch (active) {
    case "gov":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Government Contract Facilitation"
          subtitle="From SAM.gov registration to award-winning proposals, Dev101Labs helps agencies and vendors move with confidence."
        >
          <p>
            We partner with agencies and qualified vendors to make the
            government contracting process less chaotic and more predictable.
            Whether you're entering the market for the first time or scaling an
            existing contracts practice, we help you get contract-ready and
            competitive.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Readiness & positioning.</span>{" "}
              Opportunity mapping, capability narrative, and past-performance
              packaging so you stand out for the right reasons.
            </li>
            <li>
              <span className="font-semibold">RFQ/RFP strategy.</span> Win-room
              style working sessions to decode requirements, build a clear win
              theme, and align technical, pricing, and compliance.
            </li>
            <li>
              <span className="font-semibold">Proposal development.</span> We
              support storyboarding, outline development, pink/red team
              reviews, and production-ready proposal documents.
            </li>
            <li>
              <span className="font-semibold">Implementation support.</span>{" "}
              When you win, we help translate the awarded scope into technology
              roadmaps, delivery plans, and dashboards leadership can trust.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            Ideal for: agencies, primes, and small businesses who want a
            strategic partner across both bids and delivery.
          </p>
        </ServiceModal>
      );

    case "fullstack":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Full-Stack Development"
          subtitle="Modern web apps, SaaS platforms, and internal tools built on Next.js, React, and robust cloud backends."
        >
          <p>
            Dev101Labs designs and builds full-stack systems that feel premium
            on the surface and stay maintainable under the hood. We focus on
            clear architectures, strong security practices, and fast user
            experiences.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Product & UX discovery.</span>{" "}
              Workshops to map use cases, roles, and workflows before a single
              line of code is written.
            </li>
            <li>
              <span className="font-semibold">Modern frontends.</span> Next.js,
              React, TypeScript, motion-driven UI, and responsive design tuned
              for both mobile and desktop.
            </li>
            <li>
              <span className="font-semibold">Scalable backends.</span> API
              design, authentication, role-based access, integrations with CRMs,
              payments, and third-party providers.
            </li>
            <li>
              <span className="font-semibold">Delivery & hand-off.</span>{" "}
              Environments, documentation, and training so your team can
              operate and extend the platform with confidence.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            Ideal for: SaaS products, internal dashboards, customer portals,
            and data-rich web applications.
          </p>
        </ServiceModal>
      );

    case "growth":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Digital Marketing & Growth"
          subtitle="Performance-focused campaigns and funnels that connect strategy, creative, and analytics."
        >
          <p>
            We help you move beyond random acts of marketing and into a
            repeatable growth engine. Every campaign ties into a clear funnel
            and a reporting view that leaders actually use.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Audience & offer clarity.</span>{" "}
              Identify who you're truly serving, what they care about, and how
              to position your offer in language that converts.
            </li>
            <li>
              <span className="font-semibold">Channel strategy.</span> Paid and
              organic plays across Meta, TikTok, Google, LinkedIn, and email,
              matched to your budget and sales cycle.
            </li>
            <li>
              <span className="font-semibold">Funnels & landing pages.</span>{" "}
              High-converting landing pages, lead magnets, and nurture sequences
              wired to your CRM or marketing stack.
            </li>
            <li>
              <span className="font-semibold">Analytics & iteration.</span>{" "}
              Dashboards, cohort views, and testing plans so you can scale what
              works and cut what doesn't.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            Ideal for: founders, agencies, and teams who want marketing that is
            measurable, accountable, and aligned to revenue.
          </p>
        </ServiceModal>
      );

    case "realEstate":
      return (
        <ServiceModal
          open
          onClose={onClose}
          title="Real Estate Media & Websites"
          subtitle="High-impact digital experiences that make every property and every agent look like a top producer."
        >
          <p>
            Real estate is visual, emotional, and time-sensitive. We combine
            premium media with fast, IDX-ready websites so your properties and
            agents look as strong online as they do in person.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="font-semibold">Custom realtor & brokerage sites.</span>{" "}
              Brand-matched, mobile-optimized sites with IDX/MLS integration,
              CRM connections, and built-in lead capture.
            </li>
            <li>
              <span className="font-semibold">Property marketing pages.</span>{" "}
              Dedicated single-property sites with photo galleries, video,
              floor plans, lifestyle copy, and clear calls to book a showing.
            </li>
            <li>
              <span className="font-semibold">Cinematic media production.</span>{" "}
              Photography, aerial drone video, and vertical-format clips ready
              for social and paid campaigns.
            </li>
            <li>
              <span className="font-semibold">Analytics & campaign support.</span>{" "}
              Tracking on listings, lead forms, and call-to-action buttons so
              you can see which marketing actually moves contracts.
            </li>
          </ul>
          <p className="pt-2 text-sm text-emerald-300">
            Ideal for: top agents, boutique brokerages, and developers who want
            their listings to feel like a luxury brand experience.
          </p>
        </ServiceModal>
      );

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

export default WhatWeDoSection;
