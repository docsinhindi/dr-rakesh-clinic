import Link from "next/link";
import {
  Brain,
  Phone,
  Mail,
  MapPin,
  Clock,
//   Facebook,
//   Instagram,
//   Youtube,
} from "lucide-react";
import { clinic, navLinks, services } from "@/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-100/80">
      <div className="mx-auto max-w-7xl container-px py-14 lg:py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center h-11 w-11 rounded-2xl bg-primary-700 text-white">
              <Brain className="h-6 w-6" />
            </span>
            <span className="font-[family-name:var(--font-jakarta)] font-extrabold text-lg text-white">
              {clinic.name}
            </span>
          </div>
        <p className="text-sm leading-relaxed text-primary-100/70">
            {clinic.doctor} — {clinic.specialty}. Compassionate, confidential
            and evidence-based mental healthcare in Noida.
          </p>
          {/* <div className="flex items-center gap-3 mt-5">
            <a href={clinic.social.facebook} className="grid place-items-center h-9 w-9 rounded-full bg-primary-800 hover:bg-accent-500 hover:text-primary-950 transition" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={clinic.social.instagram} className="grid place-items-center h-9 w-9 rounded-full bg-primary-800 hover:bg-accent-500 hover:text-primary-950 transition" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={clinic.social.youtube} className="grid place-items-center h-9 w-9 rounded-full bg-primary-800 hover:bg-accent-500 hover:text-primary-950 transition" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </a>
          </div> */}
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-accent-300 transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-4">Treatments</h4>
          <ul className="space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href="/services" className="hover:text-accent-300 transition">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-accent-400" />
              <span>
                {clinic.address.line1}, {clinic.address.line2},{" "}
                {clinic.address.state} {clinic.address.pincode}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="h-5 w-5 shrink-0 text-accent-400" />
              <a href={`tel:${clinic.phoneLink}`} className="hover:text-accent-300 transition">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="h-5 w-5 shrink-0 text-accent-400" />
              <a href={`mailto:${clinic.email}`} className="hover:text-accent-300 transition">
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-5 w-5 shrink-0 text-accent-400" />
              <span>Mon – Sat: 10 AM – 8 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-800/60">
        <div className="mx-auto max-w-7xl container-px py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-100/60">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>{clinic.doctor} · Psychiatrist · Noida, U.P.</p>
        </div>
      </div>
    </footer>
  );
}