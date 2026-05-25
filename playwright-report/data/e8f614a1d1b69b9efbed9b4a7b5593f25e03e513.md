# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global-layout.spec.ts >> Global Layout >> Layout Persistence: Navigate across 3 different pages and verify the Layout (Header/Footer) persists without layout shift or unmounting errors
- Location: tests/e2e/global-layout.spec.ts:39:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Menu' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
    - status [ref=e22]: High-End Web Development with AI Precision | Coday
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
            - generic [ref=e39]: Maximum ROI. Scalable Growth.
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
              - list [ref=e104]:
                - listitem [ref=e105]:
                  - generic [ref=e107]:
                    - img [ref=e108]
                    - generic [ref=e111]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e112]:
                  - generic [ref=e114]:
                    - img [ref=e115]
                    - generic [ref=e118]: Lindener Ratsstuben
                - listitem [ref=e119]:
                  - generic [ref=e121]:
                    - img [ref=e122]
                    - generic [ref=e125]: Sanitär Batherm
        - generic [ref=e130]:
          - generic [ref=e131]:
            - generic [ref=e132]: 0.0Seconds
            - generic [ref=e133]: 0.5 Seconds Ø Load Time
            - generic [ref=e134]: Ø Load Time
          - generic [ref=e135]:
            - generic [ref=e136]: 0Percent
            - generic [ref=e137]: 100 Percent Code Ownership
            - generic [ref=e138]: Code Ownership
          - generic [ref=e139]:
            - generic [ref=e140]: 0Hours
            - generic [ref=e141]: 24 Hours Availability
            - generic [ref=e142]: Availability
          - generic [ref=e143]:
            - generic [ref=e144]: Profit
            - generic [ref=e145]: Focused
        - generic [ref=e148]:
          - generic [ref=e149]:
            - heading "Traditional vs. Coday" [level=2] [ref=e150]
            - paragraph [ref=e151]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e153]:
            - rowgroup [ref=e154]:
              - row "Metric Traditional Agency Coday" [ref=e155]:
                - columnheader "Metric" [ref=e156]
                - columnheader "Traditional Agency" [ref=e157]
                - columnheader "Coday" [ref=e158]:
                  - generic [ref=e159]: Coday
            - rowgroup [ref=e160]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e161]:
                - rowheader "Speed" [ref=e162]
                - cell "Weeks or Months (Bloated)" [ref=e163]:
                  - img [ref=e164]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e166]:
                  - generic [ref=e167]:
                    - img [ref=e168]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e170]:
                - rowheader "Pricing Model" [ref=e171]
                - cell "Hourly Rates & Hidden Costs" [ref=e172]:
                  - img [ref=e173]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e175]:
                  - generic [ref=e176]:
                    - img [ref=e177]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e179]:
                - rowheader "Technology" [ref=e180]
                - cell "WordPress / Builders (Slow)" [ref=e181]:
                  - img [ref=e182]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e184]:
                  - generic [ref=e185]:
                    - img [ref=e186]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e188]:
                - rowheader "Rights" [ref=e189]
                - cell "Vendor Lock-in" [ref=e190]:
                  - img [ref=e191]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e193]:
                  - generic [ref=e194]:
                    - img [ref=e195]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e197]:
                - rowheader "Contact" [ref=e198]
                - cell "Account Manager (Middleman)" [ref=e199]:
                  - img [ref=e200]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e202]:
                  - generic [ref=e203]:
                    - img [ref=e204]
                    - text: Direct Developer Access
        - generic [ref=e209]:
          - generic [ref=e210]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e211]:
              - generic [ref=e212]:
                - generic [ref=e213]: Traditional
                - generic [ref=e214]: Agencies
              - text: Are History.
            - generic [ref=e215]:
              - paragraph [ref=e216]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e217]:
                - strong [ref=e218]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e223]
        - generic [ref=e226]:
          - generic [ref=e227]:
            - generic [ref=e228]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e229]:
              - generic [ref=e230]:
                - generic [ref=e231]: We
                - generic [ref=e232]: offer
              - generic [ref=e233]: Premium Services.
          - generic [ref=e235]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e238] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e240]:
                - img [ref=e243]
                - heading "Web Development" [level=3] [ref=e246]
                - paragraph [ref=e247]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e248]:
                - text: Learn more
                - img [ref=e250]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e254] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e256]:
                - img [ref=e259]
                - heading "UX/UI Design" [level=3] [ref=e262]
                - paragraph [ref=e263]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e264]:
                - text: Learn more
                - img [ref=e266]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e270] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e272]:
                - img [ref=e275]
                - heading "Digital Growth" [level=3] [ref=e278]
                - paragraph [ref=e279]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e280]:
                - text: Learn more
                - img [ref=e282]
        - generic [ref=e286]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - paragraph [ref=e289]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e290]
              - paragraph [ref=e291]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e293] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e294]
          - link [ref=e298] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e299]:
              - generic [ref=e301]:
                - generic [ref=e303]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e305]'
              - generic [ref=e307]:
                - generic [ref=e308]:
                  - generic [ref=e309]: Web Development & Lead Gen
                  - generic [ref=e310]: HVAC & Sanitary
                  - generic [ref=e311]: Next.js, Tailwind
                - generic [ref=e312]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e313]
                  - generic [ref=e314]:
                    - text: Case Study ansehen
                    - img [ref=e315]
        - generic [ref=e319]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e320]:
            - generic [ref=e321]:
              - generic [ref=e322]: Tailored
              - generic [ref=e323]: solutions
              - generic [ref=e324]: for
            - text: Your Industry.
          - generic [ref=e325]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e327] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e328]:
                - img [ref=e331]
                - heading "Craft & Construction" [level=3] [ref=e333]
                - paragraph [ref=e334]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e336] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e337]:
                - img [ref=e340]
                - heading "Real Estate" [level=3] [ref=e342]
                - paragraph [ref=e343]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e345] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e346]:
                - img [ref=e349]
                - heading "Online Shop" [level=3] [ref=e351]
                - paragraph [ref=e352]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e354] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e355]:
                - img [ref=e358]
                - heading "Consulting" [level=3] [ref=e360]
                - paragraph [ref=e361]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e363] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e364]:
                - img [ref=e367]
                - heading "Health" [level=3] [ref=e369]
                - paragraph [ref=e370]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e371]:
          - generic [ref=e372]:
            - generic [ref=e373]:
              - generic [ref=e374]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e375]
            - region "Partner logos" [ref=e376]:
              - generic [ref=e377]:
                - list [ref=e378]:
                  - listitem [ref=e379]:
                    - generic [ref=e381]: React 19
                  - listitem [ref=e382]:
                    - generic [ref=e384]: Next.js 15
                  - listitem [ref=e385]:
                    - generic [ref=e387]: TypeScript
                  - listitem [ref=e388]:
                    - generic [ref=e390]: Tailwind v4
                  - listitem [ref=e391]:
                    - generic [ref=e393]: Sanity CMS
                  - listitem [ref=e394]:
                    - generic [ref=e396]: Supabase
                  - listitem [ref=e397]:
                    - generic [ref=e399]: Vercel
                - list [ref=e400]:
                  - listitem [ref=e401]:
                    - generic [ref=e403]: React 19
                  - listitem [ref=e404]:
                    - generic [ref=e406]: Next.js 15
                  - listitem [ref=e407]:
                    - generic [ref=e409]: TypeScript
                  - listitem [ref=e410]:
                    - generic [ref=e412]: Tailwind v4
                  - listitem [ref=e413]:
                    - generic [ref=e415]: Sanity CMS
                  - listitem [ref=e416]:
                    - generic [ref=e418]: Supabase
                  - listitem [ref=e419]:
                    - generic [ref=e421]: Vercel
                - list [ref=e422]:
                  - listitem [ref=e423]:
                    - generic [ref=e425]: React 19
                  - listitem [ref=e426]:
                    - generic [ref=e428]: Next.js 15
                  - listitem [ref=e429]:
                    - generic [ref=e431]: TypeScript
                  - listitem [ref=e432]:
                    - generic [ref=e434]: Tailwind v4
                  - listitem [ref=e435]:
                    - generic [ref=e437]: Sanity CMS
                  - listitem [ref=e438]:
                    - generic [ref=e440]: Supabase
                  - listitem [ref=e441]:
                    - generic [ref=e443]: Vercel
        - generic [ref=e445]:
          - generic [ref=e446]:
            - heading "Clients who Trust Us." [level=2] [ref=e447]:
              - generic [ref=e448]:
                - generic [ref=e449]: Clients
                - generic [ref=e450]: who
              - text: Trust Us.
            - paragraph [ref=e451]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e452]:
            - generic [ref=e454]:
              - img [ref=e458]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e460]':
                - img [ref=e462]
                - img [ref=e465]
                - img [ref=e468]
                - img [ref=e471]
                - img [ref=e474]
              - blockquote [ref=e476]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e477]:
                - generic [ref=e478]: M
                - generic [ref=e479]:
                  - generic [ref=e481]: Michael Weber
                  - generic [ref=e482]: Managing Director•TechVision GmbH
            - generic [ref=e484]:
              - img [ref=e488]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e490]':
                - img [ref=e492]
                - img [ref=e495]
                - img [ref=e498]
                - img [ref=e501]
                - img [ref=e504]
              - blockquote [ref=e506]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e507]:
                - generic [ref=e508]: S
                - generic [ref=e509]:
                  - generic [ref=e511]: Sarah Müller
                  - generic [ref=e512]: CMO•Digital pioneers
            - generic [ref=e514]:
              - img [ref=e518]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e520]':
                - img [ref=e522]
                - img [ref=e525]
                - img [ref=e528]
                - img [ref=e531]
                - img [ref=e534]
              - blockquote [ref=e536]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e537]:
                - generic [ref=e538]: J
                - generic [ref=e539]:
                  - generic [ref=e541]: Jan Schmidt
                  - generic [ref=e542]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e543]:
            - generic [ref=e544]:
              - generic [ref=e545]: S
              - generic [ref=e546]: M
              - generic [ref=e547]: J
              - generic [ref=e548]: P
            - generic [ref=e549]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e551]:
      - generic [ref=e552]:
        - generic [ref=e553]:
          - paragraph [ref=e554]: Trusted by innovative companies
          - region "Partner logos" [ref=e556]:
            - generic [ref=e557]:
              - list [ref=e558]:
                - listitem [ref=e559]:
                  - generic [ref=e561]:
                    - img [ref=e562]
                    - generic [ref=e565]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e566]:
                  - generic [ref=e568]:
                    - img [ref=e569]
                    - generic [ref=e572]: Lindener Ratsstuben
                - listitem [ref=e573]:
                  - generic [ref=e575]:
                    - img [ref=e576]
                    - generic [ref=e579]: Sanitär Batherm
              - list [ref=e580]:
                - listitem [ref=e581]:
                  - generic [ref=e583]:
                    - img [ref=e584]
                    - generic [ref=e587]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e588]:
                  - generic [ref=e590]:
                    - img [ref=e591]
                    - generic [ref=e594]: Lindener Ratsstuben
                - listitem [ref=e595]:
                  - generic [ref=e597]:
                    - img [ref=e598]
                    - generic [ref=e601]: Sanitär Batherm
              - list [ref=e602]:
                - listitem [ref=e603]:
                  - generic [ref=e605]:
                    - img [ref=e606]
                    - generic [ref=e609]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e610]:
                  - generic [ref=e612]:
                    - img [ref=e613]
                    - generic [ref=e616]: Lindener Ratsstuben
                - listitem [ref=e617]:
                  - generic [ref=e619]:
                    - img [ref=e620]
                    - generic [ref=e623]: Sanitär Batherm
        - generic [ref=e624]:
          - generic [ref=e625]:
            - generic [ref=e626]:
              - generic:
                - generic [ref=e627]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e628]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e629]:
              - generic [ref=e631]:
                - generic [ref=e633]: Loading...
                - img "Partnerschaft" [ref=e635]
              - generic [ref=e636]:
                - generic [ref=e637]: Resistance Member
                - generic [ref=e638]: Fight against the fluff.
          - navigation "Navigation" [ref=e639]:
            - heading "Navigation" [level=3] [ref=e640]
            - list [ref=e641]:
              - listitem [ref=e642]:
                - link "Home" [ref=e643] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e644]:
                - link "Portfolio" [ref=e645] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e646]:
                - link "About Us" [ref=e647] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e648]:
                - link "Process" [ref=e649] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e650]:
                - link "Pricing" [ref=e651] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e652]:
                - link "common.nav.main.partnerschaft" [ref=e653] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e654]:
                - link "Price Calculator" [ref=e655] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e656]:
                - link "Career" [ref=e657] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e658]:
            - heading "Services" [level=3] [ref=e659]
            - list [ref=e660]:
              - listitem [ref=e661]:
                - link "Web Development" [ref=e662] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e663]:
                - link "UI/UX Design" [ref=e664] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e665]:
                - link "SEO & Traffic" [ref=e666] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e667]:
                - link "E-Commerce" [ref=e668] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e669]:
                - link "API Integrations" [ref=e670] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e671]:
                - link "common.nav.services.fullstack.label" [ref=e672] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e673]:
                - link "Public Sector" [ref=e674] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e675]:
                - link "common.nav.industries.tech" [ref=e676] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e677]:
            - heading "common.footer.sections.regional" [level=3] [ref=e678]
            - list [ref=e679]:
              - listitem [ref=e680]:
                - link "Webdesign Hessen" [ref=e681] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e682]:
                - link "Webagentur Wetzlar" [ref=e683] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e684]:
                - link "Praxis-Website Wetzlar" [ref=e685] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e686]:
                - link "Praxis-Website Gießen" [ref=e687] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e688]:
                - link "Handwerker Wetzlar" [ref=e689] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e690]:
            - heading "Contact" [level=3] [ref=e691]
            - list [ref=e692]:
              - listitem [ref=e693]:
                - link "umut@codayweb.de" [ref=e694] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e695]:
                - link "+49 176 41195301" [ref=e696] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e697]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e698] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e700]:
          - generic [ref=e701]:
            - generic [ref=e703]:
              - img [ref=e706]
              - generic [ref=e708]: DSGVO Konform
              - generic [ref=e709]: 100% Datenschutz-konform
            - generic [ref=e711]:
              - img [ref=e714]
              - generic [ref=e716]: Vercel Edge Network
              - generic [ref=e717]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e718]:
          - navigation "Soziale Medien" [ref=e719]:
            - link "Visit us on Facebook" [ref=e720] [cursor=pointer]:
              - /url: /contact
              - img [ref=e722]
            - link "Visit us on Instagram" [ref=e724] [cursor=pointer]:
              - /url: /contact
              - img [ref=e726]
            - link "Visit us on Twitter" [ref=e728] [cursor=pointer]:
              - /url: /contact
              - img [ref=e730]
            - link "Visit us on LinkedIn" [ref=e732] [cursor=pointer]:
              - /url: /contact
              - img [ref=e734]
          - navigation "Rechtliche Informationen" [ref=e736]:
            - link "Terms" [ref=e737] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e738] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e739] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e740]: © 2026 Coday
    - generic [ref=e743]:
      - img [ref=e746]
      - heading "Ready for your next project?" [level=2] [ref=e749]:
        - text: Ready for your
        - generic [ref=e751]: next project?
      - paragraph [ref=e752]: Let's find out together how we can accelerate your digital growth. Free and without obligation.
      - link "Start project" [ref=e753] [cursor=pointer]:
        - /url: /en/contact
        - generic [ref=e754]:
          - text: Start project
          - img [ref=e756]
    - button "Menü öffnen" [ref=e759]:
      - img [ref=e761]
    - dialog "Cookie Banner" [ref=e765]:
      - generic [ref=e766]:
        - img [ref=e769]
        - generic [ref=e771]:
          - generic [ref=e772]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e773]
            - paragraph [ref=e774]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e775]:
            - link "Datenschutzerklärung" [ref=e776] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e777] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e778]:
          - button "Alle akzeptieren" [ref=e779]
          - button "Ablehnen" [ref=e780]
          - button "Einstellungen" [ref=e781]
  - generic [ref=e786] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e787]:
      - img [ref=e788]
    - generic [ref=e791]:
      - button "Open issues overlay" [ref=e792]:
        - generic [ref=e793]:
          - generic [ref=e794]: "5"
          - generic [ref=e795]: "6"
        - generic [ref=e796]:
          - text: Issue
          - generic [ref=e797]: s
      - button "Collapse issues badge" [ref=e798]:
        - img [ref=e799]
  - alert [ref=e801]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Global Layout', () => {
  4  |   test('Header Rendering: Verify the header is visible and contains core navigation links', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     const header = page.locator('header');
  7  |     await expect(header).toBeVisible();
  8  | 
  9  |     const links = ['Home', 'Menu', 'About', 'Visit'];
  10 |     for (const link of links) {
  11 |       const navLink = header.getByRole('link', { name: link });
  12 |       await expect(navLink).toBeVisible();
  13 |     }
  14 |   });
  15 | 
  16 |   test('Footer Rendering: Verify the footer loads with legal pages, contact info, and is structurally placed at the bottom', async ({ page }) => {
  17 |     await page.goto('/');
  18 |     const footer = page.locator('footer');
  19 |     await expect(footer).toBeVisible();
  20 |     
  21 |     // Check for some expected footer content
  22 |     await expect(footer).toContainText(/contact/i);
  23 |     await expect(footer).toContainText(/privacy|terms|legal/i);
  24 |   });
  25 | 
  26 |   test('Mobile Responsiveness: Viewport set to mobile; verify the hamburger menu is visible and toggles the navigation pane correctly', async ({ page }) => {
  27 |     // Set viewport to mobile size
  28 |     await page.setViewportSize({ width: 375, height: 812 });
  29 |     await page.goto('/');
  30 |     
  31 |     const hamburger = page.locator('button[aria-label="Toggle menu"], .hamburger-menu');
  32 |     await expect(hamburger).toBeVisible();
  33 |     
  34 |     await hamburger.click();
  35 |     const navPane = page.locator('nav.mobile-nav, .mobile-menu');
  36 |     await expect(navPane).toBeVisible();
  37 |   });
  38 | 
  39 |   test('Layout Persistence: Navigate across 3 different pages and verify the Layout (Header/Footer) persists without layout shift or unmounting errors', async ({ page }) => {
  40 |     const logs: string[] = [];
  41 |     page.on('console', msg => {
  42 |       if (msg.type() === 'error') logs.push(msg.text());
  43 |     });
  44 |     page.on('pageerror', err => logs.push(err.message));
  45 | 
  46 |     await page.goto('/');
  47 |     await expect(page.locator('header')).toBeVisible();
  48 |     await expect(page.locator('footer')).toBeVisible();
  49 | 
  50 |     // Navigate to Menu
> 51 |     await page.getByRole('link', { name: 'Menu' }).click();
     |                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  52 |     await page.waitForURL('**/menu*');
  53 |     await expect(page.locator('header')).toBeVisible();
  54 |     await expect(page.locator('footer')).toBeVisible();
  55 | 
  56 |     // Navigate to About
  57 |     await page.getByRole('link', { name: 'About' }).click();
  58 |     await page.waitForURL('**/about*');
  59 |     await expect(page.locator('header')).toBeVisible();
  60 |     await expect(page.locator('footer')).toBeVisible();
  61 | 
  62 |     expect(logs.filter(log => log.includes('Hydration') || log.includes('unmount'))).toHaveLength(0);
  63 |   });
  64 | 
  65 |   test('Sticky Header Behavior: Scroll down the page and verify the header remains sticky/fixed', async ({ page }) => {
  66 |     await page.goto('/');
  67 |     
  68 |     // Ensure the page has enough height to scroll
  69 |     await page.evaluate(() => {
  70 |       document.body.style.minHeight = '2000px';
  71 |     });
  72 | 
  73 |     const header = page.locator('header');
  74 |     await expect(header).toBeVisible();
  75 |     
  76 |     const initialBox = await header.boundingBox();
  77 |     
  78 |     // Scroll down
  79 |     await page.evaluate(() => window.scrollTo(0, 500));
  80 |     await page.waitForTimeout(500); // Wait for potential transitions
  81 |     
  82 |     const scrolledBox = await header.boundingBox();
  83 |     
  84 |     // Header should still be visible and at the top of the viewport
  85 |     await expect(header).toBeVisible();
  86 |     expect(scrolledBox?.y).toBe(0);
  87 |   });
  88 | });
  89 | 
```