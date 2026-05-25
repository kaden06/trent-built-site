import Image from "next/image";
import { MidEyebrow } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

const tiles = [
  { src: "/trent/img-3369.jpg", alt: "Trap-bar deadlift", cap: "PULL DAY · BLOCK 4" },
  { src: "/trent/img-4514.jpg", alt: "Single-arm dumbbell press", cap: "CONDITIONING" },
  { src: "/trent/img-1808.jpg", alt: "Barbell curls — form work", cap: "FORM CHECK · LIVE" },
  { src: "/trent/img-1632.jpg", alt: "Long-term client at the gym", cap: "CLIENT · LONG GAME" },
];

export function MidGallery() {
  return (
    <section id="results" style={{ padding: "96px 56px", background: mid.bg }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 48,
        }}
      >
        <div>
          <MidEyebrow no="04" title="IN THE GYM" />
          <h2
            style={{
              fontFamily: ARCHIVO,
              fontSize: 64,
              color: mid.cream,
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-0.015em",
            }}
          >
            What the work
            <br />
            <span style={{ color: mid.greenHi }}>actually looks like.</span>
          </h2>
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: mid.creamSoft,
            letterSpacing: "0.18em",
            paddingBottom: 6,
          }}
        >
          4 PHOTOS · MORE COMING
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {tiles.map((t, i) => (
          <div
            key={t.src}
            style={{
              position: "relative",
              cursor: "pointer",
              border: `1px solid ${mid.line}`,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                background: mid.surface,
              }}
            >
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "48px 16px 14px",
                background: "linear-gradient(to top, rgba(11,26,42,0.95), transparent)",
                fontFamily: ARCHIVO_R,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.12em",
                color: mid.cream,
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ width: 5, height: 5, background: mid.greenHi }} />
              {t.cap}
            </div>
            <div
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                fontFamily: MONO,
                fontSize: 10,
                color: mid.creamSoft,
                letterSpacing: "0.14em",
                background: "rgba(11,26,42,0.7)",
                padding: "4px 8px",
                borderRadius: 2,
              }}
            >
              0{i + 1}/{tiles.length.toString().padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
