import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";
import { requireAuth } from "@/lib/auth/requireAuth";
import * as fs from "fs";
import * as path from "path";

export async function POST(request: Request) {
  // ✅ Authentication: require admin session
  const auth = await requireAuth({ requireAdmin: true });
  if (!auth.authenticated) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  // ✅ Production guard: seed is development-only
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Seed is disabled in production" },
      { status: 403 },
    );
  }

  // ✅ Audit log
  console.log(
    `[AUDIT] Seed initiated by admin ${auth.session.uid} (${auth.session.email}) at ${new Date().toISOString()}`,
  );

  try {
    // 1. Seed Menu Items
    const seedPath = path.join(process.cwd(), "seed-data.json");
    if (fs.existsSync(seedPath)) {
      const seedData = JSON.parse(fs.readFileSync(seedPath, "utf8"));
      const batch = adminDb.batch();

      for (const item of seedData) {
        const docRef = adminDb.collection("menu_items").doc(item.id);
        batch.set(docRef, item);
      }
      await batch.commit();
    }

    // 2. Seed Analytics Daily (Last 7 days)
    const analyticsBatch = adminDb.batch();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      const dateStr = date.toISOString().split("T")[0];

      const docRef = adminDb.collection("analytics_daily").doc(dateStr);
      analyticsBatch.set(docRef, {
        date: dateStr,
        revenue: 300 + Math.random() * 500,
        orderCount: 15 + Math.floor(Math.random() * 30),
        topItems: [
          {
            id: "boxen-mix-box",
            name: "Mix Box",
            quantity: Math.floor(Math.random() * 10),
          },
        ],
      });
    }
    await analyticsBatch.commit();

    // 3. Seed some initial Orders for the Kanban board
    const ordersBatch = adminDb.batch();
    const mockOrders = [
      {
        id: "ord-12345",
        userId: "guest",
        items: [
          { id: "boxen-mix-box", name: "Mix Box", price: 15, quantity: 1 },
        ],
        total: 15,
        status: "pending",
        createdAt: new Date(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        name: "Max Mustermann",
      },
      {
        id: "ord-67890",
        userId: "guest",
        items: [
          { id: "bubble-deluxe", name: "Deluxe", price: 8.8, quantity: 2 },
        ],
        total: 17.6,
        status: "preparing",
        createdAt: new Date(Date.now() - 1000 * 60 * 15), // 15 mins ago
        time: new Date(Date.now() - 1000 * 60 * 15).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        name: "Anna Schmidt",
      },
    ];

    for (const order of mockOrders) {
      const docRef = adminDb.collection("orders").doc(order.id);
      ordersBatch.set(docRef, order);
    }
    await ordersBatch.commit();

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
    });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
