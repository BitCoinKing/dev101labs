"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

type InfoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  tag?: string;
  subtitle?: string;
  content: React.ReactNode;
};

export function InfoModal({ open, onClose, title, tag, subtitle, content }: InfoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl mx-4 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/95 shadow-[0_20px_80px_rgba(0,0,0,0.75)]"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-white/5 p-1 text-slate-400 hover:bg-white/10 hover:text-white transition"
              onClick={onClose}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-6 pt-6 pb-5 md:px-8 md:pt-8 md:pb-6 space-y-4">
              {tag && (
                <div className="inline-flex items-center rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                  {tag}
                </div>
              )}

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-sm md:text-base text-slate-300/80">
                    {subtitle}
                  </p>
                )}
              </div>

              <div className="border-t border-white/5 pt-4 md:pt-6 text-sm md:text-[15px] text-slate-200 space-y-4 md:space-y-5">
                {content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
