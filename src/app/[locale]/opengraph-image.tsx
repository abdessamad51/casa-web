import { ImageResponse } from "next/og";

export const alt = "Casa Web — Agence Digitale Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a", // slate-900
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#4f46e5", // brand-600
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            CW
          </div>
          <span style={{ fontSize: "40px", fontWeight: "bold", color: "white" }}>
            Casa<span style={{ color: "#818cf8" }}>Web</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            margin: "0 0 20px",
            letterSpacing: "-0.02em",
          }}
        >
          Des sites qui travaillent.<br />
          <span style={{ color: "#818cf8" }}>Pas que qui existent.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8", // slate-400
            textAlign: "center",
            margin: "0 0 40px",
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}
        >
          Agence Web & Mobile — Casablanca
        </p>

        {/* Services pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Web Dev", "Mobile", "SEO", "VPS Hosting"].map((s) => (
            <div
              key={s}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "100px",
                padding: "8px 20px",
                color: "white",
                fontSize: "18px",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
