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
  - status [ref=e53]
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
      - generic [ref=e136]:
        - generic [ref=e137]:
          - generic [ref=e138]: Seconds
          - generic [ref=e139]: 0.5 Seconds Ø Load Time
          - generic [ref=e140]: Ø Load Time
        - generic [ref=e141]:
          - generic [ref=e142]: Percent
          - generic [ref=e143]: 100 Percent Code Ownership
          - generic [ref=e144]: Code Ownership
        - generic [ref=e145]:
          - generic [ref=e146]: Hours
          - generic [ref=e147]: 24 Hours Availability
          - generic [ref=e148]: Availability
        - generic [ref=e149]:
          - generic [ref=e150]: Profit
          - generic [ref=e151]: Focused
      - generic [ref=e154]:
        - generic [ref=e155]:
          - heading "Traditional vs. Coday" [level=2] [ref=e156]
          - paragraph [ref=e157]: Stop paying for inefficiency. Choose the agency that delivers results.
        - table [ref=e159]:
          - rowgroup [ref=e160]:
            - row "Metric Traditional Agency Coday" [ref=e161]:
              - columnheader "Metric" [ref=e162]
              - columnheader "Traditional Agency" [ref=e163]
              - columnheader "Coday" [ref=e164]:
                - generic [ref=e165]: Coday
          - rowgroup [ref=e166]:
            - row "Speed Weeks or Months (Bloated) Days or Weeks (The Coday Protocol)" [ref=e167]:
              - rowheader "Speed" [ref=e168]
              - cell "Weeks or Months (Bloated)" [ref=e169]:
                - img [ref=e170]
                - text: Weeks or Months (Bloated)
              - cell "Days or Weeks (The Coday Protocol)" [ref=e172]:
                - generic [ref=e173]:
                  - img [ref=e174]
                  - text: Days or Weeks (The Coday Protocol)
            - row "Pricing Model Hourly Rates & Hidden Costs Flat Rate & Transparent" [ref=e176]:
              - rowheader "Pricing Model" [ref=e177]
              - cell "Hourly Rates & Hidden Costs" [ref=e178]:
                - img [ref=e179]
                - text: Hourly Rates & Hidden Costs
              - cell "Flat Rate & Transparent" [ref=e181]:
                - generic [ref=e182]:
                  - img [ref=e183]
                  - text: Flat Rate & Transparent
            - row "Technology WordPress / Builders (Slow) Next.js / React (Instant)" [ref=e185]:
              - rowheader "Technology" [ref=e186]
              - cell "WordPress / Builders (Slow)" [ref=e187]:
                - img [ref=e188]
                - text: WordPress / Builders (Slow)
              - cell "Next.js / React (Instant)" [ref=e190]:
                - generic [ref=e191]:
                  - img [ref=e192]
                  - text: Next.js / React (Instant)
            - row "Rights Vendor Lock-in 100% Code Ownership" [ref=e194]:
              - rowheader "Rights" [ref=e195]
              - cell "Vendor Lock-in" [ref=e196]:
                - img [ref=e197]
                - text: Vendor Lock-in
              - cell "100% Code Ownership" [ref=e199]:
                - generic [ref=e200]:
                  - img [ref=e201]
                  - text: 100% Code Ownership
            - row "Contact Account Manager (Middleman) Direct Developer Access" [ref=e203]:
              - rowheader "Contact" [ref=e204]
              - cell "Account Manager (Middleman)" [ref=e205]:
                - img [ref=e206]
                - text: Account Manager (Middleman)
              - cell "Direct Developer Access" [ref=e208]:
                - generic [ref=e209]:
                  - img [ref=e210]
                  - text: Direct Developer Access
      - generic [ref=e215]:
        - generic [ref=e216]:
          - heading "Traditional Agencies Are History." [level=2] [ref=e217]:
            - generic [ref=e218]:
              - generic [ref=e219]: Traditional
              - generic [ref=e220]: Agencies
            - text: Are History.
          - generic [ref=e221]:
            - paragraph [ref=e222]: Traditional agencies charge you for endless overhead, countless meetings, and outdated processes. The classic agency model wastes your valuable time and budget.
            - paragraph [ref=e223]:
              - strong [ref=e224]: Coday is the new Standard.
              - text: "Coday is the antithesis: We combine strategic design with uncompromisingly fast, custom code. No templates. No excuses. Only one goal: your maximum growth."
        - generic [ref=e227]:
          - generic [ref=e229]: Loading...
          - img "Trusting Collaboration with your Web Design Agency Coday" [ref=e231]
      - generic [ref=e234]:
        - generic [ref=e235]:
          - generic [ref=e236]: Our Services
          - heading "We offer Premium Services." [level=2] [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239]: We
              - generic [ref=e240]: offer
            - text: Premium Services.
        - generic [ref=e242]:
          - link "Web Development High-performance websites and applications built with modern frameworks. Learn more" [ref=e245] [cursor=pointer]:
            - /url: /en/services/web-development
            - generic [ref=e247]:
              - img [ref=e250]
              - heading "Web Development" [level=3] [ref=e253]
              - paragraph [ref=e254]: High-performance websites and applications built with modern frameworks.
            - generic [ref=e255]:
              - text: Learn more
              - img [ref=e257]
          - link "UX/UI Design Conversion-optimized, user-centric designs for maximum performance. Learn more" [ref=e261] [cursor=pointer]:
            - /url: /en/services/web-design
            - generic [ref=e263]:
              - img [ref=e266]
              - heading "UX/UI Design" [level=3] [ref=e269]
              - paragraph [ref=e270]: Conversion-optimized, user-centric designs for maximum performance.
            - generic [ref=e271]:
              - text: Learn more
              - img [ref=e273]
          - link "Digital Growth Data-driven SEO and performance strategies to scale your enterprise. Learn more" [ref=e277] [cursor=pointer]:
            - /url: /en/services/seo
            - generic [ref=e279]:
              - img [ref=e282]
              - heading "Digital Growth" [level=3] [ref=e285]
              - paragraph [ref=e286]: Data-driven SEO and performance strategies to scale your enterprise.
            - generic [ref=e287]:
              - text: Learn more
              - img [ref=e289]
      - generic [ref=e293]:
        - generic [ref=e294]:
          - generic [ref=e295]:
            - paragraph [ref=e296]: Proven Results
            - heading "Our work speaks for itself." [level=2] [ref=e297]
            - paragraph [ref=e298]: No assembly-line templates. Only hand-crafted high-performance platforms that exude dominance.
          - link "All Case Studies" [ref=e300] [cursor=pointer]:
            - /url: /en/work
            - text: All Case Studies
            - img [ref=e301]
        - link [ref=e305] [cursor=pointer]:
          - /url: /en/work/batherm
          - article [ref=e306]:
            - generic [ref=e308]:
              - generic [ref=e310]: Loading...
              - 'img "Web Design for HVAC Batherm: Desktop and Mobile Responsive Mockup of the new craftsmen website" [ref=e312]'
            - generic [ref=e314]:
              - generic [ref=e315]:
                - generic [ref=e316]: Web Development & Lead Gen
                - generic [ref=e317]: HVAC & Sanitary
                - generic [ref=e318]: Next.js, Tailwind
              - generic [ref=e319]:
                - text: Batherm
                - heading "Batherm" [level=3] [ref=e320]
                - generic [ref=e321]:
                  - text: Case Study ansehen
                  - img [ref=e322]
      - generic [ref=e326]:
        - heading "Tailored solutions for Your Industry." [level=2] [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]: Tailored
            - generic [ref=e330]: solutions
            - generic [ref=e331]: for
          - text: Your Industry.
        - generic [ref=e332]:
          - link "Craft & Construction Digital recruiting and project showcases." [ref=e334] [cursor=pointer]:
            - /url: /en/services/industries/handwerk-bau
            - generic [ref=e335]:
              - img [ref=e338]
              - heading "Craft & Construction" [level=3] [ref=e340]
              - paragraph [ref=e341]: Digital recruiting and project showcases.
          - link "Real Estate High-quality exposé presentations and lead generation." [ref=e343] [cursor=pointer]:
            - /url: /en/services/industries/immobilien-makler
            - generic [ref=e344]:
              - img [ref=e347]
              - heading "Real Estate" [level=3] [ref=e349]
              - paragraph [ref=e350]: High-quality exposé presentations and lead generation.
          - link "Online Shop High-converting shop systems." [ref=e352] [cursor=pointer]:
            - /url: /en/services/industries/ecommerce-retail
            - generic [ref=e353]:
              - img [ref=e356]
              - heading "Online Shop" [level=3] [ref=e358]
              - paragraph [ref=e359]: High-converting shop systems.
          - link "Consulting Premium brand positioning." [ref=e361] [cursor=pointer]:
            - /url: /en/services/industries/unternehmensberatung
            - generic [ref=e362]:
              - img [ref=e365]
              - heading "Consulting" [level=3] [ref=e367]
              - paragraph [ref=e368]: Premium brand positioning.
          - link "Health Trustworthy web presence." [ref=e370] [cursor=pointer]:
            - /url: /en/services/industries/aerzte-gesundheit
            - generic [ref=e371]:
              - img [ref=e374]
              - heading "Health" [level=3] [ref=e376]
              - paragraph [ref=e377]: Trustworthy web presence.
      - region "High-End Architektur für kompromisslose Performance" [ref=e378]:
        - generic [ref=e379]:
          - generic [ref=e380]:
            - generic [ref=e381]: Core Tech Stack
            - heading "High-End Architektur für kompromisslose Performance" [level=2] [ref=e382]
          - region "Partner logos" [ref=e383]:
            - generic [ref=e384]:
              - list [ref=e385]:
                - listitem [ref=e386]:
                  - generic [ref=e388]: React 19
                - listitem [ref=e389]:
                  - generic [ref=e391]: Next.js 15
                - listitem [ref=e392]:
                  - generic [ref=e394]: TypeScript
                - listitem [ref=e395]:
                  - generic [ref=e397]: Tailwind v4
                - listitem [ref=e398]:
                  - generic [ref=e400]: Sanity CMS
                - listitem [ref=e401]:
                  - generic [ref=e403]: Supabase
                - listitem [ref=e404]:
                  - generic [ref=e406]: Vercel
              - list [ref=e407]:
                - listitem [ref=e408]:
                  - generic [ref=e410]: React 19
                - listitem [ref=e411]:
                  - generic [ref=e413]: Next.js 15
                - listitem [ref=e414]:
                  - generic [ref=e416]: TypeScript
                - listitem [ref=e417]:
                  - generic [ref=e419]: Tailwind v4
                - listitem [ref=e420]:
                  - generic [ref=e422]: Sanity CMS
                - listitem [ref=e423]:
                  - generic [ref=e425]: Supabase
                - listitem [ref=e426]:
                  - generic [ref=e428]: Vercel
      - generic [ref=e430]:
        - generic [ref=e431]:
          - heading "Clients who Trust Us." [level=2] [ref=e432]:
            - generic [ref=e433]:
              - generic [ref=e434]: Clients
              - generic [ref=e435]: who
            - text: Trust Us.
          - paragraph [ref=e436]: "From ambitious SMEs to enterprise corporations: We deliver digital excellence you can unconditionally rely on."
        - generic [ref=e437]:
          - generic [ref=e439]:
            - img [ref=e443]
            - 'generic "Bewertung: 5 von 5 Sternen" [ref=e445]':
              - img [ref=e447]
              - img [ref=e450]
              - img [ref=e453]
              - img [ref=e456]
              - img [ref=e459]
            - blockquote [ref=e461]: "\"Coday took our online presence to the next level. The website's performance is simply breathtaking, and our conversion rates have more than doubled.\""
            - generic [ref=e462]:
              - generic [ref=e463]: M
              - generic [ref=e464]:
                - generic [ref=e466]: Michael Weber
                - generic [ref=e467]: Managing Director•TechVision GmbH
          - generic [ref=e469]:
            - img [ref=e473]
            - 'generic "Bewertung: 5 von 5 Sternen" [ref=e475]':
              - img [ref=e477]
              - img [ref=e480]
              - img [ref=e483]
              - img [ref=e486]
              - img [ref=e489]
            - blockquote [ref=e491]: "\"The collaboration was professional and results-oriented from day one. We were particularly impressed by the seamless integration of our complex backend systems into the new Next.js frontend.\""
            - generic [ref=e492]:
              - generic [ref=e493]: S
              - generic [ref=e494]:
                - generic [ref=e496]: Sarah Müller
                - generic [ref=e497]: CMO•Digital pioneers
          - generic [ref=e499]:
            - img [ref=e503]
            - 'generic "Bewertung: 5 von 5 Sternen" [ref=e505]':
              - img [ref=e507]
              - img [ref=e510]
              - img [ref=e513]
              - img [ref=e516]
              - img [ref=e519]
            - blockquote [ref=e521]: "\"As an e-commerce company, speed is crucial for us. Coday not only got our Core Web Vitals into the green zone but also created a conversion-optimized UX.\""
            - generic [ref=e522]:
              - generic [ref=e523]: J
              - generic [ref=e524]:
                - generic [ref=e526]: Jan Schmidt
                - generic [ref=e527]: Head of E-Commerce•RetailGroup DACH
        - generic [ref=e528]:
          - generic [ref=e529]:
            - generic [ref=e530]: S
            - generic [ref=e531]: M
            - generic [ref=e532]: J
            - generic [ref=e533]: P
          - generic [ref=e534]:
            - text: 5.0 Star Rating
            - text: Excellence as Standard.
  - contentinfo [ref=e536]:
    - generic [ref=e537]:
      - generic [ref=e538]:
        - paragraph [ref=e539]: Trusted by innovative companies
        - region "Partner logos" [ref=e541]:
          - generic [ref=e542]:
            - list [ref=e543]:
              - listitem [ref=e544]:
                - generic [ref=e546]:
                  - img [ref=e547]
                  - generic [ref=e550]: MS Schlüsseldienst Wetzlar
              - listitem [ref=e551]:
                - generic [ref=e553]:
                  - img [ref=e554]
                  - generic [ref=e557]: Lindener Ratsstuben
              - listitem [ref=e558]:
                - generic [ref=e560]:
                  - img [ref=e561]
                  - generic [ref=e564]: Sanitär Batherm
            - list [ref=e565]:
              - listitem [ref=e566]:
                - generic [ref=e568]:
                  - img [ref=e569]
                  - generic [ref=e572]: MS Schlüsseldienst Wetzlar
              - listitem [ref=e573]:
                - generic [ref=e575]:
                  - img [ref=e576]
                  - generic [ref=e579]: Lindener Ratsstuben
              - listitem [ref=e580]:
                - generic [ref=e582]:
                  - img [ref=e583]
                  - generic [ref=e586]: Sanitär Batherm
      - generic [ref=e587]:
        - generic [ref=e588]:
          - generic [ref=e589]:
            - generic:
              - generic [ref=e590]: Loading...
              - generic:
                - img "Coday"
          - paragraph [ref=e591]: We kill inefficiency. The last agency you'll ever need.
          - generic [ref=e592]:
            - generic [ref=e594]:
              - generic [ref=e596]: Loading...
              - img "Partnerschaft" [ref=e598]
            - generic [ref=e599]:
              - generic [ref=e600]: Resistance Member
              - generic [ref=e601]: Fight against the fluff.
        - navigation "Navigation" [ref=e602]:
          - heading "Navigation" [level=3] [ref=e603]
          - list [ref=e604]:
            - listitem [ref=e605]:
              - link "Home" [ref=e606] [cursor=pointer]:
                - /url: /en
            - listitem [ref=e607]:
              - link "Portfolio" [ref=e608] [cursor=pointer]:
                - /url: /en/work
            - listitem [ref=e609]:
              - link "About Us" [ref=e610] [cursor=pointer]:
                - /url: /en/about
            - listitem [ref=e611]:
              - link "Process" [ref=e612] [cursor=pointer]:
                - /url: /en/process
            - listitem [ref=e613]:
              - link "Pricing" [ref=e614] [cursor=pointer]:
                - /url: /en/pricing
            - listitem [ref=e615]:
              - link "common.nav.main.partnerschaft" [ref=e616] [cursor=pointer]:
                - /url: /en/partnerschaft
            - listitem [ref=e617]:
              - link "Price Calculator" [ref=e618] [cursor=pointer]:
                - /url: /en/calculator
            - listitem [ref=e619]:
              - link "Career" [ref=e620] [cursor=pointer]:
                - /url: /en/career
        - navigation "Services" [ref=e621]:
          - heading "Services" [level=3] [ref=e622]
          - list [ref=e623]:
            - listitem [ref=e624]:
              - link "Web Development" [ref=e625] [cursor=pointer]:
                - /url: /en/services/web-development
            - listitem [ref=e626]:
              - link "UI/UX Design" [ref=e627] [cursor=pointer]:
                - /url: /en/services/ui-ux-design
            - listitem [ref=e628]:
              - link "SEO & Traffic" [ref=e629] [cursor=pointer]:
                - /url: /en/services/seo
            - listitem [ref=e630]:
              - link "E-Commerce" [ref=e631] [cursor=pointer]:
                - /url: /en/services/ecommerce
            - listitem [ref=e632]:
              - link "API Integrations" [ref=e633] [cursor=pointer]:
                - /url: /en/services/web-development/api-integrations
            - listitem [ref=e634]:
              - link "common.nav.services.fullstack.label" [ref=e635] [cursor=pointer]:
                - /url: /en/services/web-development/full-stack-entwicklung
            - listitem [ref=e636]:
              - link "Public Sector" [ref=e637] [cursor=pointer]:
                - /url: /en/oeffentliche-auftraege
            - listitem [ref=e638]:
              - link "common.nav.industries.tech" [ref=e639] [cursor=pointer]:
                - /url: /en/services/industries/startups-tech
        - navigation "common.footer.sections.regional" [ref=e640]:
          - heading "common.footer.sections.regional" [level=3] [ref=e641]
          - list [ref=e642]:
            - listitem [ref=e643]:
              - link "Webdesign Hessen" [ref=e644] [cursor=pointer]:
                - /url: /en/standorte/hessen
            - listitem [ref=e645]:
              - link "Webagentur Wetzlar" [ref=e646] [cursor=pointer]:
                - /url: /en/standorte/wetzlar
            - listitem [ref=e647]:
              - link "Praxis-Website Wetzlar" [ref=e648] [cursor=pointer]:
                - /url: /en/branchen/arzt/wetzlar
            - listitem [ref=e649]:
              - link "Praxis-Website Gießen" [ref=e650] [cursor=pointer]:
                - /url: /en/branchen/arzt/giessen
            - listitem [ref=e651]:
              - link "Handwerker Wetzlar" [ref=e652] [cursor=pointer]:
                - /url: /en/branchen/handwerker/wetzlar
        - generic [ref=e653]:
          - heading "Contact" [level=3] [ref=e654]
          - list [ref=e655]:
            - listitem [ref=e656]:
              - link "umut@codayweb.de" [ref=e657] [cursor=pointer]:
                - /url: mailto:umut@codayweb.de
            - listitem [ref=e658]:
              - link "+49 176 41195301" [ref=e659] [cursor=pointer]:
                - /url: tel:+4917641195301
            - listitem [ref=e660]:
              - text: Coday
              - text: Wetzlar, Deutschland
              - text: (Remote weltweit)
          - link "Start Project" [ref=e661] [cursor=pointer]:
            - /url: /en/contact
      - generic "Vertrauenssiegel und Zertifikate" [ref=e663]:
        - generic [ref=e664]:
          - generic [ref=e666]:
            - img [ref=e669]
            - generic [ref=e671]: DSGVO Konform
            - generic [ref=e672]: 100% Datenschutz-konform
          - generic [ref=e674]:
            - img [ref=e677]
            - generic [ref=e679]: Vercel Edge Network
            - generic [ref=e680]: Global verteilt für maximale Geschwindigkeit
      - generic [ref=e681]:
        - navigation "Soziale Medien" [ref=e682]:
          - link "Visit us on Facebook" [ref=e683] [cursor=pointer]:
            - /url: /contact
            - img [ref=e685]
          - link "Visit us on Instagram" [ref=e687] [cursor=pointer]:
            - /url: /contact
            - img [ref=e689]
          - link "Visit us on Twitter" [ref=e691] [cursor=pointer]:
            - /url: /contact
            - img [ref=e693]
          - link "Visit us on LinkedIn" [ref=e695] [cursor=pointer]:
            - /url: /contact
            - img [ref=e697]
        - navigation "Rechtliche Informationen" [ref=e699]:
          - link "Terms" [ref=e700] [cursor=pointer]:
            - /url: /en/legal/agb
          - link "Privacy" [ref=e701] [cursor=pointer]:
            - /url: /en/legal/datenschutz
          - link "Imprint" [ref=e702] [cursor=pointer]:
            - /url: /en/legal/impressum
          - generic [ref=e703]: © 2026 Coday
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