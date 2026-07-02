import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Play, ArrowRight, Award, Film, Camera, Quote } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { GalaxyBackground } from "@/components/site/GalaxyBackground";
import heroVideo from "@/assets/hero.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Wedding Cinematographer in Chennai | Rajendraprasath Films" },
      {
        name: "description",
        content:
          "Documentary-style wedding filmmaker in Chennai creating cinematic films with FPV drone visuals and emotional storytelling.",
      },
      { property: "og:title", content: "Best Wedding Cinematographer in Chennai | Rajendraprasath Films" },
      {
        property: "og:description",
        content:
          "Documentary-style wedding filmmaker in Chennai creating cinematic films with FPV drone visuals and emotional storytelling.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const brands = [
  "Taj Hotels", "ITC Grand", "Manyavar", "Tanishq", "Kalyan Jewellers",
  "Sabyasachi", "JW Marriott", "Leela Palace", "Lulu Group", "Vogue India",
];

const films = [
  { title: "Ananya & Rohan", category: "Wedding Film", big: true, img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80" },
  { title: "Priya & Karthik", category: "Pre Wedding", big: true, img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80" },
  { title: "Aerial Symphony", category: "FPV Drone", big: false, img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=80" },
  { title: "Tanishq Heritage", category: "Commercial", big: false, img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=80" },
  { title: "Coldplay Chennai", category: "Concert", big: false, img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80" },
];

const signatures = [
  { t: "Documentary Storytelling", d: "Real emotions caught in motion. No staged poses, only truths.", icon: Film },
  { t: "Cinematic Composition", d: "Film-level framing, color, and light — every frame a still.", icon: Camera },
  { t: "FPV Drone Mastery", d: "Immersive aerial choreography that moves through the moment.", icon: Award },
  { t: "Emotional Narratives", d: "Moments that stay forever, edited with rhythm and restraint.", icon: Quote },
];

const stats = [
  { n: 8, suf: "+", label: "Years of Craft" },
  { n: 100, suf: "+", label: "Films Delivered" },
  { n: 50, suf: "+", label: "Couples Filmed" },
  { n: 20, suf: "+", label: "Brands Trusted" },
];

const gear = [
  { name: "Sony Alpha 7 IV", type: "Cinema Body", spec: "33MP · 4K 60p · S-Cinetone" },
  { name: "DJI RS 4 Pro", type: "Stabilizer", spec: "3-axis · 4.5kg payload" },
  { name: "DJI FPV Avata 2", type: "FPV Drone", spec: "4K 100fps · sub-200g cinewhoop" },
  { name: "RØDE Wireless GO II", type: "Audio", spec: "Dual channel · 32-bit float" },
  { name: "Sigma 24-70mm f/2.8", type: "Lens", spec: "Art series · DG DN" },
];

const testimonials = [
  { q: "Every emotion was captured beautifully. Watching our film felt like reliving the day, frame by frame.", n: "Ananya & Rohan", e: "Wedding · Chennai" },
  { q: "Rajendraprasath has an eye for the unseen. The FPV shots gave our wedding a cinematic dimension we never imagined.", n: "Priya & Karthik", e: "Destination · Udaipur" },
  { q: "Effortlessly professional. The team disappears into the day, then returns with a masterpiece.", n: "Meera & Arjun", e: "Wedding · Coimbatore" },
];

function Counter({ to, suf }: { to: number; suf: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suf}</span>;
}

function Home() {
  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <Nav />

      {/* HERO */}
      <section className="relative h-[100dvh] min-h-[620px] sm:min-h-[720px] w-full overflow-hidden film-grain">
        {/* Galaxy layer */}
        <GalaxyBackground className="z-0" />
        {/* Cinematic video on top with soft blend for a dreamy space feel */}
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover slow-zoom opacity-40 mix-blend-screen z-[1]"
        />
        {/* Vignette + bottom fade */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.75)_100%)]" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-background/10 to-background" />

        <div className="relative z-10 h-full container-x flex flex-col justify-end pt-28 sm:pt-32 pb-20 sm:pb-24 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase text-gold mb-4 sm:mb-6 reveal-up">
                Wedding Cinematographer · Chennai
              </p>
              <h1 className="font-display text-[11.5vw] sm:text-[10vw] lg:text-[6.5vw] leading-[1.05] sm:leading-[0.95] tracking-tight reveal-up" style={{ animationDelay: "120ms" }}>
                Capturing Love<br />
                <span className="gold-gradient-text italic font-light">Beyond Frames</span> & Time
              </h1>
              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-muted-foreground reveal-up" style={{ animationDelay: "260ms" }}>
                Documentary-led wedding films crafted with cinematic storytelling,
                emotion, and timeless visual elegance.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4 reveal-up" style={{ animationDelay: "400ms" }}>
                <Link
                  to="/portfolio"
                  className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-gold text-gold-foreground text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-gold/90 transition-all"
                >
                  <Play size={14} /> Watch Films
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 border border-foreground/30 text-foreground text-xs sm:text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-all"
                >
                  Book Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-3 gap-3 reveal-up" style={{ animationDelay: "540ms" }}>
              {[
                { n: "8+", l: "Years" },
                { n: "100+", l: "Films" },
                { n: "FPV", l: "Specialist" },
              ].map((s) => (
                <div key={s.l} className="glass-card p-4 sm:p-5">
                  <div className="font-display text-2xl sm:text-3xl text-gold">{s.n}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] tracking-[0.4em] uppercase text-muted-foreground animate-pulse">
          Scroll
        </div>
      </section>


      {/* MARQUEE */}
      <section className="py-14 border-y border-border overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="mx-12 font-display text-2xl text-muted-foreground/60 hover:text-gold transition-colors">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-y container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl gold-sheen">
              <img
                src="https://dtechgrow.com/blog/wp-content/uploads/2026/07/admin.jpeg"
                alt="Rajendraprasath, cinematographer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-2xl pointer-events-none" />
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-3"><span className="w-8 h-px bg-gold/60" />The Filmmaker</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8">
              Stories that breathe,<br />
              <span className="gold-gradient-text italic font-light">frames that last.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Rajendraprasath is a Chennai-based cinematographer and wedding
              filmmaker with 8+ years of experience crafting deeply emotional
              films that preserve real moments with cinematic elegance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              His work blends documentary instinct with the discipline of feature
              filmmaking — patient, observant, and unafraid of silence.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-gold text-sm tracking-[0.25em] uppercase link-gold"
            >
              Read the full story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED FILMS */}
      <section className="section-y container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Featured Work</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">Selected Films</h2>
          </div>
          <Link to="/portfolio" className="text-sm tracking-[0.25em] uppercase text-muted-foreground hover:text-gold inline-flex items-center gap-2 link-gold">
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {films.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 80}
              className={f.big ? "col-span-12 md:col-span-6" : "col-span-12 sm:col-span-6 md:col-span-4"}
            >
              <Link to="/portfolio" className="group block relative overflow-hidden aspect-[4/3] rounded-2xl gold-sheen">
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
                <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-gold/95 text-gold-foreground grid place-items-center gold-pulse">
                    <Play size={20} className="ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">{f.category}</p>
                  <h3 className="font-display text-2xl lg:text-3xl">{f.title}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SIGNATURE STYLE */}
      <section className="section-y section-gold-veil border-y border-white/[0.05]">
        <div className="container-x">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 text-center">Signature Style</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center max-w-3xl mx-auto">
              A craft built on <span className="gold-gradient-text italic font-light">instinct</span> and intent.
            </h2>
          </Reveal>
          <div className="mt-14 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {signatures.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <div className="group relative h-full p-8 rounded-2xl border border-white/[0.06] bg-card hover:border-gold/50 transition-all duration-500 hover-lift overflow-hidden">
                  <s.icon className="text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" size={28} />
                  <h3 className="font-display text-2xl mt-6">{s.t}</h3>
                  <p className="text-muted-foreground mt-3 text-[15px] leading-relaxed">{s.d}</p>
                  <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle at 50% 0%, rgba(198,169,105,0.16), transparent 70%)" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-y container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center border-l border-white/[0.06] first:border-l-0 lg:border-l">
              <div className="font-display text-5xl md:text-6xl lg:text-7xl gold-gradient-text">
                <Counter to={s.n} suf={s.suf} />
              </div>
              <p className="mt-4 text-xs tracking-[0.3em] uppercase text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GEAR */}
      <section className="section-y section-noir border-t border-white/[0.06]">
        <div className="container-x mb-10 md:mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">The Kit</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-2xl">Tools chosen with intention.</h2>
        </div>
        <div className="flex gap-5 md:gap-6 overflow-x-auto pb-8 px-5 md:px-10 snap-x snap-mandatory">
          {gear.map((g) => (
            <div key={g.name} className="snap-start shrink-0 w-[300px] md:w-[380px] p-8 bg-card rounded-2xl border border-white/[0.06] hover:border-gold/40 transition-all duration-500 hover gold-sheen">
              <p className="text-[10px] tracking-[0.3em] uppercase text-gold">{g.type}</p>
              <h3 className="font-display text-2xl md:text-3xl mt-4">{g.name}</h3>
              <p className="text-muted-foreground mt-3 text-sm">{g.spec}</p>
              <Camera className="mt-12 text-muted-foreground/40" size={48} strokeWidth={1} />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y section-gold-veil border-y border-white/[0.05]">
        <div className="container-x">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 text-center">In Their Words</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-center mb-12 md:mb-20">Loved by couples.</h2>
          </Reveal>
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-14 lg:p-16 relative">
            <Quote className="absolute -top-6 left-10 text-gold bg-background px-2" size={48} />
            <div key={tIdx} className="reveal-up">
              <p className="font-display text-xl md:text-3xl leading-snug italic text-foreground/95">
                "{testimonials[tIdx].q}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-px h-10 bg-gold" />
                <div>
                  <p className="font-medium">{testimonials[tIdx].n}</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{testimonials[tIdx].e}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setTIdx(i)}
                  className={`h-px transition-all ${i === tIdx ? "w-12 bg-gold" : "w-6 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden film-grain">
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(198,169,105,0.18), transparent 60%)" }} />
        <div className="relative container-x text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Let's Begin</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1] max-w-4xl mx-auto">
              Let's create something<br />
              <span className="gold-gradient-text italic font-light">timeless.</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 md:mt-12 inline-flex items-center gap-3 px-10 py-5 bg-gold text-gold-foreground text-sm tracking-[0.25em] uppercase hover:bg-gold/90 transition-all rounded-full gold-pulse gold-sheen"
            >
              Book Your Story <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
