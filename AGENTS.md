@import "tailwindcss";

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.205 0 0);

  /*
    ZAMR Color Scheme — all colors stored in oklch
    ================================================
    Blue   oklch(0.254 0.07 266.5)  — Primary (buttons, headings, links, section numbers)
    Yellow oklch(0.696 0.102 78)    — Secondary accent (underlines, hover borders, icons)
    Light  oklch(0.785 0.091 75.7)  — Light secondary (lighter accents, highlights)
    White  oklch(1 0 0)             — Background

    ⚠️  RULE: Always define and reference colors via CSS custom properties
        in globals.css (:root). Never hardcode hex/rgb/oklch values in
        component files — always use var(--token-name) instead.
  */
  --color-primary: oklch(0.254 0.07 266.5);
  --color-primary-hover: oklch(0.226 0.061 265.4);
  --color-secondary: oklch(0.696 0.102 78);
  --color-secondary-light: oklch(0.785 0.091 75.7);

  /* Compatibility — accent vars now point to secondary yellow */
  --color-accent: var(--color-secondary);
  --color-accent-light: var(--color-secondary-light);

  /* Backgrounds */
  --bg-light: oklch(0.979 0.006 264.4);
  --bg-light-alt: oklch(0.985 0.003 264.4);
  --bg-hero: oklch(0.159 0.042 264.8);

  /* Text Colors */
  --text-dark: oklch(0.321 0 0);
  --text-muted: oklch(0.417 0 0);
  --text-light: oklch(0.757 0 0);
  --text-contact: oklch(0.254 0.07 266.5);

  /* Borders */
  --border-light: oklch(0.937 0 0);
  --border-input: oklch(0.254 0.07 266.5 / 0.18);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* Primary colors */
  --color-primary: var(--color-primary);
  --color-primary-hover: var(--color-primary-hover);
  --color-secondary: var(--color-secondary);
  --color-secondary-light: var(--color-secondary-light);
  --color-accent: var(--color-accent);
  --color-accent-light: var(--color-accent-light);

  /* Backgrounds */
  --color-bg-light: var(--bg-light);
  --color-bg-light-alt: var(--bg-light-alt);
  --color-bg-hero: var(--bg-hero);

  /* Text */
  --color-text-dark: var(--text-dark);
  --color-text-muted: var(--text-muted);
  --color-text-light: var(--text-light);
  --color-text-contact: var(--text-contact);

  /* Borders */
  --color-border-light: var(--border-light);
  --color-border-input: var(--border-input);

  /* Fonts */
  --font-sans: var(--font-outfit);
  --font-mono: var(--font-outfit);
}

html {
  font-family: var(--font-outfit), Arial, Helvetica, sans-serif;
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: inherit;
}

/* Selection color */
::selection {
  background-color: var(--color-primary);
  color: white;
}

/* ============================================
   NAVBAR — Figma Spec (Step 1 Implementation)
   ============================================

   Source: Figma node-id=599-3707

   Container:
   - position: fixed (overlay behavior on top of hero)
   - width: 100% (max-width 1727px inner)
   - height: 100px
   - top: 0, left: 0, z-index: 50
   - bg: transparent (transitions to white on scroll)
   - padding: px-6 / lg:px-[130px] (matches Figma left:130px for logo)

   Logo:
   - Uses public/images/zamr-logo.png (Image component)
   - width: 111px, height: 49px (from Figma logo frame)

   Navigation Links (Frame 114):
   - Centered in header via absolute left-1/2 -translate-x-1/2
   - Flex row, gap: 24px
   - Font: Outfit, 14px, weight 500, uppercase
   - Color: #B0B0B0 (--text-light) on hero / #333 (--text-dark) when scrolled
   - Items: About, Services, Projects, Why ZAMR Engineering, Our Team,
            Trusted & Accredited, Engineering For Impact

   Contact Button (Frame 115):
   - Positioned right side (ml-auto in flex)
   - Border: 1px solid white (or --text-dark when scrolled)
   - Padding: 16px 25px (px-[25px] py-4)
   - Height: 50px
   - Text: CONTACT, 14px, weight 500, uppercase, letter-spacing: 3px
   - Color: white (or --text-dark when scrolled)
   - Hover: inverts bg/text colors

   Mobile:
   - Hamburger menu (Lucide icons) visible below lg breakpoint
   - Mobile dropdown: full-width panel below header
   - Same nav items + contact button
   - Close on link click (useCallback for cleanup)
*/
