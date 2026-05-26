import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  desc?: string;
  v?: string; // variant
  ic?: any; // icon
}

interface OrderData {
  pickupDate: string;
  pickupTime: string;
  name: string;
  email: string;
  phone: string;
  orderId?: string;
  orderNumber?: string;
}

interface AppState {
  cart: CartItem[];
  isCartOpen: boolean;
  orderData: OrderData;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  updateOrderData: (data: Partial<OrderData>) => void;
}

const initialOrderData: OrderData = {
  pickupDate: '',
  pickupTime: '',
  name: '',
  email: '',
  phone: ''
};

export const useStore = create<AppState>((set) => ({
  cart: [],
  isCartOpen: false,
  orderData: initialOrderData,
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
  updateOrderData: (data) => set((state) => ({ orderData: { ...state.orderData, ...data } }))
}));
