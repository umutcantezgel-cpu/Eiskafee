# Handoff Report — Explorer 2: Data Layer & Firebase Analysis (Milestone 4)

**Type:** Hard Handoff — Investigation complete.

---

## 1. Observation

### 1.1 Firebase Configuration (`src/lib/firebase/config.ts`, 21 lines)

The Firebase app is initialized with SSR-safe singleton pattern:

```typescript
// src/lib/firebase/config.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "dummy",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "dummy",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "dummy",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "dummy",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "dummy",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "dummy"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
```

**Key patterns:**
- `db` is the Firestore instance — imported via `import { db } from "@/lib/firebase/config"`
- Uses `"dummy"` fallback for all env vars (no `.env` file exists in project root)
- Singleton pattern: `getApps().length > 0 ? getApp() : initializeApp(firebaseConfig)`
- Exports: `app`, `auth`, `db`

### 1.2 Auth Context (`src/lib/firebase/AuthContext.tsx`, 61 lines)

Provides `useAuth()` hook with:
- `user: User | null`
- `loading: boolean`
- `login(email, password)` → `signInWithEmailAndPassword`
- `register(email, password)` → `createUserWithEmailAndPassword`
- `logout()` → `signOut`

**Safety check at line 30:** If the API key is `"dummy"` or `"DEIN_API_KEY"`, the auth system stops loading without subscribing to `onAuthStateChanged`.

### 1.3 Existing TypeScript Types (`src/types/index.ts`, 51 lines)

```typescript
export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;   // ← NOTE: string format, e.g. "25,00 €"
  desc: string;
  tag?: string;     // e.g. "Beliebt", "Sharing Box", "Täglich frisch"
  ticket?: boolean; // true = renders as BoxCard (ticket-style)
}

export interface MenuSection {
  desc: string;
  note?: string;
  items: MenuItem[];
}

export interface Bestseller extends MenuItem {
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  stars: number;
  text: string;
}

export interface AppConfig {
  name: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  rating: number;
  reviewCount: number;
}

export interface AppData {
  config: AppConfig;
  categories: Category[];
  menu: Record<string, MenuSection>;
  bestsellers: Bestseller[];
  reviews: Review[];
}
```

### 1.4 Static Menu Data (`src/lib/data.ts`, 166 lines)

The `HF_DATA` constant contains the full app data:
- **10 categories**: boxen, bubble, crepes, kuchen, cookies, eisbecher, shakes, iced, stullen, getraenke
- **Menu organized as** `Record<string, MenuSection>` — keyed by category id
- **Price format**: German locale string, e.g. `"25,00 €"`, `"ab 4,50 €"`, `"Auf Anfrage"`
- Named exports at bottom: `CATEGORIES`, `MENU`, `BESTSELLERS`, `REVIEWS`

### 1.5 Existing Firestore Collections (Found in Code)

| Collection | File | Line | Operation | Fields Written |
|---|---|---|---|---|
| `"orders"` | `src/app/checkout/page.tsx` | 26 | `addDoc` | `items[]`, `total`, `status: "pending"`, `createdAt` |
| `"support_messages"` | `src/app/support/page.tsx` | 37 | `addDoc` | `name`, `email`, `subject`, `message`, `createdAt` |
| `"categories"` | `src/components/menu/MenuClient.tsx` | 104 | `getDocs` | Read: `id`, `...data()`, sorted by `order` field |
| `"menuItems"` | `src/components/menu/MenuClient.tsx` | 110 | `getDocs` | Read: `id`, `categoryId`, `...data()` |
| `"menu_items"` | `src/hooks/useMenu.ts` | 20 | `getDocs` | Read: `id`, `name?`, `price?`, `[key: string]: any` |

**⚠️ INCONSISTENCY:** Two different collection names for menu items:
- `"menuItems"` in `MenuClient.tsx` (line 110)
- `"menu_items"` in `useMenu.ts` (line 20)

### 1.6 Order Document Shape (from `src/app/checkout/page.tsx`, lines 26-31)

```typescript
await addDoc(collection(db, "orders"), {
  items: items.map(it => ({
    name: it.n,      // string
    variant: it.v,   // string
    quantity: it.q,  // number
    price: it.p      // number (e.g. 9.80)
  })),
  total,             // number
  status: "pending", // string
  createdAt: new Date().toISOString(),  // ISO string
});
```

**Note:** No customer info (name, phone, email) is stored. No `userId` reference. No `pickupTime` field (despite redirecting to `/pickup-time`).

### 1.7 Support Message Shape (from `src/app/support/page.tsx`, lines 37-43)

```typescript
await addDoc(collection(db, "support_messages"), {
  name,        // string
  email,       // string
  subject,     // string (one of 4 options)
  message,     // string
  createdAt: new Date().toISOString()
});
```

### 1.8 Zustand Store (`src/store/useStore.ts`, 53 lines)

Client-side cart state with:
```typescript
interface CartItem {
  id: string;
  name: string;
  price: string;     // ← string format in cart (matches MenuItem.price)
  quantity: number;
  desc?: string;
}

interface AppState {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart / removeFromCart / updateQuantity / toggleCart / clearCart
}
```

**Note:** The cart `price` is a string (`"25,00 €"`), but the checkout `price` is a number (`9.80`). There's a type mismatch between the cart store and the order document.

### 1.9 StoreToggle Component (`src/components/admin/StoreToggle.tsx`, 46 lines)

Simple local `useState(false)` toggle for Online/Offline. **Not connected to Firestore.** State is lost on page reload.

### 1.10 Admin Layout (`src/app/admin/layout.tsx`, 91 lines)

Sidebar navigation defines 4 routes:
```typescript
const navItems = [
  { name: "Dashboard", href: "/admin",          icon: LayoutDashboard },
  { name: "Orders",    href: "/admin/orders",    icon: ShoppingBag },
  { name: "Products",  href: "/admin/products",  icon: Package },
  { name: "Settings",  href: "/admin/settings",  icon: Settings },
];
```

**Note:** The sidebar says "Products" (`/admin/products`) — not "Menu".

### 1.11 Admin Overview Page (`src/app/admin/page.tsx`, 92 lines)

All stats are **hardcoded** — not read from Firestore:
```typescript
const stats = [
  { name: "Total Revenue",    value: "€12,450", change: "+14.5%" },
  { name: "Active Orders",    value: "45",      change: "+5.2%" },
  { name: "Total Customers",  value: "1,240",   change: "+11.3%" },
  { name: "Conversion Rate",  value: "3.2%",    change: "+1.2%" },
];
```

"Recent Orders" section shows a placeholder: "No recent orders".

### 1.12 Existing Hooks

| Hook | File | Purpose |
|---|---|---|
| `useMenu()` | `src/hooks/useMenu.ts` | Fetches `menu_items` collection, returns `{ items, loading, error }` |
| `useFadeUp()` | `src/hooks/useFadeUp.ts` | UI animation hook (not data-related) |
| `useAuth()` | `src/lib/firebase/AuthContext.tsx` | Auth state + login/register/logout |

### 1.13 Firestore Operations Audit

| Operation | Used? | Details |
|---|---|---|
| `addDoc` | ✅ | checkout (orders), support (support_messages) |
| `getDocs` | ✅ | MenuClient (categories, menuItems), useMenu (menu_items) |
| `onSnapshot` | ❌ | No realtime listeners anywhere |
| `updateDoc` | ❌ | Not used anywhere |
| `setDoc` | ❌ | Not used anywhere |
| `deleteDoc` | ❌ | Not used anywhere |
| `doc()` | ❌ | Not used (no single-doc reads) |
| `query()/where()/orderBy()` | ❌ | No filtered queries |

---

## 2. Logic Chain

1. **Firebase `db` import pattern is established**: `import { db } from "@/lib/firebase/config"` + `import { collection, ... } from "firebase/firestore"`. All admin pages should follow this exact pattern.

2. **The `"orders"` collection already exists** with a known schema (items, total, status, createdAt). The admin Orders page should read from this exact collection using `getDocs` or `onSnapshot` for real-time updates.

3. **Menu items use static data as fallback** (from `src/lib/data.ts`), with Firestore overlay from `"menuItems"` collection (or `"menu_items"` — inconsistent naming). The admin Products/Menu page must write to the same collection the customer-facing menu reads from. This should be standardized to one name.

4. **No admin write operations exist yet.** The admin pages need `updateDoc`, `setDoc`, `deleteDoc` imported from `firebase/firestore`, plus `doc` for document references.

5. **The `StoreToggle` is disconnected from Firestore.** For the Settings page, a `"settings"` collection (or single document `"settings/store"`) is needed to persist the online/offline state and other config.

6. **No realtime listeners exist.** Admin Orders page would greatly benefit from `onSnapshot` for live order tracking. This is a new pattern for this codebase.

7. **Price type inconsistency:** `MenuItem.price` is a `string` (`"25,00 €"`), but `checkout/page.tsx` writes order item prices as `number` (9.80). The admin must handle both formats.

---

## 3. Caveats

- No `.env` or `.env.local` file exists — Firebase is running with `"dummy"` keys, meaning no actual Firestore data exists yet. All collections are code-inferred.
- The `useMenu` hook references `"menu_items"` but `MenuClient.tsx` references `"menuItems"` — unclear which is canonical. The admin should standardize on one.
- No Firestore security rules file was found in the project — admin access control may need rules that check for admin role.
- The order document has no `userId` field — admin cannot correlate orders to logged-in users.
- No Firestore indexes configuration was found.

---

## 4. Conclusion

### 4.1 Recommended Firestore Collection Schemas

#### `orders` Collection (EXISTING — extend for admin)

```typescript
// Document in "orders" collection
interface OrderDocument {
  // Existing fields (from checkout/page.tsx):
  items: {
    name: string;
    variant: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: "pending" | "preparing" | "ready" | "completed" | "cancelled";
  createdAt: string; // ISO 8601

  // Recommended additions for admin:
  userId?: string;           // Firebase Auth UID
  customerName?: string;
  customerPhone?: string;
  pickupTime?: string;       // ISO 8601 or "HH:mm"
  updatedAt?: string;        // ISO 8601
  notes?: string;            // Admin notes
  orderNumber?: string;      // Human-readable order number
}
```

**Admin needs:** Read all orders (getDocs or onSnapshot), update status (updateDoc), filter by status/date.

#### `menuItems` Collection (EXISTING — standardize name)

```typescript
// Document in "menuItems" collection
interface MenuItemDocument {
  // Existing fields (inferred from MenuClient.tsx):
  categoryId: string;        // References category id (e.g. "boxen")
  name: string;
  price: string;             // German format: "25,00 €"
  desc: string;
  tag?: string;              // "Beliebt", "Sharing Box", etc.
  ticket?: boolean;          // BoxCard rendering flag
  order?: number;            // Sort order within category

  // Recommended additions for admin:
  available: boolean;        // Toggle availability on/off
  updatedAt?: string;        // ISO 8601
}
```

**Admin needs:** Read all items (getDocs), toggle availability (updateDoc), edit name/price/desc (updateDoc), add new items (addDoc), delete items (deleteDoc).

#### `categories` Collection (EXISTING)

```typescript
interface CategoryDocument {
  // Existing fields (from MenuClient.tsx):
  id: string;                // Document ID = category id
  label: string;             // Display name
  icon: string;              // Lucide icon name
  order: number;             // Sort order

  // Recommended additions:
  visible?: boolean;         // Show/hide entire category
}
```

#### `settings` Collection (NEW — single document recommended)

```typescript
// Single document: doc(db, "settings", "store")
interface StoreSettings {
  isOnline: boolean;         // Store open/closed toggle
  storeName: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;

  // Opening hours
  openingHours: {
    [day: string]: {         // "monday", "tuesday", etc.
      open: string;          // "10:00"
      close: string;         // "20:00"
      closed: boolean;
    }
  };

  // Order settings
  orderSettings: {
    minOrderAmount?: number;
    maxAdvanceDays: number;   // How far ahead customers can order
    preparationTimeMinutes: number; // Default prep time
    acceptingOrders: boolean;
  };

  updatedAt: string;
}
```

#### `support_messages` Collection (EXISTING — no changes needed for admin)

```typescript
interface SupportMessageDocument {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;

  // Recommended additions for admin:
  read?: boolean;
  repliedAt?: string;
  adminNotes?: string;
}
```

### 4.2 TypeScript Interfaces Needed for Admin

These should be added to `src/types/index.ts` or a new `src/types/admin.ts`:

```typescript
// ── Order types ──
export type OrderStatus = "pending" | "preparing" | "ready" | "completed" | "cancelled";

export interface OrderItem {
  name: string;
  variant: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;                // Firestore document ID
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  customerName?: string;
  customerPhone?: string;
  pickupTime?: string;
  updatedAt?: string;
  notes?: string;
  orderNumber?: string;
}

// ── Admin Menu Item ──
export interface AdminMenuItem {
  id: string;
  categoryId: string;
  name: string;
  price: string;
  desc: string;
  tag?: string;
  ticket?: boolean;
  available: boolean;
  order?: number;
}

// ── Settings ──
export interface DayHours {
  open: string;
  close: string;
  closed: boolean;
}

export interface OrderSettings {
  minOrderAmount?: number;
  maxAdvanceDays: number;
  preparationTimeMinutes: number;
  acceptingOrders: boolean;
}

export interface StoreSettings {
  isOnline: boolean;
  storeName: string;
  tagline: string;
  address: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  openingHours: Record<string, DayHours>;
  orderSettings: OrderSettings;
  updatedAt: string;
}
```

### 4.3 Import Patterns for Admin Pages

Every admin page that needs Firestore should use:

```typescript
// Reading data
import { db } from "@/lib/firebase/config";
import { collection, getDocs, doc, onSnapshot, query, where, orderBy } from "firebase/firestore";

// Writing data
import { updateDoc, setDoc, addDoc, deleteDoc } from "firebase/firestore";
```

### 4.4 Recommended Hooks for Admin

```
src/hooks/useOrders.ts      — onSnapshot listener for "orders", filtered by status/date
src/hooks/useAdminMenu.ts   — getDocs for "menuItems", with add/update/delete helpers
src/hooks/useSettings.ts    — onSnapshot on doc(db, "settings", "store")
```

### 4.5 Critical Issues to Address During Implementation

| Issue | Location | Impact |
|---|---|---|
| Collection name inconsistency | `"menuItems"` vs `"menu_items"` | Admin must pick one — recommend `"menuItems"` (matches MenuClient.tsx which is the actual rendering component) |
| StoreToggle not persisted | `StoreToggle.tsx` line 7 | Must connect to `settings/store` Firestore document |
| No realtime listeners | Entire codebase | Admin orders page needs `onSnapshot` for live updates |
| Price type mismatch | `MenuItem.price: string` vs checkout `price: number` | Admin edit form must handle German locale string format |
| No admin auth guard | `admin/layout.tsx` | Layout doesn't check `useAuth()` — anyone can access |
| Hardcoded stats | `admin/page.tsx` lines 6-11 | Dashboard needs aggregate queries or computed values |

---

## 5. Verification Method

1. **Types verification:** `cat src/types/index.ts` — confirm interfaces match what's documented above
2. **Firebase config verification:** `cat src/lib/firebase/config.ts` — confirm `db` export pattern
3. **Collection names verification:**
   - `grep -rn "collection(db" src/` — lists all Firestore collection references
   - Expected: `"orders"`, `"support_messages"`, `"categories"`, `"menuItems"`, `"menu_items"` (inconsistency)
4. **Firestore operations verification:**
   - `grep -rn "onSnapshot\|updateDoc\|setDoc\|deleteDoc" src/` — should return no results (confirms no write/realtime ops exist)
5. **Invalidation condition:** If any new files have been added to `src/hooks/` or `src/lib/firebase/` since this analysis, re-run investigation.
