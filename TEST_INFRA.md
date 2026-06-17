# TEST_INFRA.md - Test-Infrastruktur & E2E-Spezifikation

Dieses Dokument beschreibt die Test-Infrastruktur und die E2E-Teststrategie für das Projekt **Hey Fede!**. Die E2E-Testsuite basiert auf Playwright und verifiziert die korrekte Umsetzung aller SEO-, A11y-, Markdown-Mirroring-, API- und Docker-Anforderungen.

---

## 1. Test-Architektur & Tiers

Die Testsuite ist in Tiers unterteilt, um eine klare Trennung zwischen statischen Validierungen, interaktiven Abläufen und API-Verhalten zu gewährleisten:

- **Tier 1: Static Navigation & Basic Layout**
  - Prüft Erreichbarkeit aller 32+ Routen
  - Verifiziert grundlegende HTML5-Struktur und Metadaten
  - Verifiziert A11y-Grundregeln (Skip-Links, Titel, Landmarks)

- **Tier 2: SEO, GEO & AEO (R1)**
  - HTML5-Hierarchie-Validierung (H1-H6 ohne Lücken)
  - Extraktion und Validierung der JSON-LD Schema.org Skripte im `<head>`
  - Überprüfung von `<figure>`, `<figcaption>` und `alt`-Textlänge für Bilder (> 10 Wörter)
  - RAG-Folgefragen-Präsenzprüfung

- **Tier 3: Semantic Accessibility & Agent Readiness (R2)**
  - Prüfung aller interaktiven Elemente auf `aria-label`, `role` und `tabindex`
  - Eindeutigkeit von `id`- und `name`-Attributen bei Formular-Eingabefeldern
  - Landmark-Vollständigkeit (`banner`, `main`, `contentinfo`, `navigation`)

- **Tier 4: Markdown Mirroring & Agentic API (R3 & R4)**
  - Prüfung auf `<link rel="alternate" type="text/markdown">` im `<head>`
  - Prüfung der Existenz und des Frontmatters von mindestens 10 `.md` Dateien unter `public/md/`
  - Validierung der `llms.txt` und `llms-full.txt`
  - API-Endpoints:
    - `GET /api/ai-agent/health` (ohne Auth, 200 OK)
    - `GET /api/ai-agent/read` (Auth-Prüfung, JSON-Struktur)
    - `POST /api/ai-agent/action` (Auth-Prüfung, Validation-Fehler)
    - Redis Rate Limiting (Simuliertes Rate-Limit / Mock)

- **Tier 5: Docker Containerization (R5)**
  - Überprüfung der Erreichbarkeit der Next.js-App im Docker-Container unter `http://localhost:39485`

---

## 2. Test-Spezifikationen nach Feature

### F1: GEO & AEO Content Refactoring

- **Ziel**: Maximale RAG- und Search-Engine-Freundlichkeit.
- **E2E-Tests**:
  - `tests/e2e/tier2_seo_aeo.spec.ts`
  - Extrahiert alle `<script type="application/ld+json">` und validiert JSON-Konformität sowie Schema.org-Typen.
  - Prüft, ob `alt`-Attribute bei Bildern > 10 Wörter lang sind.
  - Stellt sicher, dass das Content-Markup semantische HTML5-Container nutzt.

### F2: Semantic Accessibility & Agentic Readiness

- **Ziel**: Vollständige Barrierefreiheit und UCP-Readiness für autonome KI-Agenten.
- **E2E-Tests**:
  - `tests/e2e/tier3_accessibility.spec.ts`
  - Verwendet Playwrights A11y-Scans bzw. prüft interaktive Elemente explizit ab.
  - Verifiziert, dass Eingabefelder strukturierte `name`- und `id`-Attribute haben.

### F3: Markdown Mirroring (LLM-Native Indexierung)

- **Ziel**: Bereitstellung von maschinenlesbaren Inhalten für Crawler und LLMs.
- **E2E-Tests**:
  - `tests/e2e/tier4_markdown_mirror.spec.ts`
  - Prüft, ob jede öffentliche Seite ein `<link rel="alternate">` mit dem Typ `text/markdown` besitzt.
  - Validiert, dass die verlinkten `.md`-Dateien existieren und valides YAML-Frontmatter mit `title`, `ai-summary` und `canonical` aufweisen.

### F4: KI-Agenten-API

- **Ziel**: Sichere und performante Schnittstelle für KI-Agenten.
- **E2E-Tests**:
  - `tests/e2e/tier4_agent_api.spec.ts`
  - Testet API-Zugriff mit richtigem/falschem `X-API-Key` Header.
  - Verifiziert Antwortstrukturen und Fehlerbehandlung der Endpunkte.

### F5: Docker Deployment

- **Ziel**: Containerisierte Deploybarkeit ohne Vercel-Beeinträchtigung.
- **E2E-Tests**:
  - `tests/e2e/tier5_docker_deploy.spec.ts`
  - Verifiziert, dass die App im Docker-Container läuft und korrekt reagiert.

---

## 3. Playwright Konfiguration

Die E2E-Tests werden gegen den lokalen Production Server gefahren:

- **Base URL**: `http://localhost:39485`
- **Port**: `39485`
- **Command**: `npm run build && PORT=39485 npm run start`
- **Timeout**: 120s für den Server-Start

Die Konfiguration befindet sich in `playwright.config.ts`.
