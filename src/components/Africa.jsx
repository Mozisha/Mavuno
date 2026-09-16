import { Reveal } from "./Reveal.jsx";

const sources = [
  { x: 6, y: 8, l: "NG" },
  { x: 18, y: 18, l: "KE" },
  { x: 8, y: 30, l: "GH" },
  { x: 24, y: 34, l: "ZA" },
  { x: 14, y: 44, l: "EG" },
  { x: 30, y: 12, l: "ET" },
  { x: 26, y: 50, l: "MX" },
  { x: 4, y: 56, l: "CI" },
  { x: 20, y: 24, l: "TZ" },
  { x: 12, y: 64, l: "ZM" },
  { x: 28, y: 68, l: "MZ" },
];

function AfricaDiagram() {
  const spineX = 64;
  return (
    <div className="rounded-xl border border-line bg-white p-6 md:p-8">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-forest" aria-hidden="true" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink">
            African data field
          </span>
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-slate">
          fragmented · reconciled
        </span>
      </div>

      <svg
        viewBox="0 0 100 80"
        className="h-auto w-full"
        role="img"
        aria-label="Abstract diagram of fragmented African data sources converging on the Mavuno verified comparables spine"
      >
        {sources.map((s) => (
          <path
            key={`line-${s.l}`}
            d={`M ${s.x} ${s.y} C ${(s.x + spineX) / 2} ${s.y}, ${(s.x + spineX) / 2} ${38}, ${spineX} ${38}`}
            fill="none"
            stroke="#062A20"
            strokeOpacity="0.18"
            strokeWidth="0.4"
            data-draw
            style={{ "--draw-delay": `${100 + s.y * 6}ms` }}
          />
        ))}

        {sources.map((s) => (
          <g key={s.l}>
            <circle cx={s.x} cy={s.y} r="1.6" fill="#102A43" opacity="0.55" />
            <text
              x={s.x + 3}
              y={s.y + 1}
              className="font-mono"
              style={{ fontSize: "3.4px", letterSpacing: "0.06em" }}
              fill="#52606D"
            >
              {s.l}
            </text>
          </g>
        ))}

        <g>
          <rect x={spineX - 5.5} y={28} width="11" height="20" rx="1.2" fill="#062A20" />
          <text
            x={spineX}
            y={40}
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "3.6px", letterSpacing: "0.1em" }}
            fill="#F7F8F6"
          >
            MAVUNO
          </text>
        </g>

        <g>
          <rect x={spineX - 5.5} y={58} width="11" height="7" rx="1" fill="none" stroke="#657153" strokeWidth="0.5" />
          <text
            x={spineX}
            y={63}
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "2.8px", letterSpacing: "0.06em" }}
            fill="#657153"
          >
            VERIFIED SPINE
          </text>
        </g>

        <path
          d={`M ${spineX} 48 L ${spineX} 58`}
          stroke="#657153"
          strokeWidth="0.4"
          fill="none"
          data-draw
          style={{ "--draw-delay": "500ms" }}
        />

        <g>
          <circle cx={spineX} cy={38} r="1.8" fill="#F7F8F6" stroke="#657153" strokeWidth="0.5" />
          <text
            x={spineX}
            y={24}
            textAnchor="middle"
            className="font-mono"
            style={{ fontSize: "2.8px", letterSpacing: "0.1em" }}
            fill="#52606D"
          >
            RECONCILED
          </text>
        </g>
      </svg>

      <div className="mt-4 flex flex-wrap items-center justify-between border-t border-line pt-3">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-slate">
          Source → entity → verification
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-olive">
          built for how African markets actually work
        </span>
      </div>
    </div>
  );
}

export default function Africa() {
  return (
    <section id="africa" className="bg-cream">
      <div className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow-label flex items-center gap-3 text-olive">
                <span className="h-px w-8 bg-olive/60" aria-hidden="true" />
                Why Africa
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-[clamp(1.9rem,4vw,3.15rem)] leading-[1.08] font-semibold tracking-tight-m text-ink">
                African markets are not a data afterthought.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl font-serif text-[16.5px] leading-[1.75] text-slate">
                Transfer pricing work depends on the quality of the underlying
                data. Across African markets, that data is fragmented,
                inconsistent, and often difficult to extract at scale.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 border-l-2 border-olive/60 pl-5 font-serif text-[16.5px] font-medium leading-[1.75] text-ink">
                Mavuno is built around those realities rather than asking
                African businesses to adapt to infrastructure designed
                elsewhere.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <AfricaDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}