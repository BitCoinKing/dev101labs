"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Target, PenSquare, Globe2, Code2, Zap, Megaphone, Camera, MapPinned, MonitorSpeaker, Smartphone } from "lucide-react";
import ServiceModal from "../../components/ServiceModal";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onLearnMore?: () => void;
};

type ServiceDetail = {
  id: string;
  category: string;
  title: string;
  tagline?: string;
  intro: string;
  bullets?: string[];
  outcomes?: string[];
  idealFor?: string[];
};

const SERVICE_DETAILS: ServiceDetail[] = [
  // --- Government Contract Facilitation ---
  {
    id: "gov-vendor-registration",
    category: "Public Sector · Government RFQ/RFP",
    title: "Vendor Registration & Contract Readiness",
    tagline: "Get visible, eligible, and discoverable in the government marketplace.",
    intro:
      "We guide you through every step of becoming an approved government vendor so you can actually compete for awards instead of sitting on the sidelines.",
    bullets: [
      "End-to-end support with SAM.gov registration and renewal.",
      "Local, state, and federal vendor portal setup (city, county, agency-specific).",
      "NAICS, PSC, and keyword strategy so buyers can actually find you.",
      "Documentation, certifications, and compliance requirements mapped out clearly.",
    ],
    outcomes: [
      "You are correctly registered and searchable by contracting officers.",
      "Your profiles and capability narrative stand out instead of blending in.",
      "You avoid costly delays, rejections, or missed opportunities due to setup errors.",
    ],
    idealFor: [
      "Businesses that are brand new to government contracting.",
      "Vendors who started SAM.gov but never finished or got stuck.",
      "Teams that don't have time to learn every portal and requirement themselves.",
    ],
  },
  {
    id: "gov-rfq-rfp-strategy",
    category: "Public Sector · Strategy",
    title: "RFQ/RFP Strategy & Positioning",
    tagline: "Stop spraying and praying—pursue the right bids with a clear win strategy.",
    intro:
      "Instead of chasing every opportunity, we help you focus on the bids where you can realistically win, and then position your response to score high with evaluators.",
    bullets: [
      "Opportunity scan and fit analysis (technical, past performance, pricing, and capacity).",
      "Win themes and value proposition tailored to the specific agency and mission.",
      "Compliance matrix and response outline mapped to every section of the RFQ/RFP.",
      "Competitive positioning so you're not just compliant, but compelling.",
    ],
    outcomes: [
      "Higher-quality submissions that align with how agencies actually score proposals.",
      "Less chaos before deadlines thanks to a clear response plan and structure.",
      "Better go/no-go decisions so you're investing effort where it counts.",
    ],
    idealFor: [
      "Small businesses and 8(a) firms that want to win their first awards.",
      "Teams that feel like they're always scrambling before due dates.",
      "Vendors that keep scoring 'compliant but not selected' and want to change that.",
    ],
  },
  {
    id: "gov-bid-writing",
    category: "Public Sector · Proposal Execution",
    title: "Bid Writing & Submission Support",
    tagline: "Persuasive, compliant proposals that feel clear—not bureaucratic.",
    intro:
      "We translate your expertise into proposals that evaluators can quickly understand and score, while making sure every technical and administrative box is checked.",
    bullets: [
      "Collaborative writing sessions to pull the right information out of your team.",
      "Technical, management, and past-performance sections drafted or refined.",
      "Compliance review against the RFQ/RFP instructions, clauses, and checklists.",
      "Submission packaging support (forms, attachments, formatting, and portals).",
    ],
    outcomes: [
      "Submissions that are easy to read, easy to score, and fully compliant.",
      "Reduced risk of disqualification on technicalities or missing documents.",
      "Reusable proposal content you can adapt for future opportunities.",
    ],
    idealFor: [
      "Vendors who know their craft but struggle to tell the story on paper.",
      "Teams without a dedicated proposal manager or writer.",
      "Businesses that want a partner for a single critical bid or an ongoing pipeline.",
    ],
  },

  // --- Full-Stack Development & SaaS ---
  {
    id: "fs-marketing-websites",
    category: "Products & Platforms · Web",
    title: "High-Performance Marketing Websites",
    tagline: "Premium, conversion-focused sites that look like they belong in 2025.",
    intro:
      "We design and build modern marketing sites that don't just look good—they load fast, tell a clear story, and move visitors toward a real action: schedule, apply, book, or request a quote.",
    bullets: [
      "Next.js/React frontends tuned for speed, SEO, and Core Web Vitals.",
      "Clear narrative and content structure so visitors instantly 'get' what you do.",
      "CMS setup (e.g., headless CMS) so your team can update copy and pages without devs.",
      "Analytics, event tracking, and conversion funnels wired from day one.",
    ],
    outcomes: [
      "A site that finally reflects the quality of your brand and work.",
      "Measurable lift in leads, signups, or booked calls—not just page views.",
      "A scalable foundation you can grow into instead of redesigning every year.",
    ],
    idealFor: [
      "Growing companies whose current site feels outdated or generic.",
      "Founders preparing for fundraising, enterprise clients, or press visibility.",
      "Service businesses that rely on trust, expertise, and premium positioning.",
    ],
  },
  {
    id: "fs-saas-platforms",
    category: "Products & Platforms · SaaS",
    title: "SaaS Platforms & Web Applications",
    tagline: "From clickable prototype to investor-ready, scalable SaaS product.",
    intro:
      "We help you define, design, and build SaaS platforms with a clean architecture, modern UX, and a roadmap that investors and customers can believe in.",
    bullets: [
      "Product and feature scoping with a focus on a lean, high-impact MVP.",
      "Secure authentication, user roles, and multi-tenant architecture patterns.",
      "Subscription billing, payments, and basic usage metering integration.",
      "Design systems and component libraries for consistent UX as you scale.",
    ],
    outcomes: [
      "A usable, demo-ready product instead of an endless prototype.",
      "Architecture that your future team can maintain—not a fragile experiment.",
      "A clearer story for investors and customers about what your platform does.",
    ],
    idealFor: [
      "Early-stage SaaS founders who want an experienced technical partner.",
      "Agencies turning internal tools into commercial products.",
      "Existing products that need a modern rebuild instead of another patch.",
    ],
  },
  {
    id: "fs-api-integration",
    category: "Products & Platforms · Integration",
    title: "API Development & Systems Integration",
    tagline: "Make your platforms talk to each other—and to the rest of the stack.",
    intro:
      "We design and implement APIs and integrations that quietly keep your data flowing, your teams aligned, and your customers experiencing one unified product—not a patchwork.",
    bullets: [
      "Design and implementation of RESTful APIs and backend services.",
      "Integration with CRMs, ERPs, marketing tools, payment gateways, and third-party APIs.",
      "Data modeling, mapping, and migration planning between systems.",
      "Logging, monitoring, and basic observability so issues are visible, not invisible.",
    ],
    outcomes: [
      "Less swivel-chair work and manual data transfer between tools.",
      "More reliable, predictable flows between your critical systems.",
      "A technical foundation that can handle new integrations as you grow.",
    ],
    idealFor: [
      "Teams drowning in duplicate data and manual exports/imports.",
      "Products that need to plug into an existing enterprise stack.",
      "Organizations planning a phased modernization instead of a big-bang rewrite.",
    ],
  },
];

const ServiceCard = ({ icon, title, description, onLearnMore }: ServiceCardProps) => (
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

      {onLearnMore ? (
        <button
          type="button"
          onClick={onLearnMore}
          className="inline-flex items-center gap-1 text-sm font-medium text-emerald-400 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/80 focus:ring-offset-2 focus:ring-offset-slate-950"
        >
          Learn more
          <span aria-hidden="true">→</span>
        </button>
      ) : (
        <div className="mt-4 inline-flex items-center text-xs font-medium text-teal-300/90">
          <span>Learn more</span>
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </div>
      )}
    </div>
  </motion.article>
);

export default function ServicesPage() {
  const [openService, setOpenService] = useState<ServiceDetail | null>(null);

  const handleOpenService = (id: string) => {
    const svc = SERVICE_DETAILS.find((s) => s.id === id);
    if (svc) setOpenService(svc);
  };

  const handleCloseService = () => setOpenService(null);

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
              onLearnMore={() => handleOpenService("gov-vendor-registration")}
            />
            <ServiceCard
              icon={<Target className="h-5 w-5" />}
              title="RFQ/RFP Strategy"
              description="Discovery, analysis, and strategic positioning support for Requests for Quotation/Proposals."
              onLearnMore={() => handleOpenService("gov-rfq-rfp-strategy")}
            />
            <ServiceCard
              icon={<PenSquare className="h-5 w-5" />}
              title="Bid Writing & Submission"
              description="Co-creating clear, persuasive proposals, with hands-on submission support and compliance checks."
              onLearnMore={() => handleOpenService("gov-bid-writing")}
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
              onLearnMore={() => handleOpenService("fs-marketing-websites")}
            />
            <ServiceCard
              icon={<Code2 className="h-5 w-5" />}
              title="SaaS Platforms"
              description="Scalable Software-as-a-Service applications with secure authentication, payment processing, and enterprise features."
              onLearnMore={() => handleOpenService("fs-saas-platforms")}
            />
            <ServiceCard
              icon={<Zap className="h-5 w-5" />}
              title="API & Integration"
              description="Backend development, RESTful APIs, database design, and seamless third-party integrations."
              onLearnMore={() => handleOpenService("fs-api-integration")}
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

        {/* Service modal */}
        <ServiceModal
          open={!!openService}
          onClose={handleCloseService}
          service={openService}
        />
      </div>
    </main>
  );
}
