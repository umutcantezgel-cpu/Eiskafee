# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_forms_state.spec.ts >> Tier 3: Form Submissions & State Management >> Support Forms >> should fill out Kontakt form
- Location: tests/e2e/tier3_forms_state.spec.ts:84:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel(/Dein Name/i)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Zum Hauptinhalt springen" [ref=e2] [cursor=pointer]:
        - /url: "#main-content"
    - status
    - banner [ref=e6]:
        - generic [ref=e7]:
            - link "Hey Fedee! Startseite" [ref=e9] [cursor=pointer]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e11]
            - navigation "Hauptnavigation" [ref=e12]:
                - link "Speisekarte" [ref=e13] [cursor=pointer]:
                    - /url: /menu
                - link "Über Uns" [ref=e14] [cursor=pointer]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e15] [cursor=pointer]:
                    - /url: /visit
            - generic [ref=e16]:
                - link "Jetzt bestellen" [ref=e18] [cursor=pointer]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e20]:
                        - generic [ref=e21]: Jetzt bestellen
                        - img [ref=e22]
                - link "Profil" [ref=e24] [cursor=pointer]:
                    - /url: /auth
                    - img [ref=e26]
                - button "Warenkorb" [ref=e29] [cursor=pointer]:
                    - img [ref=e30]
    - main [ref=e34]:
        - generic [ref=e35]:
            - generic [ref=e36]:
                - heading "Wie können wir helfen?" [level=1] [ref=e37]:
                    - generic [ref=e38]: Wie
                    - generic [ref=e39]: können
                    - generic [ref=e40]: wir
                    - generic [ref=e41]: helfen?
                - paragraph [ref=e42]: Scroll weiter, um Antworten zu finden oder schreib uns.
                - img [ref=e44]
            - generic [ref=e47]:
                - generic [ref=e48]:
                    - generic [ref=e49]: Fragen
                    - generic [ref=e50]: blubbern
                    - generic [ref=e51]: auf.
                - generic [ref=e52]:
                    - generic [ref=e54] [cursor=pointer]: Liefert ihr?
                    - generic [ref=e56] [cursor=pointer]: Was ist in der Box?
                    - generic [ref=e58] [cursor=pointer]: Vegan?
                    - generic [ref=e60] [cursor=pointer]: Reservieren?
            - generic [ref=e61]:
                - generic [ref=e62]:
                    - generic [ref=e63]: Nichts
                    - generic [ref=e64]: gefunden?
                - generic [ref=e65]:
                    - generic [ref=e67]:
                        - heading "Schreib uns" [level=2] [ref=e68]
                        - generic [ref=e69]:
                            - generic [ref=e70]: Dein Name
                            - textbox "Dein Name" [ref=e71]
                        - generic [ref=e72]:
                            - generic [ref=e73]: Deine E-Mail
                            - textbox "mail@beispiel.de" [ref=e74]
                        - generic [ref=e75]:
                            - generic [ref=e76]: Nachricht
                            - textbox "Was liegt dir auf dem Herzen?" [ref=e77]
                        - button "Senden" [ref=e78]:
                            - text: Senden
                            - img [ref=e79]
                    - generic [ref=e83]:
                        - img [ref=e85]
                        - heading "Direkt Texten?" [level=3] [ref=e87]
                        - paragraph [ref=e88]: Schreib uns einfach auf WhatsApp. Wir antworten superschnell.
                        - link "WhatsApp Chat Starten" [ref=e89] [cursor=pointer]:
                            - /url: https://wa.me/49123456789
    - contentinfo [ref=e90]:
        - img [ref=e93]
        - generic [ref=e95]:
            - generic [ref=e96]:
                - generic [ref=e97]:
                    - link "Startseite" [ref=e98] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e100]
                    - paragraph [ref=e101]: Dessertbar & Café
                    - generic [ref=e104]:
                        - generic [ref=e105]:
                            - img [ref=e106]
                            - generic [ref=e109]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e110]:
                            - img [ref=e111]
                            - link "06441 7890426" [ref=e113] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e115] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e116]
                        - text: Instagram
                - generic [ref=e119]:
                    - heading "Hey Fede!" [level=3] [ref=e120]
                    - navigation "Footer Navigation" [ref=e121]:
                        - link "Startseite" [ref=e122] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e123] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e124] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e125] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e126]
                    - navigation "SEO Navigation" [ref=e127]:
                        - link "Bubble Waffles" [ref=e128] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e129] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e130] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e131] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e132] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e133]:
                    - heading "Öffnungszeiten" [level=3] [ref=e134]
                    - generic [ref=e137]:
                        - generic [ref=e138]:
                            - generic [ref=e140]: Montag
                            - generic [ref=e142]: Geschlossen
                        - generic [ref=e143]:
                            - generic [ref=e145]: Dienstag
                            - generic [ref=e147]: Geschlossen
                        - generic [ref=e148]:
                            - generic [ref=e151]: Mittwoch
                            - generic [ref=e152]:
                                - generic [ref=e153]: 12:00 – 19:00 Uhr
                                - generic [ref=e154]: Heute
                        - generic [ref=e155]:
                            - generic [ref=e157]: Donnerstag
                            - generic [ref=e159]: 12:00 – 19:00 Uhr
                        - generic [ref=e160]:
                            - generic [ref=e162]: Freitag
                            - generic [ref=e164]: 12:00 – 19:00 Uhr
                        - generic [ref=e165]:
                            - generic [ref=e167]: Samstag
                            - generic [ref=e169]: 12:00 – 19:00 Uhr
                        - generic [ref=e170]:
                            - generic [ref=e172]: Sonntag
                            - generic [ref=e174]: 13:00 – 19:00 Uhr
                    - generic [ref=e175]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e176]:
                    - heading "Stay Sweet" [level=3] [ref=e177]
                    - paragraph [ref=e178]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e180]:
                        - textbox "Bleib hungrig..." [ref=e181]
                        - button "Abonnieren" [ref=e183]:
                            - generic [ref=e184]: Abonnieren
            - generic [ref=e185]:
                - generic [ref=e186]: Frisch
                - generic [ref=e187]: ·
                - generic [ref=e188]: Selbstgemacht
                - generic [ref=e189]: ·
                - generic [ref=e190]: Mit Liebe
            - generic [ref=e191]:
                - img [ref=e192]
                - img [ref=e194]
                - img [ref=e196]
                - img [ref=e198]
                - img [ref=e200]
            - generic [ref=e202]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e203]
                - paragraph [ref=e204]:
                    - generic [ref=e205]: Hessen
                    - generic [ref=e206]: ›
                    - generic [ref=e207]: Lahn-Dill-Kreis
                    - generic [ref=e208]: ›
                    - generic [ref=e209]: Wetzlar
                    - generic [ref=e210]: ›
                    - generic [ref=e211]: Langgasse
            - generic [ref=e212]:
                - heading "Besuche uns auch auf" [level=3] [ref=e213]
                - generic [ref=e214]:
                    - link "G Google" [ref=e215] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e216]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e217] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e218]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e219] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e220]: yelp
            - img "Made with Love in Wetzlar" [ref=e223]
            - generic [ref=e224]:
                - paragraph [ref=e225]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e226]:
                    - link "Impressum" [ref=e227] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e228] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e229] [cursor=pointer]:
                        - /url: /legal#agb
    - generic [ref=e231]:
        - img [ref=e233]
        - generic [ref=e240]:
            - heading "Cookies für dich!" [level=3] [ref=e241]
            - paragraph [ref=e242]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e243]:
            - button "Ablehnen" [ref=e244]
            - button "Anpassen" [ref=e245]
            - button "Akzeptieren" [ref=e247]:
                - generic [ref=e248]: Akzeptieren
    - alert [ref=e249]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   |
  3   | test.describe('Tier 3: Form Submissions & State Management', () => {
  4   |
  5   |   test.beforeEach(async ({ page }) => {
  6   |     // Catch unhandled errors to ensure hydration safety and stability
  7   |     page.on('pageerror', (err) => {
  8   |       console.error('Unhandled Exception:', err.message);
  9   |     });
  10  |     page.on('console', (msg) => {
  11  |       if (msg.type() === 'error') {
  12  |         const text = msg.text();
  13  |         if (text.includes('Hydration failed') || text.includes('Text content did not match')) {
  14  |           console.error('Hydration Error:', text);
  15  |         }
  16  |       }
  17  |     });
  18  |   });
  19  |
  20  |   test.describe('Cart Management (Zustand)', () => {
  21  |     test('should add items, open cart drawer and interact', async ({ page }) => {
  22  |       await page.goto('/menu');
  23  |
  24  |       // Wait for at least one "Hinzufügen" button to be visible
  25  |       const addBtns = page.getByRole('button', { name: /Hinzufügen|\+/i });
  26  |       await expect(addBtns.first()).toBeVisible();
  27  |
  28  |       // Add first product to cart
  29  |       await addBtns.first().click();
  30  |
  31  |       // Open CartDrawer
  32  |       const cartButton = page.getByRole('button', { name: /Warenkorb/i });
  33  |       await cartButton.click();
  34  |
  35  |       // Verify drawer opens
  36  |       const cartDrawer = page.locator('[role="dialog"]').filter({ hasText: /Warenkorb/i }).first();
  37  |       await expect(cartDrawer).toBeVisible();
  38  |
  39  |       // Since it's opaque-box, let's just make sure "Zur Kasse" is visible in the drawer
  40  |       const checkoutBtn = page.getByRole('button', { name: /Zur Kasse/i });
  41  |       await expect(checkoutBtn).toBeVisible();
  42  |     });
  43  |   });
  44  |
  45  |   test.describe('User Authentication', () => {
  46  |     test('should show validation errors on empty submit', async ({ page }) => {
  47  |       await page.goto('/auth');
  48  |
  49  |       // Wait for form to appear
  50  |       await expect(page.getByRole('heading', { level: 1, name: /Willkommen zurück/i })).toBeVisible();
  51  |
  52  |       // Try to submit empty form
  53  |       const loginBtn = page.getByRole('button', { name: /Anmelden/i });
  54  |
  55  |       // Native validation will prevent form submission if required fields are empty
  56  |       // So we can just check if the inputs are required.
  57  |       const emailInput = page.getByLabel(/E-Mail/i);
  58  |       await expect(emailInput).toHaveAttribute('required', '');
  59  |       const passwordInput = page.getByLabel(/Passwort/i);
  60  |       await expect(passwordInput).toHaveAttribute('required', '');
  61  |     });
  62  |
  63  |     test('should allow user login attempt', async ({ page }) => {
  64  |       await page.goto('/auth');
  65  |
  66  |       const emailInput = page.getByLabel(/E-Mail/i);
  67  |       const passwordInput = page.getByLabel(/Passwort/i);
  68  |
  69  |       await emailInput.fill('test@example.com');
  70  |       await passwordInput.fill('password123');
  71  |
  72  |       const loginBtn = page.getByRole('button', { name: /Anmelden/i });
  73  |       await loginBtn.click();
  74  |
  75  |       // Given we use the dummy key in tests or emulator, it might show an error or load
  76  |       // Just ensure the loading state or error state appears without crashing
  77  |       const submitText = page.locator('text=Firebase Konfiguration fehlt').first();
  78  |       // Alternatively, the button disables
  79  |       await expect(loginBtn).toBeEnabled();
  80  |     });
  81  |   });
  82  |
  83  |   test.describe('Support Forms', () => {
  84  |     test('should fill out Kontakt form', async ({ page }) => {
  85  |       await page.goto('/support#kontakt');
  86  |
> 87  |       await page.getByLabel(/Dein Name/i).fill('Test User');
      |                                           ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  88  |       await page.getByLabel(/Deine E-Mail/i).fill('test@example.com');
  89  |       await page.getByLabel(/Nachricht/i).fill('Dies ist eine Testnachricht aus Playwright.');
  90  |
  91  |       const submitBtn = page.getByRole('button', { name: /Senden/i });
  92  |       await submitBtn.click();
  93  |
  94  |       // Check if button text changes to "Wird gesendet..." or success happens
  95  |       // (Assuming mock API or fast execution, just ensure it doesn't crash)
  96  |       await expect(submitBtn).toBeVisible();
  97  |     });
  98  |
  99  |     test('should interact with Reservierung page', async ({ page }) => {
  100 |       await page.goto('/reservierung');
  101 |
  102 |       // Check heading
  103 |       await expect(page.getByRole('heading', { level: 1, name: /Tisch reservieren/i })).toBeVisible();
  104 |
  105 |       // Click on a date
  106 |       const dateBtn = page.getByRole('button').filter({ hasText: 'Sa' }).first();
  107 |       await dateBtn.click();
  108 |
  109 |       // Click the final submit button
  110 |       const submitBtn = page.getByRole('button', { name: /Tisch reservieren/i });
  111 |       await expect(submitBtn).toBeVisible();
  112 |     });
  113 |   });
  114 |
  115 |   test.describe('Order Flow Fragments', () => {
  116 |     test('Order-Hub is accessible', async ({ page }) => {
  117 |       await page.goto('/order-hub');
  118 |       // The page should contain options like "Abholung" or "Lieferung"
  119 |       const btn = page.getByRole('button', { name: /Abholung/i }).first();
  120 |       await expect(btn).toBeVisible();
  121 |     });
  122 |
  123 |     test('Checkout page renders', async ({ page }) => {
  124 |       await page.goto('/checkout');
  125 |       const emailInput = page.getByLabel(/E-Mail/i).first();
  126 |       await expect(emailInput).toBeVisible();
  127 |
  128 |       const continueBtn = page.getByRole('button', { name: /Weiter/i });
  129 |       await expect(continueBtn).toBeVisible();
  130 |     });
  131 |
  132 |     test('Pickup-Time selection renders', async ({ page }) => {
  133 |       await page.goto('/pickup-time');
  134 |       const continueBtn = page.getByRole('button', { name: /Weiter/i });
  135 |       await expect(continueBtn).toBeVisible();
  136 |     });
  137 |
  138 |     test('Order-Review page renders', async ({ page }) => {
  139 |       await page.goto('/order-review');
  140 |       const submitOrderBtn = page.getByRole('button', { name: /bestellen/i });
  141 |       await expect(submitOrderBtn).toBeVisible();
  142 |       await expect(submitOrderBtn).toBeEnabled();
  143 |     });
  144 |
  145 |     test('Confirmation page renders', async ({ page }) => {
  146 |       await page.goto('/confirmation');
  147 |       await expect(page.getByText(/bestätigt|eingegangen/i).first()).toBeVisible();
  148 |     });
  149 |
  150 |     test('Order-Status page renders', async ({ page }) => {
  151 |       await page.goto('/order-status');
  152 |       await expect(page.getByRole('progressbar')).toBeVisible();
  153 |     });
  154 |   });
  155 | });
  156 |
```
