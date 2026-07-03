# Homepage Master Report - Brand Crafters

This document translates the homepage source into visual, UX, content, interaction, conversion, and motion documentation. It does not explain programming syntax. It describes what the visitor sees, feels, reads, and experiences.

## Source Scope

Live homepage render path:

- `Navbar`
- `Hero`
- `BusinessTrackSection`
- `OurServicesSection`
- `HowItWorksSection`
- `HomeContinuationSections`
- `StickyCinematicGrid`
- `PartnerSection`
- `FAQ`
- `CTASection`
- `PlayaFooter`

Global behavior:

- Smooth scrolling is controlled through Lenis.
- Scroll-linked motion is controlled through GSAP ScrollTrigger.
- Entrance and scroll progress animations also use Framer Motion.
- Main display type resolves in-browser as Oswald.
- Body/support type resolves mainly as Outfit/Manrope/Inter depending on the section.

Observed desktop viewport reference:

- Viewport used for visual verification: 1280 x 720.
- Total document height at that viewport: about 30,271px.
- Hero height: 720px.
- Business-track section height: about 16,726px with a negative bottom margin of -720px.
- Services start: about 16,726px.
- How-it-works start: about 21,563px.
- Cinematic grid start: about 22,683px.
- Partner story start: about 26,283px.
- FAQ start: about 27,579px with a -720px top margin.
- CTA start: about 28,563px.
- Footer start: about 29,364px.

## Page-Level Experience

The homepage is designed as a premium creative-agency scroll narrative. It begins with cinematic atmosphere, moves into a brand manifesto, shows service capabilities, explains process, demonstrates visual range, reinforces philosophy, answers objections, and closes with a clear contact push.

The page feels intentionally oversized, editorial, and kinetic. It uses high-contrast black/white sections, physical card metaphors, pinned scrolling, large condensed typography, and soft media-driven proof. It avoids a standard SaaS layout. Instead, it behaves like a brand film translated into a web page.

The page's attention strategy is sequential:

1. Establish immediate brand mood through a full-screen reel.
2. Declare the agency's positioning in a bold, condensed manifesto.
3. Create memorability through an unusually long horizontal card journey.
4. Convert abstract capability into four service buckets.
5. Reduce risk by explaining the working process.
6. Show visual taste through a cinematic media grid.
7. Build brand belief through a manifesto-like partner story.
8. Handle practical objections in FAQ.
9. Ask for contact.
10. Leave the visitor with an interactive footer that makes the brand feel alive.

## Brand Personality

Brand Crafters presents itself as:

- Premium, confident, and design-led.
- Studio-like rather than corporate.
- Motion-aware and technically capable.
- Strategic, but not dry.
- Editorial and cinematic.
- Bold in typography, calm in color discipline.
- Human and creative through doodles, paper textures, handwritten notes, and playful physics.

The personality balances two poles:

- Serious business growth language: "strategy", "conversion-ready", "SEO", "growth", "trusted".
- Creative studio signals: cinematic reels, doodles, handwritten note, physical card layers, motion, CGI/media language.

The result is a brand that wants to feel both trusted and visually exciting.

## Design Language

The design language is built from:

- Oversized condensed headlines.
- Very high contrast black and white surfaces.
- Physical paper/card metaphors.
- Rounded cards in services and footer.
- Hard square/flat overrides in the post-second theme for some later sections.
- Editorial whitespace.
- Full-viewport pinned scroll scenes.
- Subtle paper-grid textures.
- Thin line dividers.
- Small uppercase labels.
- Small stars, arrows, dots, underlines, and hand-drawn marks.

The page does not rely on one decorative palette. It uses controlled neutral foundations and introduces pastels or pink only where they serve a purpose: process cards, handwritten notes, footer physics pills, and soft creative accents.

## Typography System

### Display Typography

The display language is Oswald, a condensed, tall, uppercase-friendly typeface. It creates:

- Strong vertical rhythm.
- Poster-like impact.
- Agency/editorial energy.
- A compressed headline footprint, allowing huge text without losing too much layout space.

Where it appears:

- Navbar logo.
- Hero headline.
- Business manifesto headline.
- Service heading and service card titles.
- How-it-works heading and card titles.
- Partner story statement.
- FAQ heading and questions.
- CTA headline.
- Footer brand lockup.

Typical display behaviors:

- Heavy weights: 700 to 900.
- Tight line heights, often near 0.9 to 1.08.
- Letter spacing usually zero or slightly negative on large text.
- Uppercase or title-case depending on section.

### Body Typography

Body and support text use Outfit, Manrope, Inter, and related system fallbacks. This creates:

- Softer readability beneath aggressive headlines.
- Rounded, modern support tone.
- Better paragraph clarity.
- Less visual strain in descriptions, feature lists, FAQ answers, and navigation subtitles.

### Hierarchy Pattern

The page repeatedly uses this hierarchy:

- Tiny uppercase label.
- Huge condensed headline.
- Mid-weight body copy.
- Minimal button or link.
- Motion-supported visual proof.

This makes every section scannable even when the scroll motion is complex.

## Color Psychology

Primary colors:

- Black: authority, premium contrast, agency confidence, cinematic framing.
- White: clarity, gallery-like space, design-system cleanliness.
- Charcoal and muted greys: hierarchy, restraint, text softness.
- Pastel pink, blue, lavender, cream, coral: approachability in process cards.
- Warm orange/brown accents in business cards: creative warmth and tactile identity.
- Pink footer physics shapes: playful creative energy after the serious conversion ask.

The color system deliberately alternates emotional temperature:

- Hero: dark cinematic.
- Business section: bright white confidence.
- Services: dark stage with white cards.
- Process: white and pastel reassurance.
- Cinematic grid: dark immersive proof.
- Partner story: white paper-like creativity.
- FAQ: black practical clarity.
- CTA: white/light human invitation.
- Footer: black interactive brand playground.

## Motion Language

The motion language is premium and scroll-driven. It uses:

- Word-by-word entrance animation.
- Long pinned horizontal scroll.
- Scrubbed card rotation and parallax.
- Sticky card reveal.
- One-time entrance reveals.
- Pin-and-zoom media grid.
- Framer Motion scroll progress mapping.
- SVG path drawing.
- Accordion expansion.
- Matter.js physics.

The motion is not only decoration. It supports the story:

- Hero animation introduces the claim.
- Business track makes the service system feel expansive.
- Services pin creates a staged reveal.
- Process reveal calms the visitor.
- Cinematic grid demonstrates taste without text.
- Partner story creates a manifesto moment.
- FAQ motion keeps dense content digestible.
- Footer physics leaves a memorable final interaction.

Reduced-motion support exists in key areas:

- Smooth scrolling is disabled if the user prefers reduced motion.
- Business horizontal track collapses into a reduced layout.
- Business label loop stops under reduced motion.
- How-it-works and FAQ entrance animations are skipped.
- Continuation section transitions are shortened to near-instant durations.
- Partner reduced-motion CSS removes transitions on roll text and doodles.

## Global Scroll Experience

The page uses Lenis smooth scrolling with:

- Duration: 1.25.
- Vertical gesture orientation.
- Smooth wheel enabled.
- Wheel multiplier: 0.9.
- Touch multiplier: 1.12.
- Touch sync disabled.
- Easing that slows naturally toward the end of a scroll movement.

This gives the entire homepage a softened, cinematic scroll feel. ScrollTrigger is updated from Lenis scroll events so GSAP pinned sections stay synchronized with the custom smooth scroll.

The scroll story is long and deliberate. The visitor does not move from section to section quickly. Instead, multiple sections hold the viewport while the content changes within the same visual frame.

# Section 0 - Navbar

## What The User Sees

The navbar sits over the homepage at the very top. On desktop it is positioned slightly down from the top edge, about 10px. It spans the full width and places the brand at the left, navigation links near the center-right, and a rounded "Get In Touch" CTA at the far right.

The left brand block has two stacked lines:

- "BRAND CRAFTERS" in bold uppercase condensed type.
- "BRANDING STUDIO" below it in smaller uppercase letter-spaced text.

Desktop links:

- Home
- Our Services
- About Us

The CTA reads:

- "Get In Touch ✦"

The CTA contains duplicate text stacked vertically inside a clipped window so it can roll on hover.

## Purpose

The navbar gives orientation without stealing attention from the hero. It keeps the brand visible, makes the site feel complete, and gives immediate access to service and contact paths.

## Business Goal

The navbar supports conversion through persistent contact access. The "Get In Touch" button is the strongest action in the nav and is visually separated from the text links.

## Psychological Effect

The translucent white/black behavior and small uppercase links make the page feel premium and controlled. The brand name being visible from the first second builds recall.

## Visual Hierarchy

1. Brand logo text on the left.
2. Contact CTA on the right.
3. Navigation links as secondary support.
4. "BRANDING STUDIO" as quiet categorization.

## Layout Strategy

Desktop:

- Full-width nav.
- Internal horizontal padding: large, around 48px on desktop.
- Brand at left.
- Links and CTA aligned in a single row at right.
- Gap between desktop links: about 32px.
- CTA height: 42px.
- CTA padding: about 24px left and right.
- CTA border radius: rounded-xl.

Mobile and tablet:

- Nav becomes fixed.
- Menu icon appears.
- Desktop links hide.
- On scroll after 20px, the nav gains a floating glass background.
- Floating mobile nav has black/60 background, white/10 border, 20px backdrop blur, rounded corners, and shadow.

## Element Details

Brand button:

- Position: left-aligned.
- Type: transparent button.
- Visual weight: high because of bold uppercase display type.
- Hover: opacity reduces to about 80 percent over 300ms.
- It looks clickable, but it does not navigate in the current implementation.

Navigation links:

- Desktop only.
- Font size: about 0.85rem.
- Font weight: bold.
- Uppercase.
- Letter spacing: 0.12em.
- Default color on homepage: white/70.
- Hover color: white.
- Transition: 300ms.

CTA button:

- White background with black text on homepage.
- Black background with white text only on services page before floating state.
- Hover background moves to slightly transparent white or black.
- Contains two duplicate rows of the same label.
- The label viewport height is about 1.2rem.

Mobile menu button:

- Circular, 38px by 38px.
- White/8 background on dark surfaces.
- Hover background increases to white/15.
- Icon changes between menu and close.

## Animation Report

Desktop CTA roll:

- Element animated: internal stacked CTA text.
- Trigger: hover over CTA button.
- Initial state: first text row visible.
- Final state: text track translates upward by 50 percent, revealing duplicate row.
- Duration: 500ms.
- Easing: cubic-bezier(0.76, 0, 0.24, 1).
- Star rotation: 180 degrees on hover.
- Star duration: 700ms.
- Effect: polished rolling-label micro-interaction.

Mobile nav background:

- Element animated: nav backdrop layer.
- Trigger: scroll past 20px on viewports below 1024px or menu open.
- Initial state: transparent, no border, no blur, opacity 0, scale 0.98.
- Final state: black/60, white/10 border, 20px blur, opacity 1, scale 1.
- Duration: 500ms.
- Easing: ease-out.

Mobile menu panel:

- Element animated: menu container.
- Trigger: menu button click.
- Initial state: height 0, opacity 0.
- Final state: height auto, opacity 1.
- Exit state: height 0, opacity 0.
- Duration: 300ms.
- Easing: easeInOut.
- Layer behavior: body overflow is set to hidden while menu is open, preventing background scroll.

## Interaction Report

Hover behavior:

- Brand fades slightly.
- Desktop links brighten.
- CTA rolls its text and rotates the star.
- Mobile icon button brightens its circular background.
- Mobile menu links reduce opacity on hover.

Click behavior:

- Desktop nav links route to their paths.
- Mobile menu icon opens/closes the menu.
- Mobile links close the menu after click.
- Mobile CTA button exists visually but has no explicit navigation handler in the current implementation.

Focus state:

- No special custom focus styling is visible for nav links/buttons.
- Browser default focus may appear depending on environment.

Cursor behavior:

- Buttons and links use pointer behavior.

## Section Report

1. What the user sees: a minimal premium nav overlaid on the hero, white text on dark media, with a strong right-side contact button.
2. Why it exists: to orient users and keep contact access available.
3. Business goal: increase service discovery and contact conversion.
4. Psychological effect: confident, studio-like, controlled.
5. Design principles: contrast, restraint, alignment, persistent affordance.
6. Animation principles: small hover delight, reveal through clipping, state transition.

# Section 1 - Hero

## What The User Sees

The homepage opens with a full-screen hero. The outer page surface is light grey, but the actual hero content is a rounded black/media rectangle inset by a very small gutter.

The hero fills the viewport height. Inside it:

- A cinematic background image and looping video cover the entire hero.
- A dark gradient overlay sits on top of the media.
- The main headline sits at the bottom-left.
- The headline reads:

"Shaping modern brands
through digital art & technology"

The headline is uppercase visually because the class forces uppercase. It appears in bold condensed display type, white/light grey, and is split across two lines. The phrase "& technology" is kept together and begins after "art", creating a stronger final phrase.

## Purpose

The hero establishes the agency as cinematic, modern, and visually capable before asking the user to read much. It sells mood first.

## Business Goal

The hero's job is not immediate form conversion. Its job is positioning:

- Brand Crafters is not a basic development shop.
- It combines brand, art, and technology.
- The work feels premium and contemporary.

## Psychological Effect

The visitor feels they have entered a designed experience, not a template. The dark overlay and moving reel create depth. The bottom-left headline placement feels editorial and confident.

## Visual Hierarchy

1. Moving cinematic background.
2. Bottom-left headline.
3. Navbar brand and CTA.
4. Rounded hero frame and dark gradient.

## Layout Strategy

Hero section:

- Full viewport height.
- Full width.
- Background: #f4f4f4.
- Padding: about 6px on smallest screens, 8px on small screens, 10px on large screens.
- Main media wrapper: full height, full width, overflow hidden, rounded 1rem to 1.25rem.

Headline block:

- Position: absolute.
- Desktop left: about 38px.
- Desktop bottom: about 48px from class stack and observed layout.
- Small screens: about 24px left and bottom.
- Max width: 85 percent mobile, 75 percent small, 60 percent large.
- Text aligned left.
- User selection disabled.

Headline typography:

- Display font: Oswald in live browser.
- Desktop size at 1280px: about 41.6px.
- Font weight: 800.
- Line height: about 1.08.
- Letter spacing: about -1.04px at observed desktop.
- Text color: #eeeeee.
- Gap between words: 0.5rem to 0.75rem depending viewport.

## Media Treatment

Media layers:

- Poster image loads eagerly with high priority.
- Video autoplays, loops, is muted, and plays inline.
- Both image and video are absolute, full inset, object-cover.
- The poster gives instant first paint before video readiness.

Overlay:

- Absolute full inset.
- Gradient from black/80 at bottom, black/50 through center, black/20 at top.
- Purpose: protect headline readability while keeping video visible.

## Animation Report

Hero text container:

- Element animated: entire headline wrapper.
- Trigger: page load.
- Initial state: opacity 0, y 30px.
- Final state: opacity 1, y 0.
- Delay: 0.2s.
- Duration: 1.2s.
- Easing: cubic-bezier(0.16, 1, 0.3, 1).
- Direction: upward entrance.
- Effect: soft cinematic reveal.

Headline word sequence:

- Element animated: each word span.
- Trigger: after heading animation starts.
- Container initial state: opacity 0.
- Container final state: opacity 1.
- Children delay: 0.5s.
- Stagger: 0.08s between words.
- Word initial state: opacity 0, y 30px.
- Word final state: opacity 1, y 0.
- Word duration: 0.6s.
- Easing: cubic-bezier(0.16, 1, 0.3, 1).
- Movement: each word rises vertically into place.
- Stagger order: Shaping, modern, brands, through, digital, art, & technology.

Unused hero motion definitions:

- A pop-in variant exists but is not used. It would scale from 0 to 1 with opacity 0 to 1 using spring stiffness 200, damping 10, delay 1.2s.
- A line-drawing variant exists but is not used. It would draw path length 0 to 1, opacity 0 to 1, duration 1.5s, easeInOut, delay 1.5s.

These unused definitions suggest earlier decorative hero ideas were removed or postponed.

## Interaction Report

Hover behavior:

- No hero-specific hover interaction.

Click behavior:

- No hero click behavior.

Cursor behavior:

- Hero content is non-selectable.

Focus state:

- No focusable hero elements inside the hero itself.

## Design Intention

The hero is a brand mood setter. It avoids a cluttered CTA cluster and trusts the navbar CTA. This choice makes the first screen feel more premium and less salesy.

## Section Report

1. What the user sees: a rounded full-screen cinematic reel with a bold bottom-left headline.
2. Why it exists: to immediately position the studio as modern and visually strong.
3. Business goal: create brand trust and curiosity before conversion.
4. Psychological effect: cinematic confidence, premium atmosphere, design authority.
5. Design principles: contrast, image-first storytelling, strong type hierarchy, minimal copy.
6. Animation principles: delayed word reveal, upward entrance, stagger, easing with premium deceleration.

# Section 2 - Business Track Intro

## What The User Sees

After the hero, the page enters a white, full-height business manifesto section. The viewport becomes bright and minimal. On the left sits a circular mechanical/loading-style logo object, made from many pill bars and moving dots. Above it is a small scrolling eyebrow:

"✳ BRAND SYSTEMS IN MOTION"

On the right is a large condensed headline:

"WE CRAFT ICONIC BRANDS
BUILD ELITE PLATFORMS
PRODUCE STUNNING CGI
& DRIVE BUSINESS GROWTH™"

The first two lines are dark. The last two lines are muted grey, creating tonal hierarchy inside the same statement.

Below the headline is body copy:

"We connect brand identity, digital experience, creative content, and growth strategy into one clear system - built to make your business look trusted, move faster, and stand out online."

Below the paragraph are two actions:

- "OUR STORY ✦" as a filled black pill.
- "CONTACT US ↗" as an underlined text link.

## Purpose

This section converts the cinematic promise into strategic positioning. It tells the visitor that the agency's work is not fragmented. Brand, digital, content, and growth are presented as one connected system.

## Business Goal

The business goal is to elevate perceived value. The agency is not selling isolated deliverables. It is selling an integrated growth system.

## Psychological Effect

The white background creates clarity after the dark hero. The huge headline creates certainty. The moving circular visual suggests systems, motion, craft, and technical sophistication.

## Visual Hierarchy

1. Large four-line manifesto headline.
2. Circular animated visual.
3. Body paragraph.
4. Primary/secondary actions.
5. Eyebrow marquee.

## Layout Strategy

The intro panel uses a two-column grid:

- Left column: about 31 percent.
- Right column: flexible content column.
- Max content width: about 1720px, expanding to 1840px on very large screens.
- Column gap: responsive, about 2rem to 5rem.
- Vertical padding: about 4.5rem to 8rem top, 3.75rem to 7rem bottom.

Left visual:

- Full-height flex alignment.
- Circular logo size: clamp from 17rem to 26rem on desktop.
- Shifted slightly left with transform.
- Eyebrow placed absolute near top-left.

Right content:

- Max width: about 43rem to 64rem.
- Aligns to the start.
- Headline font size: about 3rem to 3.75rem on standard desktop, larger on very wide screens.
- Line height: 0.96.
- Letter spacing: 0.02em.

## Element Details

Eyebrow:

- Small uppercase label.
- Uses a spark/star symbol.
- Text track repeats three times.
- Clipped through a masked window so the line feels like a ticker.
- Font: Outfit.
- Weight: 700.
- Color: mid grey.

Circular logo:

- Made of 10 vertical pill bars.
- Bars rotate in increments around a center, creating a radial system.
- Moving balls travel along each bar.
- Neutral fill and soft inset shadows make it feel tactile and dimensional.

Headline:

- Oswald.
- Uppercase.
- Dark first half, grey second half.
- The trademark mark after "GROWTH" makes the claim feel proprietary.

Paragraph:

- Muted grey.
- Weight 500.
- Line height about 1.32.
- Max width prevents the paragraph from becoming too long.

Primary button:

- Black background.
- White text.
- Rounded pill radius.
- Min height roughly 3.4rem to 4.05rem.
- Inset highlight gives subtle premium gloss.

Secondary link:

- Black text.
- Bottom border.
- Smaller height.
- Uses external-arrow symbol.
- More understated than the primary button.

## Animation Report

Eyebrow marquee:

- Element animated: label track.
- Trigger: continuous after render.
- Initial state: translateX 0.
- Final state: translateX -50 percent.
- Duration: 5.4s.
- Easing: linear.
- Loop: infinite.
- Effect: small persistent motion that signals the "systems in motion" idea.

Circular logo moving dots:

- Element animated: dot/ball elements.
- Trigger: continuous after render.
- Movement: translateY from 0 to 12em and back to 0.
- Duration: 3.63s.
- Easing: ease-in-out.
- Loop: infinite.
- Stagger/delay: balls delay in 0.2s increments from 0.2s to 1.6s.
- Layer effect: each dot travels inside a radial pill path, creating a kinetic system.

Business intro section scroll relationship:

- The business section is part of a horizontal pinned camera.
- At the start, the intro is the first full viewport panel.
- A short scroll delay exists before the horizontal track begins moving.
- That delay equals 10 percent of viewport height.

Button hover:

- Primary and secondary actions translate upward by -2px.
- Duration: 260ms.
- Easing: ease.
- Secondary border darkens on hover.

## Interaction Report

Primary action:

- Links to `/about`.
- Hover lifts the button.

Secondary action:

- Links to `/contact`.
- Click also scrolls the window to top with smooth behavior. This creates a conflict between the link destination and scroll action intent; visually the action reads as contact, but the click handler scrolls upward before navigation behavior may occur.

Reduced motion:

- The moving label animation stops when the user prefers reduced motion.
- The entire horizontal track is replaced with a reduced stacked layout.

## Section Report

1. What the user sees: a white manifesto section with a kinetic circular visual and strong agency statement.
2. Why it exists: to define Brand Crafters as an integrated brand/digital/growth partner.
3. Business goal: raise project value and shift perception from task vendor to strategic studio.
4. Psychological effect: clarity, confidence, systems thinking.
5. Design principles: asymmetrical grid, oversized display type, muted supporting copy, primary/secondary actions.
6. Animation principles: looping micro-motion, marquee label, scroll-delayed entrance into a horizontal narrative.

# Section 3 - Business Track Feature Cards

## What The User Sees

As the visitor continues scrolling, the business section becomes a horizontal cinematic track. The viewport stays pinned while large physical-looking cards slide from right to left. The cards are oversized, partly clipped by the viewport edges, and rotated as if placed on a studio table.

There are four feature cards:

1. Strategy
2. Identity
3. Experience
4. Growth

Each card combines:

- A tall paper/device frame.
- A video preview inside the top portion.
- Subtle frame lines.
- Stickers, doodles, or extra paper layers.
- A bold text panel floating beside the card.
- Text laid over dark or orange highlight strips.

## Purpose

This sequence turns the agency offering into a memorable, physical, animated story. Instead of listing services in a static grid, the page lets the visitor "travel through" capability areas.

## Business Goal

The business goal is to make the agency feel high-end, custom, and technically advanced. The long scroll investment makes the offering feel substantial.

## Psychological Effect

The user feels like they are moving through a curated deck of ideas. The physical-card metaphor creates tactility. The parallax rotations create depth and craft.

## Feature Content

### Card 01 - Strategy

Title:

"Strategy"

Description:

"Define positioning, audience,
and direction before design
begins."

Visual details:

- Card base rotation starts around -10 degrees.
- Video preview shows a collaborative/strategy scene.
- Blue vertical sticker appears near the lower-left area.
- Small chart/doodle mark appears near the lower-right.
- Text panel uses dark brown/near-black color #2a1b0b.

Messaging:

- Strategy comes before design.
- The agency begins with positioning and direction.

Psychology:

- Reassures the visitor that the studio does not just make things look good.
- Creates trust in process and thinking.

### Card 02 - Identity

Title:

"Identity"

Description:

"Build a visual system
that feels premium, recognizable,
and consistent."

Visual details:

- Card base rotation around -5 degrees.
- Has an extra back layer named private-back.
- Back layer uses a dark brown top and light lower section.
- A circular decorative emblem appears on the back layer.
- Doodles include a sparkle and a pencil-holder style drawing.
- Text panel uses bright orange #FF681F.

Messaging:

- Identity is system-based, not just logo-based.
- Premium recognition and consistency are emphasized.

Psychology:

- Addresses businesses that need to look more credible and memorable.
- Orange highlights inject energy and creative confidence.

### Card 03 - Experience

Title:

"Experience"

Description:

"Create websites, apps,
and digital journeys
that feel smooth
and conversion-ready."

Visual details:

- Card base rotation starts around -10 degrees.
- Device layer rotates from -4 degrees to 14 degrees as it enters.
- Uses a full-card decorative SVG overlay.
- Bottom-right dot targets appear as tiny detail marks.
- Text panel uses dark brown/near-black #2a1b0b.

Messaging:

- Digital experience is about smoothness and conversion.
- The page connects design polish with business results.

Psychology:

- Reassures founders and teams that the studio understands digital product behavior, not only aesthetics.

### Card 04 - Growth

Title:

"Growth"

Description:

"Connect SEO, content, campaigns,
and visibility into steady
business growth."

Visual details:

- Card base rotation around 3 degrees.
- Includes integrated-back and integrated-note paper layers.
- Handwritten note reads:

"Designed to
stand out,
built to scale!"

- The note uses Caveat cursive.
- The note has beige paper color, soft border, and slightly rotated handwriting.
- Card includes a smiley/face-like doodle mark.
- Text panel uses orange #FF681F.

Messaging:

- Growth is the end state.
- The agency links brand and digital output to discoverability and campaigns.

Psychology:

- Moves from creative value to measurable business outcomes.
- The handwritten note humanizes the section and makes the claim feel crafted.

## Layout Strategy

Business track architecture:

- Sticky camera: full viewport height.
- Minimum sticky height: 640px desktop.
- Horizontal frame: width max-content, minimum 100vw.
- Cards are arranged horizontally after the intro panel.
- Gap between intro and cards: very large, clamp from 12rem to 24rem.
- Card track gap: clamp from 12rem to 26rem.
- Feature width: clamp from 45rem to 70rem on desktop.
- Each feature uses a two-column internal stage:
  - Left: tall card/device.
  - Right: text panel.

Card anchor:

- Width: clamp from 22.5rem to 36rem.
- Aspect ratio: 0.72 / 1.
- Centered in its grid column.

Device frame:

- Tall rounded rectangle.
- Border: 5px to 8px solid white.
- Radius: 18px.
- Top video area: top 3 percent, left/right 3.5 percent, height 61 percent.
- Object fit: cover.
- Frame interior uses thin border and horizontal divider lines.

Text panel:

- Max width: min(36rem, 34vw).
- Uses inline text backgrounds with box-decoration-break clone.
- This creates strip-like labels behind each line.
- Title font size: clamp 3.3rem to 5.9rem.
- Description font size: clamp 1.55rem to 2.45rem.
- Text is white on dark or orange panel backgrounds.

## Scroll Animation System

The entire business track is the most complex animation on the homepage.

### Section Pinning

- Trigger: business section reaches top of viewport.
- Start: top top.
- End: calculated dynamically from horizontal travel and viewport size.
- Scrub on desktop: 1.56.
- Scrub on tablet: 1.78.
- Scrub on mobile: 1.95.
- The section height is dynamically set to scroll length plus viewport height plus any exit hold.
- On desktop, verified height at 1280 x 720: about 16,726px.
- The section gets a negative bottom margin equal to one viewport height, pulling the next section upward into the sticky exit.

### Horizontal Track Motion

- Element animated: entire business frame.
- Initial x: 0.
- Final x: negative horizontal travel distance.
- Direction: content moves left, revealing cards from right to left.
- Easing: none.
- Scrubbed to scroll.
- There is a scroll delay of 10vh before movement begins.

Travel calculation:

- Minimum horizontal travel reference: 294.894vw.
- Desktop viewport offset: 0.12 of viewport width.
- Tablet viewport offset: 0.14.
- Mobile viewport offset: 0.16.
- Desktop blank-space multiplier: 1.03.
- Mobile blank-space multiplier: 1.05.
- Scroll distance multiplier: desktop 5.4, tablet 4.5, mobile 1.6.
- Maximum scroll multiplier: desktop 27 viewport heights, tablet 25, mobile 12.
- Minimum scroll: desktop 9.9 viewport heights, mobile 3.5 viewport heights.
- Scroll speed divisor: 1.22.

### Paper Layer Motion

All paper layers animate while their parent card travels across the viewport.

General paper layer trigger:

- Trigger: card itself.
- Container animation: horizontal track.
- Start: left right.
- End: right left.
- Easing: none.
- Scrub: layer scrub or accent scrub depending layer.

Desktop scrub values:

- Layer scrub: 1.22.
- Accent scrub: 1.34.
- Color scrub exists as 1.62 but is not used for a visible color animation in the current section.

Default paper layers:

- Start xPercent: -16 or 16 depending alternating direction.
- End xPercent: 16 or -16.
- Rotation starts base rotation plus 5 degrees or minus 5 degrees.
- Rotation ends base rotation in the opposite direction.

Integrated note layer:

- Desktop start xPercent: -14.
- Desktop end xPercent: -75.
- Start rotation: base rotation + 8 degrees.
- End rotation: base rotation - 19 degrees.
- On non-desktop, base rotation changes to 10 degrees.

Integrated back layer:

- Desktop start xPercent: -18.
- Desktop end xPercent: 18.
- Start rotation: base + 11 degrees.
- End rotation: base - 11 degrees.

### Device Layer Motion

Card 01:

- Device initial rotation: -20 degrees.
- Final rotation: 10 degrees.
- Trigger: card left reaches viewport right.
- End: card center reaches viewport center.
- Scrub: layer scrub.

Card 02:

- Device starts at base rotation - 13 degrees and xPercent 11.
- Device ends at base rotation + 13 degrees and xPercent -11.
- Since base rotation is -5, it travels from about -18 degrees to 8 degrees.
- Scrub: accent scrub.

Card 03:

- Device initial rotation: -4 degrees.
- Final rotation: 14 degrees.
- End: center center.
- Scrub: layer scrub.

Card 04:

- Device starts at base rotation - 13 degrees and xPercent 11.
- Device ends at base rotation + 13 degrees and xPercent -11.
- Since base rotation is 3, it travels from about -10 degrees to 16 degrees.
- Scrub: accent scrub.

### Text Panel Motion

Text layer:

- Desktop x starts at +4.5rem.
- Desktop x ends at -4.5rem.
- Growth card uses much larger text travel:
  - Desktop: 26rem.
  - Tablet: 14rem.
  - Mobile: 10rem.
- Desktop trigger start: left 82 percent.
- Desktop trigger end: right 18 percent.
- Mobile/tablet trigger start: left right.
- Mobile/tablet trigger end: right left.
- Easing: none.
- Purpose: text has its own parallax drift so it does not feel glued to the card.

## Interaction Report

Integrated note tilt:

- Element animated: the handwritten note on the Growth card.
- Trigger: mouse movement over the note layer.
- Max tilt: 15 degrees.
- Perspective: 1200px.
- Scale on interaction: 1.05.
- Transition speed entering/leaving: 400ms.
- Easing: cubic-bezier(0.03, 0.98, 0.52, 0.99).
- Rotation calculation:
  - Horizontal mouse movement creates rotateY.
  - Vertical mouse movement creates rotateX.
- On mouse leave, the note returns to its base transform.

Videos:

- All feature videos are muted.
- Videos preload as none initially.
- IntersectionObserver plays videos when they are within a 900px root margin and at least 1 percent intersecting.
- Videos pause when out of range.
- This is a performance and battery-conscious behavior.

Reduced motion:

- Horizontal track is replaced with a reduced layout.
- Cards become a grid instead of a pinned horizontal camera.

## Hidden UX Patterns

- The content is present in the DOM before it becomes visually visible. This supports screen readers and search while preserving scroll theater.
- The video playback observer is invisible to users but makes the page lighter.
- Dynamic height recalculation and ResizeObserver prevent sticky-scroll breakage when viewport or content changes.
- Force3D and backface visibility settings reduce jitter during long transform animations.

## Section Report

1. What the user sees: oversized rotating service cards moving horizontally through a pinned white viewport.
2. Why it exists: to turn core capabilities into a memorable visual journey.
3. Business goal: increase perceived craft, sophistication, and breadth.
4. Psychological effect: the visitor feels they are moving through a premium creative deck.
5. Design principles: physical metaphor, editorial scale, contrast strips, staged reveal.
6. Animation principles: pinning, scrubbed horizontal movement, parallax layers, rotation, scroll-synced text drift, performance-conscious video playback.

# Section 4 - Our Services

## What The User Sees

The page transitions into a black services section. The section starts with a small label and a large headline:

Label:

"Our Services"

Headline:

"Elevating Brands
Across Every Dimension"

Below, four white service cards rise into view as the section pins:

1. Brand Identity
2. Websites & Apps
3. Creative Production
4. Marketing & Visibility

The cards are white on a black stage. Each card has:

- A black icon box at top-left.
- A top-right arrow button.
- A bold service title.
- A description paragraph.
- A thin divider.
- A vertical feature list with dot markers.
- A black "View Details" CTA bar.

## Purpose

The services section converts the broad business-track story into a clear service menu.

## Business Goal

The goal is service comprehension and segmentation. Visitors can identify which offering matches their need.

## Psychological Effect

The black background makes the white cards feel like important objects being presented on a stage. The cards rising upward create anticipation and make each service feel intentionally introduced.

## Visual Hierarchy

1. Huge "Elevating Brands Across Every Dimension" headline.
2. White service cards.
3. Card titles.
4. Card descriptions.
5. Feature bullet lists.
6. View Details CTA.
7. Scroll-down cue.

## Layout Strategy

Section:

- Full width.
- Background: black.
- Text: white.
- z-index: 30.
- Desktop minimum height: 115vh.
- Desktop layout vertically centered.
- Large negative top margin on desktop, -100vh, allowing it to overlap with the previous pinned experience.
- Padding: 16 to 24 units vertically depending viewport.
- Max width: 1800px.
- Horizontal padding: 16px mobile, 32px medium, 40px large.

Header:

- Top label row uses a 1px horizontal line, 48px wide.
- Label is uppercase, small, letter-spaced, white/70.
- Headline uses large Oswald, 4xl to 6xl, 900 weight, tight 1.05 line-height.

Cards grid:

- One column on mobile.
- Four columns on desktop.
- Gap: 24px.
- Cards stretch to fill available height.

Card:

- Sticky on mobile/tablet.
- Relative on desktop.
- Mobile sticky top uses `calc(12vh + index * 16px)`, creating a stepped stack.
- Min height: 550px mobile, 500px small, full-height desktop.
- Padding: 24px mobile, 32px medium.
- Background: white.
- Border: black/10 default.
- Rounded: 32px inline style.
- Cursor: pointer.
- Origin: top for scale animation.

## Service Content

### Brand Identity

Description:

"We craft bold, memorable brand identities that give your business a clear visual voice. From logo design to visual systems and messaging, every detail is shaped to build trust, recognition, and premium appeal."

Features:

- Logo Design
- Visual Branding
- Packaging Design
- Storytelling & Messaging

Purpose:

- Positions identity as trust and recognition.
- Appeals to businesses that need to look more premium and memorable.

### Websites & Apps

Description:

"We design and develop modern websites and app experiences that feel clean, fast, and user-focused. From landing pages to full digital products, we create smooth interfaces built to convert."

Features:

- Website Development
- Landing Pages
- UI/UX Design
- Android & iOS Apps
- Conversion-Focused Interfaces

Purpose:

- Converts design credibility into digital product capability.
- Emphasizes speed, cleanliness, and conversion.

### Creative Production

Description:

"We create scroll-stopping digital content that brings your brand to life across social media, ads, and online platforms. From motion graphics to CGI, every asset is built to capture attention."

Features:

- Social Media Design
- Motion Graphics
- Video Editing
- 3D Animation & CGI
- Ad Creatives

Purpose:

- Shows content and campaign asset capability.
- Uses "scroll-stopping" to speak directly to social attention economics.

### Marketing & Visibility

Description:

"We help your brand reach the right audience through SEO, performance marketing, social media, and smart visibility strategies built for long-term growth."

Features:

- Digital Marketing
- Google & Meta Ads
- SEO / AEO / GEO Optimization
- Influencer Marketing
- Social Media Marketing

Purpose:

- Connects creative work to traffic, visibility, and growth.
- Expands agency value beyond design.

## Animation Report

Desktop services animation:

- Trigger: services section.
- Start: center center.
- End: +500 percent scroll distance.
- Pin: true.
- Scrub: 1.
- Initial card state: y 480px, yPercent 50.
- Final card state: y 0, yPercent 0.
- Duration in timeline: 1.
- Stagger: 0.5 between cards.
- Easing: none.
- Effect: cards rise into the black stage in sequence.

Mobile/tablet services animation:

- Cards use native CSS sticky.
- GSAP scales previous cards when the next card approaches.
- Animated element: each card except the last.
- Initial scale: 1.
- Final scale: 0.92.
- Trigger: next card.
- Start: top bottom minus 100px.
- End: top top plus 12 percent viewport height plus index-based 16px.
- Scrub: true.
- Effect: premium stacking deck, where earlier cards recede as new cards stick.

Hover animation:

- Card border becomes stronger.
- Card moves upward by -0.5rem.
- Desktop card shadow appears.
- Hover overlays fade from opacity 0 to 1 over 500ms.
- Icon container scales to 1.10 over 500ms.
- Icon rotates -3 degrees.
- Top-right arrow container scales to 1.10 and rotates -45 degrees.
- Arrow color changes from black to white as its container turns black.
- Feature dots darken and receive small glow.
- CTA arrow moves 0.5 units right and 0.5 units up.

Scroll cue:

- Text reads "Scroll down".
- Wave animation moves horizontally from 0 to -45px.
- Duration: 0.9s.
- Easing: linear.
- Loop: infinite.
- Hover increases wave opacity from 0.8 to 1 over 300ms.

## Interaction Report

Cards:

- Cursor pointer.
- Cards visually react on hover.
- The "View Details" CTA is visually present but implemented as a div, not a link or button.
- The entire card has pointer cursor but no click handler in the current implementation.

Scroll cue:

- Link target is `#signal-section`.
- No live section with that id is rendered on the homepage. This means the scroll cue may not land on a valid destination.

Focus state:

- No custom focus state for cards because cards are not semantic interactive elements.
- Scroll cue is a link and can receive default focus.

## Premium Decisions

- The section stages cards instead of placing them all at once.
- The black-to-white contrast makes each card feel like a product object.
- Repeated card anatomy helps comparison.
- Service cards combine strategic language with concrete deliverables.

## Section Report

1. What the user sees: a black section with large headline and white service cards rising into view.
2. Why it exists: to clarify the agency's service categories.
3. Business goal: help visitors self-select the service they need and move toward contact.
4. Psychological effect: clarity, breadth, capability, premium staging.
5. Design principles: high contrast, repeated card system, icon-based scanning, strong title hierarchy.
6. Animation principles: pinned reveal, stagger, sticky stacking, hover feedback, looping scroll cue.

# Section 5 - How It Works

## What The User Sees

The page turns bright white again. On the left is a sticky text block:

Headline:

"How it
works?"

Paragraph:

"From the first conversation to final launch, every stage stays clear, collaborative, and focused on what your business needs next."

On the right is a grid of five pastel cards:

1. Start with discovery
2. Set the direction
3. Build the system
4. Refine together
5. Launch and grow

Each card has a soft background color and a large oversized number sitting low in the card.

## Purpose

This section reduces uncertainty. After the high-motion capability sections, it tells the visitor how collaboration will actually happen.

## Business Goal

The goal is risk reduction. A user who likes the work still needs to know the process is organized, collaborative, and predictable.

## Psychological Effect

The section feels calmer, softer, and more approachable. Pastel colors and numbered steps make the agency feel structured and friendly.

## Visual Hierarchy

1. Left sticky headline.
2. Process cards.
3. Card titles.
4. Large background numbers.
5. Supporting paragraph text.

## Layout Strategy

Section:

- Full width.
- White background.
- Black text.
- Vertical padding: 96px to 128px.

Container:

- Max width: 1800px.
- Horizontal padding: 24px mobile, 48px medium, 80px large.
- Desktop flex row.
- Gap: 64px to 96px.

Left column:

- 30 percent width on desktop.
- Sticky top: 160px.
- The heading is split into two clipped lines.

Right column:

- 70 percent width on desktop.
- Grid of 2 columns on smaller screens and 3 columns on large screens.
- Gap: 16px to 24px.

Cards:

- Rounded 16px to 24px.
- Padding 20px to 40px.
- Min height from 220px on small screens to 420px desktop.
- Overflow hidden so the big number can be partially cropped.

## Step Details

### 01 - Start with discovery

Text:

"We understand your business, audience, goals, and what needs to change before we begin building."

Background:

- Pale pink.
- Number color: stronger pink.

Purpose:

- Shows the agency starts with understanding, not production.

### 02 - Set the direction

Text:

"We turn the brief into a clear strategy, project scope, timeline, and creative direction."

Background:

- Pale blue.
- Number color: aqua/blue.

Purpose:

- Communicates clarity and project control.

### 03 - Build the system

Text:

"Strategy becomes identity, website, content, and the tools your brand needs to work consistently."

Background:

- Pale lavender.
- Number color: purple.

Purpose:

- Links strategy to tangible outputs.

### 04 - Refine together

Text:

"We share focused versions, collect useful feedback, and sharpen every important detail."

Background:

- Pale cream/yellow.
- Number color: warm yellow.

Purpose:

- Reduces fear of unclear revision cycles.

### 05 - Launch and grow

Text:

"You receive a polished, ready-to-use brand system with support to move forward confidently."

Background:

- Pale coral/pink.
- Number color: warm coral.

Purpose:

- Ends with readiness and confidence.

## Animation Report

Entrance animation:

- Trigger: section reaches 75 percent from top of viewport.
- Runs once.
- Skipped under reduced motion.
- Timeline default easing: power4.out.

Title lines:

- Element: `.hiw-title-line`.
- Initial state: yPercent 110.
- Final state: yPercent 0.
- Duration: 1.5s.
- Starts at timeline time 0.
- Clipping parent hides overflow, creating a reveal from below.

Description:

- Initial state: opacity 0, y 20px.
- Final state: opacity 1, y 0.
- Duration: 1.5s.
- Starts at timeline time 0.

Cards:

- Initial state: opacity 0, y 40px.
- Final state: opacity 1, y 0.
- Duration: 1.5s.
- Starts at timeline time 0.
- No stagger is defined, so cards reveal together.

## Interaction Report

Hover behavior:

- No card hover behavior is defined.

Click behavior:

- Cards are informational only.

Focus state:

- No focusable elements inside this section.

Cursor behavior:

- Default cursor.

## Design Intention

The section intentionally slows the experience down. After long pinned animations, it gives the user a stable explanation of collaboration.

## Section Report

1. What the user sees: sticky left explanation and pastel process cards.
2. Why it exists: to explain how work happens.
3. Business goal: reduce uncertainty and increase readiness to inquire.
4. Psychological effect: calm, clarity, collaboration, safety.
5. Design principles: asymmetry, process visualization, soft color coding, sticky anchoring.
6. Animation principles: one-time reveal, clipped text rise, simultaneous card fade-up.

# Section 6 - Sticky Cinematic Grid

## What The User Sees

The page enters a dark full-viewport 3x3 media grid. There is no visible text. The section is pure visual proof.

The grid contains nine media cells:

- Videos and images.
- Lifestyle scenes.
- Product/food imagery.
- Creative tabletop imagery.
- Dark cinematic footage.
- A central aquatic/aquarium-style media tile.

The grid has thin dark gaps, subtle borders, and overlay gradients. As the user scrolls, the whole grid zooms toward the center tile.

## Purpose

The section demonstrates taste, media handling, and visual range without explaining it. It gives the page a portfolio-like breath between service/process and brand philosophy.

## Business Goal

The business goal is proof of creative capability. It implies Brand Crafters can work with visual content, cinematic edits, social assets, and rich media.

## Psychological Effect

The lack of text makes the user stop reading and simply look. The grid zoom creates immersion and makes the visitor feel pulled into the brand's creative world.

## Visual Hierarchy

1. Center media tile.
2. Surrounding tiles.
3. Grid lines and overlays.
4. Dark frame.

## Layout Strategy

Section:

- Full width.
- Height: 100vh.
- Minimum height: 680px desktop.
- Background: #050505 / black via theme overrides.
- Overflow hidden.
- z-index: 32.

Grid:

- Absolute full inset.
- 3 columns by 3 rows.
- Gap: clamp 0.35rem to 0.8rem.
- Padding: clamp 0.35rem to 0.8rem.
- Background: #0b0b0b.

Cell:

- Overflow hidden.
- Background: #111111.
- Media object-fit: cover.
- Media starts at scale 1.01.
- Default filter: saturate 0.9, contrast 1.05, brightness 1.05.
- Center cell filter: saturate 1, contrast 1.05, brightness 1.1.

Overlay:

- Section has dark top/bottom and side gradients.
- Section also has a faint grid overlay with white lines and screen blend mode.
- Each cell has internal highlight/darkening overlay and a faint border.

## Animation Report

Pinned grid animation:

- Trigger: grid section reaches top of viewport.
- Start: top top.
- End: +400 percent.
- Pin: true.
- Scrub: true.
- Anticipate pin: 1.

Grid scale:

- Element: full 3x3 grid.
- Initial state: scale 1.
- Final state: scale 3.08.
- Timeline duration: 2.
- Easing: none.
- Transform origin: center center.
- Effect: camera pushes into the center tile.

Non-center cell fade:

- Element: all cells except center cell.
- Initial opacity: 1.
- Final opacity: 0.28.
- Duration: 1.
- Starts at timeline position 1.
- Easing: none.
- Effect: surrounding media recedes.

Center media scale:

- Element: center cell media.
- Initial scale: 1.01 from CSS.
- Animated target scale: 1.05.
- Duration: 1.
- Starts at timeline position 1.
- Easing: none.
- Effect: the center tile feels selected and magnified.

Hold:

- Final timeline includes a 0.5 duration hold.
- Purpose: gives the zoom a resting moment before section exit.

Video behavior:

- Videos are muted.
- Videos autoplay and loop.
- Videos are set to preload auto when the section animation hook runs.
- Videos pause on cleanup.

## Interaction Report

Hover behavior:

- None.

Click behavior:

- None.

Focus state:

- Media grid is marked aria-hidden, so it is decorative from an accessibility standpoint.

Cursor behavior:

- Default.

## Design Intention

This is a visual interlude and proof-of-taste section. It uses motion and media selection to communicate capability faster than copy could.

## Section Report

1. What the user sees: a full-screen 3x3 cinematic media grid that zooms into the center.
2. Why it exists: to show visual range and creative taste.
3. Business goal: build trust in production capability.
4. Psychological effect: immersion, visual proof, portfolio energy.
5. Design principles: grid, contrast, controlled cropping, visual focus.
6. Animation principles: pin, zoom, opacity focus, center-target emphasis.

# Section 7 - Partner Story

## What The User Sees

The page turns white again. The section behaves like a pinned brand manifesto on paper. The background has a very faint 44px grid texture with a vertical mask that fades it at top and bottom.

At the center is a small uppercase subheading:

"The Brand Crafters Way"

Below it is a large multi-line statement:

"Where experience drives
strategy, creativity, execution,
stronger brands,
deeper connections,
lasting influence,
and measurable growth."

The final line is accented in lighter grey. Around the text are hand-drawn doodles:

- Sparkle marks.
- Curved arcs.
- Arrow shapes.
- Squiggles.
- Star shapes.
- Underlines.
- Rays.
- Dashed loops.
- Wave marks.

The doodles draw in and drift subtly as the user scrolls.

## Purpose

The section is a philosophy and trust-building statement. It tells the visitor what kind of partner the agency intends to be.

## Business Goal

The goal is to make Brand Crafters feel like a strategic partner, not only a production vendor. It connects experience, strategy, creativity, execution, brand strength, connection, influence, and growth.

## Psychological Effect

The white paper surface and hand-drawn details make the brand feel human and crafted. The huge central text makes the message feel important and memorable.

## Visual Hierarchy

1. Central rolling headline.
2. Subheading label.
3. Doodles around the perimeter.
4. Paper grid texture.

## Layout Strategy

Section:

- Minimum height: 280vh.
- Background: white.
- Color: near-black.
- z-index: 37.

Sticky viewport:

- Position: sticky.
- Top: 0.
- Height: 100vh / 100dvh.
- Minimum height: 760px desktop.
- Centered flex alignment.
- Overflow hidden.

Central container:

- Max width: 1340px.
- Center aligned.
- Padding: 3rem to 5rem vertically, 1.25rem to 5.5rem horizontally.
- Perspective: 1100px.
- Slight upward transform: -0.6vh.

Headline:

- Flex column.
- Center aligned.
- Gap: 0.55rem to 0.95rem.
- Font: Oswald.
- Size: clamp 3.25rem to 5.85rem.
- Weight: 700.
- Line height: 0.94.
- No letter spacing.
- White-space nowrap on desktop.

Subheading:

- Font size: 0.92rem to 1.18rem.
- Weight: 700.
- Letter spacing: 0.22em.
- Uppercase.
- Color: rgba(8,8,8,0.5).

## Animation Report

Scroll progress source:

- Trigger target: partner section.
- Offset mapping: starts when section start reaches 75 percent of viewport, ends when section end reaches viewport end.
- Scroll progress is smoothed with a spring:
  - Stiffness: 26.
  - Damping: 24.
  - Rest delta: 0.001.

Text line hinge reveal:

- Element: each line of the main statement.
- Start time: index * 0.05.
- End time: start + 0.15.
- Initial rotateX: -100 degrees.
- Final rotateX: 0 degrees.
- Initial opacity: 0.
- Final opacity: 1.
- Transform origin: 50 percent 0 percent.
- Y movement:
  - First two lines: 0 to -2px.
  - Later lines: 0 to -7px.
- Effect: each line flips down from a top hinge and becomes readable quickly.

Subheading badge:

- Initial opacity: 0.2.
- Final opacity: 1.
- Initial y: 16px.
- Final y: 0.
- Progress range: 0 to 0.15.

Doodle path drawing:

- Element: SVG paths, lines, and circles.
- Initial pathLength: 0.
- Final pathLength: 1.
- Progress range: 0 to 0.4.
- Effect: doodles appear as if hand-drawn during scroll.

Doodle opacity:

- Initial opacity: 0.15.
- Final opacity: 1.
- Progress range: 0 to 0.2.

Doodle drift:

- Right-drifting doodles y: 16px to -16px.
- Left-drifting doodles y: -12px to 12px.
- Progress range: 0 to 1.
- Effect: ambient floating motion around the fixed text.

## Interaction Report

Hover behavior:

- None.

Click behavior:

- None.

Focus state:

- No focusable elements.

Responsive behavior:

- On mobile, section min-height becomes 230vh.
- Sticky height remains 100dvh.
- Heading allows wrapping instead of nowrap.
- Doodles become fainter.
- Several middle doodles are hidden to prevent text overlap.
- Top and bottom doodles are pushed outward to frame the headline.

Reduced motion:

- Roll text and doodle transitions are removed.

## Design Intention

This section acts like the emotional center of the page. It is not a feature list. It is a brand belief statement.

## Section Report

1. What the user sees: a white paper-like pinned manifesto with hand-drawn animated doodles.
2. Why it exists: to communicate the agency philosophy.
3. Business goal: deepen trust and differentiation.
4. Psychological effect: human craft, strategic maturity, confidence.
5. Design principles: centered statement, paper texture, peripheral doodles, restrained black/white palette.
6. Animation principles: scroll-progress hinge reveal, SVG path drawing, opacity ramp, subtle drift.

# Section 8 - FAQ

## What The User Sees

The page transitions into a black FAQ section that overlaps the partner story. The top of the white partner section can still be visible briefly as the FAQ panel rises.

Left column:

- Small label: "FAQ"
- Large heading:

"Frequently
Asked Questions"

- Intro paragraph:

"Clear answers before we start. Here is what most businesses want to know before working with Brand Crafters."

Right column:

- A list of seven questions with thin horizontal dividers.
- Each question has a circular arrow/chevron icon at the right.
- Open answers expand beneath the question.

## Purpose

The FAQ removes practical objections after the brand and service story has done its emotional work.

## Business Goal

The business goal is conversion support. It answers pricing, timeline, support, revisions, platforms, and scope questions before the CTA.

## Psychological Effect

The dark section feels serious and practical. It creates a support desk moment: clear, direct, and confidence-building.

## FAQ Content

### What services does Brand Crafters provide?

Answer:

"We help businesses with brand identity, website and app design, creative production, SEO, digital marketing, and growth-focused content systems. Every project is shaped around your business stage, audience, and goals."

Purpose:

- Summarizes breadth.
- Reinforces customization.

### How do you price your agency projects?

Answer:

"Pricing depends on the scope, timeline, deliverables, and level of creative or technical work required. After understanding your needs, we share a clear proposal with transparent pricing."

Purpose:

- Avoids generic pricing while promising transparency.

### What is your typical project timeline?

Answer:

"Timelines depend on the project size. A focused landing page may move faster, while a complete brand and website system can take several weeks from discovery to launch."

Purpose:

- Sets realistic expectations.

### Do you offer ongoing support after launch?

Answer:

"Yes. We can support your brand after launch with website updates, SEO, campaign improvements, content direction, and digital growth support."

Purpose:

- Opens recurring support and retainer possibility.

### Can you work with our existing brand?

Answer:

"Yes. We can refine an existing identity, improve your website, or build a stronger system around what your business already has."

Purpose:

- Expands market beyond new-brand projects.

### Do you provide revisions during the design process?

Answer:

"Yes, we work collaboratively and offer focused revision rounds at key stages to ensure the final result aligns perfectly with your vision and business goals."

Purpose:

- Reduces fear of being stuck with a first draft.

### What platforms do you build websites and apps on?

Answer:

"We are entirely tech-agnostic and build on modern, scalable stacks tailored exactly to your needs. Whether that means React, Next.js, Flutter, Swift, or virtually any other tech stack in the world, we use the right tools for the job."

Purpose:

- Positions the studio as flexible and technical.

## Layout Strategy

Section:

- Full width.
- Background: #080808.
- Text: white.
- z-index: 40.
- Padding: 64px mobile to 96px desktop.
- Minimum height: 100vh on smaller breakpoints.
- Top margin: -100vh, creating overlap with partner story.

Inner wrapper:

- Parallax inner wrapper.
- Max width: 1800px.
- Horizontal padding: 24px mobile, 48px medium, about 5.2vw desktop.
- Desktop flex row.
- Gap: 40px to about 5.1vw.

Left column:

- Full width on mobile.
- 35 percent desktop, 30 percent extra-large.
- Sticky top: 160px.
- Text aligned left.

Right column:

- 65 percent desktop, 70 percent extra-large.
- Full width on mobile.
- Border top starts the list.

Question row:

- Padding: 20px mobile, 32px medium, 34px desktop.
- Display: flex between text and icon.
- Cursor: pointer.
- Question font: Oswald.
- Desktop question size: about 30px.
- Weight: 600.

Icon:

- Circle: 36px mobile, 44px medium.
- Border: white/25 closed, white when open.
- Closed text color: white.
- Open state: white background, black icon.

Answer:

- Font: body.
- Size: 16px to 18px.
- Color: white/60.
- Line height: 1.6.
- Right padding on desktop: 96px.

## Animation Report

FAQ entrance timeline:

- Trigger: FAQ animation trigger wrapper.
- Start: top bottom.
- Runs once.
- Easing: power4.out.
- Skipped under reduced motion.

FAQ label and heading:

- Element: title lines.
- Initial state: yPercent 110.
- Final state: yPercent 0.
- Duration: 0.4s.
- Starts at timeline time 0.

FAQ description:

- Initial state: opacity 0, y 20px.
- Final state: opacity 1, y 0.
- Duration: 0.4s.

Borders:

- Initial opacity: 0.
- Final opacity: 1.
- Duration: 0.4s.

Question text:

- Initial state: yPercent 110.
- Final state: yPercent 0.
- Duration: 0.4s.
- Uses overflow clipping around each question line.

Question icon:

- Initial state: scale 0, opacity 0.
- Final state: scale 1, opacity 1.
- Duration: 0.4s.

Parallax:

- Element: FAQ parallax inner wrapper.
- Initial y: 5vh.
- Final y: -5vh.
- Trigger: FAQ section.
- Start: top bottom.
- End: bottom top.
- Scrub: 2.
- Easing: none.
- Effect: FAQ content slowly floats upward as the page scrolls.

Accordion open/close:

- Closed state: grid rows 0fr, opacity 0, padding bottom 0.
- Open state: grid rows 1fr, opacity 1, padding bottom 20px to 32px.
- Duration: 500ms.
- Easing: cubic-bezier(0.4, 0, 0.2, 1).
- Icon SVG rotates 180 degrees when open.
- Icon container turns white with black icon.

## Interaction Report

Hover behavior:

- Closed question text shifts from white to white/80.
- Icon border strengthens from white/25 to white/50.

Click behavior:

- Clicking a question toggles it open.
- Only one FAQ can be open at a time.
- Clicking an already open question closes it.

Active state:

- Open question text becomes white/80.
- Icon background becomes white.
- Icon color becomes black.
- Answer expands below.

Focus state:

- The clickable FAQ row is a generic div with `focus:outline-none`.
- It has no semantic button role and no tab index in the current implementation.
- This means keyboard accessibility is limited even though the visual interaction is clear for mouse/touch users.

Cursor behavior:

- Question rows use pointer cursor.

## Section Report

1. What the user sees: a dark FAQ panel with sticky left heading and accordion questions on the right.
2. Why it exists: to answer objections before the final CTA.
3. Business goal: increase inquiry readiness by clarifying service scope, pricing, timing, support, revisions, and technology.
4. Psychological effect: practical confidence and reduced uncertainty.
5. Design principles: two-column support layout, high contrast, divided list, sticky context.
6. Animation principles: quick entrance reveal, accordion expansion, parallax float, icon state feedback.

# Section 9 - CTA

## What The User Sees

The page turns into a light image-backed CTA. A large image of a professional person using a laptop sits on the right side of the composition. The background is clean and bright.

Top-left headline:

"Build a memorable brand.
Launch a premium digital experience."

Below the heading:

"Get in touch" with an arrow.

Bottom-left paragraph:

"Tell us what you are building. We will help you shape the right identity, website, content, and growth direction for your next stage."

## Purpose

This is the final direct conversion screen before the footer. It asks the visitor to contact the studio after the page has built desire, trust, and clarity.

## Business Goal

Primary goal:

- Drive contact inquiries.

Secondary goal:

- Reframe the inquiry as collaborative planning: "Tell us what you are building."

## Psychological Effect

The section feels human and approachable after many graphic/motion-heavy sections. The laptop image suggests professional work, calm consultation, and real execution.

## Visual Hierarchy

1. Huge top-left headline.
2. Human image on right.
3. Underline CTA.
4. Bottom-left explanatory paragraph.

## Layout Strategy

Section:

- Position: relative.
- z-index: 20.
- Minimum height: 600px, 800px on large screens.
- Background: light grey surface.
- Overflow hidden.
- Flex column, content anchored between top and bottom.

Background:

- Desktop image hidden on mobile, visible from medium screens.
- Desktop image covers full area and aligns object-position to the right.
- Mobile image covers full area, with gradient overlays to preserve text readability.

Content wrapper:

- Full width.
- Minimum height matches section.
- Padding: 16px mobile, 32px medium, 40px large.
- Bottom padding: 64px mobile, 96px large.
- Top padding: 32px mobile, 48px large.
- Flex column with space between header/CTA and paragraph.

Headline:

- Font: Oswald.
- Size: 2.8rem mobile, 4rem small, 4.5rem large.
- Weight: 900.
- Line height: 1.05.
- Letter spacing: tight.
- Color: charcoal black.
- Max width: 4xl.

CTA:

- Inline-flex column.
- Text size: 18px mobile, 20px small.
- Gap between text and arrow: 16px.
- Bottom border line.
- The CTA is visually minimal, more editorial link than heavy button.

Paragraph:

- Max width: 450px.
- Font: body.
- Size: 16px mobile, 18px small.
- Line height: 1.6.
- Color: mid grey.
- Opacity: 60 percent.

## Animation Report

No entrance animation is defined for the CTA section.

CTA hover arrow:

- Element: arrow wrapper's inner track containing two arrow images.
- Initial state: first arrow visible.
- Final state: inner track translates left by 100 percent, revealing duplicate arrow.
- Duration: 500ms.
- Easing: cubic-bezier(0.16, 1, 0.3, 1).
- Effect: arrow slides through like a conveyor.

Underline fill:

- Element: fill-line inside the CTA underline.
- Initial width: 0.
- Final width: 100 percent.
- Trigger: hover on CTA group.
- Duration: 500ms.
- Easing: cubic-bezier(0.16, 1, 0.3, 1).
- Effect: the CTA becomes more assertive while remaining elegant.

Mobile gradients:

- Left gradient: light grey 90 percent to transparent.
- Bottom gradient: light grey 90 percent to transparent.
- Purpose: invisible readability support over the background image.

## Interaction Report

Hover behavior:

- Arrow slides.
- Underline fills.

Click behavior:

- CTA links to `/contact`.

Focus state:

- No custom focus style is defined.
- Browser default may apply.

Cursor behavior:

- Pointer on CTA link.

## Section Report

1. What the user sees: a clean image-backed final CTA with huge two-line headline and subtle contact link.
2. Why it exists: to convert interest into action.
3. Business goal: contact inquiry.
4. Psychological effect: approachable professionalism and readiness.
5. Design principles: large type, human image, minimal link CTA, high whitespace.
6. Animation principles: hover line fill, arrow slide, no distracting entrance motion.

# Section 10 - Footer

## What The User Sees

The footer is a black rounded-top section. It feels like a final interactive playground.

Layout:

- Two-column grid on desktop.
- Left column contains brand block and navigation block.
- Right column contains a physics playground.
- Bottom bar contains copyright and legal links.

Brand block:

- Dark card background.
- Large radial/starburst mark at left.
- Huge stacked wordmark:

"BRAND
CRAFTERS"

Because the wordmark is extremely large, it can be partially clipped depending on viewport width and scroll position, creating a bold editorial crop.

Navigation block:

- Dark card background.
- Two columns:
  - Quick Links
  - Explore

Quick Links:

- Home
- About
- Our Services
- Contact

Explore:

- Brand Identity
- Websites & Apps
- Creative Production
- Marketing & Visibility

Bottom CTA inside nav block:

- "Start a project"
- Right-side circular arrow button.

Physics playground:

- Black/dark surface.
- Pink pill tags fall and collide.
- Pink circular symbols also fall.
- Tags include:
  - Digital Strategy
  - Creative Branding
  - UI/UX Design
  - Web Development
  - SEO & Content
  - Social Media Marketing
  - Conversion Optimization

Bottom bar:

- "© 2026 BRAND CRAFTERS"
- Privacy Policy
- Terms of Service

## Purpose

The footer gives final navigation and leaves a memorable tactile interaction. Instead of ending with static links, the page ends with a playful physics system that reinforces creativity and technical skill.

## Business Goal

The footer supports:

- Secondary navigation.
- Service recall.
- Contact conversion through "Start a project".
- Brand memorability.

## Psychological Effect

The physics playground creates surprise. It makes the brand feel playful, technically capable, and different. The black footer also returns the page to a premium dark environment after the bright CTA.

## Visual Hierarchy

1. Huge brand wordmark.
2. Physics playground motion.
3. Quick Links.
4. Explore service links.
5. Start a project CTA.
6. Bottom legal bar.

## Layout Strategy

Footer:

- z-index: 50.
- Background: black.
- Rounded top corners: 30px mobile, 50px medium.
- Padding: 16px mobile, 32px medium, 40px large.
- Cards use #0A0A0A.
- Gap: 16px.

Desktop:

- Two columns.
- Left column stacks brand card and nav card.
- Right column is the physics playground.

Brand card:

- Flex row.
- Gap: 24px to 40px.
- Padding: 32px to 64px.
- Min height: 250px mobile, 300px large.
- Wordmark font size: 3rem mobile to 7rem large.
- Line height: 0.9.
- Uppercase.
- Very bold.

Navigation card:

- Rounded 20px.
- Padding: 32px to 64px.
- Min height: 380px mobile, 400px large.
- Two-column internal grid.
- Section labels are small uppercase grey.
- Quick links are larger white bold text.
- Explore links are smaller grey semibold text.

Physics playground:

- Min height: 400px mobile, 500px medium.
- Dark rounded container.
- Overflow hidden.

## Animation And Physics Report

Physics trigger:

- Element observed: physics scene container.
- Trigger: enters viewport with threshold 0.2.
- When 20 percent visible, physics starts.
- Observer disconnects after activation.

Measurement pass:

- Hidden tag elements are measured before physics bodies are created.
- This makes the collision bodies match actual text pill dimensions.

Physics world:

- Engine: Matter.js.
- Background: transparent.
- Wireframes: false.
- Pixel ratio: devicePixelRatio.
- Gravity:
  - Desktop: y = 2.0.
  - Mobile: y = 0.8.

Walls:

- Static floor below the visible area.
- Very large left and right walls outside the viewport.
- Walls are invisible.

Tag bodies:

- Shape: rectangle with chamfer radius equal to half height, creating pill collision.
- Start x: random between 100px and width minus 200px.
- Start y: -150px minus index * 100px.
- Restitution: 0.45.
- Friction: 0.4.
- Density: 0.002.
- Fill: pale pink #FCE7F8.
- Text drawn manually after render in dark plum #3A0526.
- Desktop label font: 20px, weight 600.
- Mobile label font: 14px.

Circle bodies:

- Two circles.
- Desktop radii: 100px and 90px.
- Mobile radii: 50px and 45px.
- Start y: -300px and then -150px apart.
- Fill: #FCA5E1.
- Restitution: 0.5.
- Friction: 0.3.
- Density: 0.003.
- Cross/plus symbols drawn manually after render.
- Second circle symbol rotates 45 degrees to become an X-like mark.

Mouse interaction:

- Mouse constraint is added.
- Stiffness: 0.2.
- Users can drag physics bodies.
- This creates direct tactile interaction.

Out-of-bounds safety:

- If a body moves too high, it is clamped.
- If a body moves too far left/right, it resets to center and falls again.
- If a body falls below the scene, it resets above the scene.

Cleanup:

- Resize listener removed.
- Render and runner stopped.
- World and engine cleared.
- Canvas removed.

## Interaction Report

Footer links:

- Quick Links hover: text fades to white/70.
- Explore links hover: text changes from grey to white.
- Bottom legal links hover: text changes to white.

Start project CTA:

- Text changes from grey to white on hover.
- Arrow circle changes from transparent/dark border to white background.
- Arrow icon changes from white to black.
- Duration: 300ms.

Physics playground:

- Users can drag falling tags and circles.
- Cursor behavior is canvas-based; interaction is physical rather than button-like.

Focus state:

- Links have default focus behavior.
- Physics canvas has no explicit keyboard interaction.

## Section Report

1. What the user sees: dark rounded footer with giant brand mark, links, and falling draggable service tags.
2. Why it exists: to close with navigation, brand recall, and playful technical proof.
3. Business goal: keep conversion and exploration options alive at the bottom.
4. Psychological effect: surprise, memorability, playful confidence.
5. Design principles: modular dark cards, oversized wordmark, two-column footer, interactive final impression.
6. Animation principles: viewport-triggered physics, gravity, collision, manual canvas labels, drag feedback.

# Responsive Behavior

## Desktop

Desktop experience prioritizes:

- Long pinned sections.
- Horizontal business track.
- Four-column services.
- Two-column process and FAQ layouts.
- Large uninterrupted hero and CTA composition.
- Full doodle set in partner story.
- Two-column footer with physics playground.

## Tablet

Tablet behavior adjusts:

- Business track still works but uses different scroll and scrub values.
- Business intro columns compress.
- Card widths and gaps reduce.
- Services switch away from desktop pin below 1024px.
- FAQ and process sections begin stacking earlier.

## Mobile

Mobile behavior prioritizes:

- Fixed floating navbar.
- Hamburger menu.
- Business intro becomes single-column.
- Business logo shrinks significantly.
- Horizontal track still exists unless reduced motion, but distances and gaps are reduced.
- Services use sticky stacked cards.
- How-it-works cards become tighter.
- Partner story hides doodles that would overlap text.
- CTA background gains gradients for legibility.
- Footer stacks and lowers physics gravity.

# Hidden UX Patterns And Implementation Decisions

## Premium Design Decisions

- The hero does not over-explain. It uses mood and a single statement.
- The long business track creates perceived depth and investment.
- Service cards are staged, not simply displayed.
- The process section uses pastel reassurance after intense motion.
- The cinematic grid removes copy to let visual proof speak.
- Partner story uses hand-drawn details to humanize the studio.
- FAQ comes right before the CTA, resolving objections at the correct moment.
- Footer physics creates a memorable last impression.

## Agency-Level Techniques

- Pinned horizontal storytelling.
- Scroll-scrubbed parallax layers.
- Physical card metaphors.
- Inline text highlight strips.
- SVG path drawing.
- Paper-grid texture.
- Negative-margin section overlap.
- Intersection-based video playback.
- Matter.js interactive footer.
- Responsive motion tuning.

## Conversion Optimization Techniques

- Navbar CTA always visible.
- Strong positioning before service listing.
- Services mapped to common buyer needs.
- Process section reduces perceived project risk.
- FAQ answers pricing, timeline, revisions, support, existing-brand compatibility, and tech stack.
- CTA headline repeats the core business promise.
- Footer includes another "Start a project" CTA.

## Attention Management Techniques

- Hero: attention goes to mood first, headline second.
- Business intro: huge statement anchors attention.
- Horizontal cards: moving viewport controls the sequence.
- Services: staged upward reveal creates anticipation.
- Process: calm layout lets the visitor rest.
- Cinematic grid: no text, pure visual attention.
- Partner story: centered text and perimeter doodles guide the eye inward.
- FAQ: left sticky heading keeps context while right questions scroll.
- CTA: huge headline and human image split attention between message and trust.
- Footer: motion attracts attention to service tags while links remain accessible.

## Dormant Or Non-Visible Code Found

The homepage code contains several artifacts that are present but not visible in the live homepage path:

- Hero has unused pop-in and line-drawing animation variants.
- `HomeContinuationSections` defines `signalSteps` and `methodSteps`, but the rendered continuation only includes cinematic grid, partner story, and FAQ.
- `HomeContinuationSections.css` includes many classes for signal, method, quality, closing, and older FAQ structures that are not used by the current JSX path.
- `PartnerDoodles.jsx` contains a separate large doodle system but is not imported into the live partner story.
- `PartnerSection.css` contains emoji-rain CSS classes that are not used by the current partner story.
- `OurServicesSection.css` exists but is not imported by the live homepage. The visible services styling comes from Tailwind classes and `post-second-theme.css` overrides.
- The services scroll cue points to `#signal-section`, but no rendered section currently uses that id.

These dormant pieces suggest the homepage has gone through design iteration and some earlier section concepts remain in the codebase.

# Homepage Master Report

## UI Blueprint

The UI is a sequence of high-impact full-width sections:

1. Fixed/absolute premium navbar.
2. Full-screen rounded video hero.
3. White integrated business manifesto.
4. Long pinned horizontal feature-card journey.
5. Black services stage with white cards.
6. White process section with pastel step cards.
7. Black pinned cinematic media grid.
8. White paper-style partner manifesto.
9. Black FAQ support section.
10. Light human-image CTA.
11. Black interactive footer.

Core UI components:

- Brand lockup.
- Rolling CTA button.
- Video hero frame.
- Kinetic circular logo.
- Physical feature cards.
- Service cards.
- Process cards.
- Scroll cue wave.
- Media grid cells.
- Hand-drawn doodles.
- FAQ accordion rows.
- Underline CTA link.
- Footer physics canvas.

## UX Blueprint

The UX journey:

1. Attract through cinematic atmosphere.
2. Establish positioning.
3. Prove systems thinking.
4. Showcase capability areas.
5. Clarify services.
6. Explain process.
7. Demonstrate visual taste.
8. Build philosophical trust.
9. Answer practical objections.
10. Ask for contact.
11. Leave memorable brand interaction.

The UX is scroll-first. It expects the user to explore vertically rather than click immediately. Navigation exists, but the designed experience is a guided narrative.

## Content Blueprint

Content themes:

- Modern brands.
- Digital art and technology.
- Integrated brand systems.
- Strategy before design.
- Premium identity.
- Smooth digital experiences.
- Growth through SEO/content/campaigns.
- Clear process.
- Experience-driven partnership.
- Practical FAQ reassurance.
- Contact for next-stage growth.

Content structure:

- Hero: single positioning line.
- Business intro: manifesto plus paragraph.
- Cards: four capability pillars.
- Services: detailed offering categories.
- Process: five working steps.
- Partner story: brand belief statement.
- FAQ: objection handling.
- CTA: final ask.
- Footer: navigation and service recall.

## Motion Blueprint

Motion hierarchy:

- Page-level smooth scroll sets the base feel.
- Hero uses entrance stagger.
- Business section uses long scrubbed horizontal movement.
- Services use pinned staggered vertical card reveal.
- Process uses one-time entrance reveal.
- Cinematic grid uses pin-and-zoom.
- Partner story uses scroll progress, spring smoothing, 3D hinge text, and SVG path drawing.
- FAQ uses quick reveal, parallax, and accordion expansion.
- CTA uses hover-only micro-motion.
- Footer uses physics simulation.

Motion values:

- Hero parent: 1.2s, delay 0.2, cubic-bezier(0.16,1,0.3,1).
- Hero words: 0.6s, delay children 0.5, stagger 0.08.
- Business label loop: 5.4s linear infinite.
- Business loader dots: 3.63s ease-in-out infinite, 0.2s delayed steps.
- Business track scrub: 1.56 desktop, 1.78 tablet, 1.95 mobile.
- Business layer scrub: 1.22 desktop.
- Business accent scrub: 1.34 desktop.
- Services pin: start center center, end +500 percent, scrub 1.
- Services card stagger: 0.5.
- Process reveal: 1.5s power4.out.
- Cinematic grid: pin +400 percent, scale 1 to 3.08.
- Partner spring: stiffness 26, damping 24.
- Partner text: rotateX -100 to 0, opacity 0 to 1.
- FAQ entrance: 0.4s.
- FAQ accordion: 0.5s.
- CTA hover: 0.5s.
- Footer physics: gravity 2 desktop, 0.8 mobile.

## Animation Blueprint

Animation principles used:

- Stagger: hero words, service cards, physics tag drops through y offsets.
- Scrub: business track, services pin, cinematic grid, FAQ parallax.
- Pinning: services and cinematic grid; business uses sticky camera.
- Parallax: business layers, business text, FAQ, partner doodles.
- 3D transforms: partner hinge text, business layer force3D.
- Path drawing: partner doodles.
- Physical simulation: footer.
- Clipping reveal: hero words, how-it-works title, FAQ title/questions.
- Micro-interaction: nav CTA roll, CTA underline fill, card hover lifts.

## Interaction Blueprint

Interactive elements:

- Navbar links.
- Navbar rolling CTA.
- Mobile menu.
- Business intro buttons.
- Services card hover states.
- Services scroll cue.
- Growth note tilt.
- FAQ accordion.
- CTA link.
- Footer links.
- Footer start-project CTA.
- Footer draggable physics objects.

Interaction limitations:

- Services cards show pointer and "View Details" but are not semantic links/buttons.
- FAQ rows are clickable divs, not semantic buttons, so keyboard accessibility is limited.
- Mobile menu CTA has no explicit navigation handler.
- Services scroll cue points to a missing `#signal-section` target.

## Conversion Blueprint

Primary conversion path:

1. User sees premium brand capability in hero.
2. User understands broad value in business manifesto.
3. User sees core service pillars in business cards.
4. User finds exact service match in services section.
5. User sees collaboration process.
6. User receives trust/philosophy reinforcement.
7. User gets practical questions answered.
8. User reaches "Get in touch" CTA.
9. Footer provides another "Start a project" path.

Conversion strengths:

- Strong differentiation.
- High perceived craft.
- Multiple trust-building layers.
- FAQ removes common objections.
- CTA copy is clear and low-pressure.

Conversion risks:

- Very long scroll before CTA.
- Some visual CTAs are not actual buttons/links.
- Scroll cue target is missing.
- FAQ accessibility could be improved.
- Heavy media and long scroll may overwhelm users seeking quick information.

## Design Blueprint

The design can be recreated by following these rules:

- Use Oswald-like condensed display type for all major headings.
- Use Outfit/Manrope/Inter-like body type for paragraphs and support UI.
- Alternate black and white sections.
- Use huge display type with tight line-height.
- Use minimal small uppercase labels.
- Keep body copy short and strategically placed.
- Build the second section as a long horizontal pinned/sticky scroll.
- Use physical cards with rotated frames, video areas, stickers, doodles, and text strips.
- Stage services on black with white cards.
- Use pastel cards only for process reassurance.
- Use a full-screen 3x3 media grid with center zoom.
- Use a white paper-like brand manifesto with hand-drawn animated marks.
- Use a dark FAQ immediately before the CTA.
- Use a light image-backed CTA with a subtle underline link.
- End with a dark rounded footer and playful physics interaction.

The homepage's strongest design idea is contrast between precision and play:

- Precision: grid, typography, scroll math, black/white contrast, service structure.
- Play: doodles, stickers, handwritten note, wave cue, physics tags, animated cards.

That tension is what makes the homepage feel like a premium creative studio rather than a generic agency template.
