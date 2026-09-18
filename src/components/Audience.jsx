import { SectionHeader } from "./SectionHeader.jsx";
import { Card } from "./Card.jsx";
import { Reveal } from "./Reveal.jsx";

const audiences = [
  {
    k: "Mid-market corporate groups",
    n: "01",
    body: "A workflow product that produces defensible benchmarking studies and audit response support at a fraction of the cost and time of traditional providers.",
    tag: "defensible work · lower cost",
  },
  {
    k: "Revenue authorities",
    n: "02",
    body: "Neutral access to verified African corporate intelligence. The data infrastructure supports analysis while enforcement judgment stays with the authority.",
    tag: "neutral data · enforcement stays",
  },
  {
    k: "Consulting, audit and accounting firms",
    n: "03",
    body: "Accelerate the production of benchmarking studies with a verified African comparables dataset. Reduce analyst time spent on data collection and validation while maintaining transparency, consistency and audit defensibility.",
    tag: "Faster delivery · consistent quality",
  },
  {
    k: "Legal teams",
    n: "04",
    body: "Access the underlying comparable company evidence, screening rationale, financial data and benchmarking outputs needed to support transfer pricing opinions, controversy management, audits and dispute resolution.",
    tag: "Evidence ready · dispute ready",
  },
];

export default function Audience() {
  return (
    <section id="audience" className="bg-cream">
      <div className="container-x py-20 md:py-28">
        <SectionHeader
          eyebrow="Who it's for"
          title="Built for the African transfer pricing ecosystem."
          lead="One verified data spine supports the whole ecosystem — the groups being assessed, the professionals advising them, and the authorities assessing them."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.n} delay={i * 90}>
              <Card className="flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[12px] tracking-[0.1em] text-olive">
                    {a.n}
                  </span>
                  <span className="rounded border border-line bg-cream px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em] text-slate">
                    {a.tag}
                  </span>
                </div>
                <h3 className="mt-8 text-[19px] font-semibold leading-snug tracking-tight text-ink">
                  {a.k}
                </h3>
                <p className="mt-3 flex-1 font-serif text-[14.5px] leading-[1.75] text-slate">
                  {a.body}
                </p>
                <div className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest/70" aria-hidden="true" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate">
                    Powered by the same verified spine
                  </span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}