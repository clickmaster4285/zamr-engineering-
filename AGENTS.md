@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;

  /* ZAMR Design Tokens from Figma */
  --color-primary: #1945A7;
  --color-primary-hover: #153a8c;
  --color-accent: #CE1A00;
  --color-accent-light: #FA0000;

  /* Backgrounds */
  --bg-light: #F6F8FC;
  --bg-light-alt: #F9FAFC;
  --bg-hero: #050C1F;

  /* Text Colors */
  --text-dark: #333333;
  --text-muted: #4C4C4C;
  --text-light: #B0B0B0;
  --text-contact: #2344A1;

  /* Borders */
  --border-light: #EAEAEA;
  --border-input: rgba(34, 65, 158, 0.18);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);

  /* Primary colors */
  --color-primary: var(--color-primary);
  --color-primary-hover: var(--color-primary-hover);
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
