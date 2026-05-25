import React from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12 font-sans selection:bg-orange-500 selection:text-white">
      <header className="mb-12 flex justify-between items-center max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
            Welcome back, Fedee
          </h1>
          <p className="text-gray-400 mt-2 text-lg">Manage your account and preferences.</p>
        </div>
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-orange-500 to-yellow-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)]">
          <span className="text-2xl font-bold">F</span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 space-y-8">
          <section className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              Personal Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-500">Full Name</span>
                <span className="font-medium">Fedee User</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-500">Email</span>
                <span className="font-medium">fedee@example.com</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-800">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium">+1 234 567 8900</span>
              </div>
            </div>
            <button className="mt-6 w-full py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors">
              Edit Profile
            </button>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              Recent Orders
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div key={order} className="flex justify-between items-center p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer">
                  <div>
                    <p className="font-semibold text-white">Order #{1000 + order}</p>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-orange-400">$45.00</p>
                    <p className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full mt-1 inline-block">Delivered</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-1 space-y-8">
          <section className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 shadow-[0_10px_30px_rgba(249,115,22,0.3)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
            <h2 className="text-2xl font-bold mb-2 text-white relative z-10">Loyalty Status</h2>
            <p className="text-orange-100 mb-6 relative z-10">Gold Member</p>
            <div className="flex items-end gap-2 mb-6 relative z-10">
              <span className="text-5xl font-black text-white">1,250</span>
              <span className="text-orange-200 mb-1 font-medium">Coins</span>
            </div>
            <Link href="/loyalty" className="block text-center w-full py-3 rounded-xl bg-white text-orange-600 font-bold hover:bg-gray-50 transition-colors relative z-10 shadow-lg">
              View Rewards
            </Link>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
             <h2 className="text-xl font-semibold mb-6">Preferences</h2>
             <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Email Notifications</span>
                  <div className="w-12 h-6 bg-orange-500 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">SMS Alerts</span>
                  <div className="w-12 h-6 bg-gray-700 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-gray-400 rounded-full absolute left-1 top-1"></div>
                  </div>
                </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  );
}
