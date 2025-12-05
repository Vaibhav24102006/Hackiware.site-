# Implementation Plan - Restore Hackiware Aesthetics

## User Review Required
- **Visual Changes**: Significant changes to Header and Hero sections to match "old Hackiware" and "Anant Vega" styles.
- **Dependencies**: Ensuring `@splinetool/runtime`, `@splinetool/react-spline`, `framer-motion` are installed.

## Proposed Changes

### UI Components
#### [NEW] src/components/ui
- `spline.tsx`: Spline 3D scene component with lazy loading.
- `spotlight-aceternity.tsx`: Aceternity spotlight component.
- `spotlight-ibelick.tsx`: IBelick spotlight component.

### Layout
#### [MODIFY] src/components/layout/Header.jsx
- Rebuild to match "Anant Vega" styling.
- Glassmorphism, neon hover, sticky positioning, specific logo assets.

### Sections
#### [MODIFY] src/components/sections/Hero.jsx
- Integrate `SplineScene` on the right logic.
- Restore parallax mouse, scroll depth, Z-motion.
- Update styling for transparency and neon glow.

### Global Styles
#### [MODIFY] src/index.css / tailwind.config.js
- Ensure dark theme, neon colors, and animations are available.
