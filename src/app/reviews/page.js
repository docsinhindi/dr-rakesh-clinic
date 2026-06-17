import Link from "next/link";
import { Star, Quote, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { reviews, clinic } from "@/data/clinic";

export const metadata = {
  title: "Patient Reviews | Neuro Psychiatry Clinic, Noida — 5.0★ Rated",
  description:
    "Real stories from Dr. Rakesh Kumar Singh's patients. Recovery from depression, anxiety and bipolar disorder — rated 5.0★ on Google, Sector 18 Noida.",
};

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function ReviewsPage() {
  return (
    <>
      <section className="relative pt-32 lg:pt-44 pb-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary-50),_transparent_55%)]" />
        </div>
        <div className="mx-auto max-w-7xl container-px">
          <nav className="text-sm text-primary-900/50 mb-5">
            <Link href="/" className="hover:text-primary-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-700 font-medium">Reviews</span>
          </nav>
      <SectionHeading
            eyebrow="Patient Stories"
            title="Real patients, real recovery"
            subtitle="These stories show how the right care and the right treatment can change a life."
          />
          {/* rating summary */}
          <div className="mt-10 mx-auto max-w-md rounded-3xl bg-white p-7 shadow-card ring-1 ring-sand text-center">
            <div className="flex items-center justify-center gap-1 text-accent-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-current" />
              ))}
            </div>
            <p className="mt-3 font-[family-name:var(--font-jakarta)] font-extrabold text-4xl text-primary-950">
              {clinic.rating.toFixed(1)}
            </p>
            <p className="mt-1 text-sm text-primary-900/60">
              Based on {clinic.reviewCount}+ Google Reviews
            </p>
            <a
              href={clinic.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-50 px-5 py-2.5 text-sm font-semibold text-primary-700 ring-1 ring-primary-100 transition hover:bg-primary-100"
            >
              View on Google
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* All reviews masonry */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl container-px">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
            {reviews.map((r) => (
              <figure
                key={r.name}
                className="break-inside-avoid rounded-3xl bg-white p-6 shadow-soft ring-1 ring-sand/70"
              >
                <div className="flex items-center justify-between">
                  <Quote className="h-7 w-7 text-primary-300" />
                  <div className="flex items-center gap-0.5 text-accent-500">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-primary-900/75">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-sand pt-4">
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-primary-700 text-sm font-bold text-white">
                    {initials(r.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-primary-950 text-sm truncate">
                      {r.name}
                    </p>
                    <p className="text-xs text-primary-900/55">
                      {r.tag} · {r.date}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}