import Image from "next/image";
import { MidEyebrow } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

export function MidAbout() {
  const certs = ["NASM-CPT", "Precision Nutrition L1", "FMS Certified", "CPR / AED"];
  return (
    <section id="about" style={{ padding: "96px 56px", background: mid.bg }}>
      <MidEyebrow no="02" title="ABOUT — TRENT" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "0.85fr 1fr",
          gap: 72,
          alignItems: "flex-start",
          marginTop: 18,
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              inset: "-12px -12px 16px 16px",
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
              src="/trent/img-6806.jpg"
              alt="Trent at the power rack"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: -10,
              right: -10,
              background: mid.green,
              color: mid.greenInk,
              padding: "10px 16px",
              fontFamily: ARCHIVO,
              fontSize: 18,
              letterSpacing: "0.04em",
            }}
          >
            EST. 2017
          </div>
        </div>

        <div>
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
            Coaching that meets you
            <br />
            <span style={{ color: mid.greenHi }}>where you are.</span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              marginTop: 32,
              maxWidth: 580,
            }}
          >
            <p
              style={{
                fontFamily: ARCHIVO_R,
                fontSize: 16,
                color: mid.creamDim,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              I&apos;ve spent the last eight years in commercial gyms, private studios, and on
              video calls. Same answer every time: most people don&apos;t need a new program.
              They need a coach who actually pays attention and adjusts as life moves.
            </p>
            <p
              style={{
                fontFamily: ARCHIVO_R,
                fontSize: 16,
                color: mid.creamDim,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              No transformations in 30 days. No mystery supplement stacks. Just clear
              programming, honest feedback, and the kind of consistency that compounds.
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: mid.royal,
                letterSpacing: "0.22em",
                marginBottom: 14,
              }}
            >
              ── CERTIFICATIONS
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {certs.map((c) => (
                <div
                  key={c}
                  style={{
                    background: mid.surface,
                    border: `1px solid ${mid.royal}`,
                    padding: "10px 16px",
                    borderRadius: 2,
                    fontFamily: ARCHIVO_R,
                    fontWeight: 700,
                    fontSize: 12,
                    color: mid.cream,
                    letterSpacing: "0.1em",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ width: 6, height: 6, background: mid.greenHi }} />
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              marginTop: 40,
              padding: "24px 28px",
              background: mid.surface,
              borderLeft: `3px solid ${mid.green}`,
              position: "relative",
            }}
          >
            <div
              style={{
                fontFamily: ARCHIVO,
                fontSize: 22,
                color: mid.cream,
                lineHeight: 1.4,
                letterSpacing: "-0.005em",
              }}
            >
              &ldquo;The right plan you&apos;ll actually run beats the perfect plan you
              won&apos;t.&rdquo;
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: mid.creamSoft,
                letterSpacing: "0.16em",
                marginTop: 14,
              }}
            >
              — TRENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
