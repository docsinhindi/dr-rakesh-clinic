import Link from "next/link";
import Image from "next/image";
import { Award, GraduationCap, Stethoscope, ArrowRight } from "lucide-react";
import { clinic } from "@/data/clinic";
const credentials = [
  {
    icon: GraduationCap,
    title: "Qualified Psychiatrist",
    text: "MBBS, MD (Psychiatry) — modern psychiatric training.",
  },
  {
    icon: Stethoscope,
    title: "Neuro-Psychiatry Expertise",
    text: "Holistic treatment that understands both the mind and the brain.",
  },
  {
    icon: Award,
    title: "15+ Years Experience",
    text: "Has guided thousands of patients all the way to recovery.",
  },
];
export default function DoctorIntro() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-100 to-accent-100/60" />
          <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-[2rem] overflow-hidden shadow-card ring-1 ring-sand">
            <Image
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
              alt={clinic.doctor}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-700">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Meet Your Doctor
          </span>

          <h2 className="mt-4 font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl text-primary-950">
            {clinic.doctor}
          </h2>
          <p className="mt-1.5 font-medium text-primary-600">
            {clinic.specialty}
          </p>

          <p className="mt-5 text-base leading-relaxed text-primary-900/65">
            Dr. Rakesh gives his patients his full time — with a calm, sober and
            polite approach. He believes every patient's story is different, so
            the treatment is planned individually for each person. From diagnosis
            to recovery, you are never alone.
          </p>

          <div className="mt-8 space-y-5">
            {credentials.map((c) => (
              <div key={c.title} className="flex gap-4">
                <span className="grid place-items-center h-11 w-11 shrink-0 rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-semibold text-primary-950">{c.title}</h3>
                  <p className="text-sm text-primary-900/60">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-700/25 transition hover:bg-primary-800 hover:-translate-y-0.5"
          >
            Read Full Profile
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}