import Link from "next/link";
import { Phone, Calendar, MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function CTA() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl container-px">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 px-7 py-14 sm:px-12 sm:py-16 shadow-card">
          {/* deco */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent-500/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/5 blur-2xl" />

          <div className="relative max-w-2xl">
           <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-white text-balance">
              Take the first step today —{" "}
              <span className="text-accent-300">towards a better tomorrow.</span>
            </h2>
            <p className="mt-4 text-lg text-primary-100/80 leading-relaxed">
              Book an appointment or call directly. Everything you share stays
              completely confidential.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-primary-950 shadow-lg transition hover:bg-accent-400 hover:-translate-y-0.5"
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Link>
              <a
                href={`tel:${clinic.phoneLink}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                {clinic.phoneDisplay}
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-primary-100/70">
              <MapPin className="h-4 w-4 text-accent-300" />
              {clinic.address.line1}, {clinic.address.line2},{" "}
              {clinic.address.pincode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}