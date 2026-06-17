import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_CONFIG } from "@/lib/resend";
import {
  contactFormEmail,
  contactConfirmationEmail,
} from "@/lib/email-templates";

// Simple rate-limit: max 3 emails per IP per 5 minutes
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 5 * 60 * 1000;

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

// Basic input sanitization
function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Zu viele Anfragen. Bitte versuche es in 5 Minuten erneut." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const { name, email, message, subject } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, E-Mail und Nachricht sind Pflichtfelder." },
        { status: 400 },
      );
    }

    if (typeof name !== "string" || name.length > 100) {
      return NextResponse.json({ error: "Ungültiger Name." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 },
      );
    }

    if (typeof message !== "string" || message.length > 5000) {
      return NextResponse.json(
        { error: "Nachricht ist zu lang (max. 5000 Zeichen)." },
        { status: 400 },
      );
    }

    const sanitizedData = {
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message),
      subject: subject ? sanitize(subject) : undefined,
    };

    // 1. Send notification to shop owner
    const ownerEmail = contactFormEmail(sanitizedData);
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.replyTo, // heyfederica@hotmail.com
      replyTo: sanitizedData.email, // reply goes to the customer
      subject: ownerEmail.subject,
      html: ownerEmail.html,
    });

    // 2. Send confirmation to the customer
    const confirmEmail = contactConfirmationEmail(sanitizedData);
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: sanitizedData.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: confirmEmail.subject,
      html: confirmEmail.html,
    });

    return NextResponse.json(
      { success: true, message: "Nachricht wurde gesendet!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("[Contact API] Error:", error);
    return NextResponse.json(
      {
        error:
          "E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut.",
      },
      { status: 500 },
    );
  }
}
