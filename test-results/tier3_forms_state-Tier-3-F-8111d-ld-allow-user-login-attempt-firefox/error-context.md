# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_forms_state.spec.ts >> Tier 3: Form Submissions & State Management >> User Authentication >> should allow user login attempt
- Location: tests/e2e/tier3_forms_state.spec.ts:63:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByLabel(/E-Mail/i)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Zum Hauptinhalt springen" [ref=e2] [cursor=pointer]:
        - /url: "#main-content"
    - status
    - banner [ref=e4]:
        - generic [ref=e5]:
            - link "Hey Fedee! Startseite" [ref=e7] [cursor=pointer]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e9]
            - navigation "Hauptnavigation" [ref=e10]:
                - link "Speisekarte" [ref=e11] [cursor=pointer]:
                    - /url: /menu
                - link "Über Uns" [ref=e12] [cursor=pointer]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e13] [cursor=pointer]:
                    - /url: /visit
            - generic [ref=e14]:
                - link "Jetzt bestellen" [ref=e16] [cursor=pointer]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e18]:
                        - generic [ref=e19]: Jetzt bestellen
                        - img [ref=e20]
                - link "Profil" [ref=e22] [cursor=pointer]:
                    - /url: /auth
                    - img [ref=e24]
                - button "Warenkorb" [ref=e27] [cursor=pointer]:
                    - img [ref=e28]
    - main [ref=e32]:
        - generic [ref=e34]:
            - generic [ref=e35]:
                - link "Hey Fede!" [ref=e36] [cursor=pointer]:
                    - /url: /
                    - generic [ref=e37]: Hey Fede!
                - heading "Willkommen zurück" [level=1] [ref=e38]
                - paragraph [ref=e39]: Schön, dass du wieder da bist!
            - generic [ref=e40]:
                - generic [ref=e41]:
                    - generic [ref=e42]:
                        - generic [ref=e43]: E-Mail
                        - generic [ref=e44]:
                            - img [ref=e46]
                            - textbox "hallo@example.de" [ref=e49]
                    - generic [ref=e50]:
                        - generic [ref=e51]: Passwort
                        - generic [ref=e52]:
                            - img [ref=e54]
                            - textbox "••••••••" [ref=e57]
                        - link "Passwort vergessen?" [ref=e59] [cursor=pointer]:
                            - /url: /password-reset
                    - button "Anmelden" [ref=e61]
                - generic [ref=e62]:
                    - text: Noch kein Konto?
                    - button "Jetzt erstellen" [ref=e63] [cursor=pointer]
    - contentinfo [ref=e64]:
        - img [ref=e67]
        - generic [ref=e69]:
            - generic [ref=e70]:
                - generic [ref=e71]:
                    - link "Startseite" [ref=e72] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e74]
                    - paragraph [ref=e75]: Dessertbar & Café
                    - generic [ref=e78]:
                        - generic [ref=e79]:
                            - img [ref=e80]
                            - generic [ref=e83]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e84]:
                            - img [ref=e85]
                            - link "06441 7890426" [ref=e87] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e89] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e90]
                        - text: Instagram
                - generic [ref=e93]:
                    - heading "Hey Fede!" [level=3] [ref=e94]
                    - navigation "Footer Navigation" [ref=e95]:
                        - link "Startseite" [ref=e96] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e97] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e98] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e99] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e100]
                    - navigation "SEO Navigation" [ref=e101]:
                        - link "Bubble Waffles" [ref=e102] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e103] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e104] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e105] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e106] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e107]:
                    - heading "Öffnungszeiten" [level=3] [ref=e108]
                    - generic [ref=e111]:
                        - generic [ref=e112]:
                            - generic [ref=e114]: Montag
                            - generic [ref=e116]: Geschlossen
                        - generic [ref=e117]:
                            - generic [ref=e119]: Dienstag
                            - generic [ref=e121]: Geschlossen
                        - generic [ref=e122]:
                            - generic [ref=e125]: Mittwoch
                            - generic [ref=e126]:
                                - generic [ref=e127]: 12:00 – 19:00 Uhr
                                - generic [ref=e128]: Heute
                        - generic [ref=e129]:
                            - generic [ref=e131]: Donnerstag
                            - generic [ref=e133]: 12:00 – 19:00 Uhr
                        - generic [ref=e134]:
                            - generic [ref=e136]: Freitag
                            - generic [ref=e138]: 12:00 – 19:00 Uhr
                        - generic [ref=e139]:
                            - generic [ref=e141]: Samstag
                            - generic [ref=e143]: 12:00 – 19:00 Uhr
                        - generic [ref=e144]:
                            - generic [ref=e146]: Sonntag
                            - generic [ref=e148]: 13:00 – 19:00 Uhr
                    - generic [ref=e149]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e150]:
                    - heading "Stay Sweet" [level=3] [ref=e151]
                    - paragraph [ref=e152]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e154]:
                        - textbox "Bleib hungrig..." [ref=e155]
                        - button "Abonnieren" [ref=e157]:
                            - generic [ref=e158]: Abonnieren
            - generic [ref=e159]:
                - generic [ref=e160]: Frisch
                - generic [ref=e161]: ·
                - generic [ref=e162]: Selbstgemacht
                - generic [ref=e163]: ·
                - generic [ref=e164]: Mit Liebe
            - generic [ref=e165]:
                - img [ref=e166]
                - img [ref=e168]
                - img [ref=e170]
                - img [ref=e172]
                - img [ref=e174]
            - generic [ref=e176]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e177]
                - paragraph [ref=e178]:
                    - generic [ref=e179]: Hessen
                    - generic [ref=e180]: ›
                    - generic [ref=e181]: Lahn-Dill-Kreis
                    - generic [ref=e182]: ›
                    - generic [ref=e183]: Wetzlar
                    - generic [ref=e184]: ›
                    - generic [ref=e185]: Langgasse
            - generic [ref=e186]:
                - heading "Besuche uns auch auf" [level=3] [ref=e187]
                - generic [ref=e188]:
                    - link "G Google" [ref=e189] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e190]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e191] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e192]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e193] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e194]: yelp
            - img "Made with Love in Wetzlar" [ref=e197]
            - generic [ref=e198]:
                - paragraph [ref=e199]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e200]:
                    - link "Impressum" [ref=e201] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e202] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e203] [cursor=pointer]:
                        - /url: /legal#agb
    - generic [ref=e205]:
        - img [ref=e207]
        - generic [ref=e214]:
            - heading "Cookies für dich!" [level=3] [ref=e215]
            - paragraph [ref=e216]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e217]:
            - button "Ablehnen" [ref=e218]
            - button "Anpassen" [ref=e219]
            - button "Akzeptieren" [ref=e221]:
                - generic [ref=e222]: Akzeptieren
    - alert [ref=e223]
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
> 69  |       await emailInput.fill('test@example.com');
      |                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
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
  87  |       await page.getByLabel(/Dein Name/i).fill('Test User');
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
