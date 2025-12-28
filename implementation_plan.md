# Implementation Plan - Hackiware UI Fixes & Features

## Goal Description
Fix critical UI layout bugs on the homepage, resolve OAuth login failures for Google/GitHub, and transition the Contact page to a read-only Cybersecurity Blog.

## User Review Required
> [!IMPORTANT]
> The "Contact" page will be replaced by "Blog". Ensure no critical contact functionality is lost. The scope is strictly "Replace".

## Proposed Changes

### Part A: Hero Section Layout Fix
#### [MODIFY] [Hero.jsx](file:///c:/Users/victus/OneDrive/Desktop/Hackiware_old/src/components/sections/Hero.jsx)
- **Refactor**: Change text wrapper to `flex flex-col` for stacking context.
- **Layout**: Ensure animations have reserved space.
- **Cleanup**: Remove absolute positioning on text elements if present.

### Part B: OAuth Fixes
#### [MODIFY] [AuthContext.tsx](file:///c:/Users/victus/OneDrive/Desktop/Hackiware_old/src/context/AuthContext.tsx)
- **Error Handling**: Enhance `catch` block in login functions to map Firebase errors to user-friendly messages.
- **Sync Safety**: Ensure `createUserProfile` is only called if `getUserByUid` returns null (already implemented, but will double-check and add robust error logging).
- **Map Errors**: Create a helper to map `auth/popup-closed-by-user`, etc.

#### [MODIFY] [Login.tsx](file:///c:/Users/victus/OneDrive/Desktop/Hackiware_old/src/pages/Login.tsx)
- **UI**: Add specific error message display.
- **UX**: Disable buttons while loading to prevent double-click.

### Part C: Blog Feature
#### [NEW] [Blog.tsx](file:///c:/Users/victus/OneDrive/Desktop/Hackiware_old/src/pages/Blog.tsx)
- New page component for the Blog feed.
- Fetch from 'posts' collection (type: 'blog').
- Read-only card layout.

#### [MODIFY] [App.tsx](file:///c:/Users/victus/OneDrive/Desktop/Hackiware_old/src/App.tsx)
- **Routes**: Change `/contact` to `/blog`.
- **Navigation**: Update Header (if links are there) or just the route.

#### [MODIFY] [Header.jsx](file:///c:/Users/victus/OneDrive/Desktop/Hackiware_old/src/components/layout/Header.jsx)
- Update "Contact" link to "Blog".

## Verification Plan

### Manual Verification
- **Hero Layout**: Resize window to 375px, 768px, 1024px, 1440px. Check for text overlap.
- **Auth**: Test `signInWithPopup`. Check console for "OAuth error". Verify user creation in Firestore (mock check or console log).
- **Blog**: Navigate to `/blog`. Verify cards load.
