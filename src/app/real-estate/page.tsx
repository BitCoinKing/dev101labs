"use client";
import { ArrowRight, Camera, MonitorPlay, Drone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RealEstateShowcaseSection from "@/components/RealEstateShowcaseSection";
import RealEstateHeroVisual from "@/components/RealEstateHeroVisual";
import CustomRealtorSection from "@/components/CustomRealtorSection";
import DedicatedPropertyPagesSection from "@/components/DedicatedPropertyPagesSection";

export default function RealEstatePage() {
  return (
    <main className="bg-neutral-950">
      {/* HERO */}
      <section className="pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT: existing copy, slightly refined */}
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Real Estate Media & Websites
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                Showcase Properties with
                <br className="hidden sm:block" />
                {" "}
                Stunning Visuals & High-Performance Sites
              </h2>

              <p className="mt-4 max-w-xl text-sm text-neutral-400 md:text-base">
                Dev101Labs provides comprehensive digital solutions for real
                estate agents, brokerages, and developers. From custom,
                lead-generating websites to breathtaking photography and
                cinematic drone videography, we help you make an unforgettable
                impression.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 font-semibold text-neutral-950 hover:bg-emerald-400 transition"
                >
                  Get a Quote
                  <span className="ml-1.5 text-lg">→</span>
                </Link>

                <p className="text-xs text-neutral-500">
                  Custom listing sites, media, and funnels for serious sellers
                  and top agents.
                </p>
              </div>
            </div>

            {/* RIGHT: live property preview visual */}
            <RealEstateHeroVisual />
          </div>
        </div>
      </section>

      {/* ...keep the rest of the Real Estate sections below as they are... */}
      <RealEstateShowcaseSection />

      <CustomRealtorSection />

      <DedicatedPropertyPagesSection />

      {/* Media Services */}
      <section className="mb-16 bg-darkNavy text-offWhite p-10 rounded-2xl shadow-inner">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
          Professional Media Production
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[ // Media Service Cards
            { icon: Camera, title: "Professional Photography", description: "High-resolution interior and exterior photos that highlight your property\"s best features." },
            { icon: MonitorPlay, title: "Cinematic Videography", description: "Engaging property walkthroughs and agent interview videos to captivate potential buyers." },
            { icon: Drone, title: "Aerial Drone Footage", description: "Stunning bird\"s-eye views and immersive aerial tours of properties and surrounding areas." },
            { icon: ArrowRight, title: "Virtual Tours (3D/360)", description: "Interactive virtual experiences allowing potential buyers to explore properties remotely." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-charcoal p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center"
            >
              <item.icon className="text-electricCyan mb-4 mx-auto" size={40} />
              <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-darkNavy to-charcoal text-offWhite py-16 px-6 text-center rounded-2xl shadow-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
            Ready to elevate your real estate presence?
          </h2>
          <Link href="/contact" className="bg-electricCyan text-darkNavy px-10 py-4 rounded-full font-semibold text-xl hover:bg-white transition-colors inline-flex items-center justify-center">
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};
