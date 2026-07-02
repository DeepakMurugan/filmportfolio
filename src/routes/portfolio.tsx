import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Play, X } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Cinematic Wedding Films in Chennai" },
      { name: "description", content: "A curated selection of wedding films, pre-wedding shoots, FPV drone, commercial and concert cinematography." },
      { property: "og:title", content: "Portfolio — Cinematic Wedding Films in Chennai" },
      { property: "og:description", content: "Selected wedding films and cinematic work by Rajendraprasath." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

const categories = ["All", "Wedding", "Pre-Wedding", "Drone", "Commercial", "Concert"] as const;
type Category = (typeof categories)[number];

type Work = {
  title: string;
  category: Exclude<Category, "All">;
  img: string;
  span: "tall" | "wide" | "sq";
  video: string;
};

const works: Work[] = [
  { title: "Ananya & Rohan", category: "Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80", span: "tall", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Priya & Karthik", category: "Pre-Wedding", img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80", span: "wide", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Aerial Symphony", category: "Drone", img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=80", span: "sq", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Tanishq Heritage", category: "Commercial", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80", span: "sq", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Coldplay Chennai", category: "Concert", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=80", span: "wide", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Meera & Arjun", category: "Wedding", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80", span: "tall", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Sky over Marina", category: "Drone", img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=1200&q=80", span: "wide", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Sabyasachi Bridal", category: "Commercial", img: "https://images.unsplash.com/photo-1612200143130-7bd442b3e5fd?w=1200&q=80", span: "sq", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { title: "Aisha & Vikram", category: "Pre-Wedding", img: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=1200&q=80", span: "sq", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

const spanClass: Record<Work["span"], string> = {
  tall: "md:row-span-2 aspect-[3/4] md:aspect-auto",
  wide: "md:col-span-2 aspect-[16/10]",
  sq: "aspect-square",
};

function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");
  const [light, setLight] = useState<Work | null>(null);
  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <div>
      <Nav />
      <PageHero
        eyebrow="Selected Work"
title={<>A <span className="gold-gradient-text italic font-light">living </span> gallery of moments.</>}        subtitle="Wedding films, pre-weddings, drone cinematography, commercials and concerts. Filtered by category — open any to view full."
      />

      <div className="container-x py-10 md:py-12 flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 text-xs tracking-[0.25em] uppercase border rounded-full transition-all duration-300 ${
              active === c
                ? "bg-gold text-gold-foreground border-gold shadow-[0_0_30px_-8px_var(--gold)]"
                : "border-white/10 text-muted-foreground hover:border-gold hover:text-gold"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="container-x pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[260px] md:auto-rows-[300px]">
          {filtered.map((w) => (
            <button
              key={w.title}
              onClick={() => setLight(w)}
              className={`group relative overflow-hidden rounded-2xl gold-sheen ${spanClass[w.span]}`}
            >
              <img src={w.img} alt={w.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-background/40 transition-opacity grid place-items-center">
                <div className="w-14 h-14 rounded-full bg-gold grid place-items-center text-gold-foreground gold-pulse">
                  <Play size={18} className="ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">{w.category}</p>
                <h3 className="font-display text-2xl">{w.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </section>

      {light && (
        <div className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl grid place-items-center p-6" onClick={() => setLight(null)}>
          <button aria-label="Close" className="absolute top-6 right-6 text-foreground hover:text-gold" onClick={() => setLight(null)}>
            <X size={28} />
          </button>
          <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video">
              <iframe className="w-full h-full" src={light.video} title={light.title} allow="autoplay; encrypted-media" allowFullScreen />
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mt-6">{light.category}</p>
            <h3 className="font-display text-3xl mt-2">{light.title}</h3>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
