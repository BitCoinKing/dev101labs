"use client";
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
  return (
    <div className="bg-offWhite text-darkNavy py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Terms of Service
        </motion.h1>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-bold font-display mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4 text-gray-700">By accessing and using the website www.dev101labs.com (the "Site") and our services, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site or services.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">2. Services Description</h2>
          <p className="mb-4 text-gray-700">Dev101Labs provides multidisciplinary technology and government solutions, including digital transformation, procurement strategy, full-stack development, digital marketing, and real estate media services. Our services are subject to specific agreements and contracts.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">3. User Conduct</h2>
          <p className="mb-4 text-gray-700">You agree to use the Site and our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else\"s use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our Site.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">4. Intellectual Property</h2>
          <p className="mb-4 text-gray-700">All content on the Site, including text, graphics, logos, images, and software, is the property of Dev101Labs or its content suppliers and protected by international copyright laws.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">5. Disclaimer of Warranties</h2>
          <p className="mb-4 text-gray-700">The Site and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="mb-4 text-gray-700">Dev101Labs will not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Site; (ii) any conduct or content of any third party on the Site.</p>

          <h2 className="text-2xl font-bold font-display mt-8 mb-4">7. Governing Law</h2>
          <p className="text-gray-700">These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.</p>
        </motion.section>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
