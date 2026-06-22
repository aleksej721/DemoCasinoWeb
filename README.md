# Aurelion Play Astro Demo

Small Astro demo for a casino/affiliate-style landing page workflow.

The point is not to clone a real brand. The project shows a reusable production pattern:

- one config file for brand, geo, SEO, CTA links and bonuses;
- data-driven slot cards, provider cards and FAQ;
- Astro components for reusable page sections;
- responsive layout with mobile-first CSS;
- static policy/contact pages;
- demo `/go/...` redirect layer with geo-style offer mapping;
- build-ready output through Astro.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Fast Site Rebrand Checklist

1. Update `src/data/site.ts`.
2. Update `src/data/slots.ts`.
3. Update `src/data/providers.ts`.
4. Update `src/data/faq.ts`.
5. Replace assets in `public/images`.
6. Update `src/data/geoRedirects.ts` if offer destinations change.
7. Run `npm run dev` and check desktop/mobile.
8. Run `npm run build`.

## Important Checks

- CTA links point to the correct `/go/...` route.
- No old brand name remains in text, meta tags or alt text.
- Mobile CTA buttons are visible without hover.
- Images are compressed and not broken.
- FAQ schema still matches visible FAQ content.
- `/go/register`, `/go/login`, `/go/app` and `/go/bonus` select the expected offer.

## Geo Redirect Note

This demo uses browser language as a safe portfolio approximation. Real affiliate
traffic usually uses server-side IP geolocation, tracker rules or Cloudflare/edge
logic, because browser language is not reliable enough for production routing.
