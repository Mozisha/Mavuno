import { SectionHeader } from "./SectionHeader.jsx";
import { Card } from "./Card.jsx";
import { Reveal } from "./Reveal.jsx";

const problems = [
  {
    n: "01",
    title: "Fragmented data",
    body: "The data needed to defend a transfer pricing position is fragmented across registries, filings, jurisdictions, and disconnected sources.",
  },
  {
    n: "02",
    title: "Expensive defensibility",
    body: "Defensibility either costs more than the mid-market can carry, or it leaves you exposed to coverage that won't hold up under scrutiny.",
  },
  {
    n: "03",
    title: "Regulatory tightening",
    body: "Regulators are tightening, and enforcement is intensifying across African jurisdictions. The standard for defensibility keeps rising.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-cream">
      <div className="container-x py-20 md:py-28">
        <SectionHeader
          eyebrow="The problem"
          title="African transfer pricing has a data problem."
          lead="African corporate groups face a compliance burden the existing infrastructure was never built for. Regulators are tightening, defensibility is out of reach for most of the market, and the data needed to defend positions properly is fragmented across registries, filings, and jurisdictions."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <Card className="group h-full">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[12px] tracking-[0.1em] text-olive">
                    {p.n}
                  </span>
                  <span
                    className="h-px w-8 bg-line opacity-0 transition-all duration-300 group-hover:w-14 group-hover:bg-olive/60 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-8 text-[19px] font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 font-serif text-[14.5px] leading-[1.75] text-slate">
                  {p.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}