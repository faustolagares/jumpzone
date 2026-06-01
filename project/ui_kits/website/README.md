# Website UI Kit — Jump Zone Studio

A high-fidelity, interactive recreation of the Jump Zone Studio **marketing
website** (`jumpzonestudio.com`). Cosmetic React components built with inline
Babel JSX — pixel-faithful to the production app, but simplified (no real data /
backend). Trilingual (EN / PT / ES) via the in-page language toggle.

## Run
Open `index.html`. It loads React 18 + Babel + Lucide from CDN, the design tokens
(`../../colors_and_type.css`), and the kit styles (`styles.css`).

## What's interactive
- **Language toggle** (navbar) — switches all copy between EN / PT / ES live.
- **Navbar** — shrinks + goes solid black on scroll; smooth-scrolls to sections;
  mobile hamburger opens a full-screen menu.
- **Classes** — filter chips (All / Cardio / Strength / Combo) filter the grid.
- **Book / Choose plan** — any "Book", class "Book My Trampoline", or pricing
  "Choose" button opens the **Checkout modal**: pick a trampoline spot on the
  seat map → fill the form → confirm → digital ticket success state.

## Components
| File | Component | Notes |
|---|---|---|
| `Icon.jsx` | `Icon` | Lucide bridge for React (renders real Lucide SVGs). |
| `Buttons.jsx` | `JumpButton`, `HeaderButton`, `IconButton`, `SocialButton`, `LangToggle` | The brand button system (chamfered, glow). |
| `Navbar.jsx` | `Navbar` | Fixed header, scroll states, mobile menu. |
| `Hero.jsx` | `Hero` | Full-bleed photo + protection gradients, display headline, glass feature bar, Newark location card. |
| `HowItWorks.jsx` | `HowItWorks` | "One Jump. Endless Energy." — 5 class-style cards (Fit / HIIT / Strong / Dance / Core) + stats banner. |
| `Benefits.jsx` | `Benefits` | "More Than a Workout. Real Benefits." — 6 icon benefits + CTA banner. |
| `ScheduleSection.jsx` | `ScheduleSection` | Darker-bg weekly schedule grid; hover a class cell to reveal "Click class to book" + book it. |
| `StudioGallery.jsx` | `StudioGallery` | "A Space Built To Move You." — auto-rotating photo gallery + thumbnails + lightbox, spec card, 4 features, slogan. |
| `Membership.jsx` | `Membership` | 3 pricing tiers; middle "most popular" with green border + glow; guarantee banner. |
| `FAQ.jsx` | `FAQ` | Accordion of the four brand Q&As, chamfered cards with green active state. |
| `CTASection.jsx` | `CTASection` | Full energy-green CTA card ("Ready to Join the Jump Zone Studio?") with the dark light-primary button. |
| `Footer.jsx` | `Footer` | Complete 4-column footer — brand + socials, location, studio hours, club-zone links, credits. |
| `CheckoutModal.jsx` | `CheckoutModal` | Booking drawer: trampoline seat map + form + success ticket. |
| `App.jsx` | `App` | Owns language + checkout state, composes the page. |

Full page order: Hero → How It Works → Benefits → Schedule → A Space Built To Move You → Memberships → FAQ → CTA → Footer.

## Conventions
- Each `.jsx` exports to `window` (Babel scripts don't share scope). Load order
  matters — see the bottom of `index.html`.
- Buttons follow the brand: **primary** = solid energy-green; **secondary** =
  thin green outline over a dark `#1A1A1A` fill (distinct from the page black).
- Icons are **Lucide**; social glyphs use **Simple Icons** (`cdn.simpleicons.org`)
  since Lucide dropped brand marks.

Recreation reference: `faustolagares/jumpzonestudio` (`src/components/*`).
