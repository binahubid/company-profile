import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #07152E 0%, #0B2C6B 58%, #0A1A3A 100%)",
          padding: "84px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              height: "20px",
              width: "20px",
              borderRadius: "9999px",
              background: "#D9A441",
            }}
          />
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
            }}
          >
            BinaHub
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: "74px",
              fontWeight: 700,
              lineHeight: 1.08,
              maxWidth: "940px",
            }}
          >
            Memanusiawikan masa depan organisasi.
          </div>
          <div
            style={{
              display: "flex",
              color: "#D9A441",
              fontSize: "32px",
              fontWeight: 500,
            }}
          >
            {SITE_TAGLINE}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.62)",
            fontSize: "24px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          People. Learning. Elevated.
        </div>
      </div>
    ),
    { ...size }
  );
}
