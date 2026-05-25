# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: liquid-transition.spec.ts >> LiquidTransition >> Back Navigation Safety: Use page.goBack() and verify the transition runs in reverse without leaving a blank screen
- Location: tests/e2e/liquid-transition.spec.ts:42:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation to "**/" until "load"
  navigated to "http://127.0.0.1:3000/en"
============================================================
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
              - img "Partnerschaft" [ref=e633]
              - generic [ref=e634]:
                - generic [ref=e635]: Resistance Member
                - generic [ref=e636]: Fight against the fluff.
          - navigation "Navigation" [ref=e637]:
            - heading "Navigation" [level=3] [ref=e638]
            - list [ref=e639]:
              - listitem [ref=e640]:
                - link "Home" [ref=e641] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e642]:
                - link "Portfolio" [ref=e643] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e644]:
                - link "About Us" [ref=e645] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e646]:
                - link "Process" [ref=e647] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e648]:
                - link "Pricing" [ref=e649] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e650]:
                - link "common.nav.main.partnerschaft" [ref=e651] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e652]:
                - link "Price Calculator" [ref=e653] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e654]:
                - link "Career" [ref=e655] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e656]:
            - heading "Services" [level=3] [ref=e657]
            - list [ref=e658]:
              - listitem [ref=e659]:
                - link "Web Development" [ref=e660] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e661]:
                - link "UI/UX Design" [ref=e662] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e663]:
                - link "SEO & Traffic" [ref=e664] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e665]:
                - link "E-Commerce" [ref=e666] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e667]:
                - link "API Integrations" [ref=e668] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e669]:
                - link "common.nav.services.fullstack.label" [ref=e670] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e671]:
                - link "Public Sector" [ref=e672] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e673]:
                - link "common.nav.industries.tech" [ref=e674] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e675]:
            - heading "common.footer.sections.regional" [level=3] [ref=e676]
            - list [ref=e677]:
              - listitem [ref=e678]:
                - link "Webdesign Hessen" [ref=e679] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e680]:
                - link "Webagentur Wetzlar" [ref=e681] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e682]:
                - link "Praxis-Website Wetzlar" [ref=e683] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e684]:
                - link "Praxis-Website Gießen" [ref=e685] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e686]:
                - link "Handwerker Wetzlar" [ref=e687] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e688]:
            - heading "Contact" [level=3] [ref=e689]
            - list [ref=e690]:
              - listitem [ref=e691]:
                - link "umut@codayweb.de" [ref=e692] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e693]:
                - link "+49 176 41195301" [ref=e694] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e695]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e696] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e698]:
          - generic [ref=e699]:
            - generic [ref=e701]:
              - img [ref=e704]
              - generic [ref=e706]: DSGVO Konform
              - generic [ref=e707]: 100% Datenschutz-konform
            - generic [ref=e709]:
              - img [ref=e712]
              - generic [ref=e714]: Vercel Edge Network
              - generic [ref=e715]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e716]:
          - navigation "Soziale Medien" [ref=e717]:
            - link "Visit us on Facebook" [ref=e718] [cursor=pointer]:
              - /url: /contact
              - img [ref=e720]
            - link "Visit us on Instagram" [ref=e722] [cursor=pointer]:
              - /url: /contact
              - img [ref=e724]
            - link "Visit us on Twitter" [ref=e726] [cursor=pointer]:
              - /url: /contact
              - img [ref=e728]
            - link "Visit us on LinkedIn" [ref=e730] [cursor=pointer]:
              - /url: /contact
              - img [ref=e732]
          - navigation "Rechtliche Informationen" [ref=e734]:
            - link "Terms" [ref=e735] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e736] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e737] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e738]: © 2026 Coday
    - generic [ref=e741]:
      - img [ref=e744]
      - heading "Ready for your next project?" [level=2] [ref=e747]:
        - text: Ready for your
        - generic [ref=e749]: next project?
      - paragraph [ref=e750]: Let's find out together how we can accelerate your digital growth. Free and without obligation.
      - link "Start project" [ref=e751] [cursor=pointer]:
        - /url: /en/contact
        - generic [ref=e752]:
          - text: Start project
          - img [ref=e754]
    - button "Menü öffnen" [ref=e757]:
      - img [ref=e759]
    - dialog "Cookie Banner" [ref=e763]:
      - generic [ref=e764]:
        - img [ref=e767]
        - generic [ref=e769]:
          - generic [ref=e770]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e771]
            - paragraph [ref=e772]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e773]:
            - link "Datenschutzerklärung" [ref=e774] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e775] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e776]:
          - button "Alle akzeptieren" [ref=e777]
          - button "Ablehnen" [ref=e778]
          - button "Einstellungen" [ref=e779]
  - generic [ref=e784] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e785]:
      - img [ref=e786]
    - generic [ref=e789]:
      - button "Open issues overlay" [ref=e790]:
        - generic [ref=e791]:
          - generic [ref=e792]: "5"
          - generic [ref=e793]: "6"
        - generic [ref=e794]:
          - text: Issue
          - generic [ref=e795]: s
      - button "Collapse issues badge" [ref=e796]:
        - img [ref=e797]
  - alert [ref=e799]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('LiquidTransition', () => {
  4  |   test('Transition Trigger: Click a navigation link and verify the LiquidTransition overlay element becomes briefly visible', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     // Set up a listener for the transition overlay
  8  |     // It might be added to the DOM dynamically or just change visibility
  9  |     const overlay = page.locator('#liquid-transition, .transition-overlay');
  10 |     
  11 |     // Inject a dummy link that doesn't cause a hard reload if needed
  12 |     // Assuming standard Next.js routing via Link component exists for "Menu"
  13 |     const link = page.getByRole('link', { name: 'Menu' });
  14 |     
  15 |     // If there is no menu link yet, we shouldn't fail the logic, but the actual app will have it.
  16 |     if (await link.count() > 0) {
  17 |       await link.click();
  18 |       await expect(overlay).toBeVisible({ timeout: 5000 });
  19 |     } else {
  20 |       // Fallback for tests before UI is complete: force an evaluation
  21 |       console.log('Skipping click - missing link');
  22 |     }
  23 |   });
  24 | 
  25 |   test('URL & Content Update: Verify that after the transition overlay disappears, the URL has updated and target page content is visible', async ({ page }) => {
  26 |     await page.goto('/');
  27 |     
  28 |     const link = page.getByRole('link', { name: 'Menu' });
  29 |     if (await link.count() > 0) {
  30 |       await link.click();
  31 |       
  32 |       const overlay = page.locator('#liquid-transition, .transition-overlay');
  33 |       // Wait for it to appear then disappear
  34 |       await expect(overlay).toBeVisible({ timeout: 5000 }).catch(() => {});
  35 |       await expect(overlay).toBeHidden({ timeout: 5000 });
  36 |       
  37 |       // Check URL and content
  38 |       await expect(page).toHaveURL(/.*\/menu/);
  39 |     }
  40 |   });
  41 | 
  42 |   test('Back Navigation Safety: Use page.goBack() and verify the transition runs in reverse without leaving a blank screen', async ({ page }) => {
  43 |     const logs: string[] = [];
  44 |     page.on('console', msg => {
  45 |       if (msg.type() === 'error') logs.push(msg.text());
  46 |     });
  47 | 
  48 |     await page.goto('/');
  49 |     await page.goto('/menu');
  50 |     await page.waitForLoadState('networkidle');
  51 |     
  52 |     await page.goBack();
> 53 |     await page.waitForURL('**/');
     |                ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  54 |     
  55 |     // Ensure body isn't blank
  56 |     const htmlContent = await page.content();
  57 |     expect(htmlContent.length).toBeGreaterThan(100);
  58 |     
  59 |     // Ensure no hydration errors
  60 |     expect(logs.filter(log => log.includes('Hydration'))).toHaveLength(0);
  61 |   });
  62 | 
  63 |   test('Rapid Click Handling: Rapidly click a navigation link 5 times; verify the app does not lock up and transition completes cleanly', async ({ page }) => {
  64 |     await page.goto('/');
  65 |     
  66 |     const link = page.getByRole('link', { name: 'Menu' });
  67 |     
  68 |     if (await link.count() > 0) {
  69 |       // Rapidly click 5 times
  70 |       for (let i = 0; i < 5; i++) {
  71 |         await link.click({ force: true });
  72 |         await page.waitForTimeout(50);
  73 |       }
  74 |       
  75 |       // It should eventually settle on the menu page
  76 |       await page.waitForURL(/.*\/menu/, { timeout: 10000 });
  77 |       
  78 |       const overlay = page.locator('#liquid-transition, .transition-overlay');
  79 |       await expect(overlay).toBeHidden({ timeout: 5000 });
  80 |     }
  81 |   });
  82 | 
  83 |   test('Direct Navigation Bypass: Load a sub-page directly and verify the page renders instantly without infinite transition state', async ({ page }) => {
  84 |     // Start at a subpage directly
  85 |     await page.goto('/menu');
  86 |     
  87 |     // Check that we can see normal content without being stuck behind an overlay
  88 |     const overlay = page.locator('#liquid-transition, .transition-overlay');
  89 |     await expect(overlay).toBeHidden({ timeout: 5000 });
  90 |     
  91 |     const bodyText = await page.locator('body').innerText();
  92 |     expect(bodyText.trim().length).toBeGreaterThan(0);
  93 |   });
  94 | });
  95 | 
```