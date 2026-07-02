import { useEffect, useRef, type ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Subtle parallax on hero content as user scrolls
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        el.style.setProperty("--py", `${y * 0.18}px`);
        el.style.setProperty("--pyo", `${1 - Math.min(1, y / 500)}`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-28 overflow-hidden film-grain section-amber"
    >
      {/* Floating orbs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full blur-[120px] opacity-[0.18] orb-drift"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full blur-[120px] opacity-[0.12] orb-drift"
        style={{ background: "radial-gradient(circle, oklch(0.7 0.14 60), transparent 60%)", animationDelay: "-6s" }}
      />

      <div
        className="container-x relative"
        style={{ transform: "translateY(calc(var(--py, 0px) * -1))", opacity: "var(--pyo, 1)" }}
      >
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gold mb-5 sm:mb-6 reveal-up flex items-center gap-3">
          <span className="w-8 h-px bg-gold/60" />
          {eyebrow}
        </p>
        <h1
          className="font-display text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl reveal-up"
          style={{ animationDelay: "120ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground reveal-up leading-relaxed"
            style={{ animationDelay: "240ms" }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* bottom gold divider */}
      <div className="absolute bottom-0 inset-x-0 gold-divider" />
    </section>
  );
}
