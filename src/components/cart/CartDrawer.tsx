"use client";
import React, { useEffect } from "react";
import { useStore } from "@/store/useStore";
import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "lucide-react";
import Link from "next/link";

export function CartDrawer() {
  const { cart, isCartOpen, toggleCart, updateQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace(',', '.')) * item.quantity), 0);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) toggleCart();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isCartOpen, toggleCart]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-[rgba(45,31,25,0.4)] backdrop-blur-sm z-[1000]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[420px] bg-[#f5efe8] z-[1001] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-[#eedfcc] flex items-center justify-between bg-white">
              <div>
                <h2 className="font-calistoga text-xl text-[#2d1f19]">Dein Warenkorb</h2>
                <p className="font-nunito text-xs text-[#9a7060] font-semibold">{cart.length} Artikel · Pickup</p>
              </div>
              <button 
                onClick={toggleCart}
                className="w-10 h-10 rounded-full bg-[#f5efe8] flex items-center justify-center text-[#5c3d35] hover:bg-[#eedfcc] transition-colors"
              >
                <Icons.X size={20} strokeWidth={2.5} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                  <Icons.ShoppingBag size={48} color="#9a7060" strokeWidth={1} className="mb-4" />
                  <p className="font-calistoga text-lg text-[#5c3d35]">Dein Warenkorb ist leer</p>
                  <p className="font-nunito text-sm text-[#9a7060] mt-1">Hol dir was Süßes!</p>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl p-3.5 flex gap-3 items-center shadow-[0_2px_10px_rgba(45,31,25,0.04)]">
                      <div className="flex-1 min-w-0">
                        <div className="font-nunito font-black text-sm text-[#2d1f19] mb-2 truncate">{item.name}</div>
                        <div className="flex items-center justify-between">
                          {/* Quantity control */}
                          <div className="flex items-center gap-0 bg-[#eedfcc] rounded-full p-1">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                              <Icons.Minus size={12} color="#2d1f19" strokeWidth={3} />
                            </button>
                            <span className="w-8 text-center font-nunito font-black text-xs text-[#2d1f19]">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-[#CC624C] flex items-center justify-center shadow-sm">
                              <Icons.Plus size={12} color="#fff" strokeWidth={3} />
                            </button>
                          </div>
                          
                          <span className="font-calistoga text-base text-[#CC624C]">
                            {(parseFloat(item.price.replace(',', '.')) * item.quantity).toFixed(2).replace('.', ',')} €
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-5 bg-white border-t border-[#eedfcc]">
                <div className="bg-[#eedfcc] rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-nunito font-bold text-sm text-[#5c3d35]">Zwischensumme</span>
                    <span className="font-nunito font-black text-sm text-[#5c3d35]">{total.toFixed(2).replace('.', ',')} €</span>
                  </div>
                  <div className="h-px bg-[#E4C0A8] my-3 opacity-50" />
                  <div className="flex justify-between items-baseline">
                    <span className="font-nunito font-black text-sm text-[#2d1f19]">Gesamt</span>
                    <span className="font-calistoga text-2xl text-[#CC624C]">{total.toFixed(2).replace('.', ',')} €</span>
                  </div>
                </div>

                <Link href="/checkout" onClick={toggleCart} className="block w-full bg-[#CC624C] text-white rounded-2xl py-4 px-6 text-center shadow-[0_8px_20px_rgba(204,98,76,0.25)] hover:shadow-[0_10px_25px_rgba(204,98,76,0.35)] hover:-translate-y-0.5 transition-all duration-300">
                  <span className="font-nunito font-black text-sm uppercase tracking-wide flex items-center justify-center gap-2">
                    Weiter zur Kasse <Icons.ArrowRight size={16} strokeWidth={2.5} />
                  </span>
                </Link>
                <div className="text-center font-nunito text-xs text-[#9a7060] font-semibold mt-3">
                  Zahlung erfolgt bequem vor Ort im Laden
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
