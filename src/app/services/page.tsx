"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, PenSquare, Globe2, Code2, Zap, Megaphone, Camera, MapPinned, MonitorSpeaker, Smartphone } from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.article
    className="group relative flex flex-col rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.9)] transition-colors duration-200 hover:border-teal-400/70 hover:bg-slate-950"
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 22 }}
  >
    {/* subtle glow */}
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_60%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

    <div className="relative z-10">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/90 border border-slate-700/70 text-teal-300">
        {icon}
      </div>

      <h3 className="text-base sm:text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
        {description}
      </p>

      <div className="mt-4 inline-flex items-center text-xs font-medium text-teal-300/90">
        <span>Learn more</span>
        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
      </div>
    </div>
  </motion.article>
);

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Hero */}
        <div className="relative mb-14 overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900/90 to-slate-950 px-6 py-8 sm:px-10 sm:py-10">
          {/* subtle glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%)] opacity-80" />
          <div className="relative z-10">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-300/90 mb-3">
              Services
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              Our Comprehensive Services
            </h1>
            <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-300">
              Dev101Labs helps agencies, businesses, and real estate teams with government contract strategy,
              full-stack development, digital growth, and high-impact media.
            </p>
          </div>
        </div>

        {/* Government Contract Facilitation */}
        <section className="mb-16 lg:mb-20">
          <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-300/80">
                Public Sector
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Government Contract Facilitation
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Strategy, registration, and bid support to help you get contract-ready and win new awards.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={<FileText className="h-5 w-5" />}
              title="Vendor Registration"
              description="Assistance with SAM.gov, local vendor portals, and certifications so you become eligible and discoverable for contracts."
            />
            <ServiceCard
              icon={<Target className="h-5 w-5" />}
              title="RFQ/RFP Strategy"
              description="Discovery, analysis, and strategic positioning support for Requests for Quotation/Proposals."
            />
            <ServiceCard
              icon={<PenSquare className="h-5 w-5" />}
              title="Bid Writing & Submission"
              description="Co-creating clear, persuasive proposals, with hands-on submission support and compliance checks."
            />
          </div>
        </section>

        {/* Websites & Web Apps */}
        <section className="mb-16 lg:mb-20">
          <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-300/80">
                Products & Platforms
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Full-Stack Development & SaaS
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Modern web applications and scalable platforms built with Next.js, React, and robust backends.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={<Globe2 className="h-5 w-5" />}
              title="Marketing Websites"
              description="Engaging, high-performance websites with CMS, analytics, and conversion optimization for various industries."
            />
            <ServiceCard
              icon={<Code2 className="h-5 w-5" />}
              title="SaaS Platforms"
              description="Scalable Software-as-a-Service applications with secure authentication, payment processing, and enterprise features."
            />
            <ServiceCard
              icon={<Zap className="h-5 w-5" />}
              title="API & Integration"
              description="Backend development, RESTful APIs, database design, and seamless third-party integrations."
            />
          </div>
        </section>

        {/* Digital Marketing & Growth */}
        <section className="mb-16 lg:mb-20">
          <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-300/80">
                Demand Generation
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Digital Marketing & Growth
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Performance-focused marketing campaigns and growth strategies that drive measurable results.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={<Megaphone className="h-5 w-5" />}
              title="Paid Advertising"
              description="Strategic ad campaigns across Facebook, Instagram, TikTok, Google Ads, and LinkedIn with ROI tracking."
            />
            <ServiceCard
              icon={<Target className="h-5 w-5" />}
              title="Lead Generation & Funnels"
              description="High-converting landing pages, email campaigns, and automated funnel strategies for customer acquisition."
            />
            <ServiceCard
              icon={<Zap className="h-5 w-5" />}
              title="Analytics & Optimization"
              description="Data-driven insights and continuous optimization to improve campaign performance and bottom-line results."
            />
          </div>
        </section>

        {/* Real Estate Media & Websites */}
        <section className="mb-16 lg:mb-20">
          <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-teal-300/80">
                Real Estate Media
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                Websites, Media & Campaigns
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                End-to-end digital solutions for real estate professionals, from stunning websites to compelling media.
              </p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            <ServiceCard
              icon={<Globe2 className="h-5 w-5" />}
              title="Custom Realtor Websites"
              description="High-performing websites with IDX/MLS integration, CRM connections, and mobile-optimized lead capture."
            />
            <ServiceCard
              icon={<MapPinned className="h-5 w-5" />}
              title="Property Marketing Pages"
              description="Dedicated landing pages for individual listings with virtual tours, floor plans, and conversion optimization."
            />
            <ServiceCard
              icon={<Camera className="h-5 w-5" />}
              title="Professional Media Production"
              description="Photography, cinematic videography, drone footage, and virtual tours to showcase properties at their best."
            />
          </div>
        </section>
      </div>
    </main>
  );
}
