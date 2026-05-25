# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: syrup-cursor.spec.ts >> SyrupCursor >> Hover State Interaction: Hover over a clickable element and verify the cursor element receives an active/hover state
- Location: tests/e2e/syrup-cursor.spec.ts:61:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.getAttribute: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#syrup-cursor, .custom-cursor').first()

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
              - generic [ref=e71]: Enterprise-Grade Performance.
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]: E
                  - generic [ref=e75]: "n"
                  - generic [ref=e76]: t
                  - generic [ref=e77]: e
                  - generic [ref=e78]: r
                  - generic [ref=e79]: p
                  - generic [ref=e80]: r
                  - generic [ref=e81]: i
                  - generic [ref=e82]: s
                  - generic [ref=e83]: e
                  - generic [ref=e84]: "-"
                  - generic [ref=e85]: G
                  - generic [ref=e86]: r
                  - generic [ref=e87]: a
                  - generic [ref=e88]: d
                  - generic [ref=e89]: e
                - generic [ref=e91]:
                  - generic [ref=e92]: P
                  - generic [ref=e93]: e
                  - generic [ref=e94]: r
                  - generic [ref=e95]: f
                  - generic [ref=e96]: o
                  - generic [ref=e97]: r
                  - generic [ref=e98]: m
                  - generic [ref=e99]: a
                  - generic [ref=e100]: "n"
                  - generic [ref=e101]: c
                  - generic [ref=e102]: e
                  - generic [ref=e103]: .
            - generic [ref=e104]:
              - link "Initiate Project" [ref=e105] [cursor=pointer]:
                - /url: /en/contact
                - generic [ref=e106]:
                  - text: Initiate Project
                  - img [ref=e107]
              - link "Contact Us" [ref=e109] [cursor=pointer]:
                - /url: /en/work
                - generic [ref=e110]: Contact Us
          - generic [ref=e111]:
            - img [ref=e113]
            - img [ref=e116]
        - generic [ref=e120]:
          - paragraph [ref=e121]: Trusted by leading companies
          - region "Partner logos" [ref=e122]:
            - generic [ref=e123]:
              - list [ref=e124]:
                - listitem [ref=e125]:
                  - generic [ref=e127]:
                    - img [ref=e128]
                    - generic [ref=e131]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e132]:
                  - generic [ref=e134]:
                    - img [ref=e135]
                    - generic [ref=e138]: Lindener Ratsstuben
                - listitem [ref=e139]:
                  - generic [ref=e141]:
                    - img [ref=e142]
                    - generic [ref=e145]: Sanitär Batherm
              - list [ref=e146]:
                - listitem [ref=e147]:
                  - generic [ref=e149]:
                    - img [ref=e150]
                    - generic [ref=e153]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e154]:
                  - generic [ref=e156]:
                    - img [ref=e157]
                    - generic [ref=e160]: Lindener Ratsstuben
                - listitem [ref=e161]:
                  - generic [ref=e163]:
                    - img [ref=e164]
                    - generic [ref=e167]: Sanitär Batherm
              - list [ref=e168]:
                - listitem [ref=e169]:
                  - generic [ref=e171]:
                    - img [ref=e172]
                    - generic [ref=e175]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e176]:
                  - generic [ref=e178]:
                    - img [ref=e179]
                    - generic [ref=e182]: Lindener Ratsstuben
                - listitem [ref=e183]:
                  - generic [ref=e185]:
                    - img [ref=e186]
                    - generic [ref=e189]: Sanitär Batherm
              - list [ref=e190]:
                - listitem [ref=e191]:
                  - generic [ref=e193]:
                    - img [ref=e194]
                    - generic [ref=e197]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e198]:
                  - generic [ref=e200]:
                    - img [ref=e201]
                    - generic [ref=e204]: Lindener Ratsstuben
                - listitem [ref=e205]:
                  - generic [ref=e207]:
                    - img [ref=e208]
                    - generic [ref=e211]: Sanitär Batherm
        - generic [ref=e216]:
          - generic [ref=e217]:
            - generic [ref=e218]: 0.0Seconds
            - generic [ref=e219]: 0.5 Seconds Ø Load Time
            - generic [ref=e220]: Ø Load Time
          - generic [ref=e221]:
            - generic [ref=e222]: 0Percent
            - generic [ref=e223]: 100 Percent Code Ownership
            - generic [ref=e224]: Code Ownership
          - generic [ref=e225]:
            - generic [ref=e226]: 0Hours
            - generic [ref=e227]: 24 Hours Availability
            - generic [ref=e228]: Availability
          - generic [ref=e229]:
            - generic [ref=e230]: Profit
            - generic [ref=e231]: Focused
        - generic [ref=e234]:
          - generic [ref=e235]:
            - heading "Traditional vs. Coday" [level=2] [ref=e236]
            - paragraph [ref=e237]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e239]:
            - rowgroup [ref=e240]:
              - row "Metric Traditional Agency Coday" [ref=e241]:
                - columnheader "Metric" [ref=e242]
                - columnheader "Traditional Agency" [ref=e243]
                - columnheader "Coday" [ref=e244]:
                  - generic [ref=e245]: Coday
            - rowgroup [ref=e246]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e247]:
                - rowheader "Speed" [ref=e248]
                - cell "Weeks or Months (Bloated)" [ref=e249]:
                  - img [ref=e250]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e252]:
                  - generic [ref=e253]:
                    - img [ref=e254]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e256]:
                - rowheader "Pricing Model" [ref=e257]
                - cell "Hourly Rates & Hidden Costs" [ref=e258]:
                  - img [ref=e259]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e261]:
                  - generic [ref=e262]:
                    - img [ref=e263]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e265]:
                - rowheader "Technology" [ref=e266]
                - cell "WordPress / Builders (Slow)" [ref=e267]:
                  - img [ref=e268]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e270]:
                  - generic [ref=e271]:
                    - img [ref=e272]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e274]:
                - rowheader "Rights" [ref=e275]
                - cell "Vendor Lock-in" [ref=e276]:
                  - img [ref=e277]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e279]:
                  - generic [ref=e280]:
                    - img [ref=e281]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e283]:
                - rowheader "Contact" [ref=e284]
                - cell "Account Manager (Middleman)" [ref=e285]:
                  - img [ref=e286]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e288]:
                  - generic [ref=e289]:
                    - img [ref=e290]
                    - text: Direct Developer Access
        - generic [ref=e295]:
          - generic [ref=e296]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e297]:
              - generic [ref=e298]:
                - generic [ref=e299]: Traditional
                - generic [ref=e300]: Agencies
              - text: Are History.
            - generic [ref=e301]:
              - paragraph [ref=e302]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e303]:
                - strong [ref=e304]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e309]
        - generic [ref=e312]:
          - generic [ref=e313]:
            - generic [ref=e314]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e315]:
              - generic [ref=e316]:
                - generic [ref=e317]: We
                - generic [ref=e318]: offer
              - text: Premium Services.
          - generic [ref=e320]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e323] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e325]:
                - img [ref=e328]
                - heading "Web Development" [level=3] [ref=e331]
                - paragraph [ref=e332]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e333]:
                - text: Learn more
                - img [ref=e335]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e339] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e341]:
                - img [ref=e344]
                - heading "UX/UI Design" [level=3] [ref=e347]
                - paragraph [ref=e348]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e349]:
                - text: Learn more
                - img [ref=e351]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e355] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e357]:
                - img [ref=e360]
                - heading "Digital Growth" [level=3] [ref=e363]
                - paragraph [ref=e364]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e365]:
                - text: Learn more
                - img [ref=e367]
        - generic [ref=e371]:
          - generic [ref=e372]:
            - generic [ref=e373]:
              - paragraph [ref=e374]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e375]
              - paragraph [ref=e376]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e378] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e379]
          - link [ref=e383] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e384]:
              - generic [ref=e386]:
                - generic [ref=e388]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e390]'
              - generic [ref=e392]:
                - generic [ref=e393]:
                  - generic [ref=e394]: Web Development & Lead Gen
                  - generic [ref=e395]: HVAC & Sanitary
                  - generic [ref=e396]: Next.js, Tailwind
                - generic [ref=e397]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e398]
                  - generic [ref=e399]:
                    - text: Case Study ansehen
                    - img [ref=e400]
        - generic [ref=e404]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e405]:
            - generic [ref=e406]:
              - generic [ref=e407]: Tailored
              - generic [ref=e408]: solutions
              - generic [ref=e409]: for
            - text: Your Industry.
          - generic [ref=e410]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e412] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e413]:
                - img [ref=e416]
                - heading "Craft & Construction" [level=3] [ref=e418]
                - paragraph [ref=e419]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e421] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e422]:
                - img [ref=e425]
                - heading "Real Estate" [level=3] [ref=e427]
                - paragraph [ref=e428]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e430] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e431]:
                - img [ref=e434]
                - heading "Online Shop" [level=3] [ref=e436]
                - paragraph [ref=e437]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e439] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e440]:
                - img [ref=e443]
                - heading "Consulting" [level=3] [ref=e445]
                - paragraph [ref=e446]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e448] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e449]:
                - img [ref=e452]
                - heading "Health" [level=3] [ref=e454]
                - paragraph [ref=e455]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e456]:
          - generic [ref=e457]:
            - generic [ref=e458]:
              - generic [ref=e459]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e460]
            - region "Partner logos" [ref=e461]:
              - generic [ref=e462]:
                - list [ref=e463]:
                  - listitem [ref=e464]:
                    - generic [ref=e466]: React 19
                  - listitem [ref=e467]:
                    - generic [ref=e469]: Next.js 15
                  - listitem [ref=e470]:
                    - generic [ref=e472]: TypeScript
                  - listitem [ref=e473]:
                    - generic [ref=e475]: Tailwind v4
                  - listitem [ref=e476]:
                    - generic [ref=e478]: Sanity CMS
                  - listitem [ref=e479]:
                    - generic [ref=e481]: Supabase
                  - listitem [ref=e482]:
                    - generic [ref=e484]: Vercel
                - list [ref=e485]:
                  - listitem [ref=e486]:
                    - generic [ref=e488]: React 19
                  - listitem [ref=e489]:
                    - generic [ref=e491]: Next.js 15
                  - listitem [ref=e492]:
                    - generic [ref=e494]: TypeScript
                  - listitem [ref=e495]:
                    - generic [ref=e497]: Tailwind v4
                  - listitem [ref=e498]:
                    - generic [ref=e500]: Sanity CMS
                  - listitem [ref=e501]:
                    - generic [ref=e503]: Supabase
                  - listitem [ref=e504]:
                    - generic [ref=e506]: Vercel
                - list [ref=e507]:
                  - listitem [ref=e508]:
                    - generic [ref=e510]: React 19
                  - listitem [ref=e511]:
                    - generic [ref=e513]: Next.js 15
                  - listitem [ref=e514]:
                    - generic [ref=e516]: TypeScript
                  - listitem [ref=e517]:
                    - generic [ref=e519]: Tailwind v4
                  - listitem [ref=e520]:
                    - generic [ref=e522]: Sanity CMS
                  - listitem [ref=e523]:
                    - generic [ref=e525]: Supabase
                  - listitem [ref=e526]:
                    - generic [ref=e528]: Vercel
        - generic [ref=e530]:
          - generic [ref=e531]:
            - heading "Clients who Trust Us." [level=2] [ref=e532]:
              - generic [ref=e533]:
                - generic [ref=e534]: Clients
                - generic [ref=e535]: who
              - text: Trust Us.
            - paragraph [ref=e536]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e537]:
            - generic [ref=e539]:
              - img [ref=e543]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e545]':
                - img [ref=e547]
                - img [ref=e550]
                - img [ref=e553]
                - img [ref=e556]
                - img [ref=e559]
              - blockquote [ref=e561]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e562]:
                - generic [ref=e563]: M
                - generic [ref=e564]:
                  - generic [ref=e566]: Michael Weber
                  - generic [ref=e567]: Managing Director•TechVision GmbH
            - generic [ref=e569]:
              - img [ref=e573]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e575]':
                - img [ref=e577]
                - img [ref=e580]
                - img [ref=e583]
                - img [ref=e586]
                - img [ref=e589]
              - blockquote [ref=e591]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e592]:
                - generic [ref=e593]: S
                - generic [ref=e594]:
                  - generic [ref=e596]: Sarah Müller
                  - generic [ref=e597]: CMO•Digital pioneers
            - generic [ref=e599]:
              - img [ref=e603]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e605]':
                - img [ref=e607]
                - img [ref=e610]
                - img [ref=e613]
                - img [ref=e616]
                - img [ref=e619]
              - blockquote [ref=e621]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e622]:
                - generic [ref=e623]: J
                - generic [ref=e624]:
                  - generic [ref=e626]: Jan Schmidt
                  - generic [ref=e627]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e628]:
            - generic [ref=e629]:
              - generic [ref=e630]: S
              - generic [ref=e631]: M
              - generic [ref=e632]: J
              - generic [ref=e633]: P
            - generic [ref=e634]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e636]:
      - generic [ref=e637]:
        - generic [ref=e638]:
          - paragraph [ref=e639]: Trusted by innovative companies
          - region "Partner logos" [ref=e641]:
            - generic [ref=e642]:
              - list [ref=e643]:
                - listitem [ref=e644]:
                  - generic [ref=e646]:
                    - img [ref=e647]
                    - generic [ref=e650]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e651]:
                  - generic [ref=e653]:
                    - img [ref=e654]
                    - generic [ref=e657]: Lindener Ratsstuben
                - listitem [ref=e658]:
                  - generic [ref=e660]:
                    - img [ref=e661]
                    - generic [ref=e664]: Sanitär Batherm
              - list [ref=e665]:
                - listitem [ref=e666]:
                  - generic [ref=e668]:
                    - img [ref=e669]
                    - generic [ref=e672]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e673]:
                  - generic [ref=e675]:
                    - img [ref=e676]
                    - generic [ref=e679]: Lindener Ratsstuben
                - listitem [ref=e680]:
                  - generic [ref=e682]:
                    - img [ref=e683]
                    - generic [ref=e686]: Sanitär Batherm
              - list [ref=e687]:
                - listitem [ref=e688]:
                  - generic [ref=e690]:
                    - img [ref=e691]
                    - generic [ref=e694]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e695]:
                  - generic [ref=e697]:
                    - img [ref=e698]
                    - generic [ref=e701]: Lindener Ratsstuben
                - listitem [ref=e702]:
                  - generic [ref=e704]:
                    - img [ref=e705]
                    - generic [ref=e708]: Sanitär Batherm
        - generic [ref=e709]:
          - generic [ref=e710]:
            - generic [ref=e711]:
              - generic:
                - generic [ref=e712]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e713]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e714]:
              - generic [ref=e716]:
                - generic [ref=e718]: Loading...
                - img "Partnerschaft" [ref=e720]
              - generic [ref=e721]:
                - generic [ref=e722]: Resistance Member
                - generic [ref=e723]: Fight against the fluff.
          - navigation "Navigation" [ref=e724]:
            - heading "Navigation" [level=3] [ref=e725]
            - list [ref=e726]:
              - listitem [ref=e727]:
                - link "Home" [ref=e728] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e729]:
                - link "Portfolio" [ref=e730] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e731]:
                - link "About Us" [ref=e732] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e733]:
                - link "Process" [ref=e734] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e735]:
                - link "Pricing" [ref=e736] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e737]:
                - link "common.nav.main.partnerschaft" [ref=e738] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e739]:
                - link "Price Calculator" [ref=e740] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e741]:
                - link "Career" [ref=e742] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e743]:
            - heading "Services" [level=3] [ref=e744]
            - list [ref=e745]:
              - listitem [ref=e746]:
                - link "Web Development" [ref=e747] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e748]:
                - link "UI/UX Design" [ref=e749] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e750]:
                - link "SEO & Traffic" [ref=e751] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e752]:
                - link "E-Commerce" [ref=e753] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e754]:
                - link "API Integrations" [ref=e755] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e756]:
                - link "common.nav.services.fullstack.label" [ref=e757] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e758]:
                - link "Public Sector" [ref=e759] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e760]:
                - link "common.nav.industries.tech" [ref=e761] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e762]:
            - heading "common.footer.sections.regional" [level=3] [ref=e763]
            - list [ref=e764]:
              - listitem [ref=e765]:
                - link "Webdesign Hessen" [ref=e766] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e767]:
                - link "Webagentur Wetzlar" [ref=e768] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e769]:
                - link "Praxis-Website Wetzlar" [ref=e770] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e771]:
                - link "Praxis-Website Gießen" [ref=e772] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e773]:
                - link "Handwerker Wetzlar" [ref=e774] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e775]:
            - heading "Contact" [level=3] [ref=e776]
            - list [ref=e777]:
              - listitem [ref=e778]:
                - link "umut@codayweb.de" [ref=e779] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e780]:
                - link "+49 176 41195301" [ref=e781] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e782]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e783] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e785]:
          - generic [ref=e786]:
            - generic [ref=e788]:
              - img [ref=e791]
              - generic [ref=e793]: DSGVO Konform
              - generic [ref=e794]: 100% Datenschutz-konform
            - generic [ref=e796]:
              - img [ref=e799]
              - generic [ref=e801]: Vercel Edge Network
              - generic [ref=e802]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e803]:
          - navigation "Soziale Medien" [ref=e804]:
            - link "Visit us on Facebook" [ref=e805] [cursor=pointer]:
              - /url: /contact
              - img [ref=e807]
            - link "Visit us on Instagram" [ref=e809] [cursor=pointer]:
              - /url: /contact
              - img [ref=e811]
            - link "Visit us on Twitter" [ref=e813] [cursor=pointer]:
              - /url: /contact
              - img [ref=e815]
            - link "Visit us on LinkedIn" [ref=e817] [cursor=pointer]:
              - /url: /contact
              - img [ref=e819]
          - navigation "Rechtliche Informationen" [ref=e821]:
            - link "Terms" [ref=e822] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e823] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e824] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e825]: © 2026 Coday
    - generic [ref=e828]:
      - img [ref=e831]
      - heading "Ready for your next project?" [level=2] [ref=e834]:
        - text: Ready for your
        - generic [ref=e836]: next project?
      - paragraph [ref=e837]: Let's find out together how we can accelerate your digital growth. Free and without obligation.
      - link "Start project" [ref=e838] [cursor=pointer]:
        - /url: /en/contact
        - generic [ref=e839]:
          - text: Start project
          - img [ref=e841]
    - button "Menü öffnen" [ref=e844]:
      - img [ref=e846]
    - dialog "Cookie Banner" [ref=e850]:
      - generic [ref=e851]:
        - img [ref=e854]
        - generic [ref=e856]:
          - generic [ref=e857]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e858]
            - paragraph [ref=e859]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e860]:
            - link "Datenschutzerklärung" [ref=e861] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e862] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e863]:
          - button "Alle akzeptieren" [ref=e864]
          - button "Ablehnen" [ref=e865]
          - button "Einstellungen" [ref=e866]
  - generic [ref=e871] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e872]:
      - img [ref=e873]
    - generic [ref=e876]:
      - button "Open issues overlay" [ref=e877]:
        - generic [ref=e878]:
          - generic [ref=e879]: "5"
          - generic [ref=e880]: "6"
        - generic [ref=e881]:
          - text: Issue
          - generic [ref=e882]: s
      - button "Collapse issues badge" [ref=e883]:
        - img [ref=e884]
  - button "Hover Me" [ref=e886]
  - alert [ref=e887]
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
  33  |     expect(bodyCursor === 'none' || wrapperCursor === 'none').toBeTruthy();
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
> 81  |     const initialClass = await cursor.getAttribute('class');
      |                                       ^ Error: locator.getAttribute: Test timeout of 30000ms exceeded.
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