"use client";

import React, { useState, useEffect } from "react";
import * as Icons from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { useAuth } from "@/lib/firebase/AuthContext";

function generateDays() {
  const days = [];
  const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  for (let i = 0; i < 5; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    let label = dayNames[d.getDay()];
    if (i === 0) label = "Heute";
    else if (i === 1) label = "Morgen";
    
    days.push({
      label,
      date: d.getDate(),
      fullDate: d.toISOString().split('T')[0]
    });
  }
  return days;
}

function generateTimes(selectedFullDate: string) {
  const times = [];
  let current = new Date(`2000-01-01T11:30:00`);
  const end = new Date(`2000-01-01T19:30:00`);

  const now = new Date();
  const isToday = selectedFullDate === now.toISOString().split('T')[0];

  while (current <= end) {
    const h = current.getHours().toString().padStart(2, "0");
    const m = current.getMinutes().toString().padStart(2, "0");
    const tStr = `${h}:${m}`;
    
    let isPast = false;
    if (isToday) {
      const slotTime = new Date();
      slotTime.setHours(current.getHours(), current.getMinutes(), 0, 0);
      // Disable times that are in the past or within next 15 mins
      if (slotTime.getTime() < now.getTime() + 15 * 60000) {
        isPast = true;
      }
    }
    
    times.push({ time: tStr, isPast });
    current.setMinutes(current.getMinutes() + 15);
  }
  return times;
}

export default function PickupTimePage() {
  const router = useRouter();
  const { updateOrderData, orderData } = useStore();
  const { user } = useAuth();
  
  const [days] = useState(() => generateDays());
  const [selectedDay, setSelectedDay] = useState(days[0].fullDate);
  const [selectedTime, setSelectedTime] = useState("");
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      if (user.displayName) setName(user.displayName);
    }
  }, [user]);

  const times = generateTimes(selectedDay);

  const handleNext = () => {
    if (!selectedTime) {
      alert("Bitte wähle eine Abholzeit aus.");
      return;
    }
    if (!name || !phone) {
      alert("Bitte fülle Name und Handynummer aus.");
      return;
    }
    
    updateOrderData({
      pickupDate: selectedDay,
      pickupTime: selectedTime,
      name: name,
      phone: phone,
      email: user?.email || ""
    });
    router.push("/order-review");
  };

  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col">
      {/* Header */}
      <div className="bg-[#f5efe8] sticky top-0 z-10 px-5 pt-4 pb-3 flex items-center justify-between">
        <button onClick={() => router.back()} className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm">
          <Icons.ArrowLeft size={20} color="#2d1f19" />
        </button>
        <div className="text-center">
          <div className="font-calistoga text-lg text-[#2d1f19] leading-tight">Abholung</div>
          <div className="font-nunito text-[11px] font-bold text-[#7a5a52]">Schritt 2 von 3</div>
        </div>
        <div className="w-10 h-10" />
      </div>

      {/* Progress */}
      <div className="px-5 pb-4 flex gap-1.5">
        {[true, true, false].map((active, i) => (
          <div key={i} className={`flex-1 h-1 rounded-full ${active ? 'bg-[#CC624C]' : 'bg-[#eedfcc]'}`} />
        ))}
      </div>

      <div className="px-5 flex-1 overflow-y-auto pb-6">
        <FadeUp delay={0.1}>
          <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5">Abholort</div>
          <div className="bg-white rounded-[18px] p-3.5 flex gap-3 items-start mb-5 shadow-sm">
            <div className="w-[42px] h-[42px] rounded-full bg-[#E4C0A8] flex items-center justify-center shrink-0">
              <Icons.MapPin size={20} color="#CC624C" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <div className="font-calistoga text-[15px] text-[#2d1f19]">Hey Fede! Wetzlar</div>
              <div className="font-nunito text-[11.5px] text-[#7a5a52] mt-0.5">Langgasse 68, 35576 Wetzlar</div>
              <div className="inline-flex items-center gap-1.5 bg-[rgba(72,160,90,0.13)] px-2 py-1 rounded-full mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#3a9d52]" />
                <span className="font-nunito text-[10px] font-extrabold text-[#3a9d52]">Geöffnet · bis 20:00</span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5">Abholtag</div>
          <div className="flex gap-2 mb-5 overflow-x-auto hide-scrollbar pb-2">
            {days.map((d) => (
              <button 
                key={d.fullDate}
                onClick={() => {
                  setSelectedDay(d.fullDate);
                  setSelectedTime(""); // Reset time on day change
                }}
                className={`shrink-0 w-[60px] py-2.5 rounded-[14px] text-center transition-all ${
                  selectedDay === d.fullDate ? 'bg-[#CC624C] text-white shadow-md' : 'bg-white text-[#2d1f19] shadow-sm'
                }`}
              >
                <div className={`font-nunito text-[10px] font-bold ${selectedDay === d.fullDate ? 'opacity-85' : 'opacity-60'}`}>{d.label}</div>
                <div className="font-calistoga text-lg mt-0.5">{d.date}</div>
              </button>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5">Abholzeit</div>
          <div className="grid grid-cols-3 gap-2 mb-5">
            {times.map((t) => {
              const isSelected = selectedTime === t.time && !t.isPast;
              return (
                <button 
                  key={t.time}
                  disabled={t.isPast}
                  onClick={() => setSelectedTime(t.time)}
                  className={`rounded-[12px] py-2.5 text-center text-[13px] font-extrabold transition-all ${
                    t.isPast ? 'opacity-40 bg-white text-[#2d1f19] line-through' :
                    isSelected ? 'bg-[#CC624C] text-white shadow-md' : 'bg-white text-[#2d1f19] shadow-sm'
                  }`}
                >
                  {t.time}
                </button>
              )
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5">Kontakt</div>
          {user ? (
            <>
              <div className="bg-white rounded-[14px] p-3 mb-2 shadow-sm">
                <div className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Name</div>
                <div className="font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5">{name || user.email?.split("@")[0]}</div>
              </div>
              <div className="bg-white rounded-[14px] p-3 mb-6 shadow-sm">
                <div className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Handynummer · für Rückfragen</div>
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Deine Handynummer"
                  className="font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-50"
                />
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-[14px] p-3 mb-2 shadow-sm">
                <div className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Name</div>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dein Vorname"
                  className="font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-50"
                />
              </div>
              <div className="bg-white rounded-[14px] p-3 mb-6 shadow-sm">
                <div className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Handynummer · für Rückfragen</div>
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Deine Handynummer"
                  className="font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent border-none outline-none w-full placeholder:opacity-50"
                />
              </div>
            </>
          )}
        </FadeUp>
      </div>

      <div className="p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]">
        <PrimaryButton onClick={handleNext} className="w-full flex justify-center items-center gap-2">
          Bestellung prüfen
          <Icons.ArrowRight size={18} />
        </PrimaryButton>
      </div>
    </div>
  );
}
