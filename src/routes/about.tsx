import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, Camera, Film, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rajendraprasath, Chennai Wedding Filmmaker" },
      { name: "description", content: "Meet Rajendraprasath — a Chennai-based wedding cinematographer with 8+ years crafting documentary, cinematic, FPV-led wedding films." },
      { property: "og:title", content: "About — Rajendraprasath, Chennai Wedding Filmmaker" },
      { property: "og:description", content: "Documentary-led wedding films, 8+ years of craft, Chennai-based, available worldwide." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2017", title: "First Frame", body: "Picked up a camera at a friend's wedding. Never looked back." },
  { year: "2019", title: "Studio Founded", body: "Started Rajendraprasath Films with a documentary-first manifesto." },
  { year: "2021", title: "FPV Specialisation", body: "Added FPV drone cinematography — a signature ever since." },
  { year: "2023", title: "100 Films", body: "Crossed the hundred-film mark across India and abroad." },
  { year: "2025", title: "Premium Studio", body: "A small team. Big stories. Selective collaborations only." },
];

const skills = [
  { icon: Film, t: "Cinematography" },
  { icon: Camera, t: "Direction" },
  { icon: Sparkles, t: "Colour Grading" },
  { icon: Heart, t: "Emotional Editing" },
  { icon: Award, t: "FPV Drone" },
];

function AboutPage() {
  return (
    <div>
      <Nav />
      <PageHero
        eyebrow="The Filmmaker"
        title={<>Eight years of <span className="gold-gradient-text italic font-light">listening</span> through a lens.</>}
        subtitle="Rajendraprasath is a Chennai-based cinematographer and wedding filmmaker. His work is patient, observant, and deeply emotional — the kind of films couples revisit on every anniversary."
      />

      <section className="section-y container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl gold-sheen relative">
            <img src="src/assets/admin.jpeg" alt="Rajendraprasath portrait" className="w-full h-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-2xl pointer-events-none" />
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>I grew up loving cinema way before I loved cameras. The pull of a single shot the way light catches a smile is exactly why I film weddings. To me, your day isn’t just an event; it’s a living story that deserves to be filmed like a movie.</p>

<p>My approach is entirely documentary at heart, meaning no awkward, staged poses. I watch for those quiet, unscripted moments the joyful chaos and the secret glances - and frame them beautifully so the final piece feels like a core memory you can return to.</p>

<p>You’re getting over eight years of experience, To maintain this level of artistry, my trusted team takes on a limited number of weddings each year so every film gets the absolute focus it deserves.</p>

<p>To bring a unique perspective, I also fly custom-built FPV drones for immersive aerial shots. This lets me mix intimate ground emotions with breathtaking cinematic angles, creating a timeless film where you don't just watch the day, but feel the butterflies all over again.</p>   </Reveal>
      </section>

      <section className="section-y section-gold-veil border-y border-white/[0.05]">
        <div className="container-x">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Career Timeline</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16">The road so far.</h2>
          </Reveal>
          <div className="relative max-w-3xl">
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <div className="space-y-10 md:space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 100}>
                  <div className="flex gap-12 items-baseline group">
                    <div className="w-24 shrink-0 text-right">
                      <span className="font-display text-2xl gold-gradient-text">{t.year}</span>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute left-[-5px] top-2.5 w-2.5 h-2.5 rounded-full bg-gold ring-4 ring-gold/15 group-hover:ring-gold/30 transition-all" />
                      <h3 className="font-display text-2xl group-hover:text-gold transition-colors">{t.title}</h3>
                      <p className="text-muted-foreground mt-2">{t.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y container-x">
        <Reveal>
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Craft</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-10 md:mb-12">What I bring to set.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skills.map((s, i) => (
            <Reveal key={s.t} delay={i * 80}>
              <div className="group relative p-8 rounded-2xl border border-white/[0.06] bg-card hover:border-gold/40 transition-all duration-500 hover-lift overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, rgba(198,169,105,0.14), transparent 70%)" }} />
                <s.icon className="text-gold mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" size={28} />
                <p className="font-display text-xl relative">{s.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y container-x text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto">
            Let's talk about <span className="gold-gradient-text italic font-light">your film.</span>
          </h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gold text-gold-foreground text-sm tracking-[0.25em] uppercase hover:bg-gold/90 transition-all rounded-full gold-pulse gold-sheen">
            Start a Conversation
          </Link>
        </Reveal>
      </section>
      <Footer />
    </div>
  );
}
