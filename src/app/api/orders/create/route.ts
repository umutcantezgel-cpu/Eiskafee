import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { requireAuth } from "@/lib/auth/requireAuth";
import { checkRateLimit, orderLimiter } from "@/lib/rate-limit";
import { getOptionalSession } from "@/lib/auth/requireAuth";
import { z } from "zod";
import { FieldValue } from "firebase-admin/firestore";

// ═══════════════════════════════════════════════════════
//  STRICT ZOD SCHEMAS
// ═══════════════════════════════════════════════════════

const OrderItemSchema = z.object({
  id: z.string().min(1).max(100),
  name: z.string().min(1).max(200),
  quantity: z.number().int().min(1).max(50),
  variant: z.string().max(200).optional(),
});

const CreateOrderSchema = z.object({
  items: z.array(OrderItemSchema).min(1).max(30),
  type: z.enum(["pickup", "delivery", "in-store"]),
  pickupDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  pickupTime: z.string().regex(/^\d{2}:\d{2}$/, "Invalid time format"),
  customerName: z
    .string()
    .min(1, "Name is required")
    .max(100)
    .transform((s) => s.trim()),
  customerPhone: z
    .string()
    .min(5, "Phone is required")
    .max(20)
    .transform((s) => s.trim()),
  customerEmail: z.string().email("Invalid email").max(254),
  customerNotes: z.string().max(500).default(""),
  address: z
    .object({
      street: z.string().min(1).max(200),
      zip: z.string().regex(/^\d{5}$/, "Invalid ZIP"),
      city: z.string().min(1).max(100),
    })
    .nullable()
    .optional(),
  promoCode: z.string().max(50).nullable().optional(),
});

/**
 * POST /api/orders/create
 *
 * Server-side order creation with:
 * - Zod input validation
 * - Server-side price calculation (NEVER trust client prices)
 * - Server-side promo code validation with atomic usage counter
 * - Optional auth (guest orders allowed)
 * - Rate limiting
 */
export async function POST(request: Request) {
  try {
    // ── Rate Limiting ──
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "127.0.0.1";
    const rl = await checkRateLimit(orderLimiter, ip);
    if (!rl.success) {
      return NextResponse.json(
        { error: "Zu viele Bestellungen. Bitte versuche es später erneut." },
        { status: 429 },
      );
    }

    // ── Input validation ──
    const body = await request.json();
    const parsed = CreateOrderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }
    const data = parsed.data;

    // ── Optional auth (guest checkout is allowed) ──
    const session = await getOptionalSession();
    const userId = session?.uid || null;

    // ── SERVER-SIDE PRICE CALCULATION ──
    const menuSnapshot = await adminDb.collection("menu_items").get();
    const menuMap = new Map<
      string,
      { price: number; name: string; available: boolean }
    >();
    menuSnapshot.forEach((doc) => {
      const d = doc.data();
      menuMap.set(doc.id, {
        price: d.price,
        name: d.name,
        available: d.available !== false,
      });
    });

    let subtotal = 0;
    const verifiedItems: Array<{
      id: string;
      name: string;
      quantity: number;
      price: number;
      variant: string;
    }> = [];

    for (const item of data.items) {
      const serverItem = menuMap.get(item.id);
      if (!serverItem) {
        return NextResponse.json(
          { error: `Artikel "${item.name}" wurde nicht im Menü gefunden.` },
          { status: 400 },
        );
      }
      if (!serverItem.available) {
        return NextResponse.json(
          {
            error: `Artikel "${serverItem.name}" ist derzeit nicht verfügbar.`,
          },
          { status: 400 },
        );
      }

      subtotal += serverItem.price * item.quantity;
      verifiedItems.push({
        id: item.id,
        name: serverItem.name, // Server name, not client name
        quantity: item.quantity,
        price: serverItem.price, // Server price, not client price!
        variant: item.variant || "",
      });
    }

    // ── Server-side promo code validation ──
    let discount = 0;
    let appliedPromo: string | null = null;

    if (data.promoCode) {
      const code = data.promoCode.toUpperCase().trim();
      const promoDoc = await adminDb.doc(`promo_codes/${code}`).get();

      if (promoDoc.exists) {
        const promo = promoDoc.data()!;
        const isActive = promo.active !== false;
        const isUnderLimit =
          !promo.maxUses || (promo.currentUses || 0) < promo.maxUses;

        if (isActive && isUnderLimit) {
          if (promo.type === "fixed") {
            discount = Math.min(promo.amount, subtotal); // Cannot exceed subtotal
          } else if (promo.type === "percent") {
            discount = subtotal * (Math.min(promo.amount, 100) / 100);
          }
          appliedPromo = code;

          // Atomic usage counter increment
          await adminDb.doc(`promo_codes/${code}`).update({
            currentUses: FieldValue.increment(1),
          });
        }
      }
    }

    const total = Math.max(0, Math.round((subtotal - discount) * 100) / 100);
    const orderNumber = `#HF-${Math.floor(1000 + Math.random() * 9000)}`;

    // ── Create order with server-calculated values ──
    const orderRef = await adminDb.collection("orders").add({
      orderNumber,
      userId,
      type: data.type,
      items: verifiedItems,
      subtotal: Math.round(subtotal * 100) / 100,
      discount: Math.round(discount * 100) / 100,
      promoCode: appliedPromo,
      total,
      pickupDate: data.pickupDate,
      pickupTime: data.pickupTime,
      customerName: data.customerName,
      customerPhone: data.customerPhone,
      customerEmail: data.customerEmail,
      customerNotes: data.customerNotes,
      address: data.address || null,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      orderId: orderRef.id,
      orderNumber,
      total,
    });
  } catch (error: any) {
    console.error("[ORDER CREATE ERROR]:", error);
    return NextResponse.json(
      { error: "Bestellung konnte nicht erstellt werden." },
      { status: 500 },
    );
  }
}
