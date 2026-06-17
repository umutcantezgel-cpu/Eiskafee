import { NextRequest, NextResponse } from "next/server";
import { HF_DATA, store_settings } from "@/lib/data";
import { BUSINESS } from "@/lib/seo/business-data";
import { adminDb } from "@/lib/firebase-admin";
import { checkRateLimit, apiLimiter } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

function verifyApiKey(req: Request): NextResponse | null {
  const apiKey = req.headers.get("X-API-Key") || req.headers.get("x-api-key");
  let expectedKey = process.env.AI_AGENT_API_KEY;

  if (!expectedKey) {
    if (process.env.MCP_API_KEY) {
      console.warn(
        "[AI-Agent] AI_AGENT_API_KEY is not set. Falling back to MCP_API_KEY.",
      );
      expectedKey = process.env.MCP_API_KEY;
    } else if (process.env.NODE_ENV === "development") {
      console.warn(
        "[AI-Agent] AI_AGENT_API_KEY is not set. Authorizing in development mode.",
      );
      return null;
    } else {
      console.warn(
        "[AI-Agent] AI_AGENT_API_KEY is not set - AI Agent endpoint is DISABLED",
      );
      return NextResponse.json(
        { success: false, error: "Service unavailable" },
        { status: 503 },
      );
    }
  }

  if (apiKey !== expectedKey) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 },
    );
  }

  return null;
}

async function getMenuData() {
  if (!adminDb) {
    return HF_DATA.menu;
  }
  try {
    const snapshot = await adminDb.collection("menu_items").get();
    if (snapshot.empty) {
      return HF_DATA.menu;
    }
    const menu: Record<string, { desc: string; items: any[] }> = {};
    snapshot.forEach((doc) => {
      const data = doc.data();
      const category = data.category || "other";
      if (!menu[category]) {
        menu[category] = {
          desc: HF_DATA.menu[category]?.desc || "",
          items: [],
        };
      }
      let formattedPrice = data.price;
      if (typeof data.price === "number") {
        formattedPrice = `${data.price.toFixed(2).replace(".", ",")}€`;
      }
      menu[category].items.push({
        id: data.id || doc.id,
        name: data.name || "",
        price: formattedPrice || "",
        desc: data.desc || "",
        image: data.image || undefined,
        imageAlt: data.imageAlt || undefined,
        imageTitle: data.imageTitle || undefined,
        available: data.available !== false,
      });
    });
    return menu;
  } catch (error) {
    console.error("[AI-Agent] Error fetching menu from Firestore:", error);
    return HF_DATA.menu;
  }
}

export async function GET(req: NextRequest) {
  try {
    const authError = verifyApiKey(req);
    if (authError) return authError;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rlResult = await checkRateLimit(apiLimiter, ip);
    if (!rlResult.success) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const menuData = await getMenuData();

    return NextResponse.json({
      success: true,
      store: {
        name: BUSINESS.name,
        tagline: HF_DATA.config.tagline,
        address: `${BUSINESS.street}, ${BUSINESS.postalCode} ${BUSINESS.city}`,
        phone: BUSINESS.phone,
        whatsapp: BUSINESS.whatsappDisplay,
        instagram: BUSINESS.instagram,
        rating: BUSINESS.rating,
        reviewCount: BUSINESS.reviewCount,
        settings: store_settings,
        businessDetails: {
          vatId: BUSINESS.vatId,
          legalName: BUSINESS.legalName,
          paymentAccepted: BUSINESS.paymentAccepted,
          openingHours: BUSINESS.openingHours,
          amenities: BUSINESS.amenities,
        },
      },
      categories: HF_DATA.categories,
      menu: menuData,
      bestsellers: HF_DATA.bestsellers,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to read store data" },
      { status: 500 },
    );
  }
}
