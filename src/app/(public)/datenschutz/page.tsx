import React from "react";
import type { Metadata } from "next";
import {
  LegalPageLayout,
  AccordionSection,
  RightCard,
} from "@/components/legal/LegalUI";
import {
  Shield,
  Database,
  Scale,
  Server,
  Mail,
  AlertTriangle,
  Eye,
  Lock,
  FileText,
} from "lucide-react";
import { FULL_ADDRESS } from "@/lib/seo/business-data";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Datenschutzerklärung | Hey Fede! Dessertbar Wetzlar",
  description:
    "Datenschutzerklärung von Hey Fede! Wetzlar: Transparente Informationen zur Verarbeitung deiner Daten nach DSGVO auf unserer Website & beim Vorbestellen.",
  path: "/datenschutz",
  keywords: [
    "Datenschutzerklärung Hey Fede",
    "Datenschutz Wetzlar",
    "DSGVO Dessertbar Wetzlar",
    "Datenschutzerklärung Café Wetzlar",
    "Datenschutzvereinbarung Hey Fede",
  ],
});

export default function DatenschutzPage() {
  return (
    <LegalPageLayout
      title="Datenschutzerklärung"
      subtitle="Transparenz über die Verarbeitung deiner personenbezogenen Daten nach der DSGVO."
      lastUpdated="Juni 2026"
    >
      <AccordionSection
        icon={<Shield size={14} />}
        number="01"
        title="1. Datenschutz auf einen Blick"
        defaultOpen
      >
        <h3
          style={{
            fontWeight: 800,
            marginTop: 12,
            marginBottom: 8,
            color: "#2d1f19",
          }}
        >
          Allgemeine Hinweise & Schutz deiner Privatsphäre
        </h3>
        <p>
          Der Schutz deiner persönlichen Daten ist für uns bei Hey Fede!
          Dessertbar & Café in Wetzlar von höchster Priorität. Die folgenden
          Hinweise geben dir einen vertrauensvollen und transparenten Überblick
          darüber, was mit deinen personenbezogenen Daten geschieht, wenn du
          unsere Website besuchst, unsere Speisekarte durchstöberst oder unseren
          Online-Vorbestellservice nutzt. Personenbezogene Daten sind sämtliche
          Daten, mit denen du als Einzelperson direkt oder indirekt persönlich
          identifiziert werden kannst. Ausführliche Informationen zum Thema
          Datenschutz entnimmst du unserer nachfolgend aufgeführten
          Datenschutzerklärung.
        </p>

        <h3
          style={{
            fontWeight: 800,
            marginTop: 16,
            marginBottom: 8,
            color: "#2d1f19",
          }}
        >
          Datenerfassung & Verantwortliche Stelle
        </h3>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Wer für die verantwortliche Stelle im Sinne der
          Datenschutz-Grundverordnung (DSGVO) zuständig ist und wie du bei
          Fragen zum Datenschutz direkt mit uns in Kontakt treten kannst,
          erfährst du nachfolgend:
        </p>
        <p>
          <strong>Verantwortliche Stelle:</strong>
          <br />
          Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café
          <br />
          {FULL_ADDRESS}
          <br />
          E-Mail für Datenschutzanfragen:{" "}
          <span style={{ fontWeight: 700, color: "#CC624C" }}>
            datenschutz@hey-fede.de
          </span>
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          oder Bestelldaten) entscheidet.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Database size={14} />}
        number="02"
        title="2. Erhobene Daten & Hosting"
      >
        <p style={{ marginBottom: 12 }}>
          Um dir ein nahtloses und sicheres Online-Erlebnis auf unserer Website
          sowie einen reibungslosen Ablauf bei der Vorbestellung unserer
          frischen Desserts, Eisbecher und Getränke zu ermöglichen, erheben und
          verarbeiten wir verschiedene Kategorien personenbezogener Daten. Diese
          Verarbeitung beschränkt sich stets auf das technisch und
          organisatorisch erforderliche Minimum:
        </p>
        <ul
          style={{ paddingLeft: 20, listStyleType: "disc", marginBottom: 16 }}
        >
          <li>
            <strong>Name & Handynummer:</strong> Benötigen wir zur Zuordnung
            deiner Bestellung und für direkte Rückfragen zu deiner Abholung in
            unserer Dessertbar in Wetzlar.
          </li>
          <li>
            <strong>E-Mail-Adresse:</strong> Zur Übermittlung der automatischen
            Bestellbestätigung, zur Abwicklung deiner Registrierung sowie zur
            Passwort-Rücksetzung.
          </li>
          <li>
            <strong>Bestelldaten:</strong> Details zu den ausgewählten
            Produkten, Abholzeiten und speziellen Wünschen zur passgenauen
            Zubereitung deiner Bestellung.
          </li>
          <li>
            <strong>Technische Protokolldaten:</strong> IP-Adresse, Browser-Typ,
            verwendetes Endgerät, Betriebssystem sowie Zugriffszeitpunkte
            (automatisch erfasst durch unseren Hosting-Provider zur
            Server-Sicherheit).
          </li>
        </ul>

        <h3
          style={{
            fontWeight: 800,
            marginTop: 16,
            marginBottom: 8,
            color: "#2d1f19",
          }}
        >
          Externes Hosting über Vercel
        </h3>
        <p>
          Diese Website wird extern gehostet (Vercel Inc., 440 N Barranca Ave
          #4133, Covina, CA 91723, USA). Die personenbezogenen Daten, die auf
          dieser Website erfasst werden, werden auf den Hochleistungsserver des
          Hosters gespeichert. Der Einsatz unseres Hosters erfolgt zum Zwecke
          der Vertragserfüllung gegenüber unseren potenziellen und bestehenden
          Kunden (Art. 6 Abs. 1 lit. b DSGVO) sowie im Interesse einer sicheren,
          schnellen und effizienten Bereitstellung unseres Online-Angebots durch
          einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Vercel
          ist unter dem EU-US Data Privacy Framework zertifiziert und bietet
          umfassende Garantien für eine datenschutzkonforme Verarbeitung.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="03"
        title="3. Rechtsgrundlagen der Verarbeitung"
      >
        <p>
          Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
          ausdrückliche Einwilligung der betroffenen Person einholen, dient Art.
          6 Abs. 1 lit. a der EU-Datenschutz-Grundverordnung (DSGVO) als
          Rechtsgrundlage. Dies betrifft beispielsweise die freiwillige
          Aktivierung von interaktiven Kartendiensten oder Marketing-Cookies.
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
          eines Vertrages erforderlich ist, dessen Vertragspartei die betroffene
          Person ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies
          gilt ebenso für sämtliche Verarbeitungsvorgänge, die zur Durchführung
          vorvertraglicher Maßnahmen erforderlich sind (etwa Vorbestellungen von
          Speisen).
        </p>
        <p>
          Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
          rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
          unterliegt (wie beispielsweise steuerrechtliche
          Aufbewahrungspflichten), dient Art. 6 Abs. 1 lit. c DSGVO als
          maßgebliche Rechtsgrundlage.
        </p>
        <p>
          Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres
          Unternehmens oder eines Drittlandes erforderlich und überwiegen die
          Interessen, Grundrechte und Grundfreiheiten des Betroffenen das
          Erstgenannte nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als
          Rechtsgrundlage (z. B. für die Aufrechterhaltung der IT-Sicherheit).
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Eye size={14} />}
        number="04"
        title="4. Drittanbieter & Empfänger"
      >
        <p style={{ marginBottom: 12 }}>
          Zur Gewährleistung der technischen Funktionalität, der Datensicherheit
          sowie eines modernen Nutzungserlebnisses auf der Hey Fede! Plattform
          arbeiten wir mit spezialisierten Dienstleistern zusammen. Sämtliche
          Drittanbieter wurden sorgfältig ausgewählt und verarbeiten Daten
          ausschließlich im Einklang mit den Bestimmungen der DSGVO:
        </p>
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.82rem",
            }}
          >
            <thead>
              <tr style={{ background: "rgba(238,223,204,0.6)" }}>
                {["Dienst", "Anbieter", "Zweck & Rechtsgrundlage"].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: "10px 14px",
                      fontWeight: 800,
                      color: "#2d1f19",
                      textAlign: "left",
                      fontSize: "0.72rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      borderBottom: "1px solid rgba(228,192,168,0.4)",
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Firebase Auth",
                  "Google Ireland Ltd.",
                  "Nutzer-Authentifizierung & Login-Sicherheit (Art. 6 Abs. 1 lit. b DSGVO)",
                ],
                [
                  "Firebase Firestore",
                  "Google Ireland Ltd.",
                  "Sichere Speicherung & Verwaltung von Vorbestellungen (Art. 6 Abs. 1 lit. b DSGVO)",
                ],
                [
                  "Vercel CDN",
                  "Vercel Inc., USA",
                  "Website-Hosting, Content Delivery & Performance (Art. 6 Abs. 1 lit. f DSGVO)",
                ],
                [
                  "Google Maps",
                  "Google Ireland Ltd.",
                  "Interaktive Standortkarte nach ausdrücklicher Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
                ],
              ].map(([d, a, z], i) => (
                <tr
                  key={i}
                  style={{
                    borderBottom: "1px solid rgba(228,192,168,0.25)",
                  }}
                >
                  <td style={{ padding: "10px 14px", fontWeight: 700 }}>{d}</td>
                  <td style={{ padding: "10px 14px" }}>{a}</td>
                  <td style={{ padding: "10px 14px" }}>{z}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccordionSection>

      <AccordionSection
        icon={<Server size={14} />}
        number="05"
        title="5. Drittlandtransfer (USA)"
      >
        <p>
          Einige der von uns eingesetzten technischen Dienstleister (wie Google
          Ireland Ltd. / Google LLC sowie Vercel Inc.) haben ihren Hauptsitz in
          den USA oder verarbeiten Daten auf Servern außerhalb des Europäischen
          Wirtschaftsraums (EWR). Die Übermittlung personenbezogener Daten in
          die USA erfolgt primär auf Grundlage des{" "}
          <strong>EU-US Data Privacy Frameworks</strong>{" "}
          (Angemessenheitsbeschluss der Europäischen Kommission gem. Art. 45
          DSGVO). Ergänzend haben wir mit allen Anbietern strenge
          EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) vereinbart,
          um ein angemessenes Datenschutzniveau lückenlos zu garantieren.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<FileText size={14} />}
        number="06"
        title="6. Speicherdauer"
      >
        <p style={{ marginBottom: 12 }}>
          Wir speichern deine personenbezogenen Daten nur so lange, wie dies zur
          Erfüllung der jeweiligen Verarbeitungszwecke erforderlich ist oder
          gesetzliche Aufbewahrungsfristen dies vorschreiben. Nach Ablauf der
          Fristen werden die entsprechenden Daten automatisch gelöscht:
        </p>
        <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
          <li>
            <strong>Bestelldaten:</strong> Werden 90 Tage nach der Abholung in
            unserer Dessertbar automatisch gelöscht, um das System zu entlasten
            und Datensparsamkeit zu gewährleisten.
          </li>
          <li>
            <strong>Kundenkontodaten:</strong> Bleiben bis zur endgültigen
            Löschung deines Nutzerkontos durch dich oder auf deinen
            ausdrücklichen Wunsch hin gespeichert.
          </li>
          <li>
            <strong>Server-Logfiles:</strong> Werden aus Sicherheitsgründen für
            maximal 30 Tage gespeichert und danach unwiderruflich gelöscht.
          </li>
          <li>
            <strong>Kontaktanfragen:</strong> Speichern wir für 6 Monate nach
            der abschließenden Bearbeitung deiner Anfrage für etwaige
            Nachfragen.
          </li>
          <li>
            <strong>Steuerrelevante Belege:</strong> Werden gemäß den
            gesetzlichen Aufbewahrungspflichten nach HGB und AO für 10 Jahre
            aufbewahrt.
          </li>
        </ul>
      </AccordionSection>

      <AccordionSection
        icon={<Lock size={14} />}
        number="07"
        title="7. Deine Rechte (Betroffenenrechte)"
      >
        <p style={{ marginBottom: 12 }}>
          Als betroffene Person stehen dir nach der Europäischen
          Datenschutz-Grundverordnung (DSGVO) umfassende Rechte bezüglich der
          Verarbeitung deiner personenbezogenen Daten zu. Du kannst diese Rechte
          jederzeit kostenfrei gegenüber uns geltend machen:
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: 8,
          }}
        >
          {[
            ["Auskunft", "Art. 15 DSGVO"],
            ["Berichtigung", "Art. 16 DSGVO"],
            ["Löschung", "Art. 17 DSGVO"],
            ["Einschränkung", "Art. 18 DSGVO"],
            ["Datenübertragbarkeit", "Art. 20 DSGVO"],
            ["Widerspruch", "Art. 21 DSGVO"],
          ].map(([r, a]) => (
            <RightCard key={r} right={r} article={a} />
          ))}
        </div>
        <p style={{ marginTop: 16 }}>
          Möchtest du von deinen Betroffenenrechten Gebrauch machen, eine
          erteilte Einwilligung widerrufen oder hast du allgemeine Fragen zum
          Datenschutz bei Hey Fede!, wende dich bitte jederzeit per E-Mail an
          uns unter{" "}
          <span style={{ fontWeight: 700, color: "#CC624C" }}>
            datenschutz@hey-fede.de
          </span>
          .
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Mail size={14} />}
        number="08"
        title="8. Kontaktformular & E-Mail-Kontakt"
      >
        <p>
          Wenn du uns per Kontaktformular oder E-Mail Anfragen zukommen lässt,
          werden deine Angaben aus dem Formular bzw. der E-Mail inklusive der
          von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
          und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
          geben wir nicht ohne deine Einwilligung weiter. Die Verarbeitung
          erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine
          Anfrage mit der Erfüllung eines Vertrags zusammenhängt, oder auf
          Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO)
          an der effizienten und professionellen Bearbeitung deiner Nachrichten.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<AlertTriangle size={14} />}
        number="09"
        title="9. Beschwerderecht bei der Aufsichtsbehörde"
      >
        <p>
          Im Falle von Verstößen gegen die DSGVO steht dir unbeschadet eines
          anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
          das Recht auf Beschwerde bei einer zuständigen
          Datenschutz-Aufsichtsbehörde zu. Dieses Recht besteht insbesondere in
          dem EU-Mitgliedstaat deines gewöhnlichen Aufenthaltsorts, deines
          Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes (Art. 77
          DSGVO).
        </p>
        <div
          style={{
            background: "rgba(238,223,204,0.5)",
            borderRadius: 14,
            padding: 16,
            marginTop: 12,
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          <strong style={{ color: "#2d1f19" }}>
            Unsere zuständige Datenschutz-Aufsichtsbehörde:
          </strong>
          <br />
          Der Hessische Beauftragte für Datenschutz und Informationsfreiheit
          (HBDI)
          <br />
          Postfach 3163, 65021 Wiesbaden
          <br />
          <a
            href="https://datenschutz.hessen.de"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#CC624C",
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: 3,
            }}
          >
            datenschutz.hessen.de
          </a>
        </div>
      </AccordionSection>
    </LegalPageLayout>
  );
}
