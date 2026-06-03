# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tier3_forms_state.spec.ts >> Tier 3: Form Submissions & State Management >> Order Flow Fragments >> Order-Review page renders
- Location: tests/e2e/tier3_forms_state.spec.ts:138:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /bestellen/i })
Expected: visible
Error: strict mode violation: getByRole('button', { name: /bestellen/i }) resolved to 2 elements:
    1) <button tabindex="0" class="relative flex items-center justify-center gap-2 px-6 bg-terracotta text-cream font-bold rounded-full transition-all duration-300 hover:bg-[#C95039] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-terracotta/30 hover:[mask-image:url(#bitemark-right)] [mask-image:none] py-2.5 text-sm">…</button> aka getByRole('button', { name: 'Jetzt bestellen' })
    2) <button disabled tabindex="0" class="relative inline-flex items-center justify-center font-nunito font-extrabold text-white bg-[#b34832] border-none rounded-full overflow-visible px-[26px] py-[11px] text-[0.88rem] opacity-60 cursor-not-allowed w-full flex justify-center items-center gap-2">…</button> aka getByRole('button', { name: 'Verbindlich vorbestellen' })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /bestellen/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
    - link "Zum Hauptinhalt springen" [ref=e2] [cursor=pointer]:
        - /url: "#main-content"
    - status
    - generic:
        - generic:
            - heading "Hey Fede!" [level=1]
            - paragraph: Dessertbar & Café
        - img
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
        - generic [ref=e32]:
            - generic [ref=e33]:
                - button [ref=e34]:
                    - img [ref=e35]
                - generic [ref=e37]:
                    - generic [ref=e38]: Übersicht
                    - generic [ref=e39]: Schritt 3 von 3
            - generic [ref=e45]:
                - generic [ref=e48]:
                    - generic [ref=e49]: Abholung
                    - generic [ref=e51]: Invalid Date ·
                    - generic [ref=e52]: Langgasse 68 · Wetzlar
                    - generic [ref=e53]: ·
                - generic [ref=e55]:
                    - generic [ref=e56]: Gutscheincode
                    - generic [ref=e58]:
                        - textbox "Code eingeben" [ref=e59]
                        - button "Einlösen" [disabled] [ref=e60]
                - generic [ref=e61]:
                    - generic [ref=e62]:
                        - generic [ref=e63]: Zwischensumme
                        - generic [ref=e64]: 0,00 €
                    - generic [ref=e65]:
                        - generic [ref=e66]: inkl. 7% MwSt.
                        - generic [ref=e67]: 0,00 €
                    - generic [ref=e69]:
                        - generic [ref=e70]: Vor Ort zahlen
                        - generic [ref=e71]: 0,00 €
            - generic [ref=e72]:
                - generic [ref=e73]: Mit „Bestellung absenden" akzeptierst du unsere AGB & Vorbestellbedingungen
                - button "Verbindlich vorbestellen" [disabled] [ref=e74]:
                    - generic [ref=e75]:
                        - img [ref=e76]
                        - text: Verbindlich vorbestellen
    - contentinfo [ref=e78]:
        - img [ref=e81]
        - generic [ref=e83]:
            - generic [ref=e84]:
                - generic [ref=e85]:
                    - link "Startseite" [ref=e86] [cursor=pointer]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e88]
                    - paragraph [ref=e89]: Dessertbar & Café
                    - generic [ref=e92]:
                        - generic [ref=e93]:
                            - img [ref=e94]
                            - generic [ref=e97]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e98]:
                            - img [ref=e99]
                            - link "06441 7890426" [ref=e101] [cursor=pointer]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e103] [cursor=pointer]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e104]
                        - text: Instagram
                - generic [ref=e107]:
                    - heading "Hey Fede!" [level=3] [ref=e108]
                    - navigation "Footer Navigation" [ref=e109]:
                        - link "Startseite" [ref=e110] [cursor=pointer]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e111] [cursor=pointer]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e112] [cursor=pointer]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e113] [cursor=pointer]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e114]
                    - navigation "SEO Navigation" [ref=e115]:
                        - link "Bubble Waffles" [ref=e116] [cursor=pointer]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e117] [cursor=pointer]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e118] [cursor=pointer]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e119] [cursor=pointer]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e120] [cursor=pointer]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e121]:
                    - heading "Öffnungszeiten" [level=3] [ref=e122]
                    - generic [ref=e125]:
                        - generic [ref=e126]:
                            - generic [ref=e128]: Montag
                            - generic [ref=e130]: Geschlossen
                        - generic [ref=e131]:
                            - generic [ref=e133]: Dienstag
                            - generic [ref=e135]: Geschlossen
                        - generic [ref=e136]:
                            - generic [ref=e139]: Mittwoch
                            - generic [ref=e140]:
                                - generic [ref=e141]: 12:00 – 19:00 Uhr
                                - generic [ref=e142]: Heute
                        - generic [ref=e143]:
                            - generic [ref=e145]: Donnerstag
                            - generic [ref=e147]: 12:00 – 19:00 Uhr
                        - generic [ref=e148]:
                            - generic [ref=e150]: Freitag
                            - generic [ref=e152]: 12:00 – 19:00 Uhr
                        - generic [ref=e153]:
                            - generic [ref=e155]: Samstag
                            - generic [ref=e157]: 12:00 – 19:00 Uhr
                        - generic [ref=e158]:
                            - generic [ref=e160]: Sonntag
                            - generic [ref=e162]: 13:00 – 19:00 Uhr
                    - generic [ref=e163]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e164]:
                    - heading "Stay Sweet" [level=3] [ref=e165]
                    - paragraph [ref=e166]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e168]:
                        - textbox "Bleib hungrig..." [ref=e169]
                        - button "Abonnieren" [ref=e171]:
                            - generic [ref=e172]: Abonnieren
            - generic [ref=e173]:
                - generic [ref=e174]: Frisch
                - generic [ref=e175]: ·
                - generic [ref=e176]: Selbstgemacht
                - generic [ref=e177]: ·
                - generic [ref=e178]: Mit Liebe
            - generic [ref=e179]:
                - img [ref=e180]
                - img [ref=e182]
                - img [ref=e184]
                - img [ref=e186]
                - img [ref=e188]
            - generic [ref=e190]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e191]
                - paragraph [ref=e192]:
                    - generic [ref=e193]: Hessen
                    - generic [ref=e194]: ›
                    - generic [ref=e195]: Lahn-Dill-Kreis
                    - generic [ref=e196]: ›
                    - generic [ref=e197]: Wetzlar
                    - generic [ref=e198]: ›
                    - generic [ref=e199]: Langgasse
            - generic [ref=e200]:
                - heading "Besuche uns auch auf" [level=3] [ref=e201]
                - generic [ref=e202]:
                    - link "G Google" [ref=e203] [cursor=pointer]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e204]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e205] [cursor=pointer]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e206]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e207] [cursor=pointer]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e208]: yelp
            - img "Made with Love in Wetzlar" [ref=e211]
            - generic [ref=e212]:
                - paragraph [ref=e213]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e214]:
                    - link "Impressum" [ref=e215] [cursor=pointer]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e216] [cursor=pointer]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e217] [cursor=pointer]:
                        - /url: /legal#agb
    - alert [ref=e218]
```

# Test source

```ts
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
  135 |       await expect(continueBtn).toBeVisible();
  136 |     });
  137 |
  138 |     test('Order-Review page renders', async ({ page }) => {
  139 |       await page.goto('/order-review');
  140 |       const submitOrderBtn = page.getByRole('button', { name: /bestellen/i });
> 141 |       await expect(submitOrderBtn).toBeVisible();
      |                                    ^ Error: expect(locator).toBeVisible() failed
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
