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
          <a href="mailto:info@dev101labs.com?subject=New%20Strategy%20Call%20Inquiry&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AMy%20name%20is%3A%20%5BName%5D%0D%0AMy%20company%20is%3A%20%5BCompany%5D%0D%0AWebsite%3A%20%5BURL%5D%0D%0A%0D%0AWhat%20I%E2%80%99d%20like%20help%20with%3A%0D%0A%5BBrief%20description%20of%20project%20or%20needs%5D%0D%0A%0D%0AEstimated%20budget%20range%3A%20%5BBudget%5D%0D%0AIdeal%20timeline%3A%20%5BTimeline%5D%0D%0A%0D%0AHow%20did%20you%20hear%20about%20Dev101Labs%3F%0D%0A%5BReferral%20or%20source%5D%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D" className="bg-electricCyan text-darkNavy px-10 py-4 rounded-full font-semibold text-xl hover:bg-white transition-colors inline-flex items-center justify-center">
            Book a Strategy Call <ArrowRight className="ml-2" size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
