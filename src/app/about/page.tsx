"use client";

import Image from "next/image";
import { ArrowRight, Lightbulb, Workflow, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
  const teamMembers = [
    { name: "Jane Doe", title: "Founder / CEO", image: "/placeholder-team-1.jpg" },
    { name: "John Smith", title: "Lead Strategist", image: "/placeholder-team-2.jpg" },
    { name: "Emily White", title: "Head of Technology", image: "/placeholder-team-3.jpg" },
    { name: "David Green", title: "Creative Director", image: "/placeholder-team-4.jpg" },
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
          About Dev101Labs
        </motion.h1>

        {/* Executive Summary */}
        <section className="mb-16 text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl leading-relaxed mb-6"
          >
            Dev101Labs is a multidisciplinary technology and government solutions firm specializing in helping organizations and entrepreneurs secure competitive advantages through digital transformation, procurement strategy, and end-to-end creative services. We empower agencies, businesses, and real estate professionals by bridging the gap between strategic goals, modern technology, and compliant execution.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl leading-relaxed"
          >
            Our mission is simple: to empower businesses and agencies with the tools, technology, and strategic insight needed to win, grow, and scale. Dev101Labs combines technical expertise, creative capability, and procurement intelligence to deliver reliable, compliant, and high-performance solutions—from government bids and digital products to property marketing and targeted advertising campaigns.
          </motion.p>
        </section>

        {/* Our Approach Section */}
        <section className="mb-16 bg-darkNavy text-offWhite p-10 rounded-2xl shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ // Approach Steps
              { icon: Lightbulb, title: "Discover", description: "Understanding your unique challenges, goals, and market landscape." },
              { icon: Workflow, title: "Strategize", description: "Developing a tailored roadmap for success, leveraging our expertise." },
              { icon: Rocket, title: "Build", description: "Executing with precision, from innovative design to robust implementation." },
              { icon: TrendingUp, title: "Optimize", description: "Continuously refining and enhancing solutions for sustained growth and impact." },
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

        {/* Team/Leadership Placeholder */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-12">
            Meet Our Leadership (Placeholder)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="relative h-40 w-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-full" />
                  <span className="absolute">Team Photo Placeholder</span>
                </div>
                <h3 className="text-xl font-semibold font-display mb-1">{member.name}</h3>
                <p className="text-electricCyan text-sm">{member.title}</p>
              </motion.div>
            ))}
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
              Partner with us for transformative results.
            </h2>
            <Link href="/contact" className="bg-darkNavy text-electricCyan px-10 py-4 rounded-full font-semibold text-xl hover:bg-offWhite transition-colors inline-flex items-center justify-center">
              Get Started Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
