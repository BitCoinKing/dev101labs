"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { WhatWeDoSection } from "@/components/WhatWeDo";
import Hero from "@/components/Hero";
import GovernmentHighlightSection from "@/components/GovernmentHighlight";
import RealEstateHighlightSection from "@/components/RealEstateHighlight";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";

const Home = () => {
  return (
    <div className="bg-offWhite text-darkNavy">
      <Hero />

      <WhatWeDoSection />

      <GovernmentHighlightSection />

      <RealEstateHighlightSection />

      <CaseStudiesSection />

      <WhyChooseSection />

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-darkNavy to-charcoal text-offWhite py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
            Ready to win contracts and grow your brand?
          </h2>
          <Link href="/contact" className="bg-electricCyan text-darkNavy px-10 py-4 rounded-full font-semibold text-xl hover:bg-white transition-colors inline-flex items-center justify-center">
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
