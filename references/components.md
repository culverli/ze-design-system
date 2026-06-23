# Components

## Final Component Direction

The component system should feel rich through state, rhythm, and content structure. It should not rely on many decorative cards.

Accepted component families:

- Section header.
- List item.
- Tags and filters.
- Current update strip.
- Callout.
- Quote / key insight.
- Code panel.
- Article figure block.
- Step flow.
- Tabs and accordion.
- Motion states.

## Core Components

### Surface Framing

Content surfaces should use Ze Rough Line frames when their boundary is visible. This includes comparison cards, track cards, resource cards, callouts, figure blocks, code panels, mock frames, current update strips, and compact result/control items.

Do not leave a content surface with only a rigid `border: 1px solid` treatment. Use `rough-hairline` for default frames and `rough-strong` only for selected, active, or CTA-like surfaces.

For generated static HTML/CSS, implement the visible frame with SVG/canvas output or the responsive mask/pseudo-element pattern from `gallery/assets/ze-system.css`. A transparent CSS border may support sizing, but the visible line must come from the rough renderer.

Keep small interaction chrome more stable: tags, tab pills, focus rings, nav links, form field internals, and symbol primitives may use clean geometric borders because scannability matters more there.

### Section Header

Use a small marker, short title, and optional description. Add a `rough-hairline` divider when needed.

When a marker label, tag, or metadata line sits above a title, keep visible breathing room between them. The label and title should never read as one cramped line group. Use a consistent label-to-title gap, not one-off card tweaks.

Variants:

- Quiet marker: Dot + text, no container.
- Annotated marker: short label plus `rough-pencil` line.
- Dense marker: compact title and metadata for tool surfaces.

### List Item

Use for publications, latest updates, posts, tools, and resources. Prefer list-card hybrids over floating card grids.

### Current Update Strip

Use for homepage current status, recent activity, or compact announcements.

Rules:

- Keep label and body text on a shared baseline.
- Use local low-saturation tint only when it helps scanning.
- Keep the strip lightweight; it is not a hero card.
- Do not let the update strip compete with equal-weight track cards.

### Tag / Filter

Use low-saturation tints. Active state should be visible through border, text color, and optional Dot marker.

States: default, hover, active, selected, disabled. Do not use gray text on colored backgrounds; use a darker shade of the same hue.

Every tag, filter, badge, caption, stat, and control label must use an explicit surface / ink pairing. Do not rely on inherited text color when the component has its own background.

### Callout

Variants:

- Note.
- Path.
- Warning.
- Feedback.
- Question.
- Quote.

Colors can map to meaning or reading hierarchy. Keep copy short.

For articles, callouts are selected after reading the text. Use them for real frameworks, warnings, questions, examples, or boundary statements; do not insert them just to make the page look richer.

### Quote / Key Insight

Use a quiet quote for essays and a more annotated quote for tutorials. Avoid browser default blockquote.

Use quotes only when the source text contains a key sentence, cited statement, or distilled judgment that should slow the reader down.

### Code Panel

Default to clean white or lightly tinted panels. Use monospace for code/log content only. Do not use retro window styling.

### Article Figure Block

Use for 16:9 concept illustrations, diagrams, and screenshots. Include caption and optional source-language labels. If Ze appears, follow `references/illustration-usage.md`.

Choose figure placement from the article's content: concepts, methods, comparisons, workflows, and examples are valid insertion points; decorative breaks are not.

Reference images used to define visual direction are not figure assets by default. They can influence line quality, palette, texture, crop rhythm, or density, but their subjects should not be copied, redrawn, or converted into Ze symbols.

Sizing variants:

- Hero spot: large visual anchor paired with page title.
- Side anchor: compact visual supporting a split section.
- Inline figure: 16:9 article concept image.
- Thumbnail: small reference image with no narrative burden.

### Step Flow

Use low-saturation `rough-path` lines and sketch-like connectors. Steps should be compact and scannable.

Use real sequence numbers only when order matters. Avoid numbered section markers as generic decoration.

### Tabs And Accordion

Use accessible buttons, visible focus, and reduced-motion-friendly transitions. Use tabs for tools/resources, accordion for optional details.

Tabs and accordions must be functional in gallery prototypes so motion and states can be judged.

### Motion Components

- Dot cursor.
- Hover lift.
- Line draw.
- Reveal wrapper.
- Animated list rhythm.
- Dot loading.
- Tab transition.
- Accordion transition.

### Empty State

Use short text, one action, and optional Ze only when the empty state benefits from a Builder or Thinking state.

If a page needs visual weight but has no approved image, use a Ze-native diagram, typographic anchor, Dot/path structure, approved Ze figure, or intentional whitespace. Avoid fake image placeholders, plus-sign frames, and generic side panels.

## Reference Components To Exclude From Core

- Avatar clusters as character-like groups.
- Calendar / emoji mood grids.
- Ticket, flight, and hotel cards.
- Old retro window panels.
- Heavy decorative landing sections.
- Flip cards as a default interaction.
- Heavy animated backgrounds, glow borders, glass surfaces, and decorative motion imported from motion libraries.
