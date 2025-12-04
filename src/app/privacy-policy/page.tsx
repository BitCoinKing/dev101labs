"use client";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-offWhite text-darkNavy py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Privacy Policy
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold font-display mb-4">1. Introduction</h2>
          <p className="mb-4 text-gray-700">This Privacy Policy describes how Dev101Labs collects, uses, and discloses your personal information when you visit or make a purchase from www.dev101labs.com (the “Site”).</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4 text-gray-700">We collect various types of information in connection with the services we provide, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Personal Identifiable Information (PII) like your name, email address, phone number, and mailing address when you provide it to us (e.g., through contact forms).</li>
            <li>Usage data, such as your IP address, browser type, pages visited, and time spent on our Site, collected automatically through cookies and similar technologies.</li>
          </ul>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4 text-gray-700">We use the information we collect for various purposes, including:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>To provide and maintain our services.</li>
            <li>To communicate with you, respond to inquiries, and provide customer support.</li>
            <li>To improve our Site and services through analytics and performance monitoring.</li>
            <li>To send you marketing and promotional communications, where you have consented.</li>
          </ul>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">4. Sharing Your Information</h2>
          <p className="mb-4 text-gray-700">We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Service providers who assist us in operating our Site and providing our services (e.g., hosting, analytics).</li>
            <li>Legal authorities if required by law or to protect our rights.</li>
          </ul>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">5. Your Rights</h2>
          <p className="mb-4 text-gray-700">Depending on your jurisdiction, you may have rights regarding your personal information, including the right to access, correct, or delete your data.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">6. Changes to This Policy</h2>
          <p className="text-gray-700">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        </motion.section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
