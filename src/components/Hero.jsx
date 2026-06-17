import Link from "next/link";
import Image from "next/image";
import {
  Star,
  Calendar,
  Phone,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  Clock,
  ArrowRight,
} from "lucide-react";
import { clinic } from "@/data/clinic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 lg:pt-40 pb-20 lg:pb-28">
      {/* ===== Layered background ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* base wash */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary-50),_transparent_55%)]" />
        {/* colored blobs */}
        <div className="absolute -top-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-accent-200/40 blur-3xl" />
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(var(--color-primary-200) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
        {/* ===== Left: copy ===== */}
        <div className="animate-fade-up">
          {/* eyebrow with avatars */}
          <div className="inline-flex items-center gap-3 rounded-full bg-white/80 backdrop-blur-sm pl-2 pr-4 py-1.5 shadow-soft ring-1 ring-sand">
            <div className="flex -space-x-2.5">
              {["#2c705f", "#3a8c76", "#c4912c", "#265a4e"].map((c, i) => (
                <span
                  key={i}
                  className="grid place-items-center h-7 w-7 rounded-full ring-2 ring-white text-[10px] font-bold text-white"
                  style={{ backgroundColor: c }}
                >
                  {["S", "D", "K", "V"][i]}
                </span>
              ))}
            </div>
            <span className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary-800">
              <span className="flex items-center gap-0.5 text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              5.0 · {clinic.reviewCount}+ Patient Reviews
            </span>
          </div>

          <h1 className="mt-7 font-[family-name:var(--font-jakarta)] font-extrabold text-[2.6rem] sm:text-5xl lg:text-[3.6rem] leading-[1.04] tracking-tight text-primary-950 text-balance">
            Compassionate{" "}
            <span className="relative whitespace-nowrap text-primary-700">
              mental health
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
            care in Noida.
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-primary-900/65">
            Confidential, evidence-based treatment with {clinic.doctor} for
            depression, anxiety, bipolar disorder, sleep and stress problems —
            without judgement and with all the time you need.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-primary-700/25 transition hover:bg-primary-800 hover:-translate-y-0.5"
            >
              <Calendar className="h-5 w-5" />
              Book Appointment
              <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            </Link>
            <a
              href={`tel:${clinic.phoneLink}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-primary-800 ring-1 ring-sand shadow-soft transition hover:ring-primary-300 hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5 text-accent-500" />
              {clinic.phoneDisplay}
            </a>
          </div>

          {/* trust row */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            {[
              { icon: ShieldCheck, label: "100% Confidential" },
              { icon: BadgeCheck, label: `${clinic.experience} Yrs Experience` },
              { icon: MapPin, label: "Sector 18, Noida" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex flex-col items-start gap-2 rounded-2xl bg-white/70 backdrop-blur-sm px-4 py-3.5 ring-1 ring-sand/70"
              >
                <t.icon className="h-5 w-5 text-primary-600" strokeWidth={1.9} />
                <span className="text-xs font-medium leading-tight text-primary-900/75">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Right: image ===== */}
        <div className="relative animate-fade-up [animation-delay:150ms]">
          {/* decorative frame glow */}
          <div className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-primary-200/50 via-transparent to-accent-200/40" />
          <div className="absolute -inset-px -z-10 rounded-[2.4rem] bg-gradient-to-br from-primary-300/30 to-transparent blur-sm" />

          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-[2.25rem] overflow-hidden shadow-card ring-1 ring-white/60">
            <Image
              src="/images/brain-image.png"
              alt="Calm and supportive mental health care"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            {/* gradient veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/55 via-primary-950/5 to-transparent" />

            {/* top: verified doctor chip */}
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 shadow-lg ring-1 ring-white/60">
              <BadgeCheck className="h-4 w-4 text-primary-600" />
              <span className="text-xs font-bold text-primary-900">
                Verified Psychiatrist
              </span>
            </div>

            {/* bottom: doctor name bar */}
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/15 backdrop-blur-md px-4 py-3 ring-1 ring-white/25">
              <p className="font-[family-name:var(--font-jakarta)] font-bold text-white text-sm leading-tight">
                {clinic.doctor}
              </p>
              <p className="text-[11px] text-white/80 mt-0.5">
                {clinic.specialty}
              </p>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  );
}