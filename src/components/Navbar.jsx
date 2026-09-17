import { useState, useEffect } from "react";
import Button from "./Button.jsx";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Corporate Groups", href: "#audience" },
  { label: "For Tax Teams", href: "#trust" },
  { label: "About", href: "#africa" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_rgba(7,42,32,0.04)]"
            : "bg-white/60 backdrop-blur-sm border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="container-x flex h-[84px] items-center justify-between gap-4 xl:gap-6"
        >
          <a
            href="#top"
            className="flex items-center"
            aria-label="Mavuno home"
          >
            <img src="/mavuno-logo.png" alt="Mavuno" className="h-12 w-auto" />
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[13.5px] font-medium tracking-tight text-slate transition-colors duration-200 hover:text-forest ${
                  i === 2 || i === 3 ? "hidden xl:inline-block" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <span className="hidden sm:inline-block">
              <Button href="#contact" size="sm" variant="primary">
Contact Us
              </Button>
            </span>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-line-dark text-ink transition-colors hover:border-forest/50 lg:hidden"
            >
              <svg
                viewBox="0 0 20 20"
                className="h-5 w-5"
                fill="none"
                aria-hidden="true"
              >
                {open ? (
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6h14M3 10h14M3 14h9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 top-[84px] z-[60] bg-white transition-opacity duration-300 ease-in-out lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto pt-6 pb-10">
          <div className="container-x">
            <div className="flex flex-col divide-y divide-line border-b border-line">
              {navItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 text-[17px] font-medium tracking-tight text-ink transition-colors hover:text-forest"
                >
                  {item.label}
                  <span className="font-mono text-[11px] tracking-[0.15em] text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className="container-x mt-8">
            <Button
              href="#contact"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Button>
            <a
              href="mailto:hello@mavuno.io"
              className="mt-6 block text-center font-mono text-[12px] tracking-[0.1em] text-slate"
            >
              hello@mavuno.io
            </a>
          </div>
        </div>
      </div>
    </>
  );
}