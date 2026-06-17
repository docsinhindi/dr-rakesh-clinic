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
  ArrowUpRight,
} from "lucide-react";

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

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Brain;
  return (
    <Link
      href="/services"
      className="group relative flex flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-sand/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card hover:ring-primary-200"
    >
      {/* glow accent */}
      <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent-400/0 to-transparent group-hover:via-accent-400/70 transition-all" />

      <span className="grid place-items-center h-14 w-14 rounded-2xl bg-primary-50 text-primary-700 ring-1 ring-primary-100 transition-colors group-hover:bg-primary-700 group-hover:text-white">
        <Icon className="h-7 w-7" strokeWidth={1.75} />
      </span>

      <h3 className="mt-5 font-[family-name:var(--font-jakarta)] font-bold text-lg text-primary-950">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-primary-900/60 grow">
        {service.short}
      </p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 group-hover:text-accent-600 transition">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}