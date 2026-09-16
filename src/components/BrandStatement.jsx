import { Reveal } from "./Reveal.jsx";

export default function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-oxford py-24 md:py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(var(--color-cream)_1px,transparent_1px),linear-gradient(90deg,var(--color-cream)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow-label flex items-center justify-center gap-3 text-cream/50">
            <span className="h-px w-8 bg-cream/30" aria-hidden="true" />
            The Mavuno principle
            <span className="h-px w-8 bg-cream/30" aria-hidden="true" />
          </span>
        </Reveal>
        <Reveal delay={120}>
          <blockquote className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-[clamp(2rem,5.6vw,4.2rem)] font-semibold leading-[1.08] tracking-tight-l text-cream">
              Africa's next decade will be defined by the infrastructure we
              build{" "}
              <span className="text-olive">for ourselves.</span>
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={220}>
          <div className="mx-auto mt-12 flex max-w-sm items-center justify-center gap-4">
            <span className="h-px flex-1 bg-cream/20" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/60">
              MAVUNO
            </span>
            <span className="h-px flex-1 bg-cream/20" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}