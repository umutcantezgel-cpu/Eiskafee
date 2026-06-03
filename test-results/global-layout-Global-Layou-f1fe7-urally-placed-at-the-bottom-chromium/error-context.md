# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global-layout.spec.ts >> Global Layout >> Footer Rendering: Verify the footer loads with legal pages, contact info, and is structurally placed at the bottom
- Location: tests/e2e/global-layout.spec.ts:16:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('footer')
Expected pattern: /contact/i
Received string:  "Dessertbar & CaféLanggasse 6835576 Wetzlar06441 7890426 InstagramHey Fede!StartseiteSpeisekarteÜber UnsBesuchen & LiefernEntdecke MehrBubble WafflesLieferserviceEisdiele & ShakesEvent CateringVegane DessertsÖffnungszeitenMontagGeschlossenDienstagGeschlossenMittwoch12:00 – 19:00 UhrHeuteDonnerstag12:00 – 19:00 UhrFreitag12:00 – 19:00 UhrSamstag12:00 – 19:00 UhrSonntag13:00 – 19:00 Uhr✓ Keine Liefergebühr bei LieferandoStay SweetAbonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.AbonnierenFrisch·Selbstgemacht·Mit LiebeWir sind hier zuhauseHessen›Lahn-Dill-Kreis›Wetzlar›LanggasseBesuche uns auch aufG Google● TripAdvisoryelp© 2026 Hey Fede! Dessertbar & CaféImpressumDatenschutzAGB"
Timeout: 5000ms

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('footer')
    14 × locator resolved to <footer class="relative bg-sand pt-10">…</footer>
       - unexpected value "Dessertbar & CaféLanggasse 6835576 Wetzlar06441 7890426 InstagramHey Fede!StartseiteSpeisekarteÜber UnsBesuchen & LiefernEntdecke MehrBubble WafflesLieferserviceEisdiele & ShakesEvent CateringVegane DessertsÖffnungszeitenMontagGeschlossenDienstagGeschlossenMittwoch12:00 – 19:00 UhrHeuteDonnerstag12:00 – 19:00 UhrFreitag12:00 – 19:00 UhrSamstag12:00 – 19:00 UhrSonntag13:00 – 19:00 Uhr✓ Keine Liefergebühr bei LieferandoStay SweetAbonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.AbonnierenFrisch·Selbstgemacht·Mit LiebeWir sind hier zuhauseHessen›Lahn-Dill-Kreis›Wetzlar›LanggasseBesuche uns auch aufG Google● TripAdvisoryelp© 2026 Hey Fede! Dessertbar & CaféImpressumDatenschutzAGB"

```

```yaml
- contentinfo:
    - img
    - link "Startseite":
        - /url: /
        - img "Hey Fede! Logo"
    - paragraph: Dessertbar & Café
    - text: Langgasse 68 35576 Wetzlar
    - link "06441 7890426":
        - /url: tel:+4964417890426
    - link "Instagram":
        - /url: https://www.instagram.com/heyfede_wetzlar
    - heading "Hey Fede!" [level=3]
    - navigation "Footer Navigation":
        - link "Startseite":
            - /url: /
        - link "Speisekarte":
            - /url: /menu
        - link "Über Uns":
            - /url: /about
        - link "Besuchen & Liefern":
            - /url: /visit
    - heading "Entdecke Mehr" [level=3]
    - navigation "SEO Navigation":
        - link "Bubble Waffles":
            - /url: /bubble-waffles-wetzlar
        - link "Lieferservice":
            - /url: /lieferservice-desserts-lahn-dill
        - link "Eisdiele & Shakes":
            - /url: /eisdiele-wetzlar-special-shakes
        - link "Event Catering":
            - /url: /events-catering-hessen
        - link "Vegane Desserts":
            - /url: /vegane-desserts-wetzlar
    - heading "Öffnungszeiten" [level=3]
    - text: Montag Geschlossen Dienstag Geschlossen Mittwoch 12:00 – 19:00 Uhr Heute Donnerstag 12:00 – 19:00 Uhr Freitag 12:00 – 19:00 Uhr Samstag 12:00 – 19:00 Uhr Sonntag 13:00 – 19:00 Uhr ✓ Keine Liefergebühr bei Lieferando
    - heading "Stay Sweet" [level=3]
    - paragraph: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
    - textbox "Bleib hungrig..."
    - button "Abonnieren"
    - text: Frisch · Selbstgemacht · Mit Liebe
    - img
    - img
    - img
    - img
    - img
    - heading "Wir sind hier zuhause" [level=3]
    - paragraph: Hessen › Lahn-Dill-Kreis › Wetzlar › Langgasse
    - heading "Besuche uns auch auf" [level=3]
    - link "G Google":
        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
    - link "● TripAdvisor":
        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
    - link "yelp":
        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
    - img "Made with Love in Wetzlar"
    - paragraph: © 2026 Hey Fede! Dessertbar & Café
    - link "Impressum":
        - /url: /legal#impressum
    - link "Datenschutz":
        - /url: /legal#datenschutz
    - link "AGB":
        - /url: /legal#agb
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
> 22 |     await expect(footer).toContainText(/contact/i);
     |                          ^ Error: expect(locator).toContainText(expected) failed
  23 |     await expect(footer).toContainText(/privacy|terms|legal/i);
  24 |   });
  25 |
  26 |   test('Mobile Responsiveness: Viewport set to mobile; verify the hamburger menu is visible and toggles the navigation pane correctly', async ({ page }) => {
  27 |     // Set viewport to mobile size
  28 |     await page.setViewportSize({ width: 375, height: 812 });
  29 |     await page.goto('/');
  30 |
  31 |     const hamburger = page.locator('button[aria-label="Toggle menu"], .hamburger-menu');
  32 |     await expect(hamburger).toBeVisible();
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
  68 |     // Proceed without artificial page lengthening
  69 |
  70 |     const header = page.locator('header');
  71 |     await expect(header).toBeVisible();
  72 |
  73 |     const initialBox = await header.boundingBox();
  74 |
  75 |     // Scroll down
  76 |     await page.mouse.wheel(0, 500);
  77 |     await page.waitForTimeout(500); // Wait for potential transitions
  78 |
  79 |     const scrolledBox = await header.boundingBox();
  80 |
  81 |     // Header should still be visible and at the top of the viewport
  82 |     await expect(header).toBeVisible();
  83 |     expect(scrolledBox?.y).toBe(0);
  84 |   });
  85 | });
  86 |
```
