"use client";

import React from "react";
import { LegalPageLayout } from "@/components/legal/LegalUI";
import { motion } from "framer-motion";
import { Building2, Phone, FileText, Info } from "lucide-react";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum"
      subtitle="Informationen gemäß § 5 TMG / § 5 DDG und § 18 MStV."
      lastUpdated="Juni 2026"
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {/* Anbieter Card */}
        <motion.div
          whileHover={{ y: -4 }}
          style={{
            background: "#f5efe8",
            borderRadius: 20,
            padding: 24,
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Building2 size={16} color="#b34832" />
            <h3
              style={{
                fontFamily: "var(--font-calistoga), serif",
                color: "#2d1f19",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              Anbieter
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              color: "#5c3d35",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Hey Fede - Dessertbar & Cafè
            <br />
            Inhaberin: {BUSINESS.founder}
            <br />
            {BUSINESS.street}
            <br />
            {BUSINESS.postalCode} {BUSINESS.city}
          </p>
        </motion.div>

        {/* Kontakt Card */}
        <motion.div
          whileHover={{ y: -4 }}
          style={{
            background: "#f5efe8",
            borderRadius: 20,
            padding: 24,
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Phone size={16} color="#b34832" />
            <h3
              style={{
                fontFamily: "var(--font-calistoga), serif",
                color: "#2d1f19",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              Kontakt
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              color: "#5c3d35",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Tel: {BUSINESS.phone}
            <br />
            WhatsApp: {BUSINESS.whatsappDisplay}
            <br />
            E-Mail:{" "}
            <a
              href="mailto:hallo@hey-fede.de"
              style={{
                color: "#b34832",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              hallo@hey-fede.de
            </a>
            <br />
            <span
              style={{
                fontSize: "0.75rem",
                opacity: 0.8,
                display: "block",
                marginTop: "4px",
              }}
            >
              Hinweis: Wir prüfen dieses Postfach nur sehr unregelmäßig. Für
              schnelle Anliegen bitten wir dich, uns anzurufen oder vor Ort
              vorbeizukommen!
            </span>
          </p>
        </motion.div>

        {/* USt-ID Card */}
        <motion.div
          whileHover={{ y: -4 }}
          style={{
            background: "#f5efe8",
            borderRadius: 20,
            padding: 24,
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <FileText size={16} color="#b34832" />
            <h3
              style={{
                fontFamily: "var(--font-calistoga), serif",
                color: "#2d1f19",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              Steuernummer
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              color: "#5c3d35",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            USt-IdNr. gem. § 27a UStG:
            <br />
            <span
              style={{
                display: "inline-block",
                background: "#eedfcc",
                padding: "3px 10px",
                borderRadius: 8,
                fontFamily: "monospace",
                fontSize: "0.85rem",
                marginTop: 6,
                color: "#b34832",
                fontWeight: "bold",
              }}
            >
              {BUSINESS.vatId}
            </span>
          </p>
        </motion.div>

        {/* Inhaltlich Verantwortlich */}
        <motion.div
          whileHover={{ y: -4 }}
          style={{
            background: "#f5efe8",
            borderRadius: 20,
            padding: 24,
            border: "1px solid rgba(228,192,168,0.3)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <Info size={16} color="#b34832" />
            <h3
              style={{
                fontFamily: "var(--font-calistoga), serif",
                color: "#2d1f19",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              § 18 Abs. 2 MStV
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-nunito), sans-serif",
              color: "#5c3d35",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Verantwortlich für den Inhalt:
            <br />
            {BUSINESS.founder}
            <br />
            {FULL_ADDRESS}
          </p>
        </motion.div>
      </div>

      <div
        style={{
          marginTop: 40,
          fontFamily: "var(--font-nunito), sans-serif",
          color: "#5c3d35",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-calistoga), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginBottom: 16,
          }}
        >
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#b34832", textDecoration: "underline" }}
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br />
          Unsere E-Mail-Adresse findest du oben im Impressum.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-calistoga), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-calistoga), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
      </div>
    </LegalPageLayout>
  );
}
