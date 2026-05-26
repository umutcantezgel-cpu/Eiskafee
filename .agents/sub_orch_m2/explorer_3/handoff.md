# Handoff Report — Explorer 3: Order Flow Data Strategy

**Summary**: All 5 order-flow pages are static mockups with hardcoded data, no Zustand store integration, broken inter-page data flow, and a premature Firestore write. This report provides the complete fix strategy including Firestore schema, URL params, price utilities, shared types, and exact code changes.

---

## 1. Observation

### 1.1 Current State of Each Page

#### Page 1: `/checkout` (src/app/checkout/page.tsx, 134 lines)
- **Line 16-19**: Items are HARDCODED arrays, not from Zustand store
- **Line 50**: Article count hardcoded as `'2 Artikel · Pickup'`
- **Line 52-54**: "Leeren" button has no `onClick` handler
- **Line 68-74**: +/- buttons have no `onClick` handlers
- **Line 100**: Summary subtotal hardcoded as `'24,80 €'`
- **Lines 23-39**: `handleCheckout` creates a Firestore order **prematurely** — this should happen in order-review (step 3), not checkout (step 1)
- **Line 9-10**: Imports `addDoc`/`db` but shouldn't use them here
- **No `useStore` import** — completely disconnected from cart state

#### Page 2: `/pickup-time` (src/app/pickup-time/page.tsx, 133 lines)
- **Line 12-13**: State for day/time selection exists (good)
- **Lines 15-21**: Days array is HARDCODED with static dates (`24, 25, 26, 27, 28`) — not dynamically computed
- **Lines 23-27**: Times array is hardcoded (acceptable, but first slot hardcoded as "past" at line 90)
- **Lines 112-118**: Contact info HARDCODED (`'Anna Müller'`, `'+49 176 25026991'`) — should be form inputs
- **Line 123**: Navigates to `/order-review` as plain Link — **passes NO data** (no URL params)

#### Page 3: `/order-review` (src/app/order-review/page.tsx, 116 lines)
- **Line 40**: Pickup time HARDCODED as `'Heute · 15:30'`
- **Line 48**: Article count HARDCODED as `'3 Artikel'`
- **Lines 56-70**: Items list HARDCODED
- **Lines 89-97**: Summary totals HARDCODED (`24,80 €`, `1,62 €`)
- **Line 106**: Submit button navigates via `<Link href="/confirmation">` — **no Firestore write at all**
- **No `useSearchParams`** — doesn't read pickup data from URL

#### Page 4: `/confirmation` (src/app/confirmation/page.tsx, 87 lines)
- **Line 41**: Order number HARDCODED as `'#F-24891'`
- **Line 52**: Pickup time HARDCODED as `'Heute · 15:30'`
- **Lines 64-65**: Summary HARDCODED as `'3 Artikel · vor Ort zu zahlen'`, `'24,80 €'`
- **Line 71**: Link to `/order-status` — **no orderId param passed**
- **No `clearCart` call** — cart is never cleared after order submission
- **No `useSearchParams`** — doesn't read orderId

#### Page 5: `/order-status` (src/app/order-status/page.tsx, 110 lines)
- **Lines 12-17**: Status steps HARDCODED with fixed times
- **Line 27**: Order number HARDCODED `'#F-24891'`
- **Line 28**: Estimated time HARDCODED `'Geschätzt 15:30'`
- **Lines 39-40**: Status text HARDCODED
- **Line 78**: Tip HARDCODED with `'#F-24891'`
- **No Firestore import** — no data reading at all
- **No `useSearchParams`** — doesn't read orderId from URL
- **No `onSnapshot`** — no real-time status updates

### 1.2 Existing Patterns in Codebase
- **Zustand store** (`src/store/useStore.ts`): CartItem has `price: string` (format `'4,90 €'`). Actions: addToCart, removeFromCart, updateQuantity, toggleCart, clearCart. **No page in the order flow uses it**.
- **Firebase config** (`src/lib/firebase/config.ts`): `db` exported, Firestore initialized. Uses env vars with "dummy" fallback.
- **Types** (`src/types/index.ts`): Has `Category`, `MenuItem`, `MenuSection`, `Bestseller`, `Review`, `AppConfig`, `AppData`. **No `Order` or `OrderItem` types**.
- **Price format**: Menu uses string `'4,90 €'`. Checkout uses number `9.80` internally. Mixed and inconsistent.
- **Suspense pattern** (`src/app/auth/page.tsx`): Uses `Suspense` wrapper for `useSearchParams` — this pattern must be replicated in all pages that use `useSearchParams`.
- **No `onSnapshot` usage** anywhere in the codebase. Only `getDocs` and `addDoc`.
- **`clearCart` is never called** anywhere in `src/app/`.

### 1.3 Data Flow Gaps (Current)
```
/checkout → (hardcoded items) → premature addDoc → /pickup-time
/pickup-time → (hardcoded contact) → plain link → /order-review
/order-review → (hardcoded everything) → plain link → /confirmation  
/confirmation → (hardcoded order#) → plain link → /order-status
/order-status → (hardcoded everything) → no Firestore read
```

---

## 2. Logic Chain

1. **Cart data must flow via Zustand**: The store already has `cart`, `addToCart`, `removeFromCart`, `updateQuantity`, `clearCart`. Checkout and order-review must read from `useStore()`.

2. **Firestore write belongs in order-review, not checkout**: Checkout is "view cart" — user may still modify items. The actual commit happens at "Bestellung absenden" in order-review. The current `addDoc` in checkout (line 26) must be removed and placed in order-review's submit handler.

3. **Pickup data flows via URL params**: Since pickup-time is a form page, selected values (day, time, name, phone) must be encoded as URL search params when navigating to order-review. This avoids adding transient state to Zustand.

4. **Order ID flows via URL params**: After `addDoc` in order-review, the returned `docRef.id` navigates to `/confirmation?orderId=xxx`. Confirmation reads it and passes it to `/order-status?orderId=xxx`.

5. **Order-status must use Firestore**: Read order by ID from URL param. Use `onSnapshot` for real-time status updates (status changes from kitchen/admin panel). `getDoc` is insufficient since status changes over time.

6. **Cart clearing**: `clearCart()` must be called in confirmation page (after successful order, before user navigates away). Not in order-review (user might hit back).

7. **Price parsing is required**: Store prices are strings (`'4,90 €'`). Totals need numeric computation. A utility module is needed.

8. **`useSearchParams` requires Suspense boundary**: Next.js App Router requires components using `useSearchParams` to be wrapped in `<Suspense>`. The auth page already follows this pattern.

---

## 3. Caveats

- **No admin panel investigated**: The order-status page assumes an admin can update order status in Firestore. This report doesn't cover the admin-side status update mechanism.
- **No payment integration**: The app explicitly states "Zahlung erfolgt vor Ort im Laden" (payment in store). No online payment flow needed.
- **Firestore rules not audited**: Assumes Firestore rules allow read/write to `orders` collection. If env vars are "dummy", Firestore operations will fail — this is pre-existing.
- **Order number format**: Currently hardcoded as `#F-24891`. The new flow uses Firestore document IDs which are alphanumeric. A human-readable order number could be generated server-side or from a counter, but that's out of scope — using a truncated/formatted ID is sufficient for MVP.

---

## 4. Conclusion — Complete Strategy

### 4.1 Shared Types (new file: `src/types/order.ts`)

```typescript
// Firestore order document schema
export type OrderStatus = 'received' | 'preparing' | 'ready' | 'picked_up' | 'cancelled';

export interface OrderItem {
  id: string;
  name: string;
  price: number;     // numeric, e.g. 4.90
  quantity: number;
  desc?: string;
}

export interface PickupInfo {
  dayLabel: string;   // 'Heute', 'Morgen', 'Sa', etc.
  date: string;       // '2025-05-26' ISO date
  time: string;       // '15:30'
  name: string;       // customer name
  phone: string;      // customer phone
}

export interface OrderDocument {
  id?: string;                  // Firestore doc ID (added client-side after read)
  orderNumber: string;          // Human-readable, e.g. '#F-A3B9C'
  items: OrderItem[];
  subtotal: number;
  total: number;
  status: OrderStatus;
  pickup: PickupInfo;
  createdAt: string;            // ISO timestamp
  updatedAt: string;            // ISO timestamp
  statusHistory: {
    status: OrderStatus;
    timestamp: string;
    note?: string;
  }[];
}
```

### 4.2 Price Utility (new file: `src/lib/price.ts`)

```typescript
/**
 * Parse German price string to number: '4,90 €' → 4.90
 * Handles: '4,90 €', '4,90€', '4,90', 'ab 4,50 €', 'Auf Anfrage'
 */
export function parsePrice(priceStr: string): number {
  const cleaned = priceStr.replace(/[^\d,]/g, '');  // strip everything except digits and comma
  if (!cleaned) return 0;
  return parseFloat(cleaned.replace(',', '.'));
}

/**
 * Format number to German price string: 4.90 → '4,90 €'
 */
export function formatPrice(amount: number): string {
  return amount.toFixed(2).replace('.', ',') + ' €';
}

/**
 * Calculate cart subtotal from CartItem[] (store format with string prices)
 */
export function calculateSubtotal(items: { price: string; quantity: number }[]): number {
  return items.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
}
```

### 4.3 Order Number Generator (add to `src/lib/order.ts`)

```typescript
/**
 * Generate human-readable order number from Firestore doc ID
 * e.g. 'abc123XYZ...' → '#F-ABC12'
 */
export function generateOrderNumber(docId: string): string {
  return '#F-' + docId.substring(0, 5).toUpperCase();
}
```

### 4.4 Complete Data Flow (Fixed)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        DATA FLOW DIAGRAM                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  [Menu / Home]                                                          │
│       │ addToCart() → Zustand                                           │
│       ▼                                                                 │
│  ┌──────────────┐                                                       │
│  │  /checkout    │  ← Reads: useStore().cart                            │
│  │  (Step 1/3)   │  ← Actions: updateQuantity, removeFromCart, clearCart│
│  │               │  ← Computes: subtotal via parsePrice+calculateSubtotal│
│  └──────┬───────┘                                                       │
│         │ router.push('/pickup-time')                                   │
│         ▼                                                               │
│  ┌──────────────┐                                                       │
│  │ /pickup-time  │  ← Reads: nothing external (own state)              │
│  │  (Step 2/3)   │  ← Inputs: day selector, time grid, name, phone     │
│  │               │  ← Generates: dynamic dates from Date.now()          │
│  └──────┬───────┘                                                       │
│         │ router.push('/order-review?day=Heute&date=2025-05-26          │
│         │   &time=15:30&name=Anna&phone=017625026991')                  │
│         ▼                                                               │
│  ┌──────────────┐                                                       │
│  │ /order-review │  ← Reads: useStore().cart + useSearchParams()        │
│  │  (Step 3/3)   │  ← Computes: subtotal, MwSt (7%), total             │
│  │               │  ← Submit: addDoc(db, 'orders', {...}) → docRef.id  │
│  └──────┬───────┘                                                       │
│         │ router.push('/confirmation?orderId=' + docRef.id)             │
│         ▼                                                               │
│  ┌──────────────┐                                                       │
│  │ /confirmation │  ← Reads: useSearchParams().get('orderId')           │
│  │               │  ← Action: clearCart() on mount (once)               │
│  │               │  ← Reads: getDoc(db, 'orders', orderId) for display  │
│  └──────┬───────┘                                                       │
│         │ router.push('/order-status?orderId=' + orderId)               │
│         ▼                                                               │
│  ┌──────────────┐                                                       │
│  │ /order-status │  ← Reads: useSearchParams().get('orderId')           │
│  │               │  ← Firestore: onSnapshot(doc(db,'orders',orderId))  │
│  │               │  ← Updates: real-time status, times, progress        │
│  └──────────────┘                                                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### 4.5 URL Parameter Schema

| Route | Params Received | Params Sent |
|---|---|---|
| `/checkout` | none | none (navigates to `/pickup-time`) |
| `/pickup-time` | none | `?day=Heute&date=2025-05-26&time=15:30&name=Anna+Müller&phone=017625026991` |
| `/order-review` | `day`, `date`, `time`, `name`, `phone` | `?orderId=<firestore_doc_id>` |
| `/confirmation` | `orderId` | `?orderId=<same_id>` |
| `/order-status` | `orderId` | none |

### 4.6 Firestore Order Document Schema

Collection: `orders`

```json
{
  "orderNumber": "#F-A3B9C",
  "items": [
    { "id": "b4", "name": "Bubble Waffle Deluxe", "price": 8.80, "quantity": 2, "desc": "Eis + Sahne + 3 Toppings" }
  ],
  "subtotal": 17.60,
  "total": 17.60,
  "status": "received",
  "pickup": {
    "dayLabel": "Heute",
    "date": "2025-05-26",
    "time": "15:30",
    "name": "Anna Müller",
    "phone": "+49 176 25026991"
  },
  "createdAt": "2025-05-26T14:42:00.000Z",
  "updatedAt": "2025-05-26T14:42:00.000Z",
  "statusHistory": [
    { "status": "received", "timestamp": "2025-05-26T14:42:00.000Z" }
  ]
}
```

### 4.7 `onSnapshot` vs `getDoc` Decision

**Recommendation: `onSnapshot` (real-time) for order-status, `getDoc` (one-time) for confirmation.**

Rationale:
- Order-status is a "live tracking" page — the user waits there while their order is prepared. Status transitions (`received` → `preparing` → `ready` → `picked_up`) happen while the user watches. `onSnapshot` delivers instant UI updates without polling.
- Confirmation page only needs to display what was just ordered — data won't change in the few seconds the user views this page. `getDoc` suffices and is cheaper.
- `onSnapshot` returns an `unsubscribe` function that MUST be called in a `useEffect` cleanup to prevent memory leaks.

```typescript
// order-status pattern:
useEffect(() => {
  if (!orderId) return;
  const unsub = onSnapshot(doc(db, 'orders', orderId), (snap) => {
    if (snap.exists()) {
      setOrder({ id: snap.id, ...snap.data() } as OrderDocument);
    }
  });
  return () => unsub();
}, [orderId]);
```

### 4.8 Exact Changes for `order-status/page.tsx`

The entire page must be rewritten. Key changes:

**Before (current — 110 lines, all hardcoded)**:
- No imports for Firestore, useSearchParams, Suspense
- No state management
- Hardcoded steps, order number, times, status text

**After (proposed structure)**:

```typescript
"use client";

import React, { useState, useEffect, Suspense } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { useRouter, useSearchParams } from "next/navigation";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import type { OrderDocument, OrderStatus } from "@/types/order";

const STATUS_CONFIG: Record<OrderStatus, { 
  label: string; 
  icon: typeof Icons.Check; 
  statusText: string;
  subtitle: string;
}> = {
  received:   { label: 'Bestellung erhalten',    icon: Icons.Check,       statusText: 'Bestellung eingegangen',          subtitle: 'Wir haben deine Bestellung erhalten' },
  preparing:  { label: 'Wird zubereitet',        icon: Icons.ChefHat,     statusText: 'Deine Bestellung wird zubereitet', subtitle: 'Ofenfrisch in Kürze' },
  ready:      { label: 'Bereit zur Abholung',    icon: Icons.ShoppingBag, statusText: 'Bereit zur Abholung!',            subtitle: 'Du kannst deine Bestellung jetzt abholen' },
  picked_up:  { label: 'Abgeholt',               icon: Icons.ThumbsUp,    statusText: 'Guten Appetit!',                  subtitle: 'Danke für deine Bestellung' },
  cancelled:  { label: 'Storniert',              icon: Icons.X,           statusText: 'Bestellung storniert',            subtitle: 'Die Bestellung wurde storniert' },
};

const STATUS_ORDER: OrderStatus[] = ['received', 'preparing', 'ready', 'picked_up'];

function OrderStatusContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');
  
  const [order, setOrder] = useState<OrderDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!orderId) { setError('Keine Bestellnummer'); setLoading(false); return; }
    
    const unsub = onSnapshot(
      doc(db, 'orders', orderId),
      (snap) => {
        if (snap.exists()) {
          setOrder({ id: snap.id, ...snap.data() } as OrderDocument);
        } else {
          setError('Bestellung nicht gefunden');
        }
        setLoading(false);
      },
      (err) => { setError('Fehler beim Laden'); setLoading(false); }
    );
    return () => unsub();
  }, [orderId]);
  
  if (loading) return <LoadingSpinner />;
  if (error || !order) return <ErrorView message={error || 'Unbekannter Fehler'} />;
  
  const currentStatusIdx = STATUS_ORDER.indexOf(order.status);
  const currentConfig = STATUS_CONFIG[order.status];
  
  const steps = STATUS_ORDER.map((s, i) => ({
    ...STATUS_CONFIG[s],
    done: i < currentStatusIdx,
    active: i === currentStatusIdx,
    time: order.statusHistory.find(h => h.status === s)?.timestamp 
      ? new Date(order.statusHistory.find(h => h.status === s)!.timestamp).toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
      : (i === currentStatusIdx ? 'Jetzt' : ''),
  }));
  
  // ... render with dynamic data from `order`
  // Header shows order.orderNumber, order.pickup.time
  // Big status pill shows currentConfig.statusText, pickup time
  // Timeline uses steps array
  // Pickup info uses order.pickup data
}

export default function OrderStatusPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <OrderStatusContent />
    </Suspense>
  );
}
```

### 4.9 Empty Cart Handling Strategy

| Page | Empty Cart Behavior |
|---|---|
| `/checkout` | Show empty state: "Dein Warenkorb ist leer" with link to `/menu`. Disable "Weiter zur Abholung" button. |
| `/pickup-time` | No cart check needed — this page is about time selection. But guard: if cart is empty (user navigated directly), redirect to `/checkout`. |
| `/order-review` | Guard: if cart is empty, redirect to `/checkout`. Show toast "Warenkorb ist leer". |
| `/confirmation` | Cart will have just been cleared by this page. No guard needed — data comes from Firestore by orderId. |
| `/order-status` | No cart dependency — data comes entirely from Firestore. |

Implementation pattern for guards:
```typescript
const cart = useStore((s) => s.cart);
const router = useRouter();

useEffect(() => {
  if (cart.length === 0) {
    router.replace('/checkout');
  }
}, [cart, router]);
```

### 4.10 Changes per Page Summary

| Page | Remove | Add |
|---|---|---|
| `/checkout` | Hardcoded items array, hardcoded summary, premature `addDoc`, unused Firebase imports | `useStore()` for cart, `parsePrice`/`formatPrice`/`calculateSubtotal`, working +/- buttons via `updateQuantity`, working "Leeren" via `clearCart`, empty cart state |
| `/pickup-time` | Hardcoded dates array, hardcoded contact info | Dynamic date generation from `Date.now()`, `<input>` fields for name/phone with state, URL param encoding on navigate |
| `/order-review` | All hardcoded data, plain `<Link>` submit | `useSearchParams` for pickup data, `useStore()` for cart, `addDoc` for Firestore write, `Suspense` boundary, computed totals |
| `/confirmation` | All hardcoded data, plain `<Link>` to status | `useSearchParams` for orderId, `getDoc` for order data, `clearCart()` on mount, `Suspense` boundary |
| `/order-status` | Everything (complete rewrite) | `useSearchParams` for orderId, `onSnapshot` for real-time, `Suspense` boundary, dynamic status rendering |

### 4.11 New Files Required

| File | Purpose |
|---|---|
| `src/types/order.ts` | `OrderStatus`, `OrderItem`, `PickupInfo`, `OrderDocument` types |
| `src/lib/price.ts` | `parsePrice()`, `formatPrice()`, `calculateSubtotal()` |
| `src/lib/order.ts` | `generateOrderNumber()` helper |

### 4.12 Cart Clearing Strategy (Detailed)

Cart must be cleared exactly once, in `/confirmation`, on mount:

```typescript
// In confirmation page:
const clearCart = useStore((s) => s.clearCart);
const hasCleared = useRef(false);

useEffect(() => {
  if (!hasCleared.current) {
    clearCart();
    hasCleared.current = true;
  }
}, [clearCart]);
```

Using `useRef` prevents double-clearing in React Strict Mode (dev). This is the correct place because:
- NOT in order-review (user might hit back)
- NOT in order-status (user might visit this page later from order history)
- In confirmation = order was successfully submitted, cart is no longer needed

---

## 5. Verification Method

### Verify Types
```bash
cd "/Users/umurey/Downloads/Hey Fedee/hey-fede-app"
npx tsc --noEmit
```

### Verify Data Flow
1. Add items to cart from menu
2. Navigate to `/checkout` — verify items display from Zustand
3. Click "Weiter zur Abholung" → `/pickup-time`
4. Select day/time, fill name/phone → click "Bestellung prüfen"
5. Verify `/order-review?day=...&time=...&name=...&phone=...` URL
6. Verify order-review shows cart items + pickup data
7. Click "Bestellung absenden" → Firestore write → redirect to `/confirmation?orderId=xxx`
8. Verify confirmation shows order data from Firestore
9. Verify cart is cleared (check Zustand state)
10. Click "Status anzeigen" → `/order-status?orderId=xxx`
11. Verify order-status reads from Firestore
12. Manually update status in Firestore → verify real-time UI update

### Verify Empty Cart
- Navigate directly to `/checkout` with empty cart → verify empty state
- Navigate directly to `/order-review` with empty cart → verify redirect to `/checkout`

### Invalidation Conditions
- If Firestore env vars are "dummy", all Firestore operations will fail (pre-existing issue)
- If Zustand store `CartItem.price` format changes from `'4,90 €'`, `parsePrice` must be updated
