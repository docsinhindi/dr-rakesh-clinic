import { stats } from "@/data/clinic";

export default function Stats() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl container-px">
        <div className="rounded-3xl bg-primary-900 px-6 py-10 sm:px-10 sm:py-12 shadow-card">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 divide-y divide-primary-700/40 sm:divide-y-0">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center px-2 ${
                  i !== 0 ? "lg:border-l lg:border-primary-700/40" : ""
                }`}
              >
                <dt className="font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-accent-400">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-xs sm:text-sm font-medium text-primary-100/80 uppercase tracking-wide">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}