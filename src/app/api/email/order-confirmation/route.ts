import { NextRequest, NextResponse } from "next/server";
import { resend, EMAIL_CONFIG } from "@/lib/resend";
import { orderConfirmationEmail } from "@/lib/email-templates";
import { adminAuth } from "@/lib/firebase-admin";

export async function POST(req: NextRequest) {
  try {
    // Verify the request comes from an authenticated session (internal API call)
    const authHeader = req.headers.get("authorization");
    const apiKey = req.headers.get("x-api-key");

    // Allow internal calls with MCP_API_KEY or valid Firebase session
    const isInternalCall = apiKey === process.env.MCP_API_KEY;

    if (!isInternalCall && authHeader) {
      try {
        const token = authHeader.replace("Bearer ", "");
        await adminAuth.verifyIdToken(token);
      } catch {
        return NextResponse.json(
          { error: "Nicht autorisiert." },
          { status: 401 },
        );
      }
    } else if (!isInternalCall) {
      return NextResponse.json(
        { error: "Nicht autorisiert." },
        { status: 401 },
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

    const emailContent = orderConfirmationEmail({
      name,
      orderId,
      items,
      total,
      pickupTime,
      isDelivery,
    });

    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject: emailContent.subject,
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
