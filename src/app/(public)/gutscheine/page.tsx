import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo/schema/pages";
import { SITE, BUSINESS } from "@/lib/seo/business-data";
import { getPhotosByCategory } from "@/lib/photos";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { GiganticTypography } from "@/components/ui/GiganticTypography";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { GutscheinConfigurator } from "./GutscheinConfigurator";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "Dessert Gutschein Wetzlar | Geschenkkarte | Hey Fede!",
  description:
    "Verschenke süße Momente mit einem Hey Fede! Gutschein in Wetzlar. Direkt online bestellen per E-Mail zum Ausdrucken oder per Post im edlen Umschlag.",
  path: "/gutscheine",
  keywords: [
    "Gutschein Wetzlar",
    "Dessert Gutschein Wetzlar",
    "Geschenkkarte Wetzlar",
    "Eiscafé Gutschein Wetzlar",
    "Hey Fede Gutschein",
    "Geschenkgutschein Wetzlar",
  ],
});

/* ─── FAQ Data ─── */
const FAQ_DATA = [
  {
    q: "Wie erhalte ich meinen Hey Fede! Gutschein nach der Bestellung?",
    a: "Du hast die Wahl: Wählst du die Option 'Per E-Mail (PDF)', erhältst du deinen Gutschein sofort nach dem Kauf digital zugeschickt — perfekt zum Selbstausdrucken oder Weiterleiten. Wählst du den 'Edlen Geschenk-Umschlag', verschicken wir deinen gedruckten Gutschein per Post im liebevoll gestalteten Umschlag direkt an deine Wunschadresse.",
  },
  {
    q: "Wo und wie lange ist der Dessert Gutschein in Wetzlar gültig?",
    a: "Alle Gutscheine von Hey Fede! sind volle 36 Monate (3 Jahre) ab Ausstellungsdatum gültig. Sie können flexibel direkt vor Ort im Hey Fede! Eiscafé in der Langgasse 68 in Wetzlar sowie über unseren Online-Lieferservice eingelöst werden.",
  },
  {
    q: "Kann der Gutschein auch stückweise eingelöst werden?",
    a: "Ja, selbstverständlich! Der Betrag muss nicht auf einmal aufgebraucht werden. Das verbleibende Restguthaben bleibt auf dem Gutschein gespeichert und kann bei deinen nächsten Besuchen in unserer Dessertbar in Wetzlar genutzt werden.",
  },
  {
    q: "Kann ich dem Gutschein eine persönliche Nachricht hinzufügen?",
    a: "Ja! Bei der Online-Konfiguration kannst du eine persönliche Grußnachricht angeben. Diese wird stilvoll auf den digitalen PDF-Gutschein oder die gedruckte Geschenkkarte gedruckt.",
  },
  {
    q: "Gilt der Gutschein für das gesamte Sortiment von Hey Fede!?",
    a: "Ja, der Gutschein ist für unser gesamtes Sortiment gültig — egal ob hausgemachtes Eis, Bubble Waffles, Crêpes, Special Shakes, Kaffeespezialitäten, vegane Desserts oder erfrischende Kaltgetränke.",
  },
];

/* ─── Cross-Links ─── */
const CROSS_LINKS = [
  { href: "/eiscafe-wetzlar", emoji: "🍨", label: "Eiscafé Wetzlar" },
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes Wetzlar" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🥤",
    label: "Special Shakes",
  },
  { href: "/events-catering-hessen", emoji: "🎉", label: "Catering & Events" },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
  { href: "/kindergeburtstag-wetzlar", emoji: "🎂", label: "Kindergeburtstag" },
];

/* ─── Page Schema ─── */
function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    mainEntity: {
      "@type": "Product",
      name: "Hey Fede! Dessert Gutschein Wetzlar",
      description:
        "Geschenkgutschein für das Hey Fede! Eiscafé & Dessertbar in der Wetzlarer Altstadt. Einlösbar für hausgemachtes Eis, Waffeln, Crêpes und Special Shakes.",
      image: `${SITE.url}/og/home.png`,
      brand: {
        "@type": "Brand",
        name: "Hey Fede!",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: "10.00",
        highPrice: "100.00",
        offerCount: "6",
        priceValidationUntil: "2029-12-31",
        seller: {
          "@type": "Restaurant",
          "@id": `${SITE.url}/#localbusiness`,
          name: BUSINESS.name,
        },
      },
    },
  };
}

export default function GutscheinePage() {
  const storePhotos = getPhotosByCategory("laden").slice(0, 3);
  const dessertPhotos = getPhotosByCategory("dessert").slice(0, 3);
  const galleryPhotos = [...storePhotos, ...dessertPhotos];

  return (
    <div className="min-h-screen bg-transparent text-charcoal font-body relative">
      {/* ─── Hero Section ─── */}
      <section className="min-h-[50vh] flex flex-col justify-center items-center px-6 relative pt-28 pb-12 text-center">
        <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
          Geschenkgutscheine & Geschenkkarte Wetzlar
        </div>

        <GiganticTypography
          as="h1"
          highlightWords={["Gutschein", "Wetzlar"]}
          highlightColor="#CC624C"
          className="text-center justify-center max-w-[1200px] mx-auto"
        >
          Dessert Gutschein Wetzlar – Verschenke süße Freude
        </GiganticTypography>

        <p className="font-body text-lg md:text-xl mt-8 text-center max-w-[750px] font-medium text-brown-mid leading-relaxed mx-auto">
          Überrasche deine Liebsten mit einem vielseitigen Dessert Gutschein für
          Hey Fede! in der historischen Wetzlarer Altstadt. Ob für knusprige
          Bubble Waffles, hausgemachte Eisbecher, duftende Crêpes oder cremig
          beladene Special Shakes – verschenke unvergessliche Genussmomente in
          stilvoller Atmosphäre.
        </p>
      </section>

      {/* ─── Interactive Ticket & Form Section ─── */}
      <section className="px-6 relative z-10 py-8 max-w-[1400px] mx-auto">
        <GutscheinConfigurator />
      </section>

      {/* ─── Main Content & SEO Text ─── */}
      <section className="py-24 bg-white relative">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Das perfekte Geschenk in Wetzlar">
            Ein Gutschein für jeden süßen Anlass
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-12 mx-auto">
            <h2>Warum ein Hey Fede! Gutschein immer die richtige Wahl ist</h2>
            <p>
              Du suchst nach einem besonderen Geschenk in Wetzlar, das von
              Herzen kommt und garantiert ein Lächeln auf das Gesicht zaubert?
              Ein Geschenk-Gutschein von Hey Fede! ist die perfekte Idee für
              Geburtstage, Weihnachten, Muttertag, Valentinstag oder als
              liebevolles Dankeschön für Freunde, Kollegen und Familie. Statt
              verstaubender Sachgeschenke verschenkst du wertvolle gemeinsame
              Zeit und unvergleichlichen Dessertgenuss mitten in der Wetzlarer
              Altstadt.
            </p>
            <p>
              Egal ob für leidenschaftliche Eis-Liebhaber, Waffel-Fans oder
              Kaffeegenießer: Mit dem Hey Fede! Gutschein trifft man immer den
              richtigen Geschmack. Der Beschenkte kann frei wählen aus all
              unseren hausgemachten Spezialitäten — von frisch gebackenen Bubble
              Waffles und hauchzarten Crêpes bis hin zu üppig dekorierten
              Special Shakes und veganen Eisbechern.
            </p>

            <h2>Sofort-Zustellung per E-Mail oder edler Geschenk-Umschlag</h2>
            <p>
              Brauchst du ein Last-Minute-Geschenk in Wetzlar? Kein Problem! Mit
              unserer schnellen E-Mail-Option ist dein Gutschein im Handumdrehen
              in deinem Posteingang. Du kannst ihn bequem zu Hause ausdrucken
              oder direkt per E-Mail an den Glücklichen weiterleiten. Ideal für
              spontane Überraschungen!
            </p>
            <p>
              Möchtest du ein haptisch edles Präsent überreichen? Wähle unsere
              Versandoption per Post: Wir drucken deinen Gutschein auf
              hochwertigem Premium-Papier, verpacken ihn liebevoll in einem
              stilvollen Geschenk-Umschlag und senden ihn direkt zu dir oder an
              die Adresse des Empfängers.
            </p>

            <h2>Flexibel Einlösbar vor Ort in der Altstadt & Online</h2>
            <p>
              Unsere Gutscheine sind volle 36 Monate ab Kaufdatum gültig und
              bieten maximale Flexibilität. Der Beschenkte kann den Gutschein
              ganz einfach bei seinem nächsten Besuch in unserem Eiscafé in der
              Langgasse 68 in Wetzlar vorzeigen und schrittweise einlösen.
              Restguthaben verfällt nicht, sondern bleibt für den nächsten
              Besuch erhalten.
            </p>
            <p>
              Auch für Gemütliche zu Hause ist gesorgt: Der Gutschein lässt sich
              ebenso unkompliziert für unseren Online-Bestellservice nutzen. So
              lässt sich das Lieblingseis oder die frische Waffel auch entspannt
              nach Hause im Lahn-Dill-Kreis liefern.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ─── Echte Fotos Section ─── */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Einblicke in die Dessertbar Hey Fede! Wetzlar
          </h2>
          <p className="font-body text-charcoal/70 text-center mb-8 max-w-xl mx-auto leading-relaxed">
            Mit einem Hey Fede! Gutschein verschenkst du nicht nur leckere
            Desserts, sondern auch eine schöne Auszeit in unserem stilvollen
            Eiscafé in der Wetzlarer Langgasse.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-clay group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-24 bg-sand">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Antworten auf deine Fragen">
            Häufig gestellte Fragen zu unseren Gutscheinen
          </SectionTitle>
          <div className="mt-12 space-y-4">
            {FAQ_DATA.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-peach/20 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-heading text-lg text-charcoal">
                  {faq.q}
                  <span className="text-terracotta group-open:rotate-45 transition-transform text-2xl ml-4 shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 font-body text-brown-mid leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#F5EDE3" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Mache jemandem heute eine Freude!
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10 max-w-xl mx-auto">
            Wähle oben deinen Wunschbetrag aus und erstelle in wenigen Klicks
            deinen individuellen Hey Fede! Dessert Gutschein für Wetzlar.
          </p>
        </FadeUp>
      </section>

      {/* ─── Cross Links Section ─── */}
      <section className="py-20 bg-bg-creme">
        <FadeUp className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-charcoal mb-10">
            Entdecke mehr von Hey Fede! Wetzlar
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CROSS_LINKS.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="bg-white rounded-2xl p-5 border border-peach/20 hover:border-terracotta/40 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl block mb-2">{link.emoji}</span>
                <span className="font-body font-bold text-sm text-charcoal group-hover:text-terracotta transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </FadeUp>
      </section>

      <SchemaScripts
        schema={[
          buildBreadcrumbSchema([{ name: "Gutscheine", path: "/gutscheine" }]),
          buildFaqSchema(FAQ_DATA),
          getPageSchema(),
        ]}
      />
    </div>
  );
}
