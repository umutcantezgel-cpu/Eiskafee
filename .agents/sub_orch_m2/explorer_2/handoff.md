# Handoff Report — Explorer 2: Order Review & Confirmation Fix Strategy

**Summary**: Both `order-review/page.tsx` and `confirmation/page.tsx` are entirely hardcoded mockups with zero integration. The Firestore write currently sits in the **wrong page** (checkout). This report provides exact, line-by-line changes needed, the Firestore write function, data schemas, and the mechanism for passing data between pages.

---

## 1. Observation

### A. `src/app/order-review/page.tsx` (116 lines)

| Line(s) | Issue | Current Value |
|---------|-------|---------------|
| 3 | Missing `useState` import | Only imports `React` |
| 5 | Uses `Link` for submit button | Should use `onClick` handler |
| — | Missing import `useStore` | Not imported at all |
| — | Missing Firestore imports | `addDoc`, `collection`, `serverTimestamp` not imported |
| — | Missing `db` import | `@/lib/firebase/config` not imported |
| — | Missing `useSearchParams` | Pickup data comes from URL params |
| 40 | Hardcoded pickup time | `'Heute · 15:30'` |
| 42 | Hardcoded address | `'Langgasse 68 · Wetzlar'` |
| 48 | Hardcoded item count | `'3 Artikel'` |
| 56–70 | Hardcoded items array | Two static objects `{n, v, q, p}` |
| 89 | Hardcoded subtotal | `'24,80 €'` |
| 92 | Hardcoded tax | `'1,62 €'` |
| 97 | Hardcoded total | `'24,80 €'` |
| 106–111 | Submit is a `<Link href="/confirmation">` | No Firestore write, no async action |

### B. `src/app/confirmation/page.tsx` (87 lines)

| Line(s) | Issue | Current Value |
|---------|-------|---------------|
| — | Missing `useSearchParams` import | Not imported |
| — | Missing `useStore` import | Not imported |
| — | No `clearCart` call | Cart remains populated after order |
| 15 | Bad color value | `color="#white"` (invalid, should be `"#fff"` or `"white"`) |
| 41 | Hardcoded order number | `'#F-24891'` |
| 52 | Hardcoded pickup time | `'Heute · 15:30'` |
| 53–54 | Hardcoded address | `'Langgasse 68\n35576 Wetzlar'` |
| 64 | Hardcoded item count + label | `'3 Artikel · vor Ort zu zahlen'` |
| 65 | Hardcoded total | `'24,80 €'` |
| 71 | Link to `/order-status` has no order ID | Just navigates to static status page |

### C. `src/app/checkout/page.tsx` (134 lines) — WRONG Firestore placement

| Line(s) | Issue |
|---------|-------|
| 9–10 | Imports `addDoc`, `collection`, `db` |
| 16–19 | Hardcoded items (not from store) |
| 23–39 | `handleCheckout` writes to Firestore with `addDoc` **prematurely** — before user has selected pickup time or reviewed |
| 30 | Uses `new Date().toISOString()` instead of `serverTimestamp()` |
| 100–101 | Hardcoded totals `'24,80 €'`, `'– 0,00 €'` |

### D. `src/app/pickup-time/page.tsx` (133 lines) — Data loss

| Line(s) | Issue |
|---------|-------|
| 12–13 | `selectedDay` and `selectedTime` are local `useState` |
| 113 | Hardcoded name `'Anna Müller'` — should be input fields |
| 117 | Hardcoded phone `'+49 176 25026991'` — should be input fields |
| 123 | `<Link href="/order-review">` — discards all selections |

### E. `src/store/useStore.ts` (53 lines)

- `CartItem.price` is a **string** like `'4,90 €'` — must be parsed for calculations.
- `clearCart()` exists at line 51: `set({ cart: [], isCartOpen: false })`.
- No pickup/order state exists — only cart state.

### F. `src/components/ui/Btn.tsx` (167 lines)

- `PrimaryButton` accepts `onClick`, `disabled`, `href` props (lines 26–41).
- When `onClick` is provided without `href`, it renders a plain `<motion.button>` (line 126).
- ✅ Ready for async submit handler usage.

### G. `useStore` adoption

- **No page under `src/app/` imports or uses `useStore`**. Verified via `grep_search` — zero matches.

---

## 2. Logic Chain

### Step 1: Data flow must be sequential
The user flow is: Menu → Checkout → Pickup-Time → Order-Review → Confirmation → Order-Status.

- **Checkout** should read cart from `useStore` (not hardcoded). Should NOT write to Firestore.
- **Pickup-Time** should collect day, time, name, phone — pass via URL search params to order-review.
- **Order-Review** should read cart from `useStore` + pickup info from URL params, then write to Firestore on submit.
- **Confirmation** should receive the Firestore document ID via URL params, display it, and clear the cart.

### Step 2: Price parsing is required
`CartItem.price` is a string like `'4,90 €'`. To compute totals:
```typescript
function parsePrice(priceStr: string): number {
  // '4,90 €' → 4.90
  return parseFloat(priceStr.replace(/[^\d,]/g, '').replace(',', '.'));
}
```

### Step 3: Firestore write belongs on order-review submit
The "Bestellung absenden" button (line 106–111) should trigger an async function, NOT navigate via `<Link>`. After successful Firestore write, navigate programmatically with the returned doc ID.

### Step 4: Data passing mechanism
- **Pickup info → Order-Review**: URL search params (`?day=Heute&time=15:30&name=Anna&phone=+49...`)
- **Order ID → Confirmation**: URL search param (`?orderId=abc123`)
- **Order ID → Order-Status**: URL search param (`?orderId=abc123`)
- **Cart data**: Read from `useStore` (already in Zustand)

### Step 5: Cart must be cleared after order submission
Call `useStore.getState().clearCart()` or use the hook `clearCart` after successful navigation to confirmation.

---

## 3. Exact Changes Needed

### 3.1 `src/app/order-review/page.tsx` — FULL REWRITE

#### New Imports (replace lines 1–8)

```typescript
"use client";

import React, { useState, Suspense } from "react";
import * as Icons from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/store/useStore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
```

**Removed**: `Link` import (no longer needed — submit is async, "Bearbeiten" uses `router.back()`).  
**Added**: `useState`, `Suspense`, `useSearchParams`, `useStore`, Firestore imports.

#### Price Parser Utility (add before component)

```typescript
function parsePrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^\d,]/g, '').replace(',', '.'));
}

function formatPrice(num: number): string {
  return num.toFixed(2).replace('.', ',') + ' €';
}
```

#### Component Body — Inner Component (uses useSearchParams, needs Suspense wrapper)

```typescript
function OrderReviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const cart = useStore((state) => state.cart);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Read pickup info from URL search params
  const pickupDay = searchParams.get('day') || 'Heute';
  const pickupTime = searchParams.get('time') || '15:30';
  const customerName = searchParams.get('name') || '';
  const customerPhone = searchParams.get('phone') || '';

  // Compute totals from cart
  const subtotal = cart.reduce((sum, item) => {
    return sum + parsePrice(item.price) * item.quantity;
  }, 0);
  const taxRate = 0.07;
  const tax = subtotal * taxRate / (1 + taxRate); // MwSt included in price
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmitOrder = async () => {
    if (isSubmitting || cart.length === 0) return;
    setIsSubmitting(true);
    try {
      const orderData = {
        items: cart.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          desc: item.desc || '',
        })),
        total: formatPrice(subtotal),
        totalNumeric: subtotal,
        customerName,
        customerPhone,
        pickupDay,
        pickupTime,
        status: 'pending',
        createdAt: serverTimestamp(),
      };
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      router.push(`/confirmation?orderId=${docRef.id}&day=${encodeURIComponent(pickupDay)}&time=${encodeURIComponent(pickupTime)}&total=${encodeURIComponent(formatPrice(subtotal))}&items=${totalItemCount}`);
    } catch (err) {
      console.error('Fehler bei der Bestellung:', err);
      alert('Fehler bei der Bestellung. Bitte versuche es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of JSX below
}
```

#### JSX Changes in Order Review

**Line 40** — Replace hardcoded `'Heute · 15:30'`:
```tsx
// Before:
<div className="font-calistoga text-[26px] ...">Heute · 15:30</div>
// After:
<div className="font-calistoga text-[26px] ...">{pickupDay} · {pickupTime}</div>
```

**Line 42** — Address stays as-is (single store location, not user-variable):
```tsx
<div className="...">Langgasse 68 · Wetzlar</div>
// This is the STORE address, not user input — keep hardcoded.
```

**Line 48** — Replace hardcoded `'3 Artikel'`:
```tsx
// Before:
<div className="...">'3 Artikel'</div>
// After:
<div className="...">{totalItemCount} {totalItemCount === 1 ? 'Artikel' : 'Artikel'}</div>
```

**Lines 56–70** — Replace hardcoded items with cart data:
```tsx
// Before: Static array [{n:'Pancake...', ...}, ...]
// After:
{cart.map((item, i) => (
  <div key={item.id} className={`p-3 flex justify-between gap-2.5 ${i < cart.length - 1 ? 'border-b border-[#eedfcc]' : ''}`}>
    <div className="flex-1 min-w-0">
      <div className="flex gap-2 mb-0.5 items-baseline">
        <span className="font-nunito font-extrabold text-[12.5px] text-[#7a5a52]">{item.quantity}×</span>
        <span className="font-nunito font-extrabold text-[13px] text-[#2d1f19]">{item.name}</span>
      </div>
      {item.desc && (
        <div className="font-nunito text-[11px] text-[#7a5a52] ml-[23px]">{item.desc}</div>
      )}
    </div>
    <span className="font-calistoga text-[14px] text-[#CC624C]">
      {formatPrice(parsePrice(item.price) * item.quantity)}
    </span>
  </div>
))}
```

**Lines 89, 92, 97** — Replace hardcoded totals:
```tsx
// Zwischensumme (line 89):
<span className="font-bold">{formatPrice(subtotal)}</span>

// MwSt (line 92):
<span className="font-bold">{formatPrice(tax)}</span>

// Total (line 97):
<span className="font-calistoga text-[24px] text-[#CC624C]">{formatPrice(subtotal)}</span>
```

**Lines 106–111** — Replace `<Link>` with async submit:
```tsx
// Before:
<Link href="/confirmation" className="block w-full">
  <PrimaryButton className="w-full flex justify-center items-center gap-2">
    <Icons.Check size={18} />
    Bestellung absenden
  </PrimaryButton>
</Link>

// After:
<PrimaryButton
  className="w-full flex justify-center items-center gap-2"
  onClick={handleSubmitOrder}
  disabled={isSubmitting || cart.length === 0}
>
  {isSubmitting ? (
    <>
      <Icons.Loader2 size={18} className="animate-spin" />
      Wird gesendet...
    </>
  ) : (
    <>
      <Icons.Check size={18} />
      Bestellung absenden
    </>
  )}
</PrimaryButton>
```

#### Export wrapper (Suspense boundary for useSearchParams)

```typescript
export default function OrderReviewPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center">
        <Icons.Loader2 className="animate-spin text-[#CC624C]" size={32} />
      </div>
    }>
      <OrderReviewContent />
    </Suspense>
  );
}
```

#### Empty cart guard (add at start of OrderReviewContent's return)

```tsx
if (cart.length === 0) {
  return (
    <div className="min-h-screen bg-[#f5efe8] flex flex-col items-center justify-center px-6 text-center">
      <Icons.ShoppingBag size={48} color="#CC624C" className="mb-4 opacity-50" />
      <h2 className="font-calistoga text-xl text-[#2d1f19] mb-2">Dein Warenkorb ist leer</h2>
      <p className="font-nunito text-[13px] text-[#7a5a52] mb-6">Füge Artikel hinzu, um eine Bestellung aufzugeben.</p>
      <PrimaryButton onClick={() => router.push('/menu')}>
        Zur Speisekarte
      </PrimaryButton>
    </div>
  );
}
```

---

### 3.2 `src/app/confirmation/page.tsx` — FULL REWRITE

#### New Imports (replace lines 1–7)

```typescript
"use client";

import React, { useEffect, Suspense } from "react";
import * as Icons from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { PrimaryButton } from "@/components/ui/Btn";
import { useSearchParams } from "next/navigation";
import { useStore } from "@/store/useStore";
```

#### Component Body — Inner Component

```typescript
function ConfirmationContent() {
  const searchParams = useSearchParams();
  const clearCart = useStore((state) => state.clearCart);

  const orderId = searchParams.get('orderId') || 'UNKNOWN';
  const pickupDay = searchParams.get('day') || 'Heute';
  const pickupTime = searchParams.get('time') || '15:30';
  const total = searchParams.get('total') || '0,00 €';
  const itemCount = searchParams.get('items') || '0';

  // Format order number for display
  const displayOrderId = `#F-${orderId.slice(-5).toUpperCase()}`;

  // Clear cart on mount (order already submitted)
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // ... rest of JSX
}
```

#### JSX Changes in Confirmation

**Line 15** — Fix broken color:
```tsx
// Before:
<Icons.Check size={42} color="#white" strokeWidth={2.5} />
// After:
<Icons.Check size={42} color="#fff" strokeWidth={2.5} />
```

**Line 41** — Replace hardcoded order number:
```tsx
// Before:
<div className="...">#F-24891</div>
// After:
<div className="...">{displayOrderId}</div>
```

**Line 52** — Replace hardcoded pickup time:
```tsx
// Before:
<div className="...">Heute · 15:30</div>
// After:
<div className="...">{pickupDay} · {pickupTime}</div>
```

**Lines 53–54** — Address stays hardcoded (single store):
```tsx
<div className="...">
  Langgasse 68<br/>35576 Wetzlar
</div>
```

**Line 64** — Replace hardcoded item count:
```tsx
// Before:
<span className="...">'3 Artikel · vor Ort zu zahlen'</span>
// After:
<span className="...">{itemCount} Artikel · vor Ort zu zahlen</span>
```

**Line 65** — Replace hardcoded total:
```tsx
// Before:
<span className="...">24,80 €</span>
// After:
<span className="...">{total}</span>
```

**Line 71** — Pass orderId to order-status:
```tsx
// Before:
<Link href="/order-status" className="block w-full">
// After:
<Link href={`/order-status?orderId=${orderId}`} className="block w-full">
```

#### Export wrapper (Suspense boundary)

```typescript
export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f5efe8] flex items-center justify-center">
        <Icons.Loader2 className="animate-spin text-[#CC624C]" size={32} />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
```

---

### 3.3 `src/app/pickup-time/page.tsx` — Data Forwarding Fix

**Lines 111–118** — Replace hardcoded contact info with input fields:
```tsx
// Before: Static divs with 'Anna Müller' and '+49 176 25026991'
// After:
<div className="bg-white rounded-[14px] p-3 mb-2 shadow-sm">
  <label className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Name</label>
  <input
    type="text"
    value={customerName}
    onChange={(e) => setCustomerName(e.target.value)}
    placeholder="Dein Name"
    className="w-full font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent outline-none placeholder:text-[#c4a99a]"
  />
</div>
<div className="bg-white rounded-[14px] p-3 mb-6 shadow-sm">
  <label className="font-nunito text-[10px] font-extrabold text-[#7a5a52] uppercase tracking-[1px]">Handynummer · für Rückfragen</label>
  <input
    type="tel"
    value={customerPhone}
    onChange={(e) => setCustomerPhone(e.target.value)}
    placeholder="+49 176 ..."
    className="w-full font-nunito text-[13px] font-bold text-[#2d1f19] mt-0.5 bg-transparent outline-none placeholder:text-[#c4a99a]"
  />
</div>
```

**Add state variables** (after existing `useState` calls):
```typescript
const [customerName, setCustomerName] = useState("");
const [customerPhone, setCustomerPhone] = useState("");
```

**Line 123** — Replace `<Link>` with programmatic navigation carrying params:
```tsx
// Before:
<Link href="/order-review" className="block w-full">
  <PrimaryButton ...>Bestellung prüfen ...</PrimaryButton>
</Link>

// After:
<PrimaryButton
  className="w-full flex justify-center items-center gap-2"
  onClick={() => {
    const dayLabel = days.find(d => d.date === selectedDay)?.label || 'Heute';
    const params = new URLSearchParams({
      day: dayLabel,
      time: selectedTime,
      name: customerName,
      phone: customerPhone,
    });
    router.push(`/order-review?${params.toString()}`);
  }}
  disabled={!customerName.trim() || !customerPhone.trim()}
>
  Bestellung prüfen
  <Icons.ArrowRight size={18} />
</PrimaryButton>
```

---

### 3.4 `src/app/checkout/page.tsx` — Remove Premature Firestore Write

**Lines 9–10** — Remove Firestore imports:
```typescript
// DELETE these lines:
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
```

**Lines 16–19** — Replace hardcoded items with Zustand cart:
```typescript
// Add import:
import { useStore } from "@/store/useStore";

// In component:
const cart = useStore((state) => state.cart);
```

**Lines 23–39** — Replace `handleCheckout` with simple navigation:
```typescript
const handleCheckout = () => {
  router.push("/pickup-time");
};
```

**Lines 100–101** — Replace hardcoded totals with computed values from cart.

---

## 4. Firestore Order Data Schema

```typescript
interface OrderDocument {
  items: Array<{
    id: string;
    name: string;
    price: string;       // Original string format: '4,90 €'
    quantity: number;
    desc: string;
  }>;
  total: string;          // Formatted: '24,80 €'
  totalNumeric: number;   // Raw number: 24.80
  customerName: string;   // From pickup-time input
  customerPhone: string;  // From pickup-time input
  pickupDay: string;      // 'Heute', 'Morgen', 'Sa', etc.
  pickupTime: string;     // '15:30'
  status: 'pending' | 'preparing' | 'ready' | 'picked_up';
  createdAt: FieldValue;  // serverTimestamp()
}
```

---

## 5. Complete Firestore Write Function

```typescript
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

async function submitOrder(
  cart: CartItem[],
  pickupDay: string,
  pickupTime: string,
  customerName: string,
  customerPhone: string,
): Promise<string> {
  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  const orderData = {
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      desc: item.desc || '',
    })),
    total: formatPrice(subtotal),
    totalNumeric: subtotal,
    customerName,
    customerPhone,
    pickupDay,
    pickupTime,
    status: 'pending' as const,
    createdAt: serverTimestamp(),
  };

  const docRef = await addDoc(collection(db, 'orders'), orderData);
  return docRef.id; // This is the order ID passed to confirmation
}
```

---

## 6. Data Passing Summary

```
checkout → pickup-time:        router.push('/pickup-time')           (no params needed, cart is in Zustand)
pickup-time → order-review:    router.push('/order-review?day=...&time=...&name=...&phone=...')
order-review → confirmation:   router.push('/confirmation?orderId=...&day=...&time=...&total=...&items=...')
confirmation → order-status:   <Link href="/order-status?orderId=...">
```

Cart data flows via **Zustand** (global state, read on each page).  
Pickup info flows via **URL search params** (stateless, survives refresh).  
Order ID flows via **URL search params** (returned from Firestore `addDoc`).  
Cart clearing happens in **confirmation** via `useEffect(() => clearCart(), [])`.

---

## 7. Caveats

1. **`serverTimestamp()` import**: Not currently used anywhere in the project. The existing checkout page uses `new Date().toISOString()`. The fix should use `serverTimestamp()` from `firebase/firestore` instead.
2. **`useSearchParams` requires Suspense**: Next.js 14+ requires wrapping components that use `useSearchParams()` in a `<Suspense>` boundary. The auth page already follows this pattern (lines 163–165 of `src/app/auth/page.tsx`).
3. **Price string parsing**: `CartItem.price` is stored as a string (e.g., `'4,90 €'`). The `parsePrice` utility must handle German number formatting (comma as decimal separator). Edge cases: prices without `€` suffix, extra whitespace.
4. **Empty cart edge case**: If a user navigates directly to `/order-review` with an empty cart, the page should show a fallback rather than an empty order form.
5. **Checkout page also needs fixing**: It currently has a premature Firestore write that should be removed. This is documented above but is technically outside the scope of just order-review + confirmation. The implementer should handle it.
6. **Order-status page** also uses hardcoded `#F-24891` (line 27) and should accept `orderId` from URL params and read from Firestore — but this may be covered by another explorer.

---

## 8. Conclusion

The order flow is broken because:
1. **No page reads from `useStore`** — all data is hardcoded mockups.
2. **Firestore write is in the wrong place** — checkout writes before user selects pickup time.
3. **No data flows between pages** — pickup-time selections are discarded.
4. **No order ID is generated or passed** — confirmation shows a fake number.
5. **Cart is never cleared** — stays populated after "order completion."

The fix requires:
- **4 files changed**: `order-review/page.tsx` (major rewrite), `confirmation/page.tsx` (major rewrite), `pickup-time/page.tsx` (add inputs + URL params), `checkout/page.tsx` (remove Firestore, use store).
- **1 utility function**: `parsePrice` / `formatPrice` for string ↔ number price conversion.
- **Firestore write moved** from checkout to order-review's "Bestellung absenden" handler.
- **URL search params** as the data-passing mechanism between pages.
- **Cart clearing** via `useEffect` on confirmation mount.

---

## 9. Verification Method

After implementation, verify by:

1. **Build**: `npm run build` in project root — should compile without errors.
2. **Type check**: `npx tsc --noEmit` — no TypeScript errors.
3. **Manual flow test**:
   - Add items to cart via menu
   - Navigate checkout → pickup-time → order-review
   - Verify all data is dynamic (not hardcoded)
   - Click "Bestellung absenden" — verify Firestore write in Firebase Console
   - Verify confirmation page shows real order ID
   - Verify cart is empty after confirmation
4. **Empty cart guard**: Navigate directly to `/order-review` — should show empty state.
5. **Invalidation**: If `useStore` API changes (e.g., `CartItem.price` becomes a number), the `parsePrice` utility would need adjustment.
