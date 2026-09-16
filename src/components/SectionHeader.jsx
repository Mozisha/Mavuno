export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "left",
  dark = false,
  className = "",
  titleClassName = "",
  mono = false,
}) {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";
  return (
    <div
      className={`flex flex-col gap-5 ${alignClass} ${
        dark ? "text-cream" : "text-ink"
      } ${className}`}
    >
      {eyebrow ? (
        <span
          className={`eyebrow-label flex items-center gap-3 ${
            dark ? "text-cream/60" : "text-olive"
          }`}
        >
          <span
            className={`h-px w-8 ${dark ? "bg-cream/40" : "bg-olive/60"}`}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`text-[clamp(1.9rem,4vw,3.15rem)] leading-[1.08] font-semibold tracking-tight-m max-w-3xl ${
          mono ? "font-mono tracking-tight font-medium" : ""
        } ${dark ? "text-cream" : "text-ink"} ${titleClassName}`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`text-[17px] leading-[1.75] max-w-2xl ${
            dark ? "text-cream/70" : "text-slate"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}