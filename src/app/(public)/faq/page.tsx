import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/base-metadata";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/lib/seo/schema/pages";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { FadeUp } from "@/components/ui/FadeUp";
import { SectionTitle } from "@/components/ui/LayoutBlocks";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { PrimaryButton } from "@/components/ui/Btn";
import { SITE, BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";
import { getPhotosForPage, PHOTOS } from "@/lib/photos";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const revalidate = 60;

export const metadata: Metadata = buildMetadata({
  title: "FAQ – Häufig gestellte Fragen | Hey Fede! Eiscafé Wetzlar",
  description:
    "Antworten auf häufig gestellte Fragen zu Lieferservice, Tischreservierung, veganen Eissorten & Catering bei Hey Fede! Eiscafé & Dessertbar Wetzlar.",
  path: "/faq",
  keywords: [
    "FAQ Hey Fede Wetzlar",
    "Häufig gestellte Fragen Eiscafé Wetzlar",
    "Hey Fede Fragen und Antworten",
    "Eis bestellen Wetzlar FAQ",
    "Lieferservice Desserts Wetzlar Fragen",
    "Vegan Eis Wetzlar FAQ",
    "Catering Wetzlar Fragen",
    "Reservierung Hey Fede Wetzlar",
  ],
});

/* ─── Structured FAQ Data ─── */
const CATEGORIZED_FAQS = [
  {
    category: "Lieferservice & Online-Bestellung",
    items: [
      {
        q: "In welche Gebiete liefert Hey Fede! Desserts & Eisbecher?",
        a: "Wir liefern unsere frischen Bubble Waffles, Crêpes, Eisbecher und Special Shakes direkt in ausgewählte Postleitzahlengebiete in Wetzlar (z.B. 35576, 35578) sowie umliegende Gemeinden im Lahn-Dill-Kreis. Über unser Online-Bestellportal kannst du deine Lieferadresse eingeben und siehst sofort, ob dein Standort im aktuellen Liefergebiet liegt.",
      },
      {
        q: "Wie funktioniert die Online-Bestellung zur Abholung oder Lieferung?",
        a: "Über unsere Website kannst du dein Wunschmenü bequem zusammenstellen, deine Lieblings-Toppings und Soßen auswählen und die gewünschte Uhrzeit für Abholung oder Lieferung festlegen. Nach dem Absenden erhältst du eine Bestätigung, während unsere Dessert-Experten deine Bestellung pünktlich und frisch zubereiten.",
      },
      {
        q: "Bleiben die Eisbecher und warmen Waffeln beim Transport frisch?",
        a: "Ja! Wir verwenden speziell isolierte Thermo-Verpackungen, damit dein Eis perfekt gekühlt und deine Bubble Waffles oder Crêpes angenehm warm und knusprig bei dir zu Hause eintreffen. Unsere Auslieferungsfahrer nutzen optimierte Routen, um die Transportzeit so kurz wie möglich zu halten.",
      },
    ],
  },
  {
    category: "Zutaten, Vegane Optionen & Allergene",
    items: [
      {
        q: "Gibt es bei Hey Fede! vegane, laktosefreie oder glutenfreie Speisen?",
        a: "Selbstverständlich! Wir führen eine vielfältige Auswahl an veganen Fruchtsorbets, pflanzlichen Crêpe-Teigen sowie Hafer- und Mandelmilch für Kaffeespezialitäten. Zudem bieten wir laktosefreie Toppings an. Sprich unser Team einfach auf deine Ernährungsbedürfnisse an – wir beraten dich sehr gerne ausführlich zu allen Inhaltsstoffen.",
      },
      {
        q: "Sind die Eissorten und Desserts bei Hey Fede! halal-geeignet?",
        a: "Ja, der Großteil unserer Kreationen ist halal-konform. Wir verzichten bei der Herstellung unseres Eises und unserer Gebäcke konsequent auf tierische Gelatine und verarbeiten ausschließlich ausgewählte, hochwertige Rohstoffe. Detaillierte Auskünfte zu einzelnen Zutaten gibt dir unser Personal jederzeit gerne vor Ort.",
      },
    ],
  },
  {
    category: "Tischreservierung & Café-Besuch in Wetzlar",
    items: [
      {
        q: "Wie kann ich einen Tisch im Eiscafé Hey Fede! in Wetzlar reservieren?",
        a: "Du kannst deinen Tisch im Eiscafé bequem online über unsere Reservierungsseite buchen oder uns eine kurze Nachricht über WhatsApp senden. Besonders an Wochenenden und Feiertagen empfehlen wir eine rechtzeitige Reservierung, damit wir deinen Lieblingsplatz in der Altstadt verbindlich für dich freihalten können.",
      },
      {
        q: "Wo befindet sich das Eiscafé und gibt es Parkplätze in der Nähe?",
        a: "Hey Fede! liegt zentral in der Langgasse 68 in der historischen Wetzlarer Fußgängerzone, nur wenige Gehminuten vom Wetzlarer Dom entfernt. In direkter Umgebung befinden sich mehrere Parkhäuser (z.B. Parkhaus Altstadt) sowie öffentliche Parkplätze, von denen aus du uns bequem zu Fuß erreichst.",
      },
    ],
  },
  {
    category: "Events, Catering & Geburtstage",
    items: [
      {
        q: "Bietet Hey Fede! Catering für Hochzeiten, Geburtstage und Firmenfeiern an?",
        a: "Ja! Wir bieten ein individuelles Dessert-Catering für Veranstaltungen aller Art im gesamten Lahn-Dill-Kreis und Umgebung. Von mobilen Waffelstationen über Eis-Catering bis hin zu reichhaltigen Dessert-Buffets stellen wir dein Wunsch-Catering zusammen. Kontaktiere uns einfach über unser Formular für ein unverbindliches Angebot.",
      },
      {
        q: "Kann man Kindergeburtstage bei Hey Fede! in Wetzlar feiern?",
        a: "Sehr gerne! Unsere gemütliche Kinderecke und unser farbenfrohes Ambiente bieten die perfekte Kulisse für unvergessliche Kindergeburtstage. Wir bieten spezielle Geburtstags-Pakete mit bunten Bubble Waffles, Eisbechern und Spielen an. Melde dich rechtzeitig bei uns, um euren Wunschtermin zu vereinbaren.",
      },
    ],
  },
  {
    category: "Bezahlung & Gutscheine",
    items: [
      {
        q: "Welche Zahlungsmethoden werden im Café und online akzeptiert?",
        a: "In unserem Eiscafé in Wetzlar kannst du bar sowie kontaktlos per Girocard (EC-Karte), Kreditkarte, Apple Pay und Google Pay bezahlen. Bei Online-Bestellungen stehen dir sichere digitale Zahlungsarten wie PayPal, Klarna oder Kreditkarte zur Verfügung.",
      },
      {
        q: "Gibt es Gutscheine und Treuepunkte bei Hey Fede!?",
        a: "Ja! Du kannst sowohl digitale Gutscheine online erwerben als auch Geschenk-Gutscheine direkt bei uns im Café kaufen. Zudem bieten wir über unsere digitale Stempelkarte tolle Prämien und Rabatte für unsere treuen Stammgäste in Wetzlar an.",
      },
    ],
  },
];

/* ─── Flat FAQ array for Schema.org ─── */
const ALL_FAQS = CATEGORIZED_FAQS.flatMap((cat) => cat.items);

/* ─── Cross-Links ─── */
const CROSS_LINKS = [
  { href: "/menu", emoji: "🍨", label: "Speisekarte & Menü" },
  { href: "/eiscafe-wetzlar", emoji: "🍦", label: "Eiscafé Wetzlar" },
  { href: "/bubble-waffles-wetzlar", emoji: "🧇", label: "Bubble Waffles" },
  { href: "/crepes-wetzlar", emoji: "🥞", label: "Crêpes Spezialitäten" },
  {
    href: "/eisdiele-wetzlar-special-shakes",
    emoji: "🥤",
    label: "Special Shakes",
  },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
  {
    href: "/lieferservice-desserts-lahn-dill",
    emoji: "🚗",
    label: "Lieferservice",
  },
  { href: "/events-catering-hessen", emoji: "🎉", label: "Catering & Events" },
  {
    href: "/kindergeburtstag-wetzlar",
    emoji: "🎂",
    label: "Kindergeburtstage",
  },
  { href: "/reservierung", emoji: "📅", label: "Tisch Reservieren" },
  { href: "/kontakt", emoji: "✉️", label: "Kontakt & Anfahrt" },
];

export default function FAQPage() {
  const displayPhotos = PHOTOS.slice(0, 6);

  return (
    <div className="bg-bg-creme min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative pt-[120px] pb-24 bg-sand overflow-hidden border-b border-peach/30">
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-terracotta text-white font-body font-bold rounded-full text-sm mb-6 shadow-sm">
              Antworten &amp; Service
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-charcoal mb-6 leading-[1.1]">
              FAQ – Häufig gestellte Fragen zu Hey Fede! in Wetzlar
            </h1>
            <p className="font-body text-lg text-brown-mid leading-relaxed mb-8 max-w-[550px]">
              Willkommen im FAQ-Bereich von Hey Fede! Dessertbar &amp; Eiscafé
              in der Wetzlarer Altstadt. Hier beantworten wir dir alle wichtigen
              Fragen rund um unsere frisch zubereiteten Eisbecher, knusprigen
              Waffeln, saftigen Crêpes, den Online-Lieferservice im
              Lahn-Dill-Kreis sowie Reservierungen und Event-Catering. Unser
              Ziel ist es, dir einen transparenten Einblick in unsere Produkte
              und unseren erstklassigen Service zu bieten.
            </p>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="#faq-list">Zu den Fragen ↓</PrimaryButton>
              <a
                href="/kontakt"
                className="inline-block bg-white text-terracotta border-2 border-terracotta px-7 py-3.5 rounded-full font-body font-bold hover:bg-peach/10 transition-colors shadow-sm"
              >
                Persönlicher Kontakt
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-beige rounded-[40px] border-4 border-white shadow-xl flex items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <Image
                src="/assets/photos/laden-theke-innenraum-hey-fede-wetzlar.jpg"
                alt="Hey Fede! Eiscafé & Dessertbar Wetzlar Innenraum"
                width={600}
                height={750}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white px-6 py-4 rounded-2xl shadow-lg transform rotate-3 border border-peach/20">
              <p className="font-heading text-terracotta text-xl">
                Hey Fede! Service
              </p>
              <p className="font-body font-bold text-xs uppercase tracking-widest text-charcoal">
                Immer für dich da
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Informational & SEO Guide Section ─── */}
      <section className="py-20 bg-white border-b border-peach/20">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Informationen auf einen Blick">
            Transparenz &amp; Qualität bei Hey Fede!
          </SectionTitle>

          <div className="prose prose-lg prose-headings:font-heading prose-headings:text-charcoal prose-p:font-body prose-p:text-brown-mid mt-10 mx-auto">
            <h2>
              Dein umfassender Ratgeber: Transparenz &amp; Frische bei Hey Fede!
            </h2>
            <p>
              Bei Hey Fede! legen wir allergrößten Wert auf hervorragende
              Qualität, Frische und lückenlose Transparenz. In unserer modernen
              Dessertmanufaktur in der Wetzlarer Langgasse werden täglich
              erlesene Zutaten wie frische Vollmilch, reife Früchte und feinste
              Schokoladensorten verarbeitet. Ganz gleich, ob du uns persönlich
              im Café besuchst oder Desserts nach Hause bestellst – wir möchten,
              dass du genau weißt, wie unsere Spezialitäten entstehen und welche
              Optionen dir zur Verfügung stehen.
            </p>
            <p>
              Unsere Antworten decken ein breites Spektrum an Themen ab: Von
              detaillierten Allergie- und Inhaltsstoffangaben über Informationen
              zu veganen und laktosefreien Alternativen bis hin zu den genauen
              Abläufen bei Online-Bestellungen und Catering-Anfragen. Falls du
              eine ganz bestimmte Frage hast, die hier nicht aufgeführt ist,
              kannst du dich jederzeit direkt an unser freundliches Serviceteam
              wenden – persönlich vor Ort, per WhatsApp oder über unser
              Online-Kontaktformular.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ─── FAQ List Section ─── */}
      <section id="faq-list" className="py-24 bg-sand">
        <FadeUp className="max-w-4xl mx-auto px-6">
          <SectionTitle sub="Alle Antworten">
            Häufig gestellte Fragen &amp; Antworten
          </SectionTitle>

          <div className="mt-12 space-y-12">
            {CATEGORIZED_FAQS.map((category, catIdx) => (
              <div
                key={catIdx}
                className="bg-white/80 rounded-3xl p-8 border border-peach/30 shadow-sm"
              >
                <h3 className="font-heading text-2xl text-terracotta mb-6 border-b border-peach/20 pb-3">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-cream/70 rounded-2xl border border-peach/20 overflow-hidden transition-all duration-200"
                    >
                      <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-heading text-lg text-charcoal hover:text-terracotta transition-colors">
                        <span>{faq.q}</span>
                        <span className="text-terracotta group-open:rotate-45 transition-transform text-2xl ml-4 shrink-0">
                          +
                        </span>
                      </summary>
                      <div className="px-6 pb-6 font-body text-brown-mid leading-relaxed border-t border-peach/10 pt-4">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── Contact & Direct Support Section ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-cream/90 border border-terracotta/20 rounded-[40px] p-8 md:p-12 shadow-clay">
            <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-4 text-center">
              Noch offene Fragen? Wir sind persönlich für dich da!
            </h2>
            <p className="font-body text-brown-mid text-center max-w-2xl mx-auto mb-10 text-base md:text-lg">
              Solltest du deine gewünschte Information nicht in unseren FAQs
              gefunden haben, zögere nicht, uns direkt zu kontaktieren. Unser
              freundliches Team in Wetzlar beantwortet deine Anliegen schnell
              und unkompliziert.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-10">
              <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl border border-peach/20">
                <div className="w-14 h-14 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <h3 className="font-heading text-xl text-charcoal">Adresse</h3>
                <p className="text-brown/80 font-bold text-sm leading-relaxed">
                  {FULL_ADDRESS}
                  <br />
                  Altstadt Wetzlar
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl border border-peach/20">
                <div className="w-14 h-14 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
                  <Phone size={28} />
                </div>
                <h3 className="font-heading text-xl text-charcoal">
                  Telefon &amp; Mail
                </h3>
                <p className="text-brown/80 font-bold text-sm leading-relaxed">
                  Tel: {BUSINESS.phone}
                  <br />
                  Mail: {BUSINESS.email}
                </p>
              </div>

              <div className="flex flex-col items-center gap-3 bg-white p-6 rounded-2xl border border-peach/20">
                <div className="w-14 h-14 bg-terracotta/10 text-terracotta rounded-full flex items-center justify-center">
                  <Clock size={28} />
                </div>
                <h3 className="font-heading text-xl text-charcoal">
                  Öffnungszeiten
                </h3>
                <p className="text-brown/80 font-bold text-sm leading-relaxed">
                  Mo–Fr: 12:00 – 20:00 Uhr
                  <br />
                  Sa–So: 10:00 – 20:00 Uhr
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-success text-white px-8 py-4 rounded-full font-body font-black uppercase tracking-wider hover:scale-105 transition-transform shadow-md flex items-center gap-3"
              >
                <MessageCircle size={22} /> WhatsApp Chat Starten
              </a>
              <a
                href="/kontakt"
                className="bg-terracotta text-white px-8 py-4 rounded-full font-body font-black uppercase tracking-wider hover:scale-105 transition-transform shadow-md"
              >
                Zum Kontaktformular →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Echte Fotos Section ─── */}
      <section className="py-16 bg-sand">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal mb-2 text-center">
            Einblicke in unser Eiscafé &amp; Dessertbar
          </h2>
          <p className="font-body text-charcoal/60 text-center mb-8 max-w-lg mx-auto">
            Erlebe echte Impressionen aus unserem Café in der Wetzlarer
            Altstadt. Bei uns erwarten dich liebevoll zubereitete
            Dessert-Kreationen in einladender Atmosphäre.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {displayPhotos.map((photo) => (
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

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-terracotta relative text-center text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full -translate-y-1">
          <WaveDivider fromColor="#f5efe8" toColor="#CC624C" variant={1} />
        </div>
        <FadeUp className="max-w-2xl mx-auto px-6 relative z-10 pt-12">
          <h2 className="font-heading text-4xl mb-6">
            Besuche uns in Wetzlar oder bestelle online!
          </h2>
          <p className="font-body text-lg text-cream/90 mb-10">
            Jetzt hast du alle Informationen — probiere unsere hausgemachten
            Eisbecher, knusprigen Bubble Waffles und saftigen Crêpes selbst aus.
            Wir freuen uns auf deinen Besuch in der Langgasse 68 oder deine
            Online-Bestellung!
          </p>
          <a
            href="/menu"
            className="inline-block bg-white text-terracotta font-bold px-8 py-4 rounded-full shadow-lg hover:bg-cream transition-colors"
          >
            Unsere Speisekarte entdecken →
          </a>
        </FadeUp>
      </section>

      {/* ─── Cross Links Section ─── */}
      <section className="py-20 bg-sand">
        <FadeUp className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl text-charcoal mb-10">
            Weitere Themen &amp; Spezialitäten bei Hey Fede!
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CROSS_LINKS.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="bg-white rounded-2xl p-5 border border-peach/20 hover:border-terracotta/40 hover:shadow-lg transition-all group"
              >
                <span className="text-3xl block mb-2">{link.emoji}</span>
                <span className="font-body font-bold text-sm text-charcoal group-hover:text-terracotta transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </FadeUp>
      </section>

      {/* ─── Schema Scripts ─── */}
      <SchemaScripts
        schema={[
          buildFaqSchema(ALL_FAQS),
          buildBreadcrumbSchema([{ name: "FAQ", path: "/faq" }]),
        ]}
      />
    </div>
  );
}
