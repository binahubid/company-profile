import { AGENT_LINK_HEADER } from "@/lib/agent-discovery";
import { homepageMarkdown } from "@/lib/public-agent-content";

export function GET() {
  return new Response(homepageMarkdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Language": "id",
      "Cache-Control": "private, no-store",
      Link: AGENT_LINK_HEADER,
    },
  });
}
