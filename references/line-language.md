# Line Language

Status: final source of truth for Ze hand-drawn web lines.

## Core Definition

Ze uses Excalidraw / Rough.js-style lines as a system material for borders, dividers, paths, frames, selected controls, and conceptual diagrams.

The line should feel human-made and lightly imperfect:

- Double-pass stroke: many lines look like two close passes rather than one clean vector stroke.
- Small coordinate drift: endpoints and control points are slightly offset.
- Uneven curvature: straight dividers are not ruler-straight; curves have mild bowing.
- Variable perceived weight: roughness creates subtle thickness changes and tiny edge irregularities.
- Controlled restraint: lines remain readable and structural; they should not become noisy, messy, or childish.
- Optional hachure only when a hand-sketched fill is explicitly needed.

Do not reduce the style to a random wavy CSS border. The source family is Excalidraw and Rough.js: clean whiteboard sketch lines with deterministic roughness.

## Ze Rough Line Modes

| Mode | Use | Suggested profile |
| --- | --- | --- |
| `rough-hairline` | Normal card borders, section frames, figure frames, quiet separators. | `roughness: 0.8-1.2`, `bowing: 0.4-0.9`, `strokeWidth: 1.2-1.8` |
| `rough-pencil` | Dividers, underlines, callout separators, article annotation paths. | `roughness: 1.2-1.7`, `bowing: 0.9-1.4`, `strokeWidth: 1.8-2.4` |
| `rough-strong` | Tool controls, CTAs, selected resource cards, product-like modules. Use sparingly. | `roughness: 1.4-2.0`, `bowing: 1.0-1.6`, `strokeWidth: 2.2-3.0` |
| `rough-path` | Dot paths, conceptual flows, article figures, relation diagrams. | `roughness: 1.1-1.6`, `bowing: 1.0-1.8`, `strokeWidth: 1.8-2.6` |

Default to `rough-hairline`. Escalate only when interaction, emphasis, or concept structure requires it.

## Application Map

Apply rough lines to real UI surfaces, not only decorative sample lines.

Use `rough-hairline` frames by default for:

- Comparison cards, track cards, resource cards, callouts, figure frames, code panels, mock frames, current update strips, and compact control/result items.
- Section dividers, list separators, figure caption separators, and quiet content boundaries.
- White and tinted blocks that would otherwise use a rigid `border: 1px solid`.

Use `rough-pencil` for:

- Visible underlines, callout separators, article annotation dividers, and explanatory marker lines.
- Stronger separators inside concept sections where the line itself carries attention.

Use `rough-strong` only for:

- Selected cards, selected tool controls, primary CTAs, and product/tool modules that need a more tactile affordance.

Use `rough-path` only for:

- Dot paths, conceptual flows, arrows, loops, and relation diagrams where the content has a real relationship.

Keep stable geometric lines for:

- Browser/navigation chrome, focus rings, small tags/badges, form field internals, tab pills, simple icons, and symbol primitives.
- Dense data tables or controls where roughness would reduce scannability.

If a component is a content surface, do not leave only a straight CSS border. Use an SVG/canvas rough frame, a generated rough SVG, or a CSS mask fallback that visibly behaves like an Excalidraw/Rough.js line.

## Usage Rules

Use rough lines for:

- Borders and frames that would otherwise feel too corporate or rigid.
- Dividers and underlines that separate real content groups.
- Article figures, conceptual paths, and relation diagrams.
- Selected or active states in tool/resource interfaces.
- Dot Grammar paths when the path expresses a real relationship.

Do not use rough lines for:

- Generic page decoration.
- Arrows or loops without a real content relationship.
- Thick black outlines everywhere.
- Hachure fills behind body text.
- Cute doodle atmosphere, sticker styling, or childlike messiness.

Rough lines do not replace Ze color semantics. Blue, amber, green, rose, violet, and orange still carry local meaning; line roughness is material, not meaning.

## Implementation Rules

When generating HTML/SVG prototypes:

- Prefer SVG or canvas rough-line output for borders, dividers, paths, and diagrams.
- Use deterministic seeds so gallery outputs remain stable.
- Use Rough.js directly when available in the target project.
- Use `scripts/generate-rough-lines.mjs` when a dependency-free Ze rough SVG is enough.
- Use CSS masks only as a fallback for simple repeated lines or content frames.
- For CSS fallback frames, build the frame from four edge masks: top/bottom horizontal rough lines and left/right vertical rough lines. Do not stretch one full-rectangle mask across arbitrary card ratios; it can shrink, drift, or float inside the card.
- Do not pass `fill` for borders and dividers. In Rough.js, a `fill` value can trigger hachure-like fills; use fill only when an intentional sketch fill is required.

Script example:

```bash
node scripts/generate-rough-lines.mjs --shape rect --mode rough-hairline --width 480 --height 180 --seed 7 --out frame.svg
node scripts/generate-rough-lines.mjs --shape divider --mode rough-pencil --width 720 --height 56 --stroke '#80652d' --seed 11 --out divider.svg
node scripts/generate-rough-lines.mjs --shape path --mode rough-path --width 640 --height 220 --stroke '#6b627b' --seed 13 --out path.svg
```

## Reference Boundaries

External sources teach line behavior, not Ze content:

- Excalidraw: https://github.com/excalidraw/excalidraw
- Rough.js: https://roughjs.com

Do not copy Excalidraw app chrome, icons, content, or whiteboard UI as Ze page structure. Adopt only the line material: deterministic roughness, double-pass stroke, mild bowing, endpoint drift, and structural restraint.
