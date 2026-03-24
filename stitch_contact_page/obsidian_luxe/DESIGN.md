# Design System: Ultra-Premium Noir Narrative

## 1. Overview & Creative North Star: "The Cinematic Shadow"
This design system is not a utility; it is an atmosphere. Our Creative North Star is **"The Cinematic Shadow."** We aim to replicate the experience of a high-end luxury flagship at midnight—where light doesn't just illuminate, it "reveals." 

To break the "template" look, we move away from rigid, centered grids in favor of **Intentional Asymmetry**. Large-scale typography should overlap image containers, and white space (negative space) should be treated as a luxury material itself. We use depth, liquid glass, and gold-tinted light to create a UI that feels curated, not programmed.

---

## 2. Colors & Surface Philosophy
The palette is built on deep blacks and liquid golds, prioritizing tonal depth over structural lines.

### The Palette
*   **Primary (Gold):** `#e9c176` (Use for high-intent CTAs and focal micro-interactions).
*   **Background/Surface:** `#131313` (The infinite canvas).
*   **On-Surface:** `#e2e2e2` (Softened white to prevent optical vibration against black).

### The "No-Line" Rule
Explicitly prohibit 1px solid borders for sectioning. Structural boundaries must be defined solely through background shifts. 
*   Transition from `surface` to `surface-container-low` to define a new content block.
*   Use `surface-container-highest` for nested elements to create a natural "lift."

### Glass & Gradient Rule
Floating elements (Modals, Navbars, Hover Cards) must utilize **Glassmorphism**.
*   **Fill:** `surface-variant` at 40-60% opacity.
*   **Effect:** `backdrop-filter: blur(20px)`.
*   **Signature Polish:** Apply a subtle linear gradient to main CTAs transitioning from `primary` (`#e9c176`) to `primary-container` (`#c5a059`).

---

## 3. Typography: The Editorial Contrast
We pair the historical authority of a serif with the industrial precision of a sans-serif.

*   **Display & Headline (Cormorant Garamond):** Our "Voice of Luxury." Use these for editorial statements. High contrast and elegant curves.
    *   *Scale:* `display-lg` (3.5rem) to `headline-sm` (1.5rem).
*   **Titles & Body (Inter):** Our "Voice of Precision." Used for functional clarity.
    *   *Scale:* `title-lg` (1.375rem) down to `body-sm` (0.75rem).
*   **Accents (Bebas Neue):** Reserved for "Label" status, navigation links, or uppercase sub-headers to provide a modern, fashion-forward edge.

---

## 4. Elevation & Depth: Tonal Layering
In this system, depth is biological, not mathematical.

*   **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. A `surface-container-lowest` card placed on a `surface` background creates a "sunken" premium feel.
*   **Ambient Shadows:** Use extra-diffused shadows. 
    *   *Spec:* `0px 20px 40px rgba(0, 0, 0, 0.4)`. 
    *   Shadows should never be grey; they should be a darkened tint of the background to simulate light absorption.
*   **The "Ghost Border" Fallback:** If containment is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque borders.
*   **Neon Edges:** For active states or "New In" items, use a 1px inner-glow using the `primary` color at 30% opacity to mimic a backlit glass edge.

---

## 5. Components

### Floating Navbars
Navbars must never touch the top of the viewport. They are floating glass capsules.
*   **Style:** `surface-container` at 50% opacity, `backdrop-filter: blur(12px)`, `rounded-full`.
*   **Interaction:** On scroll, the background opacity increases to 80% to maintain legibility.

### Animated Buttons
*   **Primary:** Solid `primary` gradient fill. On hover, a "liquid" gold glow (`soft glow`) expands behind the button.
*   **Secondary:** Ghost variant. No fill, `outline-variant` at 20% opacity. On hover, the border animates into a `primary` gradient "neon edge."

### Glass Cards & Lists
*   **Constraint:** Zero dividers. Use vertical spacing (Scale `10` or `12`) to separate items.
*   **Visuals:** Cards use `surface-container-low` with a 10% `outline-variant` "Ghost Border."
*   **Micro-interaction:** On hover, cards should subtly scale (1.02x) and increase backdrop blur intensity.

### Input Fields
*   **Style:** Minimalist underline using `outline-variant`. 
*   **Active State:** Underline transforms into a `primary` gold line with a soft `3px` glow.
*   **Typography:** Labels use `label-md` (Inter) in uppercase with 0.1em letter spacing.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetry:** Place a `display-lg` heading off-center to create an editorial, high-fashion layout.
*   **Embrace the Dark:** Allow large areas of `#131313` to exist without content to create a sense of "prestige."
*   **Subtle Motion:** Use 0.6s "Ease-Out" transitions for all glass effects to simulate heavy, expensive material.

### Don't:
*   **Don't use pure white (#FFFFFF) for body text:** It is too harsh. Stick to `on-surface` (`#e2e2e2`).
*   **Don't use standard shadows:** Avoid small, harsh shadows. If it doesn't look like ambient light, remove it.
*   **Don't use sharp corners:** Even in a "Noir" theme, we use `DEFAULT` (0.25rem) or `md` (0.375rem) roundedness to suggest the "liquid" nature of glass.
*   **Don't crowd the UI:** If a screen feels full, it is no longer luxury. Increase spacing scale values by one tier.