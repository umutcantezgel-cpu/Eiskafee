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
              - generic [ref=e71]: Award-Winning UX. Uncompromising Code.
              - generic [ref=e72]:
                - generic [ref=e73]:
                  - generic [ref=e74]: A
                  - generic [ref=e75]: w
                  - generic [ref=e76]: a
                  - generic [ref=e77]: r
                  - generic [ref=e78]: d
                  - generic [ref=e79]: "-"
                  - generic [ref=e80]: W
                  - generic [ref=e81]: i
                  - generic [ref=e82]: "n"
                  - generic [ref=e83]: "n"
                  - generic [ref=e84]: i
                  - generic [ref=e85]: "n"
                  - generic [ref=e86]: g
                - generic [ref=e88]:
                  - generic [ref=e89]: U
                  - generic [ref=e90]: X
                  - generic [ref=e91]: .
                - generic [ref=e93]:
                  - generic [ref=e94]: U
                  - generic [ref=e95]: "n"
                  - generic [ref=e96]: c
                  - generic [ref=e97]: o
                  - generic [ref=e98]: m
                  - generic [ref=e99]: p
                  - generic [ref=e100]: r
                  - generic [ref=e101]: o
                  - generic [ref=e102]: m
                  - generic [ref=e103]: i
                  - generic [ref=e104]: s
                  - generic [ref=e105]: i
                  - generic [ref=e106]: "n"
                  - generic [ref=e107]: g
                - generic [ref=e109]:
                  - generic [ref=e110]: C
                  - generic [ref=e111]: o
                  - generic [ref=e112]: d
                  - generic [ref=e113]: e
                  - generic [ref=e114]: .
            - generic [ref=e115]:
              - link "Initiate Project" [ref=e116] [cursor=pointer]:
                - /url: /en/contact
                - generic [ref=e117]:
                  - text: Initiate Project
                  - img [ref=e118]
              - link "Contact Us" [ref=e120] [cursor=pointer]:
                - /url: /en/work
                - generic [ref=e121]: Contact Us
          - generic [ref=e122]:
            - img [ref=e124]
            - img [ref=e127]
        - generic [ref=e131]:
          - paragraph [ref=e132]: Trusted by leading companies
          - region "Partner logos" [ref=e133]:
            - generic [ref=e134]:
              - list [ref=e135]:
                - listitem [ref=e136]:
                  - generic [ref=e138]:
                    - img [ref=e139]
                    - generic [ref=e142]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e143]:
                  - generic [ref=e145]:
                    - img [ref=e146]
                    - generic [ref=e149]: Lindener Ratsstuben
                - listitem [ref=e150]:
                  - generic [ref=e152]:
                    - img [ref=e153]
                    - generic [ref=e156]: Sanitär Batherm
              - list [ref=e157]:
                - listitem [ref=e158]:
                  - generic [ref=e160]:
                    - img [ref=e161]
                    - generic [ref=e164]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e165]:
                  - generic [ref=e167]:
                    - img [ref=e168]
                    - generic [ref=e171]: Lindener Ratsstuben
                - listitem [ref=e172]:
                  - generic [ref=e174]:
                    - img [ref=e175]
                    - generic [ref=e178]: Sanitär Batherm
              - list [ref=e179]:
                - listitem [ref=e180]:
                  - generic [ref=e182]:
                    - img [ref=e183]
                    - generic [ref=e186]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e187]:
                  - generic [ref=e189]:
                    - img [ref=e190]
                    - generic [ref=e193]: Lindener Ratsstuben
                - listitem [ref=e194]:
                  - generic [ref=e196]:
                    - img [ref=e197]
                    - generic [ref=e200]: Sanitär Batherm
              - list [ref=e201]:
                - listitem [ref=e202]:
                  - generic [ref=e204]:
                    - img [ref=e205]
                    - generic [ref=e208]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e209]:
                  - generic [ref=e211]:
                    - img [ref=e212]
                    - generic [ref=e215]: Lindener Ratsstuben
                - listitem [ref=e216]:
                  - generic [ref=e218]:
                    - img [ref=e219]
                    - generic [ref=e222]: Sanitär Batherm
        - generic [ref=e227]:
          - generic [ref=e228]:
            - generic [ref=e229]: 0.0Seconds
            - generic [ref=e230]: 0.5 Seconds Ø Load Time
            - generic [ref=e231]: Ø Load Time
          - generic [ref=e232]:
            - generic [ref=e233]: 0Percent
            - generic [ref=e234]: 100 Percent Code Ownership
            - generic [ref=e235]: Code Ownership
          - generic [ref=e236]:
            - generic [ref=e237]: 0Hours
            - generic [ref=e238]: 24 Hours Availability
            - generic [ref=e239]: Availability
          - generic [ref=e240]:
            - generic [ref=e241]: Profit
            - generic [ref=e242]: Focused
        - generic [ref=e245]:
          - generic [ref=e246]:
            - heading "Traditional vs. Coday" [level=2] [ref=e247]
            - paragraph [ref=e248]: Stop paying for inefficiency. Choose the agency that delivers results.
          - table [ref=e250]:
            - rowgroup [ref=e251]:
              - row "Metric Traditional Agency Coday" [ref=e252]:
                - columnheader "Metric" [ref=e253]
                - columnheader "Traditional Agency" [ref=e254]
                - columnheader "Coday" [ref=e255]:
                  - generic [ref=e256]: Coday
            - rowgroup [ref=e257]:
              - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e258]:
                - rowheader "Speed" [ref=e259]
                - cell "Weeks or Months (Bloated)" [ref=e260]:
                  - img [ref=e261]
                  - text: Weeks or Months (Bloated)
                - cell "Days or Weeks (The Coday Protocol)" [ref=e263]:
                  - generic [ref=e264]:
                    - img [ref=e265]
                    - text: Days or Weeks (The Coday Protocol)
              - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e267]:
                - rowheader "Pricing Model" [ref=e268]
                - cell "Hourly Rates & Hidden Costs" [ref=e269]:
                  - img [ref=e270]
                  - text: Hourly Rates & Hidden Costs
                - cell "Flat Rate & Transparent" [ref=e272]:
                  - generic [ref=e273]:
                    - img [ref=e274]
                    - text: Flat Rate & Transparent
              - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e276]:
                - rowheader "Technology" [ref=e277]
                - cell "WordPress / Builders (Slow)" [ref=e278]:
                  - img [ref=e279]
                  - text: WordPress / Builders (Slow)
                - cell "Next.js / React (Instant)" [ref=e281]:
                  - generic [ref=e282]:
                    - img [ref=e283]
                    - text: Next.js / React (Instant)
              - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e285]:
                - rowheader "Rights" [ref=e286]
                - cell "Vendor Lock-in" [ref=e287]:
                  - img [ref=e288]
                  - text: Vendor Lock-in
                - cell "100% Code Ownership" [ref=e290]:
                  - generic [ref=e291]:
                    - img [ref=e292]
                    - text: 100% Code Ownership
              - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e294]:
                - rowheader "Contact" [ref=e295]
                - cell "Account Manager (Middleman)" [ref=e296]:
                  - img [ref=e297]
                  - text: Account Manager (Middleman)
                - cell "Direct Developer Access" [ref=e299]:
                  - generic [ref=e300]:
                    - img [ref=e301]
                    - text: Direct Developer Access
        - generic [ref=e306]:
          - generic [ref=e307]:
            - heading "Traditional Agencies Are History." [level=2] [ref=e308]:
              - generic [ref=e309]:
                - generic [ref=e310]: Traditional
                - generic [ref=e311]: Agencies
              - text: Are History.
            - generic [ref=e312]:
              - paragraph [ref=e313]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
              - paragraph [ref=e314]:
                - strong [ref=e315]: Coday is the new Standard.
                - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e320]
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]: Our Services
            - heading "We offer Premium Services." [level=2] [ref=e326]:
              - generic [ref=e327]:
                - generic [ref=e328]: We
                - generic [ref=e329]: offer
              - text: Premium Services.
          - generic [ref=e331]:
            - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e334] [cursor=pointer]:
              - /url: /en/services/web-development
              - generic [ref=e336]:
                - img [ref=e339]
                - heading "Web Development" [level=3] [ref=e342]
                - paragraph [ref=e343]: High-performance websites and applications built with modern frameworks.
              - generic [ref=e344]:
                - text: Learn more
                - img [ref=e346]
            - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e350] [cursor=pointer]:
              - /url: /en/services/web-design
              - generic [ref=e352]:
                - img [ref=e355]
                - heading "UX/UI Design" [level=3] [ref=e358]
                - paragraph [ref=e359]: Conversion-optimized, user-centric designs for maximum performance.
              - generic [ref=e360]:
                - text: Learn more
                - img [ref=e362]
            - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e366] [cursor=pointer]:
              - /url: /en/services/seo
              - generic [ref=e368]:
                - img [ref=e371]
                - heading "Digital Growth" [level=3] [ref=e374]
                - paragraph [ref=e375]: Data-driven SEO and performance strategies to scale your enterprise.
              - generic [ref=e376]:
                - text: Learn more
                - img [ref=e378]
        - generic [ref=e382]:
          - generic [ref=e383]:
            - generic [ref=e384]:
              - paragraph [ref=e385]: Proven Results
              - heading "Our work speaks for itself." [level=2] [ref=e386]
              - paragraph [ref=e387]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
            - link "All Case Studies" [ref=e389] [cursor=pointer]:
              - /url: /en/work
              - text: All Case Studies
              - img [ref=e390]
          - link [ref=e394] [cursor=pointer]:
            - /url: /en/work/batherm
            - article [ref=e395]:
              - generic [ref=e397]:
                - generic [ref=e399]: Loading...
                - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e401]'
              - generic [ref=e403]:
                - generic [ref=e404]:
                  - generic [ref=e405]: Web Development & Lead Gen
                  - generic [ref=e406]: HVAC & Sanitary
                  - generic [ref=e407]: Next.js, Tailwind
                - generic [ref=e408]:
                  - text: Batherm
                  - heading "Batherm" [level=3] [ref=e409]
                  - generic [ref=e410]:
                    - text: Case Study ansehen
                    - img [ref=e411]
        - generic [ref=e415]:
          - heading "Tailored solutions for Your Industry." [level=2] [ref=e416]:
            - generic [ref=e417]:
              - generic [ref=e418]: Tailored
              - generic [ref=e419]: solutions
              - generic [ref=e420]: for
            - text: Your Industry.
          - generic [ref=e421]:
            - link "Craft & Construction Digital recruiting and project showcases." [ref=e423] [cursor=pointer]:
              - /url: /en/services/industries/handwerk-bau
              - generic [ref=e424]:
                - img [ref=e427]
                - heading "Craft & Construction" [level=3] [ref=e429]
                - paragraph [ref=e430]: Digital recruiting and project showcases.
            - link "Real Estate High-quality exposé presentations and lead generation." [ref=e432] [cursor=pointer]:
              - /url: /en/services/industries/immobilien-makler
              - generic [ref=e433]:
                - img [ref=e436]
                - heading "Real Estate" [level=3] [ref=e438]
                - paragraph [ref=e439]: High-quality exposé presentations and lead generation.
            - link "Online Shop High-converting shop systems." [ref=e441] [cursor=pointer]:
              - /url: /en/services/industries/ecommerce-retail
              - generic [ref=e442]:
                - img [ref=e445]
                - heading "Online Shop" [level=3] [ref=e447]
                - paragraph [ref=e448]: High-converting shop systems.
            - link "Consulting Premium brand positioning." [ref=e450] [cursor=pointer]:
              - /url: /en/services/industries/unternehmensberatung
              - generic [ref=e451]:
                - img [ref=e454]
                - heading "Consulting" [level=3] [ref=e456]
                - paragraph [ref=e457]: Premium brand positioning.
            - link "Health Trustworthy web presence." [ref=e459] [cursor=pointer]:
              - /url: /en/services/industries/aerzte-gesundheit
              - generic [ref=e460]:
                - img [ref=e463]
                - heading "Health" [level=3] [ref=e465]
                - paragraph [ref=e466]: Trustworthy web presence.
        - region "High-End Architektur für kompromisslose Performance" [ref=e467]:
          - generic [ref=e468]:
            - generic [ref=e469]:
              - generic [ref=e470]: Core Tech Stack
              - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e471]
            - region "Partner logos" [ref=e472]:
              - generic [ref=e473]:
                - list [ref=e474]:
                  - listitem [ref=e475]:
                    - generic [ref=e477]: React 19
                  - listitem [ref=e478]:
                    - generic [ref=e480]: Next.js 15
                  - listitem [ref=e481]:
                    - generic [ref=e483]: TypeScript
                  - listitem [ref=e484]:
                    - generic [ref=e486]: Tailwind v4
                  - listitem [ref=e487]:
                    - generic [ref=e489]: Sanity CMS
                  - listitem [ref=e490]:
                    - generic [ref=e492]: Supabase
                  - listitem [ref=e493]:
                    - generic [ref=e495]: Vercel
                - list [ref=e496]:
                  - listitem [ref=e497]:
                    - generic [ref=e499]: React 19
                  - listitem [ref=e500]:
                    - generic [ref=e502]: Next.js 15
                  - listitem [ref=e503]:
                    - generic [ref=e505]: TypeScript
                  - listitem [ref=e506]:
                    - generic [ref=e508]: Tailwind v4
                  - listitem [ref=e509]:
                    - generic [ref=e511]: Sanity CMS
                  - listitem [ref=e512]:
                    - generic [ref=e514]: Supabase
                  - listitem [ref=e515]:
                    - generic [ref=e517]: Vercel
                - list [ref=e518]:
                  - listitem [ref=e519]:
                    - generic [ref=e521]: React 19
                  - listitem [ref=e522]:
                    - generic [ref=e524]: Next.js 15
                  - listitem [ref=e525]:
                    - generic [ref=e527]: TypeScript
                  - listitem [ref=e528]:
                    - generic [ref=e530]: Tailwind v4
                  - listitem [ref=e531]:
                    - generic [ref=e533]: Sanity CMS
                  - listitem [ref=e534]:
                    - generic [ref=e536]: Supabase
                  - listitem [ref=e537]:
                    - generic [ref=e539]: Vercel
        - generic [ref=e541]:
          - generic [ref=e542]:
            - heading "Clients who Trust Us." [level=2] [ref=e543]:
              - generic [ref=e544]:
                - generic [ref=e545]: Clients
                - generic [ref=e546]: who
              - text: Trust Us.
            - paragraph [ref=e547]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
          - generic [ref=e548]:
            - generic [ref=e550]:
              - img [ref=e554]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e556]':
                - img [ref=e558]
                - img [ref=e561]
                - img [ref=e564]
                - img [ref=e567]
                - img [ref=e570]
              - blockquote [ref=e572]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
              - generic [ref=e573]:
                - generic [ref=e574]: M
                - generic [ref=e575]:
                  - generic [ref=e577]: Michael Weber
                  - generic [ref=e578]: Managing Director•TechVision GmbH
            - generic [ref=e580]:
              - img [ref=e584]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e586]':
                - img [ref=e588]
                - img [ref=e591]
                - img [ref=e594]
                - img [ref=e597]
                - img [ref=e600]
              - blockquote [ref=e602]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
              - generic [ref=e603]:
                - generic [ref=e604]: S
                - generic [ref=e605]:
                  - generic [ref=e607]: Sarah Müller
                  - generic [ref=e608]: CMO•Digital pioneers
            - generic [ref=e610]:
              - img [ref=e614]
              - 'generic "Bewertung: 5 von 5 Sternen" [ref=e616]':
                - img [ref=e618]
                - img [ref=e621]
                - img [ref=e624]
                - img [ref=e627]
                - img [ref=e630]
              - blockquote [ref=e632]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
              - generic [ref=e633]:
                - generic [ref=e634]: J
                - generic [ref=e635]:
                  - generic [ref=e637]: Jan Schmidt
                  - generic [ref=e638]: Head of E-Commerce•RetailGroup DACH
          - generic [ref=e639]:
            - generic [ref=e640]:
              - generic [ref=e641]: S
              - generic [ref=e642]: M
              - generic [ref=e643]: J
              - generic [ref=e644]: P
            - generic [ref=e645]:
              - text: 5.0 Star Rating
              - text: Excellence as Standard.
    - contentinfo [ref=e647]:
      - generic [ref=e648]:
        - generic [ref=e649]:
          - paragraph [ref=e650]: Trusted by innovative companies
          - region "Partner logos" [ref=e652]:
            - generic [ref=e653]:
              - list [ref=e654]:
                - listitem [ref=e655]:
                  - generic [ref=e657]:
                    - img [ref=e658]
                    - generic [ref=e661]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e662]:
                  - generic [ref=e664]:
                    - img [ref=e665]
                    - generic [ref=e668]: Lindener Ratsstuben
                - listitem [ref=e669]:
                  - generic [ref=e671]:
                    - img [ref=e672]
                    - generic [ref=e675]: Sanitär Batherm
              - list [ref=e676]:
                - listitem [ref=e677]:
                  - generic [ref=e679]:
                    - img [ref=e680]
                    - generic [ref=e683]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e684]:
                  - generic [ref=e686]:
                    - img [ref=e687]
                    - generic [ref=e690]: Lindener Ratsstuben
                - listitem [ref=e691]:
                  - generic [ref=e693]:
                    - img [ref=e694]
                    - generic [ref=e697]: Sanitär Batherm
              - list [ref=e698]:
                - listitem [ref=e699]:
                  - generic [ref=e701]:
                    - img [ref=e702]
                    - generic [ref=e705]: MS Schlüsseldienst Wetzlar
                - listitem [ref=e706]:
                  - generic [ref=e708]:
                    - img [ref=e709]
                    - generic [ref=e712]: Lindener Ratsstuben
                - listitem [ref=e713]:
                  - generic [ref=e715]:
                    - img [ref=e716]
                    - generic [ref=e719]: Sanitär Batherm
        - generic [ref=e720]:
          - generic [ref=e721]:
            - generic [ref=e722]:
              - generic:
                - generic [ref=e723]: Loading...
                - generic:
                  - img "Coday"
            - paragraph [ref=e724]: We kill inefficiency. The last agency you'll ever need.
            - generic [ref=e725]:
              - img "Partnerschaft" [ref=e729]
              - generic [ref=e730]:
                - generic [ref=e731]: Resistance Member
                - generic [ref=e732]: Fight against the fluff.
          - navigation "Navigation" [ref=e733]:
            - heading "Navigation" [level=3] [ref=e734]
            - list [ref=e735]:
              - listitem [ref=e736]:
                - link "Home" [ref=e737] [cursor=pointer]:
                  - /url: /en
              - listitem [ref=e738]:
                - link "Portfolio" [ref=e739] [cursor=pointer]:
                  - /url: /en/work
              - listitem [ref=e740]:
                - link "About Us" [ref=e741] [cursor=pointer]:
                  - /url: /en/about
              - listitem [ref=e742]:
                - link "Process" [ref=e743] [cursor=pointer]:
                  - /url: /en/process
              - listitem [ref=e744]:
                - link "Pricing" [ref=e745] [cursor=pointer]:
                  - /url: /en/pricing
              - listitem [ref=e746]:
                - link "common.nav.main.partnerschaft" [ref=e747] [cursor=pointer]:
                  - /url: /en/partnerschaft
              - listitem [ref=e748]:
                - link "Price Calculator" [ref=e749] [cursor=pointer]:
                  - /url: /en/calculator
              - listitem [ref=e750]:
                - link "Career" [ref=e751] [cursor=pointer]:
                  - /url: /en/career
          - navigation "Services" [ref=e752]:
            - heading "Services" [level=3] [ref=e753]
            - list [ref=e754]:
              - listitem [ref=e755]:
                - link "Web Development" [ref=e756] [cursor=pointer]:
                  - /url: /en/services/web-development
              - listitem [ref=e757]:
                - link "UI/UX Design" [ref=e758] [cursor=pointer]:
                  - /url: /en/services/ui-ux-design
              - listitem [ref=e759]:
                - link "SEO & Traffic" [ref=e760] [cursor=pointer]:
                  - /url: /en/services/seo
              - listitem [ref=e761]:
                - link "E-Commerce" [ref=e762] [cursor=pointer]:
                  - /url: /en/services/ecommerce
              - listitem [ref=e763]:
                - link "API Integrations" [ref=e764] [cursor=pointer]:
                  - /url: /en/services/web-development/api-integrations
              - listitem [ref=e765]:
                - link "common.nav.services.fullstack.label" [ref=e766] [cursor=pointer]:
                  - /url: /en/services/web-development/full-stack-entwicklung
              - listitem [ref=e767]:
                - link "Public Sector" [ref=e768] [cursor=pointer]:
                  - /url: /en/oeffentliche-auftraege
              - listitem [ref=e769]:
                - link "common.nav.industries.tech" [ref=e770] [cursor=pointer]:
                  - /url: /en/services/industries/startups-tech
          - navigation "common.footer.sections.regional" [ref=e771]:
            - heading "common.footer.sections.regional" [level=3] [ref=e772]
            - list [ref=e773]:
              - listitem [ref=e774]:
                - link "Webdesign Hessen" [ref=e775] [cursor=pointer]:
                  - /url: /en/standorte/hessen
              - listitem [ref=e776]:
                - link "Webagentur Wetzlar" [ref=e777] [cursor=pointer]:
                  - /url: /en/standorte/wetzlar
              - listitem [ref=e778]:
                - link "Praxis-Website Wetzlar" [ref=e779] [cursor=pointer]:
                  - /url: /en/branchen/arzt/wetzlar
              - listitem [ref=e780]:
                - link "Praxis-Website Gießen" [ref=e781] [cursor=pointer]:
                  - /url: /en/branchen/arzt/giessen
              - listitem [ref=e782]:
                - link "Handwerker Wetzlar" [ref=e783] [cursor=pointer]:
                  - /url: /en/branchen/handwerker/wetzlar
          - generic [ref=e784]:
            - heading "Contact" [level=3] [ref=e785]
            - list [ref=e786]:
              - listitem [ref=e787]:
                - link "umut@codayweb.de" [ref=e788] [cursor=pointer]:
                  - /url: mailto:umut@codayweb.de
              - listitem [ref=e789]:
                - link "+49 176 41195301" [ref=e790] [cursor=pointer]:
                  - /url: tel:+4917641195301
              - listitem [ref=e791]:
                - text: Coday
                - text: Wetzlar, Deutschland
                - text: (Remote weltweit)
            - link "Start Project" [ref=e792] [cursor=pointer]:
              - /url: /en/contact
        - generic "Vertrauenssiegel und Zertifikate" [ref=e794]:
          - generic [ref=e795]:
            - generic [ref=e797]:
              - img [ref=e800]
              - generic [ref=e802]: DSGVO Konform
              - generic [ref=e803]: 100% Datenschutz-konform
            - generic [ref=e805]:
              - img [ref=e808]
              - generic [ref=e810]: Vercel Edge Network
              - generic [ref=e811]: Global verteilt für maximale Geschwindigkeit
        - generic [ref=e812]:
          - navigation "Soziale Medien" [ref=e813]:
            - link "Visit us on Facebook" [ref=e814] [cursor=pointer]:
              - /url: /contact
              - img [ref=e816]
            - link "Visit us on Instagram" [ref=e818] [cursor=pointer]:
              - /url: /contact
              - img [ref=e820]
            - link "Visit us on Twitter" [ref=e822] [cursor=pointer]:
              - /url: /contact
              - img [ref=e824]
            - link "Visit us on LinkedIn" [ref=e826] [cursor=pointer]:
              - /url: /contact
              - img [ref=e828]
          - navigation "Rechtliche Informationen" [ref=e830]:
            - link "Terms" [ref=e831] [cursor=pointer]:
              - /url: /en/legal/agb
            - link "Privacy" [ref=e832] [cursor=pointer]:
              - /url: /en/legal/datenschutz
            - link "Imprint" [ref=e833] [cursor=pointer]:
              - /url: /en/legal/impressum
            - generic [ref=e834]: © 2026 Coday
    - generic [ref=e837]:
      - img [ref=e840]
      - heading "Ready for your next project?" [level=2] [ref=e843]:
        - text: Ready for your
        - generic [ref=e845]: next project?
      - paragraph [ref=e846]: Let's find out together how we can accelerate your digital growth. Free and without obligation.
      - link "Start project" [ref=e847] [cursor=pointer]:
        - /url: /en/contact
        - generic [ref=e848]:
          - text: Start project
          - img [ref=e850]
    - button "Menü öffnen" [ref=e853]:
      - img [ref=e855]
    - dialog "Cookie Banner" [ref=e859]:
      - generic [ref=e860]:
        - img [ref=e863]
        - generic [ref=e865]:
          - generic [ref=e866]:
            - heading "Privatsphäre-Einstellungen" [level=3] [ref=e867]
            - paragraph [ref=e868]: Wir verwenden Cookies und ähnliche Technologien, um Ihr Erlebnis zu verbessern, Leistung zu messen und personalisierte Inhalte anzuzeigen. Einige sind essenziell, andere helfen uns, diese Website und Ihre Erfahrung zu verbessern.
          - generic [ref=e869]:
            - link "Datenschutzerklärung" [ref=e870] [cursor=pointer]:
              - /url: /legal/privacy
            - link "Impressum" [ref=e871] [cursor=pointer]:
              - /url: /legal/imprint
        - generic [ref=e872]:
          - button "Alle akzeptieren" [ref=e873]
          - button "Ablehnen" [ref=e874]
          - button "Einstellungen" [ref=e875]
  - generic [ref=e880] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e881]:
      - img [ref=e882]
    - generic [ref=e885]:
      - button "Open issues overlay" [ref=e886]:
        - generic [ref=e887]:
          - generic [ref=e888]: "5"
          - generic [ref=e889]: "6"
        - generic [ref=e890]:
          - text: Issue
          - generic [ref=e891]: s
      - button "Collapse issues badge" [ref=e892]:
        - img [ref=e893]
  - alert [ref=e895]
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