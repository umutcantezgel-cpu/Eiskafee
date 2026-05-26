"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieRevoke() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show revoke button only after consent has been given
    const check = () => {
      const hasConsent = CookieConsent.validConsent();
      setVisible(hasConsent);
    };

    // Check on mount and when consent changes
    check();
    window.addEventListener("cc:onConsent", check);
    window.addEventListener("cc:onChange", check);

    return () => {
      window.removeEventListener("cc:onConsent", check);
      window.removeEventListener("cc:onChange", check);
    };
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300, damping: 25, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => CookieConsent.showPreferences()}
        aria-label="Cookie-Einstellungen öffnen"
        title="Cookie-Einstellungen"
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          zIndex: 800,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "2px solid #eedfcc",
          background: "#f5efe8",
          color: "#CC624C",
          fontSize: "1.2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(45,31,25,0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        🍪
      </motion.button>
    </AnimatePresence>
  );
}
