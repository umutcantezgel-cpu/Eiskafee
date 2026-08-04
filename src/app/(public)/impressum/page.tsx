import React from "react";
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalUI";
import { Building2, Phone, FileText, Info } from "lucide-react";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";
import { buildMetadata } from "@/lib/seo/base-metadata";

export const metadata: Metadata = buildMetadata({
  title: "Impressum | Hey Fede! Dessertbar & Eiscafé in Wetzlar",
  description:
    "Offizielles Impressum & rechtliche Informationen von Hey Fede! Dessertbar & Eiscafé Wetzlar. Angaben gemäß § 5 DDG & § 18 MStV sowie Kontaktdaten.",
  path: "/impressum",
  keywords: [
    "Impressum Hey Fede",
    "Impressum Dessertbar Wetzlar",
    "Federica Rossi Wetzlar",
    "Kontakt Hey Fede Wetzlar",
  ],
});

export default function ImpressumPage() {
  return (
    <LegalPageLayout
      title="Impressum – Hey Fede! Dessertbar & Café Wetzlar"
      subtitle="Rechtliche Anbieterkennzeichnung und Pflichtangaben gemäß § 5 DDG (ehemals TMG) sowie § 18 MStV."
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
        <div
          className="transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: "#F5EFE8",
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
            <Building2 size={16} color="#CC624C" />
            <h3
              style={{
                fontFamily: "var(--font-heading), serif",
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
              fontFamily: "var(--font-body), sans-serif",
              color: "#5c3d35",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Hey Fede - Dessertbar & Café
            <br />
            Inhaberin: {BUSINESS.founder}
            <br />
            {BUSINESS.street}
            <br />
            {BUSINESS.postalCode} {BUSINESS.city}
          </p>
        </div>

        {/* Kontakt Card */}
        <div
          className="transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: "#F5EFE8",
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
            <Phone size={16} color="#CC624C" />
            <h3
              style={{
                fontFamily: "var(--font-heading), serif",
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
              fontFamily: "var(--font-body), sans-serif",
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
                color: "#CC624C",
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
              Hinweis: Wir prüfen dieses E-Mail-Postfach unregelmäßig. Für
              dringende Anfragen bitten wir dich, uns direkt anzurufen oder
              persönlich in der Langgasse 68 vorbeizukommen!
            </span>
          </p>
        </div>

        {/* USt-ID Card */}
        <div
          className="transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: "#F5EFE8",
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
            <FileText size={16} color="#CC624C" />
            <h3
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#2d1f19",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              Umsatzsteuer-ID
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
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
                color: "#CC624C",
                fontWeight: "bold",
              }}
            >
              {BUSINESS.vatId}
            </span>
          </p>
        </div>

        {/* Inhaltlich Verantwortlich */}
        <div
          className="transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: "#F5EFE8",
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
            <Info size={16} color="#CC624C" />
            <h3
              style={{
                fontFamily: "var(--font-heading), serif",
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
              fontFamily: "var(--font-body), sans-serif",
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
        </div>

        {/* Technische Konzeption & Webdesign */}
        <div
          className="transition-transform duration-300 hover:-translate-y-1"
          style={{
            background: "#F5EFE8",
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
            <Info size={16} color="#CC624C" />
            <h3
              style={{
                fontFamily: "var(--font-heading), serif",
                color: "#2d1f19",
                fontSize: "0.95rem",
                margin: 0,
              }}
            >
              Konzeption & Realisierung
            </h3>
          </div>
          <p
            style={{
              fontFamily: "var(--font-body), sans-serif",
              color: "#5c3d35",
              fontSize: "0.88rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Technische Konzeption und Webdesign:
            <br />
            <a
              href="https://codayweb.de"
              style={{
                color: "#CC624C",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Coday Webdesign Wetzlar
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 40,
          fontFamily: "var(--font-body), sans-serif",
          color: "#5c3d35",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginBottom: 16,
          }}
        >
          EU-Streitschlichtung
        </h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) für Verbraucherinnen und Verbraucher
          bereit, die du unter{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#CC624C", textDecoration: "underline" }}
          >
            https://ec.europa.eu/consumers/odr/
          </a>{" "}
          findest. Wir sind stets bemüht, eventuelle Meinungsverschiedenheiten
          aus unseren Verträgen einvernehmlich zu klären. Unsere E-Mail-Adresse
          für direkte Anfragen findest du weiter oben im Impressum von Hey Fede!
          in Wetzlar.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Verbraucherstreitbeilegung / Universalschlichtungsstelle
        </h2>
        <p>
          Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle gemäß
          Verbraucherstreitbeilegungsgesetz (VSBG) teilzunehmen. Wir legen
          jedoch größten Wert auf eine kundenfreundliche und direkte Lösung
          aller Anliegen – wende dich bei Fragen oder Anmerkungen gerne direkt
          an unser Team von Hey Fede! Dessertbar & Café in Wetzlar.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Haftung für Inhalte
        </h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG
          (Digitale-Dienste-Gesetz, ehemals Telemediengesetz § 7 Abs. 1 TMG) für
          eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Haftung für Links
        </h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2
          style={{
            fontFamily: "var(--font-heading), serif",
            color: "#2d1f19",
            fontSize: "1.4rem",
            marginTop: 32,
            marginBottom: 16,
          }}
        >
          Urheberrecht
        </h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Solltest du trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </LegalPageLayout>
  );
}
