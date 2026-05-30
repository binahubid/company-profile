"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="id">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "#F5F7FA",
          color: "#0B2C6B",
          fontFamily: "'Segoe UI', system-ui, sans-serif",
          padding: "24px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#D9A441",
          }}
        >
          Kesalahan Sistem
        </p>
        <h1 style={{ margin: "16px 0", fontSize: "40px", fontWeight: 300 }}>
          Terjadi gangguan tak terduga
        </h1>
        <p
          style={{
            margin: "0 0 32px",
            maxWidth: "440px",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(11,44,107,0.6)",
          }}
        >
          Mohon maaf atas ketidaknyamanannya. Silakan muat ulang halaman ini.
        </p>
        <button
          onClick={reset}
          style={{
            height: "48px",
            padding: "0 28px",
            borderRadius: "9999px",
            border: "none",
            background: "#0B2C6B",
            color: "#D9A441",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Coba Lagi
        </button>
      </body>
    </html>
  );
}
