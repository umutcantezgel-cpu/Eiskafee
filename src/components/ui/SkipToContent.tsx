'use client';

import React from 'react';

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] bg-terracotta text-cream px-6 py-3 rounded-full font-bold shadow-clay focus:outline-none focus:ring-4 focus:ring-terracotta/50"
    >
      Zum Hauptinhalt springen
    </a>
  );
}
