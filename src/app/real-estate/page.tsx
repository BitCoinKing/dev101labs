"use client";
import { ArrowRight, Camera, MonitorPlay, Drone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const RealEstatePage = () => {
  return (
    <div className="bg-offWhite text-darkNavy py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Real Estate Media & Websites
        </motion.h1>

        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row-reverse items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="/placeholder-real-estate-hero.jpg"
                alt="Real Estate Media & Websites overview"
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 leading-tight">
                Showcase Properties with Stunning Visuals & High-Performance Sites
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Dev101Labs provides comprehensive digital solutions for real estate agents, brokerages, and developers. From custom, lead-generating websites to breathtaking photography and cinematic drone videography, we help you make an unforgettable impression.
              </p>
              <Link href="/contact" className="bg-electricCyan text-darkNavy px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors flex items-center justify-center w-fit">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Custom Realtor Websites */}
        <section className="mb-16 bg-gray-100 p-10 rounded-2xl shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Custom Realtor & Brokerage Websites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold font-display mb-4">Feature-Rich Platforms Designed to Convert</h3>
              <p className="text-gray-700 mb-4">We build bespoke real estate websites that are fast, mobile-responsive, and optimized for lead capture. Integrate seamlessly with IDX/MLS feeds to display dynamic, up-to-date property listings. Offer advanced search filters, interactive maps, and client portals to enhance user experience.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>IDX/MLS Integration (Placeholder)</li>
                <li>Advanced Search & Filtering</li>
                <li>Client Portals & Favorites</li>
                <li>CRM Integration Ready</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64 w-full rounded-2xl bg-gray-200 flex items-center justify-center text-center text-gray-500 shadow-lg">
                <Image src="/placeholder-idx-mls.jpg" alt="IDX/MLS Integration Placeholder" layout="fill" objectFit="cover" className="rounded-2xl" />
                <span className="absolute">IDX/MLS Integration Placeholder</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Property-Focused Landing Pages & Funnels */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Dedicated Property Marketing Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64 w-full rounded-2xl bg-gray-200 flex items-center justify-center text-center text-gray-500 shadow-lg">
                <Image src="/placeholder-landing-page.jpg" alt="Property Landing Page Placeholder" layout="fill" objectFit="cover" className="rounded-2xl" />
                <span className="absolute">Property Landing Page Placeholder</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold font-display mb-4">High-Converting Pages for Every Listing</h3>
              <p className="text-gray-700 mb-4">Drive targeted traffic and capture high-quality leads with custom landing pages for individual properties. Designed for maximum conversion, these pages feature stunning visuals, detailed property information, virtual tours, and clear calls to action.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Single Property Websites</li>
                <li>Integrated Lead Capture Forms</li>
                <li>Virtual Tour & Walkthrough Embedding</li>
                <li>Performance Analytics</li>
              </ul>
            </motion.div>
          </div>
        </section>

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

        {/* Package Cards (Placeholder) */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Our Real Estate Packages (Placeholder)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ // Package Cards
              { title: "Starter Package", price: "$XXX", features: ["Basic Photography", "Simple Listing Page", "2D Floor Plans"] },
              { title: "Growth Package", price: "$YYY", features: ["Advanced Photography", "Cinematic Video (Short)", "IDX Integration", "Dedicated Landing Page"] },
              { title: "Premium Package", price: "$ZZZ", features: ["Luxury Photography + Video", "Drone Footage + Virtual Tour", "Custom Website (Full)", "Targeted Ad Campaign"] },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-electricCyan flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-2xl font-bold font-display mb-2 text-center">{item.title}</h3>
                  <p className="text-4xl font-bold font-display text-center text-electricCyan mb-6">{item.price}</p>
                  <ul className="text-gray-700 space-y-2 mb-8">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center"><ArrowRight className="text-electricCyan mr-2" size={18} /> {feature}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-darkNavy text-offWhite px-6 py-3 rounded-full font-semibold hover:bg-charcoal transition-colors mt-auto">Select Package</button>
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
      </div>
    </div>
  );
};

export default RealEstatePage;
