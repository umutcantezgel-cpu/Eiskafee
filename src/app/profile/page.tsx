import React from 'react';
import Link from 'next/link';
import { Package, Heart, User, Key, LogOut, ChevronRight } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-cream text-bark font-body pb-20">
      {/* Hero header */}
      <div className="bg-peach pt-12 pb-10 px-6 relative overflow-hidden">
        <div className="absolute -top-8 -right-8 w-40 h-40 bg-cream/40 rounded-[58%_42%_52%_48%/48%_58%_42%_52%]"></div>
        <div className="relative flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-terra flex items-center justify-center text-white font-display text-2xl shadow-terra">
            F
          </div>
          <div>
            <div className="text-[10px] font-black text-terra tracking-widest uppercase">Mein Konto</div>
            <div className="font-display text-2xl text-bark mt-0.5 leading-none">Fedee</div>
            <div className="text-xs text-bark-soft mt-1.5 font-semibold">Mitglied seit Jan. 2024</div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="-mt-4 mx-5 bg-white rounded-[18px] p-4 shadow-sm relative z-10 flex divide-x divide-beige">
        <div className="flex-1 text-center py-2">
          <div className="text-2xl font-display text-bark">12</div>
          <div className="text-[11px] font-bold text-bark-soft mt-1 uppercase tracking-wide">Bestellungen</div>
        </div>
        <div className="flex-1 text-center py-2">
          <div className="text-2xl font-display text-bark">5</div>
          <div className="text-[11px] font-bold text-bark-soft mt-1 uppercase tracking-wide">Favoriten</div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-5 mt-6 space-y-2">
        <div className="bg-white rounded-2xl p-3 flex items-center gap-3 cursor-pointer hover:bg-beige/30 transition-colors">
          <div className="w-9 h-9 rounded-full bg-beige flex items-center justify-center shrink-0">
            <Package size={18} className="text-terra" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <div className="font-bold text-[13px] text-bark">Bestellungen</div>
          </div>
          <ChevronRight size={16} className="text-bark-soft" strokeWidth={2} />
        </div>

        <div className="bg-white rounded-2xl p-3 flex items-center gap-3 cursor-pointer hover:bg-beige/30 transition-colors">
          <div className="w-9 h-9 rounded-full bg-beige flex items-center justify-center shrink-0">
            <User size={18} className="text-terra" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <div className="font-bold text-[13px] text-bark">Persönliche Daten</div>
          </div>
          <ChevronRight size={16} className="text-bark-soft" strokeWidth={2} />
        </div>

        <div className="bg-white rounded-2xl p-3 flex items-center gap-3 cursor-pointer hover:bg-beige/30 transition-colors">
          <div className="w-9 h-9 rounded-full bg-beige flex items-center justify-center shrink-0">
            <Key size={18} className="text-terra" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <div className="font-bold text-[13px] text-bark">Passwort ändern</div>
          </div>
          <ChevronRight size={16} className="text-bark-soft" strokeWidth={2} />
        </div>
      </div>

      {/* Logout */}
      <div className="pt-8 pb-12 text-center">
        <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terra/10 hover:bg-terra/20 transition-colors">
          <LogOut size={16} className="text-terra" strokeWidth={2} />
          <span className="text-[13px] font-bold text-terra">Abmelden</span>
        </button>
      </div>
    </div>
  );
}
