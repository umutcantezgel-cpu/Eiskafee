import React from 'react';
import Link from 'next/link';

export default function LoyaltyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-orange-500 selection:text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto p-6 md:p-12">
        <nav className="mb-12">
          <Link href="/profile" className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-2 w-fit">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Dashboard
          </Link>
        </nav>

        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-500 mb-6 tracking-tight">
            Hey Fedee <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">Coins</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Earn coins with every purchase and unlock exclusive rewards. Your loyalty deserves to be celebrated.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative flex justify-center items-center h-[400px] w-full bg-gradient-to-br from-gray-900/80 to-black/80 rounded-[3rem] border border-gray-800 shadow-2xl backdrop-blur-xl group overflow-hidden">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* 3D Coin Placeholder */}
            <div className="relative w-64 h-64" style={{ perspective: '1000px' }}>
              <div className="w-full h-full animate-[spin_6s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                {/* Front of coin */}
                <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-600 border-[8px] border-yellow-200 shadow-[0_0_50px_rgba(249,115,22,0.6)] flex items-center justify-center" style={{ backfaceVisibility: 'hidden' }}>
                  <span className="text-6xl font-black text-white drop-shadow-md">F</span>
                </div>
                {/* Back of coin */}
                <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 border-[8px] border-orange-500 shadow-[0_0_50px_rgba(249,115,22,0.6)] flex items-center justify-center" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                  <span className="text-6xl font-black text-white drop-shadow-md">F</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
              <p className="text-orange-300/50 text-sm font-medium tracking-widest uppercase">3D Coin Placeholder</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-xl"></div>
              <h3 className="text-gray-400 text-lg font-medium mb-2">Current Balance</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl font-black text-white">1,250</span>
                <span className="text-xl text-orange-400 font-bold">Coins</span>
              </div>
              <div className="mt-6 w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-400 h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="mt-3 text-sm text-gray-400">250 coins away from <span className="text-orange-400 font-semibold">Platinum Tier</span></p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 text-center hover:bg-gray-800/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
                <h4 className="font-semibold text-white">Earn Coins</h4>
                <p className="text-xs text-gray-500 mt-1">View ways to earn</p>
              </div>
              <div className="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 text-center hover:bg-gray-800/50 transition-colors cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-semibold text-white">History</h4>
                <p className="text-xs text-gray-500 mt-1">View past activity</p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-white">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "$10 Discount", cost: 500, color: "from-blue-500 to-cyan-400" },
              { title: "Free Shipping", cost: 800, color: "from-purple-500 to-pink-500" },
              { title: "Mystery Box", cost: 1200, color: "from-orange-500 to-yellow-500" },
            ].map((reward, i) => (
              <div key={i} className="group relative bg-gray-900/50 border border-gray-800 rounded-[2rem] p-6 hover:border-gray-600 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${reward.color} opacity-10 rounded-bl-full group-hover:scale-110 group-hover:opacity-20 transition-all duration-500`}></div>
                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{reward.title}</h3>
                <p className="text-gray-400 text-sm mb-6 relative z-10">Unlock this reward with your coins.</p>
                <div className="flex justify-between items-center relative z-10">
                  <span className="font-bold text-orange-400">{reward.cost} Coins</span>
                  <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-xl transition-colors">
                    Redeem
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
