"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  MapPin,
  ExternalLink,
  Clock,
  Navigation,
  Loader2,
  X,
} from "lucide-react";
import { BUSINESS, FULL_ADDRESS } from "@/lib/seo/business-data";
import { LANDMARKS } from "@/lib/seo/wetzlar-entities";

/* ─── Constants ─── */
const HEY_FEDE_LATLNG: [number, number] = [50.5604, 8.5048];
const ROUTE_URL = `https://www.google.com/maps/dir/?api=1&destination=${HEY_FEDE_LATLNG[0]},${HEY_FEDE_LATLNG[1]}`;

const heyFedeIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        html: `<div style="position: relative; width: 60px; height: 60px; display: flex; align-items: flex-end; justify-content: center;">
           <div class="animate-map-pulse" style="position: absolute; bottom: -5px; width: 30px; height: 10px; background: rgba(204,98,76,0.6); border-radius: 50%;"></div>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="40" height="60" style="filter: drop-shadow(0px 6px 12px rgba(45,31,25,0.4)); position: relative; z-index: 2;">
             <path fill="#CC624C" stroke="#f5efe8" stroke-width="1.5" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
             <circle cx="12" cy="12" r="5" fill="#f5efe8" />
           </svg>
         </div>`,
        className: "",
        iconSize: [60, 60],
        iconAnchor: [30, 55],
      })
    : null;

const landmarkIcon =
  typeof window !== "undefined"
    ? L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 36" width="28" height="42" style="opacity: 0.9">
      <path fill="#9a7060" stroke="#5c3d35" stroke-width="1" d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0zm0 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
    </svg>`,
        className: "",
        iconSize: [28, 42],
        iconAnchor: [14, 42],
      })
    : null;

/* ═══════════════════════════════════════════════════════════
   Glassmorphism Overlay for Active Marker
   ═══════════════════════════════════════════════════════════ */
function GlassPopup({
  markerId,
  onClose,
}: {
  markerId: string | null;
  onClose: () => void;
}) {
  if (!markerId) return null;

  const isHeyFede = markerId === "hey-fede";
  const landmark = LANDMARKS.find((l) => l.name === markerId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: 24,
        padding: 20,
        minWidth: 260,
        maxWidth: 300,
        boxShadow:
          "0 20px 40px rgba(45,31,25,0.15), 0 0 0 1px rgba(228,192,168,0.4)",
        zIndex: 1000,
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(238, 223, 204, 0.5)",
          border: "none",
          width: 28,
          height: 28,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "#5c3d35",
        }}
      >
        <X size={14} />
      </button>

      {isHeyFede ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 4,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "#CC624C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              <MapPin size={16} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-calistoga), serif",
                  fontSize: "1.2rem",
                  color: "#2d1f19",
                  lineHeight: 1.1,
                }}
              >
                Hey Fede!
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9a7060",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Dessertbar & Café
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "0.85rem",
              color: "#5c3d35",
              margin: "12px 0",
              lineHeight: 1.5,
              background: "rgba(238, 223, 204, 0.3)",
              padding: 12,
              borderRadius: 12,
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 4 }}>
              {FULL_ADDRESS}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "#CC624C",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              <Clock size={14} /> Mi–Sa 12-19h · So 13-19h
            </div>
          </div>

          <a
            href={ROUTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "#CC624C",
                color: "#fefefe",
                padding: "12px",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                fontFamily: "var(--font-nunito), sans-serif",
                fontWeight: 800,
                fontSize: "0.9rem",
                boxShadow: "0 4px 12px rgba(204,98,76,0.3)",
              }}
            >
              <Navigation size={16} /> Route planen
            </motion.div>
          </a>
        </div>
      ) : landmark ? (
        <div>
          <div
            style={{
              fontFamily: "var(--font-calistoga), serif",
              fontSize: "1.2rem",
              color: "#2d1f19",
              marginBottom: 6,
              paddingRight: 24,
            }}
          >
            {landmark.name}
          </div>
          <div
            style={{
              fontSize: "0.85rem",
              color: "#5c3d35",
              marginBottom: 14,
              lineHeight: 1.5,
            }}
          >
            {landmark.description}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${landmark.lat},${landmark.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#eedfcc",
                  color: "#2d1f19",
                  borderRadius: 8,
                  padding: "8px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <Navigation size={12} /> Google
              </div>
            </a>
            <a
              href={`http://maps.apple.com/?daddr=${landmark.lat},${landmark.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  background: "#eedfcc",
                  color: "#2d1f19",
                  borderRadius: 8,
                  padding: "8px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <Navigation size={12} /> Apple
              </div>
            </a>
          </div>

          {landmark.wikipediaUrl && (
            <a
              href={landmark.wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                color: "#CC624C",
                fontSize: "0.8rem",
                fontWeight: 800,
                textDecoration: "none",
                padding: "8px",
                border: "1px solid rgba(204,98,76,0.2)",
                borderRadius: 8,
              }}
            >
              <ExternalLink size={14} /> Wikipedia
            </a>
          )}
        </div>
      ) : null}
    </motion.div>
  );
}

// Center the map when a marker is clicked
function MapController({ activeMarker }: { activeMarker: string | null }) {
  const map = useMap();
  useEffect(() => {
    if (activeMarker === "hey-fede") {
      map.flyTo(HEY_FEDE_LATLNG, 16, { duration: 1 });
    } else if (activeMarker) {
      const landmark = LANDMARKS.find((l) => l.name === activeMarker);
      if (landmark && landmark.lat && landmark.lng) {
        map.flyTo([landmark.lat, landmark.lng], 16, { duration: 1 });
      }
    }
  }, [activeMarker, map]);
  return null;
}

export default function InteractiveMap() {
  const [mounted, setMounted] = useState(false);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !heyFedeIcon || !landmarkIcon) {
    return (
      <div
        style={{
          height: 400,
          borderRadius: 24,
          background: "#eedfcc",
          width: "100%",
        }}
      />
    );
  }

  return (
    <div
      style={{
        borderRadius: 24,
        overflow: "hidden",
        position: "relative",
        height: 400,
        width: "100%",
        boxShadow: "0 12px 40px rgba(45,31,25,0.08)",
        transform: "translateZ(0)",
        background: "#f5efe8",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          filter: "sepia(0.2) hue-rotate(-15deg) saturate(1.1) contrast(0.95)",
        }}
      >
        <MapContainer
          center={HEY_FEDE_LATLNG}
          zoom={16}
          style={{ height: "100%", width: "100%", zIndex: 1 }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker
            position={HEY_FEDE_LATLNG}
            icon={heyFedeIcon}
            eventHandlers={{ click: () => setActiveMarker("hey-fede") }}
          />
          {LANDMARKS.map((landmark) => {
            if (!landmark.lat || !landmark.lng) return null;
            return (
              <Marker
                key={landmark.name}
                position={[landmark.lat, landmark.lng]}
                icon={landmarkIcon}
                eventHandlers={{ click: () => setActiveMarker(landmark.name) }}
              />
            );
          })}
          <MapController activeMarker={activeMarker} />
        </MapContainer>
      </div>

      {/* Overlay controls layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {/* Custom Glassmorphism UI Overlay */}
        <AnimatePresence>
          {activeMarker && (
            <GlassPopup
              markerId={activeMarker}
              onClose={() => setActiveMarker(null)}
            />
          )}
        </AnimatePresence>

        {/* Global floating address bubble when no marker is active */}
        <AnimatePresence>
          {!activeMarker && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.2 }}
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                right: 14,
                background: "rgba(245,239,232,0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                borderRadius: 18,
                padding: "12px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 6px 24px rgba(45,31,25,0.12)",
                border: "1px solid rgba(228,192,168,0.3)",
                pointerEvents: "auto",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontWeight: 900,
                    fontSize: "0.88rem",
                    color: "#2d1f19",
                  }}
                >
                  Hey Fede! Dessertbar
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-nunito), sans-serif",
                    fontSize: "0.76rem",
                    color: "#9a7060",
                  }}
                >
                  {BUSINESS.street} · {BUSINESS.postalCode} {BUSINESS.city}
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={ROUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "#CC624C",
                  color: "#fefefe",
                  padding: "10px 18px",
                  borderRadius: 50,
                  textDecoration: "none",
                  flexShrink: 0,
                  fontFamily: "var(--font-nunito), sans-serif",
                  fontWeight: 800,
                  fontSize: "0.78rem",
                  boxShadow: "0 4px 12px rgba(204,98,76,0.3)",
                }}
              >
                Route <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
