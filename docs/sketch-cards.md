# Sketch cards

How the project thumbnails are drawn, so new ones match. (Also saved as the "portfolio-sketch-cards" skill.)

Each thumbnail is a wireframe of the product drawn as if sketched with a fine pen: a few rounded rectangles for screens, panels, phones or cards, short horizontal lines standing in for text, and one small distinguishing detail (a chart line, a circle button, a dashed arc, a bracket). Nothing is filled except the paper of screens. No icons, no gradients, no text, no faces.

## Fixed conventions

- `viewBox="0 0 380 170"`; keep drawing inside a 40px side margin and 18px top and bottom.
- Strokes come from CSS: `stroke: var(--line)`, width 1.7, round caps and joins, `fill: none`. Do not put `stroke` or `fill` attributes on shapes.
- Paper surfaces get `className="fill"` (filled with `var(--paper)`).
- Radii: screens and panels `rx=5`, tiles `rx=8`, phones `rx=10` to `12`, small buttons `rx=4` or `5`.
- Text stand-ins are `M x y h len` segments 14 to 16px apart, with varied lengths.
- One to three objects per illustration.
- One tint per card via the `tint` field: `sky`, `lavender`, `mint`, `rose`, `yellow`, `peach`. Avoid repeating the neighbour's tint.
- The same SVG is reused in the peek panel at 180px tall, so compose for both.

## Motif vocabulary

- Dashboard: wide panel (about 180x110) with a header rule at y+20 and 3 text lines, plus a small side panel with a zig-zag chart.
- Full-width admin screen: 300x104 panel, header rule, 4 lines on the left, one pill input on the right with a small circle.
- Phone: 88x140 with `rx=12`, 4 lines, one small pill button near the bottom.
- Design system / tokens: four 52x52 tiles with `rx=8`, two short lines under each.
- Multi-brand: three 88x98 cards side by side, two lines and one small unfilled button each.
- Accents (max one): zig-zag chart `M x y l16-14 14 9 20-20 18 12`; dashed arc `strokeDasharray="3 6"`; a pair of angle brackets; a small circle.

## Example

```tsx
Sketch: () => (
  <svg viewBox="0 0 380 170" aria-hidden="true">
    <rect className="fill" x="40" y="30" width="180" height="110" rx="5" />
    <path d="M40 50h180M58 70h56M58 84h76M58 98h46" />
    <rect className="fill" x="240" y="58" width="100" height="62" rx="5" />
    <path d="M250 94l16-14 14 9 20-20 18 12" />
    <circle cx="150" cy="118" r="7" />
  </svg>
),
```
