import { ImageResponse } from "next/og";

export const alt = "Casa Web — Agence Digitale Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 50%, #312e81 100%)",
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
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1, #f59e0b)",
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
            Casa<span style={{ color: "#fbbf24" }}>Web</span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            margin: "0 0 20px",
          }}
        >
          Votre présence digitale,{" "}
          <span style={{ color: "#fbbf24" }}>notre expertise.</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#c7d2fe",
            textAlign: "center",
            margin: "0 0 40px",
          }}
        >
          Agence Digitale • Casablanca, Maroc 🇲🇦
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
