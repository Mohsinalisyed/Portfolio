import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photoBuffer = await readFile(
    join(process.cwd(), "src/assets/images/profile.png")
  );
  const photoSrc = `data:image/png;base64,${photoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #1e30f3 0%, #e21e80 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 300,
            height: 300,
            borderRadius: 28,
            overflow: "hidden",
            background: "#ffffff",
            border: "6px solid rgba(255,255,255,0.9)",
            marginRight: 64,
            flexShrink: 0,
          }}
        >
          <img
            src={photoSrc}
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", color: "white" }}>
          <div style={{ display: "flex", fontSize: 58, fontWeight: 800 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              opacity: 0.92,
              marginTop: 10,
            }}
          >
            {`${siteConfig.role} • Web3 & AI Integrations`}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginTop: 40,
              fontSize: 24,
              opacity: 0.95,
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.email}</div>
            <div style={{ display: "flex" }}>{siteConfig.phone}</div>
            <div style={{ display: "flex" }}>{siteConfig.location}</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
