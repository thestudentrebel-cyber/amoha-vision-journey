# Amoha Vision

AMOHA HERBALS — COMPLETE PREMIUM 3D CINEMATIC WEBSITE MASTER PROMPT

You are an expert senior frontend engineer, Three.js/WebGL developer, creative developer, UX designer, motion designer and premium brand website designer.

Your task is to build a complete, production-ready, premium, highly aesthetic, cinematic 3D website for AMOHA HERBALS.

This is NOT a normal corporate website.

The website must feel like an award-winning interactive 3D brand experience combining:

LUXURY BEAUTY
+
MODERN AYURVEDA
+
BOTANICAL SCIENCE
+
FORMULATION
+
MANUFACTURING
+
PRIVATE LABEL
+
PREMIUM PRODUCT DESIGN

The central concept is:

A cinematic journey from NATURE → FORMULATION → MANUFACTURING → PRODUCT → BRAND.

The user should feel that scrolling through the website is controlling a cinematic camera journey.

1. IMPORTANT — ATTACHED ASSETS

The user will attach:

AMOHA HERBALS logo

Veo-generated background videos

Product images

Product assets

Optional 3D GLB/GLTF models

Any additional brand assets

FIRST inspect all attached assets.

Do not invent replacements when a real asset is available.

Use the actual Amoha logo.

Use the supplied videos.

Use supplied product images.

If a real 3D product model exists, use it.

If a 3D model does not exist, build the architecture so one can be added later without rewriting the animation system.

2. EXISTING AMOHA WEBSITE CONTENT

The existing AMOHA HERBALS website/content is the source of truth.

The website navigation/content includes concepts such as:

HOME
ABOUT US
INDUSTRIES
PRODUCTS
AMOHA COLOUR COSMETICS
CATALOG
BLOG
PACKAGING
CONTACT US

The company positioning is centered around private-label and contract manufacturing solutions across approved categories including:

Ayurvedic

Cosmetics

Color Cosmetics

Food

Home Care

Personal Care

Use the actual supplied/approved Amoha website content wherever available.

DO NOT invent:

certifications

awards

years of experience

client counts

production capacity

factory size

locations

regulatory approvals

statistics

scientific claims

medical claims

ingredients

product benefits

manufacturing claims

If content is unavailable, use a clearly marked placeholder or neutral wording.

The final website must accurately represent AMOHA HERBALS.

3. TECHNOLOGY

Build using:

Next.js

React

TypeScript

React Three Fiber

Three.js

GSAP

GSAP ScrollTrigger

Lenis smooth scrolling

Use modern CSS.

Use clean component architecture.

Avoid unnecessary dependencies.

The website must be production-ready.

4. OVERALL DESIGN DIRECTION

The design language must be:

PREMIUM
MINIMAL
CINEMATIC
BOTANICAL
SCIENTIFIC
MODERN
SOPHISTICATED
TRUSTWORTHY

Think:

Luxury cosmetic campaign
+
Modern Ayurvedic laboratory
+
Advanced formulation facility
+
Premium manufacturing company
+
Interactive 3D product film

Do NOT make the website look like a generic Ayurvedic website.

Avoid:

excessive green

generic stock photos

cheap gradients

excessive rounded cards

neon colors

gaming aesthetics

excessive glassmorphism

unnecessary animations

template-like sections

clutter

Use:

ivory

cream

muted botanical greens

charcoal

subtle beige

natural materials

realistic shadows

cinematic lighting

controlled reflections

elegant typography

generous whitespace

5. TYPOGRAPHY

Use a premium editorial serif for major headlines.

Use a modern clean sans-serif for:

navigation

body copy

buttons

labels

product information

Typography should feel similar to a luxury beauty editorial.

Large headlines.

Minimal copy.

Excellent spacing.

Do not use excessive text.

6. WEBSITE EXPERIENCE

The homepage must not feel like separate cards stacked vertically.

Instead, create a connected cinematic narrative:

HERO
↓
PRODUCT
↓
NATURE
↓
FORMULATION
↓
INDUSTRIES
↓
PRODUCT UNIVERSE
↓
PRIVATE LABEL
↓
MANUFACTURING
↓
QUALITY / EXPERTISE
↓
CATALOG
↓
BRAND CTA
↓
CONTACT

Each transition should feel intentional.

7. NAVIGATION

Create a premium sticky navigation.

Desktop:

AMOHA HERBALS logo on the left.

Navigation:

HOME
ABOUT US
INDUSTRIES
PRODUCTS
AMOHA COLOUR COSMETICS
CATALOG
BLOG
PACKAGING
CONTACT US

Use compact spacing.

Initially transparent over the cinematic Hero.

As the user scrolls:

background subtly changes

navigation becomes readable

logo remains stable

navigation transitions smoothly

Mobile:

logo

hamburger menu

full-screen premium navigation overlay

Use accessible navigation.

8. HERO — CINEMATIC OPENING

Create a full-screen cinematic Hero.

Display the actual AMOHA HERBALS logo.

Headline:

CRAFTING PRODUCTS.
BUILDING BRANDS.

Supporting text:

"Premium private label and contract manufacturing solutions for Ayurvedic, cosmetic, color cosmetic, food and home-care products."

Use the approved Amoha content in the final implementation.

Buttons:

START YOUR BRAND

EXPLORE PRODUCTS

Bottom:

SCROLL TO EXPLORE

Hero environment:

Use the supplied:

01-hero.mp4

The video should be cinematic and subtle.

The product/3D object should appear above the video.

9. 3D PRODUCT HERO

Use React Three Fiber.

If an actual GLB/GLTF product model is attached, load it.

Expected location:

/public/models/

Use the actual model.

If no model exists:

create a lightweight temporary placeholder that can be replaced later.

Do NOT create a fake branded product.

The 3D product must support:

floating

rotation

scale

position

mouse interaction

camera interaction

scroll animation

realistic lighting

realistic materials

Do not continuously spin the product.

Use subtle luxury-commercial motion.

10. CENTRALIZED SCROLL ENGINE

This is the most important part of the website.

Create ONE centralized scroll animation architecture using:

GSAP
+
ScrollTrigger
+
Lenis

Scrolling must behave like a cinematic timeline.

Do NOT create hundreds of independent scroll listeners.

Create a central scroll progress system.

The timeline should control:

camera

product

3D objects

lighting

particles

background videos

text

transitions

section progress

11. CINEMATIC SCROLL STORY

Create this approximate timeline:

0–10%

HERO.

Logo and headline visible.

Product floating.

Video 01 visible.

10–20%

Product approaches.

Camera moves closer.

Product rotates subtly.

Hero typography begins transitioning.

20–30%

PRODUCT REVEAL.

Use:

02-product-reveal.mp4

Product becomes the main visual focus.

Camera continues forward.

30–40%

BOTANICAL TRANSITION.

Product begins moving behind camera.

Particles begin appearing.

Botanical environment becomes dominant.

40–55%

NATURE → FORMULATION.

Use:

03-botanical-formulation.mp4

Camera travels through the botanical environment.

Natural elements transition toward scientific formulation.

Display:

FROM NATURE
TO FORMULATION.

Supporting content should use approved Amoha website information.

55–65%

FORMULATION.

Show the premium formulation environment.

Introduce the idea of:

Concept
Formulation
Development

Use only approved information.

65–75%

MANUFACTURING.

Transition toward:

04-manufacturing.mp4

Camera travels through the manufacturing environment.

Create subtle 3D depth over the video.

Introduce approved manufacturing information.

75–85%

PACKAGING.

Use:

05-packaging-final.mp4

Show finished products and premium packaging.

Headline:

YOUR IDEA.
OUR EXPERTISE.

85–95%

PRODUCT / BRAND EXPERIENCE.

Show product universe and private-label concept.

Communicate visually:

IDEA
→
FORMULATION
→
MANUFACTURING
→
PACKAGING
→
BRAND

95–100%

FINAL CTA.

Reduce visual complexity.

Hero product remains.

Headline:

READY TO BUILD YOUR BRAND?

Primary:

START YOUR PROJECT

Secondary:

EXPLORE PRODUCTS

12. VIDEO SYSTEM

Create a reusable:

CinematicVideo.tsx

Video assets:

/public/videos/01-hero.mp4
/public/videos/02-product-reveal.mp4
/public/videos/03-botanical-formulation.mp4
/public/videos/04-manufacturing.mp4
/public/videos/05-packaging-final.mp4

Do not rename them.

Use layered video elements.

Use opacity crossfades controlled by scroll progress.

Do NOT hard-cut between videos.

Each video should have:

muted

autoplay

loop

playsInline

lazy loading where appropriate

poster support

mobile optimization

graceful fallback

13. VIDEO CROSSFADE LOGIC

Use overlapping ranges.

Example:

01:

0.00 → 0.23

02:

0.18 → 0.38

03:

0.33 → 0.63

04:

0.58 → 0.80

05:

0.75 → 1.00

Crossfade using GSAP opacity.

Do not abruptly switch video elements.

14. NATURE / BOTANICAL WORLD

Create a sophisticated botanical environment.

Use:

03-botanical-formulation.mp4

Add subtle 3D atmospheric depth:

particles

dust

tiny botanical fragments

soft light rays

depth layers

Do NOT create a fantasy jungle.

Keep it premium and realistic.

15. FORMULATION EXPERIENCE

Create a visual transition:

NATURE
→
EXTRACT
→
FORMULATION
→
LABORATORY

The camera should continue travelling forward.

The viewer should feel that they have entered the product formulation process.

Use:

FROM NATURE
TO FORMULATION.

The formulation environment should feel:

clean
scientific
premium
modern
controlled

16. INDUSTRIES EXPERIENCE

Create an interactive 3D orbital system.

Use the actual Amoha categories.

Potential categories based on supplied website content:

AYURVEDIC
COSMETICS
COLOR COSMETICS
FOOD
HOME CARE
PERSONAL CARE

Only show categories supported by the official content.

The center should contain:

AMOHA

Categories orbit around the center.

Scroll rotates the orbit.

The active category moves toward the camera.

Inactive categories become slightly smaller and lower contrast.

Hover/click should activate a category.

Do not make this look like a gaming interface.

Make it feel like a premium scientific/product ecosystem.

17. PRODUCT UNIVERSE

Create a premium product showcase.

Use supplied product images and/or 3D models.

Products should appear as:

floating

layered

cinematic

editorial

Scrolling controls product transitions.

Do not use a boring grid as the main presentation.

A traditional catalog grid can exist later as a functional catalog.

18. PRIVATE LABEL TRANSFORMATION

Create a signature visual section.

Story:

BLANK PRODUCT
↓
FORMULATION
↓
BRANDING
↓
PACKAGING
↓
FINISHED PRODUCT

Headline:

YOUR IDEA.
OUR EXPERTISE.

The visual should communicate that Amoha helps transform product concepts into finished branded products.

Use only approved company claims.

19. MANUFACTURING JOURNEY

Create an immersive manufacturing sequence.

Use:

04-manufacturing.mp4

Show a visual progression:

R&D
↓
FORMULATION
↓
MANUFACTURING
↓
QUALITY
↓
PACKAGING

Only include stages confirmed by Amoha content.

Use camera movement rather than six ordinary cards.

20. PACKAGING EXPERIENCE

Use:

05-packaging-final.mp4

Create an elegant product packaging environment.

Show:

bottles

jars

tubes

cartons

packaging details

Use supplied product assets where available.

The final product should become the visual anchor.

21. ABOUT US

Create a premium About section.

Use the actual Amoha website/company content.

Do not invent company history.

Use subtle motion rather than heavy 3D.

Structure:

WHO WE ARE
↓
WHAT WE DO
↓
HOW WE HELP BRANDS

22. WHY AMOHA

Create a section highlighting actual approved capabilities and differentiators.

Do not fabricate claims.

Use elegant typography and visual storytelling.

23. PRODUCT CATALOG

Build a proper functional catalog.

Include:

product search

categories

filters

product cards

product details

product images

descriptions

relevant information

Use structured data.

Create:

/data/products.ts

Do not hard-code product information into components.

Make the catalog architecture ready for future CMS/API integration.

24. PRODUCT DETAIL PAGE

Each product should have:

product image

product name

category

description

available information

packaging information if supplied

inquiry CTA

CTA:

ENQUIRE ABOUT THIS PRODUCT

Do not add unsupported medical or performance claims.

25. AMOHA COLOUR COSMETICS

Create a dedicated visual experience for the AMOHA Colour Cosmetics section.

Use actual supplied content.

Visual language can be slightly more expressive while maintaining the overall luxury identity.

Potential visual themes:

pigments

color

texture

beauty

product presentation

Do not invent product claims or shades.

26. PACKAGING

Create a dedicated Packaging section.

Use approved packaging content and supplied images.

Focus on:

packaging presentation

product identity

finishing

brand appearance

Use cinematic transitions.

27. BLOG

Create a premium editorial blog section.

Use actual supplied blog content.

If no blog content is provided, create the UI structure but do not fabricate articles.

28. CONTACT

Create a premium inquiry/contact experience.

Headline:

LET'S BUILD YOUR BRAND.

Include appropriate contact/inquiry fields based on the approved Amoha requirements.

Potential fields:

Name
Company
Email
Phone
Product Category
Product Requirement
Message

Use proper validation.

Do not expose private/internal credentials.

29. FOOTER

Create a sophisticated minimal footer.

Include only verified:

company information

navigation

contact details

social links

legal links

Do not invent contact information.

30. 3D PARTICLES

Use particles only where they add depth.

Particles should be:

small

subtle

slow

elegant

Reduce them significantly on mobile.

31. LIGHTING SYSTEM

Create reusable lighting components.

Use:

soft key lighting

rim lighting

ambient lighting

subtle volumetric effect

Lighting should evolve between:

PRODUCT
→
BOTANICAL
→
LABORATORY
→
MANUFACTURING
→
PACKAGING

Do not use excessive bloom.

32. MOUSE INTERACTION

Desktop only.

Subtle parallax.

Mouse should affect:

camera slightly

product slightly

atmospheric layers slightly

Maximum movement should remain restrained.

Disable or simplify on mobile.

33. MOBILE EXPERIENCE

Mobile must NOT simply be a scaled desktop.

Create a dedicated mobile strategy.

Reduce:

particle count

3D complexity

video resolution where appropriate

camera movement

texture resolution

Preserve:

cinematic storytelling

typography

navigation

content

CTAs

If WebGL performance becomes poor:

prioritize cinematic video + lightweight 3D.

34. PERFORMANCE

Performance is critical.

Implement:

dynamic imports

lazy loading

compressed GLB

optimized textures

adaptive DPR

IntersectionObserver

code splitting

optimized videos

poster images

cleanup of animation timelines

reduced particle count

mobile fallbacks

Do not load every 3D asset at initial page load.

35. ACCESSIBILITY

Implement:

semantic HTML

keyboard navigation

accessible buttons

proper labels

readable contrast

meaningful alt text

reduced-motion support

proper heading hierarchy

For:

prefers-reduced-motion

reduce:

camera movement

product rotation

particles

parallax

Use gentle transitions.

36. SEO

Implement:

metadata

title

description

Open Graph metadata

semantic headings

image alt text

clean URLs

sitemap-ready architecture

robots-ready architecture

Do not keyword-stuff.

Use professional brand language.

37. COMPONENT ARCHITECTURE

Use modular components.

Recommended:

/components
/3d
HeroScene.tsx
ProductModel.tsx
IndustryOrbit.tsx
BotanicalParticles.tsx
SceneLighting.tsx

/sections
    CinematicHero.tsx
    NatureFormulation.tsx
    Industries.tsx
    ProductUniverse.tsx
    PrivateLabel.tsx
    Manufacturing.tsx
    WhyAmoha.tsx
    About.tsx
    Catalog.tsx
    Packaging.tsx
    Blog.tsx
    Contact.tsx

/ui
    CinematicVideo.tsx
    Button.tsx
    ScrollIndicator.tsx
    ProductCard.tsx
    SectionHeading.tsx

/navigation
    Navigation.tsx
    MobileMenu.tsx


/hooks
useLenis.ts
useCinematicScroll.ts
useResponsive.ts

/data
videos.ts
products.ts
industries.ts
navigation.ts

/lib
scrollTimeline.ts
animations.ts
utils.ts

/public
/logo
/videos
/models
/images
/textures

38. CENTRAL SCROLL ARCHITECTURE

Create one primary cinematic timeline.

Example conceptual structure:

Scroll Progress
↓
0.00 Hero
0.10 Product
0.20 Product Reveal
0.30 Botanical
0.40 Nature
0.50 Formulation
0.60 Industries
0.70 Manufacturing
0.80 Packaging
0.90 Product/Brand
1.00 CTA

The exact values can be adjusted after testing.

The animation must remain synchronized.

39. TRANSITION QUALITY

Every transition should answer:

"What is the visual story?"

Avoid:

fade
fade
fade
slide
slide
fade

Instead use:

camera movement
depth
scale
rotation
light
particles
video crossfade
typography

to create cinematic continuity.

40. INTERACTION QUALITY

Buttons should have:

subtle hover animation

elegant underline/indicator

smooth transition

No oversized animated buttons.

No bounce.

No flashy effects.

41. LOADING EXPERIENCE

Create a premium loading screen.

Use the actual Amoha logo.

Display minimal animation.

Example:

AMOHA HERBALS

A subtle loading indicator.

Do not keep users waiting unnecessarily.

Preload only critical assets.

42. ERROR HANDLING

If a video fails:

use poster/fallback background.

If a GLB fails:

use lightweight fallback.

If WebGL is unavailable:

provide a graceful non-WebGL experience.

The website must never show a broken blank screen.

43. DEVELOPMENT PROCESS

You are authorized to build the entire website in stages internally, but maintain working functionality throughout.

Recommended implementation order:

Inspect all supplied assets.

Inspect existing project.

Preserve working code.

Establish design system.

Build navigation.

Build cinematic Hero.

Build centralized scroll engine.

Integrate all five videos.

Integrate 3D product.

Build Nature → Formulation.

Build Industries.

Build Product Universe.

Build Private Label.

Build Manufacturing.

Build Packaging.

Build About.

Build Why Amoha.

Build Catalog.

Build Blog.

Build Contact.

Build Footer.

Optimize mobile.

Optimize performance.

SEO.

Accessibility.

Final QA.

Do not delete working functionality just to simplify implementation.

44. DESIGN QUALITY CHECK

Before considering the project complete, verify:

Does it feel premium?

Does it feel like Amoha?

Does scrolling feel cinematic?

Are the 3D transitions smooth?

Are the videos integrated naturally?

Does the product feel like the hero?

Does the story move:

NATURE
→
FORMULATION
→
MANUFACTURING
→
PRODUCT
→
BRAND?

Does mobile remain usable?

Does the website load efficiently?

Does the content accurately represent Amoha?

45. FINAL EXPERIENCE

The finished website should feel like:

"A cinematic 3D journey through the world of AMOHA HERBALS."

The user should not think:

"This is a website with animations."

They should think:

"This feels like entering the Amoha world."

The central narrative is:

NATURE
↓
SCIENCE
↓
FORMULATION
↓
MANUFACTURING
↓
PACKAGING
↓
PRODUCT
↓
BRAND

46. FINAL INSTRUCTION

FIRST inspect all attached assets.

Then inspect the current project.

Then implement the complete experience while preserving existing functionality.

Use the actual Amoha logo.

Use the supplied Veo videos.

Use supplied product assets.

Use real company content.

Do not invent unsupported information.

Prioritize:

Visual storytelling

Scroll experience

3D quality

Product presentation

Smooth transitions

Performance

Mobile experience

Accessibility

SEO

Maintainable code

The final result must be production-quality and deployment-ready.

After implementation, provide a concise report containing:

files created

files modified

dependencies added

assets detected

3D model status

video integration status

scroll architecture

pages completed

remaining placeholders

errors if any

local development command

production build command

```
