import Link from "next/link";
import {
  CloudRain,
  Wind,
  GitCompareArrows,
  Moon,
  Brain,
  Repeat,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";
import { services } from "@/data/clinic";

export const metadata = {
  title: "Services & Treatments | Neuro Psychiatry Clinic, Noida",
  description:
    "Expert treatment for depression, anxiety, bipolar disorder, insomnia, stress, OCD, de-addiction and psychosis with Dr. Rakesh Kumar Singh in Sector 18, Noida.",
};

const iconMap = {
  "cloud-rain": CloudRain,
  wind: Wind,
  "git-compare-arrows": GitCompareArrows,
  moon: Moon,
  brain: Brain,
  repeat: Repeat,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
};

const details = {
  depression: [
    "Persistent low mood & hopelessness",
    "Loss of interest, energy & focus",
    "Sleep & appetite changes",
  ],
  anxiety: [
    "Panic attacks & constant worry",
    "Social & generalised anxiety",
    "Physical symptoms management",
  ],
  bipolar: [
    "Mood stabilisation",
    "Mania & depression cycles",
    "Long-term relapse prevention",
  ],
  sleep: [
    "Insomnia & disturbed sleep",
    "Sleep-wake cycle correction",
    "Root-cause based therapy",
  ],
  stress: [
    "Work burnout & pressure",
    "Coping skills & relaxation",
    "Lifestyle & stress management",
  ],
  ocd: [
    "Intrusive unwanted thoughts",
    "Repetitive compulsive behaviour",
    "Structured behaviour therapy",
  ],
  deaddiction: [
    "Alcohol, tobacco & drug recovery",
    "Withdrawal management",
    "Relapse prevention support",
  ],
  psychosis: [
    "Schizophrenia & psychosis care",
    "Long-term medical management",
    "Family guidance & support",
  ],
};

const process = [
  {
    step: "01",
    title: "Consultation",
    text: "Carefully understanding your problem — with no hurry and all the time you need.",
  },
  {
    step: "02",
    title: "Diagnosis",
    text: "An accurate assessment and correct diagnosis so the treatment is effective.",
  },
  {
    step: "03",
    title: "Treatment Plan",
    text: "Preparing a personalised, evidence-based treatment plan just for you.",
  },
  {
    step: "04",
    title: "Follow-up & Recovery",
    text: "Full support through regular follow-ups, all the way to recovery.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 lg:pt-44 pb-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-0 h-96 w-96 rounded-full bg-accent-200/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-primary-50),_transparent_55%)]" />
        </div>
        <div className="mx-auto max-w-7xl container-px">
          <nav className="text-sm text-primary-900/50 mb-5">
            <Link href="/" className="hover:text-primary-700">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-primary-700 font-medium">Services</span>
          </nav>
       <SectionHeading
            eyebrow="Treatments We Offer"
            title="Specialised mental health care for every concern"
            subtitle="Modern, research-backed treatment — with a different, personalised plan for every patient."
          />
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl container-px grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {services.map((s) => {
            const Icon = iconMap[s.icon] || Brain;
            return (
              <div
                key={s.slug}
                className="group relative flex flex-col sm:flex-row gap-6 rounded-3xl bg-white p-7 shadow-soft ring-1 ring-sand/70 transition hover:shadow-card hover:ring-primary-200"
              >
                <span className="grid place-items-center h-16 w-16 shrink-0 rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition group-hover:bg-primary-700 group-hover:text-white">
                  <Icon className="h-8 w-8" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-jakarta)] font-bold text-xl text-primary-950">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-900/60">
                    {s.short}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {(details[s.slug] || []).map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-primary-900/70"
                      >
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary-600" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-primary-950 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-primary-700/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl container-px">
          <SectionHeading
            eyebrow="How It Works"
            title="Your recovery journey — in 4 simple steps"
            light
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                <span className="font-[family-name:var(--font-jakarta)] font-extrabold text-5xl text-accent-400/30">
                  {p.step}
                </span>
                <h3 className="mt-2 font-bold text-lg text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-100/70">
                  {p.text}
                </p>
                {i < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-4 -right-4 h-6 w-6 text-primary-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}