import { useState } from "react";
import { toast } from "sonner";

const businessTypes = [
  "Independent game store",
  "Buy-back store",
  "Corporate surplus",
  "Big-box surplus",
  "Returns liquidation",
  "Other",
];

export function LeadForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // TODO: wire to Lovable Cloud table `leads` for persistence + email alerts.
    console.log("Lead submitted:", data);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Thanks — we'll be in touch within 24 hours with an offer.");
    (e.target as HTMLFormElement).reset();
    setSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[0_1px_0_rgba(0,0,0,0.04),0_20px_60px_-30px_rgba(0,0,0,0.25)]"
    >
      <div className="grid gap-2 sm:grid-cols-2">
        <Field name="company" label="Company" required placeholder="Acme Games" />
        <Field name="contact" label="Your name" required placeholder="Jane Doe" />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <Field name="email" type="email" label="Email" required placeholder="jane@acme.com" />
        <Field name="phone" label="Phone" placeholder="(555) 123-4567" />
      </div>

      <label className="grid gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Business type
        </span>
        <select
          name="businessType"
          required
          defaultValue=""
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-foreground"
        >
          <option value="" disabled>Select one…</option>
          {businessTypes.map((b) => <option key={b}>{b}</option>)}
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Estimated quantity
        </span>
        <select
          name="quantity"
          required
          defaultValue=""
          className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-foreground"
        >
          <option value="" disabled>Roughly how many units?</option>
          <option>50 – 250</option>
          <option>250 – 1,000</option>
          <option>1,000 – 5,000</option>
          <option>5,000+</option>
        </select>
      </label>

      <label className="grid gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What do you have? (optional)
        </span>
        <textarea
          name="details"
          rows={3}
          placeholder="e.g. ~400 mixed PS4 / Xbox One, untested returns, palletized"
          className="rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground resize-none"
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get my offer →"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        No obligation. Offers within 24 hours. We pay shipping on approved lots.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-foreground"
      />
    </label>
  );
}
