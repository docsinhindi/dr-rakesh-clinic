import Link from "next/link";
import { Star, Quote, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { reviews, clinic } from "@/data/clinic";

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const featured = reviews.slice(0, 6);
  return (
    <section className="py-20 lg:py-28 bg-primary-950 relative overflow-hidden">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-60">
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-primary-700/40 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl container-px">
       <SectionHeading
          eyebrow="Patient Stories"
          title="Recovery that changes lives"
          subtitle="Real patients, real improvement — rated 5.0★ on Google."
          light
        />

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {featured.map((r) => (
            <figure
              key={r.name}
              className="break-inside-avoid rounded-3xl bg-white/[0.04] backdrop-blur-sm p-6 ring-1 ring-white/10 transition hover:ring-accent-400/40"
            >
              <Quote className="h-7 w-7 text-accent-400/70" />
              <div className="mt-3 flex items-center gap-0.5 text-accent-400">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-primary-100/85">
                {r.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-primary-700 text-sm font-bold text-white">
                  {initials(r.name)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm truncate">
                    {r.name}
                  </p>
                  <p className="text-xs text-primary-100/55">
                    {r.tag} · {r.date}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-base font-semibold text-primary-950 shadow-lg transition hover:bg-accent-400 hover:-translate-y-0.5"
          >
            Read All {clinic.reviewCount}+ Reviews
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}