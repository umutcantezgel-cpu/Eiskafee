"use client";

import React from "react";
import { LegalPageLayout, AccordionSection } from "@/components/legal/LegalUI";
import { Scale, CheckCircle2, Info } from "lucide-react";
import { motion } from "framer-motion";

export default function AGBPage() {
  return (
    <LegalPageLayout
      title="Allgemeine Geschäftsbedingungen"
      subtitle="AGB für Vorbestellungen (Click & Collect) bei Hey Fede!"
      lastUpdated="Juni 2026"
    >
      {/* TL;DR Box */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
            "Vorbestellung ist kostenlos & unverbindlich (Zubereitung beginnt oft erst kurz vor Abholung)",
            "Zahlung erfolgt ausschließlich vor Ort im Laden",
            "Stornierung ist bis 30 Min vor Abholung über die App oder telefonisch möglich",
            "Nicht abgeholte Bestellungen werden nach 30 Min Wartezeit aufgelöst",
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
      </motion.div>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 1"
        title="Geltungsbereich & Anbieter"
        defaultOpen
      >
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Bestellungen
          (insbesondere Vorbestellungen / Click & Collect), die von Verbrauchern
          oder Unternehmern über die Hey Fede! Online-Plattform getätigt werden.
        </p>
        <p>
          Anbieter ist: Hey Fede! Dessertbar & Café, Inhaberin Federica Rossi,
          Langgasse 68, 35578 Wetzlar.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 2"
        title="Vertragsschluss"
      >
        <p>
          (1) Die Darstellung der Produkte im Online-Shop stellt kein rechtlich
          bindendes Angebot, sondern eine Aufforderung zur Abgabe einer
          Bestellung dar.
        </p>
        <p>
          (2) Durch Anklicken des Bestellbuttons gibst du eine verbindliche
          Anfrage auf Abschluss eines Kaufvertrags ab.
        </p>
        <p>
          (3) Der Vertrag kommt erst mit der Bestätigung deiner Bestellung durch
          uns (per SMS, E-Mail oder Push-Benachrichtigung) zustande. Bis dahin
          gilt die Bestellung als unverbindliche Reservierungsanfrage.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 3"
        title="Preise, Steuern & Bezahlung"
      >
        <p>
          (1) Alle angegebenen Preise sind Endpreise inklusive der gesetzlichen
          Mehrwertsteuer. Bei Speisen zum Mitnehmen (Take-away) gilt der
          ermäßigte Steuersatz (7%), beim Verzehr vor Ort der reguläre
          Steuersatz (19%).
        </p>
        <p>
          (2) Die Bezahlung erfolgt bei Hey Fede! derzeit ausschließlich{" "}
          <strong>vor Ort</strong> bei Abholung der Bestellung (bar, mit
          EC-Karte oder gängigen Kreditkarten). Ein Online-Payment wird aktuell
          nicht angeboten.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 4"
        title="Abholung & Stornierung"
      >
        <p>
          (1) Deine Bestellung wird zu der von dir ausgewählten Abholzeit frisch
          zubereitet. Wir bitten dich, pünktlich zu erscheinen, um die beste
          Qualität (insbesondere bei Eis, Bubble Waffles und heißen Getränken)
          garantieren zu können.
        </p>
        <p>
          (2) <strong>Stornierung:</strong> Du kannst deine Vorbestellung bis zu
          30 Minuten vor der gewählten Abholzeit kostenlos und ohne Angabe von
          Gründen stornieren (per App, Telefon oder WhatsApp).
        </p>
        <p>
          (3) <strong>Nichtabholung:</strong> Solltest du deine Bestellung ohne
          vorherige Stornierung nicht abholen, bewahren wir diese maximal 30
          Minuten für dich auf. Danach behalten wir uns vor, die Bestellung aus
          Qualitäts- und Platzgründen aufzulösen. Wir behalten uns vor,
          Nutzerkennungen bei wiederholten Nichtabholungen (Spaßbestellungen)
          temporär oder dauerhaft vom Vorbestellservice auszuschließen.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 5"
        title="Eigentumsvorbehalt"
      >
        <p>
          Bis zur vollständigen Bezahlung vor Ort bleiben die gelieferten bzw.
          ausgehändigten Waren im Eigentum von Hey Fede!.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 6"
        title="Gewährleistung & Haftung"
      >
        <p>
          (1) Es gelten die gesetzlichen Gewährleistungsrechte. Da es sich um
          schnell verderbliche Lebensmittel handelt, bitten wir dich,
          offensichtliche Mängel direkt bei der Übergabe vor Ort zu reklamieren,
          damit wir sofort für Ersatz sorgen können.
        </p>
        <p>
          (2) Hey Fede! haftet nur für Schäden, die auf einer vorsätzlichen oder
          grob fahrlässigen Pflichtverletzung beruhen. Für leichte
          Fahrlässigkeit haften wir nur bei der Verletzung wesentlicher
          Vertragspflichten (Kardinalpflichten) und beschränkt auf den
          vertragstypischen, vorhersehbaren Schaden.
        </p>
        <p>
          (3) Allergien und Unverträglichkeiten: Unsere Speisekarten weisen
          Allergene aus. Bitte weise unser Personal bei der Abholung dennoch
          zwingend auf schwere Allergien hin, da Kreuzkontaminationen in unserer
          Dessertbar trotz größter Sorgfalt nicht zu 100% ausgeschlossen werden
          können.
        </p>
      </AccordionSection>

      <AccordionSection
        icon={<Scale size={14} />}
        number="§ 7"
        title="Schlussbestimmungen"
      >
        <p>
          (1) Auf Verträge zwischen uns und dir findet das Recht der
          Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts
          Anwendung.
        </p>
        <p>
          (2) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt
          der Vertrag im Übrigen wirksam. Anstelle der unwirksamen Bestimmung
          gelten die einschlägigen gesetzlichen Vorschriften.
        </p>
      </AccordionSection>
    </LegalPageLayout>
  );
}
