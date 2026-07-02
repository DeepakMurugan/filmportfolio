import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Check, ArrowRight, ArrowUpRight, Sparkles, Camera, Plane, Film, Music, Clapperboard, Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Wedding Films, Pre-Wedding, Drone Cinematography" },
      { name: "description", content: "Wedding films, pre-wedding shoots, FPV drone cinematography, commercial and event coverage in Chennai and across India." },
      { property: "og:title", content: "Services — Wedding Films, Pre-Wedding, Drone Cinematography" },
      { property: "og:description", content: "Premium cinematography services in Chennai. Wedding, pre-wedding, drone, commercial, events." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Film,
    title: "Wedding Films",
    pitch: "A documentary-led, cinematic feature of your wedding day — paced like a film, edited with restraint.",
    deliverables: ["8–12 min cinematic film", "60–90s teaser trailer", "Full-day coverage", "Colour-graded master in 4K"],
    from: "₹2,50,000",
  },
  {
    icon: Camera,
    title: "Pre-Wedding Shoots",
    pitch: "Intimate, location-led stories that capture your couplehood before the day arrives.",
    deliverables: ["Half-day or full-day shoot", "3–5 min cinematic film", "Location scouting", "Two outfit changes"],
    from: "₹85,000",
  },
  {
    icon: Plane,
    title: "Drone & FPV Cinematography",
    pitch: "Sweeping aerial and immersive FPV sequences that move through your venue like a feature film.",
    deliverables: ["Licensed pilot", "DJI Avata 2 + Mavic 3", "Up to 4 sequences", "Raw + edited delivery"],
    from: "₹65,000",
  },
  {
    icon: Clapperboard,
    title: "Commercial Films",
    pitch: "Brand films, product shoots, and campaign content with the same cinematic discipline.",
    deliverables: ["Pre-production & treatment", "Direction & DOP", "Edit, grade & sound", "Multi-format delivery"],
    from: "On request",
  },
  {
    icon: Music,
    title: "Event Coverage",
    pitch: "Concerts, launches, conferences — captured with multi-cam coverage and quick-turn highlight reels.",
    deliverables: ["Multi-cam setup", "Live audio capture", "24h highlight reel", "Full edit within 14 days"],
    from: "₹1,20,000",
  },
];

const process = [
  { n: "01", t: "Discovery Call", d: "We talk through your story, venues, key moments, and the feeling you want the film to carry." },
  { n: "02", t: "Treatment & Plan", d: "A custom shoot plan, timeline, and creative treatment tailored to your day." },
  { n: "03", t: "On The Day", d: "Documentary presence — we move with the moment, never staging or interrupting." },
  { n: "04", t: "Edit & Colour", d: "Hand-crafted edit, cinematic colour grade, original sound design and music licensing." },
  { n: "05", t: "Delivery", d: "Private review link, revisions, then 4K masters delivered on a custom drive." },
];

const addons = [
  { t: "Same-Day Edit", d: "A 90-second teaser screened at your reception, edited live on the day.", price: "+ ₹65,000" },
  { t: "Photo Add-On", d: "Lead photographer paired with our cinematography team, shared creative direction.", price: "+ ₹1,40,000" },
  { t: "Extra Edit Versions", d: "Vertical reels, social cut-downs, and a parents' extended edit.", price: "+ ₹35,000" },
  { t: "Travel Coverage", d: "Pre-wedding travel film at a destination of your choice in India.", price: "On request" },
];

const faqs = [
  { q: "How far in advance should we book?", a: "Most couples reserve 6–12 months out. Peak winter and December dates close earliest — reach out as soon as your date is set." },
  { q: "Do you travel for destination weddings?", a: "Yes — across India and internationally. Travel and stay are billed at cost on top of the base package." },
  { q: "What's your turnaround time?", a: "Teaser within 3 weeks, full film within 10–14 weeks. Rush delivery is available as an add-on." },
  { q: "Can we customise a package?", a: "Every engagement is bespoke. The starting prices listed are reference points — we'll shape the scope around your day." },
];

function ServicesPage() {
  return (
    <div>
      <Nav />
      <PageHero
        eyebrow="Services"
        title={<>Cinematic work, <span className="gold-gradient-text font-serif italic font-light">end to end.</span></>}
        subtitle="Each engagement begins with a conversation. Below are starting points — every film is shaped to your day, venue, and story."
      />

      {/* Service cards */}
      <section className="py-16 md:py-24 container-x space-y-5 md:space-y-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group relative grid lg:grid-cols-12 gap-6 lg:gap-8 p-6 sm:p-8 lg:p-12 bg-card rounded-2xl border border-white/[0.06] hover:border-gold/40 transition-all duration-500 hover-lift overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "radial-gradient(600px circle at 30% 0%, rgba(198,169,105,0.08), transparent 50%)" }}
                />
                <div className="relative lg:col-span-5">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-12 h-12 grid place-items-center rounded-xl border border-gold/30 bg-gold/5 text-gold group-hover:rotate-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={20} />
                    </span>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-gold">0{i + 1} · Service</p>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">{s.title}</h2>
                  <p className="text-muted-foreground mt-5 leading-relaxed text-[15px]">{s.pitch}</p>
                </div>
                <div className="relative lg:col-span-5">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">Deliverables</p>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-[14px] sm:text-[15px]">
                        <Check className="text-gold mt-1 shrink-0" size={16} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative lg:col-span-2 flex lg:flex-col lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t border-white/5 lg:border-0">
                  <div className="lg:text-right">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Starting</p>
                    <p className="font-display text-2xl text-gold mt-1">{s.from}</p>
                  </div>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-gold border-b border-gold/40 pb-1 hover:border-gold hover:gap-3 transition-all duration-300">
                    Enquire <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Process */}
      <section className="relative py-20 md:py-32 border-t border-white/[0.06]">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(198,169,105,0.06), transparent 60%)" }}
        />
        <div className="container-x">
          <Reveal>
            <div className="max-w-3xl mb-14 md:mb-20">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-5">The Process</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                From first call to <span className="font-serif italic gold-gradient-text font-light">final cut.</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80} className="bg-background">
                <div className="group p-7 md:p-8 h-full hover:bg-card transition-colors duration-500">
                  <p className="font-display text-5xl text-gold/30 group-hover:text-gold transition-colors duration-500">{p.n}</p>
                  <h3 className="font-display text-xl mt-6">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-32 container-x border-t border-white/[0.06]">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12 md:mb-16">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Add-ons</p>
              <h2 className="font-display text-4xl md:text-5xl">Tailor your <span className="font-serif italic font-light text-gold">package.</span></h2>
            </div>
            <p className="text-muted-foreground max-w-md text-[15px]">Modular extras to layer onto any service. Mix, match, and shape the engagement to your day.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {addons.map((a, i) => (
            <Reveal key={a.t} delay={i * 70}>
              <div className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-card hover:border-gold/40 transition-all duration-500 hover-lift">
                <div className="flex items-start gap-4">
                  <Sparkles className="text-gold mt-1 shrink-0 group-hover:rotate-12 transition-transform duration-500" size={18} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="font-display text-xl">{a.t}</h3>
                      <span className="text-gold text-sm tracking-wider">{a.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.d}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 container-x border-t border-white/[0.06]">
        <Reveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl">Common <span className="font-serif italic font-light gold-gradient-text">questions.</span></h2>
          </div>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <FaqItem q={f.q} a={f.a} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 container-x">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden p-10 sm:p-14 md:p-20 text-center film-grain border border-gold/20"
            style={{ background: "radial-gradient(ellipse at top, rgba(198,169,105,0.18), rgba(11,11,11,1) 60%)" }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Ready when you are</p>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] max-w-3xl mx-auto">
              Let's make a film <br />
              <span className="font-serif italic font-light gold-gradient-text">worth keeping.</span>
            </h2>
            <p className="mt-7 max-w-xl mx-auto text-muted-foreground">
              Tell us about your day. We'll respond within 24 hours with a tailored proposal.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-background text-xs tracking-[0.3em] uppercase hover:bg-gold/90 transition-all duration-500 hover:shadow-[0_0_50px_-10px_var(--gold)] gold-pulse rounded-full"
            >
              Start your enquiry <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="w-full text-left p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-card hover:border-gold/40 transition-colors duration-500"
    >
      <div className="flex items-center justify-between gap-6">
        <span className="font-display text-lg md:text-xl">{q}</span>
        <span className="w-9 h-9 shrink-0 grid place-items-center rounded-full border border-gold/40 text-gold">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </div>
      <div
        className="grid transition-all duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0, marginTop: open ? "1rem" : 0 }}
      >
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed text-[15px]">{a}</p>
        </div>
      </div>
    </button>
  );
}
