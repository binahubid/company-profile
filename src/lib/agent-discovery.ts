export const CONTENT_SIGNAL = "search=yes, ai-input=yes, ai-train=no";
export const SERVER_CARD_PATH = "/.well-known/mcp/server-card.json";
export const MCP_PATH = "/mcp/";
export const AGENT_LINK_HEADER = [
  '</llms.txt>; rel="describedby"; type="text/plain"',
  '</index.md>; rel="alternate"; type="text/markdown"; hreflang="id"',
  `<${SERVER_CARD_PATH}>; rel="describedby"; type="application/json"`,
].join(", ");
