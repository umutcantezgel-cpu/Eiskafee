# Original User Request

## Initial Request — 2026-06-16T20:06:51-07:00

Vollständige GEO/AEO-Transformation, Markdown-Mirroring und KI-Agenten-Infrastruktur für die bestehende Next.js 16 Webseite "Hey Fede! Dessertbar & Café" (Wetzlar). Das Projekt baut strikt auf dem bestehenden Tech-Stack auf, ohne das laufende Vercel-Deployment zu gefährden.

Working directory: /Users/umurey/Downloads/Hey Fedee/hey-fede-app
Integrity mode: development

## Bestehender Tech-Stack (nicht verändern, darauf aufbauen)

- **Framework**: Next.js 16.2.6 mit Turbopack, React 19, TypeScript
- **Styling**: Tailwind CSS 4 + Custom CSS (hey-fede-kit.css)
- **Backend**: Firebase (Firestore, Auth, Admin SDK)
- **Dependencies**: Framer Motion, Zustand, Zod, Resend, Upstash (Redis + Rate-Limit), Leaflet, Sharp, Recharts
- **Testing**: Vitest, Playwright, Testing Library
- **SEO vorhanden**: Bestehende `llms.txt`, `llms-full.txt`, Schema.org Basis, `buildMetadata()` Utility, SEO Content Blocks
- **32 öffentliche Routen**, davon ~12–15 mit relevantem Content
- **5 API-Routen** unter `/api/` (admin, auth, email, mcp, orders)

## Requirements

### R1. GEO & AEO Content Refactoring

Transformiere alle öffentlichen Content-Seiten für maximale Extrahierbarkeit durch RAG-Systeme und AI Overviews:

- Refaktoriere das HTML-Markup jeder Content-Seite zu striktem semantischem HTML5 (`<main>`, `<article>`, `<section>`, `<aside>`, `<nav>`) mit lückenloser H1–H6 Hierarchie
- Generiere tief verschachtelte JSON-LD Schema.org Skripte (WebPage, FAQPage, LocalBusiness, Restaurant, Menu, Product, BreadcrumbList) und injiziere sie in den `<head>` — Schema.org Properties auf Englisch, Inhalte auf Deutsch
- Optimiere alle `<img>`-Tags mit hyper-deskriptiven `alt`-Texten und umhülle relevante Bilder mit `<figure>`/`<figcaption>` für multimodale KI-Extrahierbarkeit
- Stelle sicher, dass jede Seite 3–4 antizipierte Folgefragen (holistische RAG-Hubs) fließend im Seiteninhalt beantwortet, ohne den Content in Micro-Pages zu zerstückeln

### R2. Semantische Accessibility (Agentic Readiness)

Stelle sicher, dass JEDES interaktive Element auf der gesamten Webseite präzise ARIA-Attribute besitzt, sodass autonome KI-Browseragenten die DOM-Struktur fehlerfrei navigieren können:

- Alle Buttons, Formulare, Links und Navigations-Elemente benötigen `aria-label`, `aria-describedby`, `role` und logische `tabindex`-Werte
- Alle Eingabefelder und Formular-Elemente benötigen eindeutige, deskriptive `id`- und `name`-Attribute (UCP-Readiness)
- Die gesamte Landmark-Struktur muss lückenlos sein: `<header role="banner">`, `<main role="main">`, `<footer role="contentinfo">`, `<nav role="navigation">`

### R3. Markdown Mirroring (LLM-Native Indexierung)

Erstelle für jede der ~12–5 öffentlichen Content-Seiten eine maschinenoptimierte Markdown-Schattenversion:

- Extrahiere den reinen Hauptinhalt (ohne Header, Footer, Sidebar, UI-Boilerplate) und konvertiere ihn in sauberes Markdown. Speichere im Verzeichnis `public/md/`
- Jede `.md`-Datei beginnt mit einem YAML-Frontmatter: `title`, `ai-summary` (dichte maschinenoptimierte Zusammenfassung), `target-entities`, `canonical` (URL der HTML-Version)
- Injiziere `<link rel="alternate" type="text/markdown" href="/md/[seitenname].md">` in den `<head>` aller betroffenen HTML-Seiten
- Aktualisiere die bestehende `llms.txt` und `llms-full.txt` mit den Markdown-Pfaden und API-Endpunkten

### R4. KI-Agenten-API (Agent Action Interface)

Implementiere eine leichtgewichtige REST-API unter `/api/ai-agent/` mit Next.js API Routes:

- `GET /api/ai-agent/read` — Abruf der Menüdaten, Öffnungszeiten, Standortinfos als strukturiertes JSON
- `POST /api/ai-agent/action` — Formular-Submits (Kontaktformular, Reservierung) als maschinenlesbare Endpunkte
- `GET /api/ai-agent/health` — Health-Check-Endpoint für Monitoring
- Authentifizierung via `X-API-Key` Header (konfigurierbar via Environment Variable `AI_AGENT_API_KEY`)
- Rate-Limiting mit dem bereits vorhandenen Upstash Redis + @upstash/ratelimit (max. 60 req/min)
- Saubere JSON-Fehlermeldungen mit HTTP-Statuscodes

### R5. Docker-Containerisierung

Erstelle ein produktionsreifes Docker-Setup, das das gesamte Projekt (Next.js App, Markdown-Routing, Agent-API) als ein zusammenhängendes Image kapselt:

- `Dockerfile` mit Multi-Stage Build (Dependencies → Build → Runtime) basierend auf `node:22-alpine`
- `docker-compose.yml` für lokale Entwicklung mit Environment-Variable-Konfiguration
- `.dockerignore` for optimale Image-Größe
- Das Docker-Setup ist ADDITIV — es gefährdet nicht das bestehende Vercel-Deployment

## Acceptance Criteria

### Semantisches HTML & Schema.org

- [ ] Jede öffentliche Content-Seite hat genau eine `<h1>`, und die H1–H6 Hierarchie hat keine Lücken (kein `<h3>` ohne vorheriges `<h2>`)
- [ ] Alle Content-Bereiche sind in korrekte Landmark-Elemente eingebettet (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`, `<footer>`)
- [ ] JSON-LD Schema.org Blöcke sind auf der Homepage, Menüseite, About-Seite und FAQ-Seite injiziert und validieren gegen schema.org Standards (keine unbekannten Types)
- [ ] Mindestens 80% aller `<img>`-Tags haben deskriptive `alt`-Texte mit mehr als 10 Wörtern

### Accessibility & ARIA

- [ ] `npx next build` kompiliert ohne Fehler
- [ ] Kein interaktiver Button oder Link ohne `aria-label`
- [ ] Alle Formular-Inputs haben zugehörige `<label>` Elemente oder `aria-label`
- [ ] Die Landmark-Struktur ist auf jeder Seite vollständig (`banner`, `main`, `contentinfo`, `navigation`)

### Markdown Mirroring

- [ ] Das Verzeichnis `public/md/` enthält mindestens 10 `.md`-Dateien
- [ ] Jede `.md`-Datei beginnt mit validem YAML-Frontmatter (enthält `title`, `ai-summary`, `canonical`)
- [ ] Der `<head>` jeder betroffenen HTML-Seite enthält ein `<link rel="alternate" type="text/markdown">` Tag
- [ ] Die aktualisierte `llms.txt` listet alle Markdown-Pfade auf

### KI-Agenten-API

- [ ] `curl -H "X-API-Key: test" http://localhost:3000/api/ai-agent/read` liefert valides JSON mit Menüdaten
- [ ] `curl http://localhost:3000/api/ai-agent/read` (ohne API-Key) liefert HTTP 401
- [ ] `curl http://localhost:3000/api/ai-agent/health` liefert HTTP 200 mit Status-JSON
- [ ] Rate-Limiting ist aktiv und blockt nach 60 Requests/Minute

### Docker

- [ ] `docker build -t hey-fede .` kompiliert erfolgreich ohne Fehler
- [ ] `docker-compose up` startet die Anwendung und sie ist unter `http://localhost:3000` erreichbar
- [ ] Die `.dockerignore` schließt `node_modules`, `.next`, `.git` aus
- [ ] Das bestehende `package.json`, `next.config.ts` und Vercel-Setup bleiben unverändert

### Code-Qualität

- [ ] `npm run build` kompiliert ohne TypeScript-Fehler
- [ ] Keine neuen Dependencies hinzugefügt, die nicht zwingend notwendig sind
- [ ] Alle neuen Dateien folgen der bestehenden Projekt-Konvention (Kebab-Case für Routen, PascalCase für Komponenten)
