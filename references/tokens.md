# Tokens

Use these as the final baseline tokens. Future work should treat them as the current source of truth unless the user explicitly asks to revisit the visual direction.

## Color Tokens

```css
:root {
  --ze-canvas: #ffffff;
  --ze-wash: #f7f7f5;
  --ze-surface: #ffffff;
  --ze-ink: #141414;
  --ze-ink-soft: #343434;
  --ze-muted: #6f716c;
  --ze-faint: #a8aaa4;
  --ze-line: #dedfd9;
  --ze-line-strong: #bfc1ba;

  --ze-blue-text: #476a80;
  --ze-blue-bg: #eef5f8;
  --ze-violet-text: #6b627b;
  --ze-violet-bg: #f2eff7;
  --ze-amber-text: #80652d;
  --ze-amber-bg: #f8f1df;
  --ze-rose-text: #875d66;
  --ze-rose-bg: #f7eeee;
  --ze-green-text: #61745f;
  --ze-green-bg: #eef4ee;
  --ze-orange-text: #8a5b2d;
  --ze-orange-bg: #f7eee6;

  --ze-focus: #1f1f1f;
  --ze-shadow-soft: 0 10px 28px rgba(20, 20, 20, 0.08);
  --ze-ease-out: cubic-bezier(0.22, 1, 0.36, 1);

  --ze-label-title-gap: 20px;
  --ze-title-line-gap: 16px;
  --ze-line-body-gap: 18px;
}
```

## Line Material Profiles

Ze Rough Line profiles are implementation guidance for SVG/canvas output. Read `references/line-language.md` for usage rules.

| Token | Role | Rough profile |
| --- | --- | --- |
| `rough-hairline` | Normal borders, section frames, figure frames, quiet separators. | `roughness: 0.8-1.2`, `bowing: 0.4-0.9`, `strokeWidth: 1.2-1.8` |
| `rough-pencil` | Dividers, underlines, callout separators, article annotation paths. | `roughness: 1.2-1.7`, `bowing: 0.9-1.4`, `strokeWidth: 1.8-2.4` |
| `rough-strong` | Selected controls, CTAs, tool modules. Use sparingly. | `roughness: 1.4-2.0`, `bowing: 1.0-1.6`, `strokeWidth: 2.2-3.0` |
| `rough-path` | Dot paths, conceptual flows, article figures, relation diagrams. | `roughness: 1.1-1.6`, `bowing: 1.0-1.8`, `strokeWidth: 1.8-2.6` |

Use deterministic seeds for reusable gallery and design-system output. Use `scripts/generate-rough-lines.mjs` when a static dependency-free SVG line is enough; use Rough.js directly when the target project already supports it.

## Typography

- Base stack: `Inter`, `PingFang SC`, `Microsoft YaHei`, `Helvetica Neue`, Arial, sans-serif.
- Avoid decorative font changes as the main brand device.
- Use generous but compact reading rhythm.
- Do not use negative letter spacing.
- Use `text-wrap: balance` for large headings when supported.

Suggested scale:

- Display: `clamp(42px, 6vw, 76px)`
- Page title: `clamp(34px, 4.5vw, 56px)`
- Section title: `clamp(24px, 3vw, 36px)`
- Card title: `18px-22px`
- Body: `16px-18px`
- Metadata: `12px-14px`

## Radius, Spacing, Shadow

- Prefer 0-8px radius for most UI.
- Use 12px only for larger framed modules.
- Avoid pill shapes except tags, filters, and small status markers.
- Prefer borders and tint over shadow.
- Use shadow only for floating overlays, modals, or gallery demonstration cards.
- Never pair a wide soft shadow with a decorative border as the default card treatment.
- Keep label-to-title spacing consistent. Do not fix cramped labels with one-off inline styles.

## Focus And Cursor

- Focus ring: 2px visible outline using `--ze-focus`.
- Dot cursor/focus point may be used as a progressive enhancement on fine-pointer devices.
- Custom cursor must not obscure text selection or form controls.

## Motion

- Use opacity and transform.
- Use 120-220ms for hover/focus feedback and 360-520ms for entrance/reveal.
- Avoid bounce, elastic, animated width/height, and infinite decorative loops.
- Honor `prefers-reduced-motion`.
