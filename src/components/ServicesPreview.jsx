import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/clinic";

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl container-px">
        <SectionHeading
          eyebrow="Our Treatments"
          title="Har mental health concern ke liye expert care"
          subtitle="Diagnosis se lekar full recovery tak — modern, research-backed treatment har patient ke liye personalised."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-7 py-3.5 text-base font-semibold text-primary-800 ring-1 ring-primary-100 transition hover:bg-primary-100"
          >
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}