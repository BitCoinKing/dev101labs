"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormData]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the form data to a backend API
      console.log("Form data submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } else {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="bg-offWhite text-darkNavy py-20">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-display text-center mb-12"
        >
          Contact Us
        </motion.h1>

        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold font-display mb-6">Get in Touch</h2>
            <p className="text-lg leading-relaxed mb-8">
              Ready to discuss your next project or have a question? We\\'re here to help. Reach out to us through any of the methods below, or fill out the contact form.
            </p>
            <ul className="space-y-6">
              <li className="flex items-center text-lg">
                <Mail className="text-electricCyan mr-4" size={24} />
                <a href="mailto:info@dev101labs.com" className="hover:text-electricCyan transition-colors">info@dev101labs.com</a>
              </li>
              <li className="flex items-center text-lg">
                <Phone className="text-electricCyan mr-4" size={24} />
                <a href="tel:+12137927102" className="hover:text-electricCyan transition-colors">(213) 792-7102</a>
              </li>
              <li className="flex items-start text-lg">
                <MapPin className="text-electricCyan mr-4 mt-1" size={24} />
                <span>21 Miller Alley #210, Pasadena, CA 91103</span>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-bold font-display mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? "border-red-500" : ""}`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs italic mt-2">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500" : ""}`}
                  placeholder="your@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs italic mt-2">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 text-sm font-bold mb-2">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your Company (Optional)"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="block text-gray-700 text-sm font-bold mb-2">Type of Project</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
                >
                  <option value="">Select a project type</option>
                  <option value="Government Contract Support">Government Contract Support</option>
                  <option value="Web/App Development">Web/App Development</option>
                  <option value="Real Estate Media">Real Estate Media</option>
                  <option value="Marketing & Ads">Marketing & Ads</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message <span className="text-red-500">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.message ? "border-red-500" : ""}`}
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs italic mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-darkNavy text-offWhite px-8 py-3 rounded-full font-semibold hover:bg-charcoal transition-colors flex items-center justify-center w-full"
              >
                Send Message <ArrowRight className="ml-2" size={20} />
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-center mt-4">Your message has been sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center mt-4">Please correct the errors in the form.</p>
              )}
            </form>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
