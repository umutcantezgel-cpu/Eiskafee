import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout, AccordionSection } from "@/components/legal/LegalUI";
import { Scale, CheckCircle2, Info } from "lucide-react";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata: Metadata = buildMetadata({
  title: "AGB & Allgemeine Geschäftsbedingungen | Hey Fede! Wetzlar",
  description:
    "Allgemeine Geschäftsbedingungen (AGB) von Hey Fede! Wetzlar: Transparente Regelungen für Vorbestellungen, Click & Collect, Abholung und Stornierung.",
  path: "/agb",
  keywords: [
    "AGB Hey Fede Wetzlar",
    "Allgemeine Geschäftsbedingungen Hey Fede",
    "Click and Collect AGB Wetzlar",
    "Vorbestellung AGB Dessertbar",
    "Rechtliches Hey Fede",
  ],
});

export default function AGBPage() {
  return (
    <LegalPageLayout
      title="AGB & Allgemeine Geschäftsbedingungen"
      subtitle="Allgemeine Geschäftsbedingungen für Vorbestellungen (Click & Collect) bei Hey Fede! Dessertbar & Café in Wetzlar"
      lastUpdated="Juni 2026"
    >
      {/* TL;DR Box */}
      <div
        style={{
          background: "linear-gradient(135deg, #E4C0A8 0%, #eedfcc 100%)",
          padding: 24,
          borderRadius: 20,
          marginBottom: 32,
          fontFamily: "var(--font-body), sans-serif",
          fontSize: "0.88rem",
          color: "#5c3d35",
          border: "1px solid rgba(228,192,168,0.3)",
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#2d1f19",
            fontSize: "1rem",
            margin: "0 0 14px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Info size={16} color="#CC624C" /> Das Wichtigste in Kürze
        </h3>
        <div style={{ display: "grid", gap: 8 }}>
          {[
            "Vorbestellung ist kostenlos & unverbindlich (Zubereitung beginnt kurz vor der gewählten Abholzeit)",
            "Bezahlung erfolgt bequem & sicher direkt vor Ort im Laden in Wetzlar (Bar, EC oder Kreditkarte)",
            "Kostenlose Stornierung ist bis 30 Minuten vor Abholung über die App, per Telefon oder WhatsApp möglich",
            "Nicht abgeholte Bestellungen werden nach 30 Minuten Wartezeit zum Erhalt der Frische aufgelöst",
          ].map((item) => (
            <div
              key={item}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              <CheckCircle2 size={14} color="#CC624C" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 1"
        title="Geltungsbereich & Anbieter"
        defaultOpen
      >
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für sämtliche
          Verträge, Bestellungen und Vorbestellungen (insbesondere über den
          Vorbestellservice / Click & Collect), die Kunden als Verbraucher oder
          Unternehmer über die Hey Fede! Online-Plattform, unsere Web-App oder
          vor Ort im Café mit uns abschließen. Abweichende oder ergänzende
          Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn,
          Hey Fede! stimmt ihrer Geltung ausdrücklich schriftlich zu.
        </p>
        <p>
          Vertragspartner und Anbieter des Vorbestellservices ist die Hey Fede!
          Dessertbar & Café, Inhaberin Federica Rossi, Langgasse 68, 35578
          Wetzlar (nachfolgend „Hey Fede!“, „wir“ oder „uns“ genannt). Für alle
          Anfragen, Vorbestellungen oder Kundenrückmeldungen stehen wir dir über
          unsere gewohnten Kontaktkanäle sowie persönlich in unserer Dessertbar
          in der Wetzlarer Altstadt zur Verfügung.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 2"
        title="Vertragsschluss"
      >
        <p>
          (1) Die Präsentation und Darstellung unseres Produktangebots (z. B.
          frische Bubble Waffles, Crêpes, Eisbecher, Spezialitätengetränke und
          Desserts) auf der Hey Fede! Online-Plattform stellt kein rechtlich
          bindendes Angebot im Sinne des BGB dar, sondern eine unverbindliche
          Aufforderung an den Kunden, eine Bestellung (Reservierungsanfrage)
          abzugeben.
        </p>
        <p>
          (2) Durch das Absenden einer Vorbestellung über die Hey Fede! Web-App
          und das Betätigen des Buttons „Kostenpflichtig bestellen“ bzw.
          „Vorbestellung abschicken“ gibst du ein verbindliches Angebot zum
          Abschluss eines Kaufvertrages über die ausgewählten Speisen und
          Getränke ab.
        </p>
        <p>
          (3) Ein verbindlicher Kaufvertrag kommt erst zustande, wenn Hey Fede!
          deine Bestellung ausdrücklich bestätigt. Die Bestätigung erfolgt
          unmittelbar per SMS, E-Mail oder über eine Push-Benachrichtigung in
          der App. Bis zu dieser Bestätigung behalten wir uns das Recht vor,
          Bestellungen aufgrund unzureichender Kapazitäten oder fehlender
          Zutaten abzulehnen.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 3"
        title="Preise, Steuern & Bezahlung"
      >
        <p>
          (1) Alle in unserem Online-Shop sowie auf den Speisekarten angegebenen
          Preise sind Endpreise in Euro (€) und enthalten die jeweils gültige
          gesetzliche Mehrwertsteuer. Bei Speisen und Getränken zum Mitnehmen
          (Take-away / Click & Collect) wird der gesetzlich ermäßigte Steuersatz
          (7%) angewendet, während beim Verzehr direkt vor Ort in unserer
          Dessertbar der reguläre Steuersatz (19%) berechnet wird.
        </p>
        <p>
          (2) Die Bezahlung deiner Vorbestellung erfolgt bei Hey Fede! derzeit
          ausschließlich
          <strong> direkt vor Ort bei der Abholung</strong> in unserer Filiale
          in der Langgasse 68, 35578 Wetzlar. Wir akzeptieren Bargeld, EC-Karten
          (Girocard) sowie alle gängigen Kreditkarten und kontaktlose
          Zahlungsmethoden (z. B. Apple Pay, Google Pay). Eine Online-Zahlung
          vorab findet derzeit nicht statt, sodass keine Zahlungsdaten im
          Internet eingegeben werden müssen.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 4"
        title="Abholung & Stornierung"
      >
        <p>
          (1) <strong>Pünktliche Abholung:</strong> Die von dir gewählte
          Abholzeit ist für die Zubereitung maßgeblich. Um dir maximale Frische
          und herausragende Qualität bei unseren handgemachten Eissorten, warmen
          Bubble Waffles, Crêpes und Kaffeespezialitäten zu garantieren,
          bereiten wir deine Produkte zeitnah vor. Wir bitten dich daher
          höflich, pünktlich zum gewählten Abholzeitpunkt zu erscheinen.
        </p>
        <p>
          (2) <strong>Kostenlose Stornierung:</strong> Da uns Flexibilität
          wichtig ist, kannst du deine Vorbestellung bis zu 30 Minuten vor dem
          vereinbarten Abholzeitpunkt völlig kostenfrei und ohne Angabe von
          Gründen stornieren. Die Stornierung kann direkt über die Hey Fede!
          Web-App, per Telefon oder über unsere WhatsApp-Hotline vorgenommen
          werden.
        </p>
        <p>
          (3) <strong>Umgang mit Nichtabholung:</strong> Bei unentschuldigter
          Nichtabholung halten wir deine Speisen und Getränke für maximal 30
          Minuten ab dem vereinbarten Zeitpunkt warm bzw. gekühlt. Verstreicht
          diese Frist ohne Rückmeldung, wird die Bestellung aus Hygiene- und
          Qualitätsgründen entsorgt. Wir behalten uns vor, Nutzerkonten bei
          wiederholter Nichtabholung (sogenannte Spaßbestellungen) vorübergehend
          oder dauerhaft für weitere Online-Vorbestellungen zu sperren.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 5"
        title="Eigentumsvorbehalt"
      >
        <p>
          Die von Hey Fede! ausgehändigten Speisen, Getränke und
          Merchandise-Artikel bleiben bis zur vollständigen und beglichenen
          Bezahlung des Rechnungsbetrages an der Kasse unserer Dessertbar im
          Eigentum der Inhaberin Federica Rossi (Hey Fede! Dessertbar & Café).
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 6"
        title="Gewährleistung & Haftung"
      >
        <p>
          (1) <strong>Gewährleistungsrechte & Frischeversprechen:</strong> Es
          gelten die gesetzlichen Mängelhaftungsrechte. Da es sich bei unseren
          Produkten um frisch zubereitete und schnell verderbliche Lebensmittel
          handelt, bitten wir dich, die Ware unmittelbar bei der Übergabe an der
          Theke zu überprüfen. Etwaige Abweichungen oder Mängel werden von
          unserem Team sofort unbürokratisch korrigiert oder ersetzt.
        </p>
        <p>
          (2) <strong>Haftungsbeschränkung:</strong> Hey Fede! haftet
          uneingeschränkt für Schäden aus der Verletzung des Lebens, des Körpers
          oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig
          verursachte Schäden. Bei leicht fahrlässiger Verletzung wesentlicher
          Vertragspflichten (Kardinalpflichten) haftet Hey Fede! der Höhe nach
          begrenzt auf den bei Vertragsschluss vorhersehbaren, vertragstypischen
          Schaden.
        </p>
        <p>
          (3) <strong>Allergene & Unverträglichkeiten:</strong> Informationen
          über enthaltene Allergene und Zusatzstoffe stellen wir in der Web-App
          sowie in der Speisekarte vor Ort transparent bereit. Wir weisen
          ausdrücklich darauf hin, dass in unserem Betrieb
          Allergen-Kreuzkontaminationen trotz höchster Hygiene- und
          Sorgfaltsstandards nicht zu 100 % ausgeschlossen werden können. Bei
          schweren Allergien informiere bitte unverzüglich unser Servicepersonal
          vor Ort.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 7"
        title="Schlussbestimmungen"
      >
        <p>
          (1) <strong>Anwendbares Recht:</strong> Auf sämtliche
          Rechtsbeziehungen zwischen Hey Fede! und den Kunden findet
          ausschließlich das Recht der Bundesrepublik Deutschland unter
          Ausschluss des UN-Kaufrechts (CISG) Anwendung. Bei Verbrauchern gilt
          diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch
          zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher
          seinen gewöhnlichen Aufenthalt hat, entzogen wird.
        </p>
        <p>
          (2) <strong>Severabilitätsklausel & Streitbeilegung:</strong> Sollten
          einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen ganz
          oder teilweise unwirksam oder undurchführbar sein oder werden, bleibt
          die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Anstelle
          der unwirksamen Regelung treten die entsprechenden gesetzlichen
          Bestimmungen.
        </p>
      </AccordionSection>
    </LegalPageLayout>
  );
}
