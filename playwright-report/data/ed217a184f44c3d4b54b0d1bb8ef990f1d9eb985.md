# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: global-layout.spec.ts >> Global Layout >> Sticky Header Behavior: Scroll down the page and verify the header remains sticky/fixed
- Location: tests/e2e/global-layout.spec.ts:65:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 16
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner [ref=e4]:
      - navigation "Hauptnavigation":
        - link "Coday – Zur Startseite":
          - /url: /en
          - img
          - generic: Coday
          - generic: – Zur Startseite
        - generic:
          - generic:
            - button "EN – Auf Deutsch wechseln":
              - generic:
                - img
              - generic: EN
            - button "Open Menu"
    - status [ref=e5]: High-End Web Development with AI Precision | Coday
    - main [ref=e7]:
      - main [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e12]:
              - img [ref=e14]
              - text: "Grand Opening Special: 25% Off"
            - heading "Your Enterprise Performance Agency." [level=1] [ref=e16]:
              - text: Your Enterprise
              - generic [ref=e18]: Performance Agency.
            - paragraph [ref=e19]: "We engineer custom, lightning-fast enterprise websites using Next.js and React – completely free of WordPress templates. As your premier web design agency, we combine high-end development with data-driven SEO. The result: minimal load times, superior user experience, and measurable revenue growth for your business."
            - generic [ref=e22]: Enterprise-Grade Performance.
            - generic [ref=e23]:
              - link "Initiate Project" [ref=e24] [cursor=pointer]:
                - /url: /en/contact
                - generic [ref=e25]:
                  - text: Initiate Project
                  - img [ref=e26]
              - link "Contact Us" [ref=e28] [cursor=pointer]:
                - /url: /en/work
                - generic [ref=e29]: Contact Us
          - generic [ref=e30]:
            - img [ref=e32]
            - img [ref=e35]
        - generic [ref=e39]:
          - paragraph [ref=e40]: Trusted by leading companies
          - region "Partner logos" [ref=e41]:
            - generic [ref=e42]:
              - list [ref=e43]:
                - listitem [ref=e44]:
                  - generic [ref=e46]:
                    - img [ref=e47]
                    - generic [ref=e50]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e51]:
                  - generic [ref=e53]:
                    - img [ref=e54]
                    - generic [ref=e57]: Lindener Ratsstuben
                - listitem [ref=e58]:
                  - generic [ref=e60]:
                    - img [ref=e61]
                    - generic [ref=e64]: Sanitär Batherm
              - list [ref=e65]:
                - listitem [ref=e66]:
                  - generic [ref=e68]:
                    - img [ref=e69]
                    - generic [ref=e72]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e73]:
                  - generic [ref=e75]:
                    - img [ref=e76]
                    - generic [ref=e79]: Lindener Ratsstuben
                - listitem [ref=e80]:
                  - generic [ref=e82]:
                    - img [ref=e83]
                    - generic [ref=e86]: Sanitär Batherm
              - list [ref=e87]:
                - listitem [ref=e88]:
                  - generic [ref=e90]:
                    - img [ref=e91]
                    - generic [ref=e94]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e95]:
                  - generic [ref=e97]:
                    - img [ref=e98]
                    - generic [ref=e101]: Lindener Ratsstuben
                - listitem [ref=e102]:
                  - generic [ref=e104]:
                    - img [ref=e105]
                    - generic [ref=e108]: Sanitär Batherm
        - generic [ref=e113]:
          - generic [ref=e114]:
            - generic [ref=e115]: 0.2Seconds
            - generic [ref=e116]: 0.5 Seconds Ø Load Time
            - generic [ref=e117]: Ø Load Time
          - generic [ref=e118]:
            - generic [ref=e119]: 44Percent
            - generic [ref=e120]: 100 Percent Code Ownership
            - generic [ref=e121]: Code Ownership
          - generic [ref=e122]:
            - generic [ref=e123]: 0Hours
            - generic [ref=e124]: 24 Hours Availability
            - generic [ref=e125]: Availability
          - generic [ref=e126]:
            - generic [ref=e127]: Profit
            - generic [ref=e128]: Focused
        - generic [ref=e131]:
          - generic [ref=e132]:
            - heading "Traditional vs. Coday" [level=2] [ref=e133]
            - paragraph [ref=e134]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e136]:
            - rowgroup [ref=e137]:
              - row "Metric Traditional Agency Coday" [ref=e138]:
                - columnheader "Metric" [ref=e139]
                - columnheader "Traditional Agency" [ref=e140]
                - columnheader "Coday" [ref=e141]:
                  - generic [ref=e142]: Coday
            - rowgroup [ref=e143]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e144]:
                - rowheader "Speed" [ref=e145]
                - cell "Weeks or Months (Bloated)" [ref=e146]:
                  - img [ref=e147]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e149]:
                  - generic [ref=e150]:
                    - img [ref=e151]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e153]:
                - rowheader "Pricing Model" [ref=e154]
                - cell "Hourly Rates & Hidden Costs" [ref=e155]:
                  - img [ref=e156]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e158]:
                  - generic [ref=e159]:
                    - img [ref=e160]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e162]:
                - rowheader "Technology" [ref=e163]
                - cell "WordPress / Builders (Slow)" [ref=e164]:
                  - img [ref=e165]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e167]:
                  - generic [ref=e168]:
                    - img [ref=e169]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e171]:
                - rowheader "Rights" [ref=e172]
                - cell "Vendor Lock-in" [ref=e173]:
                  - img [ref=e174]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e176]:
                  - generic [ref=e177]:
                    - img [ref=e178]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e180]:
                - rowheader "Contact" [ref=e181]
                - cell "Account Manager (Middleman)" [ref=e182]:
                  - img [ref=e183]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e185]:
                  - generic [ref=e186]:
                    - img [ref=e187]
                    - text: Direct Developer Access
        - generic [ref=e192]:
          - generic [ref=e193]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e194]:
              - generic [ref=e195]:
                - generic [ref=e196]: Traditional
                - generic [ref=e197]: Agencies
              - text: Are History.
            - generic [ref=e198]:
              - paragraph [ref=e199]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e200]:
                - strong [ref=e201]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e206]
        - generic [ref=e209]:
          - generic [ref=e210]:
            - generic [ref=e211]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e212]:
              - generic [ref=e213]:
                - generic [ref=e214]: We
                - generic [ref=e215]: offer
              - generic [ref=e216]: Premium Services.
          - generic [ref=e218]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e221] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e223]:
                - img [ref=e226]
                - heading "Web Development" [level=3] [ref=e229]
                - paragraph [ref=e230]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e231]:
                - text: Learn more
                - img [ref=e233]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e237] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e239]:
                - img [ref=e242]
                - heading "UX/UI Design" [level=3] [ref=e245]
                - paragraph [ref=e246]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e247]:
                - text: Learn more
                - img [ref=e249]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e253] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e255]:
                - img [ref=e258]
                - heading "Digital Growth" [level=3] [ref=e261]
                - paragraph [ref=e262]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e263]:
                - text: Learn more
                - img [ref=e265]
        - generic [ref=e269]:
          - generic [ref=e270]:
            - generic [ref=e271]:
              - paragraph [ref=e272]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e273]
              - paragraph [ref=e274]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e276] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e277]
          - link [ref=e281] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e282]:
              - generic [ref=e284]:
                - generic [ref=e286]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e288]'
              - generic [ref=e290]:
                - generic [ref=e291]:
                  - generic [ref=e292]: Web Development & Lead Gen
                  - generic [ref=e293]: HVAC & Sanitary
                  - generic [ref=e294]: Next.js, Tailwind
                - generic [ref=e295]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e296]
                  - generic [ref=e297]:
                    - text: Case Study ansehen
                    - img [ref=e298]
        - generic [ref=e302]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e303]:
            - generic [ref=e304]:
              - generic [ref=e305]: Tailored
              - generic [ref=e306]: solutions
              - generic [ref=e307]: for
            - text: Your Industry.
          - generic [ref=e308]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e310] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e311]:
                - img [ref=e314]
                - heading "Craft & Construction" [level=3] [ref=e316]
                - paragraph [ref=e317]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e319] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e320]:
                - img [ref=e323]
                - heading "Real Estate" [level=3] [ref=e325]
                - paragraph [ref=e326]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e328] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e329]:
                - img [ref=e332]
                - heading "Online Shop" [level=3] [ref=e334]
                - paragraph [ref=e335]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e337] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e338]:
                - img [ref=e341]
                - heading "Consulting" [level=3] [ref=e343]
                - paragraph [ref=e344]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e346] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e347]:
                - img [ref=e350]
                - heading "Health" [level=3] [ref=e352]
                - paragraph [ref=e353]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e354]:
          - generic [ref=e355]:
            - generic [ref=e356]:
              - generic [ref=e357]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e358]
            - region "Partner logos" [ref=e359]:
              - generic [ref=e360]:
                - list [ref=e361]:
                  - listitem [ref=e362]:
                    - generic [ref=e364]: React 19
                  - listitem [ref=e365]:
                    - generic [ref=e367]: Next.js 15
                  - listitem [ref=e368]:
                    - generic [ref=e370]: TypeScript
                  - listitem [ref=e371]:
                    - generic [ref=e373]: Tailwind v4
                  - listitem [ref=e374]:
                    - generic [ref=e376]: Sanity CMS
                  - listitem [ref=e377]:
                    - generic [ref=e379]: Supabase
                  - listitem [ref=e380]:
                    - generic [ref=e382]: Vercel
                - list [ref=e383]:
                  - listitem [ref=e384]:
                    - generic [ref=e386]: React 19
                  - listitem [ref=e387]:
                    - generic [ref=e389]: Next.js 15
                  - listitem [ref=e390]:
                    - generic [ref=e392]: TypeScript
                  - listitem [ref=e393]:
                    - generic [ref=e395]: Tailwind v4
                  - listitem [ref=e396]:
                    - generic [ref=e398]: Sanity CMS
                  - listitem [ref=e399]:
                    - generic [ref=e401]: Supabase
                  - listitem [ref=e402]:
                    - generic [ref=e404]: Vercel
                - list [ref=e405]:
                  - listitem [ref=e406]:
                    - generic [ref=e408]: React 19
                  - listitem [ref=e409]:
                    - generic [ref=e411]: Next.js 15
                  - listitem [ref=e412]:
                    - generic [ref=e414]: TypeScript
                  - listitem [ref=e415]:
                    - generic [ref=e417]: Tailwind v4
                  - listitem [ref=e418]:
                    - generic [ref=e420]: Sanity CMS
                  - listitem [ref=e421]:
                    - generic [ref=e423]: Supabase
                  - listitem [ref=e424]:
                    - generic [ref=e426]: Vercel
        - generic [ref=e428]:
          - generic [ref=e429]:
            - heading "Clients who Trust Us." [level=2] [ref=e430]:
              - generic [ref=e431]:
                - generic [ref=e432]: Clients
                - generic [ref=e433]: who
              - text: Trust Us.
            - paragraph [ref=e434]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e435]:
            - generic [ref=e437]:
              - img [ref=e441]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e443]':
                - img [ref=e445]
                - img [ref=e448]
                - img [ref=e451]
                - img [ref=e454]
                - img [ref=e457]
              - blockquote [ref=e459]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e460]:
                - generic [ref=e461]: M
                - generic [ref=e462]:
                  - generic [ref=e464]: Michael Weber
                  - generic [ref=e465]: Managing Director•TechVision GmbH
            - generic [ref=e467]:
              - img [ref=e471]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e473]':
                - img [ref=e475]
                - img [ref=e478]
                - img [ref=e481]
                - img [ref=e484]
                - img [ref=e487]
              - blockquote [ref=e489]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e490]:
                - generic [ref=e491]: S
                - generic [ref=e492]:
                  - generic [ref=e494]: Sarah Müller
                  - generic [ref=e495]: CMO•Digital pioneers
            - generic [ref=e497]:
              - img [ref=e501]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e503]':
                - img [ref=e505]
                - img [ref=e508]
                - img [ref=e511]
                - img [ref=e514]
                - img [ref=e517]
              - blockquote [ref=e519]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e520]:
                - generic [ref=e521]: J
                - generic [ref=e522]:
                  - generic [ref=e524]: Jan Schmidt
                  - generic [ref=e525]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e526]:
            - generic [ref=e527]:
              - generic [ref=e528]: S
              - generic [ref=e529]: M
              - generic [ref=e530]: J
              - generic [ref=e531]: P
            - generic [ref=e532]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e534]:
      - generic [ref=e535]:
        - generic [ref=e536]:
          - paragraph [ref=e537]: Trusted by innovative companies
          - region "Partner logos" [ref=e539]:
            - generic [ref=e540]:
              - list [ref=e541]:
                - listitem [ref=e542]:
                  - generic [ref=e544]:
                    - img [ref=e545]
                    - generic [ref=e548]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e549]:
                  - generic [ref=e551]:
                    - img [ref=e552]
                    - generic [ref=e555]: Lindener Ratsstuben
                - listitem [ref=e556]:
                  - generic [ref=e558]:
                    - img [ref=e559]
                    - generic [ref=e562]: Sanitär Batherm
              - list [ref=e563]:
                - listitem [ref=e564]:
                  - generic [ref=e566]:
                    - img [ref=e567]
                    - generic [ref=e570]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e571]:
                  - generic [ref=e573]:
                    - img [ref=e574]
                    - generic [ref=e577]: Lindener Ratsstuben
                - listitem [ref=e578]:
                  - generic [ref=e580]:
                    - img [ref=e581]
                    - generic [ref=e584]: Sanitär Batherm
              - list [ref=e585]:
                - listitem [ref=e586]:
                  - generic [ref=e588]:
                    - img [ref=e589]
                    - generic [ref=e592]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e593]:
                  - generic [ref=e595]:
                    - img [ref=e596]
                    - generic [ref=e599]: Lindener Ratsstuben
                - listitem [ref=e600]:
                  - generic [ref=e602]:
                    - img [ref=e603]
                    - generic [ref=e606]: Sanitär Batherm
        - generic [ref=e607]:
          - generic [ref=e608]:
            - generic [ref=e609]:
              - generic:
                - generic [ref=e610]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e611]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e612]:
              - generic [ref=e614]:
                - generic [ref=e616]: Loading...
                - img "Partnerschaft" [ref=e618]
              - generic [ref=e619]:
                - generic [ref=e620]: Resistance Member
                - generic [ref=e621]: Fight against the fluff.
          - navigation "Navigation" [ref=e622]:
            - heading "Navigation" [level=3] [ref=e623]
            - list [ref=e624]:
              - listitem [ref=e625]:
                - link "Home" [ref=e626] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e627]:
                - link "Portfolio" [ref=e628] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e629]:
                - link "About Us" [ref=e630] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e631]:
                - link "Process" [ref=e632] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e633]:
                - link "Pricing" [ref=e634] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e635]:
                - link "common.nav.main.partnerschaft" [ref=e636] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e637]:
                - link "Price Calculator" [ref=e638] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e639]:
                - link "Career" [ref=e640] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e641]:
            - heading "Services" [level=3] [ref=e642]
            - list [ref=e643]:
              - listitem [ref=e644]:
                - link "Web Development" [ref=e645] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e646]:
                - link "UI/UX Design" [ref=e647] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e648]:
                - link "SEO & Traffic" [ref=e649] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e650]:
                - link "E-Commerce" [ref=e651] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e652]:
                - link "API Integrations" [ref=e653] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e654]:
                - link "common.nav.services.fullstack.label" [ref=e655] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e656]:
                - link "Public Sector" [ref=e657] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e658]:
                - link "common.nav.industries.tech" [ref=e659] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e660]:
            - heading "common.footer.sections.regional" [level=3] [ref=e661]
            - list [ref=e662]:
              - listitem [ref=e663]:
                - link "Webdesign Hessen" [ref=e664] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e665]:
                - link "Webagentur Wetzlar" [ref=e666] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e667]:
                - link "Praxis-Website Wetzlar" [ref=e668] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e669]:
                - link "Praxis-Website Gießen" [ref=e670] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e671]:
                - link "Handwerker Wetzlar" [ref=e672] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e673]:
            - heading "Contact" [level=3] [ref=e674]
            - list [ref=e675]:
              - listitem [ref=e676]:
                - link "umut@codayweb.de" [ref=e677] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e678]:
                - link "+49 176 41195301" [ref=e679] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e680]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e681] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e683]:
          - generic [ref=e684]:
            - generic [ref=e686]:
              - img [ref=e689]
              - generic [ref=e691]: DSGVO Konform
              - generic [ref=e692]: 100% Datenschutz-konform
            - generic [ref=e694]:
              - img [ref=e697]
              - generic [ref=e699]: Vercel Edge Network
              - generic [ref=e700]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e701]:
          - navigation "Soziale Medien" [ref=e702]:
            - link "Visit us on Facebook" [ref=e703] [cursor=pointer]:
              - /url: /contact
              - img [ref=e705]
            - link "Visit us on Instagram" [ref=e707] [cursor=pointer]:
              - /url: /contact
              - img [ref=e709]
            - link "Visit us on Twitter" [ref=e711] [cursor=pointer]:
              - /url: /contact
              - img [ref=e713]
            - link "Visit us on LinkedIn" [ref=e715] [cursor=pointer]:
              - /url: /contact
              - img [ref=e717]
          - navigation "Rechtliche Informationen" [ref=e719]:
            - link "Terms" [ref=e720] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e721] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e722] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e723]: © 2026 Coday
  - generic [ref=e728] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e729]:
      - img [ref=e730]
    - generic [ref=e733]:
      - button "Open issues overlay" [ref=e734]:
        - generic [ref=e735]:
          - generic [ref=e736]: "5"
          - generic [ref=e737]: "6"
        - generic [ref=e738]:
          - text: Issue
          - generic [ref=e739]: s
      - button "Collapse issues badge" [ref=e740]:
        - img [ref=e741]
  - alert [ref=e743]
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
  51 |     await page.getByRole('link', { name: 'Menu' }).click();
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
> 86 |     expect(scrolledBox?.y).toBe(0);
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  87 |   });
  88 | });
  89 | 
```