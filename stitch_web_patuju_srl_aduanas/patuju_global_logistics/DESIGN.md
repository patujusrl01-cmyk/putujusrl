---
name: Logistics Prestige
colors:
  surface: '#f8faf4'
  surface-dim: '#d8dbd5'
  surface-bright: '#f8faf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4ef'
  surface-container: '#ecefe9'
  surface-container-high: '#e6e9e3'
  surface-container-highest: '#e1e3de'
  on-surface: '#191c19'
  on-surface-variant: '#404941'
  inverse-surface: '#2e312e'
  inverse-on-surface: '#eff2ec'
  outline: '#707971'
  outline-variant: '#c0c9bf'
  surface-tint: '#2a6a45'
  primary: '#004324'
  on-primary: '#ffffff'
  primary-container: '#1a5c38'
  on-primary-container: '#90D2A5'
  inverse-primary: '#93d5a7'
  secondary: '#b02d21'
  on-secondary: '#ffffff'
  secondary-container: '#fc6451'
  on-secondary-container: '#650001'
  tertiary: '#293b4d'
  on-tertiary: '#ffffff'
  tertiary-container: '#405265'
  on-tertiary-container: '#b2c5dc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#aef2c2'
  primary-fixed-dim: '#93d5a7'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#0b522f'
  secondary-fixed: '#FFDAD5'
  secondary-fixed-dim: '#ffb4a9'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#8e130c'
  tertiary-fixed: '#d1e4fc'
  tertiary-fixed-dim: '#b6c8df'
  on-tertiary-fixed: '#091d2e'
  on-tertiary-fixed-variant: '#36485b'
  background: '#f8faf4'
  on-background: '#191c19'
  surface-variant: '#e1e3de'
  logistics-green-dark: '#004324'
  surface-light: '#F5F5F5'
  border-subtle: '#E0E0E0'
typography:
  headline-xl:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-xs:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  section-padding: 80px
  gutter: 24px
  stack-lg: 32px
  stack-md: 16px
  stack-sm: 8px
---

## Brand & Style

The brand identity centers on **Executive Reliability** and **Operational Excellence**. It targets high-stakes importers and exporters who require security, legal certainty, and efficiency in the Bolivian market. 

The visual style is **Corporate / Modern** with a high-contrast authoritative palette. It utilizes sharp structural alignments, crisp typography, and intentional use of deep "Logistics Green" to evoke stability, complemented by "Alert Red" to signal urgency and action. The aesthetic is clean and professional, prioritizing information density and trust through a balanced use of white space and heavy, bold accents.

## Colors

The color palette is rooted in industry-standard symbolism:
- **Primary (Logistics Green):** Represents growth, legality, and the "go" signal of clear customs. Used for headers, primary icons, and brand-heavy sections.
- **Secondary (Alert Red):** Used sparingly but powerfully for high-priority Call to Actions (CTAs), top-bar alerts, and structural accents like card borders.
- **Tertiary (Deep Navy):** Provides a professional grounding for secondary text and specialized data.
- **Neutral (Surface Light/White):** A clean backdrop that ensures the high-contrast brand colors remain legible and authoritative. 

Backgrounds utilize a layered approach: `White` for interactive elements and `Surface Light` (#F5F5F5) for section separation.

## Typography

The system uses a pairing of **Montserrat** for display roles and **Inter** for functional text.
- **Montserrat** provides a geometric, bold, and urban feel necessary for headlines to command attention.
- **Inter** is used for its exceptional legibility in dense logistical data, forms, and body copy.
- **Hierarchical Contrast:** Use uppercase `label-bold` or `label-xs` for secondary metadata and eyebrow titles to create a distinct rhythmic break from standard body text.

## Layout & Spacing

The design follows a **Fixed Grid** philosophy for desktop, centered on a 1280px max-width container to maintain a professional, organized appearance.
- **Vertical Rhythm:** Sections are separated by a generous 80px padding to allow the high-contrast elements room to breathe.
- **Internal Spacing:** Components use a tight 8px-base spacing system (8, 16, 24, 32) to reinforce a sense of precision and order.
- **Mobile Adaptivity:** On mobile devices, side margins shrink to 16px, and multi-column grids collapse to a single column. The hero typography scales down significantly to ensure the message remains above the fold.

## Elevation & Depth

Depth is achieved through **Tonal Layering** and **Subtle Direct Shadows**.
- **Surface Contrast:** Interchanging `White` and `Surface Light` sections defines the content structure without needing heavy lines.
- **Shadows:** A very soft `shadow-sm` is used for cards and headers to lift them slightly off the background. 
- **Interactive Depth:** On hover, cards transition to `shadow-md` and buttons may scale down slightly (95%) to simulate a physical "click" feel.
- **Overlays:** Dark green semi-transparent overlays (75% opacity) are used on imagery to ensure text legibility while maintaining brand presence.

## Shapes

The shape language is **Conservative and Functional**.
- **Standard Radius:** A minimal 0.125rem (2px) radius is applied to buttons and form inputs, maintaining a sharp, professional edge.
- **Large Radius:** Cards and section images use a 0.25rem (4px) to 0.5rem (8px) radius to soften the composition slightly without losing the corporate feel.
- **Circle Elements:** Step indicators and status icons utilize full circles to provide visual contrast against the otherwise rectangular grid.

## Components

- **Buttons:** Primary buttons are solid "Alert Red" with sharp corners and white text. Secondary buttons use a "White" background with red text or a white border over image overlays.
- **Cards:** Feature a 4px top-border in "Alert Red" to create a distinct "file folder" or "document" aesthetic, reinforcing the customs/paperwork nature of the business.
- **Input Fields:** Use a standard white background with a `border-subtle` (#E0E0E0). Focus states transition to a 2px "Logistics Green" ring.
- **Process Steps:** Represented by large circular numbers in "Alert Red," connected by subtle horizontal lines on desktop to imply a chronological workflow.
- **Icons:** Use "Material Symbols Outlined" with a consistent 400 weight. Use brand colors for icons to link them to specific service categories.
- **Sticky Header:** Remains persistent with a white background and a subtle bottom border for constant navigation accessibility.