'use client';

import React from 'react';
import { BUSINESS } from '@/lib/seo/business-data';
import { store_settings } from "@/lib/data";
import { AlertCircle } from 'lucide-react';

export function ClientHoursTable() {
  const todayIdx = (() => { const d = new Date().getDay(); return d === 0 ? 6 : d - 1; })();
  const { emergencyNotice } = store_settings;

  return (
    <div className="flex flex-col gap-3">
      {emergencyNotice && (
        <div className="bg-[#ff4d4d]/10 border border-[#ff4d4d]/20 rounded-[15px] p-3 flex gap-2.5 items-start">
          <AlertCircle size={18} color="#ff4d4d" className="shrink-0 mt-0.5" />
          <p className="font-nunito text-[0.85rem] text-[#ff4d4d] leading-[1.4] font-bold">
            {emergencyNotice}
          </p>
        </div>
      )}
      <div className="bg-[#eedfcc] rounded-[18px] overflow-hidden">
        {BUSINESS.openingHoursDisplay.map((dayData, i) => {
          const isToday = i === todayIdx;
          const isClosed = dayData.hours === 'Geschlossen';
          return (
            <div 
              key={dayData.day} 
              className={`flex justify-between items-center p-[13px_19px] ${isToday ? 'bg-[#CC624C]' : 'bg-transparent border-b border-[rgba(228,192,168,0.45)] last:border-b-0'}`}
              itemScope 
              itemProp="openingHoursSpecification" 
              itemType="https://schema.org/OpeningHoursSpecification"
            >
              <meta itemProp="dayOfWeek" content={`https://schema.org/${dayData.day.replace('Montag', 'Monday').replace('Dienstag', 'Tuesday').replace('Mittwoch', 'Wednesday').replace('Donnerstag', 'Thursday').replace('Freitag', 'Friday').replace('Samstag', 'Saturday').replace('Sonntag', 'Sunday')}`} />
              <div className="flex items-center gap-2">
                {isToday && <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />}
                <span className={`font-nunito text-[0.87rem] ${isToday ? 'font-black text-white' : 'font-semibold text-[#2d1f19]'}`}>{dayData.day}</span>
              </div>
              <div className="flex items-center gap-[9px]">
                <span className={`font-nunito text-[0.87rem] ${isToday ? 'text-white font-bold' : isClosed ? 'text-[#9a7060] font-normal' : 'text-[#5c3d35] font-normal'}`}>
                  {dayData.hours}
                </span>
                {isToday && (
                  <span className="bg-white/20 text-white font-nunito font-black text-[0.63rem] px-2.5 py-0.5 rounded-full">Heute</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

