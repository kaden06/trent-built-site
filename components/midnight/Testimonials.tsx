"use client";

import { useEffect, useState } from "react";
import { MidEyebrow } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

const quotes = [
  {
    stars: 5,
    body: "I'd done three programs before this one. They all faded by month two. With Trent it stuck — because he actually pays attention. I'm 38, down 22 lbs, and I deadlifted 405 last Tuesday.",
    name: "Marcus Rivera",
    role: "ONLINE CLIENT · 14 MONTHS",
  },
  {
    stars: 5,
    body: "Trent built me back into the gym after 6 years off. Six months in and I can run after my kids without my back tightening up. That's the whole story. No drama, no transformation reel — just steady work that fit my actual week.",
    name: "Jen Okafor",
    role: "IN-PERSON · 6 MONTHS",
  },
  {
    stars: 5,
    body: "Trent calls me out, in a good way. Programming is real. He moves things around when work gets brutal and doesn't make a thing of it. First coach I've actually kept paying after the trial.",
    name: "David Park",
    role: "ONLINE + NUTRITION · 9 MONTHS",
  },
];

export function MidTestimonials() {
  const [i, setI] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <MidEyebrow no="05" title="RESULTS — THE LONG GAME" />
      <h2
        style={{
          fontFamily: ARCHIVO,
          fontSize: 64,
          color: mid.cream,
          margin: "6px 0 48px",
          lineHeight: 0.95,
          letterSpacing: "-0.015em",
        }}
      >
        What people say
        <br />
        <span style={{ color: mid.greenHi }}>after a year.</span>
      </h2>

      <div
        style={{
          background: mid.surface,
          border: `1px solid ${mid.line}`,
          borderRadius: 4,
          padding: "56px 64px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
          {Array.from({ length: q.stars }).map((_, n) => (
            <svg
              key={n}
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill={mid.greenHi}
              aria-hidden
            >
              <path d="M9 1l2.47 5.01L17 6.83l-4 3.9.94 5.5L9 13.63l-4.94 2.6L5 10.73 1 6.83l5.53-.82L9 1z" />
            </svg>
          ))}
        </div>

        <p
          style={{
            fontFamily: ARCHIVO_R,
            fontWeight: 500,
            fontSize: 28,
            lineHeight: 1.4,
            color: mid.cream,
            margin: 0,
            letterSpacing: "-0.005em",
            maxWidth: 980,
          }}
        >
          &ldquo;{q.body}&rdquo;
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 36 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              background: mid.surfaceHi,
              border: `1px solid ${mid.line}`,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: ARCHIVO,
                fontSize: 18,
                color: mid.cream,
                letterSpacing: "0",
              }}
            >
              {q.name}
            </div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: mid.creamSoft,
                letterSpacing: "0.14em",
                marginTop: 4,
              }}
            >
              {q.role}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: 24,
            right: 28,
            fontFamily: MONO,
            fontSize: 11,
            color: mid.creamSoft,
            letterSpacing: "0.18em",
          }}
        >
          {String(i + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 32,
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {quotes.map((_, n) => (
            <button
              key={n}
              onClick={() => setI(n)}
              aria-label={`Show testimonial ${n + 1}`}
              style={{
                width: n === i ? 28 : 7,
                height: 7,
                padding: 0,
                background: n === i ? mid.greenHi : mid.line,
                border: "none",
                cursor: "pointer",
                transition: "all .3s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
