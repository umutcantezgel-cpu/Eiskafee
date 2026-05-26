import StoreToggle from '@/components/admin/StoreToggle';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Settings - Admin Dashboard',
};

const OPENING_HOURS = [
  { day: 'Montag', hours: 'Geschlossen' },
  { day: 'Dienstag', hours: 'Geschlossen' },
  { day: 'Mittwoch', hours: '12:00 - 19:00' },
  { day: 'Donnerstag', hours: '12:00 - 19:00' },
  { day: 'Freitag', hours: '12:00 - 19:00' },
  { day: 'Samstag', hours: '12:00 - 19:00' },
  { day: 'Sonntag', hours: '13:00 - 19:00' },
];

export default function SettingsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#FDFCF8] text-[#2C2621] p-6 md:p-10 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-light tracking-wide mb-2 text-[#2C2621]">Store Settings</h1>
          <p className="text-[#59534E] text-sm tracking-widest uppercase">Manage store status and configurations</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_10px_rgba(44,38,33,0.04)] border border-[#EBEAE5]">
            <h2 className="text-xl font-medium tracking-wide text-[#3E3430] uppercase mb-6 pb-4 border-b border-[#F0EFEA]">
              Store Status
            </h2>
            <div className="flex flex-col gap-4">
              <p className="text-[#736B63] text-sm mb-2">
                Toggle the store status to accept or pause incoming digital orders.
              </p>
              <div className="bg-[#FDFCF8] p-4 rounded-xl border border-[#F0EFEA] flex justify-center">
                <StoreToggle />
              </div>
            </div>
          </section>

          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_2px_10px_rgba(44,38,33,0.04)] border border-[#EBEAE5]">
            <h2 className="text-xl font-medium tracking-wide text-[#3E3430] uppercase mb-6 pb-4 border-b border-[#F0EFEA]">
              Opening Hours
            </h2>
            <div className="space-y-3">
              {OPENING_HOURS.map((schedule, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-[#F0EFEA] last:border-0">
                  <span className="font-medium text-[#59534E]">{schedule.day}</span>
                  <span className="text-[#8C847A]">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full py-2 bg-[#F9F8F6] border border-[#EAE8E3] text-[#59534E] rounded-lg hover:bg-[#F0EFEA] transition-colors text-sm font-medium">
              Edit Hours
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
