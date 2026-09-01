import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import heroCentralFlorida from "@/assets/hero-central-florida.jpg.asset.json";
import coLeverai from "@/assets/co-leverai-florida-2.jpg.asset.json";
import coBreathesafe from "@/assets/co-breathesafe-florida.jpg.asset.json";
import coSolstone from "@/assets/co-solstone-florida.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Group Enterprises | Winter Garden, Florida" },
      {
        name: "description",
        content:
          "Pearl Group Enterprises is a Central Florida family-owned company bringing together ventures in healthy buildings, technology-enabled business services and residential real estate.",
      },
      { property: "og:title", content: "Pearl Group Enterprises" },
      {
        property: "og:description",
        content:
          "Building businesses that improve how people live, work and operate. Winter Garden, Florida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

interface Business {
  num: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  domain: string;
}

const businesses: Business[] = [
  {
    num: "01",
    name: "Breathe Safe Technologies",
    tagline: "Healthier indoor environments.",
    description:
      "Healthy-building and indoor-air-quality solutions for homes, businesses and organizations.",
    image: coBreathesafe.url,
    alt: "Bright, contemporary indoor workspace with natural light and clean air",
    href: "https://breathesafetech.com",
    domain: "breathesafetech.com",
  },
  {
    num: "02",
    name: "Lever AI",
    tagline: "Smarter business operations.",
    description:
      "Practical AI and automation solutions that help growing businesses reduce repetitive work and operate more efficiently.",
    image: coLeverai.url,
    alt: "Business operator reviewing workflow dashboards on a laptop and tablet",
    href: "https://leversmb.com",
    domain: "leversmb.com",
  },
  {
    num: "03",
    name: "Solstone Property Management",
    tagline: "Better property performance.",
    description:
      "Property and asset management focused on owner confidence, property care, operational consistency and long-term value.",
    image: coSolstone.url,
    alt: "Refined Central Florida residence with mature landscaping in warm light",
    href: "https://solstonepm.com",
    domain: "solstonepm.com",
  },
];

const founders = [
  {
    num: "01",
    name: "Juan J. Castillo",
    title: "Co-Founder & Managing Partner",
    expertise: "Strategy · Operations · Business Development",
    link: "https://castillolugo.com",
    linkLabel: "Meet Juan",
  },
  {
    num: "02",
    name: "Malory Jimenez",
    title: "Co-Founder & Managing Partner",
    expertise: "Brand · Client Experience · Business Development",
    link: "https://maloryjimenez.com",
    linkLabel: "Meet Malory",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Our Businesses", href: "#businesses" },
  { label: "Leadership", href: "#leadership" },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-11 w-11 items-center justify-center ${className}`}>
      <span className="absolute inset-0 rounded-full border border-current opacity-40" />
      <span className="font-serif text-lg">P</span>
      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-pearl-accent" />
    </span>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-pearl-surface font-sans text-pearl-dark">
      {/* Hero with integrated navigation */}
      <header id="top" className="relative isolate min-h-[92vh] overflow-hidden bg-pearl-dark">
        <img
          src={heroCentralFlorida.url}
          alt="Contemporary Central Florida architecture beneath mature live oaks in warm natural light"
          width={1920}
          height={1200}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(7,26,32,0.96) 0%, rgba(7,26,32,0.86) 38%, rgba(10,31,38,0.45) 72%, rgba(10,31,38,0.25) 100%)",
          }}
        />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <a href="#top" className="flex items-center gap-3 text-pearl-surface">
            <Monogram />
            <span className="leading-tight">
              <span className="block font-serif text-lg tracking-tight">Pearl Group</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-pearl-surface/70">
                Enterprises
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-pearl-surface/80 transition-colors hover:text-pearl-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="group flex items-center gap-2 border border-pearl-surface/25 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pearl-surface transition-colors hover:border-pearl-accent hover:text-pearl-accent"
            >
              Connect With Us
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </a>
          </div>
          <a
            href="#contact"
            className="border border-pearl-surface/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-pearl-surface lg:hidden"
          >
            Connect
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-28">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-pearl-accent/70" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-pearl-accent">
              Winter Garden, FL
            </span>
          </div>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.05] text-pearl-surface sm:text-5xl md:text-6xl xl:text-7xl">
            Building businesses that improve how people{" "}
            <em className="italic text-pearl-accent">live, work and operate.</em>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-pearl-surface/70 md:text-lg">
            Pearl Group Enterprises is a Central Florida family-owned company that brings together
            our ventures in healthy buildings, technology-enabled business services and residential
            real estate.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#businesses"
              className="group flex items-center gap-3 bg-pearl-accent px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-pearl-dark transition-colors hover:bg-pearl-surface"
            >
              Explore Our Businesses
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>
                &darr;
              </span>
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-3 border border-pearl-surface/30 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-pearl-surface transition-colors hover:border-pearl-accent hover:text-pearl-accent"
            >
              Connect With Us
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </a>
          </div>
          <p className="mt-14 text-[10px] uppercase tracking-[0.28em] text-pearl-surface/45">
            Family-owned · Central Florida
          </p>

        </div>
      </header>

      {/* About */}
      <section id="about" className="bg-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-pearl-teal">
                  Who We Are
                </p>
                <h2 className="font-serif text-4xl leading-[1.1] md:text-5xl xl:text-6xl">
                  A family enterprise with a long-term point of view.
                </h2>
              </div>
              <div className="lg:pt-16">
                <p className="font-serif text-2xl leading-snug md:text-3xl">
                  Pearl Group Enterprises brings together a portfolio of purpose-built businesses
                  and brands across healthy buildings, technology-enabled business services and
                  residential real estate.
                </p>
                <p className="mt-8 leading-relaxed text-pearl-dark/60">
                  Based in Central Florida, we combine practical expertise, thoughtful use of
                  technology and disciplined operations with a long-term approach to building
                  businesses and relationships.
                </p>
                <p className="mt-10 border-t border-pearl-dark/10 pt-6 text-sm font-semibold tracking-wide text-pearl-teal">
                  Practical expertise · Thoughtful technology · Disciplined operations
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Businesses */}
      <section id="businesses" className="bg-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <div className="mb-14 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl md:text-6xl">Our Businesses</h2>
            <p className="pb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-pearl-dark/45">
              Three operating brands
            </p>
          </div>

          <div className="grid gap-px border border-pearl-dark/10 bg-pearl-dark/10 md:grid-cols-3">
            {businesses.map((co) => (
              <Reveal key={co.name} className="h-full">
                <a
                  href={co.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col bg-pearl-surface p-8 transition-colors hover:bg-white md:p-10"
                >
                  <div className="mb-10 flex items-start justify-between">
                    <span className="font-serif text-xl italic text-pearl-dark/70">{co.num}</span>
                    <span
                      className="text-pearl-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      &#8599;
                    </span>
                  </div>
                  <h3 className="mb-4 font-serif text-2xl leading-snug md:text-[1.75rem]">
                    {co.name}
                  </h3>
                  <p className="mb-4 font-serif italic text-pearl-gold">{co.tagline}</p>
                  <p className="mb-8 leading-relaxed text-pearl-dark/60">{co.description}</p>
                  <div className="mt-auto">
                    <div className="overflow-hidden rounded-sm">
                      <img
                        src={co.image}
                        alt={co.alt}
                        loading="lazy"
                        width={1280}
                        height={853}
                        className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <span className="mt-6 flex items-center justify-between border-t border-pearl-dark/10 pt-5 text-[10px] uppercase tracking-[0.18em] text-pearl-dark/45 transition-colors group-hover:text-pearl-teal">
                      {co.domain}
                      <span aria-hidden>&#8599;</span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="border-t border-pearl-dark/10 bg-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-pearl-teal">
                  Leadership
                </p>
                <h2 className="max-w-md font-serif text-4xl leading-[1.1] md:text-5xl">
                  Founder-led. Built with a long-term view.
                </h2>
              </div>
              <div className="grid gap-px self-start bg-pearl-dark/10">
                {founders.map((f) => (
                  <div key={f.name} className="bg-pearl-surface py-8">
                    <div className="flex items-start gap-6">
                      <span className="mt-1 font-serif text-base italic text-pearl-gold">
                        {f.num}
                      </span>
                      <div>
                        <h3 className="font-serif text-2xl md:text-[1.75rem]">{f.name}</h3>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-pearl-teal">
                          {f.title}
                        </p>
                        <p className="mt-3 text-sm text-pearl-dark/55">{f.expertise}</p>
                        <a
                          href={f.link}
                          target="_blank"
                          rel="noreferrer"
                          className="group mt-5 inline-flex items-center gap-2 border-b border-pearl-dark/20 pb-1 text-sm text-pearl-dark/70 transition-colors hover:border-pearl-gold hover:text-pearl-gold"
                        >
                          {f.linkLabel}
                          <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                            &rarr;
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-pearl-teal text-pearl-surface">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full border border-pearl-surface/10" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full border border-pearl-surface/10" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-pearl-accent">
              Connect With Pearl Group
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.1] md:text-6xl">
              Let&rsquo;s explore opportunities together.
            </h2>
            <p className="mt-8 max-w-xl leading-relaxed text-pearl-surface/75">
              For partnerships, business opportunities, supplier relationships and institutional
              inquiries, connect with Pearl Group Enterprises.
            </p>
            <a
              href="mailto:jj@pearlgroupenterprises.com"
              className="group mt-12 inline-flex items-center gap-3 bg-pearl-surface px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-pearl-dark transition-colors hover:bg-pearl-accent"
            >
              Start a Conversation
              <span className="transition-transform group-hover:translate-x-1" aria-hidden>
                &rarr;
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-pearl-ink px-6 py-20 text-pearl-surface md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Monogram />
              <span className="font-serif text-xl">Pearl Group Enterprises LLC</span>
            </div>
            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-pearl-surface/50">
              Winter Garden, Florida
            </p>
            <a
              href="https://pearlgroupenterprises.com"
              className="mt-4 inline-block text-sm text-pearl-surface/70 transition-colors hover:text-pearl-accent"
            >
              pearlgroupenterprises.com
            </a>
          </div>
          <div className="md:justify-self-end">
            <h2 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-pearl-accent">
              Our businesses and brands
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-pearl-surface/70">
              {businesses.map((co) => (
                <li key={co.name}>
                  <a
                    href={co.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-pearl-accent"
                  >
                    {co.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-3 border-t border-pearl-surface/10 pt-8 text-[10px] uppercase tracking-[0.22em] text-pearl-surface/40 sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Pearl Group Enterprises LLC</span>
          <a
            href="mailto:jj@pearlgroupenterprises.com"
            className="transition-colors hover:text-pearl-accent"
          >
            jj@pearlgroupenterprises.com
          </a>
        </div>
      </footer>
    </div>
  );
}
