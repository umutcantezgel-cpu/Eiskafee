import { cookies } from "next/headers";
import { decryptSession, type SessionPayload } from "./session-crypto";

export type AuthSuccess = {
  authenticated: true;
  session: SessionPayload;
};

export type AuthFailure = {
  authenticated: false;
  error: string;
  status: 401 | 403;
};

export type AuthResult = AuthSuccess | AuthFailure;

/**
 * Server-side auth guard for API Routes and Server Components.
 *
 * Usage:
 * ```ts
 * const auth = await requireAuth({ requireAdmin: true });
 * if (!auth.authenticated) {
 *   return NextResponse.json({ error: auth.error }, { status: auth.status });
 * }
 * // auth.session.uid, auth.session.role etc. are now safe to use
 * ```
 */
export async function requireAuth(options?: {
  requireAdmin?: boolean;
}): Promise<AuthResult> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("__session")?.value;

  if (!sessionCookie) {
    return { authenticated: false, error: "No session", status: 401 };
  }

  const session = decryptSession(sessionCookie);
  if (!session) {
    return {
      authenticated: false,
      error: "Invalid or expired session",
      status: 401,
    };
  }

  if (options?.requireAdmin && session.role !== "admin") {
    return {
      authenticated: false,
      error: "Admin privileges required",
      status: 403,
    };
  }

  return { authenticated: true, session };
}

/**
 * Convenience: get the current session or null (no error thrown).
 * Useful for optional auth scenarios (e.g., guest checkout).
 */
export async function getOptionalSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("__session")?.value;
  if (!sessionCookie) return null;
  return decryptSession(sessionCookie);
}
