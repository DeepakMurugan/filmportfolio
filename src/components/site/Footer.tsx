import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

const nav = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Films" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Gear" },
  { to: "/contact", label: "Contact" },
] as const;

const services = [
  "Wedding Films",
  "Pre-Wedding",
  "FPV Drone",
  "Commercial",
  "Same-Day Edit",
];

const wordmarkStyle = {
  background: "linear-gradient(180deg, rgba(198,169,105,0.22) 0%, rgba(198,169,105,0.04) 92%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-white/[0.06] bg-[oklch(0.06_0_0)]">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70rem] h-[36rem] rounded-full blur-[120px] opacity-[0.18] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(198,169,105,0.6), transparent)" }}
      />
      <div aria-hidden className="absolute inset-0 film-grain opacity-60 pointer-events-none" />

      {/* Big CTA band */}
      <div className="relative container-x pt-20 md:pt-28 pb-14">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold/60" /> Let's create something timeless
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Your story,{" "}
              <span className="font-serif italic font-light gold-gradient-text">beautifully</span>{" "}
              filmed.
            </h2>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gold text-gold-foreground text-xs tracking-[0.25em] uppercase hover:bg-gold/90 transition-all shadow-[0_20px_50px_-15px_rgba(198,169,105,0.6)]"
            >
              Start a project
              <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative container-x">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Info grid */}
      <div className="relative container-x py-14 md:py-16 grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
        <div className="col-span-2 md:col-span-5">
          <Link to="/" className="inline-flex items-baseline">
            <span className="font-display text-3xl md:text-4xl tracking-tight">
              Rajendraprasath<span className="text-gold">.</span>
            </span>
          </Link>
          <p className="text-muted-foreground max-w-md leading-relaxed mt-5 text-[15px]">
            Documentary-led wedding films crafted with cinematic storytelling,
            emotion, and timeless visual elegance. Based in Chennai. Available
            worldwide.
          </p>

          {/* Newsletter */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex items-center gap-2 max-w-md rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md p-1.5 pl-5 focus-within:border-gold/60 transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Your email for stories & updates"
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground/70 py-2"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="w-10 h-10 rounded-full bg-gold text-gold-foreground grid place-items-center hover:scale-105 active:scale-95 transition-transform"
            >
              <Send size={15} />
            </button>
          </form>

          <div className="flex gap-3 mt-8">
            {[
              { Icon: Instagram, label: "Instagram", href: "#" },
              { Icon: Youtube, label: "YouTube", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative w-11 h-11 grid place-items-center rounded-full border border-white/10 hover:border-gold hover:text-gold transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gold/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                <Icon size={16} className="relative" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Navigate</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="link-gold inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s} className="hover:text-foreground transition-colors">{s}</li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-2">
          <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="mailto:hello@rajendraprasath.films" className="flex items-center gap-2 hover:text-foreground">
                <Mail size={13} className="text-gold" /> hello@rajendraprasath.films
              </a>
            </li>
            <li>
              <a href="tel:+919800000000" className="flex items-center gap-2 hover:text-foreground">
                <Phone size={13} className="text-gold" /> +91 98000 00000
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={13} className="text-gold" /> Chennai, India
            </li>
          </ul>
        </div>
      </div>

      {/* Giant word-mark */}
      <div className="relative overflow-hidden select-none pointer-events-none">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,oklch(0.06_0_0)_0%,transparent_10%,transparent_90%,oklch(0.06_0_0)_100%)]" />
        <div className="hidden md:block">
          <div className="footer-marquee flex w-max items-center">
            <span
              className="whitespace-nowrap px-6 text-center font-display leading-none tracking-[-0.04em] text-[clamp(4rem,12vw,12rem)] lg:text-[clamp(7rem,16vw,18rem)]"
              style={wordmarkStyle}
            >
              Rajendraprasath
            </span>
            <span
              className="whitespace-nowrap px-6 text-center font-display leading-none tracking-[-0.04em] text-[clamp(4rem,12vw,12rem)] lg:text-[clamp(7rem,16vw,18rem)]"
              style={wordmarkStyle}
            >
              Rajendraprasath
            </span>
          </div>
        </div>
        <div
          className="md:hidden text-center font-display leading-none tracking-[-0.04em] text-[clamp(4rem,18vw,8rem)]"
          style={wordmarkStyle}
        >
          Rajendraprasath
        </div>
      </div>

      <div className="relative border-t border-white/[0.06]">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-wider text-muted-foreground">
          <p>© {new Date().getFullYear()} Rajendraprasath Films — All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-2">
            {/* <p className="flex items-center gap-2">
              Crafted with <span className="text-gold">♦</span> in Chennai
            </p> */}
            <span className="hidden sm:inline text-white/20">•</span>
            <a
              href="https://dtechgrow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 uppercase tracking-[0.28em] text-white/80 transition-all duration-300 hover:border-gold/50 hover:text-gold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold/80" />
              Powered by DTechGrow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
