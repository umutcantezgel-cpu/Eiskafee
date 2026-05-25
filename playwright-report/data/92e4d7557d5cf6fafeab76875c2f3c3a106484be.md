# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: physics-playground.spec.ts >> PhysicsPlayground >> Resize Observer: Resize the browser window via Playwright; verify the canvas width and height attributes update dynamically
- Location: tests/e2e/physics-playground.spec.ts:57:7

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not 300
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
  - main [ref=e19]:
    - generic [ref=e21]:
      - generic [ref=e22]:
        - generic [ref=e26]:
          - generic [ref=e27]:
            - generic [ref=e30]: Dessertbar & Café · Wetzlar
            - heading "Süße Momente, frisch gemacht." [level=1] [ref=e31]:
              - text: Süße Momente,
              - text: frisch gemacht.
            - paragraph [ref=e32]: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
            - generic [ref=e33]:
              - link "Zur Speisekarte →" [ref=e35] [cursor=pointer]:
                - /url: /menu
                - button "Zur Speisekarte →" [ref=e36]:
                  - generic [ref=e37]: Zur Speisekarte →
              - link "Uns besuchen" [ref=e38] [cursor=pointer]:
                - /url: /visit
                - button "Uns besuchen" [ref=e39]
            - generic [ref=e40]:
              - generic [ref=e41]:
                - img [ref=e42]
                - img [ref=e44]
                - img [ref=e46]
                - img [ref=e48]
                - img [ref=e50]
              - generic [ref=e52]: 4.8/5 auf Google
              - generic [ref=e53]: (84+ Rezensionen)
          - generic [ref=e54]:
            - generic [ref=e57]:
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
            - img [ref=e60]:
              - generic [ref=e62]: HAUSGEMACHT
            - img [ref=e65]:
              - generic [ref=e67]: FRISCH & LECKER
        - img [ref=e69]
      - generic [ref=e73]:
        - generic [ref=e74]:
          - generic [ref=e76]:
            - img [ref=e77]
            - generic [ref=e79]: Café Atmosphäre\nFamilienfoto
          - generic [ref=e80]:
            - generic [ref=e81]: 4.8★
            - generic [ref=e82]: 84+ Google Reviews
        - generic [ref=e83]:
          - generic [ref=e84]:
            - img [ref=e86]:
              - generic [ref=e88]: FÜR DIE GANZE FAMILIE
            - img [ref=e90]:
              - generic [ref=e92]: MIT KINDERECKE
          - heading "Ein Ort für alle Generationen" [level=2] [ref=e93]:
            - text: Ein Ort für
            - text: alle Generationen
          - paragraph [ref=e94]: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
          - generic [ref=e95]:
            - generic [ref=e96]:
              - generic [ref=e97]: Kinderecke
              - generic [ref=e98]: Spielbereich für die Kleinen
            - generic [ref=e99]:
              - generic [ref=e100]: Wickelraum
              - generic [ref=e101]: Komfort für Familien
            - generic [ref=e102]:
              - generic [ref=e103]: Vegan
              - generic [ref=e104]: Vegane Optionen verfügbar
            - generic [ref=e105]:
              - generic [ref=e106]: Hausgemacht
              - generic [ref=e107]: Alles frisch & selbst gemacht
      - generic [ref=e108]:
        - img [ref=e110]
        - generic [ref=e112]:
          - generic [ref=e113]:
            - heading "Unsere Highlights" [level=2] [ref=e114]
            - paragraph [ref=e115]: Alles frisch und selbstgemacht — das schmeckt man.
          - generic [ref=e116]:
            - generic [ref=e118]:
              - generic [ref=e119]: Bestseller
              - img [ref=e121]
              - generic [ref=e125]:
                - heading "Fede & Friends Box" [level=3] [ref=e126]
                - paragraph [ref=e127]: Das ultimative Sharing-Erlebnis für Gruppen
                - generic [ref=e128]:
                  - generic [ref=e129]: 25,00 €
                  - button "Fede & Friends Box ansehen" [ref=e130] [cursor=pointer]:
                    - img [ref=e131]
            - generic [ref=e133]:
              - generic [ref=e134]: Beliebt
              - img [ref=e136]
              - generic [ref=e140]:
                - heading "Bubble Waffle Deluxe" [level=3] [ref=e141]
                - paragraph [ref=e142]: Eis + Sahne + 3 Toppings nach Wahl
                - generic [ref=e143]:
                  - generic [ref=e144]: 8,80 €
                  - button "Bubble Waffle Deluxe ansehen" [ref=e145] [cursor=pointer]:
                    - img [ref=e146]
            - generic [ref=e148]:
              - img [ref=e150]
              - generic [ref=e152]:
                - heading "Oreo Special Shake" [level=3] [ref=e153]
                - paragraph [ref=e154]: 0,4l · frisch gemixt mit Sahne
                - generic [ref=e155]:
                  - generic [ref=e156]: 6,50 €
                  - button "Oreo Special Shake ansehen" [ref=e157] [cursor=pointer]:
                    - img [ref=e158]
            - generic [ref=e160]:
              - img [ref=e162]
              - generic [ref=e165]:
                - heading "Pancake Picknick" [level=3] [ref=e166]
                - paragraph [ref=e167]: 12 Pancakes · 2 Fruchtsorten · Soße
                - generic [ref=e168]:
                  - generic [ref=e169]: 7,00 €
                  - button "Pancake Picknick ansehen" [ref=e170] [cursor=pointer]:
                    - img [ref=e171]
          - link "Alle Produkte ansehen" [ref=e174] [cursor=pointer]:
            - /url: /menu
            - button "Alle Produkte ansehen" [ref=e175]:
              - generic [ref=e176]: Alle Produkte ansehen
      - generic [ref=e185]:
        - generic [ref=e186]:
          - generic [ref=e187]: Dein exklusives Fede-Ticket
          - heading "Kostenlose Lieferung über Lieferando!" [level=2] [ref=e188]
          - paragraph [ref=e189]: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
          - link "Jetzt bei Lieferando bestellen →" [ref=e191] [cursor=pointer]:
            - /url: https://www.lieferando.de/speisekarte/hey-fede
            - button "Jetzt bei Lieferando bestellen →" [ref=e192]:
              - generic [ref=e193]: Jetzt bei Lieferando bestellen →
        - generic [ref=e196]:
          - generic [ref=e197]: 0€
          - generic [ref=e198]: LIEFERGEBÜHR
          - generic [ref=e199]: Über Lieferando
      - generic [ref=e222]:
        - img [ref=e224]
        - generic [ref=e227]:
          - generic [ref=e228]:
            - heading "Was unsere Gäste sagen" [level=2] [ref=e229]
            - paragraph [ref=e230]: 4.8/5 · 84+ echte Bewertungen auf Google
          - generic [ref=e231]:
            - generic [ref=e232]:
              - generic [ref=e233]:
                - img [ref=e234]
                - img [ref=e236]
                - img [ref=e238]
                - img [ref=e240]
                - img [ref=e242]
              - paragraph [ref=e244]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
              - generic [ref=e246]: Sarah M.
            - generic [ref=e253]:
              - generic [ref=e254]:
                - img [ref=e255]
                - img [ref=e257]
                - img [ref=e259]
                - img [ref=e261]
                - img [ref=e263]
              - paragraph [ref=e265]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
              - generic [ref=e267]: Thomas K.
            - generic [ref=e274]:
              - generic [ref=e275]:
                - img [ref=e276]
                - img [ref=e278]
                - img [ref=e280]
                - img [ref=e282]
                - img [ref=e284]
              - paragraph [ref=e286]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
              - generic [ref=e288]: Lisa R.
            - generic [ref=e295]:
              - generic [ref=e296]:
                - img [ref=e297]
                - img [ref=e299]
                - img [ref=e301]
                - img [ref=e303]
              - paragraph [ref=e305]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
              - generic [ref=e307]: Marco S.
            - generic [ref=e313]:
              - generic [ref=e314]:
                - img [ref=e315]
                - img [ref=e317]
                - img [ref=e319]
                - img [ref=e321]
                - img [ref=e323]
              - paragraph [ref=e325]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
              - generic [ref=e327]: Julia W.
  - contentinfo [ref=e334]:
    - img [ref=e336]
    - generic [ref=e338]:
      - generic [ref=e339]:
        - generic [ref=e340]:
          - img [ref=e342] [cursor=pointer]:
            - generic [ref=e344]: HeyFede!
          - paragraph [ref=e345]: Dessertbar & Café
          - paragraph [ref=e346]: Frisch. Selbstgemacht. Mit Liebe.
          - generic [ref=e347]:
            - link "Instagram" [ref=e348] [cursor=pointer]:
              - /url: https://instagram.com/heyfede_wetzlar
            - link "TikTok" [ref=e349] [cursor=pointer]:
              - /url: https://tiktok.com/@heyfede_wetzlar
        - generic [ref=e350]:
          - heading "Navigation" [level=4] [ref=e351]
          - generic [ref=e352]:
            - link "Startseite" [ref=e353] [cursor=pointer]:
              - /url: /
            - link "Speisekarte" [ref=e354] [cursor=pointer]:
              - /url: /menu
            - link "Über Uns" [ref=e355] [cursor=pointer]:
              - /url: /about
            - link "Besuchen & Liefern" [ref=e356] [cursor=pointer]:
              - /url: /visit
        - generic [ref=e357]:
          - heading "Kontakt" [level=4] [ref=e358]
          - generic [ref=e359]:
            - generic [ref=e360]:
              - img [ref=e361]
              - generic [ref=e364]: Langgasse 68, 35576 Wetzlar
            - generic [ref=e365]:
              - img [ref=e366]
              - generic [ref=e368]: 06441 7890426
            - generic [ref=e369]:
              - img [ref=e370]
              - generic [ref=e372]: 0176 25026991 (WhatsApp)
        - generic [ref=e373]:
          - heading "Öffnungszeiten" [level=4] [ref=e374]
          - generic [ref=e375]:
            - generic [ref=e376]: Mo – So
            - generic [ref=e377]: 11:30 – 20:00 Uhr
          - paragraph [ref=e379]: ✓ Keine Liefergebühr bei Lieferando
      - generic [ref=e380]:
        - paragraph [ref=e381]: © 2026 Hey Fede! Dessertbar & Café
        - generic [ref=e382]:
          - link "Impressum" [ref=e383] [cursor=pointer]:
            - /url: /legal#impressum
          - link "Datenschutz" [ref=e384] [cursor=pointer]:
            - /url: /legal#datenschutz
          - link "AGB" [ref=e385] [cursor=pointer]:
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
> 80  |         expect(box2.width).not.toBe(box1.width);
      |                                ^ Error: expect(received).not.toBe(expected) // Object.is equality
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