
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      {isOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-neutral-800/50 px-4 py-6 space-y-4 text-neutral-200">
          <Link href="/services">Services</Link>
          <Link href="/government">Government Solutions</Link>
          <Link href="/real-estate">Real Estate Media</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>

          <a
            href="mailto:info@dev101labs.com?subject=New%20Strategy%20Call%20Inquiry&body=Hi%20Dev101Labs%2C%0D%0A%0D%0AMy%20name%20is%3A%20%5BName%5D%0D%0AMy%20company%20is%3A%20%5BCompany%5D%0D%0AWebsite%3A%20%5BURL%5D%0D%0A%0D%0AWhat%20I%E2%80%99d%20like%20help%20with%3A%0D%0A%5BBrief%20description%20of%20project%20or%20needs%5D%0D%0A%0D%0AEstimated%20budget%20range%3A%20%5BBudget%5D%0D%0AIdeal%20timeline%3A%20%5BTimeline%5D%0D%0A%0D%0AHow%20did%20you%20hear%20about%20Dev101Labs%3F%0D%0A%5BReferral%20or%20source%5D%0D%0A%0D%0A-%0D%0A%5BYour%20Name%5D"
            className="block rounded-full border border-neutral-700 px-4 py-2 text-center mt-4 hover:border-cyan-400 hover:text-cyan-300"
          >
            Book a Strategy Call
          </a>
        </div>
      )}
    </header>
  );
}
