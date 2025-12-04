"use client";

import { ArrowRight, Lightbulb, Workflow, Rocket, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutPage = () => {
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

        {/* Team Statement */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl leading-relaxed"
          >
            Dev101Labs partners with a network of expert engineers, designers, and strategists to deliver world-class solutions. Our extended team scales as projects demand.
          </motion.p>
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
            <a href="mailto:info@dev101labs.com?subject=New%20Strategy%20Call%20Inquiry&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AMy%20name%20is%3A%20%5BName%5D%0D%0AMy%20company%20is%3A%20%5BCompany%5D%0D%0AWebsite%3A%20%5BURL%5D%0D%0A%0D%0AWhat%20I%E2%80%99d%20like%20help%20with%3A%0D%0A%5BBrief%20description%20of%20project%20or%20needs%5D%0D%0A%0D%0AEstimated%20budget%20range%3A%20%5BBudget%5D%0D%0AIdeal%20timeline%3A%20%5BTimeline%5D%0D%0A%0D%0AHow%20did%20you%20hear%20about%20Dev101Labs%3F%0D%0A%5BReferral%20or%20source%5D%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D" className="bg-darkNavy text-electricCyan px-10 py-4 rounded-full font-semibold text-xl hover:bg-offWhite transition-colors inline-flex items-center justify-center">
              Book a Strategy Call <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
