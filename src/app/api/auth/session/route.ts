import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";
import { encryptSession, type SessionPayload } from "@/lib/auth/session-crypto";
import { createHash } from "crypto";
import { checkRateLimit, authLimiter } from "@/lib/rate-limit";

const SESSION_DURATION = 60 * 60 * 24 * 5; // 5 days in seconds

/**
 * POST /api/auth/session
 *
 * Called once after Firebase client-side login.
 * Verifies the Firebase ID token server-side with the Admin SDK,
 * reads Custom Claims for the role, and creates an encrypted
 * HttpOnly session cookie.
 */
export async function POST(request: Request) {
  try {
    // ── Rate Limiting ──
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "127.0.0.1";
    const rl = await checkRateLimit(authLimiter, ip);
    if (!rl.success) {
      return NextResponse.json(
        { error: "Too many requests. Try again later." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const { idToken, fingerprint } = body;

    if (!idToken || typeof idToken !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid token" },
        { status: 400 },
      );
    }

    // ── Server-side token verification with Firebase Admin SDK ──
    // `true` = also check if token has been revoked
    const decoded = await adminAuth.verifyIdToken(idToken, true);

    // ── Role from Custom Claims (NOT from Firestore) ──
    const role = (decoded.role as "admin" | "customer") || "customer";

    // ── Browser fingerprint hash for session binding ──
    const fpHash = createHash("sha256")
      .update(String(fingerprint || "unknown"))
      .digest("hex")
      .slice(0, 16);

    const now = Math.floor(Date.now() / 1000);
    const payload: SessionPayload = {
      uid: decoded.uid,
      email: decoded.email || "",
      role,
      iat: now,
      exp: now + SESSION_DURATION,
      fingerprint: fpHash,
    };

    const encryptedSession = encryptSession(payload);

    const response = NextResponse.json({ status: "ok", role });
    response.cookies.set("__session", encryptedSession, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_DURATION,
    });

    return response;
  } catch (error: any) {
    console.error(
      "[AUTH SESSION] Token verification failed:",
      error.code || error.message,
    );
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 401 },
    );
  }
}

/**
 * DELETE /api/auth/session
 *
 * Clears the session cookie (logout).
 */
export async function DELETE() {
  const response = NextResponse.json({ status: "ok" });
  response.cookies.set("__session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return response;
}
