# J-APEX Academy

Nigeria's online after-school exam prep platform helping SS1 to SS3 students excel in WAEC, NECO, JAMB and Post-UTME.

## Tech

- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- lucide-react icons

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Deploys to Vercel. Live site: **https://j-apex-academy.vercel.app**

```bash
vercel --prod
```

> Auto-deploy from GitHub is not connected (Hobby plan + org-owned private repo). Push to `main` and run the command above to release.

## Structure

- `src/app` — routes: `/`, `/tutors`, `/schools`, `/contact`
- `src/components` — `navbar`, `footer`, `social-float`, `enroll-form`, `banner`, `section-heading`, `reveal`
- `src/components/sections` — `hero`, `programs`, `scholarboard`, `schools-cta`, `final-cta`, `testimonials`, `tutors-preview`, `hero-slider`

## Notes

- **Social links are placeholders** in `src/components/social-float.tsx` (`SOCIAL` constant) — replace with the real WhatsApp / Facebook / Instagram handles.
- Brand is **J-APEX**; the exam name **Post-UTME** keeps its hyphen (proper noun). Grade ranges are written `SS1 to SS3`.
- Logo and all UI are mobile-first responsive.
