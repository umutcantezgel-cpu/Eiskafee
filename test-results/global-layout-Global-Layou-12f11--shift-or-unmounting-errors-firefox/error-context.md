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
        - generic [ref=e10]:
          - generic [ref=e11]:
            - button "Services" [ref=e12] [cursor=pointer]:
              - text: Services
              - img [ref=e14]
            - generic:
              - generic:
                - generic:
                  - button "Development": Development
                  - button "Design"
                  - button "Growth"
                  - button "Industries"
                - generic:
                  - generic:
                    - link "Web Development Scalable Web Apps & High-Performance Sites":
                      - /url: /en/services/web-development
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Web Development
                        - generic: Scalable Web Apps & High-Performance Sites
                    - link "Web Applications":
                      - /url: /en/services/web-development/web-apps
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Web Applications
                    - link "E-Commerce Stores that Sell (Shopify/Next.js)":
                      - /url: /en/services/web-development/e-commerce
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: E-Commerce
                        - generic: Stores that Sell (Shopify/Next.js)
                    - link "Headless CMS":
                      - /url: /en/services/web-development/headless-cms
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Headless CMS
                    - link "API Integrations":
                      - /url: /en/services/web-development/api-integrations
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: API Integrations
                    - link "Migrations":
                      - /url: /en/services/web-development/migration
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Migrations
                    - link "Enterprise Platforms World-Class Portals & Systems":
                      - /url: /en/services/enterprise-web
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Enterprise Platforms
                        - generic: World-Class Portals & Systems
          - generic [ref=e16]:
            - button "Work" [ref=e17] [cursor=pointer]:
              - text: Work
              - img [ref=e19]
            - generic:
              - generic:
                - generic:
                  - button "Highlights": Highlights
                  - button "Portfolio"
                - generic:
                  - generic:
                    - link "Batherm":
                      - /url: https://www.batherm.de
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Batherm
          - generic [ref=e21]:
            - button "Resources" [ref=e22] [cursor=pointer]:
              - text: Resources
              - img [ref=e24]
            - generic:
              - generic:
                - generic:
                  - button "Knowledge": Knowledge
                  - button "Tools"
                - generic:
                  - generic:
                    - link "Blog & Insights Deep Dives & News":
                      - /url: /en/knowledge/blog
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Blog & Insights
                        - generic: Deep Dives & News
                    - link "FAQ Common Questions":
                      - /url: /en/knowledge/faq
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: FAQ
                        - generic: Common Questions
                    - link "Whitepapers Guides & Checklists":
                      - /url: /en/knowledge/whitepapers
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Whitepapers
                        - generic: Guides & Checklists
                    - link "Video Courses Learn from Experts":
                      - /url: /en/knowledge/academy
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Video Courses
                        - generic: Learn from Experts
                    - link "Newsletter Weekly Tips":
                      - /url: /en/knowledge/newsletter
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Newsletter
                        - generic: Weekly Tips
          - generic [ref=e26]:
            - button "Company" [ref=e27] [cursor=pointer]:
              - text: Company
              - img [ref=e29]
            - generic:
              - generic:
                - generic:
                  - button "The Agency": The Agency
                  - button "Career"
                  - button "Legal"
                  - button "Start"
                - generic:
                  - generic:
                    - link "About Us Get to Know Us":
                      - /url: /en/about
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: About Us
                        - generic: Get to Know Us
                    - link "Our Process How We Work":
                      - /url: /en/process
                      - generic:
                        - generic:
                          - img
                      - generic:
                        - generic: Our Process
                        - generic: How We Work
        - generic [ref=e32]:
          - button "Lokales" [ref=e34]:
            - generic [ref=e35]: Lokales
            - img [ref=e36]
          - button "EN – Auf Deutsch wechseln" [ref=e38]:
            - img [ref=e40]
            - generic [ref=e42]: EN
          - link "Packages" [ref=e43] [cursor=pointer]:
            - /url: /en/packages
            - generic [ref=e44]: Packages
            - img [ref=e46]
          - link "Book" [ref=e48] [cursor=pointer]:
            - /url: /en/contact
            - generic [ref=e49]: Book
            - img [ref=e51]
    - status [ref=e53]: High-End Web Development with AI Precision | Coday
    - main [ref=e55]:
      - main [ref=e56]:
        - generic [ref=e57]:
          - generic [ref=e58]:
            - generic [ref=e60]:
              - img [ref=e62]
              - text: "Grand Opening Special: 25% Off"
            - heading "Your Enterprise Performance Agency." [level=1] [ref=e64]:
              - text: Your Enterprise
              - generic [ref=e66]: Performance Agency.
            - paragraph [ref=e67]: "We engineer custom, lightning-fast enterprise websites using Next.js and React – completely free of WordPress templates. As your premier web design agency, we combine high-end development with data-driven SEO. The result: minimal load times, superior user experience, and measurable revenue growth for your business."
            - generic [ref=e70]:
              - generic [ref=e71]: Maximum ROI. Scalable Growth.
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]: M
                  - generic [ref=e75]: a
                  - generic [ref=e76]: x
                  - generic [ref=e77]: i
                  - generic [ref=e78]: m
                  - generic [ref=e79]: u
                  - generic [ref=e80]: m
                - generic [ref=e82]:
                  - generic [ref=e83]: R
                  - generic [ref=e84]: O
                  - generic [ref=e85]: I
                  - generic [ref=e86]: .
                - generic [ref=e88]:
                  - generic [ref=e89]: S
                  - generic [ref=e90]: c
                  - generic [ref=e91]: a
                  - generic [ref=e92]: l
                  - generic [ref=e93]: a
                  - generic [ref=e94]: b
                  - generic [ref=e95]: l
                  - generic [ref=e96]: e
                - generic [ref=e98]:
                  - generic [ref=e99]: G
                  - generic [ref=e100]: r
                  - generic [ref=e101]: o
                  - generic [ref=e102]: w
                  - generic [ref=e103]: t
                  - generic [ref=e104]: h
                  - generic [ref=e105]: .
            - generic [ref=e106]:
              - link "Initiate Project" [ref=e107] [cursor=pointer]:
                - /url: /en/contact
                - generic [ref=e108]:
                  - text: Initiate Project
                  - img [ref=e109]
              - link "Contact Us" [ref=e111] [cursor=pointer]:
                - /url: /en/work
                - generic [ref=e112]: Contact Us
          - generic [ref=e113]:
            - img [ref=e115]
            - img [ref=e118]
        - generic [ref=e122]:
          - paragraph [ref=e123]: Trusted by leading companies
          - region "Partner logos" [ref=e124]:
            - generic [ref=e125]:
              - list [ref=e126]:
                - listitem [ref=e127]:
                  - generic [ref=e129]:
                    - img [ref=e130]
                    - generic [ref=e133]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e134]:
                  - generic [ref=e136]:
                    - img [ref=e137]
                    - generic [ref=e140]: Lindener Ratsstuben
                - listitem [ref=e141]:
                  - generic [ref=e143]:
                    - img [ref=e144]
                    - generic [ref=e147]: Sanitär Batherm
              - list [ref=e148]:
                - listitem [ref=e149]:
                  - generic [ref=e151]:
                    - img [ref=e152]
                    - generic [ref=e155]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e156]:
                  - generic [ref=e158]:
                    - img [ref=e159]
                    - generic [ref=e162]: Lindener Ratsstuben
                - listitem [ref=e163]:
                  - generic [ref=e165]:
                    - img [ref=e166]
                    - generic [ref=e169]: Sanitär Batherm
              - list [ref=e170]:
                - listitem [ref=e171]:
                  - generic [ref=e173]:
                    - img [ref=e174]
                    - generic [ref=e177]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e178]:
                  - generic [ref=e180]:
                    - img [ref=e181]
                    - generic [ref=e184]: Lindener Ratsstuben
                - listitem [ref=e185]:
                  - generic [ref=e187]:
                    - img [ref=e188]
                    - generic [ref=e191]: Sanitär Batherm
              - list [ref=e192]:
                - listitem [ref=e193]:
                  - generic [ref=e195]:
                    - img [ref=e196]
                    - generic [ref=e199]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e200]:
                  - generic [ref=e202]:
                    - img [ref=e203]
                    - generic [ref=e206]: Lindener Ratsstuben
                - listitem [ref=e207]:
                  - generic [ref=e209]:
                    - img [ref=e210]
                    - generic [ref=e213]: Sanitär Batherm
        - generic [ref=e218]:
          - generic [ref=e219]:
            - generic [ref=e220]: 0.0Seconds
            - generic [ref=e221]: 0.5 Seconds Ø Load Time
            - generic [ref=e222]: Ø Load Time
          - generic [ref=e223]:
            - generic [ref=e224]: 0Percent
            - generic [ref=e225]: 100 Percent Code Ownership
            - generic [ref=e226]: Code Ownership
          - generic [ref=e227]:
            - generic [ref=e228]: 0Hours
            - generic [ref=e229]: 24 Hours Availability
            - generic [ref=e230]: Availability
          - generic [ref=e231]:
            - generic [ref=e232]: Profit
            - generic [ref=e233]: Focused
        - generic [ref=e236]:
          - generic [ref=e237]:
            - heading "Traditional vs. Coday" [level=2] [ref=e238]
            - paragraph [ref=e239]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e241]:
            - rowgroup [ref=e242]:
              - row "Metric Traditional Agency Coday" [ref=e243]:
                - columnheader "Metric" [ref=e244]
                - columnheader "Traditional Agency" [ref=e245]
                - columnheader "Coday" [ref=e246]:
                  - generic [ref=e247]: Coday
            - rowgroup [ref=e248]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e249]:
                - rowheader "Speed" [ref=e250]
                - cell "Weeks or Months (Bloated)" [ref=e251]:
                  - img [ref=e252]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e254]:
                  - generic [ref=e255]:
                    - img [ref=e256]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e258]:
                - rowheader "Pricing Model" [ref=e259]
                - cell "Hourly Rates & Hidden Costs" [ref=e260]:
                  - img [ref=e261]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e263]:
                  - generic [ref=e264]:
                    - img [ref=e265]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e267]:
                - rowheader "Technology" [ref=e268]
                - cell "WordPress / Builders (Slow)" [ref=e269]:
                  - img [ref=e270]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e272]:
                  - generic [ref=e273]:
                    - img [ref=e274]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e276]:
                - rowheader "Rights" [ref=e277]
                - cell "Vendor Lock-in" [ref=e278]:
                  - img [ref=e279]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e281]:
                  - generic [ref=e282]:
                    - img [ref=e283]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e285]:
                - rowheader "Contact" [ref=e286]
                - cell "Account Manager (Middleman)" [ref=e287]:
                  - img [ref=e288]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e290]:
                  - generic [ref=e291]:
                    - img [ref=e292]
                    - text: Direct Developer Access
        - generic [ref=e297]:
          - generic [ref=e298]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e299]:
              - generic [ref=e300]:
                - generic [ref=e301]: Traditional
                - generic [ref=e302]: Agencies
              - text: Are History.
            - generic [ref=e303]:
              - paragraph [ref=e304]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e305]:
                - strong [ref=e306]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - generic [ref=e309]:
            - generic [ref=e311]: Loading...
            - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e313]
        - generic [ref=e316]:
          - generic [ref=e317]:
            - generic [ref=e318]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e319]:
              - generic [ref=e320]:
                - generic [ref=e321]: We
                - generic [ref=e322]: offer
              - text: Premium Services.
          - generic [ref=e324]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e327] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e329]:
                - img [ref=e332]
                - heading "Web Development" [level=3] [ref=e335]
                - paragraph [ref=e336]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e337]:
                - text: Learn more
                - img [ref=e339]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e343] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e345]:
                - img [ref=e348]
                - heading "UX/UI Design" [level=3] [ref=e351]
                - paragraph [ref=e352]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e353]:
                - text: Learn more
                - img [ref=e355]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e359] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e361]:
                - img [ref=e364]
                - heading "Digital Growth" [level=3] [ref=e367]
                - paragraph [ref=e368]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e369]:
                - text: Learn more
                - img [ref=e371]
        - generic [ref=e375]:
          - generic [ref=e376]:
            - generic [ref=e377]:
              - paragraph [ref=e378]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e379]
              - paragraph [ref=e380]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e382] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e383]
          - link [ref=e387] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e388]:
              - generic [ref=e390]:
                - generic [ref=e392]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e394]'
              - generic [ref=e396]:
                - generic [ref=e397]:
                  - generic [ref=e398]: Web Development & Lead Gen
                  - generic [ref=e399]: HVAC & Sanitary
                  - generic [ref=e400]: Next.js, Tailwind
                - generic [ref=e401]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e402]
                  - generic [ref=e403]:
                    - text: Case Study ansehen
                    - img [ref=e404]
        - generic [ref=e408]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e409]:
            - generic [ref=e410]:
              - generic [ref=e411]: Tailored
              - generic [ref=e412]: solutions
              - generic [ref=e413]: for
            - text: Your Industry.
          - generic [ref=e414]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e416] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e417]:
                - img [ref=e420]
                - heading "Craft & Construction" [level=3] [ref=e422]
                - paragraph [ref=e423]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e425] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e426]:
                - img [ref=e429]
                - heading "Real Estate" [level=3] [ref=e431]
                - paragraph [ref=e432]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e434] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e435]:
                - img [ref=e438]
                - heading "Online Shop" [level=3] [ref=e440]
                - paragraph [ref=e441]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e443] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e444]:
                - img [ref=e447]
                - heading "Consulting" [level=3] [ref=e449]
                - paragraph [ref=e450]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e452] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e453]:
                - img [ref=e456]
                - heading "Health" [level=3] [ref=e458]
                - paragraph [ref=e459]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e460]:
          - generic [ref=e461]:
            - generic [ref=e462]:
              - generic [ref=e463]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e464]
            - region "Partner logos" [ref=e465]:
              - generic [ref=e466]:
                - list [ref=e467]:
                  - listitem [ref=e468]:
                    - generic [ref=e470]: React 19
                  - listitem [ref=e471]:
                    - generic [ref=e473]: Next.js 15
                  - listitem [ref=e474]:
                    - generic [ref=e476]: TypeScript
                  - listitem [ref=e477]:
                    - generic [ref=e479]: Tailwind v4
                  - listitem [ref=e480]:
                    - generic [ref=e482]: Sanity CMS
                  - listitem [ref=e483]:
                    - generic [ref=e485]: Supabase
                  - listitem [ref=e486]:
                    - generic [ref=e488]: Vercel
                - list [ref=e489]:
                  - listitem [ref=e490]:
                    - generic [ref=e492]: React 19
                  - listitem [ref=e493]:
                    - generic [ref=e495]: Next.js 15
                  - listitem [ref=e496]:
                    - generic [ref=e498]: TypeScript
                  - listitem [ref=e499]:
                    - generic [ref=e501]: Tailwind v4
                  - listitem [ref=e502]:
                    - generic [ref=e504]: Sanity CMS
                  - listitem [ref=e505]:
                    - generic [ref=e507]: Supabase
                  - listitem [ref=e508]:
                    - generic [ref=e510]: Vercel
                - list [ref=e511]:
                  - listitem [ref=e512]:
                    - generic [ref=e514]: React 19
                  - listitem [ref=e515]:
                    - generic [ref=e517]: Next.js 15
                  - listitem [ref=e518]:
                    - generic [ref=e520]: TypeScript
                  - listitem [ref=e521]:
                    - generic [ref=e523]: Tailwind v4
                  - listitem [ref=e524]:
                    - generic [ref=e526]: Sanity CMS
                  - listitem [ref=e527]:
                    - generic [ref=e529]: Supabase
                  - listitem [ref=e530]:
                    - generic [ref=e532]: Vercel
        - generic [ref=e534]:
          - generic [ref=e535]:
            - heading "Clients who Trust Us." [level=2] [ref=e536]:
              - generic [ref=e537]:
                - generic [ref=e538]: Clients
                - generic [ref=e539]: who
              - text: Trust Us.
            - paragraph [ref=e540]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e541]:
            - generic [ref=e543]:
              - img [ref=e547]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e549]':
                - img [ref=e551]
                - img [ref=e554]
                - img [ref=e557]
                - img [ref=e560]
                - img [ref=e563]
              - blockquote [ref=e565]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e566]:
                - generic [ref=e567]: M
                - generic [ref=e568]:
                  - generic [ref=e570]: Michael Weber
                  - generic [ref=e571]: Managing Director•TechVision GmbH
            - generic [ref=e573]:
              - img [ref=e577]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e579]':
                - img [ref=e581]
                - img [ref=e584]
                - img [ref=e587]
                - img [ref=e590]
                - img [ref=e593]
              - blockquote [ref=e595]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e596]:
                - generic [ref=e597]: S
                - generic [ref=e598]:
                  - generic [ref=e600]: Sarah Müller
                  - generic [ref=e601]: CMO•Digital pioneers
            - generic [ref=e603]:
              - img [ref=e607]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e609]':
                - img [ref=e611]
                - img [ref=e614]
                - img [ref=e617]
                - img [ref=e620]
                - img [ref=e623]
              - blockquote [ref=e625]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e626]:
                - generic [ref=e627]: J
                - generic [ref=e628]:
                  - generic [ref=e630]: Jan Schmidt
                  - generic [ref=e631]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e632]:
            - generic [ref=e633]:
              - generic [ref=e634]: S
              - generic [ref=e635]: M
              - generic [ref=e636]: J
              - generic [ref=e637]: P
            - generic [ref=e638]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e640]:
      - generic [ref=e641]:
        - generic [ref=e642]:
          - paragraph [ref=e643]: Trusted by innovative companies
          - region "Partner logos" [ref=e645]:
            - generic [ref=e646]:
              - list [ref=e647]:
                - listitem [ref=e648]:
                  - generic [ref=e650]:
                    - img [ref=e651]
                    - generic [ref=e654]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e655]:
                  - generic [ref=e657]:
                    - img [ref=e658]
                    - generic [ref=e661]: Lindener Ratsstuben
                - listitem [ref=e662]:
                  - generic [ref=e664]:
                    - img [ref=e665]
                    - generic [ref=e668]: Sanitär Batherm
              - list [ref=e669]:
                - listitem [ref=e670]:
                  - generic [ref=e672]:
                    - img [ref=e673]
                    - generic [ref=e676]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e677]:
                  - generic [ref=e679]:
                    - img [ref=e680]
                    - generic [ref=e683]: Lindener Ratsstuben
                - listitem [ref=e684]:
                  - generic [ref=e686]:
                    - img [ref=e687]
                    - generic [ref=e690]: Sanitär Batherm
              - list [ref=e691]:
                - listitem [ref=e692]:
                  - generic [ref=e694]:
                    - img [ref=e695]
                    - generic [ref=e698]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e699]:
                  - generic [ref=e701]:
                    - img [ref=e702]
                    - generic [ref=e705]: Lindener Ratsstuben
                - listitem [ref=e706]:
                  - generic [ref=e708]:
                    - img [ref=e709]
                    - generic [ref=e712]: Sanitär Batherm
        - generic [ref=e713]:
          - generic [ref=e714]:
            - generic [ref=e715]:
              - generic:
                - generic [ref=e716]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e717]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e718]:
              - generic [ref=e720]:
                - generic [ref=e722]: Loading...
                - img "Partnerschaft" [ref=e724]
              - generic [ref=e725]:
                - generic [ref=e726]: Resistance Member
                - generic [ref=e727]: Fight against the fluff.
          - navigation "Navigation" [ref=e728]:
            - heading "Navigation" [level=3] [ref=e729]
            - list [ref=e730]:
              - listitem [ref=e731]:
                - link "Home" [ref=e732] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e733]:
                - link "Portfolio" [ref=e734] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e735]:
                - link "About Us" [ref=e736] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e737]:
                - link "Process" [ref=e738] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e739]:
                - link "Pricing" [ref=e740] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e741]:
                - link "common.nav.main.partnerschaft" [ref=e742] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e743]:
                - link "Price Calculator" [ref=e744] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e745]:
                - link "Career" [ref=e746] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e747]:
            - heading "Services" [level=3] [ref=e748]
            - list [ref=e749]:
              - listitem [ref=e750]:
                - link "Web Development" [ref=e751] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e752]:
                - link "UI/UX Design" [ref=e753] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e754]:
                - link "SEO & Traffic" [ref=e755] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e756]:
                - link "E-Commerce" [ref=e757] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e758]:
                - link "API Integrations" [ref=e759] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e760]:
                - link "common.nav.services.fullstack.label" [ref=e761] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e762]:
                - link "Public Sector" [ref=e763] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e764]:
                - link "common.nav.industries.tech" [ref=e765] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e766]:
            - heading "common.footer.sections.regional" [level=3] [ref=e767]
            - list [ref=e768]:
              - listitem [ref=e769]:
                - link "Webdesign Hessen" [ref=e770] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e771]:
                - link "Webagentur Wetzlar" [ref=e772] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e773]:
                - link "Praxis-Website Wetzlar" [ref=e774] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e775]:
                - link "Praxis-Website Gießen" [ref=e776] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e777]:
                - link "Handwerker Wetzlar" [ref=e778] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e779]:
            - heading "Contact" [level=3] [ref=e780]
            - list [ref=e781]:
              - listitem [ref=e782]:
                - link "umut@codayweb.de" [ref=e783] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e784]:
                - link "+49 176 41195301" [ref=e785] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e786]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e787] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e789]:
          - generic [ref=e790]:
            - generic [ref=e792]:
              - img [ref=e795]
              - generic [ref=e797]: DSGVO Konform
              - generic [ref=e798]: 100% Datenschutz-konform
            - generic [ref=e800]:
              - img [ref=e803]
              - generic [ref=e805]: Vercel Edge Network
              - generic [ref=e806]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e807]:
          - navigation "Soziale Medien" [ref=e808]:
            - link "Visit us on Facebook" [ref=e809] [cursor=pointer]:
              - /url: /contact
              - img [ref=e811]
            - link "Visit us on Instagram" [ref=e813] [cursor=pointer]:
              - /url: /contact
              - img [ref=e815]
            - link "Visit us on Twitter" [ref=e817] [cursor=pointer]:
              - /url: /contact
              - img [ref=e819]
            - link "Visit us on LinkedIn" [ref=e821] [cursor=pointer]:
              - /url: /contact
              - img [ref=e823]
          - navigation "Rechtliche Informationen" [ref=e825]:
            - link "Terms" [ref=e826] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e827] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e828] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e829]: © 2026 Coday
    - generic [ref=e832]:
      - img [ref=e835]
      - heading "Ready for your next project?" [level=2] [ref=e838]:
        - text: Ready for your
        - generic [ref=e840]: next project?
      - paragraph [ref=e841]: Let's find out together how we can accelerate your digital growth. Free and without obligation.
      - link "Start project" [ref=e842] [cursor=pointer]:
        - /url: /en/contact
        - generic [ref=e843]:
          - text: Start project
          - img [ref=e845]
    - button "Menü öffnen" [ref=e848]:
      - img [ref=e850]
    - dialog "Cookie Banner" [ref=e854]:
      - generic [ref=e855]:
        - img [ref=e858]
        - generic [ref=e860]:
          - generic [ref=e861]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e862]
            - paragraph [ref=e863]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e864]:
            - link "Datenschutzerklärung" [ref=e865] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e866] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e867]:
          - button "Alle akzeptieren" [ref=e868]
          - button "Ablehnen" [ref=e869]
          - button "Einstellungen" [ref=e870]
  - generic [ref=e875] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e876]:
      - img [ref=e877]
    - generic [ref=e881]:
      - button "Open issues overlay" [ref=e882]:
        - generic [ref=e883]:
          - generic [ref=e884]: "5"
          - generic [ref=e885]: "6"
        - generic [ref=e886]:
          - text: Issue
          - generic [ref=e887]: s
      - button "Collapse issues badge" [ref=e888]:
        - img [ref=e889]
  - alert [ref=e891]
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