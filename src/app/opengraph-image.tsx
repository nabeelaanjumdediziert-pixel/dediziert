import { ImageResponse } from "next/og";

export const alt = "DEDIZIERT — Accounting, Tax, Audit & Advisory Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Branded Open Graph / social-share card for the site. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background:
            "linear-gradient(135deg, #33508a 0%, #2f4d88 45%, #16263f 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            fontWeight: 700,
            color: "#e0c89a",
          }}
        >
          ACCOUNTING • TAXATION • AUDIT — POWERED BY AI
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 118,
            fontWeight: 800,
            letterSpacing: -3,
            marginTop: 28,
          }}
        >
          DEDIZIERT
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            marginTop: 18,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          Honest. Committed. That’s DEDIZIERT.
        </div>
      </div>
    ),
    { ...size },
  );
}
