import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { adminDb } from "@/lib/firebase-admin";
import { checkRateLimit, formLimiter } from "@/lib/rate-limit";
import { resend, EMAIL_CONFIG } from "@/lib/resend";
import {
  contactFormEmail,
  contactConfirmationEmail,
} from "@/lib/email-templates";

export const dynamic = "force-dynamic";

// Basic input sanitization
function sanitize(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .trim();
}

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

const contactPayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const reservationPayloadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  guests: z.number().int().positive("Guests must be a positive number"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Time must be HH:MM"),
  area: z.string().optional(),
  notes: z.string().optional(),
});

const bodySchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("contact"),
    payload: contactPayloadSchema,
  }),
  z.object({
    type: z.literal("reservation"),
    payload: reservationPayloadSchema,
  }),
]);

export async function POST(req: NextRequest) {
  try {
    const authError = verifyApiKey(req);
    if (authError) return authError;

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rlResult = await checkRateLimit(formLimiter, ip);
    if (!rlResult.success) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 },
      );
    }

    const parseResult = bodySchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload",
          details: parseResult.error.format(),
        },
        { status: 400 },
      );
    }

    const { type, payload } = parseResult.data;

    if (type === "contact") {
      const sanitizedData = {
        name: sanitize(payload.name),
        email: sanitize(payload.email),
        message: sanitize(payload.message),
        subject: payload.subject ? sanitize(payload.subject) : undefined,
      };

      // 1. Send notification to shop owner
      const ownerEmail = contactFormEmail(sanitizedData);
      await resend.emails.send({
        from: EMAIL_CONFIG.from,
        to: EMAIL_CONFIG.replyTo,
        replyTo: sanitizedData.email,
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

      return NextResponse.json({
        success: true,
        message: "Message sent successfully",
      });
    }

    if (type === "reservation") {
      if (!adminDb) {
        console.warn("[AI-Agent] Firestore adminDb is not initialized.");
        return NextResponse.json(
          { success: false, error: "Database service unavailable" },
          { status: 503 },
        );
      }

      const reservationData = {
        name: sanitize(payload.name),
        email: sanitize(payload.email),
        phone: sanitize(payload.phone),
        guests: payload.guests,
        date: payload.date,
        time: payload.time,
        area: payload.area ? sanitize(payload.area) : null,
        notes: payload.notes ? sanitize(payload.notes) : null,
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      await adminDb.collection("reservations").add(reservationData);

      return NextResponse.json({
        success: true,
        message: "Reservation created successfully",
      });
    }

    return NextResponse.json(
      { success: false, error: "Unsupported action type" },
      { status: 400 },
    );
  } catch (error: any) {
    console.error("[AI-Agent Action] Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Action processing failed" },
      { status: 500 },
    );
  }
}
