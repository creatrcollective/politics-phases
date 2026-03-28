# Polity Phase Map — UI Design Notes

## Design Philosophy

Light-mode-first, system-aware. Clean and minimal — the content (phase data, graph structure) is the focus. Dark mode inverts the palette using the same variable names. No frameworks, no build step.

---

## Color Palette

### Phase node colors (six families)

Each phase belongs to a color family. Variables follow a `--{color}-{fill|stroke|text}` pattern. `fill` is the node background, `stroke` is the border and accent, `text` is the label color.

| Family  | Stroke (light) | Phases using it                          |
|---------|---------------|------------------------------------------|
| purple  | `#534AB7`     | Formation, Autocratic consolidation      |
| teal    | `#0F6E56`     | Consolidation, Managed succession        |
| blue    | `#185FA5`     | Mature stability                         |
| amber   | `#BA7517`     | Strain / overreach, Repression           |
| green   | `#3B6D11`     | Reform / adaptation                      |
| red     | `#A32D2D`     | Crisis / collapse, Terminal decay        |

Dark mode uses deeper fills and lighter strokes/text from the same hue family.

### Surface / neutral

| Variable        | Light      | Dark       | Usage                   |
|-----------------|-----------|-----------|-------------------------|
| `--bg`          | `#ffffff`  | `#1e1e1c` | Page background         |
| `--bg-secondary`| `#f6f5f1`  | `#2a2a28` | Map container, edge legend |
| `--text`        | `#1a1a18`  | `#e8e6de` | Body text               |
| `--text-muted`  | `#6b6a65`  | `#9c9a92` | Labels, secondary text  |
| `--border`      | `rgba(0,0,0,0.12)` | `rgba(255,255,255,0.12)` | All borders |

### Branch badge colors

Branch badges in the detail panel use the same color families mapped to severity:

| Severity  | Variables                                                      |
|-----------|----------------------------------------------------------------|
| positive  | `--branch-positive-{bg,text,border}` → green family           |
| warning   | `--branch-warning-{bg,text,border}` → amber family            |
| danger    | `--branch-danger-{bg,text,border}` → red family               |
| info      | `--branch-info-{bg,text,border}` → blue family                |

---

## File Structure

```
polity-phase-map/
  polity-phase-map.html   — Structure only: SVG container, detail panel skeleton
  polity-phase-map.css    — All CSS custom properties, layout, node/panel styles
  polity-phase-map.js     — Phase data, SVG builder, interaction logic
```

No external dependencies. No CDN calls.

---

## SVG Graph

- Coordinate space: 680 × 540 px, `viewBox` scales to container width
- Node size: 158 × 52 px, `rx=8`
- Nodes built programmatically via `document.createElementNS` — not hardcoded in HTML
- Edges: `<line>` for straight paths, `<path>` with quadratic bezier for diagonals
- Arrowheads: two SVG `<marker>` defs — one neutral (`--text-muted`), one red for dangerous edges
- Dangerous edges: red `#A32D2D` stroke
- Rare edges: `stroke-dasharray: 5 3`, 0.8px weight
- Bidirectional edge pairs are offset 5px perpendicular to avoid overlap

---

## Detail Panel

Four-quadrant grid below the SVG:

```
┌─────────────────────────────────────────────┐
│ Phase name (colored)                        │
│ Description                                 │
│ Axis bars: Legitimacy / Capacity / Distribution │
├─────────────────┬───────────────────────────┤
│ Diagnostic      │ Branching options         │
│ markers         │ (left-border badges)      │
├─────────────────┼───────────────────────────┤
│ Key feedback    │ Historical examples       │
│ loop            │                           │
└─────────────────┴───────────────────────────┘
```

Branch badges use a left border (3px) in the severity color, not a full background pill — keeps them legible in both light and dark mode.

Axis bars: filled with `--{color}-stroke` of the active phase, track is `--border`.

---

## Interaction

- Click node → highlight, dim others to 0.35 opacity, render panel
- Click active node → deselect, restore all opacities, hide panel
- "We are here" pin → dashed ring around node, persisted to `localStorage`
- No tooltips — everything goes in the detail panel

---

## Icons

No icon library used. Semantic indicators are conveyed through color and text (branch badges, edge styles). The edge legend uses CSS `background-image` to fake a dashed line for the "rare" indicator.

---

## Wharfinger design system — what was reused

- CSS custom property pattern (`--variable-name` everywhere, no hardcoded hex in component rules)
- Color-as-hierarchy principle: brighter/saturated strokes draw attention, fills recede
- Semantic severity mapping (positive/warning/danger/info) for branch badges
- `--bg-secondary` for container backgrounds distinct from page
- `--text-muted` for secondary labels, `--border` for all dividers
- Dark mode via `@media (prefers-color-scheme: dark)` on `:root`

## What was not used

- Phosphor icons (no build step available; not needed)
- PrimeVue components and overrides
- Ocean gradient palette (this project uses the political phase color families instead)
- Dark-mode-first orientation (this project is light-mode-first per spec)
