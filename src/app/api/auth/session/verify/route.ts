import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { decryptSession } from "@/lib/auth/session-crypto";

/**
 * GET /api/auth/session/verify
 *
 * Returns the session role without modifying anything.
 * Used by AuthGuard to verify server-side session state.
 */
export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("__session")?.value;

    if (!sessionCookie) {
      return NextResponse.json({ error: "No session" }, { status: 401 });
    }

    const session = decryptSession(sessionCookie);
    if (!session) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }

    // Check expiry
    const now = Math.floor(Date.now() / 1000);
    if (session.exp < now) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    return NextResponse.json({
      role: session.role,
      uid: session.uid,
      email: session.email,
    });
  } catch {
    return NextResponse.json(
      { error: "Session verification failed" },
      { status: 401 },
    );
  }
}
