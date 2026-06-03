# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_forms_state.spec.ts >> Tier 3: Form Submissions & State Management >> Order Flow Fragments >> Pickup-Time selection renders
- Location: tests/e2e/tier3_forms_state.spec.ts:132:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /Weiter/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /Weiter/i })

```

```yaml
- link "Zum Hauptinhalt springen":
    - /url: "#main-content"
- status
- banner:
    - link "Hey Fedee! Startseite":
        - /url: /
        - img "Hey Fede! Logo"
    - navigation "Hauptnavigation":
        - link "Speisekarte":
            - /url: /menu
        - link "Über Uns":
            - /url: /about
        - link "Besuchen & Liefern":
            - /url: /visit
    - link "Jetzt bestellen":
        - /url: /menu
        - button "Jetzt bestellen"
    - link "Profil":
        - /url: /auth
    - button "Warenkorb"
- main:
    - button
    - text: Abholzeit Schritt 2 von 3 Ort Hey Fede! Wetzlar Langgasse 68, 35576 Wetzlar Geöffnet · bis 22:00 Welcher Tag?
    - button "Heute 3"
    - button "Morgen 4"
    - button "Fr 5"
    - button "Sa 6"
    - button "So 7"
    - text: Welche Uhrzeit?
    - button "12:00"
    - button "12:15"
    - button "12:30"
    - button "12:45"
    - button "13:00"
    - button "13:15"
    - button "13:30"
    - button "13:45"
    - button "14:00"
    - button "14:15"
    - button "14:30"
    - button "14:45"
    - button "15:00"
    - button "15:15"
    - button "15:30"
    - button "15:45"
    - button "16:00"
    - button "16:15"
    - button "16:30"
    - button "16:45"
    - button "17:00"
    - button "17:15"
    - button "17:30"
    - button "17:45"
    - button "18:00"
    - button "18:15"
    - button "18:30"
    - button "18:45"
    - button "19:00"
    - button "19:15"
    - button "19:30"
    - button "19:45"
    - button "20:00"
    - button "20:15"
    - button "20:30"
    - button "20:45"
    - button "21:00"
    - button "21:15"
    - button "21:30"
    - button "21:45"
    - button "22:00"
    - button "Bestellung prüfen"
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
- heading "Cookies für dich!" [level=3]
- paragraph: Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Website zu bieten. Manche sind essenziell, andere helfen uns, unseren Service zu verbessern. Bist du einverstanden?
- button "Ablehnen"
- button "Anpassen"
- button "Akzeptieren"
- alert
```

# Test source

```ts
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
> 135 |       await expect(continueBtn).toBeVisible();
      |                                 ^ Error: expect(locator).toBeVisible() failed
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
