"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { User, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import { HamburgerIcon } from "@/components/atoms/icons";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { PrimaryCTA } from "@/components/atoms/buttons";
import { useStore } from "@/store/useStore";
import { useStoreSettings } from "@/hooks/useStoreSettings";
import { MobileMenu } from "./MobileMenu";
import { PromoBanner } from "./PromoBanner";
import { ScrollProgressBar } from "@/components/atoms/ScrollProgressBar";
import { twMerge } from "tailwind-merge";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { cart, toggleCart } = useStore();
  const { settings } = useStoreSettings();
  const prefersReducedMotion = useReducedMotion();

  // Scroll interpolation (0 to 80px)
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);
  const blur = useTransform(scrollY, [0, 80], [0, 12]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  const bgStyle = useTransform(bgOpacity, (v) => `rgba(255,245,238, ${v})`);
  const blurStyle = useTransform(blur, (v) => `blur(${v}px)`);
  const borderStyle = useTransform(
    borderOpacity,
    (v) => `1px solid rgba(238,223,204, ${v})`,
  );
  const shadowStyle = useTransform(
    shadowOpacity,
    (v) => `0 4px 20px rgba(45,31,25, ${v})`,
  );

  const links = [
    { id: "menu", href: "/menu", label: "Speisekarte" },
    { id: "about", href: "/about", label: "Über Uns" },
    { id: "visit", href: "/visit", label: "Besuchen & Liefern" },
  ];

  return (
    <>
      <ScrollProgressBar />

      <div className="fixed top-0 left-0 right-0 z-[900] flex flex-col">
        {settings?.bannerText && <PromoBanner text={settings.bannerText} />}

        <motion.header
          style={
            prefersReducedMotion
              ? {
                  backgroundColor: "rgba(255,245,238, 0.95)",
                  backdropFilter: "blur(12px)",
                  borderBottom: "1px solid var(--color-sand)",
                  boxShadow: "0 4px 20px rgba(45,31,25, 0.08)",
                }
              : {
                  backgroundColor: bgStyle,
                  backdropFilter: blurStyle,
                  borderBottom: borderStyle,
                  boxShadow: shadowStyle,
                }
          }
          className="w-full transition-all duration-200"
        >
          <div className="max-w-7xl mx-auto px-6 h-[88px] flex items-center justify-between gap-4">
            {/* Left: Logo */}
            <div className="flex-shrink-0">
              <TransitionLink
                href="/"
                aria-label="Hey Fedee! Startseite"
                className="block"
              >
                <Logo variant="orange" className="w-[60px]" />
              </TransitionLink>
            </div>

            {/* Middle: Navigation */}
            <nav
              aria-label="Hauptnavigation"
              className="hidden md:flex items-center gap-2"
            >
              {links.map(({ id, href, label }) => {
                const active = pathname === href;
                return (
                  <TransitionLink
                    key={id}
                    href={href}
                    className={twMerge(
                      "px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200",
                      active
                        ? "bg-sand text-terracotta"
                        : "text-charcoal hover:bg-sand/50",
                    )}
                  >
                    {label}
                  </TransitionLink>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {/* PrimaryCTA Desktop */}
              <div className="hidden md:block">
                <TransitionLink href="/menu" tabIndex={-1}>
                  <PrimaryCTA className="py-2.5 text-sm" showArrow>
                    Jetzt bestellen
                  </PrimaryCTA>
                </TransitionLink>
              </div>

              {/* Profile */}
              <TransitionLink href="/auth" aria-label="Profil">
                <div className="w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer">
                  <User size={20} strokeWidth={2.5} />
                </div>
              </TransitionLink>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative w-11 h-11 rounded-full bg-cream flex items-center justify-center text-terracotta hover:bg-sand transition-colors border-2 border-peach cursor-pointer"
                aria-label="Warenkorb"
              >
                <ShoppingBag size={20} strokeWidth={2.5} />
                {cart.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-[22px] h-[22px] bg-terracotta text-cream text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-cream">
                    {cart.length}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden w-11 h-11 flex items-center justify-center bg-transparent border-none text-charcoal"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menü öffnen"
              >
                <HamburgerIcon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
