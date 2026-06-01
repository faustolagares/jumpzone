# Bio Link Page UI Kit — Jump Zone Studio

A high-fidelity recreation of the Jump Zone Studio **mobile bio link page**
(`/bio`) — the Linktree-style page used for social traffic. Fixed **430px**
column on black, cover photo, logo, social row, and stacked link buttons.
Trilingual (EN / PT / ES).

## Run
Open `index.html`. Loads React 18 + Babel + Lucide from CDN plus the design
tokens (`../../colors_and_type.css`). All styling is in the `<style>` block of
`index.html`; the app logic is in `Bio.jsx`.

## What's interactive
- **Language toggle** (top-right over the cover) — switches subtitle, link
  labels, and footer between EN / PT / ES.
- Staggered rise-in entrance animations (cover scale-in, logo, links).

## Structure
- Cover photo with a bottom protection gradient + radial green glow.
- Official logo (`logo-jumpzone.png`) overlapping the cover, green drop-glow.
- Social row — Instagram / TikTok / Facebook / YouTube (Simple Icons).
- One **primary** link (Book Your Jump) + six **secondary** links (green outline
  over `#1A1A1A`), each with a Lucide icon.
- Footer tagline ("Move. Connect. Level up.") + "Made by NexLink".

Recreation reference: `faustolagares/jumpzonestudio` (`src/pages/BioPage.tsx`).
