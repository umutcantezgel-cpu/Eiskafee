"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMenu } from "@/hooks/useMenu";
import {
  ProductCard,
  BoxCard,
  SkeletonCard,
} from "@/components/molecules/cards";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Cake, Image as ImageIcon, Plus, Minus } from "lucide-react";
import { FloatingBlob } from "@/components/atoms/FloatingBlob";
import { useStore } from "@/store/useStore";
import Image from "next/image";

interface ProductGridProps {
  activeCategory: string;
}

export function ProductGrid({ activeCategory }: ProductGridProps) {
  const { items, loading, error } = useMenu(activeCategory);
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const handleAddToCart = (e: React.MouseEvent, item: any) => {
    e.stopPropagation(); // Prevent card click if we had one
    addToCart({
      id: item.id,
      name: item.name,
      price: Number(item.price) || 0,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-[60vh]">
      {/* Error State */}
      {error && (
        <div className="text-center text-red-500 font-bold p-12 bg-red-500/10 rounded-3xl">
          Fehler beim Laden der Produkte: {error.message}
        </div>
      )}

      {/* Loading State: 8 SkeletonCards */}
      {loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && items.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-20 relative"
        >
          <FloatingBlob
            variant="organic3"
            color="peach"
            size={300}
            opacity={0.3}
            className="absolute z-0"
          />
          <div className="relative z-10">
            <span className="text-7xl mb-6 block">🧐</span>
            <h3 className="font-calistoga text-3xl text-charcoal mb-3">
              Nichts gefunden!
            </h3>
            <p className="font-bold text-charcoal/70">
              In dieser Kategorie gibt es aktuell keine Leckereien.
              <br />
              Schau doch mal in einer anderen vorbei!
            </p>
          </div>
        </motion.div>
      )}

      {/* Items Grid */}
      {!loading && !error && items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => {
              const cartItem = cart.find((c) => c.id === item.id);
              const quantity = cartItem?.quantity || 0;

              const increment = () => {
                if (quantity > 0) {
                  updateQuantity(item.id, quantity + 1);
                } else {
                  addToCart({
                    id: item.id,
                    name: item.name,
                    price: Number(item.price) || 0,
                  });
                }
              };

              const decrement = () => {
                if (quantity > 1) {
                  updateQuantity(item.id, quantity - 1);
                } else {
                  removeFromCart(item.id);
                }
              };

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: i * 0.05,
                  }}
                >
                  {activeCategory === "boxen" ? (
                    <BoxCard
                      title={item.name}
                      desc={item.desc}
                      price={String(item.price)}
                      quantity={quantity}
                      onIncrement={increment}
                      onDecrement={decrement}
                      onClick={quantity === 0 ? increment : undefined}
                    />
                  ) : (
                    <ProductCard
                      onClick={quantity === 0 ? increment : undefined}
                    >
                      <div className="flex flex-col h-full relative">
                        {/* Image Placeholder */}
                        <div className="w-full aspect-[4/3] bg-cream rounded-xl mb-4 flex items-center justify-center overflow-hidden border border-peach/30 relative">
                          {(item as any).image ? (
                            <Image
                              src={(item as any).image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center text-peach/80">
                              <ImageIcon
                                size={32}
                                className="mb-2 opacity-50"
                              />
                              <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                                Kein Bild
                              </span>
                            </div>
                          )}
                        </div>

                        <h3 className="font-calistoga text-xl text-charcoal mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-charcoal/70 line-clamp-2 flex-grow mb-4">
                          {item.desc}
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="font-bold text-lg text-terracotta whitespace-nowrap">
                            {typeof item.price === "number"
                              ? `${item.price.toFixed(2).replace(".", ",")} €`
                              : item.price}
                          </span>

                          {/* Quantity Selector or Add Button */}
                          <div onClick={(e) => e.stopPropagation()}>
                            {quantity > 0 ? (
                              <motion.div
                                initial={{ opacity: 0, width: 40 }}
                                animate={{ opacity: 1, width: "auto" }}
                                className="flex items-center gap-2 bg-cream rounded-full p-1 border border-peach shadow-sm"
                              >
                                <button
                                  onClick={decrement}
                                  className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-charcoal hover:bg-peach/50 transition-colors"
                                  aria-label="Menge reduzieren"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="font-bold text-sm w-4 text-center">
                                  {quantity}
                                </span>
                                <button
                                  onClick={increment}
                                  className="w-8 h-8 flex items-center justify-center bg-terracotta rounded-full text-white hover:bg-brown transition-colors"
                                  aria-label="Menge erhöhen"
                                >
                                  <Plus size={16} />
                                </button>
                              </motion.div>
                            ) : (
                              <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={increment}
                                className="bg-terracotta text-white p-2 rounded-full hover:bg-brown transition-colors shadow-sm"
                                aria-label="Zum Warenkorb hinzufügen"
                              >
                                <Plus size={18} strokeWidth={2.5} />
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </div>
                    </ProductCard>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Vitrine Hint Card for Toppings or Kuchen/Cookies */}
      {!loading &&
        !error &&
        (activeCategory === "kuchen" ||
          activeCategory === "cookies" ||
          activeCategory === "toppings") && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-peach/30 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center border border-peach"
          >
            <div className="w-16 h-16 rounded-full bg-peach flex items-center justify-center shrink-0">
              <Cake className="w-8 h-8 text-terracotta" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-bold text-charcoal leading-relaxed">
                Psst... frischen, leckeren Kuchen und viele weitere Specials
                findest du tagesaktuell in unserer Vitrine vor Ort in Wetzlar!
              </p>
            </div>
            <TransitionLink href="/visit">
              <button className="bg-terracotta text-cream px-6 py-3 rounded-full font-bold whitespace-nowrap shadow-clay hover:bg-brown transition-colors">
                Besuchen
              </button>
            </TransitionLink>
          </motion.div>
        )}
    </div>
  );
}
