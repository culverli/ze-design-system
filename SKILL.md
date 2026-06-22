---
name: ze-design-system
description: Design, generate, or review Ze-style web pages and static HTML prototypes using the final Ze Web Design System. Use when Codex needs to classify a web page type, select Ze layouts/components, apply Ze tokens, low-saturation visual language, Ze Rough Line / Excalidraw-style hand-drawn borders, restrained motion, approved Ze visual anchors, or adapt future websites to the reusable Ze Design System without modifying source projects such as Portfolio unless explicitly asked.
---

# Ze Design System

## Operating Contract

Use the final visual baseline unless the user explicitly asks to reopen exploration. The baseline is white-first, low-saturation, editorial, Ze Rough Line-aware, motion-aware, and reusable beyond Portfolio.

Do not modify `/Users/apple/dev/Portfolio` or any other source project unless the user explicitly asks for implementation there. Do not use Portfolio content unless the user explicitly provides it or asks for a Portfolio-specific design.

## Core Workflow

### 1. Classify The Page Type

Read `references/page-types.md` first. Pick the closest page type before choosing layout or components.

Use these defaults when the request is ambiguous:

- **Home:** identity, current update, equal Academic / Practice entrances, latest work.
- **Article Detail:** content-led reading page; read the article text before inserting callouts, quotes, figures, paths, or motion.
- **Tool / App:** compact functional surface with controls, tabs, filters, forms, results, and clear states.
- **Resource / Tutorial:** process-oriented page with steps, comparisons, checklists, code, and optional accordion.
- **Gallery / Comparison Board:** only for visual confirmation or explicit comparison, not as the default structure for normal pages.

State the chosen type briefly when it affects the design. If content is missing, make a conservative assumption and label it.

### 2. Load The Right References

Always read these before designing, generating, or reviewing:

- `references/brand-dna.md`
- `references/tokens.md`
- `references/line-language.md`
- `references/page-types.md`
- `references/checklist.md`

Then read only the relevant supporting files:

- Layout or page structure: `references/layouts.md`
- Components and component states: `references/components.md`
- Motion, cursor, tabs, accordion, reveal, loading: `references/motion.md`
- Ze character, article figures, Dot/Symbol usage: `references/illustration-usage.md`

For strict Ze character generation or QA, use the `ze-universe-ip` skill. For article illustration prompts or QA, use the `ze-article-illustrations` skill. This skill may place approved anchors and write usage rules, but it should not directly invent new Ze character art.

### 3. Select Layout And Components

Choose layout from the page job, not from a generic landing template.

Before writing HTML, decide:

- Primary layout pattern: editorial hero, track split, reading column, sticky rail, list stack, annotated flow, component grid, or functional surface.
- Required content blocks: current update, latest list, track cards, article header, figure, quote, code panel, tabs, filters, accordion, step flow.
- Rough Line application map: which content surfaces get `rough-hairline`, which dividers get `rough-pencil`, which selected/CTA states get `rough-strong`, which conceptual paths get `rough-path`, and which UI chrome stays stable.
- Motion families, if any: cursor, hover, reveal, list rhythm, tabs, accordion, loading.
- Symbol or Ze usage, if any: only when it clarifies interaction, structure, concept, or figure content.

Preserve final decisions:

- Home baseline is Dual Track Home when Academic / Practice parity matters.
- Article baseline is content-led; components come from the article text.
- Dot Grammar is interface/design-language support, not Portfolio homepage content.
- Track cards must have equal visual weight unless hierarchy is intentional.
- Label-to-title spacing is a system rule, not a one-off fix.

### 4. Generate Or Review HTML

When generating static HTML/CSS:

- Use tokens from `references/tokens.md`.
- Keep the default canvas white.
- Use low-saturation color locally for hierarchy, labels, highlights, states, and callouts.
- Use Ze Rough Line modes from `references/line-language.md` for borders, dividers, paths, frames, selected controls, and conceptual diagrams.
- Apply rough frames to content surfaces such as cards, blocks, callouts, figures, code panels, mock frames, current strips, and list/result items. Do not leave these as only rigid straight CSS borders.
- Use `scripts/generate-rough-lines.mjs` when a deterministic dependency-free SVG rough line is useful.
- Prefer lists, split layouts, reading columns, rails, flows, and functional surfaces over repeated card grids.
- Make tabs, accordion, filters, buttons, and other controls functional when shown in prototypes.
- Include visible focus states and `prefers-reduced-motion`.
- Avoid inline one-off spacing styles; encode reusable rhythm in CSS classes or tokens.
- Use real approved assets from `assets/visual-anchors/approved/` when a Ze visual anchor is needed.

When reviewing existing HTML/UI:

- Classify the page type first.
- Compare the implementation against the relevant references.
- Report issues by severity, especially old Portfolio gray-green, retro-window article styling, decorative symbols, cramped spacing, unequal track cards, missing focus states, motion that ignores reduced motion, and components inserted without content reason.

### 5. QA With Checklist

Read `references/checklist.md` before delivery. Check at minimum:

- Page type is identified.
- White canvas and low-saturation local color are respected.
- Ze Rough Line modes are used intentionally where borders, dividers, frames, paths, or selected controls need a hand-drawn material.
- Content cards, blocks, figures, callouts, code panels, mock frames, and meaningful separators are not left with only rigid straight-line borders.
- Old Portfolio gray-green and retro-computer article style are absent.
- Article components are content-led.
- Ze symbols remain abstract and are not used as Portfolio homepage content.
- Label-to-title spacing is consistent.
- Text does not clip, overlap, or overflow on desktop or mobile.
- Focus states are visible.
- Motion honors `prefers-reduced-motion`.
- Interactive examples have hover/focus/active/selected states.

For local static galleries or prototypes, also run deterministic checks when possible:

- JavaScript syntax check for local scripts.
- Local `href` and `src` references resolve to existing files.
- No accidental inline `style="..."` remains when spacing should be tokenized.
- No stale exploratory symbols/classes remain in final output.

If a visual screenshot QA pass was not run, say so explicitly and name the residual risk.

## Non-Negotiables

- Do not preserve the current Portfolio gray-green as a system color.
- Do not preserve the old retro-computer/window-like Portfolio article style.
- Do not modify Portfolio or other source projects unless the user explicitly requests implementation there.
- Use low-saturation colors for hierarchy, highlights, labels, states, and local mood; avoid decorative color overload.
- Use white as the default canvas. Low-saturation colors are local marks, not full-page atmosphere.
- Use Ze Rough Line with restraint: `rough-hairline`, `rough-pencil`, `rough-strong`, and `rough-path` are structural materials, not generic doodle decoration.
- Use Ze Universe symbols as abstract interaction grammar only. Dot, Circle, Square, Triangle, Path, Nodes, and Infinity must never become characters or companions.
- Use the Ze character only when it supports a concept, state, or action. For generation or strict Ze character QA, use the `ze-universe-ip` and `ze-article-illustrations` skills.
- Treat motion as part of the component system: cursor, hover, reveal, tabs, accordion, loading, and list rhythm must all honor reduced motion.
- Avoid repeated AI-looking scaffolds: identical card grids, repeated tiny uppercase section kickers, decorative gradient text, gray text on colored backgrounds, and motion applied uniformly to every section.

## Skill Boundaries

This skill can:

- Create visual confirmation galleries.
- Generate static HTML prototypes.
- Define and apply Ze web tokens, components, layouts, and page types.
- Review pages for Ze system alignment.
- Adapt future websites to the Ze web language.

This skill should not:

- Directly generate Ze character images.
- Treat Portfolio as the only target website.
- Change live source projects unless explicitly asked.

## Delivery Guidance

When producing design work, prefer:

- A direct final design when the content and page type are clear.
- A small HTML preview when the user wants visual approval before implementation.
- Components with accessible focus states and reduced-motion behavior.
- Reusable rules over one-off page styling.

When finishing, report:

- Chosen page type and key references used.
- Files changed or reviewed.
- QA checks run.
- Any unchecked risks, such as no mobile screenshot pass.
