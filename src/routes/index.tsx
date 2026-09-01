import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import heroCentralFlorida from "@/assets/hero-central-florida.jpg.asset.json";
import coLeverai from "@/assets/co-leverai-florida.jpg.asset.json";
import coBreathesafe from "@/assets/co-breathesafe-florida.jpg.asset.json";
import coSolstone from "@/assets/co-solstone-florida.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Group Enterprises | Central Florida Operating Company" },
      {
        name: "description",
        content:
          "Pearl Group Enterprises is a Central Florida-based company developing and operating focused businesses across healthy buildings, technology-enabled services and residential real estate.",
      },
      { property: "og:title", content: "Pearl Group Enterprises" },
      {
        property: "og:description",
        content:
          "Building businesses that improve how people live, work and operate.",
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
    href: "https://leversmb.com",
    domain: "leversmb.com",
  },
  {
    num: "03",
    name: "Solstone Residential Management",
    tagline: "Better property performance.",
    description:
      "Residential property management centered on owner confidence, property care and disciplined operations.",
    image: coSolstone.url,
    href: "https://solstonepm.com",
    domain: "solstonepm.com",
  },
];

const pillars = [
  {
    title: "Expertise",
    copy: "Deep domain knowledge in environmental health, operations and real estate.",
  },
  {
    title: "Technology",
    copy: "Modern tools and automation applied where they create measurable advantage.",
  },
  {
    title: "Execution",
    copy: "Disciplined operations and accountability from first engagement onward.",
  },
  {
    title: "Long-term value",
    copy: "Businesses and relationships built for lasting value.",
  },
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
      { threshold: 0.15 },
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

function Index() {
  return (
    <div className="min-h-screen bg-pearl-surface font-sans text-pearl-dark">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-pearl-dark/5 bg-pearl-surface/70 px-6 py-5 backdrop-blur-md md:px-8">
        <a href="#top" className="font-serif text-xl font-bold tracking-tight text-pearl-dark">
          PEARL GROUP
        </a>
        <div className="hidden gap-8 text-xs font-medium uppercase tracking-widest text-pearl-dark/60 md:flex">
          <a href="#about" className="transition-colors hover:text-pearl-accent">
            About
          </a>
          <a href="#businesses" className="transition-colors hover:text-pearl-accent">
            Our Businesses
          </a>
          <a href="#approach" className="transition-colors hover:text-pearl-accent">
            Approach
          </a>
          <a href="#leadership" className="transition-colors hover:text-pearl-accent">
            Leadership
          </a>
        </div>
        <a
          href="#contact"
          className="border border-pearl-dark px-5 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all hover:bg-pearl-dark hover:text-pearl-surface"
        >
          Connect With Us
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-8 md:pb-32 md:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-4 block font-serif text-xl italic text-pearl-accent">
              Central Florida
            </span>
            <h1 className="mb-8 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              Building businesses
              <br />
              that improve how
              <br />
              people live, work and operate.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-pearl-dark/70">
              Pearl Group Enterprises is a Central Florida-based company developing and operating
              focused businesses across healthy buildings, technology-enabled business services and
              residential real estate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#businesses"
                className="bg-pearl-dark px-7 py-3 text-[11px] font-semibold uppercase tracking-widest text-pearl-surface transition-all hover:bg-pearl-accent hover:text-pearl-dark"
              >
                Explore Our Businesses
              </a>
              <a
                href="#contact"
                className="border border-pearl-dark/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-widest text-pearl-dark/70 transition-all hover:border-pearl-dark hover:text-pearl-dark"
              >
                Connect With Us
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroCentralFlorida.url}
              alt="Contemporary Central Florida architecture in warm natural light"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-pearl-dark/5"
            />
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="border-y border-pearl-dark/10 bg-pearl-dark text-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-widest text-pearl-accent">About</p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                  Pearl Group Enterprises operates a portfolio of businesses and brands built around
                  real customer problems.
                </h2>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pearl-surface/70">
                  Based in Central Florida, Pearl Group develops and operates focused businesses in
                  healthy buildings, technology-enabled business services and residential real
                  estate. We combine specialized expertise, practical technology and disciplined
                  operations with a long-term approach to ownership and relationships.
                </p>
                <p className="mt-10 border-t border-pearl-surface/20 pt-6 font-serif text-lg italic text-pearl-accent">
                  Built in Central Florida. Built for long-term value.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Businesses */}
      <section id="businesses" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl md:text-5xl">Our Businesses</h2>
            <p className="pb-2 text-xs uppercase tracking-widest text-pearl-dark/50">
              Three operating brands
            </p>
          </div>

          <div className="grid gap-px border border-pearl-dark/10 bg-pearl-dark/10 md:grid-cols-3">
            {businesses.map((co) => (
              <Reveal key={co.name}>
                <a
                  href={co.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-pearl-surface md:p-10"
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="font-serif text-2xl italic transition-transform group-hover:translate-x-1">
                      {co.num}
                    </span>
                    <span className="text-pearl-accent" aria-hidden>
                      &rarr;
                    </span>
                  </div>
                  <h3 className="mb-3 font-serif text-2xl leading-snug">{co.name}</h3>
                  <p className="mb-4 font-serif italic text-pearl-accent">{co.tagline}</p>
                  <p className="mb-8 leading-relaxed text-pearl-dark/60">{co.description}</p>
                  <div className="mt-auto">
                    <img
                      src={co.image}
                      alt={co.name}
                      loading="lazy"
                       width={1280}
                       height={853}
                      className="mb-5 h-44 w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-pearl-dark/5"
                    />
                    <span className="text-[10px] uppercase tracking-[0.15em] text-pearl-dark/40">
                      {co.domain}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="bg-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-widest text-pearl-accent">Our Approach</p>
            <h2 className="max-w-4xl font-serif text-3xl leading-tight md:text-4xl">
              We build focused businesses around real customer problems — combining domain
              expertise, technology, disciplined operations and long-term relationships.
            </h2>
            <div className="mt-14 grid gap-px border border-pearl-dark/10 bg-pearl-dark/10 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((p, i) => (
                <div key={p.title} className="bg-pearl-surface p-8">
                  <span className="mb-4 block font-serif text-2xl italic text-pearl-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mb-3 font-serif text-xl">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-pearl-dark/70">{p.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-widest text-pearl-accent">Leadership</p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              Founder-led. Built with a long-term view.
            </h2>
            <div className="mt-14 grid gap-px border-y border-pearl-dark/10 bg-pearl-dark/10 md:grid-cols-2">
              <div className="bg-white py-8 md:pr-10">
                <a
                  href="https://castillolugo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-2xl transition-colors hover:text-pearl-accent"
                >
                  Juan J. Castillo
                </a>
                <p className="mt-2 text-xs uppercase tracking-widest text-pearl-dark/50">
                  Founder &amp; Managing Partner
                </p>
              </div>
              <div className="bg-white py-8 md:pl-10">
                <h3 className="font-serif text-2xl">Malory Jimenez</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-pearl-dark/50">
                  Founder · Brand &amp; Client Experience
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-pearl-dark/10 bg-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-serif text-4xl italic leading-tight md:text-5xl">
              Let&rsquo;s explore opportunities together.
            </h2>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-pearl-dark/70">
               For partnerships, business opportunities, supplier relationships and institutional
               inquiries, connect with Pearl Group Enterprises.
            </p>
            <a
               href="mailto:jj@pearlgroupenterprises.com"
              className="mt-10 inline-block bg-pearl-dark px-8 py-4 text-[11px] font-semibold uppercase tracking-widest text-pearl-surface transition-all hover:bg-pearl-accent hover:text-pearl-dark"
            >
              Start a Conversation
            </a>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-pearl-dark px-6 py-20 text-pearl-surface md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="mb-6 font-serif text-3xl">Pearl Group Enterprises</h2>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-pearl-surface/50">
              Building businesses that improve how people live, work and operate.
            </p>
            <a
               href="mailto:jj@pearlgroupenterprises.com"
              className="border-b border-pearl-accent pb-1 text-sm tracking-wide transition-colors hover:text-pearl-accent"
            >
               jj@pearlgroupenterprises.com
            </a>
          </div>
          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-widest text-pearl-accent">
              Headquarters
            </h3>
            <address className="flex flex-col gap-2 text-sm not-italic text-pearl-surface/70">
              <span>Central Florida</span>
              <span>United States</span>
            </address>
          </div>
          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-widest text-pearl-accent">
              Businesses
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-pearl-surface/70">
              {businesses.map((co) => (
                <li key={co.name}>
                  <a href={co.href} target="_blank" rel="noreferrer" className="hover:text-pearl-accent">
                    {co.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl justify-between border-t border-pearl-surface/10 pt-8 text-[10px] uppercase tracking-widest text-pearl-surface/30">
          <span>&copy; {new Date().getFullYear()} Pearl Group Enterprises LLC</span>
             <a href="https://pearlgroupenterprises.com" className="hover:text-pearl-accent">
               pearlgroupenterprises.com
             </a>
        </div>
      </footer>
    </div>
  );
}
