# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: physics-playground.spec.ts >> PhysicsPlayground >> Memory Leak / Engine Cleanup: Navigate to the Physics page, then away. Verify via DOM and console that the Matter.js engine is destroyed
- Location: tests/e2e/physics-playground.spec.ts:86:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.count: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: /
        - img [ref=e6]:
          - generic [ref=e8]: HeyFede!
      - navigation [ref=e9]:
        - link "Speisekarte" [ref=e10] [cursor=pointer]:
          - /url: /menu
        - link "Über Uns" [ref=e11] [cursor=pointer]:
          - /url: /about
        - link "Besuchen & Liefern" [ref=e12] [cursor=pointer]:
          - /url: /visit
      - generic [ref=e13]:
        - link "Jetzt bestellen" [ref=e14] [cursor=pointer]:
          - /url: /menu
        - button [ref=e15] [cursor=pointer]:
          - img [ref=e16]
  - main [ref=e20]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - generic [ref=e27]:
          - generic [ref=e28]:
            - generic [ref=e31]: Dessertbar & Café · Wetzlar
            - heading "Süße Momente, frisch gemacht." [level=1] [ref=e32]:
              - text: Süße Momente,
              - text: frisch gemacht.
            - paragraph [ref=e33]: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
            - generic [ref=e34]:
              - link "Zur Speisekarte →" [ref=e36] [cursor=pointer]:
                - /url: /menu
                - button "Zur Speisekarte →" [ref=e37]:
                  - generic [ref=e38]: Zur Speisekarte →
              - link "Uns besuchen" [ref=e39] [cursor=pointer]:
                - /url: /visit
                - button "Uns besuchen" [ref=e40]
            - generic [ref=e41]:
              - generic [ref=e42]:
                - img [ref=e43]
                - img [ref=e45]
                - img [ref=e47]
                - img [ref=e49]
                - img [ref=e51]
              - generic [ref=e53]: 4.8/5 auf Google
              - generic [ref=e54]: (84+ Rezensionen)
          - generic [ref=e55]:
            - generic [ref=e58]:
              - generic: Spiel mit uns!
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
              - generic:
                - img
            - img [ref=e61]:
              - generic [ref=e63]: HAUSGEMACHT
            - img [ref=e66]:
              - generic [ref=e68]: FRISCH & LECKER
        - img [ref=e70]
      - generic [ref=e74]:
        - generic [ref=e75]:
          - generic [ref=e77]:
            - img [ref=e78]
            - generic [ref=e80]: Café Atmosphäre\nFamilienfoto
          - generic [ref=e81]:
            - generic [ref=e82]: 4.8★
            - generic [ref=e83]: 84+ Google Reviews
        - generic [ref=e84]:
          - generic [ref=e85]:
            - img [ref=e87]:
              - generic [ref=e89]: FÜR DIE GANZE FAMILIE
            - img [ref=e91]:
              - generic [ref=e93]: MIT KINDERECKE
          - heading "Ein Ort für alle Generationen" [level=2] [ref=e94]:
            - text: Ein Ort für
            - text: alle Generationen
          - paragraph [ref=e95]: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
          - generic [ref=e96]:
            - generic [ref=e97]:
              - generic [ref=e98]: Kinderecke
              - generic [ref=e99]: Spielbereich für die Kleinen
            - generic [ref=e100]:
              - generic [ref=e101]: Wickelraum
              - generic [ref=e102]: Komfort für Familien
            - generic [ref=e103]:
              - generic [ref=e104]: Vegan
              - generic [ref=e105]: Vegane Optionen verfügbar
            - generic [ref=e106]:
              - generic [ref=e107]: Hausgemacht
              - generic [ref=e108]: Alles frisch & selbst gemacht
      - generic [ref=e109]:
        - img [ref=e111]
        - generic [ref=e113]:
          - generic [ref=e114]:
            - heading "Unsere Highlights" [level=2] [ref=e115]
            - paragraph [ref=e116]: Alles frisch und selbstgemacht — das schmeckt man.
          - generic [ref=e117]:
            - generic [ref=e119]:
              - generic [ref=e120]: Bestseller
              - img [ref=e122]
              - generic [ref=e127]:
                - heading "Fede & Friends Box" [level=3] [ref=e128]
                - paragraph [ref=e129]: Das ultimative Sharing-Erlebnis für Gruppen
                - generic [ref=e130]:
                  - generic [ref=e131]: 25,00 €
                  - button "Fede & Friends Box ansehen" [ref=e132] [cursor=pointer]:
                    - img [ref=e133]
            - generic [ref=e137]:
              - generic [ref=e138]: Beliebt
              - img [ref=e140]
              - generic [ref=e144]:
                - heading "Bubble Waffle Deluxe" [level=3] [ref=e145]
                - paragraph [ref=e146]: Eis + Sahne + 3 Toppings nach Wahl
                - generic [ref=e147]:
                  - generic [ref=e148]: 8,80 €
                  - button "Bubble Waffle Deluxe ansehen" [ref=e149] [cursor=pointer]:
                    - img [ref=e150]
            - generic [ref=e154]:
              - img [ref=e156]
              - generic [ref=e161]:
                - heading "Oreo Special Shake" [level=3] [ref=e162]
                - paragraph [ref=e163]: 0,4l · frisch gemixt mit Sahne
                - generic [ref=e164]:
                  - generic [ref=e165]: 6,50 €
                  - button "Oreo Special Shake ansehen" [ref=e166] [cursor=pointer]:
                    - img [ref=e167]
            - generic [ref=e171]:
              - img [ref=e173]
              - generic [ref=e183]:
                - heading "Pancake Picknick" [level=3] [ref=e184]
                - paragraph [ref=e185]: 12 Pancakes · 2 Fruchtsorten · Soße
                - generic [ref=e186]:
                  - generic [ref=e187]: 7,00 €
                  - button "Pancake Picknick ansehen" [ref=e188] [cursor=pointer]:
                    - img [ref=e189]
          - link "Alle Produkte ansehen" [ref=e194] [cursor=pointer]:
            - /url: /menu
            - button "Alle Produkte ansehen" [ref=e195]:
              - generic [ref=e196]: Alle Produkte ansehen
      - generic [ref=e205]:
        - generic [ref=e206]:
          - generic [ref=e207]: Dein exklusives Fede-Ticket
          - heading "Kostenlose Lieferung über Lieferando!" [level=2] [ref=e208]
          - paragraph [ref=e209]: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
          - link "Jetzt bei Lieferando bestellen →" [ref=e211] [cursor=pointer]:
            - /url: https://www.lieferando.de/speisekarte/hey-fede
            - button "Jetzt bei Lieferando bestellen →" [ref=e212]:
              - generic [ref=e213]: Jetzt bei Lieferando bestellen →
        - generic [ref=e216]:
          - generic [ref=e217]: 0€
          - generic [ref=e218]: LIEFERGEBÜHR
          - generic [ref=e219]: Über Lieferando
      - generic [ref=e242]:
        - img [ref=e244]
        - generic [ref=e247]:
          - generic [ref=e248]:
            - heading "Was unsere Gäste sagen" [level=2] [ref=e249]
            - paragraph [ref=e250]: 4.8/5 · 84+ echte Bewertungen auf Google
          - generic [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e253]:
                - img [ref=e254]
                - img [ref=e256]
                - img [ref=e258]
                - img [ref=e260]
                - img [ref=e262]
              - paragraph [ref=e264]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
              - generic [ref=e266]: Sarah M.
            - generic [ref=e273]:
              - generic [ref=e274]:
                - img [ref=e275]
                - img [ref=e277]
                - img [ref=e279]
                - img [ref=e281]
                - img [ref=e283]
              - paragraph [ref=e285]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
              - generic [ref=e287]: Thomas K.
            - generic [ref=e294]:
              - generic [ref=e295]:
                - img [ref=e296]
                - img [ref=e298]
                - img [ref=e300]
                - img [ref=e302]
                - img [ref=e304]
              - paragraph [ref=e306]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
              - generic [ref=e308]: Lisa R.
            - generic [ref=e315]:
              - generic [ref=e316]:
                - img [ref=e317]
                - img [ref=e319]
                - img [ref=e321]
                - img [ref=e323]
              - paragraph [ref=e325]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
              - generic [ref=e327]: Marco S.
            - generic [ref=e333]:
              - generic [ref=e334]:
                - img [ref=e335]
                - img [ref=e337]
                - img [ref=e339]
                - img [ref=e341]
                - img [ref=e343]
              - paragraph [ref=e345]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
              - generic [ref=e347]: Julia W.
  - contentinfo [ref=e354]:
    - img [ref=e356]
    - generic [ref=e358]:
      - generic [ref=e359]:
        - generic [ref=e360]:
          - img [ref=e362] [cursor=pointer]:
            - generic [ref=e364]: HeyFede!
          - paragraph [ref=e365]: Dessertbar & Café
          - paragraph [ref=e366]: Frisch. Selbstgemacht. Mit Liebe.
          - generic [ref=e367]:
            - link "Instagram" [ref=e368] [cursor=pointer]:
              - /url: https://instagram.com/heyfede_wetzlar
            - link "TikTok" [ref=e369] [cursor=pointer]:
              - /url: https://tiktok.com/@heyfede_wetzlar
        - generic [ref=e370]:
          - heading "Navigation" [level=4] [ref=e371]
          - generic [ref=e372]:
            - link "Startseite" [ref=e373] [cursor=pointer]:
              - /url: /
            - link "Speisekarte" [ref=e374] [cursor=pointer]:
              - /url: /menu
            - link "Über Uns" [ref=e375] [cursor=pointer]:
              - /url: /about
            - link "Besuchen & Liefern" [ref=e376] [cursor=pointer]:
              - /url: /visit
        - generic [ref=e377]:
          - heading "Kontakt" [level=4] [ref=e378]
          - generic [ref=e379]:
            - generic [ref=e380]:
              - img [ref=e381]
              - generic [ref=e384]: Langgasse 68, 35576 Wetzlar
            - generic [ref=e385]:
              - img [ref=e386]
              - generic [ref=e388]: 06441 7890426
            - generic [ref=e389]:
              - img [ref=e390]
              - generic [ref=e392]: 0176 25026991 (WhatsApp)
        - generic [ref=e393]:
          - heading "Öffnungszeiten" [level=4] [ref=e394]
          - generic [ref=e395]:
            - generic [ref=e396]: Mo – So
            - generic [ref=e397]: 11:30 – 20:00 Uhr
          - paragraph [ref=e399]: ✓ Keine Liefergebühr bei Lieferando
      - generic [ref=e400]:
        - paragraph [ref=e401]: © 2026 Hey Fede! Dessertbar & Café
        - generic [ref=e402]:
          - link "Impressum" [ref=e403] [cursor=pointer]:
            - /url: /legal#impressum
          - link "Datenschutz" [ref=e404] [cursor=pointer]:
            - /url: /legal#datenschutz
          - link "AGB" [ref=e405] [cursor=pointer]:
            - /url: /legal#agb
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
  22  |     await expect(canvas).toBeAttached();
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
> 94  |     if (await physicsLink.count() > 0) {
      |                           ^ Error: locator.count: Test timeout of 30000ms exceeded.
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
  123 |       await page.waitForTimeout(500);
  124 |     }
  125 |     
  126 |     await page.goto('/?physics=true', { waitUntil: 'networkidle' });
  127 |     
  128 |     // Ensure we don't have dangling canvases
  129 |     const canvases = page.locator('canvas');
  130 |     const count = await canvases.count();
  131 |     
  132 |     // Depending on architecture, might be 0 if not on the right page, but should never be > 1
  133 |     expect(count).toBeLessThanOrEqual(1);
  134 |   });
  135 | });
  136 | 
```