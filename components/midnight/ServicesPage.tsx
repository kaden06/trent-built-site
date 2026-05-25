"use client";

import { useState } from "react";
import Link from "next/link";
import BarbellStamp from "@/components/BarbellStamp";
import { MidEyebrow, MidDivider } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

type Tier = {
  id: string;
  name: string;
  tag: string;
  price: string;
  unit: string;
  blurb: string;
  forWho: string;
  features: string[];
  week: { d: string; l: string }[];
  fit: string[];
  notFit: string[];
  popular: boolean;
  cta: string;
};

const TIERS: Tier[] = [
  {
    id: "in-person",
    name: "In-Person Training",
    tag: "IN-PERSON",
    price: "$120",
    unit: "PER SESSION",
    blurb: "In person. You, the bar, my eyes — and a program built to your starting line.",
    forWho: "Trainees within 30 miles of Denver who want their form watched in real time and don't want to film themselves.",
    features: [
      "Initial movement screen + assessment",
      "Custom 4-week training blocks",
      "Weekly progression review",
      "Form correction on the floor",
      "Adjustments to your real schedule",
      "Direct text access between sessions",
      "Optional nutrition habits layer",
      "No contracts — pay session by session",
    ],
    week: [
      { d: "MON", l: "Lower body · main" },
      { d: "TUE", l: "rest / mobility homework" },
      { d: "WED", l: "Upper body · push" },
      { d: "THU", l: "rest" },
      { d: "FRI", l: "Upper body · pull" },
      { d: "SAT", l: "optional · accessory + conditioning" },
      { d: "SUN", l: "rest" },
    ],
    fit: [
      "You learn faster with a coach next to the bar",
      "You can commit to 1–2 fixed weekly slots",
      "You're returning from injury and want eyes on it",
    ],
    notFit: [
      "You travel more than 8 days a month",
      "You want to train exclusively at home",
      "You need 24/7 messaging access (pick Online)",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    id: "online",
    name: "Online Coaching",
    tag: "REMOTE",
    price: "$249",
    unit: "PER MONTH",
    blurb: "Programmed weekly. Form reviews on tape. Real text-line accountability.",
    forWho: "Trainees anywhere who train consistently and want a real coach in the loop — not a generic app.",
    features: [
      "Custom 4-week blocks delivered Sunday",
      "Form review within 24 hours, on tape",
      "Weekly check-in via text or video",
      "Direct text access — Mon–Sat",
      "Programming adjusts to travel + work",
      "Movement screen via video at intake",
      "Quarterly strategy session, 30 min",
      "Pause anytime — no penalty",
    ],
    week: [
      { d: "MON", l: "Lower · main lift (you film)" },
      { d: "TUE", l: "Conditioning · 25 min" },
      { d: "WED", l: "Upper · push (form review by 6pm)" },
      { d: "THU", l: "rest / mobility homework" },
      { d: "FRI", l: "Upper · pull" },
      { d: "SAT", l: "Accessory + conditioning (optional)" },
      { d: "SUN", l: "check-in + next week drops" },
    ],
    fit: [
      "You already train consistently 3–5 days a week",
      "You'll film your main lifts most weeks",
      "You want a coach who actually reads your messages",
    ],
    notFit: [
      "You need someone to drag you to the gym",
      "You haven't lifted in a year (start In-Person)",
      "You want a generic 12-week PDF",
    ],
    popular: true,
    cta: "Claim a Slot",
  },
  {
    id: "nutrition",
    name: "Nutrition Coaching",
    tag: "NUTRITION",
    price: "$179",
    unit: "PER MONTH",
    blurb: "No crash plans. Habits that survive your job, your travel, your week.",
    forWho: "Anyone whose nutrition is the limiting factor — training is in order but the eating isn't catching up.",
    features: [
      "Intake — 90 min on your eating, sleep, work",
      "Two habit targets at a time, no more",
      "Macro targets when you want them",
      "Weekly written check-ins",
      "Adjustments as you progress",
      "Travel + dining-out playbooks",
      "No food tracking required",
      "Pause anytime",
    ],
    week: [
      { d: "MON", l: "Plan the protein anchor for the week" },
      { d: "TUE", l: "Habit 1 check (e.g. 3L water)" },
      { d: "WED", l: "Halfway tracker · adjust if needed" },
      { d: "THU", l: "Habit 2 check" },
      { d: "FRI", l: "Eating-out plan for the weekend" },
      { d: "SAT", l: "Sunday-night prep window" },
      { d: "SUN", l: "Written check-in · next week drops" },
    ],
    fit: [
      "You eat fine 70% of the time and unravel on weekends",
      "You're tired of macro apps you stop using by day 12",
      "You want to learn how to feed yourself, not follow a plan",
    ],
    notFit: [
      "You have a clinical eating disorder (see a dietitian)",
      "You want a meal plan to follow rigidly",
      "You're not willing to share weekly check-ins",
    ],
    popular: false,
    cta: "Get Started",
  },
];

function ServicesHeader() {
  return (
    <section style={{ padding: "96px 56px 80px", position: "relative", background: mid.bg }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="svc-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" stroke={mid.cream} strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-grid)" />
      </svg>
      <MidEyebrow no="03" title="SERVICES & PRICING" />
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64, alignItems: "flex-end", position: "relative" }}>
        <h1 style={{ fontFamily: ARCHIVO, fontSize: 108, lineHeight: 0.92, letterSpacing: "-0.02em", margin: 0, color: mid.cream }}>
          PICK THE LANE.<br />
          <span style={{ color: mid.greenHi }}>SHOW UP EITHER WAY.</span>
        </h1>
        <div>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, lineHeight: 1.6, margin: 0, maxWidth: 380 }}>
            Three tiers, month-to-month. No contracts. No setup fees. Switch lanes or pause when life moves — I&apos;d rather have you back in three months than locked in for six.
          </p>
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["MONTH-TO-MONTH", "NO SETUP FEE", "PAUSE ANYTIME", "3 SLOTS OPEN"].map((t) => (
              <span key={t} style={{ fontFamily: MONO, fontSize: 10, color: mid.cream, letterSpacing: "0.14em", background: mid.surface, border: `1px solid ${mid.line}`, padding: "6px 10px" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 56, display: "flex", gap: 0, border: `1px solid ${mid.line}`, background: mid.surface }}>
        {TIERS.map((t, i) => (
          <a key={t.id} href={`#${t.id}`} style={{
            flex: 1, padding: "20px 24px",
            borderLeft: i > 0 ? `1px solid ${mid.line}` : "none",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            textDecoration: "none", color: "inherit", cursor: "pointer",
          }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: mid.royal, letterSpacing: "0.16em", marginBottom: 6 }}>0{i + 1} · {t.tag}</div>
              <div style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.005em" }}>{t.name}</div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontFamily: ARCHIVO, fontSize: 28, color: t.popular ? mid.greenHi : mid.cream, letterSpacing: "-0.01em" }}>{t.price}</span>
              <span style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em" }}>{t.unit}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function TierSection({ tier, index }: { tier: Tier; index: number }) {
  const isPop = tier.popular;
  return (
    <section id={tier.id} style={{
      padding: "96px 56px",
      background: isPop ? mid.bgDeep : mid.bg,
      position: "relative",
      borderTop: isPop ? `4px solid ${mid.green}` : "none",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.7fr 1fr", gap: 64, marginBottom: 56 }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 11, color: isPop ? mid.greenHi : mid.royal, letterSpacing: "0.18em", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 1, background: isPop ? mid.greenHi : mid.royal }} />
            TIER 0{index + 1} · {tier.tag}
            {isPop && <span style={{ background: mid.green, color: mid.cream, padding: "4px 10px", fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 10, letterSpacing: "0.16em", marginLeft: 6 }}>★ MOST POPULAR</span>}
          </div>
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, lineHeight: 0.95, letterSpacing: "-0.015em", margin: 0 }}>
            {tier.name}
          </h2>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, lineHeight: 1.55, marginTop: 18, maxWidth: 380 }}>
            {tier.blurb}
          </p>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamSoft, lineHeight: 1.6, marginTop: 14, maxWidth: 380, fontStyle: "italic" }}>
            For who · {tier.forWho}
          </p>
        </div>
        <div style={{ background: mid.surface, border: `1px solid ${isPop ? mid.green : mid.line}`, padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 240 }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.14em", marginBottom: 6 }}>STARTING AT</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span style={{ fontFamily: ARCHIVO, fontSize: 128, color: isPop ? mid.greenHi : mid.cream, lineHeight: 0.88, letterSpacing: "-0.03em" }}>{tier.price}</span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontFamily: MONO, fontSize: 12, color: mid.creamSoft, letterSpacing: "0.14em" }}>{tier.unit}</span>
                <span style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em", marginTop: 4 }}>USD · NO CONTRACT</span>
              </div>
            </div>
          </div>
          <Link href="/book" style={{
            marginTop: 28, width: "100%",
            background: isPop ? mid.green : "transparent",
            color: isPop ? mid.greenInk : mid.cream,
            border: isPop ? "none" : `1px solid ${mid.royal}`,
            padding: "18px 0",
            fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 14, letterSpacing: "0.12em",
            textTransform: "uppercase", borderRadius: 2, cursor: "pointer",
            textDecoration: "none", textAlign: "center", display: "block", boxSizing: "border-box",
          }}>{tier.cta} →</Link>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "28px 32px" }}>
          <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", marginBottom: 18 }}>WHAT&apos;S INCLUDED</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px 24px" }}>
            {tier.features.map((f) => (
              <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream, lineHeight: 1.5 }}>
                <span style={{ width: 14, height: 14, flex: "0 0 14px", marginTop: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7l3.5 3.5L12 3.5" stroke={mid.greenHi} strokeWidth="2" strokeLinecap="square" /></svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "28px 32px" }}>
          <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", marginBottom: 18 }}>SAMPLE WEEK</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {tier.week.map((d, i) => (
              <div key={d.d} style={{
                display: "grid", gridTemplateColumns: "60px 1fr", gap: 16,
                padding: "10px 0", borderTop: i > 0 ? `1px solid ${mid.lineSoft}` : "none",
                alignItems: "baseline",
              }}>
                <span style={{ fontFamily: MONO, fontSize: 11, color: mid.royal, letterSpacing: "0.18em" }}>{d.d}</span>
                <span style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream, lineHeight: 1.5 }}>{d.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24 }}>
        <div style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "28px 32px" }}>
          <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, background: mid.greenHi }} />
            BEST FIT IF
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {tier.fit.map((f) => (
              <li key={f} style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream, lineHeight: 1.55, paddingLeft: 18, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: 9, width: 8, height: 1, background: mid.greenHi }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: mid.bgDeep, border: `1px solid ${mid.line}`, padding: "28px 32px" }}>
          <div style={{ fontFamily: MONO, fontSize: 11, color: mid.royal, letterSpacing: "0.18em", marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 8, height: 8, background: mid.royal, transform: "rotate(45deg)" }} />
            NOT THE RIGHT FIT IF
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
            {tier.notFit.map((f) => (
              <li key={f} style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamDim, lineHeight: 1.55, paddingLeft: 18, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, top: 9, width: 8, height: 1, background: mid.royal }} />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CompareTable() {
  const rows = [
    { label: "FORMAT", vals: ["In person · Denver", "Online · anywhere", "Online · anywhere"] },
    { label: "FREQUENCY", vals: ["1–2 sessions/week", "Weekly programs", "Weekly check-ins"] },
    { label: "RESPONSE TIME", vals: ["Live + text", "< 24h form review", "< 24h written"] },
    { label: "PROGRAMMING", vals: ["Built session-by-session", "Custom 4-week blocks", "Habit + macro targets"] },
    { label: "ACCOUNTABILITY", vals: ["On the floor", "Text + weekly check-in", "Written check-ins"] },
    { label: "PRICE", vals: ["$120 / session", "$249 / month", "$179 / month"] },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <MidEyebrow no="04" title="COMPARE AT A GLANCE" />
      <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "8px 0 40px", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
        Three tiers,<br />
        <span style={{ color: mid.greenHi }}>one job.</span>
      </h2>
      <div style={{ border: `1px solid ${mid.line}`, background: mid.surface }}>
        <div style={{ display: "grid", gridTemplateColumns: "180px repeat(3, 1fr)", borderBottom: `1px solid ${mid.line}` }}>
          <div style={{ padding: "20px 24px", fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.18em" }}>METRIC</div>
          {TIERS.map((t, i) => (
            <div key={t.id} style={{
              padding: "20px 24px",
              borderLeft: `1px solid ${mid.line}`,
              background: t.popular ? mid.bgDeep : "transparent",
              position: "relative",
            }}>
              {t.popular && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: mid.green }} />}
              <div style={{ fontFamily: MONO, fontSize: 10, color: t.popular ? mid.greenHi : mid.royal, letterSpacing: "0.18em" }}>TIER 0{i + 1}</div>
              <div style={{ fontFamily: ARCHIVO, fontSize: 20, color: mid.cream, marginTop: 4, letterSpacing: "-0.005em" }}>{t.name}</div>
            </div>
          ))}
        </div>
        {rows.map((r, i) => (
          <div key={r.label} style={{
            display: "grid", gridTemplateColumns: "180px repeat(3, 1fr)",
            borderTop: i > 0 ? `1px solid ${mid.lineSoft}` : "none",
          }}>
            <div style={{ padding: "16px 24px", fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.16em" }}>{r.label}</div>
            {r.vals.map((v, vi) => (
              <div key={vi} style={{
                padding: "16px 24px", borderLeft: `1px solid ${mid.line}`,
                fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream,
                background: TIERS[vi].popular ? mid.bgDeep : "transparent",
              }}>{v}</div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function AddOns() {
  const items = [
    { name: "Single form review", price: "$45", blurb: "You film a lift, I send back a written breakdown within 24 hours. One-off, no commitment." },
    { name: "Movement screen", price: "$95", blurb: "60-min in-person assessment with a written summary and three corrective drills you can run on your own." },
    { name: "Gym tour + first lift", price: "$60", blurb: "First time in a real gym? I'll walk you through the floor and run one session of the basics." },
    { name: "4-week sprint", price: "$320", blurb: "A short, focused block for one goal — peak a lift, prep for a race, get back after a layoff. Not ongoing." },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
        <div>
          <MidEyebrow no="05" title="ADD-ONS" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "8px 0 0", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            One-off work,<br />
            <span style={{ color: mid.greenHi }}>no roster spot needed.</span>
          </h2>
        </div>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamDim, maxWidth: 320, lineHeight: 1.55, paddingBottom: 6 }}>
          Sometimes you don&apos;t need a month of coaching. You need one thing handled.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
        {items.map((a, i) => (
          <div key={a.name} style={{
            background: mid.surface, border: `1px solid ${mid.line}`,
            borderLeft: i > 0 ? "none" : `1px solid ${mid.line}`,
            padding: "28px 24px",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, marginBottom: 14 }}>
              <span style={{ fontFamily: MONO, fontSize: 10, color: mid.royal, letterSpacing: "0.18em" }}>ADD-ON 0{i + 1}</span>
              <span style={{ fontFamily: ARCHIVO, fontSize: 28, color: mid.greenHi, lineHeight: 1, letterSpacing: "-0.01em" }}>{a.price}</span>
            </div>
            <div style={{ fontFamily: ARCHIVO, fontSize: 20, color: mid.cream, letterSpacing: "-0.005em" }}>{a.name}</div>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 13, color: mid.creamDim, lineHeight: 1.6, marginTop: 12 }}>{a.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Consult · 30 min", d: "Free call. Where you are, what's worked, what hasn't. No sales pitch — honest read on whether we're a fit." },
    { n: "02", t: "Recommendation", d: "Within 24 hours: which tier fits your week, an estimated schedule, and a clear price. Yes or no, your call." },
    { n: "03", t: "First 4-week block", d: "Movement screen, baselines, and your first programmed block. We start light and build." },
    { n: "04", t: "Re-check at week 4", d: "Adjust the program, review what stuck and what didn't, set the next block. Continue or pause — either is fine." },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <MidEyebrow no="06" title="WHAT HAPPENS NEXT" />
      <h2 style={{ fontFamily: ARCHIVO, fontSize: 64, color: mid.cream, margin: "8px 0 48px", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
        After you click Book Now.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
        {steps.map((s) => (
          <div key={s.n} style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "28px 24px" }}>
            <div style={{
              width: 44, height: 44,
              border: `1px solid ${mid.greenHi}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: MONO, fontSize: 14, color: mid.greenHi, letterSpacing: "0.08em",
              marginBottom: 18,
            }}>{s.n}</div>
            <div style={{ fontFamily: ARCHIVO, fontSize: 20, color: mid.cream, letterSpacing: "-0.005em" }}>{s.t}</div>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 13, color: mid.creamDim, lineHeight: 1.65, marginTop: 12 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "How does pricing work? Are there setup fees?", a: "No setup fees, no contracts. In-Person is billed per session. Online and Nutrition are month-to-month — your card runs on the day you started. Pause or cancel anytime before the next charge." },
    { q: "What's your refund policy?", a: "If you book a session and have to cancel more than 24 hours out, you get a full refund or reschedule. Inside 24 hours, half. For monthly tiers, you can cancel before the next billing date — no partial refunds mid-month." },
    { q: "Can I pause my coaching?", a: "Yes. I'd rather you pause than burn out. Tell me a week ahead and we'll freeze billing. The program waits for you." },
    { q: "Can I switch tiers?", a: "Anytime. Most people move between tiers depending on the season — Online in summer, In-Person in winter, Nutrition layered on when needed. Talk to me, we'll figure out the math." },
    { q: "Online vs in-person — which should I pick?", a: "In-person if you're within driving distance and learn faster with eyes on the bar. Online if you train consistently already and want a real coach in the loop. If you're unsure, book a consult — I'll tell you which one fits your week." },
    { q: "Where do you train clients in person?", a: "Out of a private studio in the Denver area, Colorado. Address on file once you're booked. For Online, you train at whatever gym you already use — we'll work around the equipment you have." },
  ];
  const [open, setOpen] = useState<number>(0);
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 64, alignItems: "flex-start" }}>
        <div>
          <MidEyebrow no="07" title="FAQ" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "8px 0 0", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            Questions<br />
            <span style={{ color: mid.greenHi }}>worth asking.</span>
          </h2>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamDim, lineHeight: 1.6, marginTop: 20, maxWidth: 320 }}>
            Direct answers. If yours isn&apos;t here, text it on the contact form — I&apos;ll respond within 24 hours.
          </p>
        </div>
        <div style={{ border: `1px solid ${mid.line}`, background: mid.surface }}>
          {items.map((it, i) => (
            <div key={i} style={{ borderTop: i > 0 ? `1px solid ${mid.lineSoft}` : "none" }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{
                  width: "100%", background: "transparent", border: "none", color: "inherit",
                  textAlign: "left", padding: "22px 28px", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
                }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 18 }}>
                  <span style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", minWidth: 22 }}>0{i + 1}</span>
                  <span style={{ fontFamily: ARCHIVO, fontSize: 18, color: mid.cream, letterSpacing: "-0.005em" }}>{it.q}</span>
                </div>
                <span style={{ fontFamily: MONO, fontSize: 18, color: mid.greenHi, width: 22, height: 22, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${mid.greenHi}` }}>{open === i ? "–" : "+"}</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 28px 24px 68px" }}>
                  <p style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.creamDim, lineHeight: 1.65, margin: 0, maxWidth: 640 }}>{it.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesCTA() {
  return (
    <section style={{ padding: "128px 56px", background: mid.bg, borderTop: `1px solid ${mid.line}`, borderBottom: `1px solid ${mid.line}`, position: "relative", overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="svc-cta" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="22" stroke={mid.greenHi} strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#svc-cta)" />
      </svg>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
          <span style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.32em" }}>BOOK THE CONSULT</span>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
        </div>
        <BarbellStamp size={120} color={mid.greenHi} bg={mid.bg} />
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 96, color: mid.cream, letterSpacing: "-0.02em", lineHeight: 0.92, margin: 0 }}>
          30 MINUTES.<br />
          <span style={{ color: mid.greenHi }}>NO PRESSURE.</span>
        </h2>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 16, color: mid.creamDim, maxWidth: 540, lineHeight: 1.6, margin: 0 }}>
          Free call. We&apos;ll talk about where you are, what&apos;s worked, what hasn&apos;t, and whether we&apos;d actually be a good fit. If not, I&apos;ll point you somewhere better.
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Link href="/book" style={{ background: mid.green, color: mid.greenInk, border: "none", padding: "18px 28px", fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 14, letterSpacing: "0.10em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            Book a Free Consultation
            <span style={{ width: 24, height: 1, background: mid.greenInk }} />
            <span>→</span>
          </Link>
          <Link href="/about" style={{ background: "transparent", color: mid.cream, border: `1px solid ${mid.creamSoft}`, padding: "18px 28px", fontFamily: ARCHIVO_R, fontWeight: 600, fontSize: 14, letterSpacing: "0.10em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>About Trent</Link>
        </div>
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <ServicesHeader />
      <MidDivider no="03" />
      {TIERS.map((t, i) => (
        <div key={t.id}>
          <TierSection tier={t} index={i} />
          {i < TIERS.length - 1 && <MidDivider no={`0${i + 4}`} />}
        </div>
      ))}
      <MidDivider no="06" />
      <CompareTable />
      <MidDivider no="07" />
      <AddOns />
      <MidDivider no="08" />
      <Process />
      <MidDivider no="09" />
      <FAQ />
      <ServicesCTA />
    </>
  );
}
