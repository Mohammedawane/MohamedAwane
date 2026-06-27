import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nexo Skills — Connect to your next level.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020817 0%, #0f172a 50%, #1e1b4b 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            width: "96px",
            height: "96px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            boxShadow: "0 20px 60px rgba(59,130,246,0.4)",
          }}
        >
          <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
            <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
          </svg>
        </div>

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "52px", fontWeight: 800, color: "#ffffff" }}>
            Nexo
          </span>
          <span style={{ fontSize: "52px", fontWeight: 800, color: "#60a5fa" }}>
            Skills
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            margin: "0 0 40px",
            letterSpacing: "0.05em",
          }}
        >
          Connect to your next level.
        </p>

        {/* Pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["QA & IA", "ISO 9001", "Tutorat en ligne", "Création web"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 20px",
                borderRadius: "100px",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "#cbd5e1",
                fontSize: "16px",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <p
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "16px",
            color: "#475569",
            letterSpacing: "0.05em",
          }}
        >
          www.nexo-skills.com
        </p>
      </div>
    ),
    { ...size }
  );
}
