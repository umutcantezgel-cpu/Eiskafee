# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: syrup-cursor.spec.ts >> SyrupCursor >> Native Cursor Hidden: Verify that the <body> or main container has cursor: none applied
- Location: tests/e2e/syrup-cursor.spec.ts:20:7

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - navigation "Hauptnavigation" [ref=e5]:
      - link "Coday – Zur Startseite" [ref=e6] [cursor=pointer]:
        - /url: /en
        - img [ref=e7]
        - generic [ref=e8]: Coday
        - generic [ref=e9]: – Zur Startseite
      - generic [ref=e11]:
        - button "EN – Auf Deutsch wechseln" [ref=e12]:
          - img [ref=e14]
          - generic [ref=e16]: EN
        - button "Open Menu" [ref=e17]
  - status [ref=e22]
  - main [ref=e24]:
    - main [ref=e25]:
      - generic [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img [ref=e31]
            - text: "Grand Opening Special: 25% Off"
          - heading "Your Enterprise Performance Agency." [level=1] [ref=e33]:
            - text: Your Enterprise
            - generic [ref=e35]: Performance Agency.
          - paragraph [ref=e36]: "We engineer custom, lightning-fast enterprise websites using Next.js and React – completely free of WordPress templates. As your premier web design agency, we combine high-end development with data-driven SEO. The result: minimal load times, superior user experience, and measurable revenue growth for your business."
          - generic [ref=e39]: Enterprise-Grade Performance.
          - generic [ref=e40]:
            - link "Initiate Project" [ref=e41] [cursor=pointer]:
              - /url: /en/contact
              - generic [ref=e42]:
                - text: Initiate Project
                - img [ref=e43]
            - link "Contact Us" [ref=e45] [cursor=pointer]:
              - /url: /en/work
              - generic [ref=e46]: Contact Us
        - generic [ref=e47]:
          - img [ref=e49]
          - img [ref=e52]
      - generic [ref=e56]:
        - paragraph [ref=e57]: Trusted by leading companies
        - region "Partner logos" [ref=e58]:
          - generic [ref=e59]:
            - list [ref=e60]:
              - listitem [ref=e61]:
                - generic [ref=e63]:
                  - img [ref=e64]
                  - generic [ref=e67]: MS Schlüsseldienst Wetzlar
              - listitem [ref=e68]:
                - generic [ref=e70]:
                  - img [ref=e71]
                  - generic [ref=e74]: Lindener Ratsstuben
              - listitem [ref=e75]:
                - generic [ref=e77]:
                  - img [ref=e78]
                  - generic [ref=e81]: Sanitär Batherm
            - list [ref=e82]:
              - listitem [ref=e83]:
                - generic [ref=e85]:
                  - img [ref=e86]
                  - generic [ref=e89]: MS Schlüsseldienst Wetzlar
              - listitem [ref=e90]:
                - generic [ref=e92]:
                  - img [ref=e93]
                  - generic [ref=e96]: Lindener Ratsstuben
              - listitem [ref=e97]:
                - generic [ref=e99]:
                  - img [ref=e100]
                  - generic [ref=e103]: Sanitär Batherm
      - generic [ref=e108]:
        - generic [ref=e109]:
          - generic [ref=e110]: Seconds
          - generic [ref=e111]: 0.5 Seconds Ø Load Time
          - generic [ref=e112]: Ø Load Time
        - generic [ref=e113]:
          - generic [ref=e114]: Percent
          - generic [ref=e115]: 100 Percent Code Ownership
          - generic [ref=e116]: Code Ownership
        - generic [ref=e117]:
          - generic [ref=e118]: Hours
          - generic [ref=e119]: 24 Hours Availability
          - generic [ref=e120]: Availability
        - generic [ref=e121]:
          - generic [ref=e122]: Profit
          - generic [ref=e123]: Focused
      - generic [ref=e126]:
        - generic [ref=e127]:
          - heading "Traditional vs. Coday" [level=2] [ref=e128]
          - paragraph [ref=e129]: Stop paying for inefficiency. Choose the agency that delivers results.
        - table [ref=e131]:
          - rowgroup [ref=e132]:
            - row "Metric Traditional Agency Coday" [ref=e133]:
              - columnheader "Metric" [ref=e134]
              - columnheader "Traditional Agency" [ref=e135]
              - columnheader "Coday" [ref=e136]:
                - generic [ref=e137]: Coday
          - rowgroup [ref=e138]:
            - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e139]:
              - rowheader "Speed" [ref=e140]
              - cell "Weeks or Months (Bloated)" [ref=e141]:
                - img [ref=e142]
                - text: Weeks or Months (Bloated)
              - cell "Days or Weeks (The Coday Protocol)" [ref=e144]:
                - generic [ref=e145]:
                  - img [ref=e146]
                  - text: Days or Weeks (The Coday Protocol)
            - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e148]:
              - rowheader "Pricing Model" [ref=e149]
              - cell "Hourly Rates & Hidden Costs" [ref=e150]:
                - img [ref=e151]
                - text: Hourly Rates & Hidden Costs
              - cell "Flat Rate & Transparent" [ref=e153]:
                - generic [ref=e154]:
                  - img [ref=e155]
                  - text: Flat Rate & Transparent
            - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e157]:
              - rowheader "Technology" [ref=e158]
              - cell "WordPress / Builders (Slow)" [ref=e159]:
                - img [ref=e160]
                - text: WordPress / Builders (Slow)
              - cell "Next.js / React (Instant)" [ref=e162]:
                - generic [ref=e163]:
                  - img [ref=e164]
                  - text: Next.js / React (Instant)
            - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e166]:
              - rowheader "Rights" [ref=e167]
              - cell "Vendor Lock-in" [ref=e168]:
                - img [ref=e169]
                - text: Vendor Lock-in
              - cell "100% Code Ownership" [ref=e171]:
                - generic [ref=e172]:
                  - img [ref=e173]
                  - text: 100% Code Ownership
            - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e175]:
              - rowheader "Contact" [ref=e176]
              - cell "Account Manager (Middleman)" [ref=e177]:
                - img [ref=e178]
                - text: Account Manager (Middleman)
              - cell "Direct Developer Access" [ref=e180]:
                - generic [ref=e181]:
                  - img [ref=e182]
                  - text: Direct Developer Access
      - generic [ref=e187]:
        - generic [ref=e188]:
          - heading "Traditional Agencies Are History." [level=2] [ref=e189]:
            - generic [ref=e190]:
              - generic [ref=e191]: Traditional
              - generic [ref=e192]: Agencies
            - text: Are History.
          - generic [ref=e193]:
            - paragraph [ref=e194]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
            - paragraph [ref=e195]:
              - strong [ref=e196]: Coday is the new Standard.
              - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
        - generic [ref=e199]:
          - generic [ref=e201]: Loading...
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e203]
      - generic [ref=e206]:
        - generic [ref=e207]:
          - generic [ref=e208]: Our Services
          - heading "We offer Premium Services." [level=2] [ref=e209]:
            - generic [ref=e210]:
              - generic [ref=e211]: We
              - generic [ref=e212]: offer
            - generic [ref=e213]: Premium Services.
        - generic [ref=e215]:
          - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e218] [cursor=pointer]:
            - /url: /en/services/web-development
            - generic [ref=e220]:
              - img [ref=e223]
              - heading "Web Development" [level=3] [ref=e226]
              - paragraph [ref=e227]: High-performance websites and applications built with modern frameworks.
            - generic [ref=e228]:
              - text: Learn more
              - img [ref=e230]
          - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e234] [cursor=pointer]:
            - /url: /en/services/web-design
            - generic [ref=e236]:
              - img [ref=e239]
              - heading "UX/UI Design" [level=3] [ref=e242]
              - paragraph [ref=e243]: Conversion-optimized, user-centric designs for maximum performance.
            - generic [ref=e244]:
              - text: Learn more
              - img [ref=e246]
          - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e250] [cursor=pointer]:
            - /url: /en/services/seo
            - generic [ref=e252]:
              - img [ref=e255]
              - heading "Digital Growth" [level=3] [ref=e258]
              - paragraph [ref=e259]: Data-driven SEO and performance strategies to scale your enterprise.
            - generic [ref=e260]:
              - text: Learn more
              - img [ref=e262]
      - generic [ref=e266]:
        - generic [ref=e267]:
          - generic [ref=e268]:
            - paragraph [ref=e269]: Proven Results
            - heading "Our work speaks for itself." [level=2] [ref=e270]
            - paragraph [ref=e271]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
          - link "All Case Studies" [ref=e273] [cursor=pointer]:
            - /url: /en/work
            - text: All Case Studies
            - img [ref=e274]
        - link [ref=e278] [cursor=pointer]:
          - /url: /en/work/batherm
          - article [ref=e279]:
            - generic [ref=e281]:
              - generic [ref=e283]: Loading...
              - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e285]'
            - generic [ref=e287]:
              - generic [ref=e288]:
                - generic [ref=e289]: Web Development & Lead Gen
                - generic [ref=e290]: HVAC & Sanitary
                - generic [ref=e291]: Next.js, Tailwind
              - generic [ref=e292]:
                - text: Batherm
                - heading "Batherm" [level=3] [ref=e293]
                - generic [ref=e294]:
                  - text: Case Study ansehen
                  - img [ref=e295]
      - generic [ref=e299]:
        - heading "Tailored solutions for Your Industry." [level=2] [ref=e300]:
          - generic [ref=e301]:
            - generic [ref=e302]: Tailored
            - generic [ref=e303]: solutions
            - generic [ref=e304]: for
          - text: Your Industry.
        - generic [ref=e305]:
          - link "Craft & Construction Digital recruiting and project showcases." [ref=e307] [cursor=pointer]:
            - /url: /en/services/industries/handwerk-bau
            - generic [ref=e308]:
              - img [ref=e311]
              - heading "Craft & Construction" [level=3] [ref=e313]
              - paragraph [ref=e314]: Digital recruiting and project showcases.
          - link "Real Estate High-quality exposé presentations and lead generation." [ref=e316] [cursor=pointer]:
            - /url: /en/services/industries/immobilien-makler
            - generic [ref=e317]:
              - img [ref=e320]
              - heading "Real Estate" [level=3] [ref=e322]
              - paragraph [ref=e323]: High-quality exposé presentations and lead generation.
          - link "Online Shop High-converting shop systems." [ref=e325] [cursor=pointer]:
            - /url: /en/services/industries/ecommerce-retail
            - generic [ref=e326]:
              - img [ref=e329]
              - heading "Online Shop" [level=3] [ref=e331]
              - paragraph [ref=e332]: High-converting shop systems.
          - link "Consulting Premium brand positioning." [ref=e334] [cursor=pointer]:
            - /url: /en/services/industries/unternehmensberatung
            - generic [ref=e335]:
              - img [ref=e338]
              - heading "Consulting" [level=3] [ref=e340]
              - paragraph [ref=e341]: Premium brand positioning.
          - link "Health Trustworthy web presence." [ref=e343] [cursor=pointer]:
            - /url: /en/services/industries/aerzte-gesundheit
            - generic [ref=e344]:
              - img [ref=e347]
              - heading "Health" [level=3] [ref=e349]
              - paragraph [ref=e350]: Trustworthy web presence.
      - region "High-End Architektur für kompromisslose Performance" [ref=e351]:
        - generic [ref=e352]:
          - generic [ref=e353]:
            - generic [ref=e354]: Core Tech Stack
            - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e355]
          - region "Partner logos" [ref=e356]:
            - generic [ref=e357]:
              - list [ref=e358]:
                - listitem [ref=e359]:
                  - generic [ref=e361]: React 19
                - listitem [ref=e362]:
                  - generic [ref=e364]: Next.js 15
                - listitem [ref=e365]:
                  - generic [ref=e367]: TypeScript
                - listitem [ref=e368]:
                  - generic [ref=e370]: Tailwind v4
                - listitem [ref=e371]:
                  - generic [ref=e373]: Sanity CMS
                - listitem [ref=e374]:
                  - generic [ref=e376]: Supabase
                - listitem [ref=e377]:
                  - generic [ref=e379]: Vercel
              - list [ref=e380]:
                - listitem [ref=e381]:
                  - generic [ref=e383]: React 19
                - listitem [ref=e384]:
                  - generic [ref=e386]: Next.js 15
                - listitem [ref=e387]:
                  - generic [ref=e389]: TypeScript
                - listitem [ref=e390]:
                  - generic [ref=e392]: Tailwind v4
                - listitem [ref=e393]:
                  - generic [ref=e395]: Sanity CMS
                - listitem [ref=e396]:
                  - generic [ref=e398]: Supabase
                - listitem [ref=e399]:
                  - generic [ref=e401]: Vercel
      - generic [ref=e403]:
        - generic [ref=e404]:
          - heading "Clients who Trust Us." [level=2] [ref=e405]:
            - generic [ref=e406]:
              - generic [ref=e407]: Clients
              - generic [ref=e408]: who
            - text: Trust Us.
          - paragraph [ref=e409]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
        - generic [ref=e410]:
          - generic [ref=e412]:
            - img [ref=e416]
            - 'generic "Bewertung: 5 von 5 Sternen" [ref=e418]':
              - img [ref=e420]
              - img [ref=e423]
              - img [ref=e426]
              - img [ref=e429]
              - img [ref=e432]
            - blockquote [ref=e434]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
            - generic [ref=e435]:
              - generic [ref=e436]: M
              - generic [ref=e437]:
                - generic [ref=e439]: Michael Weber
                - generic [ref=e440]: Managing Director•TechVision GmbH
          - generic [ref=e442]:
            - img [ref=e446]
            - 'generic "Bewertung: 5 von 5 Sternen" [ref=e448]':
              - img [ref=e450]
              - img [ref=e453]
              - img [ref=e456]
              - img [ref=e459]
              - img [ref=e462]
            - blockquote [ref=e464]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
            - generic [ref=e465]:
              - generic [ref=e466]: S
              - generic [ref=e467]:
                - generic [ref=e469]: Sarah Müller
                - generic [ref=e470]: CMO•Digital pioneers
          - generic [ref=e472]:
            - img [ref=e476]
            - 'generic "Bewertung: 5 von 5 Sternen" [ref=e478]':
              - img [ref=e480]
              - img [ref=e483]
              - img [ref=e486]
              - img [ref=e489]
              - img [ref=e492]
            - blockquote [ref=e494]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
            - generic [ref=e495]:
              - generic [ref=e496]: J
              - generic [ref=e497]:
                - generic [ref=e499]: Jan Schmidt
                - generic [ref=e500]: Head of E-Commerce•RetailGroup DACH
        - generic [ref=e501]:
          - generic [ref=e502]:
            - generic [ref=e503]: S
            - generic [ref=e504]: M
            - generic [ref=e505]: J
            - generic [ref=e506]: P
          - generic [ref=e507]:
            - text: 5.0 Star Rating
            - text: Excellence as Standard.
  - contentinfo [ref=e509]:
    - generic [ref=e510]:
      - generic [ref=e511]:
        - paragraph [ref=e512]: Trusted by innovative companies
        - region "Partner logos" [ref=e514]:
          - generic [ref=e515]:
            - list [ref=e516]:
              - listitem [ref=e517]:
                - generic [ref=e519]:
                  - img [ref=e520]
                  - generic [ref=e523]: MS Schlüsseldienst Wetzlar
              - listitem [ref=e524]:
                - generic [ref=e526]:
                  - img [ref=e527]
                  - generic [ref=e530]: Lindener Ratsstuben
              - listitem [ref=e531]:
                - generic [ref=e533]:
                  - img [ref=e534]
                  - generic [ref=e537]: Sanitär Batherm
            - list [ref=e538]:
              - listitem [ref=e539]:
                - generic [ref=e541]:
                  - img [ref=e542]
                  - generic [ref=e545]: MS Schlüsseldienst Wetzlar
              - listitem [ref=e546]:
                - generic [ref=e548]:
                  - img [ref=e549]
                  - generic [ref=e552]: Lindener Ratsstuben
              - listitem [ref=e553]:
                - generic [ref=e555]:
                  - img [ref=e556]
                  - generic [ref=e559]: Sanitär Batherm
      - generic [ref=e560]:
        - generic [ref=e561]:
          - generic [ref=e562]:
            - generic:
              - generic [ref=e563]: Loading...
              - generic:
                - img "Coday"
          - paragraph [ref=e564]: We kill inefficiency. The last agency you'll ever need.
          - generic [ref=e565]:
            - generic [ref=e567]:
              - generic [ref=e569]: Loading...
              - img "Partnerschaft" [ref=e571]
            - generic [ref=e572]:
              - generic [ref=e573]: Resistance Member
              - generic [ref=e574]: Fight against the fluff.
        - navigation "Navigation" [ref=e575]:
          - heading "Navigation" [level=3] [ref=e576]
          - list [ref=e577]:
            - listitem [ref=e578]:
              - link "Home" [ref=e579] [cursor=pointer]:
                - /url: /en
            - listitem [ref=e580]:
              - link "Portfolio" [ref=e581] [cursor=pointer]:
                - /url: /en/work
            - listitem [ref=e582]:
              - link "About Us" [ref=e583] [cursor=pointer]:
                - /url: /en/about
            - listitem [ref=e584]:
              - link "Process" [ref=e585] [cursor=pointer]:
                - /url: /en/process
            - listitem [ref=e586]:
              - link "Pricing" [ref=e587] [cursor=pointer]:
                - /url: /en/pricing
            - listitem [ref=e588]:
              - link "common.nav.main.partnerschaft" [ref=e589] [cursor=pointer]:
                - /url: /en/partnerschaft
            - listitem [ref=e590]:
              - link "Price Calculator" [ref=e591] [cursor=pointer]:
                - /url: /en/calculator
            - listitem [ref=e592]:
              - link "Career" [ref=e593] [cursor=pointer]:
                - /url: /en/career
        - navigation "Services" [ref=e594]:
          - heading "Services" [level=3] [ref=e595]
          - list [ref=e596]:
            - listitem [ref=e597]:
              - link "Web Development" [ref=e598] [cursor=pointer]:
                - /url: /en/services/web-development
            - listitem [ref=e599]:
              - link "UI/UX Design" [ref=e600] [cursor=pointer]:
                - /url: /en/services/ui-ux-design
            - listitem [ref=e601]:
              - link "SEO & Traffic" [ref=e602] [cursor=pointer]:
                - /url: /en/services/seo
            - listitem [ref=e603]:
              - link "E-Commerce" [ref=e604] [cursor=pointer]:
                - /url: /en/services/ecommerce
            - listitem [ref=e605]:
              - link "API Integrations" [ref=e606] [cursor=pointer]:
                - /url: /en/services/web-development/api-integrations
            - listitem [ref=e607]:
              - link "common.nav.services.fullstack.label" [ref=e608] [cursor=pointer]:
                - /url: /en/services/web-development/full-stack-entwicklung
            - listitem [ref=e609]:
              - link "Public Sector" [ref=e610] [cursor=pointer]:
                - /url: /en/oeffentliche-auftraege
            - listitem [ref=e611]:
              - link "common.nav.industries.tech" [ref=e612] [cursor=pointer]:
                - /url: /en/services/industries/startups-tech
        - navigation "common.footer.sections.regional" [ref=e613]:
          - heading "common.footer.sections.regional" [level=3] [ref=e614]
          - list [ref=e615]:
            - listitem [ref=e616]:
              - link "Webdesign Hessen" [ref=e617] [cursor=pointer]:
                - /url: /en/standorte/hessen
            - listitem [ref=e618]:
              - link "Webagentur Wetzlar" [ref=e619] [cursor=pointer]:
                - /url: /en/standorte/wetzlar
            - listitem [ref=e620]:
              - link "Praxis-Website Wetzlar" [ref=e621] [cursor=pointer]:
                - /url: /en/branchen/arzt/wetzlar
            - listitem [ref=e622]:
              - link "Praxis-Website Gießen" [ref=e623] [cursor=pointer]:
                - /url: /en/branchen/arzt/giessen
            - listitem [ref=e624]:
              - link "Handwerker Wetzlar" [ref=e625] [cursor=pointer]:
                - /url: /en/branchen/handwerker/wetzlar
        - generic [ref=e626]:
          - heading "Contact" [level=3] [ref=e627]
          - list [ref=e628]:
            - listitem [ref=e629]:
              - link "umut@codayweb.de" [ref=e630] [cursor=pointer]:
                - /url: mailto:umut@codayweb.de
            - listitem [ref=e631]:
              - link "+49 176 41195301" [ref=e632] [cursor=pointer]:
                - /url: tel:+4917641195301
            - listitem [ref=e633]:
              - text: Coday
              - text: Wetzlar, Deutschland
              - text: (Remote weltweit)
          - link "Start Project" [ref=e634] [cursor=pointer]:
            - /url: /en/contact
      - generic "Vertrauenssiegel und Zertifikate" [ref=e636]:
        - generic [ref=e637]:
          - generic [ref=e639]:
            - img [ref=e642]
            - generic [ref=e644]: DSGVO Konform
            - generic [ref=e645]: 100% Datenschutz-konform
          - generic [ref=e647]:
            - img [ref=e650]
            - generic [ref=e652]: Vercel Edge Network
            - generic [ref=e653]: Global verteilt für maximale Geschwindigkeit
      - generic [ref=e654]:
        - navigation "Soziale Medien" [ref=e655]:
          - link "Visit us on Facebook" [ref=e656] [cursor=pointer]:
            - /url: /contact
            - img [ref=e658]
          - link "Visit us on Instagram" [ref=e660] [cursor=pointer]:
            - /url: /contact
            - img [ref=e662]
          - link "Visit us on Twitter" [ref=e664] [cursor=pointer]:
            - /url: /contact
            - img [ref=e666]
          - link "Visit us on LinkedIn" [ref=e668] [cursor=pointer]:
            - /url: /contact
            - img [ref=e670]
        - navigation "Rechtliche Informationen" [ref=e672]:
          - link "Terms" [ref=e673] [cursor=pointer]:
            - /url: /en/legal/agb
          - link "Privacy" [ref=e674] [cursor=pointer]:
            - /url: /en/legal/datenschutz
          - link "Imprint" [ref=e675] [cursor=pointer]:
            - /url: /en/legal/impressum
          - generic [ref=e676]: © 2026 Coday
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('SyrupCursor', () => {
  4   |   test('DOM Injection: Verify the custom cursor container is present in the DOM upon page load without triggering Next.js hydration errors', async ({ page }) => {
  5   |     const logs: string[] = [];
  6   |     page.on('console', msg => {
  7   |       if (msg.type() === 'error') logs.push(msg.text());
  8   |     });
  9   |     page.on('pageerror', err => logs.push(err.message));
  10  | 
  11  |     await page.goto('/');
  12  |     
  13  |     // Check for custom cursor container (placeholder selector)
  14  |     const cursorContainer = page.locator('#syrup-cursor, .custom-cursor');
  15  |     await expect(cursorContainer).toBeAttached();
  16  |     
  17  |     expect(logs.filter(log => log.includes('Hydration') || log.includes('Minified React error'))).toHaveLength(0);
  18  |   });
  19  | 
  20  |   test('Native Cursor Hidden: Verify that the <body> or main container has cursor: none applied', async ({ page }) => {
  21  |     await page.goto('/');
  22  |     
  23  |     const bodyCursor = await page.evaluate(() => {
  24  |       return window.getComputedStyle(document.body).cursor;
  25  |     });
  26  |     
  27  |     // Some implementations might hide the cursor on a specific wrapper rather than body
  28  |     const wrapperCursor = await page.evaluate(() => {
  29  |       const wrapper = document.querySelector('main') || document.querySelector('#__next') || document.body;
  30  |       return window.getComputedStyle(wrapper).cursor;
  31  |     });
  32  | 
> 33  |     expect(bodyCursor === 'none' || wrapperCursor === 'none').toBeTruthy();
      |                                                               ^ Error: expect(received).toBeTruthy()
  34  |   });
  35  | 
  36  |   test('Movement Tracking: Move the mouse via Playwright and assert the custom cursor element updates to match coordinates', async ({ page }) => {
  37  |     await page.goto('/');
  38  |     
  39  |     const cursor = page.locator('#syrup-cursor, .custom-cursor').first();
  40  |     await expect(cursor).toBeAttached();
  41  | 
  42  |     await page.mouse.move(100, 100);
  43  |     await page.waitForTimeout(100); // Give RAF time to update
  44  |     
  45  |     const box = await cursor.boundingBox();
  46  |     expect(box).not.toBeNull();
  47  |     
  48  |     // The visual center of the custom cursor should be close to 100, 100
  49  |     // We do a loose assertion since it might have a delay/spring physics
  50  |     await page.mouse.move(300, 300);
  51  |     await page.waitForTimeout(300);
  52  |     
  53  |     const newBox = await cursor.boundingBox();
  54  |     expect(newBox).not.toBeNull();
  55  |     if (box && newBox) {
  56  |       expect(newBox.x).not.toBe(box.x);
  57  |       expect(newBox.y).not.toBe(box.y);
  58  |     }
  59  |   });
  60  | 
  61  |   test('Hover State Interaction: Hover over a clickable element and verify the cursor element receives an active/hover state', async ({ page }) => {
  62  |     await page.goto('/');
  63  |     
  64  |     // Inject a dummy button to hover over if page is empty
  65  |     await page.evaluate(() => {
  66  |       const btn = document.createElement('button');
  67  |       btn.id = 'test-hover-btn';
  68  |       btn.innerText = 'Hover Me';
  69  |       btn.style.position = 'absolute';
  70  |       btn.style.top = '200px';
  71  |       btn.style.left = '200px';
  72  |       btn.style.width = '100px';
  73  |       btn.style.height = '100px';
  74  |       document.body.appendChild(btn);
  75  |     });
  76  | 
  77  |     const cursor = page.locator('#syrup-cursor, .custom-cursor').first();
  78  |     const btn = page.locator('#test-hover-btn');
  79  |     
  80  |     // Initial state
  81  |     const initialClass = await cursor.getAttribute('class');
  82  |     const initialTransform = await cursor.evaluate(el => window.getComputedStyle(el).transform);
  83  |     
  84  |     // Hover over button
  85  |     await btn.hover();
  86  |     await page.waitForTimeout(200); // Wait for transition
  87  |     
  88  |     const hoverClass = await cursor.getAttribute('class');
  89  |     const hoverTransform = await cursor.evaluate(el => window.getComputedStyle(el).transform);
  90  |     
  91  |     // The cursor should have changed visually (class change or transform scale change)
  92  |     expect(hoverClass !== initialClass || hoverTransform !== initialTransform).toBeTruthy();
  93  |   });
  94  | 
  95  |   test('Cleanup Validation: Navigate between pages rapidly and check the console to ensure no requestAnimationFrame leaks', async ({ page }) => {
  96  |     const logs: string[] = [];
  97  |     page.on('console', msg => {
  98  |       if (msg.type() === 'error') logs.push(msg.text());
  99  |     });
  100 | 
  101 |     await page.goto('/');
  102 |     
  103 |     // Rapid navigation
  104 |     for (let i = 0; i < 5; i++) {
  105 |       await page.goto('/menu', { waitUntil: 'commit' });
  106 |       await page.goto('/', { waitUntil: 'commit' });
  107 |     }
  108 |     
  109 |     // Wait for everything to settle
  110 |     await page.waitForLoadState('networkidle');
  111 |     
  112 |     // Ensure only one cursor exists
  113 |     const cursors = page.locator('#syrup-cursor, .custom-cursor');
  114 |     const count = await cursors.count();
  115 |     expect(count).toBeLessThanOrEqual(1);
  116 |     
  117 |     // Check for leak errors in console
  118 |     expect(logs.filter(log => log.toLowerCase().includes('leak') || log.toLowerCase().includes('unmounted'))).toHaveLength(0);
  119 |   });
  120 | });
  121 | 
```