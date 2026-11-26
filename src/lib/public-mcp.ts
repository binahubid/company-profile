import { LATEST_PROTOCOL_VERSION } from "@modelcontextprotocol/sdk/types.js";
import { MCP_PATH } from "@/lib/agent-discovery";
import { SITE_URL } from "@/lib/site";

export const MCP_SERVER_INFO = {
  name: "binahub-public",
  title: "BinaHub Public Information",
  version: "1.0.0",
};

export const MCP_SERVER_CARD = {
  version: "1.0",
  protocolVersion: LATEST_PROTOCOL_VERSION,
  serverInfo: MCP_SERVER_INFO,
  description: "Public information about BinaHub, its services, and its contact details.",
  documentationUrl: `${SITE_URL}/llms.txt`,
  transport: { type: "streamable-http", endpoint: MCP_PATH },
  capabilities: { tools: {} },
  authentication: { required: false, schemes: [] },
};
