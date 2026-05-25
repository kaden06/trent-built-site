import Link from "next/link";
import BarbellStamp from "@/components/BarbellStamp";
import { MidWordmark } from "./atoms";
import { mid, ARCHIVO_R, MONO } from "./palette";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Book Now", href: "/book" },
];

export function MidFooter() {
  const socials = [
    { l: "Instagram", h: "@trentbuilt" },
    { l: "YouTube", h: "/trentbuilt" },
    { l: "Strava", h: "trent / built" },
  ];

  return (
    <footer
      style={{
        background: mid.bgDeep,
        padding: "64px 56px 32px",
        borderTop: `1px solid ${mid.line}`,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 48,
          alignItems: "flex-start",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
            <BarbellStamp size={64} color={mid.greenHi} bg={mid.bgDeep} />
            <div style={{ width: 1, height: 56, background: mid.line }} />
            <MidWordmark size={16} />
          </div>
          <p
            style={{
              fontFamily: ARCHIVO_R,
              fontSize: 14,
              color: mid.creamDim,
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 320,
            }}
          >
            In-person and online coaching for adults who want a program that holds. Run by
            Trent — eight years and counting.
          </p>
        </div>

        <div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: mid.royal,
              letterSpacing: "0.22em",
              marginBottom: 18,
            }}
          >
            NAVIGATE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: ARCHIVO_R,
                  fontWeight: 700,
                  fontSize: 13,
                  color: mid.cream,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: mid.royal,
              letterSpacing: "0.22em",
              marginBottom: 18,
            }}
          >
            CONTACT
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              fontFamily: ARCHIVO_R,
              fontSize: 14,
              color: mid.cream,
            }}
          >
            <div>trent@trentbuilt.co</div>
            <div>(303) 555-0117</div>
            <div style={{ color: mid.creamSoft }}>Mon–Sat · 6a–8p MT</div>
          </div>
        </div>

        <div>
          <div
            style={{
              fontFamily: MONO,
              fontSize: 10,
              color: mid.royal,
              letterSpacing: "0.22em",
              marginBottom: 18,
            }}
          >
            FOLLOW
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {socials.map((s) => (
              <div key={s.l} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                <span
                  style={{
                    fontFamily: ARCHIVO_R,
                    fontWeight: 700,
                    fontSize: 13,
                    color: mid.cream,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.l}
                </span>
                <span style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft }}>
                  {s.h}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 56,
          paddingTop: 24,
          borderTop: `1px solid ${mid.line}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: mid.creamSoft,
            letterSpacing: "0.14em",
          }}
        >
          © {new Date().getFullYear()} TRENT BUILT · ALL RIGHTS RESERVED
        </div>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 11,
            color: mid.creamSoft,
            letterSpacing: "0.14em",
            display: "flex",
            gap: 24,
          }}
        >
          <span>PRIVACY</span>
          <span>TERMS</span>
          <span style={{ color: mid.greenHi }}>BUILT IN TEXAS · 1975</span>
        </div>
      </div>
    </footer>
  );
}
