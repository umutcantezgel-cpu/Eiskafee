# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: physics-playground.spec.ts >> PhysicsPlayground >> Multiple Instances Safety: Navigate back and forth to the Physics page 3 times. Verify only one canvas exists at a time
- Location: tests/e2e/physics-playground.spec.ts:113:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://127.0.0.1:3000/?physics=true", waiting until "networkidle"

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
      - generic [ref=e9]:
        - link "Jetzt bestellen" [ref=e10] [cursor=pointer]:
          - /url: /menu
        - button [ref=e11] [cursor=pointer]:
          - img [ref=e12]
        - button [ref=e15] [cursor=pointer]:
          - img [ref=e16]
  - main [ref=e17]:
    - generic [ref=e19]:
      - generic [ref=e20]:
        - generic [ref=e25]:
          - generic [ref=e28]: Dessertbar & Café · Wetzlar
          - heading "Süße Momente, frisch gemacht." [level=1] [ref=e29]:
            - text: Süße Momente,
            - text: frisch gemacht.
          - paragraph [ref=e30]: Bubble Waffeln, Pancake Boxen, Special Shakes und mehr — alles selbstgemacht mit Liebe. Dein gemütlicher Treffpunkt in der Wetzlarer Langgasse.
          - generic [ref=e31]:
            - link "Zur Speisekarte →" [ref=e33] [cursor=pointer]:
              - /url: /menu
              - button "Zur Speisekarte →" [ref=e34]:
                - generic [ref=e35]: Zur Speisekarte →
            - link "Uns besuchen" [ref=e36] [cursor=pointer]:
              - /url: /visit
              - button "Uns besuchen" [ref=e37]
          - generic [ref=e38]:
            - generic [ref=e39]:
              - img [ref=e40]
              - img [ref=e42]
              - img [ref=e44]
              - img [ref=e46]
              - img [ref=e48]
            - generic [ref=e50]: 4.8/5 auf Google
            - generic [ref=e51]: (84+ Rezensionen)
        - img [ref=e53]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - generic [ref=e60]:
            - img [ref=e61]
            - generic [ref=e63]: Café Atmosphäre\nFamilienfoto
          - generic [ref=e64]:
            - generic [ref=e65]: 4.8★
            - generic [ref=e66]: 84+ Google Reviews
        - generic [ref=e67]:
          - generic [ref=e68]:
            - img [ref=e70]:
              - generic [ref=e72]: FÜR DIE GANZE FAMILIE
            - img [ref=e74]:
              - generic [ref=e76]: MIT KINDERECKE
          - heading "Ein Ort für alle Generationen" [level=2] [ref=e77]:
            - text: Ein Ort für
            - text: alle Generationen
          - paragraph [ref=e78]: Bei Hey Fede! dreht sich alles ums Zusammenkommen. Ob Familienausflug, Verabredung mit Freunden oder ein süßer Nachmittag mit den Kleinen — hier ist Platz für alle.
          - generic [ref=e79]:
            - generic [ref=e80]:
              - generic [ref=e81]: Kinderecke
              - generic [ref=e82]: Spielbereich für die Kleinen
            - generic [ref=e83]:
              - generic [ref=e84]: Wickelraum
              - generic [ref=e85]: Komfort für Familien
            - generic [ref=e86]:
              - generic [ref=e87]: Vegan
              - generic [ref=e88]: Vegane Optionen verfügbar
            - generic [ref=e89]:
              - generic [ref=e90]: Hausgemacht
              - generic [ref=e91]: Alles frisch & selbst gemacht
      - generic [ref=e92]:
        - img [ref=e94]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - heading "Unsere Highlights" [level=2] [ref=e98]
            - paragraph [ref=e99]: Alles frisch und selbstgemacht — das schmeckt man.
          - generic [ref=e100]:
            - generic [ref=e102]:
              - generic [ref=e103]: Bestseller
              - img [ref=e105]
              - generic [ref=e109]:
                - heading "Fede & Friends Box" [level=3] [ref=e110]
                - paragraph [ref=e111]: Das ultimative Sharing-Erlebnis für Gruppen
                - generic [ref=e112]:
                  - generic [ref=e113]: 25,00 €
                  - button "Fede & Friends Box ansehen" [ref=e114] [cursor=pointer]:
                    - img [ref=e115]
            - generic [ref=e117]:
              - generic [ref=e118]: Beliebt
              - img [ref=e120]
              - generic [ref=e124]:
                - heading "Bubble Waffle Deluxe" [level=3] [ref=e125]
                - paragraph [ref=e126]: Eis + Sahne + 3 Toppings nach Wahl
                - generic [ref=e127]:
                  - generic [ref=e128]: 8,80 €
                  - button "Bubble Waffle Deluxe ansehen" [ref=e129] [cursor=pointer]:
                    - img [ref=e130]
            - generic [ref=e132]:
              - img [ref=e134]
              - generic [ref=e136]:
                - heading "Oreo Special Shake" [level=3] [ref=e137]
                - paragraph [ref=e138]: 0,4l · frisch gemixt mit Sahne
                - generic [ref=e139]:
                  - generic [ref=e140]: 6,50 €
                  - button "Oreo Special Shake ansehen" [ref=e141] [cursor=pointer]:
                    - img [ref=e142]
            - generic [ref=e144]:
              - img [ref=e146]
              - generic [ref=e149]:
                - heading "Pancake Picknick" [level=3] [ref=e150]
                - paragraph [ref=e151]: 12 Pancakes · 2 Fruchtsorten · Soße
                - generic [ref=e152]:
                  - generic [ref=e153]: 7,00 €
                  - button "Pancake Picknick ansehen" [ref=e154] [cursor=pointer]:
                    - img [ref=e155]
          - link "Alle Produkte ansehen" [ref=e158] [cursor=pointer]:
            - /url: /menu
            - button "Alle Produkte ansehen" [ref=e159]:
              - generic [ref=e160]: Alle Produkte ansehen
      - generic [ref=e169]:
        - generic [ref=e170]:
          - generic [ref=e171]: Dein exklusives Fede-Ticket
          - heading "Kostenlose Lieferung über Lieferando!" [level=2] [ref=e172]
          - paragraph [ref=e173]: Bestell bequem von zu Hause — ohne Liefergebühr. Frische Desserts direkt zu dir.
          - link "Jetzt bei Lieferando bestellen →" [ref=e175] [cursor=pointer]:
            - /url: https://www.lieferando.de/speisekarte/hey-fede
            - button "Jetzt bei Lieferando bestellen →" [ref=e176]:
              - generic [ref=e177]: Jetzt bei Lieferando bestellen →
        - generic [ref=e179]:
          - generic [ref=e180]: 0€
          - generic [ref=e181]: LIEFERGEBÜHR
          - generic [ref=e182]: Über Lieferando
      - generic [ref=e205]:
        - img [ref=e207]
        - generic [ref=e210]:
          - generic [ref=e211]:
            - heading "Was unsere Gäste sagen" [level=2] [ref=e212]
            - paragraph [ref=e213]: 4.8/5 · 84+ echte Bewertungen auf Google
          - generic [ref=e214]:
            - generic [ref=e215]:
              - generic [ref=e216]:
                - img [ref=e217]
                - img [ref=e219]
                - img [ref=e221]
                - img [ref=e223]
                - img [ref=e225]
              - paragraph [ref=e227]: „Die Bubble Waffeln sind absolute Weltklasse! So frisch und knusprig. Das Personal ist super nett und zuvorkommend."
              - generic [ref=e229]: Sarah M.
            - generic [ref=e236]:
              - generic [ref=e237]:
                - img [ref=e238]
                - img [ref=e240]
                - img [ref=e242]
                - img [ref=e244]
                - img [ref=e246]
              - paragraph [ref=e248]: „Bestes Dessertcafé in Wetzlar! Die Pancake Box ist ein Traum. Kommen definitiv wieder!"
              - generic [ref=e250]: Thomas K.
            - generic [ref=e257]:
              - generic [ref=e258]:
                - img [ref=e259]
                - img [ref=e261]
                - img [ref=e263]
                - img [ref=e265]
                - img [ref=e267]
              - paragraph [ref=e269]: „Mit den Kindern dort gewesen — die Kinderecke ist super! Die Special Shakes schmecken einfach himmlisch."
              - generic [ref=e271]: Lisa R.
            - generic [ref=e278]:
              - generic [ref=e279]:
                - img [ref=e280]
                - img [ref=e282]
                - img [ref=e284]
                - img [ref=e286]
              - paragraph [ref=e288]: „Tolles Ambiente, leckere Desserts. Die Mix Box ist perfekt zum Teilen. Gerne wieder!"
              - generic [ref=e290]: Marco S.
            - generic [ref=e296]:
              - generic [ref=e297]:
                - img [ref=e298]
                - img [ref=e300]
                - img [ref=e302]
                - img [ref=e304]
                - img [ref=e306]
              - paragraph [ref=e308]: „Absolute Empfehlung! Alles selbst gemacht, man schmeckt die Qualität sofort. Mein neues Lieblingscafé!"
              - generic [ref=e310]: Julia W.
  - contentinfo [ref=e317]:
    - img [ref=e319]
    - generic [ref=e321]:
      - generic [ref=e322]:
        - generic [ref=e323]:
          - img [ref=e325] [cursor=pointer]:
            - generic [ref=e327]: HeyFede!
          - paragraph [ref=e328]: Dessertbar & Café
          - paragraph [ref=e329]: Frisch. Selbstgemacht. Mit Liebe.
          - generic [ref=e330]:
            - link "Instagram" [ref=e331] [cursor=pointer]:
              - /url: https://instagram.com/heyfede_wetzlar
            - link "TikTok" [ref=e332] [cursor=pointer]:
              - /url: https://tiktok.com/@heyfede_wetzlar
        - generic [ref=e333]:
          - heading "Navigation" [level=4] [ref=e334]
          - generic [ref=e335]:
            - link "Startseite" [ref=e336] [cursor=pointer]:
              - /url: /
            - link "Speisekarte" [ref=e337] [cursor=pointer]:
              - /url: /menu
            - link "Über Uns" [ref=e338] [cursor=pointer]:
              - /url: /about
            - link "Besuchen & Liefern" [ref=e339] [cursor=pointer]:
              - /url: /visit
        - generic [ref=e340]:
          - heading "Kontakt" [level=4] [ref=e341]
          - generic [ref=e342]:
            - generic [ref=e343]:
              - img [ref=e344]
              - generic [ref=e347]: Langgasse 68, 35576 Wetzlar
            - generic [ref=e348]:
              - img [ref=e349]
              - generic [ref=e351]: 06441 7890426
            - generic [ref=e352]:
              - img [ref=e353]
              - generic [ref=e355]: 0176 25026991 (WhatsApp)
        - generic [ref=e356]:
          - heading "Öffnungszeiten" [level=4] [ref=e357]
          - generic [ref=e358]:
            - generic [ref=e359]: Mo – So
            - generic [ref=e360]: 11:30 – 20:00 Uhr
          - paragraph [ref=e362]: ✓ Keine Liefergebühr bei Lieferando
      - generic [ref=e363]:
        - paragraph [ref=e364]: © 2026 Hey Fede! Dessertbar & Café
        - generic [ref=e365]:
          - link "Impressum" [ref=e366] [cursor=pointer]:
            - /url: /legal#impressum
          - link "Datenschutz" [ref=e367] [cursor=pointer]:
            - /url: /legal#datenschutz
          - link "AGB" [ref=e368] [cursor=pointer]:
            - /url: /legal#agb
```

# Test source

```ts
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
  123 |       await page.waitForTimeout(500);
  124 |     }
  125 |     
> 126 |     await page.goto('/?physics=true', { waitUntil: 'networkidle' });
      |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
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