
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
        fixed top-0 left-0 right-0 z-50
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
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              fixed inset-0 z-[200]
              md:hidden flex flex-col
              bg-neutral-900/80      /* strong tint */
              backdrop-blur-2xl      /* frosted glass effect */
              supports-backdrop-blur:bg-neutral-900/70
              border-t border-neutral-800
            "
            onClick={closeMobileNav}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/90 backdrop-blur-xl border-b border-neutral-800">
              {/* Logo */}
              <Link
                href="/"
                className="text-lg font-semibold text-white"
                onClick={closeMobileNav}
              >
                Dev101Labs
              </Link>

              {/* Close button */}
              <button
                onClick={closeMobileNav}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/90 text-slate-100 hover:bg-neutral-800 transition-colors"
                aria-label="Close navigation"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation content */}
            <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
              <div className="flex flex-col gap-4">
                <Link
                  href="/services"
                  onClick={closeMobileNav}
                  className="
                    block w-full
                    rounded-xl
                    bg-neutral-900/60        /* subtle panel under each link */
                    border border-neutral-800/40
                    px-4 py-3 text-lg font-medium text-white
                    hover:bg-neutral-800/80 hover:text-teal-300
                    transition-colors
                  "
                >
                  Services
                </Link>

                <Link
                  href="/government"
                  onClick={closeMobileNav}
                  className="
                    block w-full
                    rounded-xl
                    bg-neutral-900/60        /* subtle panel under each link */
                    border border-neutral-800/40
                    px-4 py-3 text-lg font-medium text-white
                    hover:bg-neutral-800/80 hover:text-teal-300
                    transition-colors
                  "
                >
                  Government Solutions
                </Link>

                <Link
                  href="/real-estate"
                  onClick={closeMobileNav}
                  className="
                    block w-full
                    rounded-xl
                    bg-neutral-900/60        /* subtle panel under each link */
                    border border-neutral-800/40
                    px-4 py-3 text-lg font-medium text-white
                    hover:bg-neutral-800/80 hover:text-teal-300
                    transition-colors
                  "
                >
                  Real Estate Media
                </Link>

                <Link
                  href="/portfolio"
                  onClick={closeMobileNav}
                  className="
                    block w-full
                    rounded-xl
                    bg-neutral-900/60        /* subtle panel under each link */
                    border border-neutral-800/40
                    px-4 py-3 text-lg font-medium text-white
                    hover:bg-neutral-800/80 hover:text-teal-300
                    transition-colors
                  "
                >
                  Portfolio
                </Link>

                <Link
                  href="/about"
                  onClick={closeMobileNav}
                  className="
                    block w-full
                    rounded-xl
                    bg-neutral-900/60        /* subtle panel under each link */
                    border border-neutral-800/40
                    px-4 py-3 text-lg font-medium text-white
                    hover:bg-neutral-800/80 hover:text-teal-300
                    transition-colors
                  "
                >
                  About
                </Link>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-slate-800/80" />

              {/* CTA Block */}
              <div className="mt-8 space-y-4 bg-neutral-900/60 rounded-2xl p-4 border border-neutral-800/40">
                <a
                  href="mailto:info@dev101labs.com?subject=Strategy%20Call%20with%20Dev101Labs&body=Tell%20us%20about%20your%20project%2C%20timeline%2C%20and%20what%20a%20win%20looks%20like."
                  className="w-full inline-flex items-center justify-center rounded-full bg-teal-500 py-3 text-base font-semibold text-black hover:bg-teal-400 transition-colors shadow-lg shadow-teal-500/30"
                  onClick={closeMobileNav}
                >
                  Book a Strategy Call
                </a>
                <p className="text-center text-xs text-slate-400">
                  Or email us directly at{" "}
                  <span className="font-medium text-slate-100">info@dev101labs.com</span>
                </p>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
