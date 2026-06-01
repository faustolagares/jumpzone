---
name: jumpzone-design
description: Use this skill to generate well-branded interfaces and assets for Jump Zone Studio (a high-energy trampoline fitness studio in Newark, NJ), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content voice, visual foundations, iconography, index.
- `colors_and_type.css` — CSS variables (color, type, motion, shadow, the signature
  chamfer clip-paths) + semantic type classes. Load this first in any HTML you build.
- `assets/` — official logo, favicons, and brand photography (dark, neon-green studio shots).
- `preview/` — specimen cards showing each token/component in isolation.
- `ui_kits/website/` — interactive React/Babel recreation of the marketing site
  (Navbar, Hero, Classes, Membership, Footer, CheckoutModal). Copy components from here.
- `ui_kits/bio/` — the mobile `/bio` link page recreation.

Brand in one line: **near-black surfaces, one electric energy-green accent
(`#A8FF00`), condensed italic Teko display type, chamfered (cut-corner) buttons
and cards with green glow, and dark cinematic photography.** Voice is hype,
all-caps, imperative ("BOOK YOUR JUMP", "We don't just jump — we level up").
Icons are Lucide; social glyphs are Simple Icons. No emoji.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view. If working on
production code, copy assets and read the rules here to become an expert in
designing with this brand.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask some questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
