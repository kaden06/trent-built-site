import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

// Wordmark — stacked TRENT (royal) / divider / BUILT (emerald). Per Site Round 3.
export function MidWordmark({
  size = 22,
  trentColor = mid.royal,
  builtColor = mid.greenHi,
  dividerColor = mid.greenHi,
}: {
  size?: number;
  trentColor?: string;
  builtColor?: string;
  dividerColor?: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: Math.max(3, size * 0.18),
      }}
    >
      <div
        style={{
          fontFamily: ARCHIVO,
          fontSize: size,
          letterSpacing: "0.14em",
          lineHeight: 0.95,
          color: trentColor,
        }}
      >
        TRENT
      </div>
      <div style={{ width: size * 3.4, height: 1.5, background: dividerColor }} />
      <div
        style={{
          fontFamily: ARCHIVO,
          fontSize: size,
          letterSpacing: "0.14em",
          lineHeight: 0.95,
          color: builtColor,
        }}
      >
        BUILT
      </div>
    </div>
  );
}

// Striped photo placeholder — until Trent supplies real photos.
export function MidStripe({
  label,
  ratio = "4/5",
  tone = mid.surface,
  accent = mid.surfaceHi,
  angle = 45,
}: {
  label: string;
  ratio?: string;
  tone?: string;
  accent?: string;
  angle?: number;
}) {
  const id = `mst-${label.replace(/\W/g, "")}`;
  return (
    <div
      style={{
        aspectRatio: ratio,
        background: tone,
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.55 }}
        aria-hidden
      >
        <defs>
          <pattern
            id={id}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${angle})`}
          >
            <line x1="0" y1="0" x2="0" y2="14" stroke={accent} strokeWidth="6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 14,
          bottom: 12,
          fontFamily: MONO,
          fontSize: 11,
          color: mid.creamSoft,
          letterSpacing: "0.04em",
        }}
      >
        [ {label} ]
      </div>
    </div>
  );
}

// Section eyebrow — removed at Kaden's request 2026-05-24. Calls left in
// place so the page-level composition stays close to the design files,
// but the visual element renders nothing.
export function MidEyebrow(_props: { no?: string; title?: string }) {
  return null;
}

// Between-section divider — emerald diamonds flanking section number.
export function MidDivider({ no }: { no: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "0 56px",
        background: mid.bg,
        position: "relative",
      }}
    >
      <div style={{ flex: 1, height: 1, background: mid.line }} />
      <div
        style={{
          fontFamily: MONO,
          fontSize: 10,
          color: mid.greenHi,
          letterSpacing: "0.24em",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            background: mid.greenHi,
            transform: "rotate(45deg)",
            display: "inline-block",
          }}
        />
        SECTION {no}
        <span
          style={{
            width: 6,
            height: 6,
            background: mid.greenHi,
            transform: "rotate(45deg)",
            display: "inline-block",
          }}
        />
      </div>
      <div style={{ flex: 1, height: 1, background: mid.line }} />
    </div>
  );
}

export { ARCHIVO, ARCHIVO_R, MONO, mid };
