# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global-layout.spec.ts >> Global Layout >> Mobile Responsiveness: Viewport set to mobile; verify the hamburger menu is visible and toggles the navigation pane correctly
- Location: tests/e2e/global-layout.spec.ts:26:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('button[aria-label="Toggle menu"], .hamburger-menu')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('button[aria-label="Toggle menu"], .hamburger-menu')

```

```yaml
- banner:
  - navigation "Hauptnavigation":
    - link "Coday – Zur Startseite":
      - /url: /en
    - button "EN – Auf Deutsch wechseln": EN
    - button "Open Menu"
- status: High-End Web Development with AI Precision | Coday
- main:
  - main:
    - text: "Grand Opening Special: 25% Off"
    - heading "Your Enterprise Performance Agency." [level=1]
    - paragraph: "We engineer custom, lightning-fast enterprise websites using Next.js and React – completely free of WordPress templates. As your premier web design agency, we combine high-end development with data-driven SEO. The result: minimal load times, superior user experience, and measurable revenue growth for your business."
    - text: Maximum ROI. Scalable Growth.
    - link "Initiate Project":
      - /url: /en/contact
      - text: Initiate Project
      - img
    - link "Contact Us":
      - /url: /en/work
    - paragraph: Trusted by leading companies
    - region "Partner logos":
      - list:
        - listitem:
          - img
          - text: MS Schlüsseldienst Wetzlar
        - listitem:
          - img
          - text: Lindener Ratsstuben
        - listitem:
          - img
          - text: Sanitär Batherm
    - text: 0.5 Seconds Ø Load Time Ø Load Time 100 Percent Code Ownership Code Ownership 24 Hours Availability Availability Profit Focused
    - heading "Traditional vs. Coday" [level=2]
    - paragraph: Stop paying for inefficiency. Choose the agency that delivers results.
    - table:
      - rowgroup:
        - row "Metric Traditional Agency Coday":
          - columnheader "Metric"
          - columnheader "Traditional Agency"
          - columnheader "Coday"
      - rowgroup:
        - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)":
          - rowheader "Speed"
          - cell "Weeks or Months (Bloated)":
            - img
            - text: Weeks or Months (Bloated)
          - cell "Days or Weeks (The Coday Protocol)":
            - img
            - text: Days or Weeks (The Coday Protocol)
        - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent":
          - rowheader "Pricing Model"
          - cell "Hourly Rates & Hidden Costs":
            - img
            - text: Hourly Rates & Hidden Costs
          - cell "Flat Rate & Transparent":
            - img
            - text: Flat Rate & Transparent
        - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)":
          - rowheader "Technology"
          - cell "WordPress / Builders (Slow)":
            - img
            - text: WordPress / Builders (Slow)
          - cell "Next.js / React (Instant)":
            - img
            - text: Next.js / React (Instant)
        - row "Rights Vendor Lock-in 100% Code Ownership":
          - rowheader "Rights"
          - cell "Vendor Lock-in":
            - img
            - text: Vendor Lock-in
          - cell "100% Code Ownership":
            - img
            - text: 100% Code Ownership
        - row "Contact Account Manager (Middleman) Direct Developer Access":
          - rowheader "Contact"
          - cell "Account Manager (Middleman)":
            - img
            - text: Account Manager (Middleman)
          - cell "Direct Developer Access":
            - img
            - text: Direct Developer Access
    - heading "Traditional Agencies Are History." [level=2]
    - paragraph: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
    - paragraph:
      - strong: Coday is the new Standard.
      - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
    - img "Trusting Collaboration with your Web Design Agency Coday"
    - text: Our Services
    - heading "We offer Premium Services." [level=2]
    - link "Web Development High-performance websites and applications built with modern frameworks. Learn more":
      - /url: /en/services/web-development
      - heading "Web Development" [level=3]
      - paragraph: High-performance websites and applications built with modern frameworks.
      - text: Learn more
    - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more":
      - /url: /en/services/web-design
      - heading "UX/UI Design" [level=3]
      - paragraph: Conversion-optimized, user-centric designs for maximum performance.
      - text: Learn more
    - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more":
      - /url: /en/services/seo
      - heading "Digital Growth" [level=3]
      - paragraph: Data-driven SEO and performance strategies to scale your enterprise.
      - text: Learn more
    - paragraph: Proven Results
    - heading "Our work speaks for itself." [level=2]
    - paragraph: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
    - link "All Case Studies":
      - /url: /en/work
      - text: All Case Studies
      - img
    - link:
      - /url: /en/work/batherm
      - article:
        - text: Loading...
        - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website"'
        - text: Web Development & Lead Gen HVAC & Sanitary Next.js, Tailwind Batherm
        - heading "Batherm" [level=3]
        - text: Case Study ansehen
        - img
    - heading "Tailored solutions for Your Industry." [level=2]
    - link "Craft & Construction Digital recruiting and project showcases.":
      - /url: /en/services/industries/handwerk-bau
      - heading "Craft & Construction" [level=3]
      - paragraph: Digital recruiting and project showcases.
    - link "Real Estate High-quality exposé presentations and lead generation.":
      - /url: /en/services/industries/immobilien-makler
      - heading "Real Estate" [level=3]
      - paragraph: High-quality exposé presentations and lead generation.
    - link "Online Shop High-converting shop systems.":
      - /url: /en/services/industries/ecommerce-retail
      - heading "Online Shop" [level=3]
      - paragraph: High-converting shop systems.
    - link "Consulting Premium brand positioning.":
      - /url: /en/services/industries/unternehmensberatung
      - heading "Consulting" [level=3]
      - paragraph: Premium brand positioning.
    - link "Health Trustworthy web presence.":
      - /url: /en/services/industries/aerzte-gesundheit
      - heading "Health" [level=3]
      - paragraph: Trustworthy web presence.
    - region "High-End Architektur für kompromisslose Performance":
      - text: Core Tech Stack
      - heading "High-End Architektur für kompromisslose Performance" [level=2]
      - region "Partner logos":
        - list:
          - listitem: React 19
          - listitem: Next.js 15
          - listitem: TypeScript
          - listitem: Tailwind v4
          - listitem: Sanity CMS
          - listitem: Supabase
          - listitem: Vercel
    - heading "Clients who Trust Us." [level=2]
    - paragraph: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
    - blockquote: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
    - text: M Michael Weber Managing Director•TechVision GmbH
    - blockquote: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
    - text: S Sarah Müller CMO•Digital pioneers
    - blockquote: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
    - text: J Jan Schmidt Head of E-Commerce•RetailGroup DACH S M J P 5.0 Star Rating Excellence as Standard.
- contentinfo:
  - paragraph: Trusted by innovative companies
  - region "Partner logos":
    - list:
      - listitem:
        - img
        - text: MS Schlüsseldienst Wetzlar
      - listitem:
        - img
        - text: Lindener Ratsstuben
      - listitem:
        - img
        - text: Sanitär Batherm
  - text: Loading...
  - img "Coday"
  - paragraph: We kill inefficiency. The last agency you'll ever need.
  - img "Partnerschaft"
  - text: Resistance Member Fight against the fluff.
  - navigation "Navigation":
    - heading "Navigation" [level=3]
    - list:
      - listitem:
        - link "Home":
          - /url: /en
      - listitem:
        - link "Portfolio":
          - /url: /en/work
      - listitem:
        - link "About Us":
          - /url: /en/about
      - listitem:
        - link "Process":
          - /url: /en/process
      - listitem:
        - link "Pricing":
          - /url: /en/pricing
      - listitem:
        - link "common.nav.main.partnerschaft":
          - /url: /en/partnerschaft
      - listitem:
        - link "Price Calculator":
          - /url: /en/calculator
      - listitem:
        - link "Career":
          - /url: /en/career
  - navigation "Services":
    - heading "Services" [level=3]
    - list:
      - listitem:
        - link "Web Development":
          - /url: /en/services/web-development
      - listitem:
        - link "UI/UX Design":
          - /url: /en/services/ui-ux-design
      - listitem:
        - link "SEO & Traffic":
          - /url: /en/services/seo
      - listitem:
        - link "E-Commerce":
          - /url: /en/services/ecommerce
      - listitem:
        - link "API Integrations":
          - /url: /en/services/web-development/api-integrations
      - listitem:
        - link "common.nav.services.fullstack.label":
          - /url: /en/services/web-development/full-stack-entwicklung
      - listitem:
        - link "Public Sector":
          - /url: /en/oeffentliche-auftraege
      - listitem:
        - link "common.nav.industries.tech":
          - /url: /en/services/industries/startups-tech
  - navigation "common.footer.sections.regional":
    - heading "common.footer.sections.regional" [level=3]
    - list:
      - listitem:
        - link "Webdesign Hessen":
          - /url: /en/standorte/hessen
      - listitem:
        - link "Webagentur Wetzlar":
          - /url: /en/standorte/wetzlar
      - listitem:
        - link "Praxis-Website Wetzlar":
          - /url: /en/branchen/arzt/wetzlar
      - listitem:
        - link "Praxis-Website Gießen":
          - /url: /en/branchen/arzt/giessen
      - listitem:
        - link "Handwerker Wetzlar":
          - /url: /en/branchen/handwerker/wetzlar
  - heading "Contact" [level=3]
  - list:
    - listitem:
      - link "umut@codayweb.de":
        - /url: mailto:umut@codayweb.de
    - listitem:
      - link "+49 176 41195301":
        - /url: tel:+4917641195301
    - listitem: Coday Wetzlar, Deutschland (Remote weltweit)
  - link "Start Project":
    - /url: /en/contact
  - text: DSGVO Konform 100% Datenschutz-konform Vercel Edge Network Global verteilt für maximale Geschwindigkeit
  - navigation "Soziale Medien":
    - link "Visit us on Facebook":
      - /url: /contact
    - link "Visit us on Instagram":
      - /url: /contact
    - link "Visit us on Twitter":
      - /url: /contact
    - link "Visit us on LinkedIn":
      - /url: /contact
  - navigation "Rechtliche Informationen":
    - link "Terms":
      - /url: /en/legal/agb
    - link "Privacy":
      - /url: /en/legal/datenschutz
    - link "Imprint":
      - /url: /en/legal/impressum
    - text: © 2026 Coday
- heading "Ready for your next project?" [level=2]
- paragraph: Let's find out together how we can accelerate your digital growth. Free and without obligation.
- link "Start project":
  - /url: /en/contact
- button "Menü öffnen":
  - img
- dialog "Cookie Banner":
  - heading "Privatsphäre-Einstellungen" [level=3]
  - paragraph: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
  - link "Datenschutzerklärung":
    - /url: /legal/privacy
  - link "Impressum":
    - /url: /legal/imprint
  - button "Alle akzeptieren"
  - button "Ablehnen"
  - button "Einstellungen"
- alert
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Global Layout', () => {
  4  |   test('Header Rendering: Verify the header is visible and contains core navigation links', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     const header = page.locator('header');
  7  |     await expect(header).toBeVisible();
  8  | 
  9  |     const links = ['Home', 'Menu', 'About', 'Visit'];
  10 |     for (const link of links) {
  11 |       const navLink = header.getByRole('link', { name: link });
  12 |       await expect(navLink).toBeVisible();
  13 |     }
  14 |   });
  15 | 
  16 |   test('Footer Rendering: Verify the footer loads with legal pages, contact info, and is structurally placed at the bottom', async ({ page }) => {
  17 |     await page.goto('/');
  18 |     const footer = page.locator('footer');
  19 |     await expect(footer).toBeVisible();
  20 |     
  21 |     // Check for some expected footer content
  22 |     await expect(footer).toContainText(/contact/i);
  23 |     await expect(footer).toContainText(/privacy|terms|legal/i);
  24 |   });
  25 | 
  26 |   test('Mobile Responsiveness: Viewport set to mobile; verify the hamburger menu is visible and toggles the navigation pane correctly', async ({ page }) => {
  27 |     // Set viewport to mobile size
  28 |     await page.setViewportSize({ width: 375, height: 812 });
  29 |     await page.goto('/');
  30 |     
  31 |     const hamburger = page.locator('button[aria-label="Toggle menu"], .hamburger-menu');
> 32 |     await expect(hamburger).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
  33 |     
  34 |     await hamburger.click();
  35 |     const navPane = page.locator('nav.mobile-nav, .mobile-menu');
  36 |     await expect(navPane).toBeVisible();
  37 |   });
  38 | 
  39 |   test('Layout Persistence: Navigate across 3 different pages and verify the Layout (Header/Footer) persists without layout shift or unmounting errors', async ({ page }) => {
  40 |     const logs: string[] = [];
  41 |     page.on('console', msg => {
  42 |       if (msg.type() === 'error') logs.push(msg.text());
  43 |     });
  44 |     page.on('pageerror', err => logs.push(err.message));
  45 | 
  46 |     await page.goto('/');
  47 |     await expect(page.locator('header')).toBeVisible();
  48 |     await expect(page.locator('footer')).toBeVisible();
  49 | 
  50 |     // Navigate to Menu
  51 |     await page.getByRole('link', { name: 'Menu' }).click();
  52 |     await page.waitForURL('**/menu*');
  53 |     await expect(page.locator('header')).toBeVisible();
  54 |     await expect(page.locator('footer')).toBeVisible();
  55 | 
  56 |     // Navigate to About
  57 |     await page.getByRole('link', { name: 'About' }).click();
  58 |     await page.waitForURL('**/about*');
  59 |     await expect(page.locator('header')).toBeVisible();
  60 |     await expect(page.locator('footer')).toBeVisible();
  61 | 
  62 |     expect(logs.filter(log => log.includes('Hydration') || log.includes('unmount'))).toHaveLength(0);
  63 |   });
  64 | 
  65 |   test('Sticky Header Behavior: Scroll down the page and verify the header remains sticky/fixed', async ({ page }) => {
  66 |     await page.goto('/');
  67 |     
  68 |     // Ensure the page has enough height to scroll
  69 |     await page.evaluate(() => {
  70 |       document.body.style.minHeight = '2000px';
  71 |     });
  72 | 
  73 |     const header = page.locator('header');
  74 |     await expect(header).toBeVisible();
  75 |     
  76 |     const initialBox = await header.boundingBox();
  77 |     
  78 |     // Scroll down
  79 |     await page.evaluate(() => window.scrollTo(0, 500));
  80 |     await page.waitForTimeout(500); // Wait for potential transitions
  81 |     
  82 |     const scrolledBox = await header.boundingBox();
  83 |     
  84 |     // Header should still be visible and at the top of the viewport
  85 |     await expect(header).toBeVisible();
  86 |     expect(scrolledBox?.y).toBe(0);
  87 |   });
  88 | });
  89 | 
```