"use client";

import React from "react";
import { MapPin, Phone, Camera } from "lucide-react";
import { Logo } from "@/components/atoms/Logo";
import Image from "next/image";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { WaveDivider } from "@/components/atoms/WaveDivider";
import { NewsletterInput } from "@/components/molecules/forms/NewsletterInput";
import { NAPBlock } from "@/components/seo/NAPBlock";
import { BUSINESS } from "@/lib/seo/business-data";
import { ClientHoursTable } from "@/components/ui/ClientHoursTable";

export function Footer() {
  const currentDay = new Date().getDay(); // 0 = So, 1 = Mo, 2 = Di, 3 = Mi, 4 = Do, 5 = Fr, 6 = Sa

  return (
    <footer className="relative bg-sand pt-10">
      <div className="absolute top-0 left-0 w-full -translate-y-[99%]">
        <WaveDivider
          variant="long-curve"
          className="w-[150%] md:w-full h-auto text-sand"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & NAP */}
          <div className="flex flex-col items-start">
            <TransitionLink href="/" aria-label="Startseite">
              <Logo variant="orange" className="w-20 mb-4" />
            </TransitionLink>
            <p className="font-calistoga text-xl text-charcoal mb-4">
              Dessertbar & Café
            </p>

            <NAPBlock variant="footer" />
            <div className="flex gap-3">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-terracotta text-cream px-4 py-2 rounded-full font-bold text-[13px] hover:bg-[#b05240] transition-colors flex items-center gap-2"
              >
                <Camera className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & SEO Silos */}
          <div>
            <h3 className="font-calistoga text-xl text-terracotta mb-6">
              Hey Fede!
            </h3>
            <nav
              aria-label="Footer Navigation"
              className="flex flex-col gap-4 mb-8"
            >
              {[
                { href: "/", label: "Startseite" },
                { href: "/menu", label: "Speisekarte" },
                { href: "/about", label: "Über Uns" },
                { href: "/visit", label: "Besuchen & Liefern" },
              ].map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="font-bold text-charcoal w-fit hover:text-terracotta transition-colors relative group"
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-full h-[3px] bg-terracotta origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{
                      maskImage:
                        "url(\"data:image/svg+xml,%3Csvg width='10' height='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 1.5 Q 2.5 0, 5 1.5 T 10 1.5' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E\")",
                      maskRepeat: "repeat-x",
                    }}
                  />
                </TransitionLink>
              ))}
            </nav>

            <h3 className="font-calistoga text-lg text-terracotta/80 mb-4">
              Entdecke Mehr
            </h3>
            <nav aria-label="SEO Navigation" className="flex flex-col gap-3">
              {[
                { href: "/bubble-waffles-wetzlar", label: "Bubble Waffles" },
                {
                  href: "/lieferservice-desserts-lahn-dill",
                  label: "Lieferservice",
                },
                {
                  href: "/eisdiele-wetzlar-special-shakes",
                  label: "Eisdiele & Shakes",
                },
                { href: "/events-catering-hessen", label: "Event Catering" },
                { href: "/vegane-desserts-wetzlar", label: "Vegane Desserts" },
              ].map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="text-sm font-nunito font-bold text-charcoal/80 w-fit hover:text-terracotta transition-colors"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Column 3: Öffnungszeiten */}
          <div>
            <h3 className="font-calistoga text-xl text-terracotta mb-6">
              Öffnungszeiten
            </h3>
            <div className="mb-4">
              <ClientHoursTable />
            </div>

            <div className="mt-6 p-4 bg-cream rounded-2xl border-2 border-peach text-xs font-bold text-terracotta text-center transform -rotate-2">
              ✓ Lieferung direkt nach Hause
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-calistoga text-xl text-terracotta mb-6">
              Stay Sweet
            </h3>
            <p className="text-sm font-bold text-charcoal/80 mb-4">
              Abonniere unseren Newsletter für exklusive Angebote und neue
              Bubble Waffle Kreationen.
            </p>
            <NewsletterInput />
          </div>
        </div>

        {/* Tagline Strip */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-12 border-t border-peach/50 relative">
          <span className="font-calistoga text-3xl md:text-5xl text-charcoal transform -rotate-3 hover:rotate-0 transition-transform">
            Frisch
          </span>
          <span className="text-terracotta font-calistoga text-2xl hidden md:block">
            ·
          </span>
          <span className="font-calistoga text-3xl md:text-5xl text-charcoal transform rotate-2 hover:rotate-0 transition-transform">
            Selbstgemacht
          </span>
          <span className="text-terracotta font-calistoga text-2xl hidden md:block">
            ·
          </span>
          <span className="font-calistoga text-3xl md:text-5xl text-terracotta transform -rotate-1 hover:rotate-0 transition-transform">
            Mit Liebe
          </span>
        </div>

        {/* Confetti Strip with bg-dot-pattern-subtle */}
        <div
          className="h-16 w-full rounded-full overflow-hidden relative mb-12 flex items-center justify-around opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(201, 80, 57, 0.15) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        >
          {/* Sparse hand-drawn mini icons (SVG shapes) */}
          <svg
            className="w-6 h-6 text-terracotta"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <svg
            className="w-6 h-6 text-peach"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
          <svg
            className="w-6 h-6 text-brown"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
          </svg>
          <svg
            className="w-6 h-6 text-terracotta"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
          </svg>
          <svg
            className="w-6 h-6 text-charcoal"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15 8l6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1z" />
          </svg>
        </div>

        {/* Semantic SEO Location Block */}
        <div
          className="mb-12 text-center"
          itemScope
          itemType="https://schema.org/Place"
        >
          <h3 className="font-calistoga text-xl text-terracotta mb-4">
            Wir sind hier zuhause
          </h3>
          <p className="text-sm font-nunito font-bold text-charcoal/70 flex flex-wrap justify-center items-center gap-2">
            <span
              itemProp="containedInPlace"
              itemScope
              itemType="https://schema.org/AdministrativeArea"
            >
              <span itemProp="name" className="text-charcoal">
                Hessen
              </span>
              <link
                itemProp="sameAs"
                href="https://www.wikidata.org/wiki/Q1199"
              />
            </span>
            <span className="text-peach">›</span>
            <span
              itemProp="containedInPlace"
              itemScope
              itemType="https://schema.org/AdministrativeArea"
            >
              <span itemProp="name" className="text-charcoal">
                Lahn-Dill-Kreis
              </span>
              <link
                itemProp="sameAs"
                href="https://www.wikidata.org/wiki/Q7059"
              />
            </span>
            <span className="text-peach">›</span>
            <span
              itemProp="containedInPlace"
              itemScope
              itemType="https://schema.org/City"
            >
              <span itemProp="name" className="text-charcoal">
                Wetzlar
              </span>
              <link
                itemProp="sameAs"
                href="https://www.wikidata.org/wiki/Q3950"
              />
            </span>
            <span className="text-peach">›</span>
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress" className="text-charcoal">
                Langgasse
              </span>
            </span>
          </p>
        </div>

        {/* Trust Badges / Off-Site Citations */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="font-calistoga text-lg text-charcoal/80 mb-4">
            Besuche uns auch auf
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="external nofollow"
              className="flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm"
            >
              <span className="text-[#4285F4] font-extrabold">G</span> Google
            </a>
            <a
              href="https://www.tripadvisor.de/HeyFede-Wetzlar"
              target="_blank"
              rel="external nofollow"
              className="flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm"
            >
              <span className="text-[#34E0A1] text-[16px] leading-none">●</span>{" "}
              TripAdvisor
            </a>
            <a
              href="https://www.yelp.de/biz/hey-fede-wetzlar"
              target="_blank"
              rel="external nofollow"
              className="flex items-center gap-2 bg-cream/50 border border-peach text-charcoal px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:border-terracotta transition-all shadow-sm"
            >
              <span className="text-red-700 font-extrabold">
                y<span>elp</span>
              </span>
            </a>
          </div>
        </div>

        {/* Footer Stamp */}
        <div className="flex justify-center mb-12">
          <div className="relative w-32 h-32 opacity-80 hover:opacity-100 transition-opacity">
            <Image
              src="/assets/logos/Logo rund beige.svg"
              alt="Made with Love in Wetzlar"
              fill
              className="object-contain animate-spin [animation-duration:12s]"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-brown">
          <p>© {new Date().getFullYear()} Hey Fede! Dessertbar & Café</p>
          <div className="flex gap-6">
            <TransitionLink
              href="/legal#impressum"
              className="hover:text-terracotta transition-colors"
            >
              Impressum
            </TransitionLink>
            <TransitionLink
              href="/legal#datenschutz"
              className="hover:text-terracotta transition-colors"
            >
              Datenschutz
            </TransitionLink>
            <TransitionLink
              href="/legal#agb"
              className="hover:text-terracotta transition-colors"
            >
              AGB
            </TransitionLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
