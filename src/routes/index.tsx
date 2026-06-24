import { ShieldCheck, Truck, Lock, FileCheck, Building2, BadgeCheck } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

function Trust() {
  const pillars = [
    {
      Icon: Lock,
      t: "Secure commercial payments",
      d: "ACH, wire, and verified business check. Bank-grade processing through FDIC-insured partners — no crypto, no escrow gimmicks.",
    },
    {
      Icon: Truck,
      t: "100% freight coverage, 48 states",
      d: "Fully insured LTL and FTL pickups through SmartWay-certified carriers. Prepaid BOLs and cargo coverage up to $100k per shipment.",
    },
    {
      Icon: ShieldCheck,
      t: "R2v3-aligned downstream processing",
      d: "All recovered material is processed through R2v3-aligned recyclers. Certificate of Data Destruction available on request for HDD/SSD media.",
    },
  ];
  const badges = [
    { Icon: BadgeCheck, label: "EPA SmartWay" },
    { Icon: FileCheck, label: "R2v3 Aligned" },
    { Icon: Building2, label: "D-U-N-S Registered" },
    { Icon: Lock, label: "SSL Secured Manifests" },
  ];
  return (
    <section id="trust" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Trust &amp; compliance</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            A vetted buyer your finance team will sign off on.
          </h2>
          <p className="mt-4 text-muted-foreground">
            We've built our gaming asset recovery operation around the
            paperwork, insurance, and security controls that B2B sellers
            actually need before a pallet leaves the dock.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.t} className="bg-background p-8">
              <p.Icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-5 font-display text-xl">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-md border border-border bg-surface px-4 py-3"
            >
              <b.Icon className="h-5 w-5 text-primary" strokeWidth={1.5} aria-hidden />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { LeadForm } from "@/components/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import lot1 from "@/assets/IMG_2354.png.asset.json";
import lot2 from "@/assets/IMG_2355.webp.asset.json";
import lot3 from "@/assets/IMG_2356.jpeg.asset.json";
import lot4 from "@/assets/IMG_2357.jpeg.asset.json";
import lot5 from "@/assets/IMG_2358.jpeg.asset.json";
import lot6 from "@/assets/IMG_2359.jpeg.asset.json";
import heroPallet from "@/assets/hero-pallet.jpg.asset.json";
import flatlay from "@/assets/graphic-flatlay.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => {
    const url = "https://console-catch-co.lovable.app/";
    const title = "Bulk Broken Console Buyer | Nationwide Gaming Asset Recovery";
    const description =
      "We buy broken, untested, and salvage video game consoles in bulk. Hassle-free nationwide freight pickup for independent stores, repair shops, and liquidation centers.";
    const image = "https://console-catch-co.lovable.app/og-image.jpg";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:site_name", content: "sellbrokenconsoles.com" },
        { property: "og:image", content: image },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
        { name: "robots", content: "index, follow" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <Nav />
      <Hero />
      <Buyers />
      <How />
      <FlatlayBanner />
      <Accepted />
      <WhyChooseUs />
      <LotPhotos />
      <Trust />
      <Quote />
      <FAQ />
      <Footer />
    </div>
  );
}

function FlatlayBanner() {
  return (
    <section className="border-b border-border">
      <div className="relative h-64 w-full overflow-hidden sm:h-80 lg:h-96">
        <img
          src={flatlay.url}
          alt="Salvage console pallets flat-lay of bulk broken video games boards, shells, and controllers"
          width={1600}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Every unit, every part</p>
            <p className="mt-3 max-w-md font-display text-3xl sm:text-4xl">
              Boards, shells, controllers — <em className="text-muted-foreground">we want it all.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function LotPhotos() {
  const photos = [
    { src: lot1.url, caption: "Pallet · 200+ mixed PS4 units", alt: "Salvage console pallets of 200+ mixed PS4 units ready for gaming asset recovery" },
    { src: lot5.url, caption: "Sorted bulk · returns lot", alt: "Sorted bulk broken video games from a USA video game liquidation returns lot" },
    { src: lot2.url, caption: "Untested PS4 Pro stack", alt: "Untested PS4 Pro stack — bulk broken video games inventory" },
    { src: lot6.url, caption: "Mixed condition · boxed + loose", alt: "Mixed condition salvage console pallets, boxed and loose units" },
    { src: lot4.url, caption: "Customer return lot", alt: "Customer return lot of bulk broken video games consoles" },
    { src: lot3.url, caption: "Independent store buyout", alt: "Independent game store buyout — salvage console pallets" },
  ];
  return (
    <section id="lots" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Recent lots</p>
          <p className="mt-3 font-display text-4xl sm:text-5xl">
            Real pallets we've purchased.
          </p>
          <p className="mt-4 text-muted-foreground">
            A snapshot of recent buys — from single-store buyouts to full
            liquidation pallets across our USA video game liquidation network.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-10 text-xs text-white">
                <span className="font-mono opacity-80">LOT · {String(i + 1).padStart(2, "0")}</span>
                <span>{p.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-baseline gap-2 font-display text-xl">
          <span className="inline-block h-2 w-2 translate-y-[-2px] rounded-full bg-primary" />
          <span>sellbrokenconsoles<span className="font-semibold italic text-primary">.com</span></span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#how" className="hover:text-foreground">Process</a>
          <a href="#accepted" className="hover:text-foreground">What we buy</a>
          <a href="#lots" className="hover:text-foreground">Recent lots</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#quote"
          className="inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const features = [
    { Icon: Building2, t: "Buying", s: "In bulk" },
    { Icon: Truck, t: "Nationwide", s: "Pickup" },
    { Icon: BadgeCheck, t: "Fast quotes", s: "Fair prices" },
  ];
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0">
        <img
          src={heroPallet.url}
          alt="Warehouse pallet of bulk broken video games and salvage console pallets ready for nationwide freight pickup"
          className="h-full w-full object-cover object-right opacity-40 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/10 lg:via-background/85 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl px-6 py-20 sm:py-28 lg:min-h-[680px] lg:grid-cols-[1.1fr_1fr] lg:py-32">
        <div className="flex max-w-2xl flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            48 states · freight covered
          </span>

          <h1 className="mt-7 font-stencil text-[3.25rem] leading-[0.92] sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem]">
            <span className="block">Nationwide</span>
            <span className="block text-primary">Bulk Broken</span>
            <span className="block">Console Buyer</span>
          </h1>

          <div className="mt-6 h-[3px] w-20 bg-primary" />

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We purchase broken, untested, customer-return and end-of-life
            consoles by the pallet — and we pay for and manage 100% of the
            freight logistics directly from your loading dock.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#quote"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
            >
              Get my offer →
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-background/60 px-6 text-sm font-medium backdrop-blur hover:bg-surface"
            >
              How it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            {features.map(({ Icon, t, s }) => (
              <div key={t} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="text-xs font-semibold uppercase leading-tight tracking-wider">
                  <div>{t}</div>
                  <div className="text-primary">{s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-md border border-border bg-surface/80 px-4 py-3 backdrop-blur">
            <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-[0.16em]">
              Trusted by resellers. <span className="text-primary">Focused on value.</span>
            </p>
          </div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  );
}


function Buyers() {
  const audiences = [
    { name: "Independent Game Stores", italic: false },
    { name: "Liquidation Centers", italic: true },
    { name: "Repair Shops", italic: false },
    { name: "Big Box Surplus", italic: true },
    { name: "Returns Liquidation", italic: false },
    { name: "Pawn Shops", italic: true },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="font-display text-3xl sm:text-4xl">Who We Buy From</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Our USA video game liquidation network buys recurring pallet volume
          from these six core sources. If your business sits dead inventory,
          we're built to clear it.
        </p>
        <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.name} className="bg-background p-6">
              <h3 className={`font-display text-xl ${a.italic ? "italic text-muted-foreground" : ""}`}>
                {a.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { n: "01", t: "Send your manifest", d: "Quantity, condition, and console types. A rough estimate or spreadsheet is fine." },
    { n: "02", t: "Get a cash offer in 24h", d: "Our gaming asset recovery team sends a transparent per-unit or per-pallet quote." },
    { n: "03", t: "We schedule 48 states freight pickup", d: "On approved lots we cover 100% of shipping — prepaid BOL or carrier pickup at your dock." },
    { n: "04", t: "Get paid", d: "Wire or ACH on receipt and count. Net 7 for repeat partners." },
  ];
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Our Nationwide Freight Pickup Process
          </h2>
          <p className="mt-4 text-muted-foreground">
            From dead stock to deposit in a week — we handle the trucks, the
            paperwork, and the payout.
          </p>
        </div>
        <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8">
              <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              <p className="mt-6 font-display text-2xl">{s.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Accepted() {
  const generations = [
    "PlayStation 3, 4, 5",
    "Xbox 360, One, Series S/X",
    "Nintendo Switch (all revisions)",
    "Wii / Wii U",
    "Handhelds — 3DS, PSP, Vita",
    "Controllers & accessories",
    "Untested returns",
    "Water damaged / no-power",
    "Disc drive failures",
  ];
  return (
    <section id="accepted" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What we buy</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            Supported Console Generations
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Any condition, any quantity from 50 units up. Mixed pallets and
            unsorted return shipments welcome — if it powers on, or doesn't,
            we want it.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {generations.map((item) => (
            <li key={item} className="flex items-center gap-3 bg-background px-5 py-4 text-sm">
              <span className="font-mono text-xs text-muted-foreground">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const points = [
    {
      t: "Fast payouts",
      d: "Wire or ACH on receipt and count — usually within 2 business days. Net 7 terms for recurring partners.",
    },
    {
      t: "Zero hidden shipping fees",
      d: "We pay for and manage 100% of the freight logistics — prepaid BOLs, carrier scheduling, and dock pickup are all on us.",
    },
    {
      t: "Large pallet capacity",
      d: "From a single 50-unit pallet to full 53' truckloads. Our gaming asset recovery operation can absorb any backlog you've got.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Why choose us</p>
          <p className="mt-3 font-display text-4xl sm:text-5xl">
            Built for high-volume sellers.
          </p>
        </div>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.t} className="bg-background p-8">
              <p className="font-display text-2xl">{p.t}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get an offer</p>
          <p className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Submit Your Inventory Manifest for a Bulk Quote
          </p>
          <p className="mt-6 max-w-md text-muted-foreground">
            Fill out the form below or upload your spreadsheet. Our asset
            recovery team will provide a guaranteed freight offer within 24
            hours.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <Detail k="Email" v="buyers@sellbrokenconsoles.com" />
            <Detail k="Hours" v="Mon–Fri · 9a–6p ET" />
            <Detail k="Minimum lot" v="50 units" />
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-border pt-4">
      <span className="w-24 text-xs uppercase tracking-wider text-muted-foreground">{k}</span>
      <span className="font-mono">{v}</span>
    </div>
  );
}

function FAQ() {
  const qa = [
    {
      q: "What types of broken video game consoles do you buy in bulk?",
      a: "We buy all major console generations in bulk, including modern systems like Sony PlayStation 5, Xbox Series X/S, and Nintendo Switch. We also accept older retro systems from Nintendo, Sega, and early PlayStation or Xbox models. We purchase broken, untested, salvage, and parts-only inventory.",
    },
    {
      q: "How does the nationwide freight pickup process work?",
      a: "It is completely hassle-free. Once you submit your inventory manifest form, our asset recovery team will send you a guaranteed bulk buyout offer. If you accept, we arrange, schedule, and pay for 100% of the freight pickup directly from your loading dock or storefront anywhere in the USA.",
    },
    {
      q: "Do you require a minimum unit count or pallet size to buy?",
      a: "Yes, because we cover the full cost of nationwide freight shipping, we specialize in bulk quantities. Our minimum lot size is 50 units. We typically look for large lots, multiple pallets, or warehouse surplus. Please submit your manifest details through our online form to see if your inventory qualifies for free freight pickup.",
    },
    {
      q: "How and when do I get paid for my bulk console inventory?",
      a: "We believe in fast, secure payouts. Once our logistics team coordinates the freight pickup and verifies the manifest contents at our processing facility, we issue your payment immediately via your preferred secure commercial payment method like Wire or ACH.",
    },
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
          Frequently Asked Questions About Bulk Buying &amp; Freight
        </h2>
        <Accordion type="single" collapsible className="mt-10 border-t border-border">
          {qa.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <h3 className="font-display text-lg sm:text-xl m-0">{item.q}</h3>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <p className="text-base leading-relaxed text-muted-foreground">{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-2 font-display text-lg">
          <span className="inline-block h-2 w-2 translate-y-[-2px] rounded-full bg-primary" />
          <span>sellbrokenconsoles<span className="font-semibold italic text-primary">.com</span></span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sell Broken Consoles. Nationwide gaming asset recovery.
        </p>
      </div>
    </footer>
  );
}
