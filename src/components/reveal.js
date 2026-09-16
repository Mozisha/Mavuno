export function initReveal() {
  if (typeof window === "undefined") return () => {};
  const reduce = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const els = Array.from(document.querySelectorAll("[data-reveal]"));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("is-visible");
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => {
    if (reduce) {
      el.classList.add("is-visible");
      return;
    }
    io.observe(el);
  });

  return () => io.disconnect();
}