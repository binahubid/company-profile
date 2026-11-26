import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { MCP_SERVER_INFO } from "@/lib/public-mcp";
import { publicAgentTools } from "@/lib/public-agent-content";
import { SITE_URL } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const origin = request.headers.get("Origin");
  if (origin !== null && origin !== new URL(SITE_URL).origin) {
    return Response.json({
      jsonrpc: "2.0",
      id: null,
      error: { code: -32000, message: "Origin not allowed" },
    }, { status: 403 });
  }

  const server = new McpServer(MCP_SERVER_INFO);
  for (const { name, description, text } of publicAgentTools) {
    server.registerTool(name, {
      description,
      annotations: { readOnlyHint: true, openWorldHint: false },
    }, () => ({ content: [{ type: "text", text }] }));
  }

  const transport = new WebStandardStreamableHTTPServerTransport({
    enableJsonResponse: true,
    maxRequestBodySize: 16_384,
  });

  try {
    await server.connect(transport);
    return await transport.handleRequest(request);
  } finally {
    await server.close();
  }
}

export function GET() {
  return new Response(null, { status: 405, headers: { Allow: "POST" } });
}
