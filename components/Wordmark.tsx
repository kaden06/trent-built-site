type Size = "sm" | "md" | "lg";
type Tone = "dark" | "cream";

const sizes: Record<Size, { font: string; rule: string }> = {
  sm: { font: "text-base md:text-lg", rule: "w-14 md:w-16" },
  md: { font: "text-xl md:text-2xl", rule: "w-20 md:w-24" },
  lg: { font: "text-3xl md:text-4xl", rule: "w-32 md:w-40" },
};

// TRENT BUILT — locked Identity Round 1.6 wordmark (Option C, stacked).
// Two lines of Archivo Black with a thin rule between them.
//   tone="dark"  → cream type on dark backgrounds, emerald divider
//   tone="cream" → midnight type on cream backgrounds, dark-emerald divider
export default function Wordmark({
  size = "md",
  tone = "dark",
  className = "",
}: {
  size?: Size;
  tone?: Tone;
  className?: string;
}) {
  const s = sizes[size];
  const textColor = tone === "dark" ? "text-cream" : "text-midnight";
  const ruleColor = tone === "dark" ? "bg-trent-emerald" : "bg-trent-emerald-dark";

  return (
    <span
      className={`inline-flex flex-col items-center gap-1.5 leading-none ${className}`}
      aria-label="Trent Built"
    >
      <span
        className={`font-archivo-black uppercase ${s.font} ${textColor}`}
        style={{ letterSpacing: "0.14em", lineHeight: 0.95 }}
      >
        Trent
      </span>
      <span className={`h-px ${s.rule} ${ruleColor}`} aria-hidden />
      <span
        className={`font-archivo-black uppercase ${s.font} ${textColor}`}
        style={{ letterSpacing: "0.14em", lineHeight: 0.95 }}
      >
        Built
      </span>
    </span>
  );
}
