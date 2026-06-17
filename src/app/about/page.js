import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Stethoscope,
  Award,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Brain,
  Users,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { clinic } from "@/data/clinic";

export const metadata = {
  title: "About Dr. Rakesh Kumar Singh | Neuro Psychiatry Clinic, Noida",
  description:
    "Learn about Dr. Rakesh Kumar Singh — experienced Psychiatrist & Neuro-Psychiatry specialist in Sector 18, Noida. Compassionate, confidential mental healthcare.",
};

const journey = [
  {
    icon: GraduationCap,
    title: "Qualified Psychiatrist",
    text: "MBBS, MD (Psychiatry) — modern psychiatric care backed by a strong academic and clinical foundation.",
  },
  {
    icon: Stethoscope,
    title: "Neuro-Psychiatry Focus",
    text: "Holistic, root-cause-based treatment that understands both the mind and the brain.",
  },
  {
    icon: Award,
    title: "15+ Years of Practice",
    text: "Has guided thousands of patients to recovery in cases like depression, anxiety, bipolar disorder and addiction.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-First Approach",
    text: "A sober, polite and judgement-free consultation — with full time for every patient.",
  },
];

const values = [
  {
    icon: Brain,
    title: "Holistic Treatment",
    text: "Not just the symptoms, but the whole person — lifestyle, sleep and family environment included.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Confidentiality",
    text: "Everything you share is safe. Your privacy is our biggest responsibility.",
  },
  {
    icon: Users,
    title: "Family Guidance",
    text: "We guide the family along with the patient, so recovery is supported at home too.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative pt-32 lg:pt-44 pb-16 lg:pb-20 overflow-hidden">
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
            <span className="text-primary-700 font-medium">About</span>
          </nav>
          <SectionHeading
            eyebrow="About the Doctor"
            title="Towards better mental health, together"
            subtitle="Dr. Rakesh Kumar Singh's goal is to understand every patient, offer real support, and provide the right treatment in a calm, confidential environment."
            align="left"
          />
        </div>
      </section>

      {/* Doctor profile */}
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary-100 to-accent-100/60" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-card ring-1 ring-sand">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1200&auto=format&fit=crop"
                alt={clinic.doctor}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-5 left-4 sm:left-6 rounded-2xl bg-white/95 backdrop-blur p-4 shadow-card ring-1 ring-sand">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-12 w-12 rounded-xl bg-primary-700 text-white">
                  <Award className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-[family-name:var(--font-jakarta)] font-extrabold text-primary-950">
                    15+ Years
                  </p>
                  <p className="text-xs text-primary-900/60">of trusted care</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl text-primary-950">
              {clinic.doctor}
            </h2>
            <p className="mt-1.5 font-medium text-primary-600">
              {clinic.specialty}
            </p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-primary-900/70">
              <p>
                Dr. Rakesh Kumar Singh is an experienced psychiatrist at the
                Neuro Psychiatry Clinic located in Sector 18, Noida. Over the
                past 15+ years, he has helped thousands of patients across Delhi
                NCR overcome their mental health problems.
              </p>
              <p>
                What sets his approach apart is that he gives every patient his
                full time — without rushing and without judgement. Patients
                often describe him as &ldquo;sober and polite,&rdquo; which
                becomes a great source of support during difficult times.
              </p>
              <p>
                Depression, anxiety, bipolar disorder, sleep problems, stress
                and de-addiction — for every case an evidence-based and
                personalised treatment plan is created.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {journey.map((j) => (
                <div
                  key={j.title}
                  className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-sand/70"
                >
                  <span className="grid place-items-center h-11 w-11 rounded-xl bg-primary-50 text-primary-700 ring-1 ring-primary-100">
                    <j.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-3 font-semibold text-primary-950">
                    {j.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary-900/60 leading-relaxed">
                    {j.text}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-700/25 transition hover:bg-primary-800 hover:-translate-y-0.5"
            >
              Book a Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-sand/40">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="The principles we believe in"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-sand/70 text-center"
              >
                <span className="mx-auto grid place-items-center h-14 w-14 rounded-2xl bg-primary-700 text-white">
                  <v.icon className="h-7 w-7" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-jakarta)] font-bold text-lg text-primary-950">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-900/60">
                  {v.text}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-primary-900/75">
            {[
              "Evidence-Based Treatment",
              "100% Confidential",
              "Personalised Care Plans",
              "Family Counselling",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary-600" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </>
  );
}