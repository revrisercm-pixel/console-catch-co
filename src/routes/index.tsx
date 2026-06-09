import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/LeadForm";
import { Toaster } from "@/components/ui/sonner";
import lot1 from "@/assets/IMG_2354.png.asset.json";
import lot2 from "@/assets/IMG_2355.webp.asset.json";
import lot3 from "@/assets/IMG_2356.jpeg.asset.json";
import lot4 from "@/assets/IMG_2357.jpeg.asset.json";
import lot5 from "@/assets/IMG_2358.jpeg.asset.json";
import lot6 from "@/assets/IMG_2359.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sell Broken Consoles — Bulk Cash Offers in 24 Hours" },
      {
        name: "description",
        content:
          "We buy broken, untested, and returned video game consoles in bulk from retailers, liquidators, and surplus channels. Get a fast cash offer.",
      },
      { property: "og:title", content: "Sell Broken Consoles — Bulk Cash Offers" },
      {
        property: "og:description",
        content:
          "Bulk buyer of broken video game consoles. Independent stores, buy-back, corporate surplus, big-box surplus, returns liquidation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
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
      <Accepted />
      <LotPhotos />
      <Quote />
      <FAQ />
      <Footer />
    </div>
  );
}

function LotPhotos() {
  const photos = [
    { src: lot1.url, caption: "Pallet · 200+ mixed PS4 units" },
    { src: lot5.url, caption: "Sorted bulk · returns lot" },
    { src: lot2.url, caption: "Untested PS4 Pro stack" },
    { src: lot6.url, caption: "Mixed condition · boxed + loose" },
    { src: lot4.url, caption: "Customer return lot" },
    { src: lot3.url, caption: "Independent store buyout" },
  ];
  return (
    <section id="lots" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Recent lots</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Real pallets we've purchased.
            </h2>
            <p className="mt-4 text-muted-foreground">
              A snapshot of recent buys — from single-store buyouts to full
              liquidation pallets.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {photos.map((p, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface"
            >
              <img
                src={p.src}
                alt={p.caption}
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
        <a href="/" className="flex items-center gap-2 font-display text-xl">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          sellbrokenconsoles
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#accepted" className="hover:text-foreground">What we buy</a>
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
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Now buying nationwide · pallets &amp; truckloads
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            We buy your broken consoles.{" "}
            <em className="text-muted-foreground">In bulk. For cash.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Turn dead inventory into revenue. We purchase broken, untested,
            customer-return and end-of-life consoles by the pallet from stores,
            liquidators, and surplus channels.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Get my offer →
            </a>
            <a
              href="#how"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border px-6 text-sm font-medium hover:bg-surface"
            >
              How it works
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              ["24h", "Offer turnaround"],
              ["Free", "Freight on approval"],
              ["Net 7", "Payment terms"],
            ].map(([k, v]) => (
              <div key={v} className="border-l border-border pl-4">
                <dt className="font-display text-3xl">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-surface to-transparent" />
          <ConsoleArt />
        </div>
      </div>
    </section>
  );
}

function ConsoleArt() {
  return (
    <div className="relative aspect-square w-full max-w-md">
      <div className="absolute inset-6 rounded-3xl border border-border bg-card shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)]" />
      <div className="absolute inset-12 grid grid-cols-3 grid-rows-3 gap-3 p-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md border border-border bg-surface"
            style={{ opacity: 0.4 + (i % 4) * 0.15 }}
          />
        ))}
      </div>
      <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-xs">
        <span className="font-mono text-muted-foreground">LOT #4821</span>
        <span className="font-mono">412 units · mixed</span>
      </div>
    </div>
  );
}

function Buyers() {
  const audiences = [
    "Independent game stores",
    "Buy-back stores",
    "Corporate surplus",
    "Big-box surplus",
    "Returns liquidation",
    "Repair shops",
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Built for
        </p>
        <div className="mt-4 flex flex-wrap gap-x-10 gap-y-3 font-display text-2xl sm:text-3xl">
          {audiences.map((a, i) => (
            <span key={a} className={i % 2 ? "italic text-muted-foreground" : ""}>
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  const steps = [
    { n: "01", t: "Tell us what you have", d: "Quantity, condition, and console types. A rough estimate is fine." },
    { n: "02", t: "Get a cash offer in 24h", d: "We send a transparent per-unit or per-pallet quote." },
    { n: "03", t: "We pay freight & pickup", d: "On approved lots we cover shipping or arrange pickup." },
    { n: "04", t: "Get paid", d: "Wire or ACH on receipt and count. Net 7 for repeat partners." },
  ];
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">
            From dead stock to deposit in a week.
          </h2>
        </div>
        <ol className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-8">
              <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Accepted() {
  const yes = [
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
            If it powers on — or doesn't — we want it.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Any condition, any quantity from 50 units up. Mixed pallets and
            unsorted return shipments welcome.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
          {yes.map((item) => (
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

function Quote() {
  return (
    <section id="quote" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Get an offer</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl leading-tight">
            Tell us what's on the pallet.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            One form, 24-hour response. No haggling — we send our per-unit
            numbers up front. If you've got recurring volume, ask about a
            standing buy program.
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
      q: "Do you really buy non-working consoles?",
      a: "Yes — that's our specialty. We refurbish, harvest parts, and recycle responsibly. Untested and no-power lots are welcome.",
    },
    {
      q: "What's the minimum quantity?",
      a: "50 units. Most of our partners send pallets of 200–1,500. Truckloads are no problem.",
    },
    {
      q: "Who pays for shipping?",
      a: "We do, on approved lots. We'll send a prepaid BOL or schedule a pickup with our freight partner.",
    },
    {
      q: "How fast do you pay?",
      a: "Wire or ACH on receipt and count — usually within 2 business days. Net 7 available for recurring partners.",
    },
    {
      q: "Do you sign NDAs and serial-number agreements?",
      a: "Yes. We work with returns processors and big-box surplus regularly and follow chain-of-custody requirements.",
    },
  ];
  return (
    <section id="faq" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">Common questions.</h2>
        <dl className="mt-12 divide-y divide-border border-t border-border">
          {qa.map((item) => (
            <div key={item.q} className="grid gap-2 py-6 sm:grid-cols-[1fr_2fr] sm:gap-8">
              <dt className="font-display text-xl">{item.q}</dt>
              <dd className="text-muted-foreground leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 font-display text-lg">
          <span className="inline-block h-2 w-2 rounded-full bg-foreground" />
          sellbrokenconsoles.com
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sell Broken Consoles. Buying nationwide.
        </p>
      </div>
    </footer>
  );
}
