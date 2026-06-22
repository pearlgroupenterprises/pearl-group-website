import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import heroHeritage from "@/assets/hero-heritage.jpg";
import coLeverai from "@/assets/co-leverai.jpg";
import coBreathesafe from "@/assets/co-breathesafe.jpg";
import coCjm from "@/assets/co-cjm.jpg";
import coSolstone from "@/assets/co-solstone.jpg";
import coImpactbridge from "@/assets/co-impactbridge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pearl Group Enterprises | Smart Infrastructure & Performance" },
      {
        name: "description",
        content:
          "Pearl Group Enterprises is an Orlando-based diversified operating group integrating environmental health, smart infrastructure, AI, capital strategy, and asset operations.",
      },
      { property: "og:title", content: "Pearl Group Enterprises" },
      {
        property: "og:description",
        content:
          "A diversified operating group improving how buildings, organizations, and small businesses perform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroHeritage },
      { name: "twitter:image", content: heroHeritage },
    ],
  }),
  component: Index,
});

interface Company {
  num: string;
  name: string;
  sector: string;
  description: string;
  image: string;
  domain: string;
}

const companies: Company[] = [
  {
    num: "01",
    name: "LeverAI.io",
    sector: "Digital Infrastructure",
    description:
      "AI implementation and workflow automation that modernizes fragmented systems and gives small businesses enterprise-grade intelligence.",
    image: coLeverai,
    domain: "leverai.io",
  },
  {
    num: "02",
    name: "Breathe Safe Technologies",
    sector: "Environmental Performance",
    description:
      "Indoor air quality and health optimization for high-density commercial, residential, and healthcare environments.",
    image: coBreathesafe,
    domain: "breathesafe.tech",
  },
  {
    num: "03",
    name: "CJM Construction Group",
    sector: "Physical Infrastructure",
    description:
      "Construction, retrofit, and resilience upgrades that turn underperforming buildings into durable, climate-ready assets.",
    image: coCjm,
    domain: "cjmconstruction.com",
  },
  {
    num: "04",
    name: "Solstone Management",
    sector: "Asset Operations",
    description:
      "Residential property and asset management built on stewardship, tenant experience, and long-term operational efficiency.",
    image: coSolstone,
    domain: "solstonemgmt.com",
  },
  {
    num: "05",
    name: "ImpactBridge Partners",
    sector: "Capital Strategy",
    description:
      "Grant advisory and funding alignment that unlocks philanthropic and aligned capital, connecting mission-driven organizations with the resources to execute.",
    image: coImpactbridge,
    domain: "impactbridge.partners",
  },
];

const challenges = [
  "Underperforming physical infrastructure",
  "Operational inefficiencies",
  "Limited access to aligned funding",
  "Fragmented or outdated technology systems",
  "Increasing environmental & weather-related risk",
];

const journey = ["Assessment", "Funding Alignment", "Execution", "Automation", "Optimization"];

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
          <a href="#ecosystem" className="transition-colors hover:text-pearl-accent">
            Ecosystem
          </a>
          <a href="#approach" className="transition-colors hover:text-pearl-accent">
            Approach
          </a>
          <a href="#leadership" className="transition-colors hover:text-pearl-accent">
            Leadership
          </a>
          <a href="#contact" className="transition-colors hover:text-pearl-accent">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="border border-pearl-dark px-5 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all hover:bg-pearl-dark hover:text-pearl-surface"
        >
          Inquire
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-8 md:pb-32 md:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-4 block font-serif text-xl italic text-pearl-accent">
              Smart Infrastructure & Performance &middot; Orlando, FL
            </span>
            <h1 className="mb-8 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl xl:text-8xl">
              Stewarding the
              <br />
              Future of Performance.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-pearl-dark/70">
              Pearl Group Enterprises is a diversified operating group that integrates physical
              infrastructure, digital systems, and capital strategy to deliver measurable
              performance improvements across health, technology, real estate, and impact.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#ecosystem"
                className="bg-pearl-dark px-7 py-3 text-[11px] font-semibold uppercase tracking-widest text-pearl-surface transition-all hover:bg-pearl-accent hover:text-pearl-dark"
              >
                Explore the Ecosystem
              </a>
              <a
                href="#approach"
                className="border border-pearl-dark/20 px-7 py-3 text-[11px] font-semibold uppercase tracking-widest text-pearl-dark/70 transition-all hover:border-pearl-dark hover:text-pearl-dark"
              >
                Our Approach
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroHeritage}
              alt="Modern limestone and glass building facade in golden hour light"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-pearl-dark/5"
            />
          </div>
        </div>
      </header>

      {/* Value proposition */}
      <section id="approach" className="border-y border-pearl-dark/10 bg-pearl-dark text-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="mb-6 text-xs uppercase tracking-widest text-pearl-accent">
                  Value Proposition
                </p>
                <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                  We solve five core challenges for investors, organizations, and property owners.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pl-8">
                <ul className="divide-y divide-pearl-surface/10">
                  {challenges.map((c, i) => (
                    <li key={c} className="flex items-center gap-6 py-5">
                      <span className="font-serif text-lg italic text-pearl-accent">
                        0{i + 1}
                      </span>
                      <span className="text-lg text-pearl-surface/85">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-20">
            <p className="mb-8 text-xs uppercase tracking-widest text-pearl-surface/50">
              An integrated path — from diagnosis to optimization
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-6">
              {journey.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <span className="font-serif text-2xl md:text-3xl">{step}</span>
                  {i < journey.length - 1 && (
                    <span className="text-pearl-accent" aria-hidden>
                      &rarr;
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ecosystem / Portfolio */}
      <section id="ecosystem" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-serif text-4xl md:text-5xl">The Ecosystem</h2>
            <p className="pb-2 text-xs uppercase tracking-widest text-pearl-dark/50">
              Five companies, one operating platform
            </p>
          </div>

          <div className="grid gap-px border border-pearl-dark/10 bg-pearl-dark/10 md:grid-cols-2">
            {companies.map((co, i) => (
              <Reveal
                key={co.name}
                className={
                  i === companies.length - 1 && companies.length % 2 !== 0 ? "md:col-span-2" : ""
                }
              >
                <article className="group flex h-full flex-col bg-white p-8 transition-colors hover:bg-pearl-surface md:p-12">
                  <div className="mb-10 flex items-start justify-between">
                    <span className="border border-pearl-dark/20 px-3 py-1 text-[10px] uppercase tracking-wide">
                      {co.sector}
                    </span>
                    <span className="font-serif text-2xl italic transition-transform group-hover:translate-x-2">
                      {co.num}
                    </span>
                  </div>
                  <h3 className="mb-4 font-serif text-3xl">{co.name}</h3>
                  <p className="mb-8 max-w-md leading-relaxed text-pearl-dark/60">
                    {co.description}
                  </p>
                  <div className="mt-auto">
                    <img
                      src={co.image}
                      alt={co.name}
                      loading="lazy"
                      width={768}
                      height={512}
                      className="mb-5 h-48 w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-pearl-dark/5"
                    />
                    <span className="text-[10px] uppercase tracking-[0.15em] text-pearl-dark/40">
                      {co.domain}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Market position */}
      <section className="bg-pearl-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-8">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-widest text-pearl-accent">
              Market Position
            </p>
            <h2 className="max-w-4xl font-serif text-3xl leading-tight md:text-4xl">
              We operate at the convergence of five macro trends — a multi-trillion-dollar
              intersection.
            </h2>
            <div className="mt-14 grid gap-px border border-pearl-dark/10 bg-pearl-dark/10 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Healthy buildings movement",
                "AI adoption in SMBs",
                "Climate adaptation & resilience",
                "Operational efficiency demand",
                "Grant-funded modernization",
              ].map((trend, i) => (
                <div key={trend} className="bg-pearl-surface p-8">
                  <span className="mb-4 block font-serif text-2xl italic text-pearl-accent">
                    0{i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-pearl-dark/70">{trend}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Leadership / Ethos */}
      <section id="leadership" className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2 md:px-8">
          <Reveal>
            <img
              src={heroHeritage}
              alt="Architectural detail representing Pearl Group's foundation"
              loading="lazy"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-sm object-cover outline outline-1 -outline-offset-1 outline-pearl-dark/5"
            />
          </Reveal>
          <Reveal className="flex flex-col justify-center">
            <p className="mb-6 text-xs uppercase tracking-widest text-pearl-accent">Leadership</p>
            <h2 className="mb-8 font-serif text-4xl leading-tight md:text-5xl">
              Founder-led. Integrated. Systems-oriented.
            </h2>
            <p className="mb-12 max-w-md leading-relaxed text-pearl-dark/70">
              A family enterprise built on the conviction that lasting value comes from how well
              buildings, organizations, and capital perform together — over generations, not
              quarters.
            </p>
            <div className="space-y-8">
              <div className="border-l-2 border-pearl-accent pl-6">
                <h4 className="font-serif text-2xl">Juan J. Castillo</h4>
                <p className="mt-1 text-sm text-pearl-dark/60">
                  Environmental Health Strategy, Systems Design & AI Integration
                </p>
              </div>
              <div className="border-l-2 border-pearl-accent pl-6">
                <h4 className="font-serif text-2xl">Malory Jimenez</h4>
                <p className="mt-1 text-sm text-pearl-dark/60">
                  Operations Leadership, Brand Development & Client Experience
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-pearl-dark px-6 py-20 text-pearl-surface md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h4 className="mb-6 font-serif text-3xl">Pearl Group Enterprises</h4>
            <p className="mb-8 max-w-xs text-sm leading-relaxed text-pearl-surface/50">
              Building and managing a diverse portfolio of companies at the intersection of health,
              technology, capital, real estate, and operational efficiency.
            </p>
            <a
              href="mailto:hello@pearlgroup.enterprises"
              className="border-b border-pearl-accent pb-1 text-sm tracking-wide transition-colors hover:text-pearl-accent"
            >
              hello@pearlgroup.enterprises
            </a>
          </div>
          <div>
            <h5 className="mb-6 text-[10px] font-semibold uppercase tracking-widest text-pearl-accent">
              Headquarters
            </h5>
            <address className="flex flex-col gap-2 text-sm not-italic text-pearl-surface/70">
              <span>Orlando, Florida</span>
              <span>United States</span>
            </address>
          </div>
          <div>
            <h5 className="mb-6 text-[10px] font-semibold uppercase tracking-widest text-pearl-accent">
              Companies
            </h5>
            <ul className="flex flex-col gap-2 text-sm text-pearl-surface/70">
              {companies.map((co) => (
                <li key={co.name}>{co.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-20 flex max-w-7xl justify-between border-t border-pearl-surface/10 pt-8 text-[10px] uppercase tracking-widest text-pearl-surface/30">
          <span>&copy; {new Date().getFullYear()} Pearl Group Enterprises</span>
          <span>Privacy &amp; Terms</span>
        </div>
      </footer>
    </div>
  );
}
