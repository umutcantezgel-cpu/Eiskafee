import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ═══════════════════════════════════════════════════════
//  ZERO-TRUST MIDDLEWARE
//  Central control point for:
//  1. Maintenance mode
//  2. Security headers + CSP with dynamic nonces
//  3. Route protection (session cookie enforcement)
// ═══════════════════════════════════════════════════════

/** Routes that require an authenticated session cookie */
const PROTECTED_ROUTES = ["/admin", "/profile", "/order-status", "/order-hub"];

/** Routes that additionally require admin role (enforced in API routes/components) */
const ADMIN_ROUTES = ["/admin"];

const PUBLIC_API_ALLOWLIST = [
  "/api/auth/session", // Login endpoint must be accessible
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── 1. MAINTENANCE MODE ──────────────────────────────
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (isMaintenanceMode) {
    const allowedPaths = [
      "/maintenance",
      "/admin",
      "/api",
      "/_next",
      "/icon.svg",
      "/robots.txt",
      "/sitemap.xml",
    ];
    const isAllowedPath = allowedPaths.some(
      (path) => pathname.startsWith(path) || pathname === path,
    );
    if (!isAllowedPath) {
      return NextResponse.rewrite(new URL("/maintenance", request.url));
    }
  }

  // ── 2. BUILD RESPONSE WITH SECURITY HEADERS ─────────
  const response = NextResponse.next();

  // Generate a per-request nonce for CSP
  const nonce = crypto.randomUUID().replace(/-/g, "");

  const isDev = process.env.NODE_ENV === "development";
  const isLocal =
    isDev ||
    request.nextUrl.hostname === "localhost" ||
    request.nextUrl.hostname === "127.0.0.1";

  // Core security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("X-Download-Options", "noopen");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  if (!isLocal) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload",
    );
  }
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=()",
  );

  // Content Security Policy with dynamic nonce
  const csp = [
    `default-src 'self'`,
    `script-src 'self' ${isLocal ? "'unsafe-inline' 'unsafe-eval'" : `'nonce-${nonce}' 'strict-dynamic'`} https://apis.google.com https://www.googletagmanager.com https://va.vercel-scripts.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/`,
    `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`, // unsafe-inline required for CSS-in-JS (framer-motion, etc.)
    `font-src 'self' https://fonts.gstatic.com`,
    `img-src 'self' data: blob: https://images.unsplash.com https://firebasestorage.googleapis.com https://*.tile.openstreetmap.org`,
    `connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://vitals.vercel-insights.com https://*.upstash.io${isLocal ? " ws://localhost:* http://localhost:* ws://127.0.0.1:* http://127.0.0.1:*" : ""}`,
    `frame-src https://hey-fedee.firebaseapp.com https://accounts.google.com https://www.google.com/recaptcha/`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    ...(isLocal ? [] : [`upgrade-insecure-requests`]),
  ].join("; ");

  response.headers.set("Content-Security-Policy", csp);

  // Pass nonce to Server Components via header
  response.headers.set("X-Nonce", nonce);

  // ── 3. ROUTE PROTECTION ──────────────────────────────
  const sessionCookie = request.cookies.get("__session")?.value;
  const isProtectedRoute = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
  const isAdminRoute = ADMIN_ROUTES.some((r) => pathname.startsWith(r));
  const isApiRoute = pathname.startsWith("/api/");
  const isPublicApiRoute = PUBLIC_API_ALLOWLIST.some((r) =>
    pathname.startsWith(r),
  );

  // Protected pages: redirect to login if no session cookie
  if (isProtectedRoute && !sessionCookie) {
    // Sanitize redirect target to prevent open redirect
    const safeRedirect =
      pathname.startsWith("/") && !pathname.startsWith("//") ? pathname : "/";
    const loginUrl = new URL("/auth", request.url);
    loginUrl.searchParams.set("redirect", safeRedirect);
    return NextResponse.redirect(loginUrl);
  }

  // Secured API routes: reject if no session cookie
  // Exception: public API routes and the /api/auth/* family
  if (
    isApiRoute &&
    !isPublicApiRoute &&
    !pathname.startsWith("/api/auth/") &&
    !pathname.startsWith("/api/mcp") && // MCP uses its own API key auth
    !pathname.startsWith("/api/ai-agent") && // AI Agent routes bypass session verification
    !sessionCookie
  ) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Signal to downstream Server Components that admin validation is required
  if (isAdminRoute) {
    response.headers.set("X-Requires-Admin", "true");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg (favicon files)
     */
    "/((?!_next/static|_next/image|favicon.ico|icon.svg).*)",
  ],
};
