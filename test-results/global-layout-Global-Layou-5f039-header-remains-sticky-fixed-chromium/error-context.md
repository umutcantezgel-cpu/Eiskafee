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
            - button "Services":
              - text: Services
              - generic:
                - img
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
          - generic:
            - button "Work":
              - text: Work
              - generic:
                - img
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
          - generic:
            - button "Resources":
              - text: Resources
              - generic:
                - img
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
          - generic:
            - button "Company":
              - text: Company
              - generic:
                - img
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
        - generic:
          - generic:
            - generic:
              - button "Lokales":
                - generic: Lokales
                - img
            - button "EN – Auf Deutsch wechseln":
              - generic:
                - img
              - generic: EN
            - link "Packages":
              - /url: /en/packages
              - generic: Packages
              - generic:
                - img
            - link "Book":
              - /url: /en/contact
              - generic: Book
              - generic:
                - img
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
            - generic [ref=e22]:
              - generic [ref=e23]: Enterprise-Grade Performance.
              - generic [ref=e24]:
                - generic [ref=e25]:
                  - generic [ref=e26]: E
                  - generic [ref=e27]: "n"
                  - generic [ref=e28]: t
                  - generic [ref=e29]: e
                  - generic [ref=e30]: r
                  - generic [ref=e31]: p
                  - generic [ref=e32]: r
                  - generic [ref=e33]: i
                  - generic [ref=e34]: s
                  - generic [ref=e35]: e
                  - generic [ref=e36]: "-"
                  - generic [ref=e37]: G
                  - generic [ref=e38]: r
                  - generic [ref=e39]: a
                  - generic [ref=e40]: d
                  - generic [ref=e41]: e
                - generic [ref=e43]:
                  - generic [ref=e44]: P
                  - generic [ref=e45]: e
                  - generic [ref=e46]: r
                  - generic [ref=e47]: f
                  - generic [ref=e48]: o
                  - generic [ref=e49]: r
                  - generic [ref=e50]: m
                  - generic [ref=e51]: a
                  - generic [ref=e52]: "n"
                  - generic [ref=e53]: c
                  - generic [ref=e54]: e
                  - generic [ref=e55]: .
            - generic [ref=e56]:
              - link "Initiate Project" [ref=e57] [cursor=pointer]:
                - /url: /en/contact
                - generic [ref=e58]:
                  - text: Initiate Project
                  - img [ref=e59]
              - link "Contact Us" [ref=e61] [cursor=pointer]:
                - /url: /en/work
                - generic [ref=e62]: Contact Us
          - generic [ref=e63]:
            - img [ref=e65]
            - img [ref=e68]
        - generic [ref=e72]:
          - paragraph [ref=e73]: Trusted by leading companies
          - region "Partner logos" [ref=e74]:
            - generic [ref=e75]:
              - list [ref=e76]:
                - listitem [ref=e77]:
                  - generic [ref=e79]:
                    - img [ref=e80]
                    - generic [ref=e83]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e84]:
                  - generic [ref=e86]:
                    - img [ref=e87]
                    - generic [ref=e90]: Lindener Ratsstuben
                - listitem [ref=e91]:
                  - generic [ref=e93]:
                    - img [ref=e94]
                    - generic [ref=e97]: Sanitär Batherm
              - list [ref=e98]:
                - listitem [ref=e99]:
                  - generic [ref=e101]:
                    - img [ref=e102]
                    - generic [ref=e105]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e106]:
                  - generic [ref=e108]:
                    - img [ref=e109]
                    - generic [ref=e112]: Lindener Ratsstuben
                - listitem [ref=e113]:
                  - generic [ref=e115]:
                    - img [ref=e116]
                    - generic [ref=e119]: Sanitär Batherm
              - list [ref=e120]:
                - listitem [ref=e121]:
                  - generic [ref=e123]:
                    - img [ref=e124]
                    - generic [ref=e127]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e128]:
                  - generic [ref=e130]:
                    - img [ref=e131]
                    - generic [ref=e134]: Lindener Ratsstuben
                - listitem [ref=e135]:
                  - generic [ref=e137]:
                    - img [ref=e138]
                    - generic [ref=e141]: Sanitär Batherm
              - list [ref=e142]:
                - listitem [ref=e143]:
                  - generic [ref=e145]:
                    - img [ref=e146]
                    - generic [ref=e149]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e150]:
                  - generic [ref=e152]:
                    - img [ref=e153]
                    - generic [ref=e156]: Lindener Ratsstuben
                - listitem [ref=e157]:
                  - generic [ref=e159]:
                    - img [ref=e160]
                    - generic [ref=e163]: Sanitär Batherm
        - generic [ref=e168]:
          - generic [ref=e169]:
            - generic [ref=e170]: 0.0Seconds
            - generic [ref=e171]: 0.5 Seconds Ø Load Time
            - generic [ref=e172]: Ø Load Time
          - generic [ref=e173]:
            - generic [ref=e174]: 0Percent
            - generic [ref=e175]: 100 Percent Code Ownership
            - generic [ref=e176]: Code Ownership
          - generic [ref=e177]:
            - generic [ref=e178]: 0Hours
            - generic [ref=e179]: 24 Hours Availability
            - generic [ref=e180]: Availability
          - generic [ref=e181]:
            - generic [ref=e182]: Profit
            - generic [ref=e183]: Focused
        - generic [ref=e186]:
          - generic [ref=e187]:
            - heading "Traditional vs. Coday" [level=2] [ref=e188]
            - paragraph [ref=e189]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e191]:
            - rowgroup [ref=e192]:
              - row "Metric Traditional Agency Coday" [ref=e193]:
                - columnheader "Metric" [ref=e194]
                - columnheader "Traditional Agency" [ref=e195]
                - columnheader "Coday" [ref=e196]:
                  - generic [ref=e197]: Coday
            - rowgroup [ref=e198]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e199]:
                - rowheader "Speed" [ref=e200]
                - cell "Weeks or Months (Bloated)" [ref=e201]:
                  - img [ref=e202]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e204]:
                  - generic [ref=e205]:
                    - img [ref=e206]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e208]:
                - rowheader "Pricing Model" [ref=e209]
                - cell "Hourly Rates & Hidden Costs" [ref=e210]:
                  - img [ref=e211]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e213]:
                  - generic [ref=e214]:
                    - img [ref=e215]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e217]:
                - rowheader "Technology" [ref=e218]
                - cell "WordPress / Builders (Slow)" [ref=e219]:
                  - img [ref=e220]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e222]:
                  - generic [ref=e223]:
                    - img [ref=e224]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e226]:
                - rowheader "Rights" [ref=e227]
                - cell "Vendor Lock-in" [ref=e228]:
                  - img [ref=e229]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e231]:
                  - generic [ref=e232]:
                    - img [ref=e233]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e235]:
                - rowheader "Contact" [ref=e236]
                - cell "Account Manager (Middleman)" [ref=e237]:
                  - img [ref=e238]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e240]:
                  - generic [ref=e241]:
                    - img [ref=e242]
                    - text: Direct Developer Access
        - generic [ref=e247]:
          - generic [ref=e248]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e249]:
              - generic [ref=e250]:
                - generic [ref=e251]: Traditional
                - generic [ref=e252]: Agencies
              - text: Are History.
            - generic [ref=e253]:
              - paragraph [ref=e254]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e255]:
                - strong [ref=e256]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e261]
        - generic [ref=e264]:
          - generic [ref=e265]:
            - generic [ref=e266]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e267]:
              - generic [ref=e268]:
                - generic [ref=e269]: We
                - generic [ref=e270]: offer
              - text: Premium Services.
          - generic [ref=e272]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e275] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e277]:
                - img [ref=e280]
                - heading "Web Development" [level=3] [ref=e283]
                - paragraph [ref=e284]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e285]:
                - text: Learn more
                - img [ref=e287]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e291] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e293]:
                - img [ref=e296]
                - heading "UX/UI Design" [level=3] [ref=e299]
                - paragraph [ref=e300]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e301]:
                - text: Learn more
                - img [ref=e303]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e307] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e309]:
                - img [ref=e312]
                - heading "Digital Growth" [level=3] [ref=e315]
                - paragraph [ref=e316]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e317]:
                - text: Learn more
                - img [ref=e319]
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]:
              - paragraph [ref=e326]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e327]
              - paragraph [ref=e328]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e330] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e331]
          - link [ref=e335] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e336]:
              - generic [ref=e338]:
                - generic [ref=e340]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e342]'
              - generic [ref=e344]:
                - generic [ref=e345]:
                  - generic [ref=e346]: Web Development & Lead Gen
                  - generic [ref=e347]: HVAC & Sanitary
                  - generic [ref=e348]: Next.js, Tailwind
                - generic [ref=e349]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e350]
                  - generic [ref=e351]:
                    - text: Case Study ansehen
                    - img [ref=e352]
        - generic [ref=e356]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e357]:
            - generic [ref=e358]:
              - generic [ref=e359]: Tailored
              - generic [ref=e360]: solutions
              - generic [ref=e361]: for
            - text: Your Industry.
          - generic [ref=e362]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e364] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e365]:
                - img [ref=e368]
                - heading "Craft & Construction" [level=3] [ref=e370]
                - paragraph [ref=e371]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e373] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e374]:
                - img [ref=e377]
                - heading "Real Estate" [level=3] [ref=e379]
                - paragraph [ref=e380]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e382] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e383]:
                - img [ref=e386]
                - heading "Online Shop" [level=3] [ref=e388]
                - paragraph [ref=e389]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e391] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e392]:
                - img [ref=e395]
                - heading "Consulting" [level=3] [ref=e397]
                - paragraph [ref=e398]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e400] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e401]:
                - img [ref=e404]
                - heading "Health" [level=3] [ref=e406]
                - paragraph [ref=e407]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e408]:
          - generic [ref=e409]:
            - generic [ref=e410]:
              - generic [ref=e411]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e412]
            - region "Partner logos" [ref=e413]:
              - generic [ref=e414]:
                - list [ref=e415]:
                  - listitem [ref=e416]:
                    - generic [ref=e418]: React 19
                  - listitem [ref=e419]:
                    - generic [ref=e421]: Next.js 15
                  - listitem [ref=e422]:
                    - generic [ref=e424]: TypeScript
                  - listitem [ref=e425]:
                    - generic [ref=e427]: Tailwind v4
                  - listitem [ref=e428]:
                    - generic [ref=e430]: Sanity CMS
                  - listitem [ref=e431]:
                    - generic [ref=e433]: Supabase
                  - listitem [ref=e434]:
                    - generic [ref=e436]: Vercel
                - list [ref=e437]:
                  - listitem [ref=e438]:
                    - generic [ref=e440]: React 19
                  - listitem [ref=e441]:
                    - generic [ref=e443]: Next.js 15
                  - listitem [ref=e444]:
                    - generic [ref=e446]: TypeScript
                  - listitem [ref=e447]:
                    - generic [ref=e449]: Tailwind v4
                  - listitem [ref=e450]:
                    - generic [ref=e452]: Sanity CMS
                  - listitem [ref=e453]:
                    - generic [ref=e455]: Supabase
                  - listitem [ref=e456]:
                    - generic [ref=e458]: Vercel
                - list [ref=e459]:
                  - listitem [ref=e460]:
                    - generic [ref=e462]: React 19
                  - listitem [ref=e463]:
                    - generic [ref=e465]: Next.js 15
                  - listitem [ref=e466]:
                    - generic [ref=e468]: TypeScript
                  - listitem [ref=e469]:
                    - generic [ref=e471]: Tailwind v4
                  - listitem [ref=e472]:
                    - generic [ref=e474]: Sanity CMS
                  - listitem [ref=e475]:
                    - generic [ref=e477]: Supabase
                  - listitem [ref=e478]:
                    - generic [ref=e480]: Vercel
        - generic [ref=e482]:
          - generic [ref=e483]:
            - heading "Clients who Trust Us." [level=2] [ref=e484]:
              - generic [ref=e485]:
                - generic [ref=e486]: Clients
                - generic [ref=e487]: who
              - text: Trust Us.
            - paragraph [ref=e488]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e489]:
            - generic [ref=e491]:
              - img [ref=e495]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e497]':
                - img [ref=e499]
                - img [ref=e502]
                - img [ref=e505]
                - img [ref=e508]
                - img [ref=e511]
              - blockquote [ref=e513]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e514]:
                - generic [ref=e515]: M
                - generic [ref=e516]:
                  - generic [ref=e518]: Michael Weber
                  - generic [ref=e519]: Managing Director•TechVision GmbH
            - generic [ref=e521]:
              - img [ref=e525]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e527]':
                - img [ref=e529]
                - img [ref=e532]
                - img [ref=e535]
                - img [ref=e538]
                - img [ref=e541]
              - blockquote [ref=e543]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e544]:
                - generic [ref=e545]: S
                - generic [ref=e546]:
                  - generic [ref=e548]: Sarah Müller
                  - generic [ref=e549]: CMO•Digital pioneers
            - generic [ref=e551]:
              - img [ref=e555]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e557]':
                - img [ref=e559]
                - img [ref=e562]
                - img [ref=e565]
                - img [ref=e568]
                - img [ref=e571]
              - blockquote [ref=e573]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e574]:
                - generic [ref=e575]: J
                - generic [ref=e576]:
                  - generic [ref=e578]: Jan Schmidt
                  - generic [ref=e579]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e580]:
            - generic [ref=e581]:
              - generic [ref=e582]: S
              - generic [ref=e583]: M
              - generic [ref=e584]: J
              - generic [ref=e585]: P
            - generic [ref=e586]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e588]:
      - generic [ref=e589]:
        - generic [ref=e590]:
          - paragraph [ref=e591]: Trusted by innovative companies
          - region "Partner logos" [ref=e593]:
            - generic [ref=e594]:
              - list [ref=e595]:
                - listitem [ref=e596]:
                  - generic [ref=e598]:
                    - img [ref=e599]
                    - generic [ref=e602]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e603]:
                  - generic [ref=e605]:
                    - img [ref=e606]
                    - generic [ref=e609]: Lindener Ratsstuben
                - listitem [ref=e610]:
                  - generic [ref=e612]:
                    - img [ref=e613]
                    - generic [ref=e616]: Sanitär Batherm
              - list [ref=e617]:
                - listitem [ref=e618]:
                  - generic [ref=e620]:
                    - img [ref=e621]
                    - generic [ref=e624]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e625]:
                  - generic [ref=e627]:
                    - img [ref=e628]
                    - generic [ref=e631]: Lindener Ratsstuben
                - listitem [ref=e632]:
                  - generic [ref=e634]:
                    - img [ref=e635]
                    - generic [ref=e638]: Sanitär Batherm
              - list [ref=e639]:
                - listitem [ref=e640]:
                  - generic [ref=e642]:
                    - img [ref=e643]
                    - generic [ref=e646]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e647]:
                  - generic [ref=e649]:
                    - img [ref=e650]
                    - generic [ref=e653]: Lindener Ratsstuben
                - listitem [ref=e654]:
                  - generic [ref=e656]:
                    - img [ref=e657]
                    - generic [ref=e660]: Sanitär Batherm
        - generic [ref=e661]:
          - generic [ref=e662]:
            - generic [ref=e663]:
              - generic:
                - generic [ref=e664]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e665]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e666]:
              - generic [ref=e668]:
                - generic [ref=e670]: Loading...
                - img "Partnerschaft" [ref=e672]
              - generic [ref=e673]:
                - generic [ref=e674]: Resistance Member
                - generic [ref=e675]: Fight against the fluff.
          - navigation "Navigation" [ref=e676]:
            - heading "Navigation" [level=3] [ref=e677]
            - list [ref=e678]:
              - listitem [ref=e679]:
                - link "Home" [ref=e680] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e681]:
                - link "Portfolio" [ref=e682] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e683]:
                - link "About Us" [ref=e684] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e685]:
                - link "Process" [ref=e686] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e687]:
                - link "Pricing" [ref=e688] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e689]:
                - link "common.nav.main.partnerschaft" [ref=e690] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e691]:
                - link "Price Calculator" [ref=e692] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e693]:
                - link "Career" [ref=e694] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e695]:
            - heading "Services" [level=3] [ref=e696]
            - list [ref=e697]:
              - listitem [ref=e698]:
                - link "Web Development" [ref=e699] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e700]:
                - link "UI/UX Design" [ref=e701] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e702]:
                - link "SEO & Traffic" [ref=e703] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e704]:
                - link "E-Commerce" [ref=e705] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e706]:
                - link "API Integrations" [ref=e707] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e708]:
                - link "common.nav.services.fullstack.label" [ref=e709] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e710]:
                - link "Public Sector" [ref=e711] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e712]:
                - link "common.nav.industries.tech" [ref=e713] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e714]:
            - heading "common.footer.sections.regional" [level=3] [ref=e715]
            - list [ref=e716]:
              - listitem [ref=e717]:
                - link "Webdesign Hessen" [ref=e718] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e719]:
                - link "Webagentur Wetzlar" [ref=e720] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e721]:
                - link "Praxis-Website Wetzlar" [ref=e722] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e723]:
                - link "Praxis-Website Gießen" [ref=e724] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e725]:
                - link "Handwerker Wetzlar" [ref=e726] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e727]:
            - heading "Contact" [level=3] [ref=e728]
            - list [ref=e729]:
              - listitem [ref=e730]:
                - link "umut@codayweb.de" [ref=e731] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e732]:
                - link "+49 176 41195301" [ref=e733] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e734]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e735] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e737]:
          - generic [ref=e738]:
            - generic [ref=e740]:
              - img [ref=e743]
              - generic [ref=e745]: DSGVO Konform
              - generic [ref=e746]: 100% Datenschutz-konform
            - generic [ref=e748]:
              - img [ref=e751]
              - generic [ref=e753]: Vercel Edge Network
              - generic [ref=e754]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e755]:
          - navigation "Soziale Medien" [ref=e756]:
            - link "Visit us on Facebook" [ref=e757] [cursor=pointer]:
              - /url: /contact
              - img [ref=e759]
            - link "Visit us on Instagram" [ref=e761] [cursor=pointer]:
              - /url: /contact
              - img [ref=e763]
            - link "Visit us on Twitter" [ref=e765] [cursor=pointer]:
              - /url: /contact
              - img [ref=e767]
            - link "Visit us on LinkedIn" [ref=e769] [cursor=pointer]:
              - /url: /contact
              - img [ref=e771]
          - navigation "Rechtliche Informationen" [ref=e773]:
            - link "Terms" [ref=e774] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e775] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e776] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e777]: © 2026 Coday
    - dialog "Cookie Banner" [ref=e778]:
      - generic [ref=e779]:
        - img [ref=e782]
        - generic [ref=e784]:
          - generic [ref=e785]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e786]
            - paragraph [ref=e787]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e788]:
            - link "Datenschutzerklärung" [ref=e789] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e790] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e791]:
          - button "Alle akzeptieren" [ref=e792]
          - button "Ablehnen" [ref=e793]
          - button "Einstellungen" [ref=e794]
  - generic [ref=e799] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e800]:
      - img [ref=e801]
    - generic [ref=e804]:
      - button "Open issues overlay" [ref=e805]:
        - generic [ref=e806]:
          - generic [ref=e807]: "5"
          - generic [ref=e808]: "6"
        - generic [ref=e809]:
          - text: Issue
          - generic [ref=e810]: s
      - button "Collapse issues badge" [ref=e811]:
        - img [ref=e812]
  - alert [ref=e814]
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