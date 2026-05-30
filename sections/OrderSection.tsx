"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, IndianRupee, Send } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { templateStyles, websiteFeatures } from "@/data/pricing";
import { calculateEstimate, formatInr } from "@/utils/pricing";

const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/mbdbbqzz";

export function OrderSection() {
  const [templateStyle, setTemplateStyle] = useState(templateStyles[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["landing-page", "seo-optimization"]);
  const [pages, setPages] = useState(5);
  const [budget, setBudget] = useState(5000);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const estimate = useMemo(() => calculateEstimate(selectedFeatures, pages), [selectedFeatures, pages]);

  const toggleFeature = (value: string) => {
    setSelectedFeatures((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value]
    );
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const payload = new FormData(form);
    payload.set("Template Style", templateStyle);
    payload.set("Features Needed", selectedFeatures.join(", "));
    payload.set("Pages", String(pages));
    payload.set("Budget", formatInr(budget));
    payload.set("Estimated Cost", formatInr(estimate.total));

    if (!formspreeEndpoint.includes("your-form-id")) {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: payload
      });

      if (!response.ok) {
        setSubmitting(false);
        return;
      }
    } else {
      await new Promise((resolve) => window.setTimeout(resolve, 650));
    }

    setSuccess(true);
    setSubmitting(false);
    form.reset();
  }

  return (
    <section id="order" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(125,201,239,0.16),transparent_30%),linear-gradient(180deg,rgba(3,22,46,0.2),rgba(2,10,22,0.8))]" aria-hidden="true" />
      <div className="section-shell relative">
        {/* Template and order section */}
        <SectionHeader
          eyebrow="Template / Order"
          title="Choose your website style and see the estimate instantly."
          description="Pick a template direction, select features, adjust pages and budget, then submit a premium Formspree-ready website request."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <form onSubmit={handleSubmit} className="glass rounded-[32px] p-5 sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/72">
                Name
                <input name="Name" required className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-mist/70" />
              </label>
              <label className="grid gap-2 text-sm text-white/72">
                Email
                <input name="Email" type="email" required className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-mist/70" />
              </label>
              <label className="grid gap-2 text-sm text-white/72">
                WhatsApp Number
                <input name="WhatsApp Number" required className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-mist/70" />
              </label>
              <label className="grid gap-2 text-sm text-white/72">
                Business Type
                <input name="Business Type" required className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-mist/70" />
              </label>
            </div>

            <div className="mt-6 grid gap-2 text-sm text-white/72">
              Template Style
              <select
                name="Template Style"
                value={templateStyle}
                onChange={(event) => setTemplateStyle(event.target.value)}
                className="rounded-2xl border border-white/12 bg-navy px-4 py-3 text-white outline-none transition focus:border-mist/70"
              >
                {templateStyles.map((style) => (
                  <option key={style}>{style}</option>
                ))}
              </select>
            </div>

            {templateStyle === "Other Custom Design" ? (
              <motion.label
                className="mt-6 grid gap-2 text-sm text-white/72"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
              >
                Describe your website idea
                <textarea
                  name="Website Description"
                  rows={4}
                  className="resize-none rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-white outline-none transition focus:border-mist/70"
                />
              </motion.label>
            ) : (
              <input type="hidden" name="Website Description" value={`${templateStyle} website request`} />
            )}

            <div className="mt-8">
              <p className="text-sm font-semibold text-white">Website Features</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {websiteFeatures.map((feature) => (
                  <label
                    key={feature.value}
                    className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/7 px-4 py-3 text-sm text-white/74 transition hover:border-mist/45 hover:bg-white/10"
                  >
                    <span>{feature.label}</span>
                    <input
                      type="checkbox"
                      checked={selectedFeatures.includes(feature.value)}
                      onChange={() => toggleFeature(feature.value)}
                      className="h-4 w-4 accent-mist"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <label className="grid gap-3 text-sm text-white/72">
                Pages: <span className="font-semibold text-white">{pages}</span>
                <input type="range" min="1" max="20" value={pages} onChange={(event) => setPages(Number(event.target.value))} className="accent-mist" />
              </label>
              <label className="grid gap-3 text-sm text-white/72">
                Your Budget: <span className="font-semibold text-white">{formatInr(budget)}</span>
                <input type="range" min="1000" max="25000" step="500" value={budget} onChange={(event) => setBudget(Number(event.target.value))} className="accent-mist" />
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-mist disabled:cursor-wait disabled:opacity-70 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              {submitting ? "Submitting Request" : "Submit Website Request"}
            </button>
          </form>

          <aside className="glass sticky top-28 h-fit rounded-[32px] p-6">
            {/* Live estimated cost card */}
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-navy">
                <IndianRupee className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-white/58">Live Estimate</p>
                <p className="text-3xl font-semibold text-white">{formatInr(estimate.total)}</p>
              </div>
            </div>

            <div className="mt-7 space-y-3 text-sm text-white/70">
              <div className="flex justify-between gap-4"><span>Base Price</span><span>{formatInr(estimate.base)}</span></div>
              <div className="flex justify-between gap-4"><span>Selected Features</span><span>{formatInr(estimate.featureCost)}</span></div>
              <div className="flex justify-between gap-4"><span>Pages Add-on</span><span>{formatInr(estimate.pageCost)}</span></div>
              <div className="animated-divider my-5" />
              <div className="flex justify-between gap-4 text-base font-semibold text-white"><span>Your Budget</span><span>{formatInr(budget)}</span></div>
            </div>

            {success ? (
              <motion.div
                className="mt-7 rounded-3xl border border-emerald-200/25 bg-emerald-300/10 p-5 text-emerald-100"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle2 className="h-7 w-7" />
                <p className="mt-3 font-semibold">Your request has been submitted successfully.</p>
              </motion.div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}
