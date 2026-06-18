import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_CONFIG } from "@/lib/resend";
import { orderConfirmationEmail } from "@/lib/email-templates";

// Rate-limit: max 5 order confirmations per IP per 10 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const { email, name, orderId, items, total, pickupTime, isDelivery } = body;

    if (!email || !name || !orderId || !items || total === undefined) {
      return NextResponse.json(
        { error: "Fehlende Pflichtfelder." },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 },
      );
    }

    const emailContent = orderConfirmationEmail({
      name: String(name).slice(0, 100),
      orderId: String(orderId).slice(0, 50),
      items: Array.isArray(items) ? items.slice(0, 30) : [],
      total: Number(total),
      pickupTime: pickupTime ? String(pickupTime).slice(0, 100) : undefined,
      isDelivery: Boolean(isDelivery),
    });

    // Send to customer
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: emailContent.subject,
      html: emailContent.html,
    });

    // Also notify shop owner about the new order
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.replyTo,
      replyTo: email,
      subject: `Neue Bestellung ${orderId} von ${name}`,
      html: emailContent.html,
    });

    return NextResponse.json(
      { success: true, message: "Bestellbestätigung gesendet." },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Order Email API] Error:", error);
    return NextResponse.json(
      { error: "E-Mail konnte nicht gesendet werden." },
      { status: 500 },
    );
  }
}
