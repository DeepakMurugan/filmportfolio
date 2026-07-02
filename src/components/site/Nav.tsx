import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/portfolio", label: "Films", num: "03" },
  { to: "/services", label: "Services", num: "04" },
  { to: "/experience", label: "Gear", num: "05" },
  { to: "/contact", label: "Contact", num: "06" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/70 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group relative z-[60]">
            <span className="font-display text-lg md:text-xl tracking-tight">
              Rajendraprasath<span className="text-gold animate-pulse">.</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative px-4 py-2 text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute left-4 right-4 bottom-1 h-px bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden lg:inline-flex group items-center gap-2 px-5 py-2.5 border border-gold/60 text-gold text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-background transition-all duration-500 hover:shadow-[0_0_30px_-5px_var(--gold)]"
          >
            Book Now
            <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
          </Link>

          <button
            aria-label="Toggle menu"
            className="lg:hidden text-foreground relative z-[60] w-10 h-10 grid place-items-center rounded-full border border-white/10 backdrop-blur-md"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(198,169,105,0.18), transparent 55%), rgba(8,8,8,0.96)",
          backdropFilter: "blur(24px)",
        }}
      >
        <div className="absolute inset-0 film-grain" />
        <nav className="relative h-full container-x flex flex-col justify-center gap-1 pt-20">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 py-3 border-b border-white/[0.06]"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 60 + 100}ms, transform 0.6s ease ${i * 60 + 100}ms`,
              }}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              <span className="text-[10px] tracking-[0.3em] text-gold/70 w-8">{l.num}</span>
              <span className="font-display text-4xl sm:text-5xl tracking-tight group-hover:text-gold group-hover:translate-x-2 transition-all duration-500">
                {l.label}
              </span>
              <ArrowUpRight
                size={20}
                className="ml-auto text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
              />
            </Link>
          ))}
          <div className="mt-10 flex flex-col gap-3 text-xs text-muted-foreground tracking-wider">
            <span>hello@rajendraprasath.films</span>
            <span>+91 98000 00000 · Chennai, India</span>
          </div>
        </nav>
      </div>
    </>
  );
}
