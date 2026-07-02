import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Camera, Wand2, Layers, Plane } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Gear — Cinema Cameras, Drones, Workflow" },
      { name: "description", content: "Cameras, lenses, drones, audio and post-production workflow used by Rajendraprasath Films." },
      { property: "og:title", content: "Experience & Gear — Cinema Cameras, Drones, Workflow" },
      { property: "og:description", content: "A look behind the lens — gear, drones, and workflow." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const cameras = [
  { name: "Sony Alpha 7 IV", spec: "33MP · 4K 60p · S-Cinetone" },
  { name: "Sony FX3", spec: "Full-frame cinema · Dual base ISO" },
  { name: "Sony A7S III", spec: "Low-light king · 4K 120p" },
];
const lenses = [
  { name: "Sony 24-70mm GM II", spec: "Workhorse zoom" },
  { name: "Sigma 35mm f/1.4 DG DN", spec: "Documentary prime" },
  { name: "Sony 85mm f/1.4 GM", spec: "Portrait & emotion" },
  { name: "Sony 16-35mm GM", spec: "Wide & venue" },
];
const drones = [
  { name: "DJI FPV Avata 2", spec: "Cinewhoop · 4K 100fps" },
  { name: "DJI Mavic 3 Cine", spec: "ProRes · Hasselblad CMOS" },
];
const audio = [
  { name: "RØDE Wireless GO II", spec: "Dual channel · 32-bit float" },
  { name: "Sennheiser MKH 416", spec: "Shotgun reference" },
];

function GearList({ title, items, icon: Icon }: { title: string; items: { name: string; spec: string }[]; icon: typeof Camera }) {
  return (
    <Reveal>
      <div className="group p-8 rounded-2xl border border-white/[0.06] bg-card hover:border-gold/40 transition-all duration-500 hover-lift gold-sheen relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: "radial-gradient(circle at 0% 0%, rgba(198,169,105,0.12), transparent 60%)" }} />
        <div className="flex items-center gap-3 mb-6 relative">
          <span className="w-11 h-11 grid place-items-center rounded-xl border border-gold/30 bg-gold/5 text-gold group-hover:rotate-6 transition-transform duration-500">
            <Icon size={18} />
          </span>
          <h3 className="font-display text-2xl">{title}</h3>
        </div>
        <ul className="divide-y divide-white/[0.05] relative">
          {items.map((i) => (
            <li key={i.name} className="flex justify-between gap-6 py-4">
              <span className="text-[15px]">{i.name}</span>
              <span className="text-sm text-muted-foreground text-right">{i.spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

const workflow = [
  { t: "Pre-Production", d: "Treatment, mood reel, shot list, venue recce, contingency plans." },
  { t: "Production", d: "Two-camera principal + B-cam + drone team. Dedicated audio." },
  { t: "Post — Edit", d: "DaVinci Resolve · narrative pacing · music-led storytelling." },
  { t: "Post — Grade", d: "ACES-based pipeline · cinema LUTs · per-shot finishing." },
  { t: "Delivery", d: "4K master, social cutdowns, archive backup for 2 years." },
];

function ExperiencePage() {
  return (
    <div>
      <Nav />
      <PageHero
        eyebrow="Experience & Gear"
        title={<>The <span className="gold-gradient-text italic font-light">craft</span> behind the camera.</>}
        subtitle="Premium gear is the floor, not the ceiling. The films come from the people, the planning, and the post."
      />

      <section className="section-y container-x grid md:grid-cols-2 gap-5 md:gap-6">
        <GearList title="Cinema Bodies" items={cameras} icon={Camera} />
        <GearList title="Lenses" items={lenses} icon={Layers} />
        <GearList title="Drones" items={drones} icon={Plane} />
        <GearList title="Audio" items={audio} icon={Wand2} />
      </section>

      <section className="section-y section-gold-veil border-y border-white/[0.05]">
        <div className="container-x">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">Workflow</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-16">From brief to delivery.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {workflow.map((w, i) => (
              <Reveal key={w.t} delay={i * 80} className="bg-background">
                <div className="group p-7 md:p-8 min-h-[200px] h-full hover:bg-card transition-colors duration-500">
                  <p className="font-display text-4xl text-gold/40 group-hover:text-gold transition-colors duration-500">0{i + 1}</p>
                  <h3 className="font-display text-xl mt-6">{w.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
