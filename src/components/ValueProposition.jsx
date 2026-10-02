import { Reveal } from "./Reveal.jsx";

const pillars = [
  {
    k: "Traceable",
    v: "Every conclusion linked backward to the source it came from.",
  },
  {
    k: "Verified",
    v: "Every position built on comparables validated against African records.",
  },
  {
    k: "Defensible",
    v: "Work that holds up because the underlying data, method, and logic stand together.",
  },
];

export default function ValueProposition() {
  return (
    <section id="value" className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 md:py-32">
        <Reveal>
          <span className="eyebrow-label flex items-center gap-3 text-amber">
            <span className="h-px w-8 bg-amber/40" aria-hidden="true" />
            The standard
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.1] tracking-tight-m text-ink">
            Built for the standard your signature represents.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl font-serif text-[16.5px] leading-[1.75] text-slate">
            Your tax director signs their name to what Mavuno produces. That
            signature is only worth something if the underlying work is
            rigorous enough to defend under audit.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.k} delay={i * 80} className="h-full">
              <div className="group h-full bg-white p-8 transition-colors duration-300 hover:bg-cream">
                <span className="font-mono text-[11px] tracking-[0.14em] text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-[19px] font-semibold tracking-tight text-ink">
                  {p.k}
                </h3>
                <p className="mt-3 font-serif text-[13.5px] leading-[1.75] text-slate">
                  {p.v}
                </p>
                <span
                  className="mt-8 block h-px w-8 bg-line transition-all duration-300 group-hover:w-full group-hover:bg-olive/30"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate">
              Mavuno exists for the signature, not the software.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}