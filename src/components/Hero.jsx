import Button, { ArrowIcon } from "./Button.jsx";
import { Reveal } from "./Reveal.jsx";

function SpineNode({ step, title, sub, active = false, mono = "" }) {
  return (
    <div className="relative flex items-start gap-4">
      <div className="relative flex flex-col items-center">
        <span
          className={`z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] transition-colors ${
            active
              ? "border-forest bg-forest text-cream"
              : "border-line-dark bg-cream text-slate"
          }`}
        >
          {step}
        </span>
        {step < 7 ? (
          <span className="absolute top-7 bottom-[-18px] w-px bg-line-dark" aria-hidden="true" />
        ) : null}
      </div>
      <div className="min-w-0 pb-[18px]">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span
            className={`text-[14px] font-semibold tracking-tight ${
              active ? "text-forest" : "text-ink"
            }`}
          >
            {title}
          </span>
          {mono ? (
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">
              {mono}
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 text-[12.5px] leading-snug text-slate">{sub}</p>
      </div>
    </div>
  );
}

function SpinePanel() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-white shadow-[0_1px_2px_rgba(7,42,32,0.05)]">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-olive" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
            Comparables spine
          </span>
        </div>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
          <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-olive opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest" />
          </span>
          Live · AG-2026
        </span>
      </div>

      <div className="px-5 py-5">
        <SpineNode
          step={1}
          title="African jurisdictions"
          sub="NG · KE · GH · ZA · EG · MX"
          mono="sources"
        />
        <SpineNode
          step={2}
          title="Corporate entities"
          sub="Companies registers and gazettes"
          mono="resolved"
        />
        <SpineNode
          step={3}
          title="Financial data"
          sub="Statutory filings, annual returns"
          mono="extracted"
        />
        <SpineNode
          step={4}
          title="Comparable companies"
          sub="Industry and region matched"
          mono="screened"
        />
        <SpineNode
          step={5}
          title="Verified comparables spine"
          sub="Practitioner and provenance validated"
          mono="verified"
          active
        />
        <SpineNode
          step={6}
          title="Benchmarking"
          sub="Interquartile range, arm's length analysis"
          mono="computed"
        />
        <SpineNode
          step={7}
          title="Transfer pricing documentation"
          sub="Local file, master file, audit response"
          mono="status: ready"
        />
      </div>

      <div className="flex items-center justify-between border-t border-line bg-cream px-4 py-2.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">
          Every conclusion traceable to source
        </span>
        <span className="font-mono text-[10px] text-olive">PROV-0127-A</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px" aria-hidden="true" />
      <div className="container-x grid items-center gap-14 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow-label inline-flex items-center gap-3 text-olive">
              <span className="h-px w-8 bg-olive/60" aria-hidden="true" />
              MAVUNO
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[clamp(2.6rem,6.2vw,4.6rem)] font-semibold leading-[1.04] tracking-tight-l text-ink">
              Transfer pricing infrastructure for African corporate groups.
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-[16.5px] leading-[1.75] text-slate">
              Regulators are tightening. The mid-market has been solving
              compliance with tools built for someone else's markets.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-[19px] font-semibold tracking-tight text-forest">
              We're building what should have existed all along.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="#contact" size="lg">
                Contact Us
                <ArrowIcon />
              </Button>
              <Button href="#how-it-works" size="lg" variant="outline">
                See how it works
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-line pt-7">
              {[
                ["01", "Verified African comparables"],
                ["02", "Traceable to source"],
                ["03", "Purpose-built for African markets"],
              ].map(([n, label]) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.1em] text-olive">
                    {n}
                  </span>
                  <span className="max-w-[180px] text-[12.5px] font-medium leading-snug text-slate">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={220} className="lg:pl-4">
            <SpinePanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}