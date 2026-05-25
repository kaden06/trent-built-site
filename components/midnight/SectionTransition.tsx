import BarbellStamp from "@/components/BarbellStamp";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

export function MidSectionTransition() {
  return (
    <section
      style={{
        padding: "128px 56px",
        background: mid.bgDeep,
        borderTop: `1px solid ${mid.line}`,
        borderBottom: `1px solid ${mid.line}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }}
        aria-hidden
      >
        <defs>
          <pattern
            id="mst-trans"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="22" stroke={mid.greenHi} strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mst-trans)" />
      </svg>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 36,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              color: mid.greenHi,
              letterSpacing: "0.32em",
            }}
          >
            CHAPTER BREAK
          </span>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
        </div>

        <BarbellStamp size={148} color={mid.greenHi} bg={mid.bgDeep} />

        <h2
          style={{
            fontFamily: ARCHIVO,
            fontSize: 96,
            color: mid.cream,
            letterSpacing: "-0.015em",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          TRENT BUILT <span style={{ color: mid.greenHi }}>LASTING.</span>
        </h2>

        <div
          style={{
            fontFamily: ARCHIVO_R,
            fontSize: 16,
            color: mid.creamDim,
            maxWidth: 560,
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          The kind of consistency that compounds. Eight years on the floor and counting —
          because the programs that hold are the ones built around your actual life.
        </div>
      </div>
    </section>
  );
}
