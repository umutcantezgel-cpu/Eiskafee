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
    - main [ref=e31]:
        - generic [ref=e33]:
            - generic [ref=e34]:
                - link "Hey Fede!" [ref=e35] [cursor=pointer]:
                    - /url: /
                    - generic [ref=e36]: Hey Fede!
                - heading "Willkommen zurück" [level=1] [ref=e37]
                - paragraph [ref=e38]: Schön, dass du wieder da bist!
            - generic [ref=e39]:
                - generic [ref=e40]:
                    - generic [ref=e41]:
                        - generic [ref=e42]: E-Mail
                        - generic [ref=e43]:
                            - img [ref=e45]
                            - textbox "hallo@example.de" [ref=e48]
                    - generic [ref=e49]:
                        - generic [ref=e50]: Passwort
                        - generic [ref=e51]:
                            - img [ref=e53]
                            - textbox "••••••••" [ref=e56]
                        - link "Passwort vergessen?" [ref=e58] [cursor=pointer]:
                            - /url: /password-reset
                    - button "Anmelden" [ref=e60]
                - generic [ref=e61]:
                    - text: Noch kein Konto?
                    - button "Jetzt erstellen" [ref=e62] [cursor=pointer]
    - contentinfo [ref=e63]:
        - img [ref=e66]
        - generic [ref=e68]:
            - generic [ref=e69]:
                - generic [ref=e70]:
                    - link "Startseite" [ref=e71] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e73]
                    - paragraph [ref=e74]: Dessertbar & Café
                    - generic [ref=e77]:
                        - generic [ref=e78]:
                            - img [ref=e79]
                            - generic [ref=e82]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e83]:
                            - img [ref=e84]
                            - link "06441 7890426" [ref=e86] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e88] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e89]
                        - text: Instagram
                - generic [ref=e92]:
                    - heading "Hey Fede!" [level=3] [ref=e93]
                    - navigation "Footer Navigation" [ref=e94]:
                        - link "Startseite" [ref=e95] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e96] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e97] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e98] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e99]
                    - navigation "SEO Navigation" [ref=e100]:
                        - link "Bubble Waffles" [ref=e101] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e102] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e103] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e104] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e105] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e106]:
                    - heading "Öffnungszeiten" [level=3] [ref=e107]
                    - generic [ref=e110]:
                        - generic [ref=e111]:
                            - generic [ref=e113]: Montag
                            - generic [ref=e115]: Geschlossen
                        - generic [ref=e116]:
                            - generic [ref=e118]: Dienstag
                            - generic [ref=e120]: Geschlossen
                        - generic [ref=e121]:
                            - generic [ref=e124]: Mittwoch
                            - generic [ref=e125]:
                                - generic [ref=e126]: 12:00 – 19:00 Uhr
                                - generic [ref=e127]: Heute
                        - generic [ref=e128]:
                            - generic [ref=e130]: Donnerstag
                            - generic [ref=e132]: 12:00 – 19:00 Uhr
                        - generic [ref=e133]:
                            - generic [ref=e135]: Freitag
                            - generic [ref=e137]: 12:00 – 19:00 Uhr
                        - generic [ref=e138]:
                            - generic [ref=e140]: Samstag
                            - generic [ref=e142]: 12:00 – 19:00 Uhr
                        - generic [ref=e143]:
                            - generic [ref=e145]: Sonntag
                            - generic [ref=e147]: 13:00 – 19:00 Uhr
                    - generic [ref=e148]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e149]:
                    - heading "Stay Sweet" [level=3] [ref=e150]
                    - paragraph [ref=e151]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e153]:
                        - textbox "Bleib hungrig..." [ref=e154]
                        - button "Abonnieren" [ref=e156]:
                            - generic [ref=e157]: Abonnieren
            - generic [ref=e158]:
                - generic [ref=e159]: Frisch
                - generic [ref=e160]: ·
                - generic [ref=e161]: Selbstgemacht
                - generic [ref=e162]: ·
                - generic [ref=e163]: Mit Liebe
            - generic [ref=e164]:
                - img [ref=e165]
                - img [ref=e167]
                - img [ref=e169]
                - img [ref=e171]
                - img [ref=e173]
            - generic [ref=e175]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e176]
                - paragraph [ref=e177]:
                    - generic [ref=e178]: Hessen
                    - generic [ref=e179]: ›
                    - generic [ref=e180]: Lahn-Dill-Kreis
                    - generic [ref=e181]: ›
                    - generic [ref=e182]: Wetzlar
                    - generic [ref=e183]: ›
                    - generic [ref=e184]: Langgasse
            - generic [ref=e185]:
                - heading "Besuche uns auch auf" [level=3] [ref=e186]
                - generic [ref=e187]:
                    - link "G Google" [ref=e188] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e189]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e190] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e191]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e192] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e193]: yelp
            - img "Made with Love in Wetzlar" [ref=e196]
            - generic [ref=e197]:
                - paragraph [ref=e198]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e199]:
                    - link "Impressum" [ref=e200] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e201] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e202] [cursor=pointer]:
                        - /url: /legal#agb
    - generic [ref=e204]:
        - img [ref=e206]
        - generic [ref=e208]:
            - heading "Cookies für dich!" [level=3] [ref=e209]
            - paragraph [ref=e210]: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
        - generic [ref=e211]:
            - button "Ablehnen" [ref=e212]
            - button "Anpassen" [ref=e213]
            - button "Akzeptieren" [ref=e215]:
                - generic [ref=e216]: Akzeptieren
    - alert [ref=e217]
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
