import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Wedding Cinematographer in Chennai" },
      { name: "description", content: "Book Rajendraprasath Films for your wedding, pre-wedding or commercial shoot in Chennai and beyond." },
      { property: "og:title", content: "Contact — Book a Wedding Cinematographer in Chennai" },
      { property: "og:description", content: "Your story deserves to be filmed beautifully. Start here." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Please enter a phone number").max(20),
  email: z.string().trim().email("Invalid email").max(150),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  location: z.string().trim().max(100).optional().or(z.literal("")),
  budget: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few words").max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  }

  return (
    <div>
      <Nav />
      <PageHero
        eyebrow="Get in Touch"
        title={<>Your story deserves to be <span className="gold-gradient-text italic font-light">filmed beautifully.</span></>}
        subtitle="Share a few details. I respond personally within 24 hours."
      />

      <section className="section-y container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-5 space-y-10">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">Studio</p>
            <p className="font-display text-3xl">Chennai, India</p>
            <p className="text-muted-foreground mt-2">Available across India · Destination weddings worldwide</p>
          </div>
          <div className="space-y-5">
            <a href="mailto:hello@rajendraprasath.films" className="flex items-center gap-4 group">
              <span className="w-12 h-12 grid place-items-center border border-border group-hover:border-gold group-hover:text-gold transition-colors"><Mail size={16} /></span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Email</p>
                <p className="text-foreground group-hover:text-gold transition-colors">hello@rajendraprasath.films</p>
              </div>
            </a>
            <a href="tel:+919800000000" className="flex items-center gap-4 group">
              <span className="w-12 h-12 grid place-items-center border border-border group-hover:border-gold group-hover:text-gold transition-colors"><Phone size={16} /></span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Phone</p>
                <p className="text-foreground group-hover:text-gold transition-colors">+91 98000 00000</p>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 grid place-items-center border border-border"><MapPin size={16} className="text-gold" /></span>
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Studio</p>
                <p>Anna Nagar, Chennai 600040</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3">Booking Window</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              I take on a limited number of weddings per year. Enquire 4–8 months ahead for peak season (Nov–Feb).
            </p>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-7">
          {sent ? (
            <div className="border border-gold/40 bg-card p-12 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/10 grid place-items-center text-gold mb-6">
                <Check size={28} />
              </div>
              <h3 className="font-display text-3xl">Message received.</h3>
              <p className="text-muted-foreground mt-4 max-w-md mx-auto">
                Thank you. I'll personally read every word and reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6 p-8 lg:p-10 border border-border bg-card">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" name="name" error={errors.name} required />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} required />
              </div>
              <Field label="Email" name="email" type="email" error={errors.email} required />
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Event Date" name="date" type="date" error={errors.date} />
                <Field label="Location" name="location" error={errors.location} />
              </div>
              <Field label="Budget Range (optional)" name="budget" placeholder="e.g. ₹2L – ₹4L" error={errors.budget} />
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Tell me about your story *</label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors"
                  placeholder="Where, when, what kind of film you imagine..."
                />
                {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold text-gold-foreground text-sm tracking-[0.25em] uppercase hover:bg-gold/90 transition-all"
              >
                Send Enquiry
              </button>
            </form>
          )}
        </Reveal>
      </section>




      <Footer />
    </div>
  );
}

function Field({
  label, name, type = "text", error, required, placeholder,
}: {
  label: string; name: string; type?: string; error?: string; required?: boolean; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition-colors"
      />
      {error && <p className="text-destructive text-xs mt-2">{error}</p>}
    </div>
  );
}
