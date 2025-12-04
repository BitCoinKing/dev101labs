
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
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-neutral-700 px-4 py-1.5 text-neutral-200 hover:border-cyan-400 hover:text-cyan-300 transition"
          >
            Book a Strategy Call
          </Link>
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
          <Link href="/contact">Contact</Link>

          <Link
            href="/contact"
            className="block rounded-full border border-neutral-700 px-4 py-2 text-center mt-4 hover:border-cyan-400 hover:text-cyan-300"
          >
            Book a Strategy Call
          </Link>
        </div>
      )}
    </header>
  );
}
