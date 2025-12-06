"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/government", label: "Government Solutions" },
  { href: "/real-estate", label: "Real Estate Media" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleStrategyClick = () => {
    const subject = encodeURIComponent("Strategy Call with Dev101Labs");
    const body = encodeURIComponent(
      [
        "Hi Dev101Labs,",
        "",
        "I'd like to schedule a strategy call.",
        "",
        "A bit about my organization / project:",
        "- Company / agency:",
        "- Website (if any):",
        "- Are you looking for government contracts, SaaS builds, real estate media, or something else?",
        "- Rough timeline:",
        "- Budget range:",
        "",
        "Best,",
        "",
      ].join("\n")
    );

    window.location.href = `mailto:info@dev101labs.com?subject=${subject}&body=${body}`;
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href) || pathname === href;

  return (
    <>
      {/* TOP NAV */}
      <header
        className={`sticky top-0 z-40 border-b border-white/5 transition-colors ${
          hasScrolled ? "bg-black/70 backdrop-blur-xl" : "bg-black/40"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
          {/* BRAND */}
          <Link
            href="/"
            className="group relative flex items-center gap-3"
            aria-label="Dev101Labs home"
          >
            {/* Neon chip */}
            <div className="relative flex h-9 items-center rounded-full border border-emerald-400/50 bg-gradient-to-r from-emerald-500/15 via-emerald-400/10 to-cyan-400/15 px-4 shadow-[0_0_40px_rgba(16,185,129,0.55)] transition-all group-hover:border-emerald-300 group-hover:shadow-[0_0_55px_rgba(16,185,129,0.8)]">
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-emerald-200">
                DEV101
              </span>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-medium uppercase tracking-[0.28em] text-slate-300">
                Labs
              </span>
              <span className="text-[10px] font-normal uppercase tracking-[0.3em] text-slate-500 group-hover:text-slate-300">
                Technology · Strategy · Media
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition-colors ${
                    active
                      ? "text-emerald-300"
                      : "text-slate-300/80 hover:text-slate-50"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-emerald-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <button
            onClick={handleStrategyClick}
            className="hidden items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_35px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400 hover:shadow-[0_0_45px_rgba(16,185,129,0.9)] md:inline-flex"
          >
            Book a Strategy Call
          </button>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 shadow-md backdrop-blur-md md:hidden"
            aria-label="Open navigation menu"
          >
            <span className="sr-only">Open navigation</span>
            <span className="flex flex-col gap-[5px]">
              <span className="block h-[2px] w-[14px] rounded bg-slate-100" />
              <span className="block h-[2px] w-[18px] rounded bg-slate-100" />
              <span className="block h-[2px] w-[14px] rounded bg-slate-100" />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-2xl"
          >
            {/* Gradient wash */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_55%)]" />

            <div className="relative z-10 flex h-full flex-col">
              {/* Top bar inside menu */}
              <div className="flex items-center justify-between px-5 pt-4 pb-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm font-semibold text-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/50 text-[10px] font-semibold tracking-[0.28em] text-emerald-200 uppercase shadow-[0_0_24px_rgba(16,185,129,0.7)]">
                    DEV
                  </div>
                  <span className="tracking-[0.24em] uppercase text-xs text-slate-300">
                    101 Labs
                  </span>
                </Link>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/40 text-slate-100 shadow-lg"
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 overflow-y-auto px-5 pb-6 pt-2">
                <div className="space-y-3">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <button
                        key={link.href}
                        onClick={() => {
                          window.location.href = link.href;
                        }}
                        className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-base font-medium shadow-[0_18px_45px_rgba(15,23,42,0.85)] transition ${
                          active
                            ? "border-emerald-400/80 bg-emerald-500/15 text-emerald-100"
                            : "border-white/8 bg-black/40 text-slate-100 hover:border-emerald-300/60 hover:bg-emerald-500/10"
                        }`}
                      >
                        <span>{link.label}</span>
                        {active && (
                          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Divider */}
                <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* CTA */}
                <button
                  onClick={handleStrategyClick}
                  className="mb-3 flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_0_45px_rgba(16,185,129,0.9)] transition hover:bg-emerald-400"
                >
                  Book a Strategy Call
                </button>

                <p className="text-[11px] leading-relaxed text-slate-400">
                  Prefer email? Reach us at{" "}
                  <a
                    href="mailto:info@dev101labs.com"
                    className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                  >
                    info@dev101labs.com
                  </a>{" "}
                  with a short brief and we’ll respond with next steps.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
