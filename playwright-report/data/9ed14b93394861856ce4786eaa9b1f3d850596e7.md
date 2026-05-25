# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: physics-playground.spec.ts >> PhysicsPlayground >> Canvas Hydration: Navigate to PhysicsPlayground and verify the Matter.js canvas is mounted successfully with zero console errors
- Location: tests/e2e/physics-playground.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeAttached() failed

Locator: locator('canvas').first()
Expected: attached
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeAttached" with timeout 5000ms
  - waiting for locator('canvas').first()

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
  3   | test.describe('PhysicsPlayground', () => {
  4   |   test('Canvas Hydration: Navigate to PhysicsPlayground and verify the Matter.js canvas is mounted successfully with zero console errors', async ({ page }) => {
  5   |     const logs: string[] = [];
  6   |     page.on('console', msg => {
  7   |       if (msg.type() === 'error') logs.push(msg.text());
  8   |     });
  9   |     page.on('pageerror', err => logs.push(err.message));
  10  | 
  11  |     // Assume the physics playground might be on the home page or a specific route
  12  |     await page.goto('/');
  13  |     
  14  |     // Attempt to navigate to a physics page if it exists, otherwise test the home page
  15  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  16  |     if (await physicsLink.count() > 0) {
  17  |       await physicsLink.click();
  18  |       await page.waitForLoadState('networkidle');
  19  |     }
  20  | 
  21  |     const canvas = page.locator('canvas').first();
> 22  |     await expect(canvas).toBeAttached();
      |                          ^ Error: expect(locator).toBeAttached() failed
  23  |     
  24  |     // No hydration errors
  25  |     expect(logs.filter(log => log.includes('Hydration') || log.includes('Minified React error'))).toHaveLength(0);
  26  |   });
  27  | 
  28  |   test('Interaction Safety: Simulate click-and-drag events inside the canvas coordinates; verify no unhandled JS exceptions', async ({ page }) => {
  29  |     let hasError = false;
  30  |     page.on('pageerror', () => { hasError = true; });
  31  |     
  32  |     await page.goto('/');
  33  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  34  |     if (await physicsLink.count() > 0) {
  35  |       await physicsLink.click();
  36  |       await page.waitForLoadState('networkidle');
  37  |     }
  38  | 
  39  |     const canvas = page.locator('canvas').first();
  40  |     if (await canvas.count() > 0) {
  41  |       const box = await canvas.boundingBox();
  42  |       if (box) {
  43  |         // Simulate click and drag from center
  44  |         const startX = box.x + box.width / 2;
  45  |         const startY = box.y + box.height / 2;
  46  |         
  47  |         await page.mouse.move(startX, startY);
  48  |         await page.mouse.down();
  49  |         await page.mouse.move(startX + 100, startY + 100, { steps: 10 });
  50  |         await page.mouse.up();
  51  |       }
  52  |     }
  53  |     
  54  |     expect(hasError).toBe(false);
  55  |   });
  56  | 
  57  |   test('Resize Observer: Resize the browser window via Playwright; verify the canvas width and height attributes update dynamically', async ({ page }) => {
  58  |     await page.goto('/');
  59  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  60  |     if (await physicsLink.count() > 0) {
  61  |       await physicsLink.click();
  62  |       await page.waitForLoadState('networkidle');
  63  |     }
  64  | 
  65  |     const canvas = page.locator('canvas').first();
  66  |     if (await canvas.count() > 0) {
  67  |       // Set to one size
  68  |       await page.setViewportSize({ width: 800, height: 600 });
  69  |       await page.waitForTimeout(500); // Allow resize observer to fire
  70  |       
  71  |       const box1 = await canvas.boundingBox();
  72  |       
  73  |       // Set to another size
  74  |       await page.setViewportSize({ width: 1024, height: 768 });
  75  |       await page.waitForTimeout(500);
  76  |       
  77  |       const box2 = await canvas.boundingBox();
  78  |       
  79  |       if (box1 && box2) {
  80  |         expect(box2.width).not.toBe(box1.width);
  81  |         expect(box2.height).not.toBe(box1.height);
  82  |       }
  83  |     }
  84  |   });
  85  | 
  86  |   test('Memory Leak / Engine Cleanup: Navigate to the Physics page, then away. Verify via DOM and console that the Matter.js engine is destroyed', async ({ page }) => {
  87  |     const logs: string[] = [];
  88  |     page.on('console', msg => {
  89  |       if (msg.type() === 'error') logs.push(msg.text());
  90  |     });
  91  | 
  92  |     await page.goto('/');
  93  |     const physicsLink = page.getByRole('link', { name: /physics|playground/i });
  94  |     if (await physicsLink.count() > 0) {
  95  |       await physicsLink.click();
  96  |       await page.waitForLoadState('networkidle');
  97  |       
  98  |       // Verify canvas is there
  99  |       await expect(page.locator('canvas').first()).toBeAttached();
  100 |       
  101 |       // Navigate away
  102 |       await page.goto('/about');
  103 |       await page.waitForLoadState('networkidle');
  104 |       
  105 |       // Verify canvas is gone
  106 |       await expect(page.locator('canvas')).toHaveCount(0);
  107 |     }
  108 |     
  109 |     // Check for leak errors
  110 |     expect(logs.filter(log => log.toLowerCase().includes('leak') || log.toLowerCase().includes('engine'))).toHaveLength(0);
  111 |   });
  112 | 
  113 |   test('Multiple Instances Safety: Navigate back and forth to the Physics page 3 times. Verify only one canvas exists at a time', async ({ page }) => {
  114 |     await page.goto('/');
  115 |     
  116 |     // To reliably test this, we can force multiple visits
  117 |     for (let i = 0; i < 3; i++) {
  118 |       // Go to physics-related route or just home if it's there
  119 |       await page.goto('/?physics=true', { waitUntil: 'commit' });
  120 |       await page.waitForTimeout(500);
  121 |       
  122 |       await page.goto('/about', { waitUntil: 'commit' });
```