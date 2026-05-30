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

export async function GET(req: Request) {
  return globalThis.mcpTransport!.handleRequest(req);
}

export async function POST(req: Request) {
  return globalThis.mcpTransport!.handleRequest(req);
}

export async function DELETE(req: Request) {
  return globalThis.mcpTransport!.handleRequest(req);
}
