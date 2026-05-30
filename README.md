# ZyphorWeb Portfolio + Agency Website

Premium responsive website for ZyphorWeb built with Next.js, Tailwind CSS, and Framer Motion.

## Edit Content

- Projects: `data/projects.ts`
- Pricing and features: `data/pricing.ts`
- Testimonials: `data/testimonials.ts`
- Navigation: `data/nav.ts`
- Logo asset: `assets/zyphorweb-logo.png`

## Formspree

Add your real Formspree endpoint as:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-real-id
```

Without a real endpoint, the form shows the success animation in demo mode.

## Run

```bash
npm install --cache ./.npm-cache --no-audit --no-fund
npm run build
npm run preview
```

Then open `http://127.0.0.1:3000`.
