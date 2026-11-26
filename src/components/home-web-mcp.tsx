"use client";

import { useEffect } from "react";
import type { PublicAgentTool } from "@/lib/public-agent-content";

interface ModelContext {
  registerTool(tool: {
    name: string;
    description: string;
    inputSchema: { type: "object"; properties: Record<string, never> };
    annotations: { readOnlyHint: true };
    execute: () => { content: { type: "text"; text: string }[] };
  }, options?: { signal: AbortSignal }): void | Promise<void>;
  unregisterTool?(name: string): void;
}

export function HomeWebMcp({ tools }: { tools: readonly PublicAgentTool[] }) {
  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext }).modelContext
      ?? (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!context || typeof context.registerTool !== "function") return;

    const controller = new AbortController();
    const registered: string[] = [];

    for (const { name, description, text } of tools) {
      try {
        const registration = context.registerTool({
          name,
          description,
          inputSchema: { type: "object", properties: {} },
          annotations: { readOnlyHint: true },
          execute: () => ({ content: [{ type: "text", text }] }),
        }, { signal: controller.signal });
        if (registration) void registration.catch(() => {});
        registered.push(name);
      } catch {
        // The browser can restrict WebMCP access by context or feature policy.
      }
    }

    return () => {
      controller.abort();
      for (const name of registered) {
        try {
          context.unregisterTool?.(name);
        } catch {
          // Browsers supporting AbortSignal already removed the tool.
        }
      }
    };
  }, [tools]);

  return null;
}
