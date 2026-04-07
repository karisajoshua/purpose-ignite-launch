

## Plan: Blog Pages, Enrollment Popups, Lead Capture & Admin Dashboard

### Overview

This is a large multi-feature build requiring Lovable Cloud (Supabase) for data persistence. It covers: detailed blog pages, enrollment forms with lead capture, contact page phone fix, gallery text fix, programme-triggered popups, and an admin dashboard.

### 1. Enable Lovable Cloud & Create Database Tables

**Tables:**
- `leads` — stores all lead submissions (name, email, phone, company, type: individual/company, source: enrollment/popup/contact, programme_slug, created_at)
- `user_roles` — admin role management (following security best practices)

**RLS policies:** Authenticated admins can read all leads; anonymous users can insert leads.

### 2. Create Blog Detail System

**New file: `src/data/blogs.ts`** — 6 detailed blog posts with slug, title, category, date, author, reading time, content (multi-paragraph), and excerpt.

Blog topics:
1. "Why Purpose-Driven Leadership Matters More Than Ever" (Leadership)
2. "The GRIT Framework: Building Resilience in Organizations" (Growth)
3. "5 Steps to Align Your Team Around a Shared Vision" (Strategy)
4. "The Power of Mentorship in Professional Development" (Mentorship)
5. "Transforming Organizational Culture From the Inside Out" (Culture)
6. "ILO SIYB: Empowering Africa's Next Generation of Entrepreneurs" (Entrepreneurship)

**New file: `src/pages/BlogDetailPage.tsx`** — Individual blog post page with full content, author info, related posts, and CTA to contact.

**Update: `src/components/BlogSection.tsx`** — Make cards clickable, link to `/blog/:slug`.

**Update: `src/pages/BlogPage.tsx`** — Show all 6 blog cards with links.

**Update: `src/App.tsx`** — Add `/blog/:slug` route.

### 3. Enrollment Popup on Programme Detail Pages

**New file: `src/components/EnrollmentDialog.tsx`** — Modal form triggered by "Enroll Now" button on `ProgrammeDetailPage.tsx`. Fields:
- Full Name, Email, Phone
- Type: Individual / Company (radio)
- Company Name (conditional, shown if Company selected)
- Number of Participants (conditional)
- Programme name (auto-filled, read-only)
- Submit button saves to `leads` table in Supabase

**Update: `src/pages/ProgrammeDetailPage.tsx`** — Replace the `Link to="/contact"` with a button that opens the enrollment dialog.

### 4. Lead Capture Popups (Trigger-Based)

**New file: `src/components/LeadCapturePopup.tsx`** — A non-intrusive popup that appears based on triggers:
- **Exit intent** (mouse moves to top of viewport on desktop)
- **Scroll depth** (user scrolls past 60% of page)
- **Time on page** (after 30 seconds)

Shows only once per session (tracked via sessionStorage). Offers a free resource or consultation in exchange for name + email. Saves to `leads` table with source = "popup".

**Update: `src/pages/Index.tsx`** — Add the popup component.

### 5. Contact Page Fix

**Update: `src/components/ContactSection.tsx`** — Change phone number from `+254 6 157 885` to `+254 756 157 885`. Update form to save submissions to `leads` table with source = "contact".

### 6. Gallery Page Fix

**Update: `src/pages/GalleryPage.tsx`** — Change "Business Forum" to "ILO/SIYB TRAINING" in the pixieset array.

### 7. Admin Dashboard

**New files:**
- `src/pages/AdminLoginPage.tsx` — Simple admin login page (email + password via Supabase Auth)
- `src/pages/AdminDashboardPage.tsx` — Protected dashboard showing:
  - Total leads count, leads by source, leads by programme
  - Filterable/searchable table of all leads
  - Export to CSV functionality
- `src/components/AdminRoute.tsx` — Protected route wrapper checking admin role

**Update: `src/App.tsx`** — Add `/admin` and `/admin/dashboard` routes.

### Files Summary

| File | Action |
|------|--------|
| Database tables (`leads`, `user_roles`) | Create via migration |
| `src/data/blogs.ts` | Create |
| `src/pages/BlogDetailPage.tsx` | Create |
| `src/components/BlogSection.tsx` | Update (clickable cards) |
| `src/pages/BlogPage.tsx` | Update (all 6 blogs) |
| `src/components/EnrollmentDialog.tsx` | Create |
| `src/pages/ProgrammeDetailPage.tsx` | Update (enrollment popup) |
| `src/components/LeadCapturePopup.tsx` | Create |
| `src/pages/Index.tsx` | Update (add popup) |
| `src/components/ContactSection.tsx` | Update (phone + save to DB) |
| `src/pages/GalleryPage.tsx` | Update (Business Forum → ILO/SIYB TRAINING) |
| `src/pages/AdminLoginPage.tsx` | Create |
| `src/pages/AdminDashboardPage.tsx` | Create |
| `src/components/AdminRoute.tsx` | Create |
| `src/App.tsx` | Update (new routes) |

