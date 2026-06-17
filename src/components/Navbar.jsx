"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Brain, Phone, Menu, X, Calendar } from "lucide-react";
import { clinic, navLinks } from "@/data/clinic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info strip */}
      <div className="hidden md:block bg-primary-900 text-primary-50/90 text-xs">
        <div className="mx-auto max-w-7xl container-px flex items-center justify-between py-2">
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
            {clinic.address.line1}, {clinic.address.line2}
          </p>
          <div className="flex items-center gap-5">
            <span>Mon – Sat: 10 AM – 8 PM</span>
            <a
              href={`tel:${clinic.phoneLink}`}
              className="flex items-center gap-1.5 font-medium hover:text-accent-300 transition"
            >
              <Phone className="h-3.5 w-3.5" />
              {clinic.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-cream/80 backdrop-blur-xl shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl container-px flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="grid place-items-center h-11 w-11 rounded-2xl bg-primary-700 text-white shadow-md group-hover:bg-primary-800 transition">
              <Brain className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-jakarta)] font-extrabold text-base lg:text-lg text-primary-900">
                {clinic.name}
              </span>
              <span className="block text-[11px] lg:text-xs text-primary-600 font-medium tracking-wide">
                {clinic.doctor}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-primary-900/80 hover:text-primary-900 hover:bg-primary-100/60 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-primary-950 shadow-md hover:bg-accent-400 transition"
            >
              <Calendar className="h-4 w-4" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid place-items-center h-11 w-11 rounded-xl bg-primary-100 text-primary-800"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-sand shadow-card">
            <ul className="container-px py-4 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-primary-900 hover:bg-primary-100 transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`tel:${clinic.phoneLink}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary-700 px-5 py-3 text-base font-semibold text-white"
                >
                  <Phone className="h-4 w-4" /> Call {clinic.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}