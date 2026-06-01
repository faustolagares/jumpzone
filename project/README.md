# Jump Zone Studio — Design System

A brand & UI design system for **Jump Zone Studio**, a high-energy trampoline
fitness concept in **Newark, NJ**. The studio positions itself as a "concert-style
fitness temple" — dark, immersive, music-driven rebound workouts on individual
trampolines, scored to choreographed EDM/House/Pop at 135–155 BPM.

This system captures the brand's neon-on-black aesthetic, its signature
chamfered ("cut-corner") component shapes, condensed italic display type, and the
full UI kit so designers and agents can produce on-brand work.

---

## Sources

This system was reverse-engineered from the production codebase, designed & built
by [NexLink](https://www.nexlink.ai):

- **GitHub:** [`faustolagares/jumpzonestudio`](https://github.com/faustolagares/jumpzonestudio)
  — React 19 + TypeScript + Vite + Tailwind v4 marketing site. The design tokens
  live in `src/index.css` (`@theme` block); the button system in
  `src/components/Buttons.tsx`; copy in `src/translations.ts`.
- Related brand owner repos worth exploring for deeper context:
  [`faustolagares/jumpzone`](https://github.com/faustolagares/jumpzone).

> Readers with repo access should browse `faustolagares/jumpzonestudio` directly
> to extract additional components or verify exact values when building new work.

**Stack of the source product:** React 19, TypeScript, Vite, Astro (SSG),
Tailwind CSS v4, React Router 7, Motion (Framer), `lucide-react` icons, Vercel.

**Products / surfaces represented:**
1. **Marketing website** (`/`, plus localized `/en`, `/pt`, `/es`) — hero,
   classes, BPM simulator, memberships/pricing, studio overview, FAQ, checkout
   modal with trampoline-map seat selection, footer.
2. **Bio link page** (`/bio`) — mobile-first (430px) Linktree-style page for
   social traffic, with cover image, logo, social icons, and stacked link buttons.

The product is **trilingual** (English, Portuguese, Spanish) — copy examples
below show the English voice.

---

## CONTENT FUNDAMENTALS

The voice is **hype, athletic, and motivational** — a boutique fitness studio that
talks like a concert promoter, not a gym.

- **Casing:** Headlines and button labels are **ALL-CAPS**. Display headlines are
  italic and skewed for forward motion. Mono eyebrows are uppercase with wide
  tracking and a `///` slash prefix (`/// MEMBERSHIPS`).
- **Voice & person:** Speaks to **"you"** and rallies around **"we"** and the
  community ("You belong here", "We don't just jump — we level up"). Imperative,
  command-style verbs dominate: *Book, Jump, Move, Connect, Level up, Burn, Commit.*
- **Tone:** Short, punchy, declarative fragments. Period-separated staccato:
  *"Real results. Strong community. Unforgettable experience."* Confidence over
  cleverness. Energy words: **high-energy, unstoppable, explosive, adrenaline,
  rebound, concert, zone.**
- **Numbers as proof:** Specific, credible stats used as hooks — *"135–155 BPM,"
  "80% less joint impact," "8 classes / month."* Numbers are a core part of the
  visual rhythm.
- **Brand nouns:** The studio is "the Zone" / a "concert facility" / "boutique
  concert-style fitness temple." Trampolines are "your dancefloor." Classes have
  branded names: *Freestyle Zone Session, Concert Rave Core, Jump & Tone Beat,
  Intro to Rebound Method.*
- **CTAs:** Action + ownership — *"BOOK YOUR JUMP," "RESERVE MY ACCESS,"
  "JOIN THE ZONE NOW," "CHOOSE UNLIMITED," "BOOK MY TRAMPOLINE."*
- **Emoji:** Not used in marketing copy or UI. (A few emoji appear only as
  internal data placeholders for choreography GIFs — never user-facing.) Keep
  output emoji-free.
- **Reassurance copy:** Balances hype with low-pressure, inclusive notes —
  *"Beginner to advanced. You belong here," "No contracts," "zero pressure."*

**Verbatim examples:**
- Hero: "WE DON'T JUST JUMP / WE LEVEL UP." · "High-energy trampoline workouts.
  Real results. Strong community. Unforgettable experience."
- Memberships: "CHOOSE YOUR PLAN. COMMIT TO YOU." · "Simple memberships. Big results."
- Bio footer: "Move. Connect. Level up."
- Studio: "No fluorescent lights. No boring treadmills."

---

## VISUAL FOUNDATIONS

**Overall vibe:** A dark, immersive nightclub-meets-gym. Near-black surfaces lit
by a single electric neon-green accent. Everything reads fast, athletic, and
premium — high contrast, sharp angles, no softness or pastel.

### Color
- **Primary accent:** `#A8FF00` energy-green — the one hero color. Used for CTAs,
  eyebrows, icons, highlights, glows, focus, status dots, scrollbar hover.
- Supporting greens: `#C6FF33` lime, `#F5FF00` neon-yellow (sparing).
- **Surfaces are a near-black ramp:** page `#050505` → card `#0A0A0A` → hover
  `#121212` → raised `#1A1A1A`. Borders are translucent white hairlines
  (`rgba(255,255,255,0.06–0.10)`), never solid grey lines.
- **Text ramp:** white → `#CCCCCC` steel → `#888888` cool-gray. On green surfaces,
  text flips to near-black `#0A0A0A`.
- Discipline: **one accent color.** Green carries everything; resist adding hues.
  Semantic red/emerald exist only for destructive/success buttons.

### Type
- **Display:** Teko — condensed, heavy, **uppercase, italic, skewed** (−3° to −6°).
  Huge sizes (up to ~9rem), tight 0.85 line-height. This is the brand's signature.
- **Body/UI:** Inter (400–900). Button labels are Inter **900 italic uppercase**.
- **Meta/labels:** JetBrains Mono, uppercase, wide letter-spacing, `///` prefix.

### Shape — the signature motif
Cut/chamfered corners via `clip-path` polygons, **not** border-radius. Three sizes:
- **Apex (10px):** top-left + bottom-right chamfer (asymmetric) — buttons, cards.
- **Micro (6px):** all-four-corner chamfer — icon buttons, chips.
- **Card (16–20px):** large apex cut for panels and pricing cards.
Borders are faked with a layered technique: an outer filled clip shape + an inner
shape `inset 1px` — so the 1px "border" follows the chamfer perfectly. Pills
(`border-radius: 9999px`) appear **only** on the language toggle and status dots.

### Backgrounds
- Full-bleed **photography**: dark studio interiors, neon-green lighting/lasers,
  people mid-jump on individual trampolines. Warm wood floors against cool dark
  walls; green neon signage in frame.
- Photos are layered under **horizontal/vertical protection gradients** to black
  (e.g. `linear-gradient(to right, #050505 0%, transparent 50%, #050505 100%)`)
  so display text stays legible over imagery.
- Ambient **radial green glows** (`bg-energy-green/[0.02–0.05]`, heavy blur
  ~130–150px) float behind sections. A faint dotted **grid texture**
  (`radial-gradient` dots, 24px, ~2% opacity) adds a techno-athletic feel.

### Imagery treatment
Cool/dark overall with **green neon as the light source** — moody, high-contrast,
cinematic. Subjects are real people in motion (smiling, airborne). No flat
illustration, no stock-cheerful brightness, no warm filters beyond floor wood tones.

### Elevation, glow & shadows
- Signature elevation is **green glow**, not drop shadow: `0 0 20/40/60px
  rgba(168,255,0,0.08–0.16)`. The "most popular" pricing card and primary buttons
  emit a green halo on hover.
- Text glow for accents: `text-shadow: 0 0 6px rgba(168,255,0,0.2)`.
- Deep ambient card shadow for the bio sheet: `0 0 80px rgba(0,0,0,0.55)`.

### Motion
- Custom strong easings: `--ease-out-strong cubic-bezier(0.23,1,0.32,1)` (default
  reveals — overshoots gently), `--ease-in-out-strong cubic-bezier(0.77,0,0.175,1)`,
  `--ease-drawer cubic-bezier(0.32,0.72,0,1)` (sheets).
- Entrances: fade + rise (`translateY(14px)→0`) or scale-in, staggered by ~40–55ms.
- Looping: soundwave bars (scaleY pulse), slow status-dot pulse.
- All motion respects `prefers-reduced-motion` (movement removed, opacity kept).

### States
- **Hover:** primary button brightens green `#A8FF00 → #B5FF1A` + green blur halo
  appears; secondary surfaces lighten (`#111 → #161616`); text steel → white;
  borders `white/10 → white/25` or → green.
- **Press/active:** `scale(0.97)` (buttons) / `scale(0.95)` (icon buttons), darker
  green `#92DF00`. Fast `120ms` feedback.
- **Focus / selection:** green on black. Disabled: `opacity 0.4–0.5`, not-allowed.

### Layout
- Max content width `1600px`, generous responsive padding (`px-4 → lg:px-8`).
- Fixed top navbar that shrinks + goes solid-black on scroll.
- Section rhythm: tall padded sections (`py-24 → py-32`), centered headers with
  mono eyebrow → italic display headline → muted subtitle.
- Bio page is a fixed **430px** mobile column centered on black.

### Transparency & blur
- Glassy panels over photos: `bg-black/45 backdrop-blur-md` inside chamfered
  borders (hero feature bar, bio language toggle).
- Translucent white fills for borders/dividers throughout.

---

## ICONOGRAPHY

- **Icon set:** [**Lucide**](https://lucide.dev) (`lucide-react` v0.546) — the
  product's only icon system. Clean, consistent **stroke** icons (no fills),
  typically `w-4 h-4` to `w-7 h-7`, stroke weight `1.5–3px` (heavier `stroke-[3px]`
  inside primary buttons). Accent icons are energy-green; default icons are steel/
  cool-gray and brighten to white on hover.
- **Icons in use:** ArrowRight, ChevronRight, Menu, X, Globe, Zap, Users, Flame,
  BarChart3, MapPin, Check, Star, User, AlertTriangle, Loader2, CalendarDays,
  Clock3, Phone, MessageCircle, Music2, Instagram, Facebook, Youtube.
- **How to load:** use Lucide from CDN (e.g. `https://unpkg.com/lucide@latest`)
  and call `lucide.createIcons()`, or copy individual SVGs. **Do not hand-draw or
  substitute** — Lucide is CDN-available, so always pull the real icons.
- **Emoji:** never used as UI. **Unicode glyphs:** the `///` slash motif (plain
  text) acts as a decorative divider in eyebrows and inside buttons.
- **Logo (in `assets/`):**
  - `logo-jumpzone.png` — the official horizontal lockup: the angled "JUMPZONE"
    wordmark (lime + metallic-silver) over "STUDIO," on a transparent background.
    This is the single official brand logo — use it on dark surfaces (primary) or
    over energy-green. Glows subtly green on dark.
  - `favicon.png`, `favicon-32.png`, `apple-touch-icon.png`.
- **Brand mark:** the angled, italic **JUMPZONE** wordmark — heavy custom
  athletic lettering in lime-green and metallic silver with a dark outline, set
  over a smaller tracked "STUDIO." Its forward lean and speed-lines embody the
  brand's motion. (Teko italic evokes it in HTML where the logo image isn't used.)

---

## Index — what's in this system

| File / folder | What it is |
|---|---|
| `README.md` | This document — context, voice, visual foundations, iconography. |
| `colors_and_type.css` | CSS variables for color, type, motion, shadow, shape + semantic type classes. |
| `SKILL.md` | Agent-Skill manifest so this can be used in Claude Code. |
| `assets/` | Logos, favicons, hero photo, class/studio photography. |
| `preview/` | Design-system specimen cards (rendered in the Design System tab). |
| `ui_kits/website/` | UI kit for the marketing website — components + interactive `index.html`. |
| `ui_kits/bio/` | UI kit for the mobile bio link page — components + interactive `index.html`. |

### Asset manifest (`assets/`)
- `logo-jumpzone.png` — official horizontal brand lockup (transparent)
- `favicon.png`, `favicon-32.png`, `apple-touch-icon.png` — app icons
- `hero-trampoline.png` — full-bleed hero / cover photo
- `class-fit-cardio.webp`, `class-hiit-power.webp`, `class-strong-tone.webp`,
  `class-core-balance.webp`, `class-dance-beat.webp` — class card photography
- `more-than-workout.webp` — studio/community photo

---

## Notes & substitutions

- **Fonts** (Inter, Teko, JetBrains Mono) are genuine Google Fonts — loaded from
  the Google Fonts CDN, no substitution needed. See `colors_and_type.css` header
  for the exact `<link>`.
- **Photography** is the production imagery from the codebase. Class images are
  imported as lightweight `.webp`; the hero is full-resolution `.png`.

Built referencing the work of [NexLink](https://www.nexlink.ai).
