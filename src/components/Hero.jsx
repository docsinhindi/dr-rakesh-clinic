import Link from "next/link";
import Image from "next/image";
import { Star, Calendar, Phone, ShieldCheck, MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-40 pb-16 lg:pb-24">
      {/* soft background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary-50),_transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-primary-700 shadow-soft ring-1 ring-sand">
            <span className="flex items-center gap-0.5 text-accent-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            5.0 Google Rating · {clinic.reviewCount}+ Reviews
          </span>
<h1 className="mt-6 font-[family-name:var(--font-jakarta)] font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] text-primary-950 text-balance">
            Compassionate{" "}
            <span className="relative whitespace-nowrap text-primary-700">
              mental health care
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="var(--color-accent-400)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            in Noida.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-900/65">
            Confidential, evidence-based treatment with {clinic.doctor} for
            depression, anxiety, bipolar disorder, sleep and stress problems —
            without judgement and with all the time you need.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-700/25 transition hover:bg-primary-800 hover:-translate-y-0.5"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Link>
            <a
              href={`tel:${clinic.phoneLink}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary-800 ring-1 ring-sand shadow-soft transition hover:ring-primary-300"
            >
              <Phone className="h-5 w-5 text-accent-500" />
              {clinic.phoneDisplay}
            </a>
          </div>

          {/* trust row */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-primary-900/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-600" />
              100% Confidential
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-600" />
              Sector 18, Noida
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 text-accent-500 fill-current" />
              {clinic.experience} Yrs Experience
            </span>
          </div>
        </div>

        {/* Right: image card */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2rem] overflow-hidden shadow-card ring-1 ring-sand">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop"
              alt="Calm and supportive mental health care"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
          </div>

          {/* floating stat card */}
          <div className="absolute -bottom-5 -left-2 sm:left-4 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-card ring-1 ring-sand">
            <div className="flex items-center gap-3">
              <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary-700 text-white font-[family-name:var(--font-jakarta)] font-extrabold">
                5K+
              </span>
              <div>
                <p className="text-sm font-bold text-primary-950 leading-tight">
                  Patients Treated
                </p>
                <p className="text-xs text-primary-900/60">
                  with trusted care
                </p>
              </div>
            </div>
          </div>

          {/* floating rating chip */}
          <div className="absolute -top-3 right-2 sm:right-6 rounded-full bg-accent-500 px-4 py-2 text-sm font-bold text-primary-950 shadow-lg flex items-center gap-1.5">
            <Star className="h-4 w-4 fill-current" />
            5.0 Rated
          </div>
        </div>
      </div>
    </section>
  );
}