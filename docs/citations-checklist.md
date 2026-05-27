# Off-Site Citations & Verzeichniseinträge (Roadmap)

Diese Checkliste dient der systematischen Erfassung von Hey Fede! in allen relevanten lokalen und überregionalen Portalen, Suchmaschinen und Branchenverzeichnissen. Eine einheitliche Datenlage (NAP-Konsistenz) ist der wichtigste Faktor für Local-SEO.

## 🚨 WICHTIG: Das NAP-Template
**NAP** steht für **N**ame, **A**ddress, **P**hone number. Dieses Template muss auf **jedem** Portal **exakt** so kopiert und eingefügt werden. Keine Abweichungen, keine anderen Schreibweisen!

```text
Name: Hey Fede! Dessertbar & Café
Straße: Langgasse 68
PLZ: 35576
Ort: Wetzlar
Bundesland: Hessen
Land: Deutschland
Telefon: 06441 7890426
E-Mail: hallo@hey-fede.de
Website: https://hey-fede.de
```

---

## 🟢 Tier 1: Die "Big Players" (Essentiell)
Diese Profile müssen zwingend existieren, verifiziert sein und zu 100% gepflegt werden (Bilder, Öffnungszeiten, Beiträge).
- [ ] **Google Unternehmensprofil** (Google Maps & Search)
- [ ] **Apple Business Connect** (Apple Maps)
- [ ] **Bing Places for Business** (Bing Maps & Yahoo)
- [ ] **Facebook Business Page**
- [ ] **Instagram Business Profile**

## 🟡 Tier 2: Gastro-spezifische Review-Portale
Hier suchen Menschen explizit nach Essen und bewerten Orte. Sehr wichtig für Social Proof und Auffindbarkeit.
- [ ] **TripAdvisor**
- [ ] **Yelp**
- [ ] **Foursquare** (City Guide)
- [ ] **Trustpilot** (Allgemeines Bewertungsportal)

## 🟠 Tier 3: Nationale Branchenverzeichnisse (Citations)
Diese Einträge bringen wertvolle Backlinks und bestätigen Google, dass das Geschäft existiert und aktiv ist.
- [ ] **Gelbe Seiten** (gelbeseiten.de)
- [ ] **Das Örtliche** (dasoertliche.de)
- [ ] **11880.com**
- [ ] **Golocal**
- [ ] **MeineStadt.de** (meinestadt.de)
- [ ] **Cylex** (cylex.de)

## 🔴 Tier 4: Lokale Verzeichnisse (Wetzlar-spezifisch)
Regionale Links senden die stärksten lokalen Relevanz-Signale an Google.
- [ ] **Stadtmarketing Wetzlar** (stadtmarketing-wetzlar.de)
- [ ] **Wetzlar.de Gewerbeverzeichnis** (falls vorhanden)
- [ ] **Lokale Gastro-Guides** (z.B. Hessen-Tourismus Seiten)
- [ ] **Wetzlar Kurier / Lokale Online-Zeitungen** (Brancheneinträge)
- [ ] **IHK Lahn-Dill** (Unternehmensdatenbank)

---

### Nach dem Eintragen:
Bitte trage die **öffentliche URL** deines neuen Profils (z.B. den TripAdvisor Link) in die Datei `src/lib/seo/schema/business.ts` im Array `sameAs` ein. 
Dies signalisiert Suchmaschinen offiziell, dass diese Profile zu "Hey Fede!" gehören.
