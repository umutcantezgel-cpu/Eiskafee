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
          - generic [ref=e307]:
            - generic [ref=e309]: Loading...
            - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e311]
        - generic [ref=e314]:
          - generic [ref=e315]:
            - generic [ref=e316]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e317]:
              - generic [ref=e318]:
                - generic [ref=e319]: We
                - generic [ref=e320]: offer
              - text: Premium Services.
          - generic [ref=e322]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e325] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e327]:
                - img [ref=e330]
                - heading "Web Development" [level=3] [ref=e333]
                - paragraph [ref=e334]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e335]:
                - text: Learn more
                - img [ref=e337]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e341] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e343]:
                - img [ref=e346]
                - heading "UX/UI Design" [level=3] [ref=e349]
                - paragraph [ref=e350]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e351]:
                - text: Learn more
                - img [ref=e353]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e357] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e359]:
                - img [ref=e362]
                - heading "Digital Growth" [level=3] [ref=e365]
                - paragraph [ref=e366]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e367]:
                - text: Learn more
                - img [ref=e369]
        - generic [ref=e373]:
          - generic [ref=e374]:
            - generic [ref=e375]:
              - paragraph [ref=e376]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e377]
              - paragraph [ref=e378]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e380] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e381]
          - link [ref=e385] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e386]:
              - generic [ref=e388]:
                - generic [ref=e390]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e392]'
              - generic [ref=e394]:
                - generic [ref=e395]:
                  - generic [ref=e396]: Web Development & Lead Gen
                  - generic [ref=e397]: HVAC & Sanitary
                  - generic [ref=e398]: Next.js, Tailwind
                - generic [ref=e399]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e400]
                  - generic [ref=e401]:
                    - text: Case Study ansehen
                    - img [ref=e402]
        - generic [ref=e406]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e407]:
            - generic [ref=e408]:
              - generic [ref=e409]: Tailored
              - generic [ref=e410]: solutions
              - generic [ref=e411]: for
            - text: Your Industry.
          - generic [ref=e412]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e414] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e415]:
                - img [ref=e418]
                - heading "Craft & Construction" [level=3] [ref=e420]
                - paragraph [ref=e421]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e423] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e424]:
                - img [ref=e427]
                - heading "Real Estate" [level=3] [ref=e429]
                - paragraph [ref=e430]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e432] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e433]:
                - img [ref=e436]
                - heading "Online Shop" [level=3] [ref=e438]
                - paragraph [ref=e439]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e441] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e442]:
                - img [ref=e445]
                - heading "Consulting" [level=3] [ref=e447]
                - paragraph [ref=e448]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e450] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e451]:
                - img [ref=e454]
                - heading "Health" [level=3] [ref=e456]
                - paragraph [ref=e457]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e458]:
          - generic [ref=e459]:
            - generic [ref=e460]:
              - generic [ref=e461]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e462]
            - region "Partner logos" [ref=e463]:
              - generic [ref=e464]:
                - list [ref=e465]:
                  - listitem [ref=e466]:
                    - generic [ref=e468]: React 19
                  - listitem [ref=e469]:
                    - generic [ref=e471]: Next.js 15
                  - listitem [ref=e472]:
                    - generic [ref=e474]: TypeScript
                  - listitem [ref=e475]:
                    - generic [ref=e477]: Tailwind v4
                  - listitem [ref=e478]:
                    - generic [ref=e480]: Sanity CMS
                  - listitem [ref=e481]:
                    - generic [ref=e483]: Supabase
                  - listitem [ref=e484]:
                    - generic [ref=e486]: Vercel
                - list [ref=e487]:
                  - listitem [ref=e488]:
                    - generic [ref=e490]: React 19
                  - listitem [ref=e491]:
                    - generic [ref=e493]: Next.js 15
                  - listitem [ref=e494]:
                    - generic [ref=e496]: TypeScript
                  - listitem [ref=e497]:
                    - generic [ref=e499]: Tailwind v4
                  - listitem [ref=e500]:
                    - generic [ref=e502]: Sanity CMS
                  - listitem [ref=e503]:
                    - generic [ref=e505]: Supabase
                  - listitem [ref=e506]:
                    - generic [ref=e508]: Vercel
                - list [ref=e509]:
                  - listitem [ref=e510]:
                    - generic [ref=e512]: React 19
                  - listitem [ref=e513]:
                    - generic [ref=e515]: Next.js 15
                  - listitem [ref=e516]:
                    - generic [ref=e518]: TypeScript
                  - listitem [ref=e519]:
                    - generic [ref=e521]: Tailwind v4
                  - listitem [ref=e522]:
                    - generic [ref=e524]: Sanity CMS
                  - listitem [ref=e525]:
                    - generic [ref=e527]: Supabase
                  - listitem [ref=e528]:
                    - generic [ref=e530]: Vercel
        - generic [ref=e532]:
          - generic [ref=e533]:
            - heading "Clients who Trust Us." [level=2] [ref=e534]:
              - generic [ref=e535]:
                - generic [ref=e536]: Clients
                - generic [ref=e537]: who
              - text: Trust Us.
            - paragraph [ref=e538]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e539]:
            - generic [ref=e541]:
              - img [ref=e545]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e547]':
                - img [ref=e549]
                - img [ref=e552]
                - img [ref=e555]
                - img [ref=e558]
                - img [ref=e561]
              - blockquote [ref=e563]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e564]:
                - generic [ref=e565]: M
                - generic [ref=e566]:
                  - generic [ref=e568]: Michael Weber
                  - generic [ref=e569]: Managing Director•TechVision GmbH
            - generic [ref=e571]:
              - img [ref=e575]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e577]':
                - img [ref=e579]
                - img [ref=e582]
                - img [ref=e585]
                - img [ref=e588]
                - img [ref=e591]
              - blockquote [ref=e593]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e594]:
                - generic [ref=e595]: S
                - generic [ref=e596]:
                  - generic [ref=e598]: Sarah Müller
                  - generic [ref=e599]: CMO•Digital pioneers
            - generic [ref=e601]:
              - img [ref=e605]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e607]':
                - img [ref=e609]
                - img [ref=e612]
                - img [ref=e615]
                - img [ref=e618]
                - img [ref=e621]
              - blockquote [ref=e623]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e624]:
                - generic [ref=e625]: J
                - generic [ref=e626]:
                  - generic [ref=e628]: Jan Schmidt
                  - generic [ref=e629]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e630]:
            - generic [ref=e631]:
              - generic [ref=e632]: S
              - generic [ref=e633]: M
              - generic [ref=e634]: J
              - generic [ref=e635]: P
            - generic [ref=e636]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e638]:
      - generic [ref=e639]:
        - generic [ref=e640]:
          - paragraph [ref=e641]: Trusted by innovative companies
          - region "Partner logos" [ref=e643]:
            - generic [ref=e644]:
              - list [ref=e645]:
                - listitem [ref=e646]:
                  - generic [ref=e648]:
                    - img [ref=e649]
                    - generic [ref=e652]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e653]:
                  - generic [ref=e655]:
                    - img [ref=e656]
                    - generic [ref=e659]: Lindener Ratsstuben
                - listitem [ref=e660]:
                  - generic [ref=e662]:
                    - img [ref=e663]
                    - generic [ref=e666]: Sanitär Batherm
              - list [ref=e667]:
                - listitem [ref=e668]:
                  - generic [ref=e670]:
                    - img [ref=e671]
                    - generic [ref=e674]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e675]:
                  - generic [ref=e677]:
                    - img [ref=e678]
                    - generic [ref=e681]: Lindener Ratsstuben
                - listitem [ref=e682]:
                  - generic [ref=e684]:
                    - img [ref=e685]
                    - generic [ref=e688]: Sanitär Batherm
              - list [ref=e689]:
                - listitem [ref=e690]:
                  - generic [ref=e692]:
                    - img [ref=e693]
                    - generic [ref=e696]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e697]:
                  - generic [ref=e699]:
                    - img [ref=e700]
                    - generic [ref=e703]: Lindener Ratsstuben
                - listitem [ref=e704]:
                  - generic [ref=e706]:
                    - img [ref=e707]
                    - generic [ref=e710]: Sanitär Batherm
        - generic [ref=e711]:
          - generic [ref=e712]:
            - generic [ref=e713]:
              - generic:
                - generic [ref=e714]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e715]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e716]:
              - generic [ref=e718]:
                - generic [ref=e720]: Loading...
                - img "Partnerschaft" [ref=e722]
              - generic [ref=e723]:
                - generic [ref=e724]: Resistance Member
                - generic [ref=e725]: Fight against the fluff.
          - navigation "Navigation" [ref=e726]:
            - heading "Navigation" [level=3] [ref=e727]
            - list [ref=e728]:
              - listitem [ref=e729]:
                - link "Home" [ref=e730] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e731]:
                - link "Portfolio" [ref=e732] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e733]:
                - link "About Us" [ref=e734] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e735]:
                - link "Process" [ref=e736] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e737]:
                - link "Pricing" [ref=e738] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e739]:
                - link "common.nav.main.partnerschaft" [ref=e740] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e741]:
                - link "Price Calculator" [ref=e742] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e743]:
                - link "Career" [ref=e744] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e745]:
            - heading "Services" [level=3] [ref=e746]
            - list [ref=e747]:
              - listitem [ref=e748]:
                - link "Web Development" [ref=e749] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e750]:
                - link "UI/UX Design" [ref=e751] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e752]:
                - link "SEO & Traffic" [ref=e753] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e754]:
                - link "E-Commerce" [ref=e755] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e756]:
                - link "API Integrations" [ref=e757] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e758]:
                - link "common.nav.services.fullstack.label" [ref=e759] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e760]:
                - link "Public Sector" [ref=e761] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e762]:
                - link "common.nav.industries.tech" [ref=e763] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e764]:
            - heading "common.footer.sections.regional" [level=3] [ref=e765]
            - list [ref=e766]:
              - listitem [ref=e767]:
                - link "Webdesign Hessen" [ref=e768] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e769]:
                - link "Webagentur Wetzlar" [ref=e770] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e771]:
                - link "Praxis-Website Wetzlar" [ref=e772] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e773]:
                - link "Praxis-Website Gießen" [ref=e774] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e775]:
                - link "Handwerker Wetzlar" [ref=e776] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e777]:
            - heading "Contact" [level=3] [ref=e778]
            - list [ref=e779]:
              - listitem [ref=e780]:
                - link "umut@codayweb.de" [ref=e781] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e782]:
                - link "+49 176 41195301" [ref=e783] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e784]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e785] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e787]:
          - generic [ref=e788]:
            - generic [ref=e790]:
              - img [ref=e793]
              - generic [ref=e795]: DSGVO Konform
              - generic [ref=e796]: 100% Datenschutz-konform
            - generic [ref=e798]:
              - img [ref=e801]
              - generic [ref=e803]: Vercel Edge Network
              - generic [ref=e804]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e805]:
          - navigation "Soziale Medien" [ref=e806]:
            - link "Visit us on Facebook" [ref=e807] [cursor=pointer]:
              - /url: /contact
              - img [ref=e809]
            - link "Visit us on Instagram" [ref=e811] [cursor=pointer]:
              - /url: /contact
              - img [ref=e813]
            - link "Visit us on Twitter" [ref=e815] [cursor=pointer]:
              - /url: /contact
              - img [ref=e817]
            - link "Visit us on LinkedIn" [ref=e819] [cursor=pointer]:
              - /url: /contact
              - img [ref=e821]
          - navigation "Rechtliche Informationen" [ref=e823]:
            - link "Terms" [ref=e824] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e825] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e826] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e827]: © 2026 Coday
    - generic [ref=e830]:
      - img [ref=e833]
      - heading "Ready for your next project?" [level=2] [ref=e836]:
        - text: Ready for your
        - generic [ref=e838]: next project?
      - paragraph [ref=e839]: Let's find out together how we can accelerate your digital growth. Free and without obligation.
      - link "Start project" [ref=e840] [cursor=pointer]:
        - /url: /en/contact
        - generic [ref=e841]:
          - text: Start project
          - img [ref=e843]
    - button "Menü öffnen" [ref=e846]:
      - img [ref=e848]
    - dialog "Cookie Banner" [ref=e852]:
      - generic [ref=e853]:
        - img [ref=e856]
        - generic [ref=e858]:
          - generic [ref=e859]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e860]
            - paragraph [ref=e861]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e862]:
            - link "Datenschutzerklärung" [ref=e863] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e864] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e865]:
          - button "Alle akzeptieren" [ref=e866]
          - button "Ablehnen" [ref=e867]
          - button "Einstellungen" [ref=e868]
  - generic [ref=e873] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e874]:
      - img [ref=e875]
    - generic [ref=e879]:
      - button "Open issues overlay" [ref=e880]:
        - generic [ref=e881]:
          - generic [ref=e882]: "5"
          - generic [ref=e883]: "6"
        - generic [ref=e884]:
          - text: Issue
          - generic [ref=e885]: s
      - button "Collapse issues badge" [ref=e886]:
        - img [ref=e887]
  - alert [ref=e889]
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