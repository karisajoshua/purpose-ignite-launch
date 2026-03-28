

## Plan: Multi-feature Update for Limitless Website

### Changes Overview

**1. Replace About Section Image on Homepage**
- Copy `user-uploads://home_page_about.jpeg` to `src/assets/about-home.jpg`
- Update `Index.tsx` line 35 to import and use this new image instead of `gallery4`

**2. Replace Grace Kasamba's Team Photo**
- Copy `user-uploads://Screen_Shot_2026-03-28_at_12.00.22.png` to `src/assets/team/grace-kasamba.jpg` (overwrite)
- No code change needed since it's already imported by that filename

**3. Make Programme Cards Clickable (Individual Programme Pages)**
- Add routes like `/programmes/:slug` in `App.tsx`
- Create a `ProgrammeDetailPage.tsx` that receives the slug, looks up the programme data from a shared data file, and renders the full details (overview, modules, enroll CTA)
- Extract the programme clusters data from `CoursesSection.tsx` into a shared `src/data/programmes.ts` file
- Update the homepage programme section (Index.tsx lines 91-97) to show clickable cards that link to individual programme detail pages
- Update `CoursesSection.tsx` (Programmes page) to also link cards to detail pages

**4. Fix Gallery Portrait Images**
- In `GalleryPage.tsx`, change from fixed `aspect-[4/3]` to a more flexible layout
- Use `object-cover object-top` (to avoid cutting heads) and allow portrait images to display naturally using a masonry-like approach or `object-position: top`

**5. Add Social Media Links to Footer**
- Add LinkedIn, Facebook icons (from lucide-react) to Footer.tsx
- LinkedIn: `https://www.linkedin.com/company/limitless-consultants/`
- Facebook: `https://www.facebook.com/share/p/1KvCWQYHJj/`

**6. Revamp Services Content**
- **Homepage services section** (`Index.tsx`): Add taglines under each service card title
- **Services page** (`ServicesSection.tsx`): Replace with premium detailed version including full descriptions per service, "The Limitless Difference" section, and "Partner With Us" CTA

### Files to Create/Modify

| File | Action |
|------|--------|
| `src/assets/about-home.jpg` | Create (copy upload) |
| `src/assets/team/grace-kasamba.jpg` | Overwrite (copy upload) |
| `src/data/programmes.ts` | Create (shared programme data) |
| `src/pages/ProgrammeDetailPage.tsx` | Create (individual programme page) |
| `src/App.tsx` | Add `/programmes/:slug` route |
| `src/pages/Index.tsx` | Update about image, services taglines, programme cards as links |
| `src/components/CoursesSection.tsx` | Import data from shared file, make cards linkable |
| `src/pages/GalleryPage.tsx` | Fix portrait image cropping with `object-top` |
| `src/components/ServicesSection.tsx` | Full rewrite with premium content |
| `src/components/Footer.tsx` | Add social media links |

