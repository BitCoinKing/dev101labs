
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Keyboard handling (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMobileNav = () => setIsOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-40
        transition-all duration-300
        backdrop-blur-md
        ${
          scrolled
            ? "bg-neutral-950/80 border-b border-neutral-800/60 shadow-lg"
            : "bg-neutral-950/30 border-b border-transparent"
        }
      `}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="text-lg font-semibold text-white">
          Dev101Labs
        </Link>

        {/* NAV – DESKTOP */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-300 md:flex">
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/government" className="hover:text-white">
            Government Solutions
          </Link>
          <Link href="/real-estate" className="hover:text-white">
            Real Estate Media
          </Link>
          <Link href="/portfolio" className="hover:text-white">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-white">
            About
          </Link>

          <a
            href="mailto:info@dev101labs.com?subject=New%20Strategy%20Call%20Inquiry&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AMy%20name%20is%3A%20%5BName%5D%0D%0AMy%20company%20is%3A%20%5BCompany%5D%0D%0AWebsite%3A%20%5BURL%5D%0D%0A%0D%0AWhat%20I%E2%80%99d%20like%20help%20with%3A%0D%0A%5BBrief%20description%20of%20project%20or%20needs%5D%0D%0A%0D%0AEstimated%20budget%20range%3A%20%5BBudget%5D%0D%0AIdeal%20timeline%3A%20%5BTimeline%5D%0D%0A%0D%0AHow%20did%20you%20hear%20about%20Dev101Labs%3F%0D%0A%5BReferral%20or%20source%5D%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
            className="rounded-full border border-neutral-700 px-4 py-1.5 text-neutral-200 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            Book a Strategy Call
          </a>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-100"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex md:hidden"
          >
            {/* Solid glass background */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-950/98 to-black/98 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Right-side dropdown menu */}
            <motion.nav
              initial={{ y: '-100%', x: '100%' }}
              animate={{ y: 0, x: 0 }}
              exit={{ y: '-100%', x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30,
                mass: 0.8
              }}
              className="relative ml-auto flex h-full w-80 max-w-[85vw] flex-col bg-gradient-to-b from-slate-800/90 via-slate-900/95 to-black/95 shadow-2xl border-l border-white/10"
              style={{
                paddingTop: 'calc(env(safe-area-inset-top) + 1rem)',
                paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)',
                paddingRight: 'calc(env(safe-area-inset-right) + 1rem)'
              }}
            >
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between mb-8 px-4">
                <span className="text-xl font-bold tracking-tight text-white">
                  Dev101Labs
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-slate-200 hover:bg-white/20 active:bg-white/25 focus:outline-none focus:ring-2 focus:ring-emerald-400/70 focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
                  aria-label="Close navigation"
                  type="button"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="flex-1 flex flex-col justify-center px-4 space-y-4">
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-100 hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                >
                  Services
                </Link>
                <Link
                  href="/government"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-100 hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                >
                  Government Solutions
                </Link>
                <Link
                  href="/real-estate"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-100 hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                >
                  Real Estate Media
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-100 hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                >
                  Portfolio
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-lg font-medium text-slate-100 hover:bg-white/10 active:bg-white/15 transition-colors touch-manipulation"
                >
                  About
                </Link>
              </nav>

              {/* CTA section at bottom */}
              <div className="px-4 pb-6 pt-6 space-y-4">
                <a
                  href="mailto:info@dev101labs.com?subject=Strategy%20Call%20with%20Dev101Labs&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AMy%20name%20is%3A%20%5BName%5D%0D%0AMy%20company%20is%3A%20%5BCompany%5D%0D%0AType%20of%20work%20I%27m%20interested%20in%3A%20%5BGovernment%20contracts%20%2F%20SaaS%20platform%20%2F%20Real%20estate%20media%20%2F%20Other%5D%0D%0AEstimated%20timeline%3A%20%5BTimeline%5D%0D%0ABudget%20range%3A%20%5BBudget%5D%0D%0A%0D%0ABrief%20description%20of%20the%20project%3A%0D%5BProject%20details%5D%0D%0A%0D%0AThank%20you%21"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-emerald-400 text-base font-semibold text-black shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 active:bg-emerald-500 touch-manipulation"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  Book a Strategy Call
                </a>

                <p className="text-center text-sm text-slate-400">
                  Or email us directly at{' '}
                  <a
                    href="mailto:info@dev101labs.com"
                    className="font-medium text-emerald-300 hover:text-emerald-200 active:text-emerald-400 transition-colors touch-manipulation"
                  >
                    info@dev101labs.com
                  </a>
                </p>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
