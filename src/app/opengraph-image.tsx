import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const imgBuffer = await readFile(
    path.join(process.cwd(), "public", "og-image.png")
  );
  const base64 = `data:image/png;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={base64}
          alt={`${SITE_NAME} — ${SITE_TAGLINE}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  );
}
