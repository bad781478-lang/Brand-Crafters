# Homepage Technical Audit Report

## Overall Health Score: 72/100
**Reasoning**: The homepage boasts a highly sophisticated visual design with complex GSAP animations and a physics-based footer. However, fundamental Single Page Application (SPA) principles are violated by using native navigation methods for internal links, which forces full page reloads and destroys state. Additionally, there are significant performance bottlenecks (continuous physics engine loop, late lazy-loading of heavy assets) and high-risk media handling (hardcoded signed URLs).

---

## Findings

### 1. [Critical] React Routing / SPA Breakage (Category: JavaScript runtime errors and bugs)
- **LOCATION**: `src/components/OurServicesSection.jsx` (Lines 177, 185)
- **PROBLEM**: Service cards use a `<div onClick={() => window.location.href = ...}>` pattern instead of React Router's `<Link>`. 
- **IMPACT**: Clicking a service card completely breaks the SPA experience, forcing a hard page reload. This destroys application state, causes a flash of unstyled content, and creates poor perceived performance. Furthermore, search engines cannot easily crawl these div-based links.
- **FIX**: Replace the `div` wrapper with a `react-router-dom` `<Link to={...}>` and remove the custom `onClick` and `onKeyDown` window navigation logic.

### 2. [Critical] Native Anchor Tags for Internal Routing (Category: JavaScript runtime errors and bugs)
- **LOCATION**: `src/components/PlayaFooter.tsx` (Lines 295, 317, 331, 351, 352)
- **PROBLEM**: The footer uses standard HTML `<a>` tags for internal routes (e.g., `<a href="/about">`).
- **IMPACT**: Similar to the issue above, clicking any footer link causes a full page reload rather than client-side routing, defeating the purpose of using React Router.
- **FIX**: Import `Link` from `react-router-dom` and replace all internal `<a>` tags with `<Link to="...">`.

### 3. [High] Hardcoded Signed URLs for Media (Category: Network and resource errors)
- **LOCATION**: `src/components/StickyCinematicGrid.jsx` (Lines 18, 52, 57)
- **PROBLEM**: Videos are served from Supabase using signed URLs containing secure tokens in the frontend code (`token=...`).
- **IMPACT**: Although the expiration is set far into the future (year 2126), if the bucket configuration changes, signing keys are rotated, or tokens are invalidated, these videos will break permanently without a code update. Hardcoding signed tokens is a security and maintainability risk.
- **FIX**: Change the Supabase bucket/folder to "Public" and use the standard public URL, OR fetch these signed URLs dynamically from a secure backend on load.

### 4. [High] Unpaused Physics Engine Loop (Category: Performance and Core Web Vitals)
- **LOCATION**: `src/components/PlayaFooter.tsx` (PhysicsPlayground component)
- **PROBLEM**: `Matter.js` is instantiated and runs a continuous `requestAnimationFrame` loop via `Runner.run()`. It only checks if it has *entered* the viewport once, but it never pauses the physics engine when the footer goes *out* of view.
- **IMPACT**: Massive CPU drain and battery consumption on mobile devices while the user is scrolling through the rest of the heavy homepage, reducing overall FPS and scroll smoothness.
- **FIX**: Utilize the `IntersectionObserver` to call `Runner.stop(runner)` when `inView` is false, and `Runner.start(runner, engine)` when `inView` is true.

### 5. [High] Mobile Viewport Height Clipping (Category: Mobile and responsive issues)
- **LOCATION**: `src/components/Hero.jsx` (Line 15)
- **PROBLEM**: The hero section uses the Tailwind class `h-screen` (`100vh`).
- **IMPACT**: On mobile browsers (Safari/Chrome on iOS/Android) with dynamic address bars, `100vh` extends underneath the browser UI. This causes the bottom text ("Shaping modern brands...") to be cut off or requires the user to scroll slightly to see the hero section properly.
- **FIX**: Replace `h-screen` with `h-[100dvh]` to account for dynamic viewport heights.

### 6. [Medium] Late Lazy-Loading of Heavy Assets (Category: Performance and Core Web Vitals)
- **LOCATION**: `src/pages/Home.jsx` (Line 62)
- **PROBLEM**: The `DeferredSection` wrapping the `BusinessTrackSection` has a `rootMargin` of `"0px 0px"`.
- **IMPACT**: This section contains 4 videos and massive GSAP scroll-pinning logic. Because it only begins rendering at the exact pixel it enters the viewport, it can cause severe main-thread blocking and scroll jank just as the user reaches it.
- **FIX**: Increase the `rootMargin` to `"1200px 0px"` or similar so the chunk is fetched, parsed, and rendered before the user actually scrolls to it.

### 7. [Medium] Missing ARIA State on Mobile Menu (Category: Accessibility)
- **LOCATION**: `src/components/Navbar.jsx` (Line 161)
- **PROBLEM**: The mobile hamburger menu `<button>` lacks the `aria-expanded` attribute.
- **IMPACT**: Screen reader users have no programmatic way of knowing whether the mobile navigation menu is currently open or closed when they focus the button.
- **FIX**: Add `aria-expanded={isMenuOpen}` to the button element.

### 8. [Medium] Decorative Background Text Read by Screen Readers (Category: Accessibility)
- **LOCATION**: `src/components/HowItWorksSection.jsx` (Line 123)
- **PROBLEM**: The large background numbers (01, 02, etc.) in the step cards are decorative but lack `aria-hidden="true"`.
- **IMPACT**: Screen readers will read the number separately from the content, potentially causing confusion (e.g., "01 Start with discovery... 01").
- **FIX**: Add `aria-hidden="true"` to the `div` containing the large background number.

### 9. [Low] Missing Canonical URL (Category: SEO technical issues)
- **LOCATION**: `index.html` (Head section)
- **PROBLEM**: The site lacks a `<link rel="canonical">` tag.
- **IMPACT**: Search engines might index multiple versions of the site (HTTP/HTTPS, WWW/non-WWW, trailing slash), diluting SEO ranking power.
- **FIX**: Add `<link rel="canonical" href="https://brandcrafters.com/" />` (or the actual domain) to the `<head>` of `index.html`.

---

## Summary Table

| Category | Issue Count | Top Fix |
| :--- | :---: | :--- |
| JavaScript / SPA | 2 | Replace `window.location.href` and native `<a>` tags with React Router `<Link>` components. |
| Performance | 2 | Pause the `Matter.js` physics engine when the footer is not actively intersecting the viewport. |
| Network / Media | 1 | Remove hardcoded Supabase signed URL tokens for video assets. |
| Mobile / Responsive | 1 | Swap `h-screen` for `h-[100dvh]` in the Hero section. |
| Accessibility (a11y) | 2 | Add `aria-expanded` to the mobile menu and hide decorative numbers from screen readers. |
| SEO | 1 | Add a canonical link tag to `index.html`. |
| HTML / CSS | 0 | - |
| Security | 0 | - |
| Forms | 0 | - |
| **Total** | **9** | - |
