"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <div className="bg-offWhite text-darkNavy py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Our Comprehensive Services
        </motion.h1>

        {/* Government Contract Facilitation */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-display mb-8"
          >
            Government Contract Facilitation
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // Service Items
              { title: "Vendor Registration", description: "Assistance with SAM.gov, local vendor portals, and necessary certifications." },
              { title: "RFQ/RFP Strategy", description: "Discovery, analysis, and strategic positioning for Requests for Quotation/Proposals." },
              { title: "Bid Writing & Submission", description: "Expert crafting of compelling bids and thorough submission support." },
              { title: "Compliance & Documentation", description: "Ensuring all proposals and processes meet stringent government regulations." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <ArrowRight className="text-electricCyan mb-4" size={32} />
                <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Websites & Web Apps */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-display mb-8"
          >
            Websites & Web Applications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // Service Items
              { title: "Marketing Sites", description: "Engaging, high-performance websites tailored to attract and convert." },
              { title: "SaaS & Internal Tools", description: "Scalable Software-as-a-Service platforms and custom internal applications." },
              { title: "Next.js/React Development", description: "Modern, mobile-first development using the latest front-end technologies." },
              { title: "API Integration & Automation", description: "Seamlessly connect systems and automate workflows for peak efficiency." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <ArrowRight className="text-electricCyan mb-4" size={32} />
                <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mobile Apps */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-display mb-8"
          >
            Mobile Applications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // Service Items
              { title: "iOS & Android Development", description: "Native and cross-platform mobile app development for all devices." },
              { title: "Product Strategy & MVP", description: "From ideation to minimal viable product, we guide your app\'s journey." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <ArrowRight className="text-electricCyan mb-4" size={32} />
                <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Digital Marketing & Growth */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-display mb-8"
          >
            Digital Marketing & Growth
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // Service Items
              { title: "Paid Advertising Campaigns", description: "Strategic ad campaigns on Facebook, Instagram, TikTok, and Google." },
              { title: "Lead Generation & Funnels", description: "Building effective landing pages, funnels, and lead magnets." },
              { title: "Analytics & Optimization", description: "Data-driven insights to continuously improve performance and ROI." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <ArrowRight className="text-electricCyan mb-4" size={32} />
                <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Real Estate Media & Websites */}
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-display mb-8"
          >
            Real Estate Media & Websites
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // Service Items
              { title: "Custom Realtor Websites", description: "High-performing websites with optional IDX/MLS integration." },
              { title: "Property Detail Pages", description: "Optimized landing pages for individual listings and lead capture." },
              { title: "Professional Media", description: "Photography, cinematic videography, drone footage, and virtual tours." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <ArrowRight className="text-electricCyan mb-4" size={32} />
                <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;
