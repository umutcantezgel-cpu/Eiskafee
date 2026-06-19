import React from "react";
import { BUSINESS } from "@/lib/seo/business-data";
import { Car, Bus, MapPin, Navigation } from "lucide-react";

export function VisitSEO() {
  return (
    <section
      aria-label="Anfahrt und Parken - Hey Fede! Dessertbar"
      className="bg-beige py-16"
    >
      <div className="max-w-[820px] mx-auto px-6" role="region">
        <h2 className="font-heading text-3xl md:text-4xl text-brown mb-8 text-center">
          Anfahrt & Parken
        </h2>
        <p className="font-body text-charcoal/80 text-center max-w-[600px] mx-auto mb-12">
          Dein Weg zu uns in die Altstadt von Wetzlar. Wir sind bequem mit dem
          Auto, den öffentlichen Verkehrsmitteln oder zu Fuß erreichbar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parkhaus Badges */}
          <div className="bg-cream/80 backdrop-blur-md rounded-2xl p-6 border border-peach/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-terracotta/10 p-3 rounded-full text-terracotta">
                <Car size={24} />
              </div>
              <h3 className="font-heading text-xl text-brown m-0">
                Parken in der Nähe
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex justify-between items-start border-b border-peach/30 pb-3">
                <div>
                  <div className="font-bold text-charcoal">
                    Parkhaus Lahnstraße
                  </div>
                  <div className="text-xs text-charcoal/60">
                    Lahnstraße 17, 35578 Wetzlar
                  </div>
                </div>
                <div className="bg-peach/30 text-terracotta text-xs font-bold px-2 py-1 rounded">
                  3 Min. Fußweg
                </div>
              </li>
              <li className="flex justify-between items-start border-b border-peach/30 pb-3">
                <div>
                  <div className="font-bold text-charcoal">Parkhaus am Dom</div>
                  <div className="text-xs text-charcoal/60">
                    Goetheplatz, 35578 Wetzlar
                  </div>
                </div>
                <div className="bg-peach/30 text-terracotta text-xs font-bold px-2 py-1 rounded">
                  5 Min. Fußweg
                </div>
              </li>
              <li className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-charcoal">
                    Parkhaus Farbengasse
                  </div>
                  <div className="text-xs text-charcoal/60">
                    Farbengasse 2, 35578 Wetzlar
                  </div>
                </div>
                <div className="bg-peach/30 text-terracotta text-xs font-bold px-2 py-1 rounded">
                  6 Min. Fußweg
                </div>
              </li>
            </ul>
          </div>

          {/* Bus Badges */}
          <div className="bg-cream/80 backdrop-blur-md rounded-2xl p-6 border border-peach/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-terracotta/10 p-3 rounded-full text-terracotta">
                <Bus size={24} />
              </div>
              <h3 className="font-heading text-xl text-brown m-0">
                Mit dem Bus
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex justify-between items-start border-b border-peach/30 pb-3">
                <div>
                  <div className="font-bold text-charcoal">
                    Bushaltestelle Leitzplatz
                  </div>
                  <div className="text-xs text-charcoal/60">
                    Linien 11, 12, 13
                  </div>
                </div>
                <div className="bg-peach/30 text-terracotta text-xs font-bold px-2 py-1 rounded">
                  2 Min. Fußweg
                </div>
              </li>
              <li className="flex justify-between items-start border-b border-peach/30 pb-3">
                <div>
                  <div className="font-bold text-charcoal">
                    Bushaltestelle Freibad
                  </div>
                  <div className="text-xs text-charcoal/60">Linien 14, 15</div>
                </div>
                <div className="bg-peach/30 text-terracotta text-xs font-bold px-2 py-1 rounded">
                  4 Min. Fußweg
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Adresse */}
        <div className="mt-6 bg-terracotta rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white shadow-clay">
          <div className="flex items-center gap-4">
            <MapPin size={32} className="opacity-80" />
            <div>
              <div className="font-bold text-lg">{BUSINESS.name}</div>
              <div className="opacity-90">
                {BUSINESS.street}, {BUSINESS.postalCode} {BUSINESS.city}
              </div>
            </div>
          </div>
          <a
            href={BUSINESS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-terracotta px-5 py-2.5 rounded-full font-bold text-sm hover:bg-beige transition-colors"
          >
            <Navigation size={16} />
            Route planen
          </a>
        </div>
      </div>
    </section>
  );
}
