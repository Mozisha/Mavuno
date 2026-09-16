import { Link } from "./Link.jsx";

const base =
  "group inline-flex items-center justify-center gap-2 font-medium text-sm tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 cursor-pointer select-none whitespace-nowrap";

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-[52px] px-8 text-[15px]",
};

const variants = {
  primary:
    "bg-forest text-cream hover:bg-forest-light active:bg-forest-muted",
  outline:
    "border border-line-dark text-ink hover:border-forest/60 hover:text-forest",
  outlineDark:
    "border border-cream/30 text-cream hover:border-cream/70 hover:text-white",
  ghost: "text-slate hover:text-forest",
  onDark:
    "bg-cream text-forest hover:bg-white active:bg-mist",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h9.5M8.5 3.5 13 8l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}