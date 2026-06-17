export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase ${
            light
              ? "bg-white/10 text-accent-300"
              : "bg-primary-100 text-primary-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 font-[family-name:var(--font-jakarta)] font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.1] text-balance ${
          light ? "text-white" : "text-primary-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? "text-primary-100/80" : "text-primary-900/65"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}