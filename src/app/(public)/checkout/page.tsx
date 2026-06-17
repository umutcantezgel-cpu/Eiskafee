"use client";

import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/store/useAuth";

// Einfacher Delivery-Zone Check über erlaubte PLZ (Hardcoded Fallback)
const ALLOWED_ZONES = ["35576", "35578", "35580", "35581"];

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    orderType,
    updateOrderData,
    orderData,
    updateQuantity,
    clearCart,
  } = useStore();
  const { user } = useAuth();

  const [name, setName] = useState(orderData.name || "");
  const [phone, setPhone] = useState(orderData.phone || "");
  const [email, setEmail] = useState(orderData.email || "");
  const [notes, setNotes] = useState(orderData.notes || "");

  const [street, setStreet] = useState(orderData.address?.street || "");
  const [zip, setZip] = useState(orderData.address?.zip || "");
  const [city, setCity] = useState(orderData.address?.city || "");

  const [zoneError, setZoneError] = useState("");

  useEffect(() => {
    if (user) {
      if (!name && user.displayName) setName(user.displayName);
      if (!email && user.email) setEmail(user.email);
    }
  }, [user]);

  const total = cart.reduce(
    (s, i) =>
      s +
      i.quantity *
        (typeof i.price === "number" ? i.price : parseFloat(i.price)),
    0,
  );

  const handleNext = () => {
    if (cart.length === 0) {
      alert("Dein Warenkorb ist leer.");
      return;
    }

    if (!name || !phone || !email) {
      alert("Bitte fülle alle Pflichtfelder (Name, Handynummer, E-Mail) aus.");
      return;
    }

    let addressData = undefined;

    if (orderType === "delivery") {
      if (!street || !zip || !city) {
        alert("Bitte gib deine vollständige Lieferadresse an.");
        return;
      }
      if (!ALLOWED_ZONES.includes(zip)) {
        setZoneError(
          "Sorry, wir liefern aktuell leider nicht in deine Postleitzahl.",
        );
        return;
      }
      setZoneError("");
      addressData = { street, zip, city };
    }

    updateOrderData({
      name,
      phone,
      email,
      notes,
      address: addressData,
    });

    router.push("/pickup-time");
  };

  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row">
      {/* ─── LEFT COLUMN: FORM ─── */}
      <div className="flex-1 overflow-y-auto pb-32 md:pb-6">
        <div className="bg-cream sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between md:hidden">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm"
          >
            <Icons.ArrowLeft size={20} color="#2d1f19" />
          </button>
          <div className="text-center">
            <div className="font-heading text-lg text-brown leading-tight">
              Kontaktdaten
            </div>
            <div className="font-body text-[11px] font-bold text-brown-muted">
              Schritt 1 von 3
            </div>
          </div>
          <div className="w-10 h-10" />
        </div>

        {/* Progress */}
        <div className="px-5 pb-4 flex gap-1.5 md:mt-6">
          {[true, false, false].map((active, i) => (
            <div
              key={i}
              className={`flex-1 h-1 rounded-full ${active ? "bg-terracotta" : "bg-beige"}`}
            />
          ))}
        </div>

        <div className="px-5">
          <FadeUp delay={0.1}>
            <div className="font-body text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-2.5">
              Deine Daten
            </div>

            <div className="bg-white rounded-[18px] p-4 mb-3 shadow-sm border-2 border-transparent focus-within:border-terracotta">
              <label
                htmlFor="checkout-name"
                className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
              >
                Name *
              </label>
              <input
                id="checkout-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dein Vorname"
                autoComplete="name"
                className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40"
              />
            </div>

            <div className="bg-white rounded-[18px] p-4 mb-3 shadow-sm border-2 border-transparent focus-within:border-terracotta">
              <label
                htmlFor="checkout-email"
                className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
              >
                E-Mail *
              </label>
              <input
                id="checkout-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                autoComplete="email"
                className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40"
              />
            </div>

            <div className="bg-white rounded-[18px] p-4 mb-5 shadow-sm border-2 border-transparent focus-within:border-terracotta">
              <label
                htmlFor="checkout-phone"
                className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
              >
                Handynummer *
              </label>
              <input
                id="checkout-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Für Rückfragen"
                autoComplete="tel"
                className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40"
              />
            </div>
          </FadeUp>

          {orderType === "delivery" && (
            <FadeUp delay={0.2}>
              <div className="font-body text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-2.5">
                Lieferadresse
              </div>

              <div className="bg-white rounded-[18px] p-4 mb-3 shadow-sm border-2 border-transparent focus-within:border-terracotta">
                <label
                  htmlFor="checkout-street"
                  className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
                >
                  Straße & Hausnr. *
                </label>
                <input
                  id="checkout-street"
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="Musterstraße 12"
                  autoComplete="street-address"
                  className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40"
                />
              </div>

              <div className="grid grid-cols-[1fr_2fr] gap-3 mb-5">
                <div
                  className={`bg-white rounded-[18px] p-4 shadow-sm border-2 ${zoneError ? "border-red-500" : "border-transparent focus-within:border-terracotta"}`}
                >
                  <label
                    htmlFor="checkout-zip"
                    className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
                  >
                    PLZ *
                  </label>
                  <input
                    id="checkout-zip"
                    type="text"
                    value={zip}
                    onChange={(e) => {
                      setZip(e.target.value);
                      setZoneError("");
                    }}
                    placeholder="35576"
                    autoComplete="postal-code"
                    aria-invalid={!!zoneError}
                    aria-describedby={zoneError ? "zone-error" : undefined}
                    className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40"
                  />
                </div>
                <div className="bg-white rounded-[18px] p-4 shadow-sm border-2 border-transparent focus-within:border-terracotta">
                  <label
                    htmlFor="checkout-city"
                    className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
                  >
                    Stadt *
                  </label>
                  <input
                    id="checkout-city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Wetzlar"
                    autoComplete="address-level2"
                    className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-40"
                  />
                </div>
              </div>
              <div aria-live="polite" aria-atomic="true">
                {zoneError && (
                  <div
                    id="zone-error"
                    className="text-red-500 font-body text-sm font-bold mb-4"
                  >
                    {zoneError}
                  </div>
                )}
              </div>
            </FadeUp>
          )}

          <FadeUp delay={0.3}>
            <div className="font-body text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-2.5">
              Zusätzliche Infos
            </div>
            <div className="bg-white rounded-[18px] p-4 mb-6 shadow-sm border-2 border-transparent focus-within:border-terracotta">
              <label
                htmlFor="checkout-notes"
                className="block font-body text-[10px] font-extrabold text-brown-muted uppercase tracking-[1px]"
              >
                Anmerkungen (Optional)
              </label>
              <textarea
                id="checkout-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Z.B. Klingel ist defekt..."
                className="font-body text-[14px] font-bold text-brown mt-0.5 bg-transparent border-none outline-none w-full resize-none min-h-[60px] placeholder:opacity-40"
              />
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ─── RIGHT COLUMN: CART SUMMARY ─── */}
      <div className="w-full md:w-[380px] bg-cream-warm border-t md:border-t-0 md:border-l border-beige flex flex-col fixed md:relative bottom-0 left-0 right-0 z-40 max-h-[50vh] md:max-h-none overflow-y-auto">
        <div className="hidden md:block px-6 pt-8 pb-4">
          <div className="font-heading text-2xl text-brown">Dein Warenkorb</div>
          <button
            onClick={() => {
              if (confirm("Wirklich leeren?")) clearCart();
            }}
            className="text-[12px] font-extrabold text-brown-muted underline mt-1"
          >
            Leeren
          </button>
        </div>

        <div className="px-5 md:px-6 flex-1 py-4">
          <div className="flex justify-between items-center mb-4 md:hidden">
            <span className="font-heading text-xl text-brown">
              {total.toFixed(2).replace(".", ",")} €
            </span>
            <span className="font-body text-sm text-brown-muted font-bold">
              {cart.reduce((s, i) => s + i.quantity, 0)} Artikel
            </span>
          </div>

          <div className="hidden md:block space-y-3 mb-6">
            {cart.map((it) => {
              const itemPrice =
                typeof it.price === "number" ? it.price : parseFloat(it.price);
              return (
                <div
                  key={it.id}
                  className="flex justify-between gap-3 bg-white p-3 rounded-2xl shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-body font-extrabold text-terracotta text-[13px]">
                        {it.quantity}×
                      </span>
                      <span className="font-body font-bold text-[14px] text-brown truncate">
                        {it.name}
                      </span>
                    </div>
                    {it.variant && (
                      <div className="font-body text-[11px] text-brown-muted ml-5">
                        {it.variant}
                      </div>
                    )}
                  </div>
                  <span className="font-heading text-[14px] text-terracotta">
                    {(it.quantity * itemPrice).toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              );
            })}
          </div>

          <PrimaryButton
            onClick={handleNext}
            className="w-full flex justify-center items-center gap-2"
          >
            Weiter zu {orderType === "delivery" ? "Lieferzeit" : "Abholzeit"}
            <Icons.ArrowRight size={18} />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
