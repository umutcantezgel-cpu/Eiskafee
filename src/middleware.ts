import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  // If not in maintenance mode, let request pass
  if (!isMaintenanceMode) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Paths that bypass maintenance mode
  const allowedPaths = [
    "/maintenance",
    "/admin",
    "/api",
    "/_next",
    "/icon.svg",
    "/robots.txt",
    "/sitemap.xml", // Allow search engines to see the sitemap still
  ];

  // Check if current path starts with any of the allowed paths
  const isAllowedPath = allowedPaths.some(
    (path) => pathname.startsWith(path) || pathname === path,
  );

  if (isAllowedPath) {
    return NextResponse.next();
  }

  // Rewrite all other requests to the maintenance page
  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
