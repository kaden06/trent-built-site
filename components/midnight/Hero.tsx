import Image from "next/image";
import Link from "next/link";
import { MidEyebrow } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

export function MidHero() {
  const stats = [
    { n: "200+", l: "CLIENTS COACHED", hi: true },
    { n: "8 YR", l: "IN PRACTICE", hi: false },
    { n: "04", l: "CERTIFICATIONS", hi: false },
  ];

  return (
    <section style={{ padding: "88px 56px 96px", position: "relative", background: mid.bg }}>
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }}
        aria-hidden
      >
        <defs>
          <pattern id="mgrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" stroke={mid.cream} strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mgrid)" />
      </svg>

      <MidEyebrow no="01" title="TRENT — HEAD COACH" />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 64,
          alignItems: "center",
          position: "relative",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: ARCHIVO,
              fontSize: 108,
              lineHeight: 0.95,
              letterSpacing: "-0.015em",
              margin: 0,
              color: mid.cream,
            }}
          >
            Train Hard.
            <br />
            <span
              style={{
                color: mid.greenHi,
                position: "relative",
                display: "inline-block",
                paddingBottom: 6,
              }}
            >
              Live Stronger.
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 4,
                  background: mid.royal,
                }}
              />
            </span>
            <br />
            Built to Last.
          </h1>

          <p
            style={{
              fontFamily: ARCHIVO_R,
              fontSize: 18,
              lineHeight: 1.55,
              color: mid.creamDim,
              maxWidth: 540,
              marginTop: 32,
            }}
          >
            Eight years of in-person and online coaching. Built for adults who&apos;ve already
            tried the apps, the trends, the 6-week challenges — and want something that
            actually holds.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
            <Link
              href="/book"
              style={{
                background: mid.green,
                color: mid.greenInk,
                border: "none",
                padding: "18px 28px",
                fontFamily: ARCHIVO_R,
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                borderRadius: 2,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              Book a Free Consultation
              <span style={{ width: 24, height: 1, background: mid.greenInk }} />
              <span>→</span>
            </Link>
            <Link
              href="/results"
              style={{
                background: "transparent",
                color: mid.cream,
                border: `1px solid ${mid.creamSoft}`,
                padding: "18px 28px",
                fontFamily: ARCHIVO_R,
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                borderRadius: 2,
                cursor: "pointer",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              See My Work
            </Link>
          </div>

          <div style={{ display: "flex", gap: 0, marginTop: 56 }}>
            {stats.map((s, i) => (
              <div
                key={s.l}
                style={{
                  flex: 1,
                  padding: "22px 24px",
                  background: s.hi ? mid.surface : "transparent",
                  border: `1px solid ${mid.line}`,
                  borderLeft: i > 0 ? "none" : `1px solid ${mid.line}`,
                  position: "relative",
                }}
              >
                {s.hi && (
                  <div
                    style={{
                      position: "absolute",
                      top: -1,
                      left: -1,
                      right: -1,
                      height: 3,
                      background: mid.green,
                    }}
                  />
                )}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    fontFamily: MONO,
                    fontSize: 9,
                    color: mid.creamSoft,
                    letterSpacing: "0.1em",
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontFamily: ARCHIVO,
                    fontSize: 42,
                    color: s.hi ? mid.greenHi : mid.cream,
                    lineHeight: 1,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: mid.creamSoft,
                    letterSpacing: "0.14em",
                    marginTop: 10,
                  }}
                >
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "-14px -14px 18px 18px",
              border: `1px solid ${mid.royal}`,
              borderRadius: 4,
            }}
          />
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              borderRadius: 4,
              overflow: "hidden",
              background: mid.surface,
            }}
          >
            <Image
              src="/trent/trent-portrait.jpg"
              alt="Trent — head coach"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -2,
              left: -2,
              background: mid.bg,
              padding: "12px 16px 12px 12px",
              border: `1px solid ${mid.green}`,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: 8, height: 8, background: mid.greenHi }} />
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: mid.cream,
                letterSpacing: "0.06em",
              }}
            >
              STATUS · ACCEPTING CLIENTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
