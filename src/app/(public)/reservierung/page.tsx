"use client";

import React, { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import * as Icons from "lucide-react";
import { SchemaScripts } from "@/components/seo/SchemaScripts";
import { buildBreadcrumbSchema } from "@/lib/seo/schema/pages";
import { SITE, BUSINESS } from "@/lib/seo/business-data";

export default function ReservierungPage() {
  const [guests, setGuests] = useState(4);
  const [selectedDate, setSelectedDate] = useState(25);
  const [selectedTime, setSelectedTime] = useState("15:30");
  const [selectedArea, setSelectedArea] = useState("Innen · Lounge");
  const [specialRequest, setSpecialRequest] = useState("Geburtstag");

  const dates = [
    { w: "Heute", d: 24, disabled: false },
    { w: "Fr", d: 25, disabled: false },
    { w: "Sa", d: 26, disabled: false },
    { w: "So", d: 27, disabled: false },
    { w: "Mo", d: 28, disabled: false },
  ];

  const times = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "15:00",
    "15:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ];
  const areas = [
    { ic: Icons.Heart, t: "Innen · Lounge" },
    { ic: Icons.Sparkles, t: "Innen · Fenster" },
    { ic: Icons.Users, t: "Kinderecke" },
    { ic: Icons.Coffee, t: "Bar-Tisch" },
  ];
  const requests = ["Geburtstag", "Date", "Familientreffen", "Sonstiges"];

  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-peach pt-[110px] px-6 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 hf-dot-bg pointer-events-none" />
        <div className="relative z-10">
          <h1 className="font-heading text-[2.2rem] text-brown mb-3">
            Tisch reservieren
          </h1>
          <p className="font-body text-brown-mid max-w-sm mx-auto text-sm">
            Plane deinen Besuch
          </p>
        </div>
      </div>

      <div className="max-w-[500px] mx-auto px-6 py-10 pb-32">
        <FadeUp className="space-y-8">
          {/* Guests */}
          <div>
            <h2 className="text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3">
              Anzahl Gäste
            </h2>
            <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Icons.Users
                  size={22}
                  className="text-terracotta"
                  strokeWidth={1.8}
                />
                <span className="font-heading text-xl text-brown">
                  {guests} Personen
                </span>
              </div>
              <div className="flex items-center bg-beige rounded-full p-1 gap-1">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"
                >
                  <Icons.Minus
                    size={16}
                    className="text-brown"
                    strokeWidth={2.5}
                  />
                </button>
                <button
                  onClick={() => setGuests(guests + 1)}
                  className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center shadow-sm"
                >
                  <Icons.Plus
                    size={16}
                    className="text-white"
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Date */}
          <div>
            <h2 className="text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3">
              Datum
            </h2>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
              {dates.map((d) => (
                <button
                  key={d.d}
                  onClick={() => setSelectedDate(d.d)}
                  className={`shrink-0 w-[70px] py-3 rounded-2xl text-center transition-colors border-2 ${
                    selectedDate === d.d
                      ? "bg-terracotta text-white border-terracotta"
                      : "bg-white text-brown border-beige"
                  }`}
                >
                  <div
                    className={`text-[11px] font-bold ${selectedDate === d.d ? "opacity-85" : "opacity-60"}`}
                  >
                    {d.w}
                  </div>
                  <div className="font-heading text-xl mt-1 leading-none">
                    {d.d}
                  </div>
                  <div
                    className={`text-[10px] font-bold mt-1 ${selectedDate === d.d ? "opacity-80" : "opacity-50"}`}
                  >
                    JAN
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time */}
          <div>
            <h2 className="text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3">
              Uhrzeit · Fr 25.01
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {times.map((t, i) => {
                const disabled = i === 2;
                const isSelected = selectedTime === t;
                return (
                  <button
                    key={t}
                    disabled={disabled}
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-xl py-2.5 text-center text-sm font-extrabold transition-colors border-2 ${
                      disabled
                        ? "bg-white text-brown opacity-40 line-through border-beige"
                        : isSelected
                          ? "bg-terracotta text-white border-terracotta"
                          : "bg-white text-brown border-transparent"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Area */}
          <div>
            <h2 className="text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3">
              Bereich (optional)
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {areas.map((a) => {
                const isSelected = selectedArea === a.t;
                const Icon = a.ic;
                return (
                  <button
                    key={a.t}
                    onClick={() => setSelectedArea(a.t)}
                    className={`rounded-2xl p-3 flex items-center gap-2.5 transition-colors ${
                      isSelected ? "bg-brown text-white" : "bg-white text-brown"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={isSelected ? "text-peach" : "text-terracotta"}
                      strokeWidth={1.8}
                    />
                    <span className="text-xs font-extrabold">{a.t}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <h2 className="text-[11px] font-black text-terracotta tracking-[1.4px] uppercase mb-3">
              Besonderer Anlass?
            </h2>
            <div className="flex flex-wrap gap-2">
              {requests.map((r) => {
                const isSelected = specialRequest === r;
                return (
                  <button
                    key={r}
                    onClick={() => setSpecialRequest(r)}
                    className={`px-4 py-2 rounded-full text-xs font-extrabold transition-colors border-2 ${
                      isSelected
                        ? "bg-terracotta text-white border-terracotta"
                        : "bg-white text-brown border-beige"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-cream-warm border-t border-beige p-4 z-50">
        <div className="max-w-[500px] mx-auto">
          <div className="bg-beige rounded-xl p-3 mb-3 flex justify-between items-center text-xs">
            <span className="font-bold text-brown-mid">
              Fr 25.01 · {selectedTime} · {guests} Personen
            </span>
            <span className="font-black text-terracotta text-[11px]">
              BEARBEITEN
            </span>
          </div>
          <PrimaryButton large className="w-full" sectionBg="#fef8f5">
            <Icons.Calendar size={18} /> Tisch reservieren
          </PrimaryButton>
        </div>
      </div>

      <SchemaScripts
        schema={[
          buildBreadcrumbSchema([
            { name: "Reservierung", path: "/reservierung" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ReserveAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE.url}/reservierung`,
              inLanguage: "de",
              actionPlatform: [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/IOSPlatform",
                "http://schema.org/AndroidPlatform",
              ],
            },
            object: {
              "@type": "FoodEstablishment",
              "@id": `${SITE.url}/#restaurant`,
              name: BUSINESS.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.street,
                addressLocality: BUSINESS.city,
                postalCode: BUSINESS.postalCode,
                addressCountry: BUSINESS.country,
              },
            },
          },
        ]}
      />
    </div>
  );
}
