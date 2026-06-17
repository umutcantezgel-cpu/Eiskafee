import { NextResponse } from "next/server";
import { admin } from "@/lib/firebase-admin";

export const dynamic = "force-dynamic";

export async function GET() {
  const firebaseInitialized = admin.apps.length > 0;

  return NextResponse.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "ai-agent-api",
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    checks: {
      firebaseAdmin: firebaseInitialized
        ? "initialized"
        : "warning_not_configured",
      memoryUsage: process.memoryUsage(),
    },
  });
}
