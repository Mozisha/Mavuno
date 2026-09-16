import Button, { ArrowIcon } from "./Button.jsx";
import { Reveal } from "./Reveal.jsx";

export default function CTASection() {
  return (
    <section id="contact" className="border-y border-line bg-white">
      <div className="container-x py-20 text-center md:py-28">
        <Reveal>
          <span className="eyebrow-label flex items-center justify-center gap-3 text-olive">
            <span className="h-px w-8 bg-olive/60" aria-hidden="true" />
            Get in touch
            <span className="h-px w-8 bg-olive/60" aria-hidden="true" />
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.1] tracking-tight-m text-ink">
            Build transfer pricing infrastructure for the markets you actually
            operate in.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-xl font-serif text-[16.5px] leading-[1.75] text-slate">
            Talk to us about how Mavuno can support your African transfer
            pricing workflow.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="mailto:hello@mavuno.io" size="lg">
              Contact Us
              <ArrowIcon />
            </Button>
            <Button href="mailto:hello@mavuno.io" size="lg" variant="outline">
              Contact us
            </Button>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <a
            href="mailto:hello@mavuno.io"
            className="mt-9 inline-block font-mono text-[13px] tracking-[0.08em] text-slate transition-colors hover:text-forest"
          >
            hello@mavuno.io
          </a>
        </Reveal>
      </div>
    </section>
  );
}