import Logo from "./Logo.jsx";

const footerNav = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Corporate Groups", href: "#audience" },
  { label: "For Tax Teams", href: "#trust" },
  { label: "About", href: "#africa" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container-x pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo tone="light" showWordmark={false} size="lg" />
            <p className="mt-6 max-w-sm font-serif text-[14.5px] leading-[1.75] text-cream/70">
              Transfer pricing infrastructure for African corporate groups.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="lg:col-span-4 lg:col-start-7"
          >
            <p className="eyebrow-label mb-5 text-cream/50">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] font-medium text-cream/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow-label mb-5 text-cream/50">Contact</p>
            <a
              href="mailto:hello@mavuno.io"
              className="font-mono text-[13.5px] tracking-[0.04em] text-cream/90 transition-colors hover:text-white"
            >
              hello@mavuno.io
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-cream/15 pt-8 md:flex-row md:items-center">
          <p className="max-w-md font-serif text-[13.5px] italic leading-relaxed text-cream/60">
            "Africa's next decade will be defined by the infrastructure we
            build for ourselves."
          </p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-cream/40">
              © {new Date().getFullYear()} Mavuno
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-cream/40">
              Lagos · Nairobi · Accra · Johannesburg
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}