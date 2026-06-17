import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";
import { requireAuth } from "@/lib/auth/requireAuth";

/**
 * POST /api/auth/set-admin
 *
 * Sets or removes the admin role for a target user using Firebase Custom Claims.
 * Only existing admins can call this. The first admin must be created manually
 * via the Firebase Console or a one-time CLI script.
 *
 * Body: { targetUid: string, newRole: 'admin' | 'customer' }
 */
export async function POST(request: Request) {
  // ── Caller must be an admin ──
  const auth = await requireAuth({ requireAdmin: true });
  if (!auth.authenticated) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const { targetUid, newRole } = await request.json();

    // ── Input validation ──
    if (
      !targetUid ||
      typeof targetUid !== "string" ||
      !["admin", "customer"].includes(newRole)
    ) {
      return NextResponse.json(
        {
          error:
            'Invalid input. Required: targetUid (string), newRole ("admin" | "customer")',
        },
        { status: 400 },
      );
    }

    // ── Prevent self-demotion (last admin check would go here in production) ──
    if (targetUid === auth.session.uid && newRole === "customer") {
      return NextResponse.json(
        { error: "Cannot demote yourself" },
        { status: 400 },
      );
    }

    // ── Set Custom Claims - THE single source of truth for roles ──
    await adminAuth.setCustomUserClaims(targetUid, { role: newRole });

    // ── Sync Firestore document for display purposes (not authoritative) ──
    await adminDb.doc(`users/${targetUid}`).update({ role: newRole });

    // ── Audit log ──
    console.log(
      `[AUDIT] Admin ${auth.session.uid} (${auth.session.email}) changed role of ${targetUid} to ${newRole} at ${new Date().toISOString()}`,
    );

    return NextResponse.json({ status: "ok", targetUid, newRole });
  } catch (error: any) {
    console.error("[SET-ADMIN ERROR]:", error);
    return NextResponse.json(
      { error: "Failed to update role" },
      { status: 500 },
    );
  }
}
