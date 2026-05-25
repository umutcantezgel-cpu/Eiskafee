import React from "react";
import { FadeUp } from "@/components/ui/FadeUp";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#eedfcc] pt-[110px] px-6 pb-12 text-center">
        <h1 className="font-calistoga text-4xl text-[#2d1f19] mb-3">Rechtliches</h1>
        <p className="font-nunito text-[#5c3d35]">Impressum, Datenschutz & AGB</p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <FadeUp>
          {/* Impressum */}
          <section id="impressum" className="mb-20 scroll-mt-[100px]">
            <h2 className="font-calistoga text-[1.8rem] text-[#2d1f19] mb-8 border-b border-[#eedfcc] pb-4">Impressum</h2>
            <div className="space-y-6 font-nunito text-[#5c3d35] text-[0.95rem] leading-relaxed">
              <div>
                <h3 className="font-bold text-[#2d1f19] mb-1">Anbieter</h3>
                <p>Hey Fede! Dessertbar & Café<br/>Inhaberin: Federica Rossi<br/>Langgasse 68<br/>35576 Wetzlar<br/>Deutschland</p>
              </div>
              <div>
                <h3 className="font-bold text-[#2d1f19] mb-1">Kontakt</h3>
                <p>Telefon: 06441 7890426<br/>WhatsApp: 0176 25026991<br/>E-Mail: <span className="font-bold text-[#CC624C]">hallo@hey-fede.de</span></p>
              </div>
              <div>
                <h3 className="font-bold text-[#2d1f19] mb-1">Umsatzsteuer-ID</h3>
                <p>Gemäß § 27 a Umsatzsteuergesetz:<br/><span className="inline-block bg-[#eedfcc] px-2 py-0.5 rounded font-mono text-sm mt-1">DE 312 456 789</span></p>
              </div>
              <div>
                <h3 className="font-bold text-[#2d1f19] mb-1">Aufsichtsbehörde</h3>
                <p>Lebensmittelüberwachung Lahn-Dill-Kreis<br/>Karl-Kellner-Ring 51, 35576 Wetzlar</p>
              </div>
              <div className="bg-[#eedfcc] p-4 rounded-xl mt-8 text-sm">
                <strong className="text-[#2d1f19]">EU-Streitschlichtung:</strong> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren teilzunehmen.
              </div>
            </div>
          </section>

          {/* Datenschutz */}
          <section id="datenschutz" className="mb-20 scroll-mt-[100px]">
            <h2 className="font-calistoga text-[1.8rem] text-[#2d1f19] mb-8 border-b border-[#eedfcc] pb-4">Datenschutz</h2>
            <div className="space-y-8 font-nunito text-[#5c3d35] text-[0.95rem] leading-relaxed">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#CC624C] text-white flex items-center justify-center font-calistoga text-sm">1</div>
                  <h3 className="font-calistoga text-xl text-[#2d1f19]">Verantwortlicher</h3>
                </div>
                <p>Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café, Langgasse 68, 35576 Wetzlar. Erreichbar unter <span className="font-bold text-[#CC624C]">datenschutz@hey-fede.de</span>.</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#CC624C] text-white flex items-center justify-center font-calistoga text-sm">2</div>
                  <h3 className="font-calistoga text-xl text-[#2d1f19]">Erhobene Daten</h3>
                </div>
                <p className="mb-3">Für die Vorbestellung erfassen wir folgende personenbezogene Daten:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Name & Handynummer (für Rückfragen zur Abholung)</li>
                  <li>E-Mail-Adresse (für Bestellbestätigung)</li>
                  <li>Bestelldaten (zur Zubereitung)</li>
                  <li>Technische Daten (Browser, Gerät — anonymisiert)</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#CC624C] text-white flex items-center justify-center font-calistoga text-sm">3</div>
                  <h3 className="font-calistoga text-xl text-[#2d1f19]">Vorbestellung & Konto</h3>
                </div>
                <p>Da die Bezahlung im Laden erfolgt, übermitteln wir <strong>keine Zahlungsdaten</strong> an Dritte. Deine Bestellung wird ausschließlich zur Zubereitung verarbeitet und nach 90 Tagen automatisch gelöscht (außer du legst ein Konto an).</p>
              </div>
            </div>
          </section>

          {/* AGB */}
          <section id="agb" className="scroll-mt-[100px]">
            <h2 className="font-calistoga text-[1.8rem] text-[#2d1f19] mb-8 border-b border-[#eedfcc] pb-4">AGB</h2>
            
            <div className="bg-[#E4C0A8] p-5 rounded-xl mb-10 text-[#5c3d35] font-nunito text-sm">
              <h3 className="font-calistoga text-[#2d1f19] text-base mb-3 flex items-center gap-2">Das Wichtigste in Kürze</h3>
              <ul className="space-y-2">
                <li>▸ Vorbestellung ist kostenlos & unverbindlich</li>
                <li>▸ Zahlung erfolgt vor Ort im Laden</li>
                <li>▸ Stornierung bis 30 Min vor Abholung möglich</li>
                <li>▸ Nicht abgeholte Bestellungen werden nach 30 Min Verzug aufgelöst</li>
              </ul>
            </div>

            <div className="space-y-8 font-nunito text-[#5c3d35] text-[0.95rem] leading-relaxed">
              {[
                { n: '§ 1', t: 'Geltungsbereich', c: 'Diese AGB gelten für alle Vorbestellungen über die Hey Fede! Online-Plattform.' },
                { n: '§ 2', t: 'Vertragsschluss', c: 'Der Vertrag kommt mit Bestätigung deiner Bestellung per SMS oder E-Mail zustande. Bis dahin gilt die Bestellung als unverbindliche Anfrage.' },
                { n: '§ 3', t: 'Preise & Bezahlung', c: 'Alle Preise inkl. gesetzl. MwSt. (7% für Speisen zum Mitnehmen, 19% Verzehr vor Ort). Bezahlt wird ausschließlich vor Ort — bar, mit EC- oder Kreditkarte.' },
                { n: '§ 4', t: 'Abholung & Stornierung', c: 'Stornierung kostenlos bis 30 Min vor Abholzeit über die App, telefonisch oder per WhatsApp. Bei Nichtabholung kann die Bestellung anderweitig vergeben werden.' },
                { n: '§ 5', t: 'Haftung', c: 'Hey Fede! haftet nur bei Vorsatz und grober Fahrlässigkeit. Für leichte Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten.' },
              ].map(s => (
                <div key={s.n} className="border-b border-[#eedfcc] pb-6 last:border-0">
                  <div className="flex gap-3 mb-2">
                    <span className="font-calistoga text-[#CC624C]">{s.n}</span>
                    <span className="font-calistoga text-[#2d1f19]">{s.t}</span>
                  </div>
                  <p>{s.c}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>
      </div>
    </div>
  );
}
