"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { MapPin, Navigation, ExternalLink, Clock, Phone } from "lucide-react";
import * as CookieConsent from "vanilla-cookieconsent";

/* ─── Constants ─── */
const HEY_FEDE_LOCATION = { lat: 50.5565, lng: 8.5048 }; // Langgasse 68, Wetzlar
const MAP_ID = "hey-fede-map";

/* ─── Custom Map Styling — Hey Fede! Cream & Terracotta ─── */
const mapStyles: google.maps.MapTypeStyle[] = [
  // Water — soft blue
  { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#c9dae3" }] },
  // Landscape — cream
  { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#f5efe8" }] },
  { featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [{ color: "#eedfcc" }] },
  // Roads — beige
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#e8d8c4" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#dbc7ae" }] },
  { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#E4C0A8" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#5c3d35" }] },
  // POI — hide most, style parks
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#d5e0c8" }] },
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  // Buildings — soft cream
  { featureType: "poi.government", stylers: [{ visibility: "off" }] },
  // Transit — hide
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  // Admin — subtle
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#E4C0A8" }, { weight: 1 }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#9a7060" }] },
];

const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "22px",
};

const mapOptions: google.maps.MapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
  zoomControlOptions: { position: 9 }, // RIGHT_CENTER
  gestureHandling: "cooperative", // 2-finger scroll on mobile
  clickableIcons: false,
  backgroundColor: "#f5efe8",
};

/* ─── SVG Marker Icon ─── */
function createMarkerIcon(): google.maps.Symbol {
  return {
    path: "M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z",
    fillColor: "#CC624C",
    fillOpacity: 1,
    strokeColor: "#B8553F",
    strokeWeight: 1.5,
    scale: 1.8,
    anchor: new google.maps.Point(12, 36),
  };
}

/* ═══════════════════════════════════════════════════════════
   InteractiveMap Component
   ═══════════════════════════════════════════════════════════ */
export default function InteractiveMap() {
  const [hasConsent, setHasConsent] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  // Check consent status
  useEffect(() => {
    const check = () => {
      const accepted = CookieConsent.acceptedCategory("functional");
      setHasConsent(accepted);
      if (accepted) setShowMap(true);
    };
    check();
    window.addEventListener("cc:onConsent", check);
    window.addEventListener("cc:onChange", check);
    return () => {
      window.removeEventListener("cc:onConsent", check);
      window.removeEventListener("cc:onChange", check);
    };
  }, []);

  // Load Google Maps JS API
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "",
    id: MAP_ID,
    // Only attempt to load if we have consent
    ...(showMap ? {} : { preventLoad: true } as Record<string, boolean>),
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
  }, []);

  const handleActivateMap = () => {
    // Accept functional cookies to enable the map
    CookieConsent.acceptCategory("functional");
    setHasConsent(true);
    setShowMap(true);
  };

  const handleNavigate = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${HEY_FEDE_LOCATION.lat},${HEY_FEDE_LOCATION.lng}&destination_place_id=ChIJExample`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{
      borderRadius: 22, overflow: "hidden", position: "relative",
      height: 320, width: "100%",
      boxShadow: "0 8px 32px rgba(45,31,25,0.12)",
    }}>
      <AnimatePresence mode="wait">
        {!showMap || !isLoaded ? (
          /* ─── Placeholder (before consent) ─── */
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(145deg, #eedfcc 0%, #E4C0A8 50%, #dbc7ae 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 16,
            }}
          >
            {/* Decorative grid dots */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.08,
              backgroundImage: "radial-gradient(circle, #2d1f19 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />

            {/* Fake street lines */}
            <div style={{
              position: "absolute", inset: 0, opacity: 0.06,
            }}>
              <div style={{ position: "absolute", top: "30%", left: 0, right: 0, height: 3, background: "#5c3d35" }} />
              <div style={{ position: "absolute", top: "60%", left: 0, right: 0, height: 2, background: "#5c3d35" }} />
              <div style={{ position: "absolute", left: "25%", top: 0, bottom: 0, width: 2, background: "#5c3d35" }} />
              <div style={{ position: "absolute", left: "65%", top: 0, bottom: 0, width: 3, background: "#5c3d35" }} />
            </div>

            {/* Animated Pin */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative", zIndex: 2 }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: "50% 50% 50% 0",
                background: "#CC624C", transform: "rotate(-45deg)",
                boxShadow: "0 6px 20px rgba(204,98,76,0.4)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 18, height: 18, borderRadius: "50%",
                  background: "#E4C0A8", transform: "rotate(45deg)",
                }} />
              </div>
              {/* Shadow */}
              <motion.div
                animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.15, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  width: 30, height: 6, borderRadius: "50%",
                  background: "rgba(45,31,25,0.2)",
                  margin: "6px auto 0",
                  filter: "blur(2px)",
                }}
              />
            </motion.div>

            {/* Address */}
            <div style={{
              textAlign: "center", position: "relative", zIndex: 2,
              fontFamily: "var(--font-nunito), sans-serif",
            }}>
              <div style={{
                fontFamily: "var(--font-calistoga), serif",
                fontSize: "1.1rem", color: "#2d1f19", marginBottom: 4,
              }}>Hey Fede!</div>
              <div style={{ fontSize: "0.82rem", color: "#5c3d35" }}>Langgasse 68 · 35576 Wetzlar</div>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleActivateMap}
              style={{
                position: "relative", zIndex: 2,
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 22px", borderRadius: 50,
                background: "#CC624C", color: "#fefefe",
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 800, fontSize: "0.82rem",
                boxShadow: "0 4px 16px rgba(204,98,76,0.35)",
              }}
            >
              <MapPin size={16} /> Interaktive Karte laden
            </motion.button>

            {/* Privacy hint */}
            <div style={{
              fontSize: "0.68rem", color: "#9a7060", position: "relative", zIndex: 2,
              fontFamily: "var(--font-nunito), sans-serif",
              display: "flex", alignItems: "center", gap: 4,
            }}>
              🔒 Lädt Google Maps · Datenschutz
            </div>
          </motion.div>
        ) : (
          /* ─── Live Google Map ─── */
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={HEY_FEDE_LOCATION}
              zoom={16}
              options={mapOptions}
              onLoad={onLoad}
            >
              <MarkerF
                position={HEY_FEDE_LOCATION}
                icon={createMarkerIcon()}
                onClick={() => setShowInfo(true)}
                animation={google.maps.Animation.DROP}
              />

              {showInfo && (
                <InfoWindowF
                  position={HEY_FEDE_LOCATION}
                  onCloseClick={() => setShowInfo(false)}
                >
                  <div style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    padding: "4px 2px", minWidth: 180,
                  }}>
                    <div style={{
                      fontFamily: "var(--font-calistoga), serif",
                      fontSize: "1rem", color: "#2d1f19", marginBottom: 4,
                    }}>Hey Fede!</div>
                    <div style={{ fontSize: "0.78rem", color: "#5c3d35", marginBottom: 6 }}>
                      Dessertbar & Café<br/>Langgasse 68, 35576 Wetzlar
                    </div>
                    <div style={{ display: "flex", gap: 4, fontSize: "0.72rem", color: "#9a7060", marginBottom: 8 }}>
                      <Clock size={12} /> 11:30 – 20:00 Uhr
                    </div>
                    <button
                      onClick={handleNavigate}
                      style={{
                        display: "flex", alignItems: "center", gap: 6,
                        background: "#CC624C", color: "#fefefe",
                        border: "none", borderRadius: 50, padding: "6px 14px",
                        fontSize: "0.72rem", fontWeight: 800, cursor: "pointer",
                        fontFamily: "var(--font-nunito), sans-serif",
                      }}
                    >
                      <Navigation size={12} /> Route planen
                    </button>
                  </div>
                </InfoWindowF>
              )}
            </GoogleMap>

            {/* Floating address bubble overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                position: "absolute", bottom: 14, left: 14, right: 14,
                background: "rgba(245,239,232,0.92)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: 14,
                padding: "10px 16px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                boxShadow: "0 4px 16px rgba(45,31,25,0.1)",
                border: "1px solid rgba(228,192,168,0.3)",
                zIndex: 10,
              }}
            >
              <div>
                <div style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontWeight: 900, fontSize: "0.84rem", color: "#2d1f19",
                }}>Hey Fede! Dessertbar</div>
                <div style={{
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontSize: "0.72rem", color: "#9a7060",
                }}>Langgasse 68 · 35576 Wetzlar</div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://www.google.com/maps/dir/?api=1&destination=${HEY_FEDE_LOCATION.lat},${HEY_FEDE_LOCATION.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  background: "#CC624C", color: "#fefefe",
                  padding: "8px 16px", borderRadius: 50,
                  textDecoration: "none", flexShrink: 0,
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontWeight: 800, fontSize: "0.76rem",
                }}
              >
                Route <ExternalLink size={12} />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
