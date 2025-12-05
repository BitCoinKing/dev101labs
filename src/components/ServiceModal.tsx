"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

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

type ServiceModalProps = {
  open: boolean;
  onClose: () => void;
  service?: ServiceDetail | null;
};

export function ServiceModal({ open, onClose, service }: ServiceModalProps) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open || !service) return null;

  const generateEmailBody = (serviceTitle: string) => {
    return `Hi Dev101Labs,\n\nI'd like to discuss ${serviceTitle} for my organization...`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-hidden="true"
        />
        <motion.div
          className="relative max-w-2xl w-full rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_30px_120px_rgba(0,0,0,0.7)] p-6 sm:p-8 max-h-[80vh] overflow-y-auto text-slate-50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${service.id}`}
        >
          {/* Header row */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-300/80 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-3 py-1 w-fit">
              {service.category}
            </span>
            <button
              onClick={onClose}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-200 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Title and tagline */}
          <h2
            id={`modal-title-${service.id}`}
            className="text-2xl sm:text-3xl font-semibold mb-3 text-white"
          >
            {service.title}
          </h2>
          {service.tagline && (
            <p className="text-emerald-400/80 mb-4 text-sm sm:text-base">
              {service.tagline}
            </p>
          )}

          {/* Intro */}
          <p className="text-slate-200 leading-relaxed mb-6">
            {service.intro}
          </p>

          {/* Bullets */}
          {service.bullets && service.bullets.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white mb-3">What we handle:</h3>
              <ul className="space-y-2">
                {service.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-200">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {service.outcomes && service.outcomes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-white mb-3">Outcomes you can expect:</h3>
              <ul className="space-y-2">
                {service.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-slate-200">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal For */}
          {service.idealFor && service.idealFor.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm text-slate-400 mb-3">Ideal for:</h3>
              <div className="flex flex-wrap gap-2">
                {service.idealFor.map((ideal, index) => (
                  <span
                    key={index}
                    className="text-xs text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full"
                  >
                    {ideal}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-700/50">
            <p className="text-xs text-slate-400">
              Designed & delivered by Dev101Labs
            </p>
            <a
              href={`mailto:info@dev101labs.com?subject=Dev101Labs%20Strategy%20Call&body=${encodeURIComponent(generateEmailBody(service.title))}`}
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-2 text-sm font-medium hover:bg-slate-100 transition-colors"
            >
              Book a strategy call
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default ServiceModal;
