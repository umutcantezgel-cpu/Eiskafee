# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: syrup-cursor.spec.ts >> SyrupCursor >> Movement Tracking: Move the mouse via Playwright and assert the custom cursor element updates to match coordinates
- Location: tests/e2e/syrup-cursor.spec.ts:36:7

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('#syrup-cursor, .custom-cursor').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('#syrup-cursor, .custom-cursor').first()

```

```yaml
- banner:
  - navigation "Hauptnavigation":
    - link "Coday – Zur Startseite":
      - /url: /en
    - button "Services"
    - button "Development"
    - button "Design"
    - button "Growth"
    - button "Industries"
    - link "Web Development Scalable Web Apps & High-Performance Sites":
      - /url: /en/services/web-development
    - link "Web Applications":
      - /url: /en/services/web-development/web-apps
    - link "E-Commerce Stores that Sell (Shopify/Next.js)":
      - /url: /en/services/web-development/e-commerce
    - link "Headless CMS":
      - /url: /en/services/web-development/headless-cms
    - link "API Integrations":
      - /url: /en/services/web-development/api-integrations
    - link "Migrations":
      - /url: /en/services/web-development/migration
    - link "Enterprise Platforms World-Class Portals & Systems":
      - /url: /en/services/enterprise-web
    - button "Work"
    - button "Highlights"
    - button "Portfolio"
    - link "Batherm":
      - /url: https://www.batherm.de
    - button "Resources"
    - button "Knowledge"
    - button "Tools"
    - link "Blog & Insights Deep Dives & News":
      - /url: /en/knowledge/blog
    - link "FAQ Common Questions":
      - /url: /en/knowledge/faq
    - link "Whitepapers Guides & Checklists":
      - /url: /en/knowledge/whitepapers
    - link "Video Courses Learn from Experts":
      - /url: /en/knowledge/academy
    - link "Newsletter Weekly Tips":
      - /url: /en/knowledge/newsletter
    - button "Company"
    - button "The Agency"
    - button "Career"
    - button "Legal"
    - button "Start"
    - link "About Us Get to Know Us":
      - /url: /en/about
    - link "Our Process How We Work":
      - /url: /en/process
    - button "Lokales"
    - button "EN – Auf Deutsch wechseln": EN
    - link "Packages":
      - /url: /en/packages
    - link "Book":
      - /url: /en/contact
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
    - text: Loading...
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
  - text: Loading...
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
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('SyrupCursor', () => {
  4   |   test('DOM Injection: Verify the custom cursor container is present in the DOM upon page load without triggering Next.js hydration errors', async ({ page }) => {
  5   |     const logs: string[] = [];
  6   |     page.on('console', msg => {
  7   |       if (msg.type() === 'error') logs.push(msg.text());
  8   |     });
  9   |     page.on('pageerror', err => logs.push(err.message));
  10  | 
  11  |     await page.goto('/');
  12  |     
  13  |     // Check for custom cursor container (placeholder selector)
  14  |     const cursorContainer = page.locator('#syrup-cursor, .custom-cursor');
  15  |     await expect(cursorContainer).toBeAttached();
  16  |     
  17  |     expect(logs.filter(log => log.includes('Hydration') || log.includes('Minified React error'))).toHaveLength(0);
  18  |   });
  19  | 
  20  |   test('Native Cursor Hidden: Verify that the <body> or main container has cursor: none applied', async ({ page }) => {
  21  |     await page.goto('/');
  22  |     
  23  |     const bodyCursor = await page.evaluate(() => {
  24  |       return window.getComputedStyle(document.body).cursor;
  25  |     });
  26  |     
  27  |     // Some implementations might hide the cursor on a specific wrapper rather than body
  28  |     const wrapperCursor = await page.evaluate(() => {
  29  |       const wrapper = document.querySelector('main') || document.querySelector('#__next') || document.body;
  30  |       return window.getComputedStyle(wrapper).cursor;
  31  |     });
  32  | 
  33  |     expect(bodyCursor === 'none' || wrapperCursor === 'none').toBeTruthy();
  34  |   });
  35  | 
  36  |   test('Movement Tracking: Move the mouse via Playwright and assert the custom cursor element updates to match coordinates', async ({ page }) => {
  37  |     await page.goto('/');
  38  |     
  39  |     const cursor = page.locator('#syrup-cursor, .custom-cursor').first();
> 40  |     await expect(cursor).toBeAttached();
      |                          ^ Error: expect(locator).toBeAttached() failed
  41  | 
  42  |     await page.mouse.move(100, 100);
  43  |     await page.waitForTimeout(100); // Give RAF time to update
  44  |     
  45  |     const box = await cursor.boundingBox();
  46  |     expect(box).not.toBeNull();
  47  |     
  48  |     // The visual center of the custom cursor should be close to 100, 100
  49  |     // We do a loose assertion since it might have a delay/spring physics
  50  |     await page.mouse.move(300, 300);
  51  |     await page.waitForTimeout(300);
  52  |     
  53  |     const newBox = await cursor.boundingBox();
  54  |     expect(newBox).not.toBeNull();
  55  |     if (box && newBox) {
  56  |       expect(newBox.x).not.toBe(box.x);
  57  |       expect(newBox.y).not.toBe(box.y);
  58  |     }
  59  |   });
  60  | 
  61  |   test('Hover State Interaction: Hover over a clickable element and verify the cursor element receives an active/hover state', async ({ page }) => {
  62  |     await page.goto('/');
  63  |     
  64  |     // Inject a dummy button to hover over if page is empty
  65  |     await page.evaluate(() => {
  66  |       const btn = document.createElement('button');
  67  |       btn.id = 'test-hover-btn';
  68  |       btn.innerText = 'Hover Me';
  69  |       btn.style.position = 'absolute';
  70  |       btn.style.top = '200px';
  71  |       btn.style.left = '200px';
  72  |       btn.style.width = '100px';
  73  |       btn.style.height = '100px';
  74  |       document.body.appendChild(btn);
  75  |     });
  76  | 
  77  |     const cursor = page.locator('#syrup-cursor, .custom-cursor').first();
  78  |     const btn = page.locator('#test-hover-btn');
  79  |     
  80  |     // Initial state
  81  |     const initialClass = await cursor.getAttribute('class');
  82  |     const initialTransform = await cursor.evaluate(el => window.getComputedStyle(el).transform);
  83  |     
  84  |     // Hover over button
  85  |     await btn.hover();
  86  |     await page.waitForTimeout(200); // Wait for transition
  87  |     
  88  |     const hoverClass = await cursor.getAttribute('class');
  89  |     const hoverTransform = await cursor.evaluate(el => window.getComputedStyle(el).transform);
  90  |     
  91  |     // The cursor should have changed visually (class change or transform scale change)
  92  |     expect(hoverClass !== initialClass || hoverTransform !== initialTransform).toBeTruthy();
  93  |   });
  94  | 
  95  |   test('Cleanup Validation: Navigate between pages rapidly and check the console to ensure no requestAnimationFrame leaks', async ({ page }) => {
  96  |     const logs: string[] = [];
  97  |     page.on('console', msg => {
  98  |       if (msg.type() === 'error') logs.push(msg.text());
  99  |     });
  100 | 
  101 |     await page.goto('/');
  102 |     
  103 |     // Rapid navigation
  104 |     for (let i = 0; i < 5; i++) {
  105 |       await page.goto('/menu', { waitUntil: 'commit' });
  106 |       await page.goto('/', { waitUntil: 'commit' });
  107 |     }
  108 |     
  109 |     // Wait for everything to settle
  110 |     await page.waitForLoadState('networkidle');
  111 |     
  112 |     // Ensure only one cursor exists
  113 |     const cursors = page.locator('#syrup-cursor, .custom-cursor');
  114 |     const count = await cursors.count();
  115 |     expect(count).toBeLessThanOrEqual(1);
  116 |     
  117 |     // Check for leak errors in console
  118 |     expect(logs.filter(log => log.toLowerCase().includes('leak') || log.toLowerCase().includes('unmounted'))).toHaveLength(0);
  119 |   });
  120 | });
  121 | 
```