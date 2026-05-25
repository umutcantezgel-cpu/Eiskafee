import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  desc?: string;
}

interface AppState {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
}

export const useStore = create<AppState>((set) => ({
  cart: [],
  isCartOpen: false,
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((c) => c.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
          ),
          isCartOpen: true,
        };
      }
      return { 
        cart: [...state.cart, { ...item, quantity: 1 }],
        isCartOpen: true 
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((c) => c.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: quantity === 0 
        ? state.cart.filter((c) => c.id !== id)
        : state.cart.map((c) => (c.id === id ? { ...c, quantity } : c)),
    })),
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  clearCart: () => set({ cart: [], isCartOpen: false }),
}));
