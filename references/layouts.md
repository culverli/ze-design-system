# Layouts

## Principles

- Let page type drive layout.
- Build richness through structural variety, not decorative noise.
- Prefer lists, split layouts, sticky rails, and annotated flows over generic card grids.
- Keep mobile layouts reorganized, not merely shrunken.
- Use open whitespace as a layout primitive. Do not require every section to have a border or card boundary.
- For complex sections, reason about local zones before implementation: title, body, figure, controls, footer, navigation, and decoration need enough space and clear layer priority.
- Preserve the Ze identity while adapting density and visual weight to the page type; a homepage, article, tool, and gallery should not carry the same layout pressure.

## Final Defaults

- Home pages may use Dual Track layout when two work directions need equal weight.
- Article pages should default to a reading column before adding annotation or rail complexity.
- Comparison-board grids belong in galleries and explicit comparison surfaces, not normal page defaults.
- Functional surfaces should be compact and task-focused, not hero-led.

## Approved Patterns

### Editorial Hero

Use for Home, About, and Article. Large title, concise metadata, one optional visual anchor.

Variants:

- Text-first with small visual anchor.
- Split with Ze/state figure.
- Symbol-led with Dot/path grammar for design-language or system pages only.

### Track Split

Use for Academic / Practice or two related paths. Keep both sides balanced but not symmetrical.

Parallel track cards must have equal visual weight. Use both white cards with local colored labels/lines, or use two different tints with comparable strength. Do not make one card white and the other tinted unless the content intentionally has hierarchy.

For the Home baseline, keep current update / recent activity near the track intro so the homepage does not become only two cards.

### Sticky Side Rail

Use for long articles, tutorials, research agendas, and project detail pages. Disable sticky behavior on mobile.

### List Stack

Use for posts, publications, latest updates, resources, and tools. This is a Ze core pattern.

### Annotated Flow

Use for process explanation. Combine low-saturation `rough-path` lines, Dot markers, and short annotations.

### Component Grid

Use only when repeated items benefit from comparison. Keep cards restrained and avoid nested cards.

For design-system galleries, card grids are allowed when they compare or demonstrate primitives. Avoid carrying gallery-board structure into final page designs by default.

### Reading Column

Use for Article Detail. The default width should favor reading, with optional side rail only when useful.

Article layout is content-led. Read the article first, then choose callouts, quotes, cards, paths, figures, rails, and motion only where the text creates a real insertion point.

### Functional Surface

Use for Tool / App pages. Controls, filters, tabs, and results should feel dense but calm.

Functional surfaces need an explicit collision plan. Controls, result lists, tabs, sticky headers, empty states, and overlays must not compete for the same space, especially on mobile.
