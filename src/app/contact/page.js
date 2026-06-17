import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Calendar,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { clinic } from "@/data/clinic";

export const metadata = {
  title: "Contact & Appointment | Neuro Psychiatry Clinic, Noida",
  description:
    "Get in touch with the Neuro Psychiatry Clinic, Sector 18 Noida. Call, WhatsApp or get directions to book an appointment with Dr. Rakesh Kumar Singh.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    value: clinic.phoneDisplay,
    href: `tel:${clinic.phoneLink}`,
    note: "Mon – Sat, 10 AM – 8 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us",
    href: `https://wa.me/${clinic.whatsapp}`,
    note: "For a quick query or appointment",
  },
  {
    icon: Mail,
    title: "Email",
    value: clinic.email,
    href: `mailto:${clinic.email}`,
    note: "We'll reply soon",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 lg:pt-44 pb-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary-50),_transparent_55%)]" />
        </div>
        <div className="mx-auto max-w-7xl container-px">
          <nav className="text-sm text-primary-900/50 mb-5">
            <Link href="/" className="hover:text-primary-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-700 font-medium">Contact</span>
          </nav>
         <SectionHeading
            eyebrow="Get in Touch"
            title="Book your appointment today"
            subtitle="Taking the first step is the biggest step. We're here to help you — with complete privacy."
          />
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl container-px grid gap-6 sm:grid-cols-3">
          {contactCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.title === "WhatsApp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-3xl bg-white p-7 shadow-soft ring-1 ring-sand/70 transition hover:-translate-y-1 hover:shadow-card hover:ring-primary-200"
            >
              <span className="grid place-items-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition group-hover:bg-primary-700 group-hover:text-white">
                <c.icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-jakarta)] font-bold text-lg text-primary-950">
                {c.title}
              </h3>
              <p className="mt-1 font-medium text-primary-700 break-words">
                {c.value}
              </p>
              <p className="mt-1 text-sm text-primary-900/55">{c.note}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Address + Hours + Map */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Info */}
          <div className="rounded-3xl bg-white p-8 shadow-soft ring-1 ring-sand/70 flex flex-col">
            <h3 className="font-[family-name:var(--font-jakarta)] font-extrabold text-2xl text-primary-950">
              Clinic Information
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex gap-4">
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                  <MapPin className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h4 className="font-semibold text-primary-950">Address</h4>
                  <p className="mt-1 text-sm text-primary-900/65 leading-relaxed">
                    {clinic.address.line1}, {clinic.address.line2},
                    <br />
                    {clinic.address.state} — {clinic.address.pincode}
                  </p>
                  <p className="mt-1 text-xs text-primary-900/45">
                    Plus Code: {clinic.address.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid place-items-center h-12 w-12 shrink-0 rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                  <Clock className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h4 className="font-semibold text-primary-950">
                    Working Hours
                  </h4>
                  <ul className="mt-1 space-y-1 text-sm text-primary-900/65">
                    {clinic.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-6">
                        <span>{h.day}</span>
                        <span className="font-medium text-primary-800">
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-3">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-700/25 transition hover:bg-primary-800"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
              <a
                href={`tel:${clinic.phoneLink}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-primary-950 shadow-lg transition hover:bg-accent-400"
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden shadow-soft ring-1 ring-sand/70 min-h-[360px] lg:min-h-0">
            <iframe
              title="Neuro Psychiatry Clinic Location"
              src={clinic.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}