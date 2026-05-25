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
            - generic [ref=e68]:
              - link "Initiate Project" [ref=e69] [cursor=pointer]:
                - /url: /en/contact
                - generic [ref=e70]:
                  - text: Initiate Project
                  - img [ref=e71]
              - link "Contact Us" [ref=e73] [cursor=pointer]:
                - /url: /en/work
                - generic [ref=e74]: Contact Us
          - generic [ref=e75]:
            - img [ref=e77]
            - img [ref=e80]
        - generic [ref=e84]:
          - paragraph [ref=e85]: Trusted by leading companies
          - region "Partner logos" [ref=e86]:
            - generic [ref=e87]:
              - list [ref=e88]:
                - listitem [ref=e89]:
                  - generic [ref=e91]:
                    - img [ref=e92]
                    - generic [ref=e95]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e96]:
                  - generic [ref=e98]:
                    - img [ref=e99]
                    - generic [ref=e102]: Lindener Ratsstuben
                - listitem [ref=e103]:
                  - generic [ref=e105]:
                    - img [ref=e106]
                    - generic [ref=e109]: Sanitär Batherm
              - list [ref=e110]:
                - listitem [ref=e111]:
                  - generic [ref=e113]:
                    - img [ref=e114]
                    - generic [ref=e117]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e118]:
                  - generic [ref=e120]:
                    - img [ref=e121]
                    - generic [ref=e124]: Lindener Ratsstuben
                - listitem [ref=e125]:
                  - generic [ref=e127]:
                    - img [ref=e128]
                    - generic [ref=e131]: Sanitär Batherm
              - list [ref=e132]:
                - listitem [ref=e133]:
                  - generic [ref=e135]:
                    - img [ref=e136]
                    - generic [ref=e139]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e140]:
                  - generic [ref=e142]:
                    - img [ref=e143]
                    - generic [ref=e146]: Lindener Ratsstuben
                - listitem [ref=e147]:
                  - generic [ref=e149]:
                    - img [ref=e150]
                    - generic [ref=e153]: Sanitär Batherm
              - list [ref=e154]:
                - listitem [ref=e155]:
                  - generic [ref=e157]:
                    - img [ref=e158]
                    - generic [ref=e161]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e162]:
                  - generic [ref=e164]:
                    - img [ref=e165]
                    - generic [ref=e168]: Lindener Ratsstuben
                - listitem [ref=e169]:
                  - generic [ref=e171]:
                    - img [ref=e172]
                    - generic [ref=e175]: Sanitär Batherm
        - generic [ref=e180]:
          - generic [ref=e181]:
            - generic [ref=e182]: 0.0Seconds
            - generic [ref=e183]: 0.5 Seconds Ø Load Time
            - generic [ref=e184]: Ø Load Time
          - generic [ref=e185]:
            - generic [ref=e186]: 0Percent
            - generic [ref=e187]: 100 Percent Code Ownership
            - generic [ref=e188]: Code Ownership
          - generic [ref=e189]:
            - generic [ref=e190]: 0Hours
            - generic [ref=e191]: 24 Hours Availability
            - generic [ref=e192]: Availability
          - generic [ref=e193]:
            - generic [ref=e194]: Profit
            - generic [ref=e195]: Focused
        - generic [ref=e198]:
          - generic [ref=e199]:
            - heading "Traditional vs. Coday" [level=2] [ref=e200]
            - paragraph [ref=e201]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e203]:
            - rowgroup [ref=e204]:
              - row "Metric Traditional Agency Coday" [ref=e205]:
                - columnheader "Metric" [ref=e206]
                - columnheader "Traditional Agency" [ref=e207]
                - columnheader "Coday" [ref=e208]:
                  - generic [ref=e209]: Coday
            - rowgroup [ref=e210]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e211]:
                - rowheader "Speed" [ref=e212]
                - cell "Weeks or Months (Bloated)" [ref=e213]:
                  - img [ref=e214]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e216]:
                  - generic [ref=e217]:
                    - img [ref=e218]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e220]:
                - rowheader "Pricing Model" [ref=e221]
                - cell "Hourly Rates & Hidden Costs" [ref=e222]:
                  - img [ref=e223]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e225]:
                  - generic [ref=e226]:
                    - img [ref=e227]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e229]:
                - rowheader "Technology" [ref=e230]
                - cell "WordPress / Builders (Slow)" [ref=e231]:
                  - img [ref=e232]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e234]:
                  - generic [ref=e235]:
                    - img [ref=e236]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e238]:
                - rowheader "Rights" [ref=e239]
                - cell "Vendor Lock-in" [ref=e240]:
                  - img [ref=e241]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e243]:
                  - generic [ref=e244]:
                    - img [ref=e245]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e247]:
                - rowheader "Contact" [ref=e248]
                - cell "Account Manager (Middleman)" [ref=e249]:
                  - img [ref=e250]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e252]:
                  - generic [ref=e253]:
                    - img [ref=e254]
                    - text: Direct Developer Access
        - generic [ref=e259]:
          - generic [ref=e260]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e261]:
              - generic [ref=e262]:
                - generic [ref=e263]: Traditional
                - generic [ref=e264]: Agencies
              - text: Are History.
            - generic [ref=e265]:
              - paragraph [ref=e266]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e267]:
                - strong [ref=e268]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e273]
        - generic [ref=e276]:
          - generic [ref=e277]:
            - generic [ref=e278]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e279]:
              - generic [ref=e280]:
                - generic [ref=e281]: We
                - generic [ref=e282]: offer
              - text: Premium Services.
          - generic [ref=e284]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e287] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e289]:
                - img [ref=e292]
                - heading "Web Development" [level=3] [ref=e295]
                - paragraph [ref=e296]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e297]:
                - text: Learn more
                - img [ref=e299]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e303] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e305]:
                - img [ref=e308]
                - heading "UX/UI Design" [level=3] [ref=e311]
                - paragraph [ref=e312]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e313]:
                - text: Learn more
                - img [ref=e315]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e319] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e321]:
                - img [ref=e324]
                - heading "Digital Growth" [level=3] [ref=e327]
                - paragraph [ref=e328]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e329]:
                - text: Learn more
                - img [ref=e331]
        - generic [ref=e335]:
          - generic [ref=e336]:
            - generic [ref=e337]:
              - paragraph [ref=e338]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e339]
              - paragraph [ref=e340]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e342] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e343]
          - link [ref=e347] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e348]:
              - generic [ref=e350]:
                - generic [ref=e352]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e354]'
              - generic [ref=e356]:
                - generic [ref=e357]:
                  - generic [ref=e358]: Web Development & Lead Gen
                  - generic [ref=e359]: HVAC & Sanitary
                  - generic [ref=e360]: Next.js, Tailwind
                - generic [ref=e361]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e362]
                  - generic [ref=e363]:
                    - text: Case Study ansehen
                    - img [ref=e364]
        - generic [ref=e368]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e369]:
            - generic [ref=e370]:
              - generic [ref=e371]: Tailored
              - generic [ref=e372]: solutions
              - generic [ref=e373]: for
            - text: Your Industry.
          - generic [ref=e374]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e376] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e377]:
                - img [ref=e380]
                - heading "Craft & Construction" [level=3] [ref=e382]
                - paragraph [ref=e383]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e385] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e386]:
                - img [ref=e389]
                - heading "Real Estate" [level=3] [ref=e391]
                - paragraph [ref=e392]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e394] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e395]:
                - img [ref=e398]
                - heading "Online Shop" [level=3] [ref=e400]
                - paragraph [ref=e401]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e403] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e404]:
                - img [ref=e407]
                - heading "Consulting" [level=3] [ref=e409]
                - paragraph [ref=e410]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e412] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e413]:
                - img [ref=e416]
                - heading "Health" [level=3] [ref=e418]
                - paragraph [ref=e419]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e420]:
          - generic [ref=e421]:
            - generic [ref=e422]:
              - generic [ref=e423]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e424]
            - region "Partner logos" [ref=e425]:
              - generic [ref=e426]:
                - list [ref=e427]:
                  - listitem [ref=e428]:
                    - generic [ref=e430]: React 19
                  - listitem [ref=e431]:
                    - generic [ref=e433]: Next.js 15
                  - listitem [ref=e434]:
                    - generic [ref=e436]: TypeScript
                  - listitem [ref=e437]:
                    - generic [ref=e439]: Tailwind v4
                  - listitem [ref=e440]:
                    - generic [ref=e442]: Sanity CMS
                  - listitem [ref=e443]:
                    - generic [ref=e445]: Supabase
                  - listitem [ref=e446]:
                    - generic [ref=e448]: Vercel
                - list [ref=e449]:
                  - listitem [ref=e450]:
                    - generic [ref=e452]: React 19
                  - listitem [ref=e453]:
                    - generic [ref=e455]: Next.js 15
                  - listitem [ref=e456]:
                    - generic [ref=e458]: TypeScript
                  - listitem [ref=e459]:
                    - generic [ref=e461]: Tailwind v4
                  - listitem [ref=e462]:
                    - generic [ref=e464]: Sanity CMS
                  - listitem [ref=e465]:
                    - generic [ref=e467]: Supabase
                  - listitem [ref=e468]:
                    - generic [ref=e470]: Vercel
                - list [ref=e471]:
                  - listitem [ref=e472]:
                    - generic [ref=e474]: React 19
                  - listitem [ref=e475]:
                    - generic [ref=e477]: Next.js 15
                  - listitem [ref=e478]:
                    - generic [ref=e480]: TypeScript
                  - listitem [ref=e481]:
                    - generic [ref=e483]: Tailwind v4
                  - listitem [ref=e484]:
                    - generic [ref=e486]: Sanity CMS
                  - listitem [ref=e487]:
                    - generic [ref=e489]: Supabase
                  - listitem [ref=e490]:
                    - generic [ref=e492]: Vercel
        - generic [ref=e494]:
          - generic [ref=e495]:
            - heading "Clients who Trust Us." [level=2] [ref=e496]:
              - generic [ref=e497]:
                - generic [ref=e498]: Clients
                - generic [ref=e499]: who
              - text: Trust Us.
            - paragraph [ref=e500]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e501]:
            - generic [ref=e503]:
              - img [ref=e507]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e509]':
                - img [ref=e511]
                - img [ref=e514]
                - img [ref=e517]
                - img [ref=e520]
                - img [ref=e523]
              - blockquote [ref=e525]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e526]:
                - generic [ref=e527]: M
                - generic [ref=e528]:
                  - generic [ref=e530]: Michael Weber
                  - generic [ref=e531]: Managing Director•TechVision GmbH
            - generic [ref=e533]:
              - img [ref=e537]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e539]':
                - img [ref=e541]
                - img [ref=e544]
                - img [ref=e547]
                - img [ref=e550]
                - img [ref=e553]
              - blockquote [ref=e555]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e556]:
                - generic [ref=e557]: S
                - generic [ref=e558]:
                  - generic [ref=e560]: Sarah Müller
                  - generic [ref=e561]: CMO•Digital pioneers
            - generic [ref=e563]:
              - img [ref=e567]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e569]':
                - img [ref=e571]
                - img [ref=e574]
                - img [ref=e577]
                - img [ref=e580]
                - img [ref=e583]
              - blockquote [ref=e585]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e586]:
                - generic [ref=e587]: J
                - generic [ref=e588]:
                  - generic [ref=e590]: Jan Schmidt
                  - generic [ref=e591]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e592]:
            - generic [ref=e593]:
              - generic [ref=e594]: S
              - generic [ref=e595]: M
              - generic [ref=e596]: J
              - generic [ref=e597]: P
            - generic [ref=e598]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e600]:
      - generic [ref=e601]:
        - generic [ref=e602]:
          - paragraph [ref=e603]: Trusted by innovative companies
          - region "Partner logos" [ref=e605]:
            - generic [ref=e606]:
              - list [ref=e607]:
                - listitem [ref=e608]:
                  - generic [ref=e610]:
                    - img [ref=e611]
                    - generic [ref=e614]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e615]:
                  - generic [ref=e617]:
                    - img [ref=e618]
                    - generic [ref=e621]: Lindener Ratsstuben
                - listitem [ref=e622]:
                  - generic [ref=e624]:
                    - img [ref=e625]
                    - generic [ref=e628]: Sanitär Batherm
              - list [ref=e629]:
                - listitem [ref=e630]:
                  - generic [ref=e632]:
                    - img [ref=e633]
                    - generic [ref=e636]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e637]:
                  - generic [ref=e639]:
                    - img [ref=e640]
                    - generic [ref=e643]: Lindener Ratsstuben
                - listitem [ref=e644]:
                  - generic [ref=e646]:
                    - img [ref=e647]
                    - generic [ref=e650]: Sanitär Batherm
              - list [ref=e651]:
                - listitem [ref=e652]:
                  - generic [ref=e654]:
                    - img [ref=e655]
                    - generic [ref=e658]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e659]:
                  - generic [ref=e661]:
                    - img [ref=e662]
                    - generic [ref=e665]: Lindener Ratsstuben
                - listitem [ref=e666]:
                  - generic [ref=e668]:
                    - img [ref=e669]
                    - generic [ref=e672]: Sanitär Batherm
        - generic [ref=e673]:
          - generic [ref=e674]:
            - generic [ref=e675]:
              - generic:
                - generic [ref=e676]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e677]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e678]:
              - generic [ref=e680]:
                - generic [ref=e682]: Loading...
                - img "Partnerschaft" [ref=e684]
              - generic [ref=e685]:
                - generic [ref=e686]: Resistance Member
                - generic [ref=e687]: Fight against the fluff.
          - navigation "Navigation" [ref=e688]:
            - heading "Navigation" [level=3] [ref=e689]
            - list [ref=e690]:
              - listitem [ref=e691]:
                - link "Home" [ref=e692] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e693]:
                - link "Portfolio" [ref=e694] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e695]:
                - link "About Us" [ref=e696] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e697]:
                - link "Process" [ref=e698] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e699]:
                - link "Pricing" [ref=e700] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e701]:
                - link "common.nav.main.partnerschaft" [ref=e702] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e703]:
                - link "Price Calculator" [ref=e704] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e705]:
                - link "Career" [ref=e706] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e707]:
            - heading "Services" [level=3] [ref=e708]
            - list [ref=e709]:
              - listitem [ref=e710]:
                - link "Web Development" [ref=e711] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e712]:
                - link "UI/UX Design" [ref=e713] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e714]:
                - link "SEO & Traffic" [ref=e715] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e716]:
                - link "E-Commerce" [ref=e717] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e718]:
                - link "API Integrations" [ref=e719] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e720]:
                - link "common.nav.services.fullstack.label" [ref=e721] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e722]:
                - link "Public Sector" [ref=e723] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e724]:
                - link "common.nav.industries.tech" [ref=e725] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e726]:
            - heading "common.footer.sections.regional" [level=3] [ref=e727]
            - list [ref=e728]:
              - listitem [ref=e729]:
                - link "Webdesign Hessen" [ref=e730] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e731]:
                - link "Webagentur Wetzlar" [ref=e732] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e733]:
                - link "Praxis-Website Wetzlar" [ref=e734] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e735]:
                - link "Praxis-Website Gießen" [ref=e736] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e737]:
                - link "Handwerker Wetzlar" [ref=e738] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e739]:
            - heading "Contact" [level=3] [ref=e740]
            - list [ref=e741]:
              - listitem [ref=e742]:
                - link "umut@codayweb.de" [ref=e743] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e744]:
                - link "+49 176 41195301" [ref=e745] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e746]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e747] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e749]:
          - generic [ref=e750]:
            - generic [ref=e752]:
              - img [ref=e755]
              - generic [ref=e757]: DSGVO Konform
              - generic [ref=e758]: 100% Datenschutz-konform
            - generic [ref=e760]:
              - img [ref=e763]
              - generic [ref=e765]: Vercel Edge Network
              - generic [ref=e766]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e767]:
          - navigation "Soziale Medien" [ref=e768]:
            - link "Visit us on Facebook" [ref=e769] [cursor=pointer]:
              - /url: /contact
              - img [ref=e771]
            - link "Visit us on Instagram" [ref=e773] [cursor=pointer]:
              - /url: /contact
              - img [ref=e775]
            - link "Visit us on Twitter" [ref=e777] [cursor=pointer]:
              - /url: /contact
              - img [ref=e779]
            - link "Visit us on LinkedIn" [ref=e781] [cursor=pointer]:
              - /url: /contact
              - img [ref=e783]
          - navigation "Rechtliche Informationen" [ref=e785]:
            - link "Terms" [ref=e786] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e787] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e788] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e789]: © 2026 Coday
    - dialog "Cookie Banner" [ref=e790]:
      - generic [ref=e791]:
        - img [ref=e794]
        - generic [ref=e796]:
          - generic [ref=e797]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e798]
            - paragraph [ref=e799]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e800]:
            - link "Datenschutzerklärung" [ref=e801] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e802] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e803]:
          - button "Alle akzeptieren" [ref=e804]
          - button "Ablehnen" [ref=e805]
          - button "Einstellungen" [ref=e806]
  - generic [ref=e811] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e812]:
      - img [ref=e813]
    - generic [ref=e816]:
      - button "Open issues overlay" [ref=e817]:
        - generic [ref=e818]:
          - generic [ref=e819]: "5"
          - generic [ref=e820]: "6"
        - generic [ref=e821]:
          - text: Issue
          - generic [ref=e822]: s
      - button "Collapse issues badge" [ref=e823]:
        - img [ref=e824]
  - alert [ref=e826]
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