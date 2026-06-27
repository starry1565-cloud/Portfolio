# Soomin Web Design System

A faithful implementation of the **"reverent product photography framed by near‑invisible UI"** design language — Apple's web aesthetic, expressed as reusable tokens, components, and UI kits. Every page is a stack of edge‑to‑edge product *tiles* that alternate light and dark, each centered on a quiet headline, a one‑line tagline, two tiny blue pill CTAs, and a crisp product render. Nothing competes with the product.

> **Source:** built from a written design specification (no codebase or Figma was attached). Brand marks, product names, and product photography are intentionally **generic placeholders** ("soomin", "Studio Pro", "Pulse") — the system encodes the visual *language*, not a specific company's trademarked assets. Swap in real brand assets when productionizing.

---

## The system in one breath

- **Photography‑first.** UI recedes so the product can speak. No decorative chrome — no gradients, no borders, no shadows on UI.
- **Alternating full‑bleed tiles.** White / parchment ↔ near‑black. The color change itself *is* the section divider.
- **One blue accent.** `--color-primary` `#0066cc` carries every interactive element. There is no second brand color.
- **Two button grammars.** Tiny blue pill CTAs (`--radius-pill`) and compact utility rects (`--radius-sm`).
- **Exactly one shadow** in the whole system (`--shadow-product`), reserved for product imagery resting on a surface.
- **Tight, quiet type.** Display ≥19px tracks negative ("Apple tight"); body runs at **17px, not 16px**; weight ladder is **300 / 400 / 600 / 700** — 500 is deliberately absent.

---

## Content fundamentals

How copy is written across this language:

- **Voice: confident, declarative, short.** Headlines are nouns or two‑to‑four‑word statements — "Studio Pro." "A healthy leap ahead." "Welcome to spatial computing." Sentences end early. Periods are used as punctuation *and* as rhythm ("Store. The best way to buy the products you love.").
- **Second person, sparingly.** Copy addresses "you" only when inviting an action ("the products you love"). Most product copy is about the product, in third person, not about the reader.
- **No hype words, no exclamation marks.** Superlatives are quiet and specific ("the most powerful chip we've ever built") rather than loud ("amazing!"). Assertion comes from brevity, not volume.
- **Sentence case for headlines, Title Case for product/nav names.** "A greener way forward." vs. "Studio Pro", "Store", "Compare".
- **CTAs are two words max.** "Learn more", "Buy", "Add to Bag", "Watch the film". Paired CTAs read primary‑first: "Learn more" (filled) then "Buy" — or vice versa per surface.
- **No emoji. No icons in headlines.** Emphasis is typographic (weight 600) or chromatic (the one blue), never decorative.
- **Numbers are spare and meaningful.** Prices ("From $1099"), storage ("256GB"), program names ("Soomin 2030"). No invented stats, no data slop.
- **Vibe:** museum wall text. Calm, precise, a little reverent. The page trusts the reader to lean in.

---

## Visual foundations

**Color.** Pure white (`--color-canvas`) and the signature off‑white **parchment** (`--color-canvas-parchment` `#f5f5f7`) on the light side; three micro‑stepped near‑blacks (`--color-surface-tile-1/2/3`, `#272729` / `#2a2a2c` / `#252527`) plus true black (`--color-surface-black`, the nav bar only) on the dark side. Text is one near‑black ink (`#1d1d1f`) everywhere on light; white on dark, with `#cccccc` for muted secondary copy on dark. The only accent is Action Blue `#0066cc`; on dark tiles in‑copy links brighten to Sky Link Blue `#2997ff`. **No gradients** are defined as tokens — atmosphere comes from photography, not CSS.

**Type.** SF Pro Display (headlines ≥19px) and SF Pro Text (body/UI) — see *Font substitution* below. Display sizes carry negative letter‑spacing (`-0.28 → -0.374px`); body is 17px / 400 / 1.47 line‑height / `-0.374px`. Footer link columns use an unusually relaxed **2.41** line‑height so dense columns stay scannable. Weight 300 is real and rare (airy leads, store hero CTA); weight 500 never appears.

**Spacing.** 8px base. Structural layout snaps to 8/12/16/20/24. Product tiles get **80px** (`--space-section`) of vertical air; utility cards get 24px padding. Whitespace is the product's pedestal — at least 40px between any product render and the nearest content.

**Backgrounds.** Full‑bleed, edge‑to‑edge solid surfaces only. No textures, no repeating patterns, no decorative imagery behind UI. Photographic atmosphere lives *inside* product renders, not as a page background.

**Elevation & depth.** Flat by default. Elevation comes from (a) surface‑color change between tiles and (b) `backdrop-filter` frosted glass on sticky bars (`saturate(180%) blur(20px)` over parchment @ 80%). There is **exactly one** drop‑shadow — `rgba(0,0,0,0.22) 3px 5px 30px` — and it only ever sits under a product render. Never on cards, buttons, or text.

**Borders & cards.** Cards are white, 1px hairline (`#e0e0e0`), 18px radius (`--radius-lg`), 24px padding, **no shadow**. Secondary buttons use a soft 3px "ring" of `rgba(0,0,0,0.04)` rather than a hard line.

**Corner radii.** A strict grammar, never mixed: `sm` 8px (utility rects), `md` 11px (the rare pearl capsule), `lg` 18px (utility cards), `pill` 9999px (every "action" — primary CTA, configurator chips, search field). Full‑bleed tiles are `none` (0).

**Animation & states.** Minimal. The one system‑wide micro‑interaction is the press: `transform: scale(0.95)` on every button. Focus shows a 2px Focus‑Blue outline. **Hover is never documented** — design to default + pressed only. No bounces, no parallax on UI; transitions are short (~0.1s ease).

**Transparency & blur.** Used functionally, never decoratively: frosted sub‑nav and the floating buy bar (parchment @ 80% + blur), and the translucent gray circular chips that float over photography (`rgba(210,210,215,0.64)`).

**Imagery vibe.** Product renders are photographic‑realistic, neutral‑to‑cool, crisp, often shot on a tinted surface that becomes the tile background. Square 1:1 crops in grids; full‑bleed rectangles in heroes. No grain, no heavy color grading, no rounded corners on hero imagery.

---

## Iconography

- **Approach: near‑zero.** This language is deliberately icon‑light. The only glyphs that appear are the **global‑nav utility icons** (search, bag) and the **chevron `›`** that trails text links and "Learn more" actions.
- **Style:** thin (~1.2–1.3px) monoline strokes, `currentColor`, small (14–16px). They are quiet UI affordances, not decoration.
- **No icon font, no sprite, no large icon set** was specified. The handful of glyphs are inline SVGs inside the relevant components (`GlobalNav`, `IconButton`, `SearchInput`, `TextLink`) — drawn as minimal monoline paths to match the stroke weight.
- **No emoji, ever.** No unicode dingbats as icons (the chevron `›` is the one typographic exception).
- If you need a broader icon set when extending this system, match the spec: monoline, ~1.25px stroke, `currentColor`, rounded caps. (Heroicons *outline* is the closest CDN match — flag any such substitution.)
- **No logo asset is bundled.** The nav uses a neutral "soomin" wordmark placeholder. Drop a real logo into `assets/` and pass it to `GlobalNav`'s `brand` prop.

---

## Font substitution — please confirm

**SF Pro is Apple's proprietary system font and cannot be redistributed**, so no `@font-face` ships in this system. Instead:

1. On Apple platforms, the family stacks lead with `system-ui` / `-apple-system`, which resolve to the **real SF Pro** automatically.
2. On non‑Apple platforms, **Inter** (loaded from Google Fonts in `tokens/fonts.css`) is the closest open‑source fallback.

➡️ **If you have licensed SF Pro binaries, please upload them** — drop the files in `assets/fonts/` and I'll add the exact `@font-face` rules. Until then, non‑Apple devices render Inter.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link; `@import`s every token + font file.
- `readme.md` — this guide.
- `SKILL.md` — Agent‑Skills front‑matter for use in Claude Code.

**`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `fonts.css`.

**`components/`** (namespace `AppleWebDesignSystem_f2d81f`)
- `buttons/` — **Button** (primary · secondary · dark · pearl · store-hero), **IconButton**, **TextLink**
- `navigation/` — **GlobalNav**, **SubNav**, **Footer**
- `surfaces/` — **ProductTile** (light · parchment · dark · dark-2 · dark-3), **StoreCard**, **ConfiguratorChip**
- `forms/` — **SearchInput**

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Elevation) shown in the Design System tab.

**`ui_kits/soomin-web/`** — interactive recreation: Home (tile stack) → Store (utility grid + search) → Buy (configurator + floating frosted bar). Open `index.html`.

---

## Do / Don't (quick reference)

**Do** — use Action Blue for *every* interactive element; alternate light/dark tiles for rhythm; body at 17px; reserve the pill for actions; apply the single product‑shadow only to product renders; use `scale(0.95)` as the press state.

**Don't** — introduce a second accent; add shadows to cards/buttons/text; use gradients as backgrounds; set body at weight 500; round full‑bleed tiles; tighten body line‑height below 1.47; mix radius grammars; use Sky Link Blue on light surfaces.
