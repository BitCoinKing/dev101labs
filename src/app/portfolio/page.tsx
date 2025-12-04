"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
  const caseStudies = [
    {
      title: "City RFQ Support",
      description: "Helped a client successfully navigate a complex city Request for Quotation, leading to a new contract award.",
      tags: ["Government", "Procurement"],
      image: "/placeholder-case-study-1.jpg",
    },
    {
      title: "SaaS Platform Launch",
      description: "Developed and launched a scalable SaaS platform, improving operational efficiency and market reach for a tech startup.",
      tags: ["Web App", "SaaS", "Development"],
      image: "/placeholder-case-study-2.jpg",
    },
    {
      title: "Luxury Property Campaign",
      description: "Executed a high-impact digital marketing and media campaign for a luxury real estate development, driving significant interest and sales.",
      tags: ["Real Estate", "Marketing", "Media"],
      image: "/placeholder-case-study-3.jpg",
    },
    {
      title: "Enterprise Workflow Automation",
      description: "Implemented custom automation tools to streamline enterprise workflows, reducing operational costs and increasing productivity.",
      tags: ["Automation", "Enterprise", "Consulting"],
      image: "/placeholder-case-study-4.jpg",
    },
    {
      title: "E-commerce Platform Revamp",
      description: "Redesigned and re-platformed an existing e-commerce site, resulting in a 40% increase in conversion rates.",
      tags: ["E-commerce", "Web Development", "UI/UX"],
      image: "/placeholder-case-study-5.jpg",
    },
    {
      title: "Non-Profit Digital Transformation",
      description: "Guided a non-profit through a complete digital transformation, enhancing their online presence and donor engagement.",
      tags: ["Non-Profit", "Digital Strategy", "Web Design"],
      image: "/placeholder-case-study-6.jpg",
    },
  ];

  return (
    <div className="bg-offWhite text-darkNavy py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Our Portfolio & Case Studies
        </motion.h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="relative h-48 w-full rounded-lg bg-gray-200 mb-4 flex items-center justify-center text-center text-gray-500 overflow-hidden">
                <Image src={study.image} alt={study.title + " Placeholder"} layout="fill" objectFit="cover" quality={75} className="rounded-lg" />
                <span className="absolute p-2 bg-black bg-opacity-50 text-white rounded-md text-sm">{study.title} Placeholder</span>
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{study.title}</h3>
              <p className="text-gray-700 text-sm mb-4 flex-grow">{study.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-electricCyan/20 text-electricCyan text-xs font-semibold px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/portfolio/${index}`} className="text-electricCyan hover:underline font-semibold flex items-center mt-auto">
                View Details <ArrowRight className="ml-1" size={18} />
              </Link>
            </motion.div>
          ))}
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-darkNavy to-charcoal text-offWhite py-16 px-6 text-center rounded-2xl shadow-lg mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight mb-8">
              Ready to create your next success story?
            </h2>
            <Link href="/contact" className="bg-electricCyan text-darkNavy px-10 py-4 rounded-full font-semibold text-xl hover:bg-white transition-colors inline-flex items-center justify-center">
              Let\'s Discuss Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
