"use client";

import React, { useEffect, useState } from "react";
import { BUSINESS } from "@/lib/seo/business-data";

export function LiveStatus() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeStr = `${currentHour.toString().padStart(2, "0")}:${currentMinute.toString().padStart(2, "0")}`;

      const daysMap = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ] as const;

      const todayKey = daysMap[currentDay];
      const todayHours = BUSINESS.openingHours[todayKey];

      if (!todayHours) {
        setIsOpen(false);
      } else {
        const { opens, closes } = todayHours;
        if (currentTimeStr >= opens && currentTimeStr < closes) {
          setIsOpen(true);
        } else {
          setIsOpen(false);
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 bg-cream/80 backdrop-blur-sm border border-peach/50 px-2.5 py-1 rounded-full">
      <span className="relative flex h-2.5 w-2.5">
        {isOpen && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        )}
        <span
          className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
            isOpen ? "bg-green-500" : "bg-red-500"
          }`}
        ></span>
      </span>
      <span className="font-bold text-[10px] uppercase tracking-wider text-charcoal/80">
        {isOpen ? "Geöffnet" : "Geschlossen"}
      </span>
    </div>
  );
}
