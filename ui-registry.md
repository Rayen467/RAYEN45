### BukuBaik Campaign Operations Surface

File: D:\terbaryyy\RAYEN45\index.html
Last updated: 2026-09-05

Direction: trustworthy civic-operational, not inspirational. The page reads as a small
campaign operations hub — structured panels, status badges, spec rows, process steps.
No motivational quote bands, no hero-scale type inside cards, no decorative imagery.

| Property | Value |
| --- | --- |
| Page background | `--page` `#f5f7f6`; alternating bands use `--page-2` `#eef1f0` with `border-block: 1px solid var(--line)` |
| Card surface | `--surface` `#ffffff`, `1px solid var(--line)`, `--shadow-sm` |
| Border radius | `--radius` `10px` for cards/panels, `--radius-sm` `6px` for buttons/alerts, `999px` for badges/chips |
| Brand anchor | `--brand` `#14513f`, hover `--brand-dark` `#0e3a2d`, footer `--brand-darker` `#092a20` |
| Verification accents | `--teal` `#0f6b6b` (labels, tick marks, address callout), `--blue` `#1d5f8a` (info badges, focus ring) |
| Warning tone (single) | `--amber-strong` `#b26a00` on `--amber-tint` `#fdf2e0` with `--amber-line` `#e8ce9f` |
| Text | `--ink` `#17201d` primary, `--ink-2` `#3c4744` body, `--muted` `#5d6a66` secondary |
| Type | Manrope for all UI; Alegreya reserved for the brand mark and the H1 only |
| Type scale | h1 `clamp(1.72rem, 6.6vw, 2.35rem)` → 2.7rem desktop; h2 `clamp(1.4rem, 5.2vw, 1.85rem)` → 2rem; card h3 ~1rem; body 15/15.5px |
| Spacing | Section padding `48px` mobile → `60px` (640px) → `76px` (900px); card gap `12–16px`; gutter token `16 / 28 / 32px` |
| Hover state | Color/background shift only (`--brand` → `--brand-dark`); no lift, no scale |
| Focus | `3px solid var(--blue)` outline, `2px` offset |
| Breakpoints | Mobile-first base, then `min-width: 640px` and `min-width: 900px` |

**Component vocabulary**

- `.badge` + `.badge-pending` / `.badge-warn` / `.badge-ok` / `.badge-info` — status
  pills with a leading dot. Pending and warn always carry the amber family.
- `.ph-tag` — dashed uppercase chip marking unverified placeholder data; `.ph-value`
  is the placeholder text it annotates.
- `.spec-list` / `.spec-row` — label/value rows on a 1px grid background (`--line` gaps).
- `.alert` + `.alert-warn` / `.alert-info` — left-rule callouts, 3px accent border.
- `.steps` / `.step` — single bordered container, circular `.step-num` in `--brand-tint`.
- `.ops-panel` — sticky hero status panel (desktop) built entirely from CSS; it replaces
  the previous decorative hero image.

**Pattern notes**

Every unverified data point must show both the placeholder value and a status badge —
never one without the other. Keep hover effects flat, keep amber reserved for warnings
and pending states only, and let trust come from structure (tables, spec rows, badges)
rather than illustration.
