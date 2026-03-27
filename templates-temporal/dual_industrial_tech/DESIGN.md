# Design System Document: Industrial Precision & Digital Depth

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Monolith."** 

In the world of heavy construction and asphalt, value is found in density, durability, and precision. This system moves away from the "airy" feel of generic SaaS to embrace a high-end, industrial aesthetic that feels engineered rather than just "designed." We achieve this through a "Deep Surface" philosophy—using dark, layered navy tones and glassmorphism to create a sense of looking *into* a complex machine. The interface should feel like a high-tech command center: authoritative, sophisticated, and unbreakable.

By rejecting standard dividers and embracing asymmetric layouts, we create an editorial experience that signals a premium tier of service. We don't just display data; we build digital structures.

---

## 2. Color & Surface Architecture
The palette is rooted in the "After-Hours Industrial" spectrum—deep navies and obsidian blacks that provide a high-contrast stage for vibrant blue telemetry.

### Palette Highlights
- **Base:** `surface` (#0e1322) and `surface_container_lowest` (#090e1c) form our bedrock.
- **Accents:** `primary` (#adc6ff) and `secondary_container` (#0267b8) are used sparingly to highlight critical paths and data.
- **The "No-Line" Rule:** Explicitly prohibit the use of 1px solid borders for sectioning. Boundaries must be defined by background shifts (e.g., a `surface_container_low` card sitting on a `surface` background). This forces a more sophisticated, tonal layout.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Tier 1 (Foundation):** `surface` (#0e1322). Use for the main application background.
- **Tier 2 (Navigation/Sidebars):** `surface_container_low` (#161b2b).
- **Tier 3 (Primary Cards/Content):** `surface_container` (#1a1f2f).
- **Tier 4 (Floating Modals/Active States):** `surface_container_highest` (#2f3445) with a 20px `backdrop-blur`.

### The "Glass & Gradient" Rule
To inject "soul" into the industrial framework, use subtle gradients for main CTAs transitioning from `primary` (#adc6ff) to `primary_container` (#4d8eff). Floating elements must utilize Glassmorphism: semi-transparent versions of `surface_variant` (#2f3445) at 60% opacity with a blur effect to maintain depth.

---

## 3. Typography: The Engineering Font Stack
We use a dual-typeface system to balance technical precision with modern readability.

- **Display & Headlines (Space Grotesk):** This is our "Industrial Voice." Space Grotesk offers a mechanical, wide-set feel that mimics architectural blueprints.
    - *Usage:* `display-lg` (3.5rem) and `headline-md` (1.75rem) should be used for bold, confident statements and section headers.
- **Body & Labels (Inter):** The "Functional Voice." Inter provides maximum legibility for complex data and operational text.
    - *Usage:* `body-md` (0.875rem) for standard content; `label-sm` (0.6875rem) for technical metadata.

**Editorial Tip:** Use high-contrast sizing. Pair a massive `display-sm` headline with a tiny, all-caps `label-md` subheading to create an "Industrial Magazine" layout.

---

## 4. Elevation & Depth
In this system, depth is a function of light and material, not drop shadows.

- **Tonal Layering:** Avoid shadows for static cards. Instead, use the `surface-container` tiers to "lift" elements. A `surface_container_high` (#25293a) object on a `surface_dim` background provides all the separation needed.
- **Ambient Shadows:** For floating elements (Modals/Popovers), use a "Deep Blue" shadow.
    - *Spec:* `0px 24px 48px -12px rgba(0, 46, 106, 0.25)`. This mimics natural light reflecting off navy surfaces.
- **The Ghost Border:** If a boundary is required for accessibility, use `outline_variant` (#424754) at **15% opacity**. It should be felt, not seen.
- **Subtle Grid Texture:** On large `background` areas, overlay a 32px square grid of 1px lines using `outline` (#8c909f) at **5% opacity**. This reinforces the "Construction/CAD" theme.

---

## 5. Component Guidelines

### Buttons (The "Control Units")
- **Primary:** Gradient fill (`primary` to `primary_container`), `DEFAULT` (8px) roundedness. No border. Text color: `on_primary`.
- **Secondary:** Glassmorphism style. `surface_variant` at 20% opacity, 12px blur, and a "Ghost Border."
- **Interaction:** On hover, increase `surface_bright` exposure by 10%.

### Cards & Lists (The "Modules")
- **Forbid Dividers:** Never use a line to separate list items. Use 12px (`spacing-3`) of vertical space or a subtle background shift to `surface_container_low`.
- **Nesting:** Place a `surface_container_highest` header within a `surface_container` card to create a "header block" feel without lines.

### Input Fields
- **Style:** Filled style using `surface_container_highest`. 
- **Focus State:** No thick glow. Use a 1px `primary` bottom-border only, or a subtle change in background opacity.
- **Corner Radius:** `sm` (4px) for a more technical, precise appearance.

### Industrial-Specific Components
- **The "Blueprint" Progress Bar:** Use a `primary` color bar with a repeating diagonal stripe pattern (at 10% opacity) to mimic construction tape or technical drawings.
- **Status Chips:** Use `secondary_container` (#0267b8) for "In Progress" with a subtle pulse animation.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetry:** Place a large headline on the left and a small technical label on the far right to break the "SaaS template" feel.
- **Embrace Negative Space:** Use `spacing-16` (4rem) or `spacing-24` (6rem) between major sections to let the industrial elements "breathe."
- **Use "On-Surface-Variant" for Secondary Text:** Keep the hierarchy clear by using `on_surface_variant` (#c2c6d6) for descriptions.

### Don't:
- **Don't use 100% Black:** Pure black (#000000) feels "cheap" and digital. Always use `surface_container_lowest` (#090e1c) for the deepest tones.
- **Don't use Rounded Corners > 12px:** Anything more "bubbly" than `lg` (1rem) destroys the professional, industrial tone.
- **Don't use standard Shadows:** If it looks like a standard Material Design shadow, it’s too generic. Refer to the Ambient Shadow spec.