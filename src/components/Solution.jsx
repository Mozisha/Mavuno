import { SectionHeader } from "./SectionHeader.jsx";
import { Reveal } from "./Reveal.jsx";

const stages = [
  {
    n: "01",
    tag: "Source",
    title: "Source data",
    body: "Registries, filings, gazettes, and statutory disclosures across African jurisdictions.",
    chip: "Multi-jurisdictional ingestion",
    chipMono: "register · file · gazette",
  },
  {
    n: "02",
    tag: "Resolve",
    title: "Entity resolution",
    body: "Corporate entities matched and disambiguated across inconsistent records.",
    chip: "Entity identity resolved",
    chipMono: "match · disambiguate",
  },
  {
    n: "03",
    tag: "Verify",
    title: "Verification",
    body: "Each data point validated against origin, with provenance recorded at source.",
    chip: "Provenance recorded",
    chipMono: "validated against origin",
  },
  {
    n: "04",
    tag: "Screen",
    title: "Comparable companies",
    body: "Comparable sets screened by industry, region, size, and functional profile.",
    chip: "Comparable set assembled",
    chipMono: "industry · region · size",
  },
  {
    n: "05",
    tag: "Benchmark",
    title: "Benchmarking",
    body: "Arm's length analysis computed from the verified comparables spine.",
    chip: "Arm's length range computed",
    chipMono: "interquartile range",
  },
  {
    n: "06",
    tag: "Document",
    title: "Documentation",
    body: "Local file, master file, and audit response workstreams built on the same spine.",
    chip: "Documentation ready",
    chipMono: "local file · master file",
  },
  {
    n: "07",
    tag: "Monitor",
    title: "Continuous monitoring",
    body: "Regulatory and business-side change tracked before compliance problems become audit problems.",
    chip: "Ongoing watch active",
    chipMono: "regulatory · business",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative border-y border-line bg-white">
      <div className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" aria-hidden="true" />
      <div className="container-x relative py-20 md:py-28">
        <SectionHeader
          eyebrow="The Mavuno solution"
          title="One infrastructure layer for the work that matters."
          lead="Mavuno unifies fragmented reality into a verified comparables spine — powered by AI, validated by practitioners, and designed for the specific way African transfer pricing work actually gets done."
        />

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-3xl border border-line bg-cream/70 rounded-xl px-6 py-3 text-center md:px-10">
            <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="eyebrow-label text-forest">
                Verified African Comparables Spine
              </span>
              <span className="hidden h-px w-6 bg-olive/50 md:block" aria-hidden="true" />
              <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate">
                Every position built on it. Every conclusion traceable to it.
              </span>
            </span>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="relative">
            <div
              className="absolute top-0 bottom-0 left-[15px] w-px bg-line-dark md:left-1/2"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-10 md:gap-12">
              {stages.map((s, i) => (
                <Reveal key={s.n} delay={60} className="relative">
                  <span
                    className="absolute left-[15px] top-5 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-forest/30 bg-white font-mono text-[10.5px] text-slate md:left-1/2"
                  >
                    {s.n}
                  </span>
                  <div
                    className={`md:w-[calc(50%-28px)] ${
                      i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="rounded-lg border border-line bg-white p-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(7,42,32,0.07)] md:p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-olive">
                          {s.tag}
                        </span>
                        <span className="h-px w-5 bg-line" aria-hidden="true" />
                        <span className="text-[10.5px] font-medium uppercase tracking-[0.08em] text-slate">
                          {s.chipMono}
                        </span>
                      </div>
                      <h3 className="mt-3 text-[19px] font-semibold tracking-tight text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-serif text-[14px] leading-[1.75] text-slate">
                        {s.body}
                      </p>
                      <div className="mt-5 inline-flex items-center gap-2 rounded border border-line bg-cream px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-forest/70" aria-hidden="true" />
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-forest">
                          {s.chip}
                        </span>
                      </div>
                    </div>
                    </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={100}>
          <div className="mx-auto mt-16 grid max-w-4xl gap-6 border-t border-line pt-12 md:grid-cols-3">
            {[
              { k: "Provenance", v: "Every conclusion traceable to source." },
              { k: "Verification", v: "Every position built on verified African comparables." },
              { k: "Monitoring", v: "Continuous before compliance problems become audit problems." },
            ].map((c) => (
              <div key={c.k} className="flex flex-row items-start gap-3 md:flex-col">
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-olive">
                  {c.k}
                </span>
                <p className="text-[14px] font-medium leading-[1.6] text-ink">
                  {c.v}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}