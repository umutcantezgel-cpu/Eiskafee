"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X as XIcon, ChevronRight } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Startseite" },
    { href: "/menu", label: "Speisekarte" },
    { href: "/about", label: "Über Uns" },
    { href: "/visit", label: "Besuchen & Liefern" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          padding: "12px 24px",
          background: scrolled ? "rgba(245, 239, 232, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(228, 192, 168, 0.5)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}
          >
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
              <Logo size={44} />
              <span
                className="hide-mobile"
                style={{
                  fontFamily: "Calistoga,serif",
                  fontSize: "1.35rem",
                  color: "#2d1f19",
                  letterSpacing: "-0.01em",
                }}
              >
                Hey Fede!
              </span>
            </Link>
          </div>

          {/* Nav — desktop */}
          <nav
            className="desktop-nav"
            style={{
              display: "flex",
              gap: 28,
              background: "rgba(255, 255, 255, 0.4)",
              padding: "8px 24px",
              borderRadius: 50,
              boxShadow: "0 2px 12px rgba(0,0,0,0.02)",
            }}
          >
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "Nunito,sans-serif",
                    fontWeight: 700,
                    fontSize: "0.88rem",
                    color: isActive ? "#CC624C" : "#5c3d35",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* CTA — desktop */}
            <button
              className="order-cta"
              style={{
                background: "#CC624C",
                color: "#fefefe",
                border: "none",
                fontFamily: "Nunito,sans-serif",
                fontWeight: 800,
                fontSize: "0.84rem",
                padding: "10px 22px",
                borderRadius: 50,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#b5523d")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#CC624C")}
            >
              Jetzt bestellen
            </button>

            {/* Hamburger — mobile */}
            <button
              className="hamburger-btn"
              onClick={() => setOpen((o) => !o)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {open ? <XIcon size={22} color="#2d1f19" /> : <MenuIcon size={22} color="#2d1f19" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 899,
            background: "#f5efe8",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
            animation: "fadeIn 0.22s ease both",
          }}
        >
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  setOpen(false);
                  window.scrollTo(0, 0);
                }}
                style={{
                  background: isActive ? "#eedfcc" : "transparent",
                  border: "none",
                  padding: "18px 22px",
                  borderRadius: 16,
                  fontFamily: "Calistoga,serif",
                  fontSize: "1.5rem",
                  color: isActive ? "#CC624C" : "#2d1f19",
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textDecoration: "none",
                }}
              >
                <span>{label}</span>
                <ChevronRight size={20} color={isActive ? "#CC624C" : "#9a7060"} />
              </Link>
            );
          })}
          <div style={{ marginTop: 24 }}>
            <button
              style={{
                width: "100%",
                background: "#CC624C",
                color: "#fefefe",
                border: "none",
                fontFamily: "Nunito,sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                padding: 16,
                borderRadius: 50,
                cursor: "pointer",
              }}
            >
              Jetzt bei Lieferando bestellen →
            </button>
          </div>
          {/* Quick info */}
          <div
            style={{
              marginTop: 24,
              background: "#eedfcc",
              borderRadius: 16,
              padding: "16px 20px",
            }}
          >
            <p
              style={{
                fontFamily: "Nunito,sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#5c3d35",
              }}
            >
              Mo – So · 11:30 – 20:00 Uhr
            </p>
            <p
              style={{
                fontFamily: "Nunito,sans-serif",
                fontSize: "0.8rem",
                color: "#9a7060",
                marginTop: 3,
              }}
            >
              Langgasse 68 · 35576 Wetzlar
            </p>
          </div>
        </div>
      )}
    </>
  );
}
