import { publicAgentTools } from "@/lib/public-agent-content";

const tools = JSON.stringify(publicAgentTools).replace(/</g, "\\u003c");

// Register before hydration so agents inspecting the initial document can find the tools.
const script = `
(() => {
  const legacy = typeof navigator.modelContext?.registerTool === "function";
  if (!legacy && typeof document.modelContext?.registerTool !== "function") return;

  for (const { name, description, text } of ${tools}) {
    const tool = {
      name,
      description,
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: () => ({ content: [{ type: "text", text }] }),
    };
    try {
      const registration = legacy
        ? navigator.modelContext.registerTool(tool)
        : document.modelContext.registerTool(tool);
      Promise.resolve(registration).catch(() => {});
    } catch {
      // Browser settings and permissions can restrict WebMCP.
    }
  }
})();
`;

export function WebMcpScript() {
  return <script id="binahub-webmcp" dangerouslySetInnerHTML={{ __html: script }} />;
}
