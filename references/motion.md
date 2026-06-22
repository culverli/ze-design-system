# Motion

## Principles

- Motion should clarify state or guide attention.
- Use gentle opacity and transform changes.
- Avoid bounce, elastic, infinite decorative loops, and layout-changing animations.
- Always support `prefers-reduced-motion`.
- Content must remain visible without JavaScript. Reveal motion enhances content; it must not be required to see content.

## Final Motion Baseline

- Dot cursor is allowed as a progressive enhancement on fine-pointer devices.
- Hover should use transform, color, and border shifts rather than layout-changing padding shifts.
- Reveal is allowed for editorial/gallery rhythm, but not as a requirement for content visibility.
- Tabs, accordion, loading, and list rhythm are part of the component contract.
- Motion remains quiet and stateful; it should never become spectacle.

## Patterns

### Dot Focus

Dot can appear beside focused links, active tabs, current sections, or loading states.

Dot can also be used as a cursor enhancement on fine-pointer devices. It must remain a neutral focus point, not an animated companion.

### Hover

Use small text color shifts, border tint shifts, and subtle translate changes.

Recommended range: `translateY(-2px)` to `translateY(-5px)`, 120-220ms, ease-out-quint style easing.

### Reveal

Use only for editorial or landing-like pages. Do not delay app/tool surfaces.

Use varied reveal patterns by content type:

- Hero: one composed entrance.
- Lists: subtle stagger, capped at 500ms total.
- Figures: fade + small y movement.
- Functional surfaces: avoid scroll choreography.

### Loading

Use Dot rhythm or a small path indicator. Do not make Dot a living character.

### Tabs And Accordion

Use clear selected states, short content fade, and icon rotation or Dot movement. State changes should feel responsive, not theatrical.

## Borrowed Motion Ideas

From React Bits, borrow the taxonomy, not the intensity:

- Keep: fade content, animated list rhythm, target cursor idea, scroll reveal idea, stepper motion.
- Avoid: heavy animated backgrounds, glow, liquid, glass, metallic, and infinite ambient effects.

## Accessibility

- Keyboard focus must remain visible without relying on hover.
- Custom cursors must not interfere with selecting text or using form controls.
- Reduced motion should keep focus, selected, expanded, and loading states legible.
