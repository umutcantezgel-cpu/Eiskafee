"use client";

import React from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { BUSINESS } from "@/lib/seo/business-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="hf-footer">
      <div className="hf-footer-grid">
        <div>
          <svg
            width="52"
            height="52"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M30,2 C38,2 45,5 49,11 C54,16 57,22 57,29 C57,37 53,44 48,48 C43,53 36,58 29,57 C22,57 15,53 10,48 C4,43 2,36 2,29 C2,21 6,14 12,9 C17,3 23,2 30,2 Z"
              fill="#E4C0A8"
            />
            <text
              x="50%"
              y="44%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: "'Calistoga', serif",
                fontSize: "10.5px",
                fill: "#fefefe",
              }}
            >
              <tspan x="50%" dy="-4.5">
                Hey
              </tspan>
              <tspan x="50%" dy="13">
                Fede!
              </tspan>
            </text>
          </svg>
          <p
            style={{
              font: "700 .85rem var(--font-body)",
              color: "#5c3d35",
              marginTop: "14px",
            }}
          >
            Dessertbar &amp; Café
          </p>
          <p
            style={{
              font: "400 .78rem var(--font-body)",
              color: "#9a7060",
              marginTop: "3px",
            }}
          >
            Frisch. Selbstgemacht. Mit Liebe.
          </p>
        </div>
        <div>
          <h4 className="hf-footer-h">Navigation</h4>
          <nav
            role="navigation"
            aria-label="Footer-Navigation"
            className="flex flex-col"
          >
            <TransitionLink href="/" className="hf-footer-link">
              Startseite
            </TransitionLink>
            <TransitionLink href="/menu" className="hf-footer-link">
              Speisekarte
            </TransitionLink>
            <TransitionLink href="/about" className="hf-footer-link">
              Über Uns
            </TransitionLink>
            <TransitionLink href="/visit" className="hf-footer-link">
              Besuchen &amp; Liefern
            </TransitionLink>
          </nav>
        </div>
        <div>
          <h4 className="hf-footer-h">Kontakt</h4>
          <p className="hf-footer-c">Langgasse 68, 35576 Wetzlar</p>
          <p className="hf-footer-c">06441 7890426</p>
          <p className="hf-footer-c">017625026991 (WhatsApp)</p>
        </div>
        <div>
          <h4 className="hf-footer-h">Öffnungszeiten</h4>
          {BUSINESS.openingHoursDisplay.map((dayData) => (
            <div
              key={dayData.day}
              className="hf-menurow"
              style={{ padding: "0 0 6px 0", minHeight: "auto" }}
            >
              <span
                style={{
                  font: "800 .86rem var(--font-body)",
                  color: "#2d1f19",
                }}
              >
                {dayData.day}
              </span>
              <span
                style={{
                  font: "400 .86rem var(--font-body)",
                  color: "#5c3d35",
                }}
              >
                {dayData.hours}
              </span>
            </div>
          ))}
          <div
            className="hf-divider"
            style={{ marginTop: "8px", marginBottom: "8px" }}
          ></div>
          <p style={{ font: "800 .78rem var(--font-body)", color: "#CC624C" }}>
            ✓ Keine Liefergebühr
          </p>
        </div>
      </div>
      <div className="hf-footer-bottom">
        <p style={{ font: "400 .76rem var(--font-body)", color: "#9a7060" }}>
          © {currentYear} Hey Fede! Dessertbar &amp; Café
        </p>
        <div style={{ display: "flex", gap: "18px" }}>
          <TransitionLink href="/legal#impressum" className="hf-footer-legal">
            Impressum
          </TransitionLink>
          <TransitionLink href="/legal#datenschutz" className="hf-footer-legal">
            Datenschutz
          </TransitionLink>
          <TransitionLink href="/legal#agb" className="hf-footer-legal">
            AGB
          </TransitionLink>
        </div>
      </div>
    </footer>
  );
}
