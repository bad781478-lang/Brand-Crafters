Homepage Complete Analysis
1. Overall Website Style Direction
The homepage presents Brand Crafters as a premium, cinematic, motion-heavy branding studio. The visual direction is modern, bold, and editorial, with a strong agency/creative-studio identity. The page feels less like a conventional marketing site and more like a high-impact brand film translated into a scroll experience.

The first impression is driven by a full-screen hero video, white navigation over dark cinematic media, large uppercase typography, and smooth scroll-driven section transitions. The brand perception is premium and technically polished: the site communicates that the studio works across branding, platforms, CGI, digital marketing, and growth strategy.

The visual language uses:

Dark cinematic media in the hero.
Off-white/light grey brand-system storytelling in the second section.
Charcoal black service cards in the third section.
Uppercase condensed headline typography.
Low-opacity text hierarchy.
Rounded media frames and cards.
Scroll-scrubbed horizontal movement and pinned interactions.
Thin borders, glassy overlays, and subtle ambient light.
Visual hierarchy is primarily typography-led. The hero headline, second-section headline, and services headline act as the main attention anchors. Media and motion support the typography rather than replacing it. The page does not use many conventional images in the services section; instead, its premium feel is created through video, animated cards, icons, and motion systems.

2. Global Layout System
The React app mounts a single <main> element in src/App.jsx. The homepage structure is:

Navbar
Hero
BusinessTrackSection
OurServicesSection
The main page uses full-width sections. The hero and services sections are viewport-height experiences, while the business track section dynamically expands its document height to create a long vertical scroll that drives horizontal movement.

The live desktop browser inspection at 1280 x 720 showed:

Hero section height: 720px.
Business section top: directly after hero at 720px.
Business section dynamic rendered height: about 16654px.
Services section rendered as the third <section>, pulled upward by negative margin and pinned during its ScrollTrigger animation.
Total document height after GSAP setup: about 20254px.
Global layout patterns:

Hero: full-screen section with a padded rounded media frame.
Business track: sticky camera with a horizontally translated frame.
Services: dark full-screen section with a max-width inner container and four-column card grid on desktop.
Navbar: fixed on mobile, absolute on desktop.
Spacing is mostly utility-driven through Tailwind classes and custom CSS clamps:

Hero outer padding: p-1.5, sm:p-2, lg:p-2.5; computed desktop padding was 10px.
Navbar desktop inner padding: lg:px-12 lg:py-5; computed logo x-position was 48px.
Business intro container padding: clamp(4.5rem, 9vh, 8rem) top, clamp(2rem, 4vw, 4.5rem) sides, clamp(3.75rem, 8vh, 7rem) bottom.
Services desktop inner container: max-w-[1800px] mx-auto px-4 md:px-8 lg:px-10.
Services card gap: gap-6, computed as 24px.
Layering is deliberate:

Navbar: z-50.
Hero overlay: z-10.
Hero headline wrapper: z-20.
Business section: z-index: 20.
Services section: z-30.
ScrollDownIndicator inside services: z-50.
Overflow behavior:

Hero rounded frame uses overflow-hidden.
Business camera uses overflow: hidden and sticky positioning.
Business section itself keeps vertical overflow visible.
Services cards use overflow-hidden.
Lenis overrides native smooth scrolling and integrates with GSAP ScrollTrigger.
Scroll behavior:

useLenisSmoothScroll creates a Lenis instance unless prefers-reduced-motion: reduce is active.
Lenis settings: duration: 1.25, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.12, syncTouch: false.
GSAP ticker drives Lenis using lenis.raf(time * 1000).
ScrollTrigger.update() runs on Lenis scroll events.
3. Global Typography
Fonts imported in src/index.css:

Inter
Manrope
Oswald
Outfit
Plus Jakarta Sans
Fonts imported again in src/business-track-section/business-track-section.css:

Oswald
Outfit
Caveat
Tailwind config font families:

font-body: Outfit, Manrope, system-ui, "Segoe UI", sans-serif
font-headline: Oswald, Plus Jakarta Sans, Manrope, Apple/system fonts, "Segoe UI", sans-serif
Computed live typography on desktop confirmed:

Body font: Outfit, Manrope, system-ui, "Segoe UI", sans-serif.
Headline utility text: Oswald, "Plus Jakarta Sans", Manrope, ....
Business body text: Outfit, sans-serif.
Business handwritten note: Caveat, cursive, sans-serif.
Hero italic word: browser serif stack ui-serif, Georgia, Cambria, "Times New Roman", Times, serif.
Typography style direction:

Navigation and labels are uppercase, compact, and letter-spaced.
Major headings are uppercase, heavy, condensed, and tightly spaced.
Body copy is smaller, neutral, and often low contrast.
CTA/link text is uppercase and bold.
Special contrast is created by the hero word brands, which remains lowercase and italic while the surrounding hero text is uppercase.
Important computed desktop values:

Navbar logo main: 24.8px, font-weight: 700, letter-spacing: -1.24px, uppercase.
Navbar logo subline: 12px, font-weight: 500, letter-spacing: 2.4px, uppercase.
Desktop nav links: 13.6px, font-weight: 700, letter-spacing: 1.632px, uppercase.
Hero h1: 41.6px, font-weight: 800, line-height: 44.928px, letter-spacing: -1.04px, uppercase.
Business intro headline: 51.2px, font-weight: 700, line-height: 49.152px, letter-spacing: 1.024px.
Business intro body: 14.4px, font-weight: 500, line-height: 19.008px.
Services headline: 60px, font-weight: 900, line-height: 60px, letter-spacing: -1.5px.
Services card title: 30px, font-weight: 700, line-height: 36px, letter-spacing: -0.75px.
Services card description: 16px, line-height: 24px.
4. Global Color Palette
Root variables in src/index.css:

--light-grey-surface: rgb(251, 249, 239)
--charcoal-black: #111111
--mid-grey: #5f6368
--border-grey: rgba(17, 17, 17, 0.22)
--action-blue: #0057ff
Business section scoped variables in business-track-section.css:

--focus-blue: #0071e3
--light-grey-surface: #f4f4f4
--pure-white: #ffffff
--action-blue: #0066cc
--charcoal-black: #1d1d1f
--mid-grey: #6e6e73
--orange-glyph: #b64400
--border-grey: #d2d2d7
--neutral-fill: #e8e8ed
--bt-cream: var(--pure-white)
--bt-ink: var(--charcoal-black)
--bt-orange: var(--orange-glyph)
--bt-blue: var(--action-blue)
Hero colors:

Outer hero background: #f4f4f4.
Inner media frame: black, #000000.
Gradient overlay: from-black/80, via-black/50, to-black/20.
First hero text group: rgb(186, 186, 186).
Second hero text group: #eeeeee.
Main computed h1 color: #ffffff.
Navbar colors:

Transparent desktop background.
Text: white and white opacity.
Logo main: #ffffff.
Logo subline: rgba(255, 255, 255, 0.6).
Desktop nav links: rgba(255, 255, 255, 0.7), hover to white.
Desktop CTA: white background, black text.
Mobile floating state: rgba(0,0,0,0.6), border rgba(255,255,255,0.1), backdrop-blur(20px), shadow 0 8px 32px rgba(0,0,0,0.3).
Business track colors:

Background: #f4f4f4.
Main ink: #1d1d1f.
Muted text: #6e6e73.
Primary button: #1d1d1f with white text.
Secondary link: black text with #d2d2d7 underline.
Strategy and Experience text panel: #2a1b0b.
Identity and Growth text panel: #FF681F.
Card paper frame: white with grey borders.
Integrated note gradient: #ebdcd1 to #decbba.
Integrated note text: #5b4a3f.
Private back layer dark panel: #352821.
Integrated back layer dark panel: #3b2d24.
Services colors:

Section background: #111111.
Card background on desktop: rgba(255, 255, 255, 0.02).
Card background on smaller screens from class: #1a1a1a.
Card border: rgba(255, 255, 255, 0.1).
Card hover border: white.
Hover glow overlay: rgba(255,255,255,0.04).
Service descriptions: rgba(255, 255, 255, 0.5).
Feature bullets/list text: rgba(255, 255, 255, 0.7).
Service kicker: rgba(255, 255, 255, 0.7).
Services headline muted span: rgba(255, 255, 255, 0.5).
Icon box background: rgba(255,255,255,0.1).
Ambient light: bg-white/5 with blur-[120px].
5. Global Animation System
The homepage uses four animation systems:

Framer Motion for navbar mobile menu and hero entry animations.
GSAP ScrollTrigger for the business horizontal track and the services pinned card animation.
Lenis for smooth scrolling.
CSS keyframes/transitions for marquees, loaders, hover states, and Lottie wrapper opacity.
Global Lenis behavior:

Disabled when prefers-reduced-motion: reduce is true.
Runs with duration: 1.25.
Easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)).
Updates GSAP ScrollTrigger on every Lenis scroll event.
Sets gsap.ticker.lagSmoothing(0).
Hero Framer Motion:

Outer hero text block: initial { opacity: 0, y: 30 }, animate { opacity: 1, y: 0 }, duration 1.2, delay 0.2, ease [0.16, 1, 0.3, 1].
Heading container: staggerChildren: 0.08, delayChildren: 0.5.
Word reveal: initial { opacity: 0, y: 30 }, visible { opacity: 1, y: 0 }, duration 0.6, ease [0.16, 1, 0.3, 1].
SVG outline path: pathLength: 0 to 1, duration 1.5, ease easeInOut, delay 1.5.
popInVariants exists in the file with spring settings but is not used by rendered JSX.
Navbar animation:

Mobile menu uses AnimatePresence.
Mobile panel initial: { height: 0, opacity: 0 }.
Mobile panel animate: { height: "auto", opacity: 1 }.
Mobile panel exit: { height: 0, opacity: 0 }.
Mobile panel transition: duration 0.3, ease easeInOut.
Desktop CTA has a rolling text stack: on hover the inner flex column translates -50% vertically.
CTA star rotates 180deg on hover with duration-700.
Business track GSAP:

ScrollTrigger.config({ ignoreMobileResize: true, limitCallbacks: true }).
Horizontal track uses a trackTween on .bt-business-frame.
Trigger: #business-track-section.
Start: top top.
End: dynamic +=${getScrollLength()}.
Main scrub values: desktop 1.56, tablet 1.78, mobile 1.95.
Layer scrub values: desktop 1.22, tablet 1.38, mobile 1.55.
Accent scrub values: desktop 1.34, tablet 1.52, mobile 1.68.
Color scrub values exist in code: desktop 1.62, tablet 1.8, mobile 2.05.
Track transforms use force3D, transformStyle: preserve-3d, backfaceVisibility: hidden, willChange: transform.
Services GSAP:

Desktop only through gsap.matchMedia("(min-width: 1024px)").
Cards are initially set to y: 480, yPercent: 50.
Trigger: services section.
Start: center center.
End: +=500%.
pin: true.
scrub: 1.
Timeline animates cards to y: 0, yPercent: 0.
Duration: 1.
Stagger: 0.5.
Ease: none.
CSS keyframes:

gradient-x: 8s infinite horizontal gradient movement.
gradient-x-reverse: 8s reverse horizontal gradient movement.
bt-business-label-loop: translates the intro eyebrow label track from 0 to -50%.
move: used by business logo balls, moves from translate3d(0,0,0) to translate3d(0,12em,0) and back.
6. Header / Navbar Section
The navbar is rendered by src/components/Navbar.jsx as a <nav aria-label="Primary">.

Layout
On desktop, the navbar is absolute, full-width, and positioned at top: 10px through lg:top-2.5. The live desktop rect was:

Width: 1265px.
Height: 82px.
Top: 10px.
Z-index: 50.
The inner wrapper uses a vertical flex column so the mobile dropdown can expand underneath the top row. On desktop the layout is a horizontal row:

Left: logo button.
Right: navigation links and rolling CTA.
The logo starts at x: 48px on the inspected desktop viewport because the wrapper uses lg:px-12.

Visible Text
Logo:

BRAND CRAFTERS
BRANDING STUDIO
Desktop navigation links:

Home
Our Services
About Us
Desktop CTA visible rolling text:

Get In Touch ✦
Get In Touch ✦
Mobile CTA text:

Get in touch
Typography
Brand main line:

Class: text-[1.4rem] lg:text-[1.55rem] font-bold uppercase tracking-tighter font-headline.
Computed desktop size: 24.8px.
Computed line-height: 24.8px.
Computed color: white.
Computed letter spacing: -1.24px.
Brand subline:

Class: text-[0.7rem] lg:text-[0.75rem] font-medium uppercase tracking-[0.2em] font-body text-white/60.
Computed desktop size: 12px.
Computed color: rgba(255,255,255,0.6).
Computed letter spacing: 2.4px.
Desktop nav links:

Class: text-[0.85rem] font-bold uppercase tracking-[0.12em] font-body text-white/70.
Computed size: 13.6px.
Computed color: rgba(255,255,255,0.7).
Hover: text-white.
Desktop CTA:

Height: 42px.
Border radius: 12px.
Padding: 0 24px.
Background: white.
Text: black.
CTA inner text is bold, uppercase, 0.8rem, tracking-[0.08em].
Animation / Interaction
The logo is a button with hover:opacity-80.

The desktop CTA is a rolling text button:

The visible label sits inside a h-[1.2rem] overflow-hidden window.
The two identical CTA lines are stacked vertically.
On hover, the inner column moves -translate-y-1/2.
The star ✦ rotates 180deg.
The motion uses duration-500 and cubic bezier cubic-bezier(0.76,0,0.24,1) for the text stack.
On mobile:

Hamburger button is shown with Lucide Menu.
Open state shows Lucide X.
Button size: 38px x 38px.
Shape: fully rounded.
Background: bg-white/[0.08], hover bg-white/[0.15].
Menu expands with Framer Motion height/opacity animation.
Sticky / Fixed Behavior
Desktop:

lg:absolute; it remains visually over the hero but does not become sticky.
Mobile/tablet below 1024px:

fixed.
isScrolled becomes true only when window.scrollY > 20 && window.innerWidth < 1024.
When scrolled or menu-open, the wrapper becomes a floating glass panel with:
bg-black/60
border-white/10
backdrop-blur-[20px]
rounded-2xl
shadow-[0_8px_32px_rgba(0,0,0,0.3)]
Existing Anchor Targets
Navbar links use:

Home: #
Our Services: #services
About Us: #about
The current services section does not have an id="services" in the mounted JSX, and no mounted homepage element has id="about".

7. Hero Section
The hero is rendered by src/components/Hero.jsx.

Purpose
The hero communicates the core creative promise of the brand: modern brand building through digital art and technology. It creates the cinematic first impression of the site.

Layout
The hero section:

Tag: <section aria-label="Hero">.
Class: .bt-hero-section h-screen w-full bg-[#f4f4f4] p-1.5 sm:p-2 lg:p-2.5 flex flex-col justify-center.
Computed desktop height: 720px.
Computed desktop background: #f4f4f4.
Computed desktop padding: 10px.
Inside the hero is a full-height rounded media frame:

Class: relative h-full w-full overflow-hidden rounded-[1rem] sm:rounded-[1.25rem] bg-black origin-center.
Computed desktop rect: 1245px x 700px.
Computed border radius: 20px.
Overflow hidden.
Background black.
The headline block is absolutely positioned:

left-6 bottom-6.
md:left-12 md:bottom-12.
lg:left-[38px].
max-w-[85%] sm:max-w-[75%] lg:max-w-[60%].
Text alignment: left.
select-none.
At the inspected desktop viewport, the heading block sat near the bottom-left of the media frame:

H1 x-position: 48px.
H1 top: 567.19px.
H1 width: about 747px.
H1 height: about 94.81px.
Media
Hero media stack:

<picture> with WebP source:
/video/fix-reel-poster.webp
WebP metadata: 1024x1024, 64K.
Fallback image:
/video/fix-reel-poster.jpg
JPEG metadata: 1024x1024, 96K.
alt="Brand Crafters cinematic background".
fetchPriority="high".
loading="eager".
decoding="async".
Declared width/height: 1920 x 1080.
Video:
/video/fix-reel.mp4
File size: about 2.8M.
autoPlay, muted, loop, playsInline, preload="auto".
Poster: /video/fix-reel-poster.webp.
aria-label="Brand Crafters cinematic reel".
Class: absolute inset-0 h-full w-full object-cover.
The poster and video are layered full-bleed inside the rounded frame. The video sits after the image in the DOM, so it visually covers the poster once loaded. Both use object-cover.

Overlay:

Class: absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-black/20.
Purpose: darkens the video and improves headline contrast.
Visible Text
The source text is split word-by-word. The visual result is:

SHAPING MODERN brands
THROUGH DIGITAL ART & TECHNOLOGY
The word brands is lowercase because it uses normal-case; the surrounding words are uppercase through the H1 class.

Typography
H1 class:

text-[1.6rem] sm:text-[1.75rem] md:text-[2.1rem] lg:text-[2.6rem]
font-extrabold uppercase leading-[1.08] tracking-tight text-white font-headline
relative flex flex-wrap gap-x-2 md:gap-x-3
Computed desktop H1:

Font family: Oswald, "Plus Jakarta Sans", Manrope, ....
Font size: 41.6px.
Font weight: 800.
Line height: 44.928px.
Letter spacing: -1.04px.
Text transform: uppercase.
Hero word treatments:

Shaping, modern, brands: rgb(186,186,186).
through, digital, art, & technology: #eeeeee.
brands: italic, serif, lowercase, normal letter spacing.
& technology: whitespace-nowrap ml-2.
Decorative Element
The words & technology are encircled by an absolutely positioned SVG path:

SVG class: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[150%] pointer-events-none z-10.
Inline transform: translate(-50%, -50%) scale(1.1, 1.4).
Path stroke uses currentColor.
Stroke width: 2.
Stroke linecap and linejoin: round.
Animation / Interaction
Hero entrance:

The whole text block fades and rises into place after 0.2s.
Individual words reveal with a stagger after 0.5s.
Each word animates from opacity: 0, y: 30 to opacity: 1, y: 0.
The outline around & technology draws itself from pathLength: 0 to 1.
There are no visible hero CTA buttons or links. The hero does not include a scroll indicator.

Responsive Behavior
Hero responsive classes:

Outer padding: p-1.5, sm:p-2, lg:p-2.5.
Frame radius: rounded-[1rem], sm:rounded-[1.25rem].
Text block:
Mobile: left-6 bottom-6, max-w-[85%].
Medium: left-12 bottom-12, max-w-[75%].
Desktop: left-[38px], max-w-[60%].
H1:
Base: 1.6rem.
Small: 1.75rem.
Medium: 2.1rem.
Large: 2.6rem.
H1 wraps with flex flex-wrap; a manual <div className="w-full"> forces the line break between the first phrase and the second phrase.
8. Business Track Section / Section 2
The second homepage section is rendered by BusinessTrackSection from src/business-track-section/components/BusinessTrackSection.jsx.

Purpose
This section communicates the studio's broader capability system: strategy, identity, experience, and growth. It works like a horizontal story sequence driven by vertical scrolling.

Layout
The mounted section:

ID: business-track-section.
Classes: .bt-business-section bt-business-section--horizontal.
Aria labelled by business-track-heading.
Background: #f4f4f4.
Text color: #1d1d1f.
Z-index: 20.
The structure is:

section.bt-business-section.bt-business-section--horizontal
  div.bt-business-camera
    div.bt-business-frame
      header.bt-business-intro
        div.bt-business-intro__container
          BusinessIntroPanel
      ul.bt-business-track
        BusinessFeatureCard x 4
The camera:

Class: .bt-business-camera.
position: sticky.
top: 0.
Height: 100vh; supports 100svh.
Minimum height: 640px desktop, 620px under 1024px, 560px under 640px.
Overflow hidden.
The horizontal frame:

Class: .bt-business-frame.
display: flex.
width: max-content.
min-width: 100vw.
height: 100%.
Aligns items center.
Gap: clamp(12rem, 18vw, 24rem).
Padding right: clamp(28rem, 44vw, 61rem).
It is translated on the x-axis by GSAP as the user scrolls.
Live scroll samples at desktop:

At business start, .bt-business-frame transform was about matrix(..., -27.9848, 0).
Early in track, about x: -507.851px.
Middle track, about x: -2939.9px.
Late track, about x: -5008.31px.
Intro Panel Content
Eyebrow/marquee text:

✳
BRAND SYSTEMS IN MOTION
BRAND SYSTEMS IN MOTION
BRAND SYSTEMS IN MOTION
Headline:

WE CRAFT ICONIC BRANDS
BUILD ELITE PLATFORMS
PRODUCE STUNNING CGI
& DRIVE BUSINESS GROWTH™
Paragraph:

From brand identity and logo design to website development, digital marketing, and creative content — we bring every piece of your business together. Our team runs Google Ads, Meta Ads, SEO, and social media while building brands that people trust and remember.
Actions:

OUR STORY ✦
CONTACT US ↗
Intro Panel Visual Design
The intro panel is a two-column grid on desktop:

Left column: animated circular loader/logo visual.
Right column: headline, paragraph, and two actions.
Grid template: minmax(18rem, 31%) minmax(0, 1fr).
Container width: min(100%, 1720px).
The left visual:

.bt-business-intro__visual.
Contains an eyebrow at the upper-left and a custom circular animated logo.
Logo size: clamp(17rem, 24vw, 26rem).
Logo uses many .loader, .loaderA, .ball0 to .ball8 elements.
Balls animate through @keyframes move over 3.63s.
Ball animation delays: 0.2s through 1.6s; .ball9 has 1.8s defined though only ball0 to ball8 are rendered.
The eyebrow:

Font: Outfit.
Uppercase.
Font size: clamp(0.68rem, 0.82vw, 0.88rem).
Weight: 700.
Color: #6e6e73.
Uses a masked label window with mask-image: linear-gradient(90deg, #000 0%, #000 70%, transparent 100%).
Label track loops with bt-business-label-loop 5.4s linear infinite.
Intro headline:

Font: Oswald.
Font size: clamp(3rem, 4vw, 3.75rem).
Weight: 700.
Line height: 0.96.
Letter spacing: 0.02em.
Uppercase.
First two lines: #1d1d1f.
Last two lines: muted #6e6e73.
Intro paragraph:

Font: Outfit.
Weight: 500.
Color: #6e6e73.
Max width: clamp(31rem, 43vw, 47rem).
Margin top: clamp(2.35rem, 6.5vh, 4rem).
Buttons:

Primary OUR STORY ✦: dark pill, border #1d1d1f, white text, radius 56px, inset highlight, ambient shadow.
Secondary CONTACT US ↗: underline-style link with 1.5px bottom border.
Both hover with translateY(-2px).
Feature Cards Content
There are four horizontal feature cards.

Card 1: Strategy
Index:

01
Title:

Strategy
Description:

Define positioning & build
clear brand direction for
stronger business growth
Data:

Variant: personalized.
Video source: https://www.pexels.com/download/video/8125996/.
Base rotation: -10deg.
Text panel: #2a1b0b.
Accent: #2a1b0b.
Decorative sticker is rendered because index is not 02 or 03.
Decorative SVG mountain/line graph appears because index is not 02, 03, or 04.
Card 2: Identity
Index:

02
Title:

Identity
Description:

Built to feel premium
for your brand
Data:

Variant: private.
Video source: https://www.pexels.com/download/video/8126007/.
Base rotation: -5deg.
Text panel: #FF681F.
Accent: #FF681F.
Back paper layer: .bt-business-layer--private-back, rotation 5deg.
Decorative star SVG on the left.
Decorative pencil-holder SVG on the right.
.bt-business-copy--identity adds larger left margin and min-width: 35rem.
Card 3: Experience
Index:

03
Title:

Experience
Description:

Fully crafted around
your brand experience
Data:

Variant: branded.
Video source: https://www.pexels.com/download/video/3248136/.
Base rotation: -10deg.
Text panel: #2a1b0b.
Accent: #2a1b0b.
Decorative full-card SVG overlay includes an embedded flower-like icon and four target dots at bottom-right.
No sticker is rendered for index 03.
Card 4: Growth
Index:

04
Title:

Growth
Description:

Integrated strategies
built for scalable growth
Data:

Variant: integrated.
Video source: https://www.pexels.com/download/video/8512935/.
Base rotation: 3deg.
Text panel: #FF681F.
Accent: #FF681F.
Back layer: .bt-business-layer--integrated-back, rotation 10deg.
Note layer: .bt-business-layer--integrated-note, rotation -14deg.
The note layer visually displays pseudo-element text:
Designed to
stand out,
built to scale!
A smiley SVG is rendered on the card.
Feature Card Layout
Each BusinessFeatureCard renders:

li.bt-business-feature.bt-business-feature--{variant}
  div.bt-business-feature__stage
    div.bt-business-card-anchor
      optional paper layers
      div.bt-business-device
        div.bt-business-device__frame
        video.bt-business-device__video
        optional sticker
        optional decorative SVGs
    div.bt-business-copy
      span.bt-business-copy__index
      h3.bt-business-copy__title
      p.bt-business-copy__description
Feature dimensions on desktop:

Feature flex-basis: clamp(45rem, 60vw, 70rem).
Inspected desktop feature width: about 768px.
Stage grid: minmax(22.5rem, 0.9fr) minmax(20rem, 0.75fr).
Card anchor width: clamp(22.5rem, 34vw, 36rem).
Card anchor aspect ratio: 0.72 / 1.
Device video area: top 3%, left/right 3.5%, height 61%, width 93%, aspect ratio 4 / 5.
Copy style:

Copy font: Outfit.
Title and description are inline elements with box-decoration-break: clone.
Title background: var(--bt-text-panel).
Description background: var(--bt-text-panel).
Text color: white.
Title size: clamp(3.3rem, 4.8vw, 5.9rem).
Description size: clamp(1.55rem, 2.1vw, 2.45rem).
Description line height: 1.5.
Index is visually hidden using a 1px clipped span.
Business Animation Details
Business constants:

MIN_HORIZONTAL_TRAVEL_VW = 294.894.
DESKTOP_BREAKPOINT = 1024.
MOBILE_BREAKPOINT = 640.
SECTION_CARD_TEXT_TRAVEL_REM = 2.
SECOND_SECTION_SCROLL_SPEED = 1.22.
TRANSFORM_PRECISION = 1000.
Viewport travel:

Mobile viewport offset: 0.16.
Tablet viewport offset: 0.14.
Desktop viewport offset: 0.08.
Mobile min travel: 294.894 * 0.62vw.
Tablet min travel: 294.894 * 0.78vw.
Desktop min travel: 294.894vw.
Blank space multiplier: 1.05 mobile, 1.1 tablet/desktop.
Scroll length:

Mobile max multiplier: 12.
Tablet max multiplier: 25.
Desktop max multiplier: 27.
Mobile minimum scroll: viewportHeight * 3.5.
Tablet/desktop minimum scroll: viewportHeight * 9.9.
Mobile distance multiplier: 1.6.
Tablet distance multiplier: 4.5.
Desktop distance multiplier: 5.4.
Final scroll length is divided by 1.22.
Mobile exit hold adds window.innerHeight * 0.3.
Layer animation:

Paper layers animate between xPercent and rotateZ values as each card crosses the viewport.
Integrated note:
Desktop start x: -14, end x: -75.
Non-desktop start x: -11, end x: -36.
Rotation starts baseRotation + 8, ends baseRotation - 19.
Integrated back:
Desktop start x: -18, end x: 18.
Rotation starts baseRotation + 11, ends baseRotation - 11.
Standard layers:
Desktop travel multiplier: 16.
Tablet: 11.
Mobile: 7.
Desktop rotation offset: 5.
Tablet/mobile rotation offset: 3.
Device animation:

Card 1 device rotates from -20deg to 10deg.
Card 3 device rotates from -4deg to 14deg.
Card 2 and Card 4 devices are set to baseRot - 13 with xPercent: 11, then animate to baseRot + 13 with xPercent: -11.
Other fallback branch rotates by baseRot +/- 2.5.
Text animation:

Text layer shifts horizontally.
Desktop text travel: 4.5rem.
Tablet text travel: 2.6rem.
Mobile text travel: 2rem.
Growth card text travel: desktop 13rem, tablet 7rem, mobile 5rem.
Desktop text trigger range: left 82% to right 18%.
Non-desktop text trigger range: left right to right left.
Responsive Behavior
At max-width: 1024px:

Camera min-height: 620px.
Frame gap increases to clamp(18rem, 35vw, 25rem).
Intro grid columns shrink.
Intro logo becomes clamp(12.5rem, 27vw, 18rem).
Feature flex-basis becomes clamp(43rem, 115vw, 60rem).
Feature stage uses minmax(20rem, 45vw) minmax(18rem, 40vw).
Card anchor width becomes clamp(20rem, 45vw, 30rem).
At max-width: 640px:

Section min-height: 100svh.
Camera min-height: 560px.
Frame gap: 45vw.
Frame padding-right: 50vw.
Intro layout changes to one column.
Intro logo size: 8.8rem.
Intro headline: clamp(2rem, 6vw, 2.5rem).
Feature flex-basis: clamp(30rem, 142vw, 40rem).
Feature stage columns: 74vw 62vw.
Card anchor width: clamp(15.5rem, 74vw, 20.5rem).
Copy max-width: 62vw.
Copy title: clamp(2.25rem, 9.4vw, 3.1rem).
Copy description: clamp(1.08rem, 4.7vw, 1.45rem).
Reduced motion:

If prefers-reduced-motion is active, useHorizontalTrack becomes false.
The section renders .bt-business-section--reduced.
Cards become a regular list grid instead of the horizontal track.
The eyebrow marquee animation is disabled by CSS.
9. Our Services Section / Section 3
The third homepage section is rendered by src/components/OurServicesSection.jsx.

Purpose
The services section explains the studio's service offerings in four vertical service cards. It translates the broad brand-system message from the second section into concrete deliverables.

Layout
Section class:

relative w-full bg-[var(--charcoal-black)] z-30 text-white lg:h-screen lg:flex lg:flex-col lg:justify-center py-16 md:py-24 lg:py-0 -mt-[100vh] lg:-mt-[200vh]
Important layout behavior:

Full width.
Charcoal background #111111.
Desktop height: 100vh.
Desktop display: flex column, vertically centered.
Negative top margin: -100vh base, -200vh desktop.
Z-index: 30, so it layers above the business section.
Uses GSAP pinning on desktop.
Live desktop pinned inspection at final scroll state:

Section position: fixed.
Width: 1265px.
Height: 720px.
Top: about 0.42px.
Background: rgb(17,17,17).
Inner container:

max-w-[1800px].
mx-auto.
px-4 md:px-8 lg:px-10.
h-full flex flex-col.
Background ambient element:

Wrapper: absolute inset-0 overflow-hidden pointer-events-none.
Light: absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/5 blur-[120px] rounded-full.
Header block:

Class: mb-12 lg:mb-16 lg:mt-10 shrink-0.
Computed desktop margin: 40px 0 64px 0.
Computed desktop height: 156px.
Cards grid:

Class: grid grid-cols-1 lg:grid-cols-4 gap-6 flex-grow items-start pb-10.
Desktop columns: 4.
Computed desktop width: 1185px.
Computed card gap: 24px.
Computed card width at 1280 viewport: 278.25px.
Section Header Content
Visible label:

Our Service
Visible heading:

Elevating Brands
Across Every Dimension
The heading source wraps after Brands with a <br className="hidden md:block" />.

Section Header Typography
Kicker:

Class: font-headline tracking-widest text-sm font-medium uppercase text-white/70.
Computed size: 14px.
Computed weight: 500.
Computed letter spacing: 1.4px.
Computed color: rgba(255,255,255,0.7).
Kicker has a horizontal line before it:

Size: h-[1px] w-12.
Color: bg-white/30.
Headline:

Class: font-headline text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.05] tracking-tight uppercase.
Computed desktop size: 60px.
Computed weight: 900.
Computed line-height: 60px.
Computed letter spacing: -1.5px.
First line white.
Second line uses text-white/50.
Service Card Shared Visual Design
Each card class:

group sticky lg:relative top-[var(--mobile-top)] lg:top-auto flex flex-col justify-between h-full min-h-[450px] lg:min-h-[500px] overflow-hidden rounded-[1.5rem] bg-[#1a1a1a] lg:bg-white/[0.02] border border-white/10 p-6 md:p-8 backdrop-blur-none lg:backdrop-blur-[6px] transition-all duration-300 ease-out hover:border-white/100 cursor-pointer
Computed desktop card styles:

Display: flex.
Position while pinned desktop: relative.
Background: rgba(255,255,255,0.02).
Border: 1px solid rgba(255,255,255,0.1).
Border radius: 24px.
Padding: 32px.
Backdrop filter: blur(6px).
Overflow: hidden.
Transition: 0.3s cubic-bezier(0, 0, 0.2, 1).
Cursor: pointer.
Each card contains:

Top icon row.
Left service icon inside h-12 w-12 rounded-xl.
Right arrow icon inside h-10 w-10 rounded-full.
Service title.
Service description.
Divider.
Feature list.
View Details → micro-CTA.
Hover effects:

Hidden overlay bg-white/[0.04] fades in from opacity 0 to 1.
Card border changes from white/10 to full white.
Arrow circle changes from transparent to white.
Arrow circle rotates -12deg.
Arrow icon changes from white to black.
Divider changes from white/10 to white/30.
CTA arrow translates right by 0.25rem.
Card 1: Brand Identity
Title:

Brand Identity
Description:

We craft bold and memorable brand identities that give your business a clear visual voice. From logo design to visual branding and storytelling, every detail is shaped to build trust, recognition, and premium appeal.
Feature list:

Logo Design
Visual Branding
Packaging Design
Storytelling & Messaging
CTA:

View Details →
Icon:

Lucide Palette.
Icon size: 24.
Stroke width: 1.5.
Computed desktop card:

x: 40px.
top: 260.42px.
width: 278.25px.
height: 713px.
Card 2: Websites & Apps
Title:

Websites & Apps
Description:

We design and develop modern websites and app experiences that are clean, fast, and user-focused. From landing pages to full digital products, we create smooth interfaces that look great and convert better.
Feature list:

Website Development
App Development
Android & IOS App Development
Landing Pages
UI/UX Design
High-Converting Digital Experiences
CTA:

View Details →
Icon:

Lucide MonitorSmartphone.
Icon size: 24.
Stroke width: 1.5.
Computed desktop card:

x: 342.25px.
top: 260.42px.
width: 278.25px.
height: 713px.
Card 3: Creative Production
Title:

Creative Production
Description:

We create eye-catching digital assets that bring your brand to life across every platform. From social media design and video editing to motion graphics and CGI, our creative work is built to capture attention.
Feature list:

Social Media Design
Motion Graphics
Video Editing
3D Animation & CGI
Ad Creatives
CTA:

View Details →
Icon:

Lucide Video.
Icon size: 24.
Stroke width: 1.5.
Computed desktop card:

x: 644.5px.
top: 260.42px.
width: 278.25px.
height: 713px.
The title wraps into two lines at the inspected desktop width, giving this card a taller title block than cards 1 and 2.

Card 4: Marketing & Visibility
Title:

Marketing & Visibility
Description:

We help your brand grow through smart digital marketing, performance marketing, and search optimization. With SEO, AEO, and GEO strategies, we improve visibility and help your business reach the right audience.
Feature list:

Digital Marketing
Google & Meta Ads
SEO / AEO / GEO Optimization
Influencer Marketing
Social Media Marketing
CTA:

View Details →
Icon:

Lucide TrendingUp.
Icon size: 24.
Stroke width: 1.5.
Computed desktop card:

x: 946.75px.
top: 260.42px.
width: 278.25px.
height: 713px.
The title wraps into two lines at the inspected desktop width.

Services Animation / Interaction
Desktop animation:

Active at min-width: 1024px.
Cards are pushed downward with:
y: 480
yPercent: 50
force3D: true
willChange: transform
A GSAP timeline pins the section.
ScrollTrigger:
trigger: sectionRef.current
start: "center center"
end: "+=500%"
pin: true
scrub: 1
invalidateOnRefresh: true
Cards animate upward to:
y: 0
yPercent: 0
duration: 1
stagger: 0.5
ease: "none"
Tablet/mobile animation:

Active at max-width: 1023px.
No GSAP pin is configured in this branch.
Cards use native CSS sticky stacking.
Each card gets a custom --mobile-top:
Card 1: calc(12vh + 0rem)
Card 2: calc(12vh + 1.5rem)
Card 3: calc(12vh + 3rem)
Card 4: calc(12vh + 4.5rem)
Scroll Down Indicator
At the bottom of the services section:

Scroll down
Component:

ScrollDownIndicator.
Link href: #cta-section.
Class: .scroll-down-container.
Contains a Lottie animation from src/assets/wave-lottie.json.
Lottie file size: about 4K.
CSS:

.scroll-down-container: flex column, center aligned, white text, z-index: 50.
.scroll-text: 0.85rem, letter spacing 1px, uppercase, margin-bottom 8px.
.wave-animation-wrapper: 65px x 60px, opacity 0.8, hover opacity 1.
At the inspected desktop pinned state, the scroll indicator was below the visible viewport because the service cards/grid extended past the 720px viewport.

10. Media / Visual Showcase Within Existing Sections
The homepage media is integrated into the three mounted sections rather than existing as a separate showcase section.

Hero media:

One full-frame autoplaying MP4.
WebP and JPG poster fallback.
Media is masked by a rounded rectangular frame and dark gradient overlay.
The declared video poster and image use a square 1024x1024 asset but are stretched through object-cover to fill a widescreen frame.
Business track media:

Four remote video previews from Pexels.
Each card uses a video.bt-business-device__video inside a paper/device frame.
Videos are muted, looped, playsInline, and start with preload="none".
A section-level IntersectionObserver watches all business videos.
When a video is within rootMargin: "900px 0px" and threshold 0.01, it sets preload="auto" and calls play().
When the video leaves, it pauses.
Each business video has poster="/video/fix-reel-poster.jpg".
SVG/decorative media:

Hero SVG outline around & technology.
Business card 1 graph/mountain doodle.
Business card 2 star and pencil-holder doodles.
Business card 3 embedded icon and target dots.
Business card 4 smiley icon.
Services use Lucide icons, not bitmap images.
Lottie media:

Scroll down wave animation is rendered through lottie-react.
It is looped continuously.
15. CSS / Code Structure
Main app files:

src/main.jsx: mounts React app and imports src/index.css.
src/App.jsx: mounts Navbar, Hero, BusinessTrackSection, and OurServicesSection.
src/hooks/useLenisSmoothScroll.js: global smooth scroll and ScrollTrigger integration.
Navbar:

src/components/Navbar.jsx.
Uses React state for scroll/menu state.
Uses framer-motion for mobile menu.
Uses Lucide Menu and X.
Uses Tailwind utility classes.
Hero:

src/components/Hero.jsx.
Uses framer-motion.
Uses local video/poster assets from public/video.
Uses Tailwind utilities plus .bt-hero-section.
Business track:

src/business-track-section/index.js: imports business-track-section.css and exports BusinessTrackSection.
src/business-track-section/components/BusinessTrackSection.jsx: section layout, GSAP ScrollTrigger logic, dynamic scroll length calculations, video IntersectionObserver.
src/business-track-section/components/BusinessFeatureCard.jsx: per-card card/device/doodle rendering.
src/business-track-section/hooks/useTiltEffect.js: pointer tilt effect for integrated note layer.
src/business-track-section/hooks/usePrefersReducedMotion.js: reduced-motion media query hook.
src/business-track-section/business-track-section.css: major custom BEM-style section styling.
Services:

src/components/OurServicesSection.jsx.
Uses GSAP ScrollTrigger with useGSAP.
Uses Lucide ArrowUpRight, MonitorSmartphone, Palette, Video, TrendingUp.
Uses ScrollDownIndicator.
Scroll indicator:

src/components/ScrollDownIndicator.jsx.
Uses lottie-react.
Uses src/assets/wave-lottie.json.
CSS organization:

src/index.css: global imports, Tailwind layers, CSS variables, Lenis CSS, scroll indicator CSS, unused gradient keyframes.
business-track-section.css: scoped business section design system and responsive layout.
Class naming is mixed:
Tailwind utilities for navbar, hero, and services.
BEM-style custom classes for business section.
Dependencies used by homepage:

react
react-dom
vite
tailwindcss
framer-motion
gsap
@gsap/react
lenis
lottie-react
lucide-react
Installed package versions from lockfile include:

framer-motion: 12.40.0
gsap: installed 3.15.0 even though package.json requests ^3.12.5
@gsap/react: 2.1.2
lenis: 1.3.23
lottie-react: 2.4.1
lucide-react: 1.18.0
react: 18.3.1
vite: 5.4.21
16. Exact Class / ID Map
App Structure
<main>
Navbar
Hero
#business-track-section
Services <section> without an ID
Navbar
nav[aria-label="Primary"]
fixed
lg:absolute
z-50
transition-all
Brand button:
group
flex
flex-col
font-body
text-white
hover:opacity-80
Brand main:
text-[1.4rem]
lg:text-[1.55rem]
font-headline
uppercase
tracking-tighter
Brand sub:
text-[0.7rem]
lg:text-[0.75rem]
font-body
text-white/60
tracking-[0.2em]
Desktop links:
text-[0.85rem]
font-bold
uppercase
tracking-[0.12em]
text-white/70
hover:text-white
Rolling CTA:
group
relative
h-[42px]
rounded-xl
duration-400
bg-white
text-black
Mobile menu button:
h-[38px]
w-[38px]
rounded-full
lg:hidden
Hero
.bt-hero-section
h-screen
w-full
bg-[#f4f4f4]
p-1.5
sm:p-2
lg:p-2.5
rounded-[1rem]
sm:rounded-[1.25rem]
bg-black
Hero image:
absolute
inset-0
h-full
w-full
object-cover
Hero video:
absolute
inset-0
h-full
w-full
object-cover
Overlay:
z-10
bg-gradient-to-t
from-black/80
via-black/50
to-black/20
Text block:
absolute
left-6
bottom-6
md:left-12
md:bottom-12
lg:left-[38px]
z-20
H1:
font-headline
font-extrabold
uppercase
leading-[1.08]
tracking-tight
flex
flex-wrap
Business Track
#business-track-section
.bt-business-section
.bt-business-section--horizontal
.bt-business-section--reduced
.bt-business-camera
.bt-business-frame
.bt-business-intro
.bt-business-intro--reduced
.bt-business-intro__container
.bt-business-intro__visual
.bt-business-intro__eyebrow
.bt-business-intro__spark
.bt-business-intro__label-window
.bt-business-intro__label-track
.bt-business-intro__logo
.main
.up
.loaders
.loader
.loadersB
.loaderA
.ball0 through .ball8
.bt-business-intro__content
.bt-business-intro__headline
#business-track-heading
.bt-business-intro__headline-line
.bt-business-intro__muted
.bt-business-intro__body
.bt-business-intro__actions
.bt-business-intro__primary
.bt-business-intro__secondary
.bt-business-track
.bt-business-feature
.bt-business-feature--personalized
.bt-business-feature--private
.bt-business-feature--branded
.bt-business-feature--integrated
.bt-business-feature--reduced
.bt-business-feature__stage
.bt-business-card-anchor
.bt-business-device
.bt-business-device__frame
.bt-business-device__video
.bt-business-device__sticker
.bt-business-layer
.bt-business-layer--private-back
.bt-business-layer--integrated-back
.bt-business-layer--integrated-note
.bt-business-copy
.bt-business-copy--identity
.bt-business-copy__index
.bt-business-copy__title
.bt-business-copy__description
.bt-business-reduced
.bt-business-reduced__list
Services
Services <section> class:
relative
w-full
bg-[var(--charcoal-black)]
z-30
text-white
lg:h-screen
lg:flex
lg:flex-col
lg:justify-center
py-16
md:py-24
lg:py-0
-mt-[100vh]
lg:-mt-[200vh]
Ambient wrapper:
absolute
inset-0
overflow-hidden
pointer-events-none
Ambient light:
bg-white/5
blur-[120px]
rounded-full
Inner container:
max-w-[1800px]
mx-auto
px-4
md:px-8
lg:px-10
h-full
flex
flex-col
Header:
mb-12
lg:mb-16
lg:mt-10
shrink-0
Cards grid:
grid
grid-cols-1
lg:grid-cols-4
gap-6
flex-grow
items-start
pb-10
Card:
group
sticky
lg:relative
top-[var(--mobile-top)]
lg:top-auto
min-h-[450px]
lg:min-h-[500px]
rounded-[1.5rem]
bg-[#1a1a1a]
lg:bg-white/[0.02]
border-white/10
p-6
md:p-8
lg:backdrop-blur-[6px]
Scroll indicator:
.scroll-down-container
.scroll-text
.wave-animation-wrapper
17. Animation Code Map
Navbar
Scroll listener throttled with requestAnimationFrame.
isScrolled condition: window.scrollY > 20 && window.innerWidth < 1024.
Outer nav transition: duration-500.
Floating background transition: duration-500 ease-out.
Mobile menu Framer Motion:
initial: { height: 0, opacity: 0 }
animate: { height: "auto", opacity: 1 }
exit: { height: 0, opacity: 0 }
transition: { duration: 0.3, ease: "easeInOut" }
Rolling CTA:
text track group-hover:-translate-y-1/2
cubic bezier cubic-bezier(0.76,0,0.24,1)
star group-hover:rotate-180
Hero
containerVariants:
hidden opacity 0
visible opacity 1
staggerChildren 0.08
delayChildren 0.5
wordVariants:
hidden { opacity: 0, y: 30 }
visible { opacity: 1, y: 0 }
duration 0.6
ease [0.16, 1, 0.3, 1]
Text block:
initial { opacity: 0, y: 30 }
animate { opacity: 1, y: 0 }
duration 1.2
delay 0.2
ease [0.16, 1, 0.3, 1]
lineVariants:
hidden { pathLength: 0, opacity: 0 }
visible { pathLength: 1, opacity: 1 }
duration 1.5
delay 1.5
ease easeInOut
Business Track
Video observer:
rootMargin: "900px 0px"
threshold: 0.01
pauses videos outside intersection.
ScrollTrigger config:
ignoreMobileResize: true
limitCallbacks: true
Scroll defaults:
trigger: section
start: top top
end: dynamic scroll length
scrub: mainScrub
invalidateOnRefresh: true
Track tween:
transforms .bt-business-frame on x-axis.
target x is negative rounded viewport travel.
ease: none
force3D: true
Paper layer triggers:
trigger: card
containerAnimation: trackTween
start: left right
end: right left
scrub: layerScrub or accentScrub
Device triggers:
card 1 and 3 end at center center.
card 2 and 4 run through right left.
Copy triggers:
desktop start/end: left 82% to right 18%
tablet/mobile start/end: left right to right left
Integrated note hover tilt:
max tilt: 15
perspective: 1200
scale: 1.05
speed: 400ms
easing: cubic-bezier(0.03, 0.98, 0.52, 0.99)
Services
GSAP matchMedia desktop: (min-width: 1024px).
Initial card set:
y: 480
yPercent: 50
force3D: true
willChange: transform
Timeline ScrollTrigger:
trigger: services section
start: center center
end: +=500%
pin: true
scrub: 1
invalidateOnRefresh: true
Card tween:
y: 0
yPercent: 0
duration 1
stagger 0.5
ease none
Mobile/tablet branch:
no GSAP pin.
sticky stacking through CSS.
18. Responsive Breakpoint Analysis
Tailwind breakpoints used:

sm: 640px
md: 768px
lg: 1024px
Custom CSS media queries:

@media (min-width: 1536px)
@media (max-width: 1024px)
@media (max-width: 640px)
@media (prefers-reduced-motion: reduce)
@media (min-width: 641px) and (max-width: 768px)
JS breakpoints in BusinessTrackSection:

Mobile: <= 640px.
Tablet: > 640px && <= 1024px.
Desktop: > 1024px.
JS breakpoints in OurServicesSection:

Desktop GSAP: min-width: 1024px.
Tablet/mobile sticky: max-width: 1023px.
Navbar responsive behavior:

Desktop: full horizontal menu and CTA visible.
Below 1024px: desktop links hidden, hamburger shown.
Below 1024px: navbar fixed and can become floating glass panel on scroll or menu open.
Hero responsive behavior:

Maintains full viewport height.
Text size scales from 1.6rem to 2.6rem.
Text max-width changes from 85% to 60%.
Position moves from 24px inset to larger tablet inset and custom desktop left.
Business responsive behavior:

Desktop/tablet/mobile all keep horizontal scroll unless reduced motion is on.
Distances, scrub values, frame gaps, card sizes, and intro layout all adapt.
At mobile sizes, intro becomes one-column and feature cards use viewport-width-based columns.
Services responsive behavior:

Desktop: pinned GSAP card reveal with four-column grid.
Below 1024px: regular vertical flow with sticky stacked cards.
Card sticky top offsets are staggered by 1.5rem.
Header typography scales through Tailwind text-4xl, md:text-5xl, lg:text-6xl.
19. Design Strengths
The homepage has a strong premium agency identity from the first viewport.
The hero video, rounded mask, dark overlay, and typographic reveal create an immediate cinematic impression.
The navbar is clean, compact, and brand-forward without taking attention away from the hero.
The hero text treatment has a distinctive contrast between condensed uppercase sans-serif and italic lowercase serif.
The business track section is technically ambitious and visually memorable.
The business section turns service strategy into an immersive scroll narrative rather than a static block.
The services section has clear service categorization and strong card hierarchy.
Motion is not random; it is section-specific and tied to storytelling.
The code uses prefers-reduced-motion for the most complex section.
Business card videos are lazy-managed with IntersectionObserver, reducing unnecessary playback outside range.
The visual palette is restrained: black, off-white, grey, warm brown, orange, and controlled blue accents.
The class structure in the business section is readable because it uses BEM-style naming.
20. Potential Issues
The navbar link Our Services points to #services, but the services section currently has no id="services".
The navbar link About Us points to #about, but there is no mounted homepage target with that ID.
The services ScrollDownIndicator points to #cta-section, but the mounted homepage does not include an element with id="cta-section".
At the inspected desktop viewport (1280 x 720), the services cards were about 713px high and began around 260px, so their bottoms extended below the viewport while the section was pinned.
The services scroll indicator was positioned below the visible viewport during the inspected pinned state.
The services cards use cursor-pointer and show View Details, but the cards are rendered as non-link <div> elements with no click handler.
The hero video includes dangerouslySetInnerHTML for an empty captions track. It creates a track element but does not provide actual captions.
The hero image declares width="1920" and height="1080", but the actual poster assets are 1024x1024; object-cover handles this visually, but the metadata ratio differs from the asset ratio.
Multiple remote Pexels videos are used in the business track. If those URLs load slowly or fail, cards rely on the shared poster image.
The business section uses a very long scroll height and multiple scrubbed transforms, which may be heavy on lower-end devices.
popInVariants is defined in Hero.jsx but not used.
colorScrub is calculated in the business section but not used in any visible tween.
Services section title text can wrap inside cards at desktop widths; this is visible on Creative Production and Marketing & Visibility, which have taller title blocks than the first two cards.
Low-opacity text such as text-white/50 and muted business body copy may need contrast checking for accessibility.
21. Final Summary
The homepage feels like a premium, cinematic branding studio site. It communicates a brand that combines identity design, digital platforms, creative production, CGI, and growth marketing. The main visual identity is built around dark cinematic media, off-white editorial storytelling, bold uppercase Oswald typography, precise motion, and high-contrast service cards.

The page contains only the mounted homepage areas inspected here: navbar, hero, business track section, and services section. The strongest parts are the hero first impression, the second section's horizontal scroll narrative, and the services section's clear four-card offer structure.