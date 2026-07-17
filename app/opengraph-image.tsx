import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "Nexo Skills — Connect to your next level.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  const logoSrc = `data:image/png;base64,${readFileSync(join(process.cwd(), "public", "logo-icon.png")).toString("base64")}`;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={130}
          height={96}
          alt=""
          style={{ marginBottom: "32px" }}
        />

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
