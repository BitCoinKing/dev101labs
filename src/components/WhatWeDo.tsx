"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Rocket,
  Building2,
  ArrowRight,
} from "lucide-react";

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
  return (
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
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="group h-full"
              >
                {/* Gradient border wrapper */}
                <div className="relative h-full rounded-3xl bg-gradient-to-br from-cyan-500/30 via-neutral-800 to-neutral-900 p-[1px]">
                  <div className="flex h-full flex-col justify-between rounded-3xl bg-neutral-950/95 px-5 py-6 md:px-6 md:py-7 transition-transform duration-200 group-hover:-translate-y-1 group-hover:bg-neutral-900/95">
                    {/* Icon + tag */}
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] md:text-xs font-medium uppercase tracking-wide text-neutral-500">
                        {service.tag}
                      </span>
                    </div>

                    {/* Title + description */}
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-semibold text-white">
                        {service.name}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {service.description}
                      </p>
                    </div>

                    {/* Bulleted micro-points */}
                    <ul className="mt-4 space-y-2 text-xs text-neutral-500">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2"
                        >
                          <span className="mt-[6px] h-[3px] w-[3px] rounded-full bg-cyan-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA line */}
                    <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                      <span>Learn more</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-150 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDoSection;
