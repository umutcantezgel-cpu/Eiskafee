import React from "react";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { WaveDivider } from "../ui/WaveDivider";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer style={{ background: "#eedfcc", position: "relative" }}>
      <WaveDivider fromColor="#eedfcc" toColor="#eedfcc" variant={2} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 44px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 40,
            marginBottom: 44,
          }}
        >
          {/* Brand column */}
          <div>
            <Logo size={60} />
            <p
              style={{
                marginTop: 14,
                fontFamily: "Nunito,sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#5c3d35",
              }}
            >
              Dessertbar & Café
            </p>
            <p
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: "0.78rem",
                color: "#9a7060",
                marginTop: 3,
              }}
            >
              Frisch. Selbstgemacht. Mit Liebe.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
              {[
                ["#CC624C", "Instagram"],
                ["#2d1f19", "TikTok"],
              ].map(([bg, label]) => (
                <a
                  key={label}
                  href="#"
                  style={{
                    background: bg,
                    color: "#fefefe",
                    fontFamily: "Nunito,sans-serif",
                    fontWeight: 800,
                    fontSize: "0.76rem",
                    padding: "7px 15px",
                    borderRadius: 50,
                    textDecoration: "none",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "Calistoga,serif",
                fontSize: "1.05rem",
                color: "#CC624C",
                marginBottom: 14,
              }}
            >
              Navigation
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                ["/", "Startseite"],
                ["/menu", "Speisekarte"],
                ["/about", "Über Uns"],
                ["/visit", "Besuchen & Liefern"],
              ].map(([href, l]) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#5c3d35",
                    fontFamily: "Nunito,sans-serif",
                    fontWeight: 600,
                    fontSize: "0.87rem",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: 0,
                    textDecoration: "none",
                  }}
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "Calistoga,serif",
                fontSize: "1.05rem",
                color: "#CC624C",
                marginBottom: 14,
              }}
            >
              Kontakt
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                [MapPin, "Langgasse 68, 35576 Wetzlar"],
                [Phone, "06441 7890426"],
                [Phone, "017625026991 (WhatsApp)"],
              ].map(([Icon, text], i) => {
                const IconComponent = Icon as React.ElementType;
                return (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <IconComponent
                      size={14}
                      color="#CC624C"
                      style={{ flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      style={{
                        fontFamily: "Nunito,sans-serif",
                        fontSize: "0.84rem",
                        color: "#5c3d35",
                        fontWeight: 600,
                      }}
                    >
                      {text as string}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4
              style={{
                fontFamily: "Calistoga,serif",
                fontSize: "1.05rem",
                color: "#CC624C",
                marginBottom: 14,
              }}
            >
              Öffnungszeiten
            </h4>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.86rem" }}>
              <span style={{ fontFamily: "Nunito,sans-serif", fontWeight: 800, color: "#2d1f19" }}>
                Mo – So
              </span>
              <span style={{ fontFamily: "Nunito,sans-serif", color: "#5c3d35" }}>
                11:30 – 20:00
              </span>
            </div>
            <div style={{ height: 1, background: "#E4C0A8", margin: "12px 0" }} />
            <p
              style={{
                fontFamily: "Nunito,sans-serif",
                fontWeight: 800,
                fontSize: "0.78rem",
                color: "#CC624C",
              }}
            >
              ✓ Keine Liefergebühr bei Lieferando
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #E4C0A8",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontFamily: "Nunito,sans-serif", fontSize: "0.76rem", color: "#9a7060" }}>
            © 2024 Hey Fede! Dessertbar & Café
          </p>
          <div style={{ display: "flex", gap: 18 }}>
            {["Impressum", "Datenschutz", "AGB"].map((t) => (
              <a
                key={t}
                href="#"
                style={{ fontFamily: "Nunito,sans-serif", fontSize: "0.76rem", color: "#9a7060" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
