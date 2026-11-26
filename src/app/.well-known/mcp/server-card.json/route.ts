import { MCP_SERVER_CARD } from "@/lib/public-mcp";

export const dynamic = "force-static";

export function GET() {
  return Response.json(MCP_SERVER_CARD);
}
