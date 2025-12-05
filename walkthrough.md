# Walkthrough - Hackiware Aesthetics Restoration

## Changes Overview

### 1. **Header Component (`src/components/layout/Header.tsx`)**
- Rebuilt to match **Anant Vega** specifications.
- Added **Glassmorphism** (backdrop-blur, transparency).
- **Sticky positioning** with border/shadow on scroll.
- **Neon hover effects** on navigation links.
- Updated logo assets to use `logo-icon.jpg` and `logo-full.jpg`.

### 2. **Hero Section (`src/components/sections/Hero.tsx`)**
- **Spline 3D Integration**: Added `SplineScene` on the right side.
- **Parallax Effects**: Text and 3D scene move with mouse (reversed for depth).
- **Spotlight**: Added responsive spotlight effect.
- **Micro-interactions**: Hover effects on buttons and text.

### 3. **Services / Capabilities (`src/components/sections/Services.tsx`)**
- **Wider Layout**: Increased max-width and adjusted grid to prevent edge-touching.
- **Spline Integration**: Added 3D robot or scene placeholder.
- **Neon Styling**: Enhanced border and hover glows.

### 4. **UI Components (`src/components/ui/`)**
- **Spline**: `spline.tsx` (Lazy loaded Spline wrapper).
- **Spotlight**: `spotlight-ibelick.tsx` (Mouse tracking spotlight) and `spotlight-aceternity.tsx` (Static spotlight).

### 5. **Motion Presets**
- Created `src/lib/motion-presets.ts` with reusable animations.

## Verification
- **Build Status**: `npm run build` should pass (dependencies installed).
- **Visuals**: Check for dark theme, neon cyan/green accents, and smooth scrolling.
