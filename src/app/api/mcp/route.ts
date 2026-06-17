import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { server } from "@/lib/mcp/server";

// Define a global to hold the transport so it persists across hot reloads in dev
declare global {
  var mcpTransport: WebStandardStreamableHTTPServerTransport | undefined;
}

// Ensure transport is initialized once
if (!globalThis.mcpTransport) {
  globalThis.mcpTransport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: () => crypto.randomUUID(),
  });
  // Connect the transport to the server
  server.connect(globalThis.mcpTransport);
}

export const dynamic = "force-dynamic";

/**
 * ✅ API key authentication for MCP endpoint.
 * The MCP_API_KEY env var must be set and sent as X-API-Key header.
 */
function verifyApiKey(req: Request): Response | null {
  const apiKey = req.headers.get("X-API-Key") || req.headers.get("x-api-key");
  const expectedKey = process.env.MCP_API_KEY;

  if (!expectedKey) {
    console.warn("[MCP] MCP_API_KEY is not set - MCP endpoint is DISABLED");
    return new Response("Service unavailable", { status: 503 });
  }

  if (apiKey !== expectedKey) {
    return new Response("Unauthorized", { status: 401 });
  }

  return null; // Auth passed
}

export async function GET(req: Request) {
  const authError = verifyApiKey(req);
  if (authError) return authError;
  return globalThis.mcpTransport!.handleRequest(req);
}

export async function POST(req: Request) {
  const authError = verifyApiKey(req);
  if (authError) return authError;
  return globalThis.mcpTransport!.handleRequest(req);
}

export async function DELETE(req: Request) {
  const authError = verifyApiKey(req);
  if (authError) return authError;
  return globalThis.mcpTransport!.handleRequest(req);
}
