"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { MapPin, ExternalLink, Clock, Navigation, Loader2 } from "lucide-react";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";
import * as CookieConsent from "vanilla-cookieconsent";

/* ─── Constants ─── */
const HEY_FEDE = { lat: 50.5565, lng: 8.5048 };
const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${HEY_FEDE.lat},${HEY_FEDE.lng}`;
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || "";

const MAP_STYLES = [
  { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#c9dae3" }] },
  { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#f5efe8" }] },
  { featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [{ color: "#eedfcc" }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#e8d8c4" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#dbc7ae" }] },
  { featureType: "road.highway", elementType: "geometry.fill", stylers: [{ color: "#E4C0A8" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#5c3d35" }] },
  { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "poi.park", elementType: "geometry.fill", stylers: [{ color: "#d5e0c8" }] },
  { featureType: "poi.business", stylers: [{ visibility: "off" }] },
  { featureType: "poi.government", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#E4C0A8" }, { weight: 1 }] },
  { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#9a7060" }] },
];

/* ═══════════════════════════════════════════════════════════
   Inner Map — Only mounted after consent + API key verified
   ═══════════════════════════════════════════════════════════ */
function LiveMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    id: "hey-fede-gmap",
  });

  const [showInfo, setShowInfo] = useState(false);

  const markerIcon = useMemo(() => {
    if (!isLoaded || typeof google === "undefined") return undefined;
    return {
      path: "M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z",
      fillColor: "#CC624C",
      fillOpacity: 1,
      strokeColor: "#B8553F",
      strokeWeight: 1.5,
      scale: 1.8,
      anchor: new google.maps.Point(12, 36),
    };
  }, [isLoaded]);

  if (loadError) {
    return (
      <div style={{
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 12,
        background: "linear-gradient(145deg, #eedfcc 0%, #E4C0A8 100%)",
        fontFamily: "var(--font-nunito), sans-serif",
      }}>
        <MapPin size={28} color="#CC624C" />
        <div style={{ fontSize: "0.88rem", color: "#2d1f19", fontWeight: 800 }}>Karte nicht verfügbar</div>
        <a href={ROUTE_URL} target="_blank" rel="noopener noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "#CC624C", color: "#fefefe", padding: "10px 20px",
          borderRadius: 50, fontWeight: 800, fontSize: "0.82rem", textDecoration: "none",
        }}>
          <Navigation size={14} /> In Google Maps öffnen
        </a>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div style={{
        width: "100%", height: "100%", display: "flex",
        alignItems: "center", justifyContent: "center",
        background: "linear-gradient(145deg, #eedfcc 0%, #E4C0A8 100%)",
      }}>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}>
          <Loader2 size={28} color="#CC624C" />
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={HEY_FEDE}
        zoom={16}
        options={{
          styles: MAP_STYLES,
          disableDefaultUI: true,
          zoomControl: true,
          gestureHandling: "cooperative",
          clickableIcons: false,
          backgroundColor: "#f5efe8",
        }}
      >
        <MarkerF
          position={HEY_FEDE}
          icon={markerIcon}
          onClick={() => setShowInfo(true)}
        />

        {showInfo && (
          <InfoWindowF position={HEY_FEDE} onCloseClick={() => setShowInfo(false)}>
            <div style={{ fontFamily: "var(--font-nunito), sans-serif", padding: "4px 2px", minWidth: 180 }}>
              <div style={{ fontFamily: "var(--font-calistoga), serif", fontSize: "1rem", color: "#2d1f19", marginBottom: 4 }}>Hey Fede!</div>
              <div style={{ fontSize: "0.78rem", color: "#5c3d35", marginBottom: 6 }}>Dessertbar & Café<br/>{FULL_ADDRESS}</div>
              <div style={{ display: "flex", gap: 4, fontSize: "0.72rem", color: "#9a7060", marginBottom: 8 }}>
                <Clock size={12} /> Mi–Sa 12:00–19:00 · So 13:00–19:00
              </div>
              <a href={ROUTE_URL} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#CC624C", color: "#fefefe", border: "none",
                borderRadius: 50, padding: "6px 14px", fontSize: "0.72rem",
                fontWeight: 800, textDecoration: "none",
              }}>
                <Navigation size={12} /> Route planen
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>

      {/* Floating address bubble */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          position: "absolute", bottom: 14, left: 14, right: 14,
          background: "rgba(245,239,232,0.92)",
          backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
          borderRadius: 14, padding: "10px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 4px 16px rgba(45,31,25,0.1)",
          border: "1px solid rgba(228,192,168,0.3)", zIndex: 10,
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--font-nunito), sans-serif", fontWeight: 900, fontSize: "0.84rem", color: "#2d1f19" }}>Hey Fede! Dessertbar</div>
          <div style={{ fontFamily: "var(--font-nunito), sans-serif", fontSize: "0.72rem", color: "#9a7060" }}>{BUSINESS.street} · {BUSINESS.postalCode} {BUSINESS.city}</div>
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          href={ROUTE_URL} target="_blank" rel="noopener noreferrer"
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
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   Outer Component — Consent Gate
   ═══════════════════════════════════════════════════════════ */
export default function InteractiveMap() {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const check = () => {
      try {
        if (CookieConsent.acceptedCategory("functional")) {
          setActivated(true);
        }
      } catch { /* CC not init yet */ }
    };
    check();
    window.addEventListener("cc:onConsent", check);
    window.addEventListener("cc:onChange", check);
    return () => {
      window.removeEventListener("cc:onConsent", check);
      window.removeEventListener("cc:onChange", check);
    };
  }, []);

  const handleActivate = () => {
    try { CookieConsent.acceptCategory("functional"); } catch { /* noop */ }
    setActivated(true);
  };

  return (
    <div style={{
      borderRadius: 22, overflow: "hidden", position: "relative",
      height: 320, width: "100%",
      boxShadow: "0 8px 32px rgba(45,31,25,0.12)",
    }}>
      <AnimatePresence mode="wait">
        {!activated ? (
          /* ─── Placeholder ─── */
          <motion.div
            key="placeholder"
            exit={{ opacity: 0 }}
            style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(145deg, #eedfcc 0%, #E4C0A8 50%, #dbc7ae 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 16,
            }}
          >
            <div style={{
              position: "absolute", inset: 0, opacity: 0.08,
              backgroundImage: "radial-gradient(circle, #2d1f19 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }} />
            <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
              <div style={{ position: "absolute", top: "30%", left: 0, right: 0, height: 3, background: "#5c3d35" }} />
              <div style={{ position: "absolute", top: "60%", left: 0, right: 0, height: 2, background: "#5c3d35" }} />
              <div style={{ position: "absolute", left: "25%", top: 0, bottom: 0, width: 2, background: "#5c3d35" }} />
              <div style={{ position: "absolute", left: "65%", top: 0, bottom: 0, width: 3, background: "#5c3d35" }} />
            </div>

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
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#E4C0A8", transform: "rotate(45deg)" }} />
              </div>
              <motion.div
                animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.15, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 30, height: 6, borderRadius: "50%", background: "rgba(45,31,25,0.2)", margin: "6px auto 0", filter: "blur(2px)" }}
              />
            </motion.div>

            <div style={{ textAlign: "center", position: "relative", zIndex: 2, fontFamily: "var(--font-nunito), sans-serif" }}>
              <div style={{ fontFamily: "var(--font-calistoga), serif", fontSize: "1.1rem", color: "#2d1f19", marginBottom: 4 }}>Hey Fede!</div>
              <div style={{ fontSize: "0.82rem", color: "#5c3d35" }}>{BUSINESS.street} · {BUSINESS.postalCode} {BUSINESS.city}</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}
              onClick={handleActivate}
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

            <div style={{
              fontSize: "0.68rem", color: "#9a7060", position: "relative", zIndex: 2,
              fontFamily: "var(--font-nunito), sans-serif",
              display: "flex", alignItems: "center", gap: 4,
            }}>
              🔒 Lädt Google Maps · Datenschutz
            </div>
          </motion.div>
        ) : (
          /* ─── Live Map (mounted only after activation) ─── */
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", inset: 0 }}
          >
            <LiveMap />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
