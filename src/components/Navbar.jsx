"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Brain,
  Phone,
  Menu,
  X,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
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

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center h-11 w-11 rounded-xl bg-primary-100 text-primary-800 ring-1 ring-primary-200/60 active:scale-95 transition"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* ===== Mobile slide-in sidebar ===== */}

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 bg-primary-950/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-50 h-[100dvh] w-[85%] max-w-sm bg-cream shadow-2xl ring-1 ring-sand flex flex-col transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-sand bg-white">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5"
          >
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary-700 text-white shadow-md">
              <Brain className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-[family-name:var(--font-jakarta)] font-extrabold text-sm text-primary-900">
                {clinic.name}
              </span>
              <span className="block text-[10px] text-primary-600 font-medium">
                {clinic.doctor}
              </span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="grid place-items-center h-10 w-10 rounded-xl bg-primary-50 text-primary-800 ring-1 ring-primary-100 active:scale-95 transition"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-2 mb-3 text-[11px] font-semibold uppercase tracking-widest text-primary-900/40">
            Menu
          </p>
          <ul className="space-y-1.5">
            {navLinks.map((l, i) => (
              <li
                key={l.href}
                style={{
                  transitionDelay: open ? `${100 + i * 60}ms` : "0ms",
                }}
                className={`transition-all duration-500 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold text-primary-900 hover:bg-white hover:shadow-soft ring-1 ring-transparent hover:ring-sand transition"
                >
                  {l.label}
                  <ArrowRight className="h-4 w-4 text-primary-300 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-accent-500 transition-all" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact block */}
          <div className="mt-7 rounded-2xl bg-white p-5 ring-1 ring-sand shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-900/40 mb-3">
              Get in Touch
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-500" />
                <span className="text-primary-900/70 leading-relaxed">
                  {clinic.address.line1}, {clinic.address.line2}
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="h-4 w-4 shrink-0 text-accent-500" />
                <a
                  href={`tel:${clinic.phoneLink}`}
                  className="text-primary-900/70 hover:text-primary-700 font-medium"
                >
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock className="h-4 w-4 shrink-0 text-accent-500" />
                <span className="text-primary-900/70">Mon – Sat · 10 AM – 8 PM</span>
              </li>
            </ul>
          </div>
        </nav>

        {/* Footer CTA */}
        <div className="px-4 py-4 border-t border-sand bg-white space-y-2.5">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-accent-500 px-5 py-3.5 text-base font-semibold text-primary-950 shadow-md active:scale-[0.98] transition"
          >
            <Calendar className="h-5 w-5" />
            Book Appointment
          </Link>
          <a
            href={`tel:${clinic.phoneLink}`}
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary-700 px-5 py-3.5 text-base font-semibold text-white active:scale-[0.98] transition"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </aside>
    </header>
  );
}