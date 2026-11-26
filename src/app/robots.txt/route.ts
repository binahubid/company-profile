import { CONTENT_SIGNAL } from "@/lib/agent-discovery";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-agent: *",
    `Content-Signal: ${CONTENT_SIGNAL}`,
    "Allow: /",
    "Disallow: /admin",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
