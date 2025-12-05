"use client";

import { ReactNode, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface GlassModalProps {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
}

export function GlassModal({ open, title, subtitle, onClose, children }: GlassModalProps) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          {/* Prevent clicks inside card from closing */}
          <motion.div
            className="relative mx-4 w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(16,185,129,0.25)] backdrop-blur-3xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs text-slate-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/80"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="space-y-3 pr-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
                Government Services · Dev101Labs
              </p>
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              {subtitle && (
                <p className="text-sm text-slate-300/80">{subtitle}</p>
              )}
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-200/90">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
