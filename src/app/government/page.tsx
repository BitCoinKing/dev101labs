"use client";

import { CheckCircle, BriefcaseBusiness, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const GovernmentSolutionsPage = () => {
  return (
    <div className="bg-offWhite text-darkNavy py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Government Solutions
        </motion.h1>

        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="/placeholder-government-hero.jpg"
                alt="Government solutions overview"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight">
                Government Technology Solutions Provider
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Dev101Labs bids and wins federal, state, and local government contracts to deliver the digital infrastructure and applications that agencies need. From web development to data systems, we build what government needs.
              </p>
              <Link href="/contact" className="bg-electricCyan text-darkNavy px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors flex items-center justify-center w-fit">
                Book a Consultation <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Key Services */}
        <section className="mb-16 bg-gray-100 p-10 rounded-2xl shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Government Technology Delivery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // Service Cards
              { icon: BriefcaseBusiness, title: "RFQ/RFP Support", description: "Comprehensive assistance with proposal development, bid writing, and strategic positioning to maximize your success rate." },
              { icon: CheckCircle, title: "Registration & Compliance", description: "Guidance through SAM.gov registration, local vendor portals, and ensuring adherence to all federal and state compliance requirements." },
              { icon: Lightbulb, title: "Win-Room Strategy Sessions", description: "Collaborative workshops to develop winning strategies, identify key differentiators, and prepare for competitive bids." },
              { icon: TrendingUp, title: "Acquisition Strategy", description: "Develop long-term strategies for market entry, growth, and scaling your government business with confidence." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center"
              >
                <item.icon className="text-electricCyan mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-semibold font-display mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Optional: Timeline Section Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Our Engagement Process (Placeholder)
          </h2>
          <div className="bg-darkNavy text-offWhite p-10 rounded-2xl text-center">
            <p className="text-lg">Visualize our step-by-step process from opportunity discovery to contract award. Details coming soon!</p>
            <div className="relative h-64 mt-8 bg-charcoal rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Timeline Graphic Placeholder</span>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-electricCyan to-blue-400 text-darkNavy py-16 px-6 text-center rounded-2xl shadow-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
              Ready to partner on government technology needs?
            </h2>
            <Link href="/contact" className="bg-darkNavy text-electricCyan px-10 py-4 rounded-full font-semibold text-xl hover:bg-offWhite transition-colors inline-flex items-center justify-center">
              Discuss Government Contracts <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default GovernmentSolutionsPage;
