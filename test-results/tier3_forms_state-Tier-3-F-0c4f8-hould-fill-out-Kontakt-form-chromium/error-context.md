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
    - main [ref=e33]:
        - generic [ref=e34]:
            - generic [ref=e35]:
                - heading "Wie können wir helfen?" [level=1] [ref=e36]:
                    - generic [ref=e37]: Wie
                    - generic [ref=e38]: können
                    - generic [ref=e39]: wir
                    - generic [ref=e40]: helfen?
                - paragraph [ref=e41]: Scroll weiter, um Antworten zu finden oder schreib uns.
                - img [ref=e43]
            - generic [ref=e45]:
                - generic [ref=e46]:
                    - generic [ref=e47]: Fragen
                    - generic [ref=e48]: blubbern
                    - generic [ref=e49]: auf.
                - generic [ref=e50]:
                    - generic [ref=e52] [cursor=pointer]: Liefert ihr?
                    - generic [ref=e54] [cursor=pointer]: Was ist in der Box?
                    - generic [ref=e56] [cursor=pointer]: Vegan?
                    - generic [ref=e58] [cursor=pointer]: Reservieren?
            - generic [ref=e59]:
                - generic [ref=e60]:
                    - generic [ref=e61]: Nichts
                    - generic [ref=e62]: gefunden?
                - generic [ref=e63]:
                    - generic [ref=e65]:
                        - heading "Schreib uns" [level=2] [ref=e66]
                        - generic [ref=e67]:
                            - generic [ref=e68]: Dein Name
                            - textbox "Dein Name" [ref=e69]
                        - generic [ref=e70]:
                            - generic [ref=e71]: Deine E-Mail
                            - textbox "mail@beispiel.de" [ref=e72]
                        - generic [ref=e73]:
                            - generic [ref=e74]: Nachricht
                            - textbox "Was liegt dir auf dem Herzen?" [ref=e75]
                        - button "Senden" [ref=e76]:
                            - text: Senden
                            - img [ref=e77]
                    - generic [ref=e81]:
                        - img [ref=e83]
                        - heading "Direkt Texten?" [level=3] [ref=e85]
                        - paragraph [ref=e86]: Schreib uns einfach auf WhatsApp. Wir antworten superschnell.
                        - link "WhatsApp Chat Starten" [ref=e87] [cursor=pointer]:
                            - /url: https://wa.me/49123456789
    - contentinfo [ref=e88]:
        - img [ref=e91]
        - generic [ref=e93]:
            - generic [ref=e94]:
                - generic [ref=e95]:
                    - link "Startseite" [ref=e96] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e98]
                    - paragraph [ref=e99]: Dessertbar & Café
                    - generic [ref=e102]:
                        - generic [ref=e103]:
                            - img [ref=e104]
                            - generic [ref=e107]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e108]:
                            - img [ref=e109]
                            - link "06441 7890426" [ref=e111] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e113] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e114]
                        - text: Instagram
                - generic [ref=e117]:
                    - heading "Hey Fede!" [level=3] [ref=e118]
                    - navigation "Footer Navigation" [ref=e119]:
                        - link "Startseite" [ref=e120] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e121] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e122] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e123] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e124]
                    - navigation "SEO Navigation" [ref=e125]:
                        - link "Bubble Waffles" [ref=e126] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e127] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e128] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e129] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e130] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e131]:
                    - heading "Öffnungszeiten" [level=3] [ref=e132]
                    - generic [ref=e135]:
                        - generic [ref=e136]:
                            - generic [ref=e138]: Montag
                            - generic [ref=e140]: Geschlossen
                        - generic [ref=e141]:
                            - generic [ref=e143]: Dienstag
                            - generic [ref=e145]: Geschlossen
                        - generic [ref=e146]:
                            - generic [ref=e149]: Mittwoch
                            - generic [ref=e150]:
                                - generic [ref=e151]: 12:00 – 19:00 Uhr
                                - generic [ref=e152]: Heute
                        - generic [ref=e153]:
                            - generic [ref=e155]: Donnerstag
                            - generic [ref=e157]: 12:00 – 19:00 Uhr
                        - generic [ref=e158]:
                            - generic [ref=e160]: Freitag
                            - generic [ref=e162]: 12:00 – 19:00 Uhr
                        - generic [ref=e163]:
                            - generic [ref=e165]: Samstag
                            - generic [ref=e167]: 12:00 – 19:00 Uhr
                        - generic [ref=e168]:
                            - generic [ref=e170]: Sonntag
                            - generic [ref=e172]: 13:00 – 19:00 Uhr
                    - generic [ref=e173]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e174]:
                    - heading "Stay Sweet" [level=3] [ref=e175]
                    - paragraph [ref=e176]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e178]:
                        - textbox "Bleib hungrig..." [ref=e179]
                        - button "Abonnieren" [ref=e181]:
                            - generic [ref=e182]: Abonnieren
            - generic [ref=e183]:
                - generic [ref=e184]: Frisch
                - generic [ref=e185]: ·
                - generic [ref=e186]: Selbstgemacht
                - generic [ref=e187]: ·
                - generic [ref=e188]: Mit Liebe
            - generic [ref=e189]:
                - img [ref=e190]
                - img [ref=e192]
                - img [ref=e194]
                - img [ref=e196]
                - img [ref=e198]
            - generic [ref=e200]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e201]
                - paragraph [ref=e202]:
                    - generic [ref=e203]: Hessen
                    - generic [ref=e204]: ›
                    - generic [ref=e205]: Lahn-Dill-Kreis
                    - generic [ref=e206]: ›
                    - generic [ref=e207]: Wetzlar
                    - generic [ref=e208]: ›
                    - generic [ref=e209]: Langgasse
            - generic [ref=e210]:
                - heading "Besuche uns auch auf" [level=3] [ref=e211]
                - generic [ref=e212]:
                    - link "G Google" [ref=e213] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e214]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e215] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e216]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e217] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e218]: yelp
            - img "Made with Love in Wetzlar" [ref=e221]
            - generic [ref=e222]:
                - paragraph [ref=e223]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e224]:
                    - link "Impressum" [ref=e225] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e226] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e227] [cursor=pointer]:
                        - /url: /legal#agb
    - generic [ref=e229]:
        - img [ref=e231]
        - generic [ref=e233]:
            - heading "Cookies für dich!" [level=3] [ref=e234]
            - paragraph [ref=e235]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e236]:
            - button "Ablehnen" [ref=e237]
            - button "Anpassen" [ref=e238]
            - button "Akzeptieren" [ref=e240]:
                - generic [ref=e241]: Akzeptieren
    - alert [ref=e242]
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
