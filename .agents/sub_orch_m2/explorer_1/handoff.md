# Handoff Report — Explorer 1 (Milestone 2: Order Flow Fix)

**Summary**: Both `checkout/page.tsx` and `pickup-time/page.tsx` are fully hardcoded mockups. The Zustand store needs 5 new order-flow fields. All 4 order-flow pages (checkout → pickup-time → order-review → confirmation) need refactoring to share state through Zustand. Below is a complete, line-by-line fix strategy with code snippets.

---

## 1. Observation

### A. Zustand Store (`src/store/useStore.ts`, 53 lines)

```typescript
// Line 3-9: CartItem interface
interface CartItem {
  id: string;
  name: string;
  price: string;      // ← STRING like '7,00 €'
  quantity: number;
  desc?: string;
}
```

The store currently has **only cart-level state** (cart array, isCartOpen). It has **no order-flow fields** (pickup day/time, contact info).

**Price format confirmed** from `src/lib/data.ts` lines 33, 41, 49, etc.:
- All prices are strings like `'25,00 €'`, `'7,00 €'`, `'3,80 €'`
- Some are `'Auf Anfrage'` or `'ab 4,50 €'` (non-orderable items — not in cart)

**CartDrawer** (`src/components/cart/CartDrawer.tsx`, line 11) already parses prices correctly:
```typescript
const total = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace(',', '.')) * item.quantity), 0);
```

### B. Checkout Page (`src/app/checkout/page.tsx`, 134 lines)

| Line(s) | Issue | Severity |
|---------|-------|----------|
| 16-19 | HARDCODED items array with fake data | **Critical** |
| 21 | Total calculated from hardcoded items | **Critical** |
| 23-38 | `handleCheckout` writes to Firestore BEFORE pickup selection (premature) | **Critical** |
| 50 | Hardcoded `'2 Artikel · Pickup'` subtitle | Medium |
| 52-54 | 'Leeren' button has no onClick handler | Medium |
| 68-69 | Minus button has no onClick handler | Medium |
| 72-73 | Plus button has no onClick handler | Medium |
| 100-101 | Hardcoded `'24,80 €'` in summary rows | **Critical** |
| — | No empty cart redirect/handling | Medium |
| — | No import of `useStore` at all | **Critical** |

### C. Pickup Time Page (`src/app/pickup-time/page.tsx`, 133 lines)

| Line(s) | Issue | Severity |
|---------|-------|----------|
| 12-13 | Default selected day/time hardcoded (24, "15:30") | **Critical** |
| 15-21 | HARDCODED days array with fixed date numbers | **Critical** |
| 23-27 | HARDCODED times array (fine for MVP, but should be configurable) | Low |
| 90 | `isPast` is `i === 0` — always marks first time as past | Medium |
| 112-113 | HARDCODED name 'Anna Müller' | **Critical** |
| 116-117 | HARDCODED phone '+49 176 25026991' | **Critical** |
| 111-118 | Contact fields are static `<div>`, not editable `<input>` | **Critical** |
| 123-128 | "Bestellung prüfen" button uses `<Link>` without passing data | **Critical** |

### D. Order Review Page (`src/app/order-review/page.tsx`, 116 lines)

| Line(s) | Issue | Severity |
|---------|-------|----------|
| 40 | Hardcoded `'Heute · 15:30'` | **Critical** |
| 48 | Hardcoded `'3 Artikel'` | **Critical** |
| 56-58 | Hardcoded items list | **Critical** |
| 89 | Hardcoded `'24,80 €'` | **Critical** |
| 92 | Hardcoded `'1,62 €'` MwSt | **Critical** |
| 97 | Hardcoded `'24,80 €'` total | **Critical** |
| 106-111 | Submit button is a plain Link, no Firestore write | **Critical** |

### E. Confirmation Page (`src/app/confirmation/page.tsx`, 87 lines)

| Line(s) | Issue | Severity |
|---------|-------|----------|
| 41 | Hardcoded order number `#F-24891` | **Critical** |
| 52 | Hardcoded `'Heute · 15:30'` | **Critical** |
| 64 | Hardcoded `'3 Artikel · vor Ort zu zahlen'` | **Critical** |
| 65 | Hardcoded `'24,80 €'` | **Critical** |

---

## 2. Logic Chain

### Step 1: Extend Zustand store with order-flow fields

**Rationale**: Multiple pages need to share pickup day/time and contact info. Zustand is already the app's state management. Adding order-flow fields to the existing store is the simplest approach.

**New fields needed in `AppState` interface:**

```typescript
// Add to AppState interface (src/store/useStore.ts, after line 13)
pickupDay: string;      // e.g. 'Heute', 'Morgen', 'Mi'
pickupDate: string;     // e.g. '2026-05-26' (ISO date for Firestore)
pickupTime: string;     // e.g. '15:30'
contactName: string;
contactPhone: string;
orderId: string | null; // set after Firestore write

// New actions
setPickupDay: (day: string, date: string) => void;
setPickupTime: (time: string) => void;
setContactName: (name: string) => void;
setContactPhone: (phone: string) => void;
setOrderId: (id: string) => void;
resetOrder: () => void;  // clear order-flow fields (not cart)
```

**New defaults:**
```typescript
pickupDay: '',
pickupDate: '',
pickupTime: '',
contactName: '',
contactPhone: '',
orderId: null,
```

**New action implementations:**
```typescript
setPickupDay: (day, date) => set({ pickupDay: day, pickupDate: date }),
setPickupTime: (time) => set({ pickupTime: time }),
setContactName: (name) => set({ contactName: name }),
setContactPhone: (phone) => set({ contactPhone: phone }),
setOrderId: (id) => set({ orderId: id }),
resetOrder: () => set({ pickupDay: '', pickupDate: '', pickupTime: '', contactName: '', contactPhone: '', orderId: null }),
```

### Step 2: Price parsing utility

**Create `src/lib/utils/price.ts`** (shared across all order-flow pages):

```typescript
/**
 * Parse German price string to number.
 * '7,00 €' → 7.00
 * '25,00 €' → 25.00
 */
export function parsePrice(priceStr: string): number {
  // Remove currency symbol and whitespace, replace comma with dot
  const cleaned = priceStr.replace(/[€\s]/g, '').replace(',', '.');
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

/**
 * Format number to German price string.
 * 7.00 → '7,00 €'
 */
export function formatPrice(amount: number): string {
  return amount.toFixed(2).replace('.', ',') + ' €';
}

/**
 * Calculate cart total from CartItem array.
 */
export function calcCartTotal(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + parsePrice(item.price) * item.quantity, 0);
}

/**
 * Count total items in cart (sum of quantities).
 */
export function calcCartCount(cart: CartItem[]): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}
```

### Step 3: Dynamic day generation utility

**Create `src/lib/utils/dates.ts`**:

```typescript
const DAY_LABELS_DE = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

interface PickupDay {
  label: string;        // 'Heute', 'Morgen', 'Mi', etc.
  dateNumber: number;   // 26 (day of month)
  isoDate: string;      // '2026-05-26'
}

export function generatePickupDays(count: number = 5): PickupDay[] {
  const now = new Date();
  const days: PickupDay[] = [];

  for (let i = 0; i < count; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() + i);

    let label: string;
    if (i === 0) label = 'Heute';
    else if (i === 1) label = 'Morgen';
    else label = DAY_LABELS_DE[date.getDay()];

    days.push({
      label,
      dateNumber: date.getDate(),
      isoDate: date.toISOString().split('T')[0],
    });
  }

  return days;
}
```

### Step 4: Fix `checkout/page.tsx` (COMPLETE REWRITE of logic, keep layout)

**Remove:**
- Lines 9-10: Firebase imports (`collection`, `addDoc`, `db`) — move to order-review
- Lines 14: `isSubmitting` state — not needed here anymore
- Lines 16-21: Hardcoded items + total
- Lines 23-38: `handleCheckout` function (Firestore write)

**Add at top (after line 8):**
```typescript
import { useStore } from '@/store/useStore';
import { parsePrice, formatPrice, calcCartTotal, calcCartCount } from '@/lib/utils/price';
```

**Replace lines 12-21 with:**
```typescript
export default function CheckoutPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart } = useStore();

  // Redirect if cart empty
  useEffect(() => {
    if (cart.length === 0) {
      router.replace('/menu');
    }
  }, [cart.length, router]);

  const total = calcCartTotal(cart);
  const itemCount = calcCartCount(cart);

  if (cart.length === 0) return null; // prevent flash while redirecting
```

**Also add `useEffect` to imports (line 3):**
```typescript
import React, { useEffect } from "react";
```

**Line 50 — dynamic subtitle:**
```tsx
<div className="font-nunito text-[11px] font-bold text-[#7a5a52]">{itemCount} Artikel · Pickup</div>
```

**Lines 52-54 — wire up Leeren button:**
```tsx
<button
  onClick={() => { clearCart(); router.push('/menu'); }}
  className="text-[12px] font-extrabold text-[#7a5a52] underline"
>
  Leeren
</button>
```

**Lines 58-81 — replace items.map with cart.map:**
```tsx
{cart.map((item, idx) => {
  const unitPrice = parsePrice(item.price);
  return (
    <FadeUp key={item.id} delay={0.1 + idx * 0.1} className="bg-white rounded-[18px] p-3 mb-2.5 flex gap-3 items-center shadow-sm">
      <div className="w-[58px] h-[58px] rounded-[14px] bg-[#E4C0A8] flex items-center justify-center shrink-0">
        <Icons.Package size={26} color="#CC624C" strokeWidth={1.5} className="opacity-70" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-nunito font-black text-[13px] text-[#2d1f19]">{item.name}</div>
        {item.desc && (
          <div className="font-nunito text-[11px] text-[#7a5a52] mt-0.5 mb-2 leading-tight">{item.desc}</div>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center bg-[#eedfcc] rounded-full p-[3px]">
            <button
              onClick={() => {
                if (item.quantity <= 1) removeFromCart(item.id);
                else updateQuantity(item.id, item.quantity - 1);
              }}
              className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm"
            >
              <Icons.Minus size={11} color="#2d1f19" strokeWidth={2.5} />
            </button>
            <span className="px-2.5 font-nunito font-black text-[12px] text-[#2d1f19]">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-6 h-6 rounded-full bg-[#CC624C] flex items-center justify-center shadow-sm"
            >
              <Icons.Plus size={11} color="#fff" strokeWidth={2.5} />
            </button>
          </div>
          <span className="font-calistoga text-[14px] text-[#CC624C]">
            {formatPrice(unitPrice * item.quantity)}
          </span>
        </div>
      </div>
    </FadeUp>
  );
})}
```

**Lines 99-101 — dynamic summary:**
```tsx
{[
  { l: 'Zwischensumme', v: formatPrice(total) },
  { l: 'Pickup-Rabatt', v: '– 0,00 €' },
].map((row) => (
```

**Lines 111-112 — dynamic total:**
Already uses `{total.toFixed(2).replace('.', ',')} €` — but `total` is now from Zustand, so this is fine. Could also use `{formatPrice(total)}`.

**Lines 118-130 — replace handleCheckout with simple navigation:**
```tsx
<PrimaryButton
  className="w-full flex justify-center items-center gap-2"
  onClick={() => router.push('/pickup-time')}
>
  Weiter zur Abholung
  <Icons.ArrowRight size={18} />
</PrimaryButton>
```

Remove `disabled={isSubmitting}` and the submitting state entirely.

### Step 5: Fix `pickup-time/page.tsx` (MAJOR CHANGES)

**Replace lines 10-27 with:**
```typescript
export default function PickupTimePage() {
  const router = useRouter();
  const {
    cart, pickupDay, pickupDate, pickupTime,
    contactName, contactPhone,
    setPickupDay, setPickupTime, setContactName, setContactPhone
  } = useStore();

  // Redirect if cart empty
  useEffect(() => {
    if (cart.length === 0) router.replace('/menu');
  }, [cart.length, router]);

  const days = generatePickupDays(5);

  // Auto-select first day if none selected
  useEffect(() => {
    if (!pickupDay && days.length > 0) {
      setPickupDay(days[0].label, days[0].isoDate);
    }
    if (!pickupTime) {
      setPickupTime('15:00');
    }
  }, []); // run once on mount

  const times = [
    "14:30", "14:45", "15:00",
    "15:15", "15:30", "15:45",
    "16:00", "16:15", "16:30"
  ];

  if (cart.length === 0) return null;
```

**Add imports:**
```typescript
import { useStore } from '@/store/useStore';
import { generatePickupDays } from '@/lib/utils/dates';
import React, { useState, useEffect } from "react";
```

**Lines 71-82 — update day buttons to use Zustand:**
```tsx
{days.map((d) => (
  <button
    key={d.isoDate}
    onClick={() => setPickupDay(d.label, d.isoDate)}
    className={`shrink-0 w-[60px] py-2.5 rounded-[14px] text-center transition-all ${
      pickupDate === d.isoDate ? 'bg-[#CC624C] text-white shadow-md' : 'bg-white text-[#2d1f19] shadow-sm'
    }`}
  >
    <div className={`font-nunito text-[10px] font-bold ${pickupDate === d.isoDate ? 'opacity-85' : 'opacity-60'}`}>{d.label}</div>
    <div className="font-calistoga text-lg mt-0.5">{d.dateNumber}</div>
  </button>
))}
```

**Lines 89-106 — fix time selection with real past-time logic:**
```tsx
{times.map((t) => {
  // Determine if time is past (only for today)
  const isPast = pickupDay === 'Heute' && isTimePast(t);
  const isSelected = pickupTime === t && !isPast;
  return (
    <button
      key={t}
      disabled={isPast}
      onClick={() => setPickupTime(t)}
      className={`rounded-[12px] py-2.5 text-center text-[13px] font-extrabold transition-all ${
        isPast ? 'opacity-40 bg-white text-[#2d1f19] line-through' :
        isSelected ? 'bg-[#CC624C] text-white shadow-md' : 'bg-white text-[#2d1f19] shadow-sm'
      }`}
    >
      {t}
    </button>
  );
})}
```

**Add `isTimePast` helper** (can go in `dates.ts` or inline):
```typescript
function isTimePast(timeStr: string): boolean {
  const [h, m] = timeStr.split(':').map(Number);
  const now = new Date();
  // Add 15 min buffer for preparation
  return now.getHours() > h || (now.getHours() === h && now.getMinutes() + 15 > m);
}
```

**Lines 111-118 — replace static text with editable inputs:**
```tsx
<FadeUp delay={0.4}>
  <div className="font-nunito text-[11px] font-black text-[#CC624C] tracking-[1.4px] uppercase mb-2.5">Kontakt</div>
  <div className="bg-white rounded-[14px] p-3 mb-2 shadow-sm">
    <div className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Name</div>
    <input
      type="text"
      value={contactName}
      onChange={(e) => setContactName(e.target.value)}
      placeholder="Dein Name"
      className="w-full font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent outline-none placeholder:text-[#bba79c]"
    />
  </div>
  <div className="bg-white rounded-[14px] p-3 mb-6 shadow-sm">
    <div className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Handynummer · für Rückfragen</div>
    <input
      type="tel"
      value={contactPhone}
      onChange={(e) => setContactPhone(e.target.value)}
      placeholder="+49 176 ..."
      className="w-full font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent outline-none placeholder:text-[#bba79c]"
    />
  </div>
</FadeUp>
```

**Lines 122-128 — replace Link with validated navigation:**
```tsx
<div className="p-[14px_20px_20px] bg-[#f5efe8] border-t border-[#eedfcc]">
  <PrimaryButton
    className="w-full flex justify-center items-center gap-2"
    onClick={() => {
      if (!contactName.trim() || !contactPhone.trim()) {
        alert('Bitte Name und Handynummer angeben.');
        return;
      }
      if (!pickupTime) {
        alert('Bitte Abholzeit wählen.');
        return;
      }
      router.push('/order-review');
    }}
    disabled={!contactName.trim() || !contactPhone.trim() || !pickupTime}
  >
    Bestellung prüfen
    <Icons.ArrowRight size={18} />
  </PrimaryButton>
</div>
```

### Step 6: Fix `order-review/page.tsx` — READ from Zustand + Firestore write

**Key changes:**
1. Import `useStore` and read cart + pickup info
2. Replace all hardcoded values with computed values
3. Move the Firestore order creation HERE (from checkout)
4. "Bestellung absenden" button triggers `handleSubmitOrder`

**Add to top:**
```typescript
import { useStore } from '@/store/useStore';
import { parsePrice, formatPrice, calcCartTotal, calcCartCount } from '@/lib/utils/price';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/config';
import { useState, useEffect } from 'react';
```

**Replace function body head:**
```typescript
export default function OrderReviewPage() {
  const router = useRouter();
  const {
    cart, pickupDay, pickupDate, pickupTime,
    contactName, contactPhone, setOrderId, clearCart, resetOrder,
  } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (cart.length === 0) router.replace('/menu');
  }, [cart.length, router]);

  const total = calcCartTotal(cart);
  const itemCount = calcCartCount(cart);
  const tax = total * 0.07; // 7% MwSt

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          desc: item.desc || '',
        })),
        total,
        pickupDay,
        pickupDate,
        pickupTime,
        contactName,
        contactPhone,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
      setOrderId(docRef.id);
      clearCart();
      resetOrder();
      router.push('/confirmation');
    } catch (err) {
      console.error('Error creating order:', err);
      alert('Fehler bei der Bestellung. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) return null;
```

**Dynamic replacements in JSX:**
- Line 40: `Heute · 15:30` → `{pickupDay} · {pickupTime}`
- Line 48: `3 Artikel` → `{itemCount} Artikel`
- Lines 56-58: Replace hardcoded items with `cart.map(...)`
- Lines 89, 97: Replace `24,80 €` with `{formatPrice(total)}`
- Line 92: Replace `1,62 €` with `{formatPrice(tax)}`
- Lines 106-111: Replace `<Link href="/confirmation">` with:
  ```tsx
  <PrimaryButton
    className="w-full flex justify-center items-center gap-2"
    onClick={handleSubmitOrder}
    disabled={isSubmitting}
  >
    <Icons.Check size={18} />
    {isSubmitting ? 'Wird gesendet...' : 'Bestellung absenden'}
  </PrimaryButton>
  ```

### Step 7: Fix `confirmation/page.tsx` — READ order ID from Zustand

**Note**: Since `clearCart()` and `resetOrder()` are called before redirect, confirmation page needs a way to access the submitted data. Two options:

**Option A (Recommended)**: Store `orderId` and a `lastOrderSummary` in Zustand before clearing cart:
```typescript
// Add to store:
lastOrderSummary: {
  orderId: string;
  total: number;
  itemCount: number;
  pickupDay: string;
  pickupTime: string;
} | null;
```

**Option B**: Pass data via URL search params:
```typescript
router.push(`/confirmation?orderId=${docRef.id}&total=${total}&items=${itemCount}&day=${pickupDay}&time=${pickupTime}`);
```

**Recommendation**: Option A is cleaner. Add `lastOrderSummary` field, set it in `handleSubmitOrder` before clearing, and read it in confirmation page.

**In order-review handleSubmitOrder (before clearCart):**
```typescript
// Store summary for confirmation page BEFORE clearing
set({
  lastOrderSummary: {
    orderId: docRef.id,
    total,
    itemCount,
    pickupDay,
    pickupTime,
  }
});
clearCart();
resetOrder();
```

**In confirmation/page.tsx:**
```typescript
const { lastOrderSummary } = useStore();

useEffect(() => {
  if (!lastOrderSummary) router.replace('/');
}, [lastOrderSummary, router]);

if (!lastOrderSummary) return null;

// Then use lastOrderSummary.orderId, .total, etc.
```

---

## 3. Complete Change List by File

### `src/store/useStore.ts`
| What | Details |
|------|---------|
| Add fields | `pickupDay`, `pickupDate`, `pickupTime`, `contactName`, `contactPhone`, `orderId`, `lastOrderSummary` |
| Add actions | `setPickupDay`, `setPickupTime`, `setContactName`, `setContactPhone`, `setOrderId`, `resetOrder`, `setLastOrderSummary` |
| Lines affected | Insert after line 18 (interface), insert after line 51 (implementations) |

### `src/lib/utils/price.ts` (NEW FILE)
| What | Details |
|------|---------|
| Functions | `parsePrice()`, `formatPrice()`, `calcCartTotal()`, `calcCartCount()` |

### `src/lib/utils/dates.ts` (NEW FILE)
| What | Details |
|------|---------|
| Functions | `generatePickupDays()`, `isTimePast()` |

### `src/app/checkout/page.tsx` (134 lines → ~130 lines)
| Lines | Change |
|-------|--------|
| 3 | Remove `useState`, add `useEffect` |
| 9-10 | Remove Firebase imports |
| After 8 | Add `useStore`, price utils imports |
| 12-21 | Replace with Zustand cart + empty check + computed total |
| 23-38 | Delete `handleCheckout` entirely |
| 50 | Dynamic `{itemCount} Artikel · Pickup` |
| 52-54 | Add `onClick={() => { clearCart(); router.push('/menu'); }}` |
| 58-81 | Replace `items.map` with `cart.map`, wire +/- buttons |
| 100-101 | Dynamic `formatPrice(total)` |
| 119-126 | Simple `router.push('/pickup-time')`, remove `disabled`/`isSubmitting` |

### `src/app/pickup-time/page.tsx` (133 lines → ~150 lines)
| Lines | Change |
|-------|--------|
| 3 | Add `useEffect` |
| After 8 | Add `useStore`, `generatePickupDays` imports |
| 10-27 | Replace with Zustand state + dynamic days + empty cart check |
| 71-82 | Update day buttons to use Zustand (setPickupDay) |
| 89-106 | Update time buttons with real isPast logic |
| 111-118 | Replace static divs with `<input>` fields |
| 122-128 | Replace `<Link>` with validated `router.push` |

### `src/app/order-review/page.tsx` (116 lines → ~140 lines)
| Lines | Change |
|-------|--------|
| 3 | Add `useState`, `useEffect` |
| After 8 | Add `useStore`, price utils, Firebase imports |
| 10-11 | Read full order state from Zustand |
| Add | `handleSubmitOrder` function with Firestore write |
| 40 | Dynamic `{pickupDay} · {pickupTime}` |
| 48 | Dynamic `{itemCount} Artikel` |
| 56-58 | Dynamic items from cart |
| 89, 92, 97 | Dynamic prices |
| 106-111 | Button with `onClick={handleSubmitOrder}` |

### `src/app/confirmation/page.tsx` (87 lines → ~95 lines)
| Lines | Change |
|-------|--------|
| 3 | Add `useEffect` |
| After 7 | Add `useStore`, `useRouter` imports |
| 9 | Read `lastOrderSummary` from Zustand |
| 41 | Dynamic order number |
| 52 | Dynamic pickup day/time |
| 64-65 | Dynamic item count and total |

---

## 4. Data Flow Diagram

```
/menu (addToCart) ──→ Cart (Zustand)
       │
       ▼
/checkout ──→ reads cart from Zustand
  │             +/- buttons call updateQuantity()
  │             "Leeren" calls clearCart()
  │             "Weiter" → router.push('/pickup-time')
  │
  ▼
/pickup-time ──→ reads cart (empty check), sets pickupDay/Time/Contact in Zustand
  │               validated "Bestellung prüfen" → router.push('/order-review')
  │
  ▼
/order-review ──→ reads everything from Zustand, displays summary
  │                "Bestellung absenden" → writes to Firestore, sets lastOrderSummary,
  │                clears cart, router.push('/confirmation')
  │
  ▼
/confirmation ──→ reads lastOrderSummary from Zustand, displays ticket
```

---

## 5. Caveats

1. **`lastOrderSummary` persistence**: If user refreshes on confirmation page, Zustand state is lost. Could be mitigated with `zustand/middleware` persist or by falling back to Firestore read using URL param orderId.
2. **Times array**: Kept static for MVP (`14:30` - `16:30`). Could be loaded from Firestore config in the future.
3. **`isPast` logic**: Simple hour/minute comparison. Doesn't account for store closing time or minimum prep time beyond the 15-min buffer.
4. **Price format edge cases**: Items like `'ab 4,50 €'` or `'Auf Anfrage'` should never appear in cart (they have no add-to-cart button), but `parsePrice` handles them safely by returning 0.
5. **Order number format**: Currently hardcoded `#F-24891`. Should use Firestore doc ID or generate a short code. The implementation should format it like `#F-${docRef.id.slice(-5).toUpperCase()}`.
6. **The `desc` field on CartItem**: The store has `desc?: string` but the checkout page's original code used `v` for "variant" (e.g., 'Erdbeere · Banane · Schoko'). In real cart data from `addToCart`, `desc` comes from the menu item description, which is different. This mismatch is cosmetic — `desc` will show the menu description instead of selected toppings.

---

## 6. Conclusion

The fix requires:
1. **1 store modification** (`useStore.ts` — add ~30 lines for order-flow state)
2. **2 new utility files** (`price.ts`, `dates.ts` — ~40 lines total)
3. **4 page refactors** (checkout, pickup-time, order-review, confirmation)

The most critical change is **moving the Firestore write from checkout to order-review**, where all order data is complete. The second most critical is wiring up `useStore()` in checkout to replace hardcoded data.

All changes preserve the existing visual design. Only the data source changes (hardcoded → Zustand).

---

## 7. Verification Method

After implementation:

1. **Add items from menu**: Visit `/menu`, add 2-3 items, verify they appear in Zustand (check CartDrawer)
2. **Checkout page**: Navigate to `/checkout`, verify items match cart, test +/- buttons change quantities, test "Leeren" clears cart and redirects to `/menu`
3. **Empty cart redirect**: Navigate directly to `/checkout` with empty cart → should redirect to `/menu`
4. **Pickup time page**: Verify days are dynamic (today's date), test day/time selection, fill in contact inputs
5. **Validation**: Try to proceed without name/phone → should show alert
6. **Order review**: Verify all data matches (items, pickup time, contact, totals)
7. **Submit order**: Click "Bestellung absenden", verify Firestore document created with correct data
8. **Confirmation**: Verify order number, pickup time, and total are displayed correctly
9. **Price calculations**: Add items with known prices (e.g., 2x "7,00 €" = "14,00 €"), verify totals at each step
