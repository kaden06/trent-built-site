import Link from "next/link";
import { MidEyebrow } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

type Card = {
  label: string;
  tag: string;
  blurb: string;
  price: string;
  unit: string;
  features: string[];
  popular: boolean;
};

const cards: Card[] = [
  {
    label: "In-Person Training",
    tag: "IN-PERSON",
    blurb: "In person. You, the bar, my eyes — and a program built to your starting line.",
    price: "$120",
    unit: "PER SESSION",
    features: [
      "Movement screen + plan",
      "Weekly progression review",
      "Form correction on the floor",
    ],
    popular: false,
  },
  {
    label: "Online Coaching",
    tag: "REMOTE",
    blurb: "Programmed weekly. Form reviews on tape. Real text-line accountability.",
    price: "$249",
    unit: "PER MONTH",
    features: [
      "Custom 4-week blocks",
      "Form review within 24h",
      "Direct text access",
    ],
    popular: true,
  },
  {
    label: "Nutrition Coaching",
    tag: "NUTRITION",
    blurb: "No crash plans. Habits that survive your job, your travel, your week.",
    price: "$179",
    unit: "PER MONTH",
    features: [
      "Macro + habit targets",
      "Weekly check-ins",
      "Adjustments as you progress",
    ],
    popular: false,
  },
];

export function MidServices() {
  return (
    <section id="services" style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 56,
        }}
      >
        <div>
          <MidEyebrow no="03" title="SERVICES & PRICING" />
          <h2
            style={{
              fontFamily: ARCHIVO,
              fontSize: 80,
              color: mid.cream,
              margin: 0,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
            }}
          >
            PICK THE LANE.
            <br />
            <span style={{ color: mid.greenHi }}>SHOW UP EITHER WAY.</span>
          </h2>
        </div>
        <div
          style={{
            fontFamily: ARCHIVO_R,
            fontSize: 14,
            color: mid.creamDim,
            maxWidth: 300,
            lineHeight: 1.6,
            paddingBottom: 8,
          }}
        >
          Three tiers, month-to-month. No contracts. Switch lanes, stack lanes, pause when
          life moves.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
        {cards.map((c, idx) => (
          <div
            key={c.label}
            style={{
              background: c.popular ? mid.surfacePop : mid.surface,
              border: `1px solid ${c.popular ? mid.green : mid.line}`,
              borderLeft:
                idx > 0 && !c.popular
                  ? "none"
                  : c.popular
                  ? `1px solid ${mid.green}`
                  : `1px solid ${mid.line}`,
              padding: "36px 28px 28px",
              position: "relative",
              zIndex: c.popular ? 2 : 1,
            }}
          >
            {c.popular && (
              <div
                style={{
                  position: "absolute",
                  top: -1,
                  left: -1,
                  right: -1,
                  height: 4,
                  background: mid.green,
                }}
              />
            )}
            {c.popular && (
              <div
                style={{
                  position: "absolute",
                  top: -14,
                  left: 24,
                  background: mid.green,
                  color: mid.cream,
                  fontFamily: ARCHIVO_R,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  padding: "6px 12px",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: mid.greenHi,
                    display: "inline-block",
                  }}
                />
                MOST POPULAR
              </div>
            )}
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                color: c.popular ? mid.greenHi : mid.creamSoft,
                letterSpacing: "0.14em",
              }}
            >
              TIER · {c.tag}
            </div>
            <div
              style={{
                fontFamily: ARCHIVO,
                fontSize: 26,
                color: mid.cream,
                lineHeight: 1.1,
                letterSpacing: "-0.005em",
                marginTop: 14,
              }}
            >
              {c.label}
            </div>
            <p
              style={{
                fontFamily: ARCHIVO_R,
                fontSize: 14,
                color: mid.creamDim,
                lineHeight: 1.6,
                marginTop: 12,
                minHeight: 72,
              }}
            >
              {c.blurb}
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, margin: "8px 0 0" }}>
              <span
                style={{
                  fontFamily: ARCHIVO,
                  fontSize: 84,
                  color: c.popular ? mid.greenHi : mid.cream,
                  lineHeight: 0.9,
                  letterSpacing: "-0.025em",
                }}
              >
                {c.price}
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: mid.creamSoft,
                    letterSpacing: "0.14em",
                  }}
                >
                  {c.unit}
                </span>
                <span
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    color: mid.creamSoft,
                    letterSpacing: "0.14em",
                    marginTop: 4,
                  }}
                >
                  USD · NO CONTRACT
                </span>
              </div>
            </div>
            <div
              style={{
                height: 1,
                background: c.popular ? mid.line : mid.lineSoft,
                margin: "24px 0",
              }}
            />
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              {c.features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    gap: 14,
                    alignItems: "center",
                    fontFamily: ARCHIVO_R,
                    fontSize: 14,
                    color: mid.cream,
                  }}
                >
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      flex: "0 0 14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7l3.5 3.5L12 3.5"
                        stroke={mid.greenHi}
                        strokeWidth="2"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/book"
              style={{
                marginTop: 28,
                width: "100%",
                background: c.popular ? mid.green : "transparent",
                color: c.popular ? mid.greenInk : mid.cream,
                border: c.popular ? "none" : `1px solid ${mid.royal}`,
                padding: "15px 0",
                fontFamily: ARCHIVO_R,
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: 2,
                cursor: "pointer",
                textDecoration: "none",
                textAlign: "center",
                display: "block",
                boxSizing: "border-box",
              }}
            >
              {c.popular ? "Claim a Slot →" : "Get Started →"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
