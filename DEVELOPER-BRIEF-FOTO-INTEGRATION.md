# Developer Brief: Echte Fotos in hey-fede.de integrieren

> **Kontext:** Die Facebook-Fotos von Hey Fede! wurden verarbeitet, SEO-konform umbenannt und
> liegen bereit in `/public/assets/photos/`. Dazu gibt es `src/lib/photos.ts` mit dem
> vollständigen TypeScript-Katalog und Helper-Funktionen. Dieses Dokument beschreibt präzise,
> wo auf der Website welches Foto eingesetzt werden soll — und wie.
>
> **Website live:** https://hey-fede.de  
> **Tech-Stack:** Next.js 16 App Router, TypeScript, Framer Motion, Tailwind (nur core classes)  
> **Fotos-Verzeichnis:** `/public/assets/photos/`  
> **Foto-Katalog:** `src/lib/photos.ts` → `PHOTOS`-Array + Helper-Funktionen

---

## Priorität 1 — Homepage: Ovale Fläche (Intro-Sektion)

**Datei:** `src/app/(public)/page.tsx`, Zeilen ~89–116  
**Was steht da:** Ein `<FoodIcon>` Placeholder mit Label "Café Atmosphäre\nFamilienfoto"  
**Was soll da hin:** Das echte Foto von **Gründerin Federica**

### Aktueller Code (Placeholder):

```tsx
<div
  className="overflow-hidden aspect-[4/5]"
  style={{ borderRadius: "44% 56% 50% 50%/52% 48% 52% 48%" }}
>
  <FoodIcon
    icon="Heart"
    label="Café Atmosphäre\nFamilienfoto"
    size="sq"
    shape="rounded-none"
    className="w-full h-full"
  />
</div>
```

### Soll-Zustand:

```tsx
<div className="relative">
  {/* Farbiger Hintergrund-Ring in Brand-Farben — damit das Foto nicht "hängt" */}
  <div
    className="absolute inset-[-8px] bg-peach/60 z-0"
    style={{ borderRadius: "48% 52% 54% 46%/50% 48% 52% 50%" }}
  />
  <div
    className="relative overflow-hidden aspect-[4/5] z-10"
    style={{ borderRadius: "44% 56% 50% 50%/52% 48% 52% 48%" }}
  >
    <Image
      src="/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg"
      alt="Federica, Gründerin des Hey Fede! Dessertbar & Café in Wetzlar, bei der Arbeit in der Küche"
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 90vw, 45vw"
      priority
    />
  </div>
</div>
```

**Styling-Anforderung:**

- Der äußere Ring (`bg-peach/60`) sorgt dafür, dass der Übergang zur Seite weich wirkt —
  gleiche organische `borderRadius`-Kurve, aber ~8px größer als die innere Form.
- Kein harter weißer Rand. Die Farbe muss aus der Hey Fede! Palette kommen:
  `--peach: #E4C0A8` oder `--cream: #FFFBF5` oder `--terracotta: #CC624C` (mit Transparenz).
- Das Foto (`team-gruenderin-federica-hey-fede-wetzlar.jpg`) ist ein Social-Media-Grafik mit
  Text-Overlay — prüfe im Browser ob `object-position` angepasst werden muss, damit
  Federicas Gesicht gut sichtbar ist (ggf. `object-top` statt `object-center`).

---

## Priorität 2 — About-Page: Gründerin-Portrait

**Datei:** `src/app/(public)/about/page.tsx`, Zeilen ~82–103  
**Was steht da:** `<FoodIcon>` Placeholder "Inhaberin Fede\nPorträt / Team-Foto"

### Soll-Zustand:

```tsx
<figure className="relative group">
  {/* Peach-Hintergrundring für organischen Übergang */}
  <div
    className="absolute inset-[-10px] bg-peach/50 z-0 transition-transform duration-700 group-hover:scale-[1.02]"
    style={{ borderRadius: "48% 52% 56% 44%/54% 48% 52% 46%" }}
  />
  <div
    className="relative overflow-hidden aspect-[4/5] z-10 transform transition-transform duration-700 group-hover:scale-105"
    style={{ borderRadius: "44% 56% 52% 48%/50% 46% 54% 50%" }}
  >
    <Image
      src="/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg"
      alt="Federica, Gründerin des Hey Fede! Dessertbar & Café in Wetzlar, bei der Arbeit in der Küche"
      fill
      className="object-cover object-top"
      sizes="(max-width: 1024px) 90vw, 45vw"
    />
  </div>
  {/* Caption-Badge bleibt bestehen */}
  <figcaption className="absolute -bottom-10 -left-10 bg-cream/80 backdrop-blur-md border border-peach/30 rounded-3xl p-6 shadow-clay transform -rotate-3 transition-transform group-hover:rotate-0">
    <div className="font-heading text-3xl text-terracotta">Fede</div>
    <div className="font-body text-sm text-brown font-black tracking-wider uppercase mt-1">
      Gründerin & Inhaberin
    </div>
  </figcaption>
</figure>
```

---

## Priorität 3 — Homepage: Feature-Cards mit Fotos

**Datei:** `src/app/(public)/page.tsx`, Zeilen ~144–160  
**Was steht da:** 4 Text-Only-Cards: Kinderecke, Wickelraum, Vegan, Hausgemacht  
**Was soll passieren:** Die 2 standortbezogenen Cards (Kinderecke, Wickelraum) bekommen ein
kleines Vorschau-Bild oben, damit sie realitätsnah wirken (wichtig für Familien-SEO).

### Soll-Zustand:

```tsx
{
  [
    {
      title: "Kinderecke",
      desc: "Spielbereich für die Kleinen",
      photo:
        "/assets/photos/laden-kinderecke-spielzeug-nahaufnahme-hey-fede-wetzlar.jpg",
      photoAlt:
        "Kinderecke mit Spielzeug im Hey Fede! Dessertbar & Café Wetzlar",
    },
    {
      title: "Wickelraum",
      desc: "Komfort für Familien",
      photo: "/assets/photos/laden-wickeltisch-babyraum-hey-fede-wetzlar.jpg",
      photoAlt: "Babyraum mit Wickeltisch im Hey Fede! Café Wetzlar",
    },
    {
      title: "Vegan",
      desc: "Vegane Optionen verfügbar",
      photo: null,
      photoAlt: null,
    },
    {
      title: "Hausgemacht",
      desc: "Alles frisch & selbst gemacht",
      photo: null,
      photoAlt: null,
    },
  ].map(({ title, desc, photo, photoAlt }) => (
    <div key={title} className="bg-beige rounded-[14px] overflow-hidden">
      {photo && (
        <div className="relative h-20 w-full">
          <Image
            src={photo}
            alt={photoAlt!}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
        </div>
      )}
      <div className="px-4 py-3.5">
        <div className="font-body font-black text-[0.84rem] text-brown">
          {title}
        </div>
        <div className="font-body text-[0.75rem] text-bark-soft mt-0.5">
          {desc}
        </div>
      </div>
    </div>
  ));
}
```

---

## Priorität 4 — SEO-Landingpages: Bilder-Sektionen

Jede SEO-Landingpage soll eine **echte Foto-Galerie-Sektion** bekommen. Nutze dabei die
Helper-Funktion `getPhotosForPage(page)` aus `src/lib/photos.ts`.

### Muster-Implementation (kann auf allen SEO-Pages eingesetzt werden):

```tsx
import { getPhotosForPage } from "@/lib/photos";
import Image from "next/image";

// Innerhalb der Page-Komponente:
const photos = getPhotosForPage("/crepes-wetzlar"); // jeweiligen Page-Slug anpassen

// In der JSX:
{
  photos.length > 0 && (
    <section className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-heading text-3xl text-charcoal mb-8 text-center">
          Unsere Crêpes — frisch gemacht
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-clay"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Foto-Zuweisung pro SEO-Page:

| Page                                | Fotos                                                                                                             |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/eiscafe-wetzlar`                  | `laden-eisvitrine-speisekarte`, `eis-spaghetti-erdbeere`, `eis-brioscia-sizilien`, `eis-vitrine-takeaway-packung` |
| `/bubble-waffles-wetzlar`           | `bubble-waffle-schokolade-eis`, `bubble-waffle-erdbeere-sahne-schokolade`                                         |
| `/crepes-wetzlar`                   | `crepe-spekulatius-karamell`, `crepe-nutella-haselnuss`                                                           |
| `/kindergeburtstag-wetzlar`         | `laden-kinderecke-spielzimmer`, `laden-kinderecke-spielzeug-nahaufnahme`, `laden-wickeltisch-babyraum`            |
| `/vegane-desserts-wetzlar`          | `dessert-obstteller-fruechte-schokolade`, `getraenk-iced-matcha-erdbeere`                                         |
| `/eisdiele-wetzlar-special-shakes`  | `getraenk-iced-matcha-erdbeere`, `getraenk-iced-latte-grafik`, `eis-brioscia-sizilien`                            |
| `/lieferservice-desserts-lahn-dill` | `eis-vitrine-takeaway-packung`                                                                                    |
| `/events-catering-hessen`           | `laden-sitzbereich-neon-mooswand`, `laden-theke-innenraum`, `laden-eisvitrine-speisekarte`                        |

> **Hinweis:** Der Foto-Katalog (`manifest.json` + `photos.ts`) hat bereits `suggested_pages`
> für jedes Foto definiert — `getPhotosForPage("/slug")` gibt automatisch die richtigen Fotos
> zurück. Vertraue dem Katalog.

---

## Priorität 5 — Visit-Page: Laden-Atmosphäre

**Datei:** `src/app/(public)/visit/page.tsx`  
Füge eine Foto-Grid-Sektion mit den Innenraumfotos ein:

```tsx
import Image from "next/image";

// Grid mit 3 Innenraumfotos:
const ladenPhotos = [
  {
    src: "/assets/photos/laden-sitzbereich-logo-hey-fede-wetzlar.jpg",
    alt: "Sitzbereich mit Hey Fede! Logo an der Wand in Wetzlar",
  },
  {
    src: "/assets/photos/laden-sitzbereich-neon-mooswand-hey-fede-wetzlar.jpg",
    alt: 'Neon-Schriftzug "Do what you love" und Mooswand im Hey Fede! Café Wetzlar',
  },
  {
    src: "/assets/photos/laden-theke-innenraum-hey-fede-wetzlar.jpg",
    alt: "Theke und Innenraum des Hey Fede! Dessertbar & Café Wetzlar",
  },
];

// In JSX:
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
  {ladenPhotos.map((p) => (
    <div
      key={p.src}
      className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-clay"
    >
      <Image
        src={p.src}
        alt={p.alt}
        fill
        className="object-cover"
        sizes="33vw"
      />
    </div>
  ))}
</div>;
```

---

## Technische Anforderungen

### next/image überall verwenden

- **Niemals** `<img>` Tags — immer `next/image` mit `<Image>`
- `fill` + `className="object-cover"` für alle organischen Formen
- `sizes` Attribut immer setzen (responsives Laden)
- `priority` nur für above-the-fold Bilder (Intro-Oval auf der Homepage)

### Alt-Texte — SEO-Pflicht

- "Hey Fede!" und "Wetzlar" müssen in jedem Alt-Text vorkommen
- Kein "Bild von..." oder "Foto von..." — direkt beschreibend
- Die korrekten Alt-Texte stehen in `src/lib/photos.ts` im `alt`-Feld

### Oval-Styling — Konsistenz

- Organische `borderRadius`-Werte aus dem vorhandenen Stil beibehalten
- Hintergrund-Ring immer in `--peach` oder `--cream` Tönen, mit `opacity`
- Kein harter `border`-Rahmen — das passt nicht zum organischen Design-Stil

### Farbanpassung der Oval-Fläche

Der User hat explizit gewünscht, dass das Foto "farblich" in die Seite integriert wird —
damit es nicht wie ein fremdes Element wirkt. Gemeint ist:

1. Der **Hintergrund hinter dem Oval** soll in der jeweiligen Section-Farbe bleiben
   (`bg-cream` auf der Intro-Sektion)
2. Ein **weicher Ring** in `bg-peach/40` bis `bg-peach/60` um das Oval legt sich wie ein
   Passepartout zwischen das Foto und den Seitenhintergrund
3. Das Foto selbst bleibt **unverändert** — keine CSS-Filter, kein `mix-blend-mode`

### Import ergänzen falls nötig:

```tsx
import Image from "next/image";
import { PHOTOS, getPhotosForPage, getPhotosByCategory } from "@/lib/photos";
```

---

## SEO-Impact der Änderungen

### Was sich verbessert:

- **Google Bildersuche:** Echte Fotos mit beschreibenden Dateinamen (`eis-spaghetti-erdbeere-hey-fede-wetzlar.jpg`) ranken für lokale Bildsuchen
- **Core Web Vitals:** `priority`-Flag für LCP-Bild (Federica im Intro-Oval) verbessert LCP
- **Structured Data:** Die `alt`-Texte mit "Hey Fede!" + "Wetzlar" stärken lokale Relevanz
- **CTR Google Maps:** Echte Fotos auf Website → Google übernimmt sie ins Business-Profil
- **E-E-A-T:** Echte Gründerin, echtes Team, echter Laden → mehr Vertrauenssignal für Google

### Bestehende Schema.org / JSON-LD ergänzen:

In `src/lib/seo/schema/pages.ts` oder `SchemaScripts.tsx` das `ImageObject`-Schema für
die Hauptbilder ergänzen:

```json
{
  "@type": "ImageObject",
  "url": "https://hey-fede.de/assets/photos/team-gruenderin-federica-hey-fede-wetzlar.jpg",
  "description": "Federica, Gründerin des Hey Fede! Dessertbar & Café in Wetzlar",
  "width": 1080,
  "height": 1350
}
```

---

## Checkliste

- [ ] Homepage Intro-Oval: `FoodIcon` → `Image` (Federica-Foto) mit Peach-Ring
- [ ] About-Page Gründerin-Oval: `FoodIcon` → `Image` (Federica-Foto) mit Peach-Ring
- [ ] Homepage Feature-Cards: Kinderecke + Wickelraum mit echten Fotos
- [ ] SEO-Landingpages: Foto-Grid-Sektionen eingebaut (alle 8 Pages)
- [ ] Visit-Page: Laden-Atmosphäre Foto-Grid
- [ ] Alle `<img>` → `next/image` (Suche nach `<img src=` im src-Ordner)
- [ ] Alt-Texte überall vollständig (kein `alt=""` bei inhaltlichen Bildern)
- [ ] `priority` auf dem LCP-Bild der Homepage gesetzt
- [ ] `sizes` auf allen `fill`-Images gesetzt
- [ ] Browser-Test: Oval-Bilder auf Mobile + Desktop prüfen
- [ ] Lighthouse-Run: LCP, CLS, Accessibility nach Integration prüfen
