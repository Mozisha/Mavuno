import { SectionHeader } from "./SectionHeader.jsx";
import { Reveal } from "./Reveal.jsx";

const chain = [
  { k: "SOURCE", v: "registries · filings · gazettes" },
  { k: "DATA", v: "extracted · normalised" },
  { k: "VERIFICATION", v: "provenance · validation" },
  { k: "ANALYSIS", v: "screening · benchmarking" },
  { k: "POSITION", v: "arm's length conclusion" },
  { k: "DOCUMENTATION", v: "local · master · audit" },
];

export default function Trust() {
  return (
    <section id="trust" className="border-y border-line bg-white">
      <div className="container-x py-20 md:py-28">
        <SectionHeader
          eyebrow="Credibility"
          title="Built for practitioner-grade defensibility."
          lead="Defensible transfer pricing is a chain, not a document. Every position Mavuno supports passes through the same disciplined sequence — and every link is visible."
        />

        <Reveal delay={120}>
          <div className="mt-14 grid gap-2 overflow-hidden rounded-xl border border-line bg-cream p-3 md:grid-cols-6 md:gap-0 md:border-0 md:bg-transparent md:p-0">
            {chain.map((c, i) => (
              <div key={c.k} className="relative">
                <div className="flex h-full flex-col rounded-lg border border-line bg-white p-5 transition-shadow duration-200 hover:shadow-[0_6px_24px_rgba(7,42,32,0.06)] md:rounded-none md:border-r-0 md:first:rounded-l-lg md:last:rounded-r-lg md:last:border-r">
                  <span className="font-mono text-[10px] tracking-[0.1em] text-slate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 text-[13.5px] font-semibold uppercase tracking-[0.06em] text-forest">
                    {c.k}
                  </span>
                  <span className="mt-2 text-[11px] leading-relaxed text-slate">
                    {c.v}
                  </span>
                </div>
                {i < chain.length - 1 ? (
                  <svg
                    className="absolute -right-[9px] top-1/2 z-20 hidden h-4 w-4 -translate-y-1/2 text-line-dark md:block"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="3" fill="#fff" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-center rounded-lg border border-line bg-cream/60 p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-olive">
                Provenance
              </span>
              <p className="mt-3 text-[clamp(1.3rem,2.6vw,1.8rem)] font-semibold leading-snug tracking-tight-m text-ink">
                Every conclusion traceable to source.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="flex h-full flex-col justify-center rounded-lg border border-line bg-forest p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-olive">
                Foundation
              </span>
              <p className="mt-3 text-[clamp(1.3rem,2.6vw,1.8rem)] font-semibold leading-snug tracking-tight-m text-cream">
                Every position built on verified African comparables.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <p className="mt-14 border-t border-line pt-8 font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
            No logos, no testimonials, no awards. The work — and the chain behind it — is the credential.
          </p>
        </Reveal>
      </div>
    </section>
  );
}