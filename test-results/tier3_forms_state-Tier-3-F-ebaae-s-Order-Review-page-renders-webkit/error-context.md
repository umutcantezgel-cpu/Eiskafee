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
    - link "Zum Hauptinhalt springen" [ref=e2]:
        - /url: "#main-content"
    - status
    - banner [ref=e10]:
        - generic [ref=e11]:
            - link "Hey Fedee! Startseite" [ref=e13]:
                - /url: /
                - img "Hey Fede! Logo" [ref=e15] [cursor=pointer]
            - navigation "Hauptnavigation" [ref=e16]:
                - link "Speisekarte" [ref=e17]:
                    - /url: /menu
                - link "Über Uns" [ref=e18]:
                    - /url: /about
                - link "Besuchen & Liefern" [ref=e19]:
                    - /url: /visit
            - generic [ref=e20]:
                - link "Jetzt bestellen" [ref=e22]:
                    - /url: /menu
                    - button "Jetzt bestellen" [ref=e24]:
                        - generic [ref=e25]: Jetzt bestellen
                        - img [ref=e26]
                - link "Profil" [ref=e28]:
                    - /url: /auth
                    - img [ref=e30] [cursor=pointer]
                - button "Warenkorb" [ref=e33] [cursor=pointer]:
                    - img [ref=e34]
    - main [ref=e37]:
        - generic [ref=e38]:
            - generic [ref=e39]:
                - button [ref=e40]:
                    - img [ref=e41]
                - generic [ref=e43]:
                    - generic [ref=e44]: Übersicht
                    - generic [ref=e45]: Schritt 3 von 3
            - generic [ref=e51]:
                - generic [ref=e54]:
                    - generic [ref=e55]: Abholung
                    - generic [ref=e57]: Invalid Date ·
                    - generic [ref=e58]: Langgasse 68 · Wetzlar
                    - generic [ref=e59]: ·
                - generic [ref=e61]:
                    - generic [ref=e62]: Gutscheincode
                    - generic [ref=e64]:
                        - textbox "Code eingeben" [ref=e65]
                        - button "Einlösen" [disabled] [ref=e66]
                - generic [ref=e67]:
                    - generic [ref=e68]:
                        - generic [ref=e69]: Zwischensumme
                        - generic [ref=e70]: 0,00 €
                    - generic [ref=e71]:
                        - generic [ref=e72]: inkl. 7% MwSt.
                        - generic [ref=e73]: 0,00 €
                    - generic [ref=e75]:
                        - generic [ref=e76]: Vor Ort zahlen
                        - generic [ref=e77]: 0,00 €
            - generic [ref=e78]:
                - generic [ref=e79]: Mit „Bestellung absenden" akzeptierst du unsere AGB & Vorbestellbedingungen
                - button "Verbindlich vorbestellen" [disabled] [ref=e80]:
                    - generic [ref=e81]:
                        - img [ref=e82]
                        - text: Verbindlich vorbestellen
    - contentinfo [ref=e84]:
        - img [ref=e87]
        - generic [ref=e89]:
            - generic [ref=e90]:
                - generic [ref=e91]:
                    - link "Startseite" [ref=e92]:
                        - /url: /
                        - img "Hey Fede! Logo" [ref=e94] [cursor=pointer]
                    - paragraph [ref=e95]: Dessertbar & Café
                    - generic [ref=e98]:
                        - generic [ref=e99]:
                            - img [ref=e100]
                            - generic [ref=e103]:
                                - text: Langgasse 68
                                - text: 35576 Wetzlar
                        - generic [ref=e104]:
                            - img [ref=e105]
                            - link "06441 7890426" [ref=e107]:
                                - /url: tel:+4964417890426
                    - link "Instagram" [ref=e109]:
                        - /url: https://www.instagram.com/heyfede_wetzlar
                        - img [ref=e110]
                        - text: Instagram
                - generic [ref=e113]:
                    - heading "Hey Fede!" [level=3] [ref=e114]
                    - navigation "Footer Navigation" [ref=e115]:
                        - link "Startseite" [ref=e116]:
                            - /url: /
                            - text: Startseite
                        - link "Speisekarte" [ref=e117]:
                            - /url: /menu
                            - text: Speisekarte
                        - link "Über Uns" [ref=e118]:
                            - /url: /about
                            - text: Über Uns
                        - link "Besuchen & Liefern" [ref=e119]:
                            - /url: /visit
                            - text: Besuchen & Liefern
                    - heading "Entdecke Mehr" [level=3] [ref=e120]
                    - navigation "SEO Navigation" [ref=e121]:
                        - link "Bubble Waffles" [ref=e122]:
                            - /url: /bubble-waffles-wetzlar
                        - link "Lieferservice" [ref=e123]:
                            - /url: /lieferservice-desserts-lahn-dill
                        - link "Eisdiele & Shakes" [ref=e124]:
                            - /url: /eisdiele-wetzlar-special-shakes
                        - link "Event Catering" [ref=e125]:
                            - /url: /events-catering-hessen
                        - link "Vegane Desserts" [ref=e126]:
                            - /url: /vegane-desserts-wetzlar
                - generic [ref=e127]:
                    - heading "Öffnungszeiten" [level=3] [ref=e128]
                    - generic [ref=e131]:
                        - generic [ref=e132]:
                            - generic [ref=e134]: Montag
                            - generic [ref=e136]: Geschlossen
                        - generic [ref=e137]:
                            - generic [ref=e139]: Dienstag
                            - generic [ref=e141]: Geschlossen
                        - generic [ref=e142]:
                            - generic [ref=e145]: Mittwoch
                            - generic [ref=e146]:
                                - generic [ref=e147]: 12:00 – 19:00 Uhr
                                - generic [ref=e148]: Heute
                        - generic [ref=e149]:
                            - generic [ref=e151]: Donnerstag
                            - generic [ref=e153]: 12:00 – 19:00 Uhr
                        - generic [ref=e154]:
                            - generic [ref=e156]: Freitag
                            - generic [ref=e158]: 12:00 – 19:00 Uhr
                        - generic [ref=e159]:
                            - generic [ref=e161]: Samstag
                            - generic [ref=e163]: 12:00 – 19:00 Uhr
                        - generic [ref=e164]:
                            - generic [ref=e166]: Sonntag
                            - generic [ref=e168]: 13:00 – 19:00 Uhr
                    - generic [ref=e169]: ✓ Keine Liefergebühr bei Lieferando
                - generic [ref=e170]:
                    - heading "Stay Sweet" [level=3] [ref=e171]
                    - paragraph [ref=e172]: Abonniere unseren Newsletter für exklusive Angebote und neue Bubble Waffle Kreationen.
                    - generic [ref=e174]:
                        - textbox "Bleib hungrig..." [ref=e175]
                        - button "Abonnieren" [ref=e177]:
                            - generic [ref=e178]: Abonnieren
            - generic [ref=e179]:
                - generic [ref=e180]: Frisch
                - generic [ref=e181]: ·
                - generic [ref=e182]: Selbstgemacht
                - generic [ref=e183]: ·
                - generic [ref=e184]: Mit Liebe
            - generic [ref=e185]:
                - img [ref=e186]
                - img [ref=e188]
                - img [ref=e190]
                - img [ref=e192]
                - img [ref=e194]
            - generic [ref=e196]:
                - heading "Wir sind hier zuhause" [level=3] [ref=e197]
                - paragraph [ref=e198]:
                    - generic [ref=e199]: Hessen
                    - generic [ref=e200]: ›
                    - generic [ref=e201]: Lahn-Dill-Kreis
                    - generic [ref=e202]: ›
                    - generic [ref=e203]: Wetzlar
                    - generic [ref=e204]: ›
                    - generic [ref=e205]: Langgasse
            - generic [ref=e206]:
                - heading "Besuche uns auch auf" [level=3] [ref=e207]
                - generic [ref=e208]:
                    - link "G Google" [ref=e209]:
                        - /url: https://maps.google.com/?q=Langgasse+68+Wetzlar
                        - generic [ref=e210]: G
                        - text: Google
                    - link "● TripAdvisor" [ref=e211]:
                        - /url: https://www.tripadvisor.de/HeyFede-Wetzlar
                        - generic [ref=e212]: ●
                        - text: TripAdvisor
                    - link "yelp" [ref=e213]:
                        - /url: https://www.yelp.de/biz/hey-fede-wetzlar
                        - generic [ref=e214]: yelp
            - img "Made with Love in Wetzlar" [ref=e217]
            - generic [ref=e218]:
                - paragraph [ref=e219]: © 2026 Hey Fede! Dessertbar & Café
                - generic [ref=e220]:
                    - link "Impressum" [ref=e221]:
                        - /url: /legal#impressum
                    - link "Datenschutz" [ref=e222]:
                        - /url: /legal#datenschutz
                    - link "AGB" [ref=e223]:
                        - /url: /legal#agb
    - alert [ref=e224]
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
