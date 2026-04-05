## Plan: Scroll-to-Top, Back-to-Top Button, and Gallery Pixieset Embeds

### 1. Scroll to Top on Page Navigation

Create a `ScrollToTop` component that listens to route changes via `useLocation` and calls `window.scrollTo(0, 0)` on every pathname change. Place it inside `BrowserRouter` in `App.tsx`.

**File:** `src/components/ScrollToTop.tsx` (new)
**File:** `src/App.tsx` (add `<ScrollToTop />` inside `<BrowserRouter>`)

### 2. Floating Back-to-Top Button

Create a `BackToTop` component — a fixed button (bottom-right) that appears after scrolling 400px. On click, smoothly scrolls to top. Styled with the gold accent, arrow-up icon from lucide-react.

**File:** `src/components/BackToTop.tsx` (new)
**File:** `src/App.tsx` (add `<BackToTop />` inside `<BrowserRouter>`, so it appears on all pages)

### 3. Revamp Gallery Page with Pixieset Embeds

Dont replace the existing photos just add these  three styled cards below the existing photos or on the side just make it creative— one per Pixieset gallery link:


| Card Title              | URL                                                         |
| ----------------------- | ----------------------------------------------------------- |
| Limitless Consultations | `https://ketchup.pixieset.com/limitlessconsultations/`      |
| Business Forum          | `https://articulatemedia.pixieset.com/businessforum/`       |
| Limitless Graduation    | `https://articulatemedia.pixieset.com/limitlessgraduation/` |


Each card will be a clickable tile. On click, a dialog/modal opens with an `<iframe>` embedding the Pixieset gallery URL at full width/height. The modal uses the existing `Dialog` component from shadcn/ui. Remove all `gallery-*.jpg` imports from `GalleryPage.tsx`.

**File:** `src/pages/GalleryPage.tsx` (full rewrite)

### Files Summary


| File                             | Action                                     |
| -------------------------------- | ------------------------------------------ |
| `src/components/ScrollToTop.tsx` | Create                                     |
| `src/components/BackToTop.tsx`   | Create                                     |
| `src/App.tsx`                    | Add ScrollToTop + BackToTop                |
| `src/pages/GalleryPage.tsx`      | Rewrite with Pixieset embed cards + dialog |
