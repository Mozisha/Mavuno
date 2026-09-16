import { SectionHeader } from "./SectionHeader.jsx";
import { Reveal } from "./Reveal.jsx";

function Panel({ title, tag, children, className = "" }) {
  return (
    <div className={`rounded-lg border border-line bg-white ${className}`}>
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="text-[12.5px] font-semibold tracking-tight text-ink">
          {title}
        </span>
        {tag ? (
          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-slate">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function Badge({ children, tone = "verified" }) {
  const tones = {
    verified: "bg-forest/10 text-forest border-forest/20",
    pending: "bg-cream text-slate border-line",
    active: "bg-oxford/10 text-oxford border-oxford/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.1em] ${tones[tone]}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}

const comparables = [
  ["Olamco Industries", "NG", "₦ 84.2bn", "18.4%", "Verified"],
  ["Asante Manufacturing", "KE", "KES 21.6bn", "22.1%", "Verified"],
  ["Farmedge", "GH", "GH₵ 3.8bn", "15.9%", "Verifying"],
  ["Kilimo Foods", "ZA", "R 12.4bn", "19.8%", "Verified"],
];

const menuItems = ["Overview", "Entities", "Comparables", "Benchmarking", "Documentation", "Monitoring"];

function BenchRow({ label, value, active = false }) {
  return (
    <div className="flex items-center justify-between border-b border-line py-2 last:border-0">
      <span className="text-[11.5px] text-slate">{label}</span>
      <span
        className={`font-mono text-[12px] ${
          active ? "font-medium text-forest" : "text-ink"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function ProductPreview() {
  return (
    <section id="product" className="bg-cream">
      <div className="container-x py-20 md:py-28">
        <SectionHeader
          eyebrow="The product"
          title="From fragmented data to defensible work."
          lead="One workspace where tax professionals assemble comparables, run benchmarking, and produce documentation — every figure anchored to a verified African source."
        />

        <Reveal delay={60}>
          <div className="mt-8 inline-flex items-center gap-2 rounded border border-line bg-white px-4 py-2">
            <svg className="h-3.5 w-3.5 text-olive" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1.5a4.5 4.5 0 0 1 4.5 4.5v1h1v7.5h-11V7h1V6A4.5 4.5 0 0 1 8 1.5Z"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-forest">
              Your African transfer pricing workflow, automated and verified.
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-xl border border-line bg-white shadow-[0_20px_60px_rgba(7,42,32,0.10)]">
            <div className="border-b border-line bg-cream px-4 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                </span>
                <span className="mx-auto flex items-center gap-2 rounded border border-line bg-white px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-slate">
                  mavuno.app / comparables / ag-2026
                </span>
                <span className="hidden font-mono text-[9.5px] uppercase tracking-[0.12em] text-slate sm:inline">
                  Example data
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[880px]">
                <div className="flex">
                  <aside className="w-[210px] shrink-0 border-r border-line bg-cream/60">
                    <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                      <img
                        src="/M.png"
                        alt=""
                        className="h-6 w-6 rounded object-cover"
                        draggable={false}
                      />
                      <div className="leading-tight">
                        <p className="text-[11px] font-semibold text-ink">Comparables Workspace</p>
                        <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-slate">
                          AG-2026 · FY 2026
                        </p>
                      </div>
                    </div>
                    <nav aria-label="Product modules" className="px-2 py-3">
                      {menuItems.map((item, i) => {
                        const active = i === 3;
                        return (
                          <a
                            key={item}
                            href="#product"
                            className={`flex items-center justify-between rounded px-3 py-2 text-[12px] ${
                              active
                                ? "bg-forest text-cream"
                                : "text-slate hover:bg-cream hover:text-forest"
                            }`}
                          >
                            {item}
                            {i === 4 ? (
                              <span className={`font-mono text-[9px] ${active ? "text-cream/70" : "text-olive"}`}>
                                76%
                              </span>
                            ) : null}
                            {i === 5 ? (
                              <span className="h-1.5 w-1.5 rounded-full bg-olive" aria-hidden="true" />
                            ) : null}
                          </a>
                        );
                      })}
                    </nav>
                    <div className="border-t border-line px-4 py-3">
                      <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-slate">Signed as</p>
                      <p className="mt-1 flex items-center gap-2 text-[11.5px] font-medium text-ink">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-oxford text-[9px] font-bold text-cream">
                          TD
                        </span>
                        Tax Director
                      </p>
                    </div>
                  </aside>

                  <div className="flex-1 space-y-4 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-[16px] font-semibold tracking-tight text-ink">
                            Example Holdings Ltd
                          </h3>
                          <Badge tone="verified">Entity verified</Badge>
                        </div>
                        <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.1em] text-slate">
                          NG · Consumer goods · Parent Co corporate group
                        </p>
                      </div>
                      <Badge tone="active">FY 2026 · Active</Badge>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                      {[
                        ["Revenue", "₦ 42.6bn"],
                        ["Operating margin", "17.2%"],
                        ["Entities mapped", "48"],
                        ["Source records", "1,240"],
                      ].map(([k, v]) => (
                        <div key={k} className="rounded-lg border border-line bg-cream/60 px-3.5 py-3">
                          <p className="text-[10px] uppercase tracking-[0.08em] text-slate">{k}</p>
                          <p className="mt-1 font-mono text-[13.5px] font-medium text-ink">{v}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                      <Panel
                        title="Comparable companies"
                        tag="SCREENED · REGIONAL"
                        className="col-span-12 xl:col-span-7"
                      >
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-line font-mono text-[9.5px] uppercase tracking-[0.1em] text-slate">
                              <th className="py-2 pr-2 font-medium">Company</th>
                              <th className="py-2 pr-2 font-medium">JX</th>
                              <th className="py-2 pr-2 font-medium text-right">Revenue</th>
                              <th className="py-2 pr-2 font-medium text-right">Op. margin</th>
                              <th className="py-2 font-medium text-right">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {comparables.map(([c, jx, rev, om, st]) => (
                              <tr key={c} className="border-b border-line last:border-0">
                                <td className="py-2.5 pr-2 text-[12px] font-medium text-ink">{c}</td>
                                <td className="py-2.5 pr-2 font-mono text-[11px] text-slate">{jx}</td>
                                <td className="py-2.5 pr-2 text-right font-mono text-[11.5px] text-ink">{rev}</td>
                                <td className="py-2.5 pr-2 text-right font-mono text-[11.5px] text-ink">{om}</td>
                                <td className="py-2.5 text-right">
                                  <Badge tone={st === "Verified" ? "verified" : "pending"}>
                                    {st}
                                  </Badge>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <p className="mt-3 font-mono text-[9.5px] uppercase tracking-[0.1em] text-slate">
                          4 of 6 comparable rows shown · example
                        </p>
                      </Panel>

                      <div className="col-span-12 grid gap-4 xl:col-span-5">
                        <Panel title="Benchmarking analysis" tag="ARM'S LENGTH · IQR">
                          <div className="flex items-end justify-between gap-4 pb-2">
                            <div className="flex-1">
                              <div className="relative h-9 w-full">
                                <span className="absolute inset-y-2 left-0 w-[18%] bg-olive/15" />
                                <span className="absolute inset-y-2 left-[18%] w-[64%] bg-forest/15" />
                                <span className="absolute inset-y-2 right-0 w-[18%] bg-olive/15" />
                                <span className="absolute inset-y-1 left-[8%] w-px bg-slate/50" />
                                <span className="absolute inset-y-1 left-[50%] w-px bg-forest" />
                                <span className="absolute inset-y-1 right-[8%] w-px bg-slate/50" />
                              </div>
                              <div className="mt-1 flex justify-between font-mono text-[9px] text-slate">
                                <span>10%</span>
                                <span>25%</span>
                                <span>50%</span>
                                <span>75%</span>
                                <span>90%</span>
                              </div>
                            </div>
                          </div>
                          <div className="mt-2">
                            <BenchRow label="Lower quartile (Q1)" value="16.9%" />
                            <BenchRow label="Median (Q2)" value="19.4%" active />
                            <BenchRow label="Upper quartile (Q3)" value="23.2%" />
                            <BenchRow label="Your tested margin" value="17.2%" />
                          </div>
                        </Panel>

                        <Panel title="Source provenance" tag="TRACEABLE">
                          <ol className="space-y-0">
                            {[
                              ["CAC · Company register", "NG · 2026-03"],
                              ["NAICOM filings", "NG · 2025-12"],
                              ["KRA · entity records", "KE · 2025-11"],
                              ["SNE gazette", "GH · 2025-09"],
                            ].map(([s, meta]) => (
                              <li key={s} className="flex items-center gap-3 border-b border-line py-2 last:border-0">
                                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                                <span className="flex-1 text-[11.5px] text-ink">{s}</span>
                                <span className="font-mono text-[9.5px] text-slate">{meta}</span>
                              </li>
                            ))}
                          </ol>
                        </Panel>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                      <Panel title="Documentation status" tag="LOCAL FILE · MASTER FILE" className="col-span-6">
                        <div className="space-y-3">
                          {[
                            ["Local file — Nigeria", 76],
                            ["Master file — group", 52],
                            ["Audit response playbooks", 30],
                          ].map(([label, pct]) => (
                            <div key={label}>
                              <div className="flex items-center justify-between text-[11.5px]">
                                <span className="text-ink">{label}</span>
                                <span className="font-mono text-[11px] text-slate">{pct}%</span>
                              </div>
                              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-mist">
                                <div
                                  className="h-full rounded-full bg-forest/70"
                                  style={{ width: `${pct}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </Panel>

                      <Panel title="Regulatory monitoring" tag="WATCHLIST" className="col-span-6">
                        <div className="space-y-2.5">
                          {[
                            ["NG · FIRS — TP guidelines update", "New"],
                            ["KE · KRA — filing calendar shift", "Watch"],
                            ["GH · GRA — documentation threshold", "Watch"],
                          ].map(([label, state]) => (
                            <div key={label} className="flex items-center justify-between">
                              <span className="text-[11.5px] text-ink">{label}</span>
                              <Badge tone={state === "New" ? "active" : "pending"}>{state}</Badge>
                            </div>
                          ))}
                        </div>
                      </Panel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.12em] text-slate">
            Illustrative interface with example data — not actual client information.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default ProductPreview;