import { SectionHeader } from "./SectionHeader.jsx";
import { Reveal } from "./Reveal.jsx";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Identify entities, jurisdictions, transactions, and relevant data.",
  },
  {
    n: "02",
    title: "Verify",
    body: "Resolve entities and validate underlying African corporate information.",
  },
  {
    n: "03",
    title: "Benchmark",
    body: "Build defensible comparable sets from the verified data spine.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-forest/30 bg-grove">
      <div className="container-x py-20 md:py-28">
        <SectionHeader
          eyebrow="How it works"
          title="From first glance to defensible benchmarking."
          className="mx-auto max-w-2xl"
          align="center"
          dark
        />

        <div className="relative mt-16">
          <span
            className="absolute left-[27px] top-6 bottom-6 w-px bg-cream/20 md:hidden"
            aria-hidden="true"
          />
          <span
            className="absolute left-8 right-8 top-[27px] hidden h-px bg-cream/20 md:block"
            aria-hidden="true"
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative flex flex-col md:items-center md:text-center">
                  <span className="relative z-10 flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-cream/20 bg-forest font-mono text-[14px] font-medium text-amber">
                    {s.n}
                  </span>
                  <div className="mt-5 md:mt-6">
                    <h3 className="text-[17px] font-semibold tracking-tight text-cream">
                      {s.title}
                    </h3>
                    <p className="mt-2 font-serif text-[13.5px] leading-[1.7] text-cream/70">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}