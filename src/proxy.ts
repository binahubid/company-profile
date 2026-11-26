import { NextResponse, type NextRequest } from "next/server";

function prefersMarkdown(accept: string) {
  let markdown = 0;
  let html: number | undefined;
  let textWildcard: number | undefined;
  let wildcard: number | undefined;

  for (const range of accept.split(",")) {
    const [type, ...parameters] = range.toLowerCase().split(";");
    const quality = parameters.map((parameter) => parameter.trim()).find((parameter) => parameter.startsWith("q="));
    const q = quality === undefined ? 1 : Number(quality.slice(2));
    if (!Number.isFinite(q) || q < 0 || q > 1) continue;
    switch (type.trim()) {
      case "text/markdown": markdown = Math.max(markdown, q); break;
      case "text/html": html = Math.max(html ?? 0, q); break;
      case "text/*": textWildcard = Math.max(textWildcard ?? 0, q); break;
      case "*/*": wildcard = Math.max(wildcard ?? 0, q); break;
    }
  }
  return markdown > 0 && markdown >= (html ?? textWildcard ?? wildcard ?? 0);
}

export function proxy(request: NextRequest) {
  const accept = request.headers.get("Accept") ?? "";
  if (
    (request.method === "GET" || request.method === "HEAD") &&
    !request.headers.has("RSC") &&
    prefersMarkdown(accept)
  ) {
    return NextResponse.rewrite(new URL("/index.md", request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: "/" };
