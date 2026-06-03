"use client";

import React from "react";
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
          Allgemeine Hinweise
        </h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit deinen personenbezogenen Daten passiert, wenn du diese Website
          besuchst. Personenbezogene Daten sind alle Daten, mit denen du
          persönlich identifiziert werden kannst.
        </p>

        <h3
          style={{
            fontWeight: 800,
            marginTop: 16,
            marginBottom: 8,
            color: "#2d1f19",
          }}
        >
          Datenerfassung auf dieser Website
        </h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung?</strong>
        </p>
        <p>
          Federica Rossi, Inhaberin von Hey Fede! Dessertbar & Café
          <br />
          {FULL_ADDRESS}
          <br />
          E-Mail:{" "}
          <span style={{ fontWeight: 700, color: "#b34832" }}>
            datenschutz@hey-fede.de
          </span>
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Database size={14} />}
        number="02"
        title="2. Erhobene Daten & Hosting"
      >
        <p style={{ marginBottom: 12 }}>
          Für die Nutzung unserer Website und den Vorbestellservice erfassen
          wir:
        </p>
        <ul
          style={{ paddingLeft: 20, listStyleType: "disc", marginBottom: 16 }}
        >
          <li>Name & Handynummer (für Rückfragen zur Abholung)</li>
          <li>E-Mail-Adresse (für Bestellbestätigung & Kontoanmeldung)</li>
          <li>Bestelldaten (zur Zubereitung deiner Bestellung)</li>
          <li>
            Technische Daten: IP-Adresse, Browser-Typ, Gerät, Betriebssystem
            (durch unseren Hoster)
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
          Externes Hosting
        </h3>
        <p>
          Diese Website wird extern gehostet (Vercel Inc., 440 N Barranca Ave
          #4133, Covina, CA 91723, USA). Die personenbezogenen Daten, die auf
          dieser Website erfasst werden, werden auf den Servern des Hosters
          gespeichert. Der Einsatz des Hosters erfolgt zum Zwecke der
          Vertragserfüllung gegenüber unseren potenziellen und bestehenden
          Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren,
          schnellen und effizienten Bereitstellung unseres Online-Angebots durch
          einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Vercel
          ist unter dem EU-US Data Privacy Framework zertifiziert.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="03"
        title="3. Rechtsgrundlagen der Verarbeitung"
      >
        <p>
          Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
          Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1 lit.
          a EU-Datenschutz-Grundverordnung (DSGVO) als Rechtsgrundlage.
        </p>
        <p>
          Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung
          eines Vertrages erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als
          Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge, die zur
          Durchführung vorvertraglicher Maßnahmen erforderlich sind.
        </p>
        <p>
          Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer
          rechtlichen Verpflichtung erforderlich ist, der unser Unternehmen
          unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
        </p>
        <p>
          Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres
          Unternehmens erforderlich und überwiegen die Interessen, Grundrechte
          und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht,
          so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die
          Verarbeitung.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Eye size={14} />}
        number="04"
        title="4. Drittanbieter & Empfänger"
      >
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
                {["Dienst", "Anbieter", "Zweck"].map((h) => (
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
                  "Google Ireland Ltd",
                  "Nutzer-Authentifizierung",
                ],
                [
                  "Firebase Firestore",
                  "Google Ireland Ltd",
                  "Speicherung von Bestellungen",
                ],
                ["Vercel", "Vercel Inc., USA", "Website-Hosting & CDN"],
                [
                  "Google Maps",
                  "Google Ireland Ltd",
                  "Interaktive Karte (nach Einwilligung)",
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
          Einige der eingesetzten Dienste (z. B. Google, Vercel) haben ihren
          Sitz in den USA oder übertragen Daten auf US-Server. Die
          Datenübermittlung in die USA erfolgt auf Grundlage des{" "}
          <strong>EU-US Data Privacy Framework</strong>{" "}
          (Angemessenheitsbeschluss gem. Art. 45 DSGVO) sowie ergänzend auf
          Basis von EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<FileText size={14} />}
        number="06"
        title="6. Speicherdauer"
      >
        <ul style={{ paddingLeft: 20, listStyleType: "disc" }}>
          <li>
            <strong>Bestelldaten:</strong> 90 Tage nach Abholung (automatische
            Löschung zur Entlastung des Systems)
          </li>
          <li>
            <strong>Kontodaten:</strong> Bis zur Löschung deines Kontos durch
            dich
          </li>
          <li>
            <strong>Server-Logs:</strong> Maximal 30 Tage
          </li>
          <li>
            <strong>Kontaktanfragen:</strong> 6 Monate nach Abschluss der
            Bearbeitung
          </li>
          <li>
            <strong>Steuerrelevante Daten:</strong> 10 Jahre (gesetzliche
            Aufbewahrungspflicht nach HGB und AO)
          </li>
        </ul>
      </AccordionSection>

      <AccordionSection
        icon={<Lock size={14} />}
        number="07"
        title="7. Deine Rechte (Betroffenenrechte)"
      >
        <p style={{ marginBottom: 12 }}>
          Nach der DSGVO stehen dir jederzeit folgende Rechte zu:
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
          Möchtest du von deinen Rechten Gebrauch machen, kontaktiere uns
          einfach unter{" "}
          <span style={{ fontWeight: 700, color: "#b34832" }}>
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
          und für den Fall von Anschlussfragen bei uns gespeichert. Die
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
          sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt,
          oder auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit.
          f DSGVO) an der effektiven Bearbeitung der Anfragen.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<AlertTriangle size={14} />}
        number="09"
        title="9. Beschwerderecht bei der Aufsichtsbehörde"
      >
        <p>
          Im Falle von Verstößen gegen die DSGVO steht dir ein Beschwerderecht
          bei einer Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat
          deines gewöhnlichen Aufenthalts, deines Arbeitsplatzes oder des Orts
          des mutmaßlichen Verstoßes (Art. 77 DSGVO).
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
            Unsere zuständige Behörde:
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
              color: "#b34832",
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
