"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu as MenuIcon, X as XIcon, ChevronRight, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useStore } from "@/store/useStore";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { cart, toggleCart } = useStore();
  const clickCountRef = React.useRef(0);
  const lastClickRef = React.useRef(0);

  const handleLogoClick = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastClickRef.current > 500) {
      clickCountRef.current = 1;
    } else {
      clickCountRef.current += 1;
    }
    lastClickRef.current = now;

    if (clickCountRef.current >= 3) {
      clickCountRef.current = 0;
      const already = (() => { try { return localStorage.getItem('hf_ach_sweet_tooth') === '1'; } catch { return false; } })();
      if (!already) {
        try { localStorage.setItem('hf_ach_sweet_tooth', '1'); } catch {}
        window.dispatchEvent(new CustomEvent('achievement-unlocked'));
      }
    }
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { id: "menu", href: "/menu", label: "Speisekarte" },
    { id: "about", href: "/about", label: "Über Uns" },
    { id: "visit", href: "/visit", label: "Besuchen & Liefern" },
  ];

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: scrolled ? 'rgba(245,239,232,0.96)' : '#f5efe8',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(45,31,25,0.09)' : 'none',
        borderBottom: scrolled ? '1px solid #eedfcc' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

          <TransitionLink href="/" onClick={handleLogoClick} aria-label="Hey Fede! Startseite">
            <Logo size={50} />
          </TransitionLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map(({ id, href, label }) => {
              const active = pathname === href;
              return (
                <TransitionLink key={id} href={href}
                  style={{
                    background: active ? '#eedfcc' : 'transparent',
                    border: 'none', padding: '8px 18px', borderRadius: 50,
                    fontFamily: 'var(--font-nunito), sans-serif', fontWeight: active ? 800 : 600,
                    fontSize: '0.87rem', color: active ? '#CC624C' : '#5c3d35',
                    cursor: 'pointer', transition: 'all 0.2s ease', whiteSpace: 'nowrap', textDecoration: 'none'
                  }}>
                  {label}
                </TransitionLink>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* CTA — desktop */}
            <TransitionLink href="/menu"
              style={{
                background: '#CC624C', color: '#fefefe', border: 'none',
                fontFamily: 'var(--font-nunito), sans-serif', fontWeight: 800, fontSize: '0.84rem',
                padding: '10px 22px', borderRadius: 50, cursor: 'pointer',
                whiteSpace: 'nowrap', transition: 'background 0.2s', textDecoration: 'none'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#b5523d'}
              onMouseLeave={e => e.currentTarget.style.background = '#CC624C'}>
              Jetzt bestellen
            </TransitionLink>

            {/* Cart Button */}
            <button 
              onClick={toggleCart}
              className="relative w-10 h-10 rounded-full bg-[#f5efe8] flex items-center justify-center text-[#CC624C] hover:bg-[#eedfcc] transition-colors border-none cursor-pointer"
            >
              <ShoppingBag size={20} strokeWidth={2.5} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#CC624C] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#f5efe8]">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Hamburger — mobile */}
            <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
              onClick={() => setOpen(o => !o)}>
              {open
                ? <XIcon size={22} color="#2d1f19" />
                : <MenuIcon size={22} color="#2d1f19" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, bottom: 0, zIndex: 899,
          background: '#f5efe8', padding: '32px 24px',
          display: 'flex', flexDirection: 'column', gap: 8,
          animation: 'fadeIn 0.22s ease both',
        }}>
          {links.map(({ id, href, label }) => {
            const active = pathname === href;
            return (
              <TransitionLink key={id} href={href} onClick={() => setOpen(false)}
                style={{
                  background: active ? '#eedfcc' : 'transparent',
                  border: 'none', padding: '18px 22px', borderRadius: 16,
                  fontFamily: 'var(--font-calistoga), serif', fontSize: '1.5rem',
                  color: active ? '#CC624C' : '#2d1f19', textDecoration: 'none',
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                <span>{label}</span>
                <ChevronRight size={20} color={active ? '#CC624C' : '#9a7060'} />
              </TransitionLink>
            )
          })}
          <div style={{ marginTop: 24 }}>
            <TransitionLink href="/menu"
              onClick={() => setOpen(false)}
              style={{
              display: 'block', textAlign: 'center', textDecoration: 'none',
              width: '100%', background: '#CC624C', color: '#fefefe', border: 'none',
              fontFamily: 'var(--font-nunito), sans-serif', fontWeight: 800, fontSize: '1rem',
              padding: 16, borderRadius: 50, cursor: 'pointer',
            }}>
              Jetzt bei Lieferando bestellen →
            </TransitionLink>
          </div>
          {/* Quick info */}
          <div style={{ marginTop: 24, background: '#eedfcc', borderRadius: 16, padding: '16px 20px' }}>
            <p style={{ fontFamily: 'var(--font-nunito), sans-serif', fontWeight: 700, fontSize: '0.85rem', color: '#5c3d35' }}>
              Mo – So · 11:30 – 20:00 Uhr
            </p>
            <p style={{ fontFamily: 'var(--font-nunito), sans-serif', fontSize: '0.8rem', color: '#9a7060', marginTop: 3 }}>
              Langgasse 68 · 35576 Wetzlar
            </p>
          </div>
        </div>
      )}
    </>
  );
}
