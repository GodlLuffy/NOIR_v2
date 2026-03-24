# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star: "The Digital Atelier"
This design system is not a utility; it is a curated experience. Inspired by the stark, authoritative aesthetic of high-fashion houses like Saint Laurent and the rhythmic layouts of *Vogue*, our Creative North Star is **The Digital Atelier**. 

We move beyond the "template" look by treating every screen as an editorial spread. This system prioritizes negative space as a functional element, uses high-contrast typography to establish a clear voice, and employs a "Less, but Better" philosophy. We break the rigid, centered grid in favor of intentional asymmetry—placing elements in a way that feels discovered rather than placed.

---

## 2. Colors: Tonal Depth & The Gold Thread
The palette is rooted in absolute contrast, utilizing `primary` (#000000) and `surface_container_lowest` (#ffffff) to create a sharp, high-fashion baseline.

### The "No-Line" Rule
To maintain a premium feel, designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through:
- **Background Color Shifts:** Use `surface` (#f9f9f9) against `surface_container_low` (#f3f3f3) to denote separate content blocks.
- **Negative Space:** Use the Spacing Scale (specifically `16` and `20`) to create "voids" that act as invisible dividers.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine papers.
- **Base Level:** `surface` (#f9f9f9)
- **Secondary Level (Nesting):** `surface_container` (#eeeeee) for grouped content.
- **Top Level (Elevated):** `surface_container_highest` (#e2e2e2) for interactive elements like drawers or modals.

### The Gold Thread (Tertiary Accents)
Gold (`tertiary` #4f3700) is used as a "surgical strike." It should only appear in micro-interactions, such as a hover state on a text link or a 1px underline for an active navigation item. Never use gold for large backgrounds or primary buttons.

---

## 3. Typography: The Editorial Voice
Our typography scale creates a tension between the classicism of the Serif and the modernity of the Sans-Serif.

- **Display & Headlines (Noto Serif):** Use `display-lg` through `headline-sm` for storytelling and impact. These should always be `on_surface` (#1a1c1c). Ensure high-contrast serif strokes are visible.
- **Navigation & Body (Work Sans):** Use `title-md` and `body-md` for functional text. Increase `letter-spacing` by 0.05rem for all `label` and `title` tokens to evoke a sense of luxury and breathing room.
- **The Hierarchy Strategy:** Headlines command attention and represent the "Brand Voice," while the wide-spaced Sans-Serif represents "The Curator."

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are largely forbidden. Depth is achieved through "The Layering Principle."

- **Tonal Layering:** Instead of shadows, place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f3f3f3) background. The subtle 1% shift in hex value creates a sophisticated, natural lift.
- **Ambient Shadows:** Only for floating elements (like a "Quick Buy" FAB). Use `on_surface` (#1a1c1c) at 4% opacity with a blur radius of 40px and a Y-offset of 10px. This mimics soft, overhead gallery lighting.
- **The Ghost Border Fallback:** If a border is required for accessibility, use `outline_variant` (#c6c6c6) at 20% opacity. 100% opaque borders are strictly forbidden.
- **Glassmorphism:** For navigation bars and overlays, use `surface` (#f9f9f9) at 80% opacity with a `backdrop-filter: blur(20px)`. This integrates the UI into the photography behind it.

---

## 5. Components: Minimalist Primitives

### Buttons
- **Primary:** Solid `primary` (#000000) with `on_primary` (#e5e2e1) text. Corners are sharp (`0px`). Padding: `1rem 2.75rem`.
- **Secondary:** Transparent background with a `Ghost Border` (outline-variant at 20%). 
- **Tertiary:** Text-only, using `label-md` with an `on_surface` color and a subtle 1px underline that expands on hover.

### Cards & Lists
- **No Dividers:** Forbid the use of line dividers. Use `Spacing Scale 6` (2rem) to separate list items.
- **Asymmetric Cards:** When displaying products, alternate between `surface_container_low` and `surface_container_lowest` backgrounds to create a rhythmic, non-linear flow.

### Input Fields
- **Styling:** Underline-only style using `outline` (#777777). On focus, the line transitions to `primary` (#000000). Labels use `label-sm` and are always uppercase with wide tracking.

### Signature Component: The "Editorial Reveal"
- **The Lookbook Scroll:** A full-width image component using `surface_dim` (#dadada) as a loading state, with `headline-lg` text overlapping the image at a 5% offset to break the grid.

---

## 6. Do’s and Don’ts

### Do:
- **Use "White Space" as a Luxury:** If a section feels crowded, double the spacing value.
- **Embrace Asymmetry:** Offset images and text blocks. Not everything needs to be centered.
- **High-Contrast Imagery:** Only use photography with deep shadows and bright highlights to match the `primary` and `surface` tokens.

### Don't:
- **Don't use Rounded Corners:** Every element must remain at `0px` to maintain the sharp, architectural Saint Laurent aesthetic.
- **Don't use Heavy Shadows:** They look "cheap" and "app-like." Stick to tonal layering.
- **Don't use Gold for CTAs:** Using gold for big buttons devalues the accent. Keep it for highlights only.
- **Don't use Divider Lines:** If you feel the need for a line, use a background color shift instead.