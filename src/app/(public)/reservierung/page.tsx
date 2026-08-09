"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/seo/schema/pages";
import { SITE, BUSINESS } from "@/lib/seo/business-data";

/* ─── FAQ Data for Reservierung ─── */
const FAQ_DATA = [
  {
    q: "Muss ich zwingend vorab einen Tisch bei Hey Fede! reservieren?",
    a: "Eine Reservierung wird besonders am Wochenende, an Feiertagen sowie am Nachmittag dringend empfohlen, um dir deinen Wunschplatz zu sichern. Spontane Gäste sind im Eiscafé Hey Fede! in Wetzlar jedoch ebenso herzlich willkommen.",
  },
  {
    q: "Wie lange wird ein reservierter Tisch für mich freigehalten?",
    a: "Wir halten deinen Tisch bis zu 15 Minuten nach der gebuchten Uhrzeit frei. Solltest du dich verspäten, bitte gib uns kurz telefonisch Bescheid, damit wir deine Reservierung aufrechterhalten.",
  },
  {
    q: "Kann ich für größere Gruppen oder Events reservieren?",
    a: "Ja! Für Gruppen ab 8 Personen, Geburtstagsfeiern oder Firmen-Events bieten wir maßgeschneiderte Sitzbereiche und Dessert-Catering an. Kontaktiere uns hierzu am besten direkt per WhatsApp oder Telefon.",
  },
  {
    q: "Bietet das Eiscafé Hey Fede! auch vegane und glutenfreie Optionen?",
    a: "Ja, in unserer Dessertbar in der Wetzlarer Altstadt bieten wir eine Vielzahl veganer Eissorten, fruchtige Sorbets, pflanzliche Milchalternativen für Kaffeespezialitäten und laktosefreie Leckereien an.",
  },
  {
    q: "Wo genau befindet sich das Eiscafé Hey Fede! in Wetzlar?",
    a: "Du findest uns mitten in der historischen Wetzlarer Altstadt in der Langgasse 68, 35576 Wetzlar — wenige Gehminuten vom Wetzlarer Dom entfernt.",
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
  { href: "/kindergeburtstag-wetzlar", emoji: "🎂", label: "Kindergeburtstag" },
  { href: "/events-catering-hessen", emoji: "🎉", label: "Catering & Events" },
  { href: "/vegane-desserts-wetzlar", emoji: "🌱", label: "Vegan & Halal" },
];

export default function ReservierungPage() {
  const [guests, setGuests] = useState(4);
  const [selectedDate, setSelectedDate] = useState(25);
  const [selectedTime, setSelectedTime] = useState("15:30");
  const [selectedArea, setSelectedArea] = useState("Innen · Lounge");
  const [specialRequest, setSpecialRequest] = useState("Geburtstag");

  const dates = [
    { w: "Heute", d: 24, disabled: false },
    { w: "Fr", d: 25, disabled: false },
    { w: "Sa", d: 26, disabled: false },
    { w: "So", d: 27, disabled: false },
    { w: "Mo", d: 28, disabled: false },
  ];

  const times = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "15:00",
    "15:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];
  const areas = [
    { ic: Icons.Heart, t: "Innen · Lounge", desc: "Gemütliche Sitznischen" },
    {
      ic: Icons.Sparkles,
      t: "Innen · Fenster",
      desc: "Aussicht auf die Altstadt",
    },
    { ic: Icons.Users, t: "Kinderecke", desc: "Familienfreundlicher Bereich" },
    { ic: Icons.Coffee, t: "Bar-Tisch", desc: "Für schnelle Genießer" },
  ];
  const requests = ["Geburtstag", "Date", "Familientreffen", "Sonstiges"];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Header */}
      <div className="bg-peach pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 hf-dot-bg pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl text-brown mb-4">
            Tisch reservieren in Wetzlar
          </h1>
          <p className="font-body text-brown-mid text-sm md:text-base leading-relaxed">
            Sichere dir deinen Wunschplatz online im Hey Fede! Eiscafé &
            Dessertbar in der historischen Wetzlarer Altstadt. Ob für ein
            spontanes Treffen mit Freunden, ein romantisches Date, ein
            gemütliches Beisammensein mit der Familie oder eine Geburtstagsfeier
            — wir halten deinen Tisch bereit.
          </p>
        </div>
      </div>

      {/* Main Reservation Form */}
      <div className="max-w-[580px] mx-auto px-6 py-10">
        <FadeUp className="space-y-8">
          {/* Guests */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-beige shadow-sm">
            <h2 className="text-xs font-black text-terracotta tracking-[1.4px] uppercase mb-1">
              Anzahl der Gäste
            </h2>
            <p className="text-xs text-brown-mid mb-4">
              Wähle die Personenanzahl für deine Tischreservierung im Eiscafé
              Wetzlar.
            </p>
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between border border-beige">
              <div className="flex items-center gap-3">
                <Icons.Users
                  size={22}
                  className="text-terracotta"
                  strokeWidth={1.8}
                />
                <span className="font-heading text-xl text-brown">
                  {guests} Personen
                </span>
              </div>
              <div className="flex items-center bg-beige rounded-full p-1 gap-1">
                <button
                  type="button"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                  aria-label="Gäste reduzieren"
                >
                  <Icons.Minus
                    size={16}
                    className="text-brown"
                    strokeWidth={2.5}
                  />
                </button>
                <button
                  type="button"
                  onClick={() => setGuests(guests + 1)}
                  className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                  aria-label="Gäste erhöhen"
                >
                  <Icons.Plus
                    size={16}
                    className="text-white"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-beige shadow-sm">
            <h2 className="text-xs font-black text-terracotta tracking-[1.4px] uppercase mb-1">
              Datum der Reservierung
            </h2>
            <p className="text-xs text-brown-mid mb-4">
              Wähle deinen Wunschtag für den Besuch in der Dessertbar Hey Fede!.
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2 no-scrollbar">
              {dates.map((d) => (
                <button
                  key={d.d}
                  type="button"
                  onClick={() => setSelectedDate(d.d)}
                  className={`shrink-0 w-[74px] py-3 rounded-2xl text-center transition-colors border-2 ${
                    selectedDate === d.d
                      ? "bg-terracotta text-white border-terracotta shadow-md"
                      : "bg-white text-brown border-beige hover:border-peach"
                  }`}
                >
                  <div
                    className={`text-[11px] font-bold ${selectedDate === d.d ? "opacity-90" : "opacity-60"}`}
                  >
                    {d.w}
                  </div>
                  <div className="font-heading text-xl mt-1 leading-none">
                    {d.d}
                  </div>
                  <div
                    className={`text-[10px] font-bold mt-1 ${selectedDate === d.d ? "opacity-80" : "opacity-50"}`}
                  >
                    JAN
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-beige shadow-sm">
            <h2 className="text-xs font-black text-terracotta tracking-[1.4px] uppercase mb-1">
              Uhrzeit festlegen
            </h2>
            <p className="text-xs text-brown-mid mb-4">
              Verfügbare Zeiten am Fr 25.01 für deinen Besuch in Wetzlar.
            </p>
            <div className="grid grid-cols-4 gap-2">
              {times.map((t, i) => {
                const disabled = i === 2;
                const isSelected = selectedTime === t;
                return (
                  <button
                    key={t}
                    type="button"
                    disabled={disabled}
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 ${
                      disabled
                        ? "bg-white text-brown opacity-40 line-through border-beige cursor-not-allowed"
                        : isSelected
                          ? "bg-terracotta text-white border-terracotta shadow-md"
                          : "bg-white text-brown border-transparent hover:border-beige"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-beige shadow-sm">
            <h2 className="text-xs font-black text-terracotta tracking-[1.4px] uppercase mb-1">
              Sitzbereich wählen (optional)
            </h2>
            <p className="text-xs text-brown-mid mb-4">
              Finde das passende Ambiente für dein Dessert-Erlebnis.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((a) => {
                const isSelected = selectedArea === a.t;
                const Icon = a.ic;
                return (
                  <button
                    key={a.t}
                    type="button"
                    onClick={() => setSelectedArea(a.t)}
                    className={`rounded-2xl p-3.5 flex flex-col items-start gap-1 transition-all text-left border-2 ${
                      isSelected
                        ? "bg-brown text-white border-brown shadow-md"
                        : "bg-white text-brown border-beige hover:border-peach"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon
                        size={18}
                        className={
                          isSelected ? "text-peach" : "text-terracotta"
                        }
                        strokeWidth={1.8}
                      />
                      <span className="text-xs font-extrabold">{a.t}</span>
                    </div>
                    <span
                      className={`text-[10px] ${isSelected ? "text-peach/80" : "text-brown-mid"}`}
                    >
                      {a.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Requests */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-beige shadow-sm">
            <h2 className="text-xs font-black text-terracotta tracking-[1.4px] uppercase mb-1">
              Besonderer Anlass
            </h2>
            <p className="text-xs text-brown-mid mb-4">
              Möchtest du einen besonderen Moment bei uns im Eiscafé feiern?
            </p>
            <div className="flex flex-wrap gap-2">
              {requests.map((r) => {
                const isSelected = specialRequest === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setSpecialRequest(r)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 ${
                      isSelected
                        ? "bg-terracotta text-white border-terracotta shadow-md"
                        : "bg-white text-brown border-beige hover:border-peach"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </div>

      {/* SEO Information & Feature Section */}
      <section className="bg-white py-16 px-6 border-t border-beige">
        <div className="max-w-4xl mx-auto">
          <FadeUp>
            <h2 className="font-heading text-2xl md:text-3xl text-brown mb-6 text-center">
              Deine Tischreservierung bei Hey Fede! in der Wetzlarer Altstadt
            </h2>
            <p className="font-body text-brown-mid leading-relaxed mb-10 text-center max-w-2xl mx-auto">
              Erlebe erstklassigen Dessertgenuss in entspannter Atmosphäre. Im
              Hey Fede! Eiscafé & Dessertbar erwarten dich täglich frisch
              zubereitetes Eis, warm gebackene Bubble Waffles, hauchzarte Crêpes
              und aromatische Kaffeespezialitäten.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-cream p-6 rounded-2xl border border-beige">
                <div className="w-10 h-10 rounded-full bg-peach/50 flex items-center justify-center mb-4 text-terracotta">
                  <Icons.Sparkles size={20} />
                </div>
                <h3 className="font-heading text-lg text-brown mb-2">
                  Gemütliches Ambiente
                </h3>
                <p className="font-body text-xs text-brown-mid leading-relaxed">
                  Moderne Lounge-Möbel, stilvolles Interieur und Sitzplätze
                  direkt in der historischen Fußgängerzone Langgasse.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-beige">
                <div className="w-10 h-10 rounded-full bg-peach/50 flex items-center justify-center mb-4 text-terracotta">
                  <Icons.Heart size={20} />
                </div>
                <h3 className="font-heading text-lg text-brown mb-2">
                  Hausgemachte Qualität
                </h3>
                <p className="font-body text-xs text-brown-mid leading-relaxed">
                  Jeden Tag stellen wir unsere Eissorten und Waffelteige aus
                  hochwertigen Zutaten frisch in Wetzlar her.
                </p>
              </div>

              <div className="bg-cream p-6 rounded-2xl border border-beige">
                <div className="w-10 h-10 rounded-full bg-peach/50 flex items-center justify-center mb-4 text-terracotta">
                  <Icons.Users size={20} />
                </div>
                <h3 className="font-heading text-lg text-brown mb-2">
                  Ideal für Feiern
                </h3>
                <p className="font-body text-xs text-brown-mid leading-relaxed">
                  Ob Geburtstage, Kinderpartys oder Familientreffen — wir bieten
                  den passenden Rahmen für jeden besonderen Anlass.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Guidelines Section */}
          <FadeUp className="bg-cream-warm p-8 rounded-3xl border border-beige mb-16">
            <h2 className="font-heading text-xl text-brown mb-4">
              Wichtige Hinweise zu deiner Tischreservierung
            </h2>
            <div className="space-y-4 font-body text-sm text-brown-mid leading-relaxed">
              <p>
                <strong>Reservierung für Gruppen:</strong> Über unser
                Online-System kannst du Reservierungen für bis zu 8 Personen
                vornehmen. Für größere Gruppen oder exklusive Veranstaltungen
                erstelle bitte eine Anfrage per Telefon oder E-Mail.
              </p>
              <p>
                <strong>Pünktlichkeit & Freihaltezeit:</strong> Um allen Gästen
                den besten Service zu bieten, halten wir deinen Tisch bis zu 15
                Minuten nach der vereinbarten Uhrzeit frei. Solltest du
                verspätet sein, sag uns einfach kurz Bescheid.
              </p>
              <p>
                <strong>Besondere Wünsche:</strong> Hast du Allergien,
                bevorzugst du veganes Eis oder wünschst dir Hochstühle für
                Kleinkinder? Vermerke dies einfach bei deiner
                Online-Reservierung.
              </p>
            </div>
          </FadeUp>

          {/* FAQ Section */}
          <FadeUp className="mb-16">
            <h2 className="font-heading text-2xl text-brown mb-8 text-center">
              Häufig gestellte Fragen zur Tischreservierung
            </h2>
            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <div
                  key={index}
                  className="bg-cream p-6 rounded-2xl border border-beige"
                >
                  <h3 className="font-heading text-base text-brown mb-2">
                    {faq.q}
                  </h3>
                  <p className="font-body text-xs text-brown-mid leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Cross Links Section */}
          <FadeUp className="text-center pt-8 border-t border-beige">
            <h2 className="font-heading text-lg text-brown mb-4">
              Weitere Spezialitäten im Hey Fede! Eiscafé Wetzlar
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {CROSS_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-cream rounded-full text-xs font-bold text-brown border border-beige hover:bg-peach/30 transition-colors"
                >
                  <span>{link.emoji}</span>
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-cream-warm/95 backdrop-blur-md border-t border-beige p-4 z-50">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-beige rounded-xl p-3 mb-3 flex justify-between items-center text-xs">
            <span className="font-bold text-brown-mid">
              Fr 25.01 · {selectedTime} · {guests} Personen
            </span>
            <span className="font-black text-terracotta text-[11px]">
              BEARBEITEN
            </span>
          </div>
          <PrimaryButton large className="w-full" sectionBg="#fef8f5">
            <Icons.Calendar size={18} /> Tisch jetzt reservieren
          </PrimaryButton>
        </div>
      </div>

      <SchemaScripts
        schema={[
          buildBreadcrumbSchema([
            { name: "Reservierung", path: "/reservierung" },
          ]),
          buildFaqSchema(FAQ_DATA),
          {
            "@context": "https://schema.org",
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE.url}/reservierung`,
              inLanguage: "de",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform",
              ],
            },
            object: {
              "@type": "FoodEstablishment",
              "@id": `${SITE.url}/#restaurant`,
              name: BUSINESS.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.street,
                addressLocality: BUSINESS.city,
                postalCode: BUSINESS.postalCode,
                addressCountry: BUSINESS.country,
              },
            },
          },
        ]}
      />
    </div>
  );
}
