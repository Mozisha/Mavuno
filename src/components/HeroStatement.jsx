import { Reveal } from "./Reveal.jsx";

export default function HeroStatement() {
  return (
    <section className="border-y border-line bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-[clamp(1.5rem,3.4vw,2.5rem)] font-medium leading-[1.3] tracking-tight-m text-ink">
              Regulators are tightening. The mid-market has been solving
              compliance with tools built for someone else's markets.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 text-[clamp(1.5rem,3.4vw,2.5rem)] font-semibold leading-[1.3] tracking-tight-m text-forest">
              We're building what should have existed all along.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-16 bg-olive/60" aria-hidden="true" />
              <span className="eyebrow-label text-slate">
                The comparables spine for African corporate groups
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}