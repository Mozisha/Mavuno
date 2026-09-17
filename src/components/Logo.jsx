const sizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-[72px] w-[72px]",
};

export default function Logo({
  className = "",
  tone = "dark",
  showWordmark = true,
  size = "md",
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Mavuno"
    >
      <img
        src="/M.png"
        alt=""
        className={`${sizes[size]} rounded-md object-cover`}
        draggable={false}
      />
      {showWordmark ? (
        <>
          <span
            className={`text-[17px] font-semibold tracking-tight-m ${
              tone === "light" ? "text-cream" : "text-ink"
            }`}
          >
            MAVUNO
          </span>
          <span
            className={`hidden border-l pl-3 font-mono text-[10px] uppercase leading-none tracking-[0.18em] lg:inline-block ${
              tone === "light"
                ? "border-cream/20 text-cream/60"
                : "border-line-dark text-slate"
            }`}
          >
            Transfer pricing
            <br />
            infrastructure
          </span>
        </>
      ) : null}
    </span>
  );
}