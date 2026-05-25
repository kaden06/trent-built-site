"use client";

import { useState } from "react";
import Link from "next/link";
import BarbellStamp from "@/components/BarbellStamp";
import { MidEyebrow, MidStripe, MidDivider } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

function ResultsHeader() {
  return (
    <section style={{ padding: "96px 56px 64px", position: "relative", background: mid.bg }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="res-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" stroke={mid.cream} strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#res-grid)" />
      </svg>
      <MidEyebrow no="04" title="RESULTS" />
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 64, alignItems: "flex-end", position: "relative" }}>
        <h1 style={{ fontFamily: ARCHIVO, fontSize: 108, lineHeight: 0.92, letterSpacing: "-0.02em", margin: 0, color: mid.cream }}>
          What the work<br />
          <span style={{ color: mid.greenHi }}>actually looks like.</span>
        </h1>
        <div>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, lineHeight: 1.6, margin: 0, maxWidth: 380 }}>
            No 30-day transformations. No before/after edits with a different light setup. Just the kind of progress that holds — six months, a year, two years in.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResultsStats() {
  const stats = [
    { n: "200+", l: "CLIENTS COACHED", hi: true },
    { n: "14 MO", l: "AVG TENURE", hi: false },
    { n: "83%", l: "PAST 6 MO", hi: false },
    { n: "08 YR", l: "IN PRACTICE", hi: false },
  ];
  return (
    <section style={{ padding: "0 56px 96px", background: mid.bg }}>
      <div style={{ display: "flex", gap: 0 }}>
        {stats.map((s, i) => (
          <div key={s.l} style={{
            flex: 1, padding: "28px 28px",
            background: s.hi ? mid.surface : "transparent",
            border: `1px solid ${mid.line}`,
            borderLeft: i > 0 ? "none" : `1px solid ${mid.line}`,
            position: "relative",
          }}>
            {s.hi && <div style={{ position: "absolute", top: -1, left: -1, right: -1, height: 3, background: mid.green }} />}
            <div style={{ position: "absolute", top: 10, right: 12, fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.1em" }}>0{i + 1}</div>
            <div style={{ fontFamily: ARCHIVO, fontSize: 52, color: s.hi ? mid.greenHi : mid.cream, lineHeight: 1, letterSpacing: "-0.01em" }}>{s.n}</div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.14em", marginTop: 12 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.16em", marginTop: 14, textAlign: "right" }}>
        UPDATED · TUE 06:00 MT · NUMBERS ROLLING 12 MO
      </div>
    </section>
  );
}

function ResultsGallery() {
  const filters = ["ALL", "STRENGTH", "CONDITIONING", "COACHING", "TRANSFORMATION"];
  const [active, setActive] = useState("ALL");
  const tiles = [
    { tag: "deadlift_block_4.jpg", cap: "PULL DAY · BLOCK 4", cat: "STRENGTH" },
    { tag: "kettlebell_swing.jpg", cap: "CONDITIONING", cat: "CONDITIONING" },
    { tag: "coaching_form.jpg", cap: "FORM CHECK · LIVE", cat: "COACHING" },
    { tag: "back_squat_top.jpg", cap: "BACK SQUAT · TOP SET", cat: "STRENGTH" },
    { tag: "marcus_before_after.jpg", cap: "MARCUS · 14 MO", cat: "TRANSFORMATION" },
    { tag: "sled_push.jpg", cap: "SLED · FRIDAY FINISHER", cat: "CONDITIONING" },
    { tag: "coaching_movement.jpg", cap: "MOVEMENT SCREEN", cat: "COACHING" },
    { tag: "bench_press_pr.jpg", cap: "BENCH · 275 NEW PR", cat: "STRENGTH" },
    { tag: "jen_progress.jpg", cap: "JEN · 6 MO POSTPARTUM", cat: "TRANSFORMATION" },
    { tag: "rower_intervals.jpg", cap: "ROWER · INTERVALS", cat: "CONDITIONING" },
    { tag: "overhead_press.jpg", cap: "STRICT PRESS · TECH", cat: "COACHING" },
    { tag: "david_after.jpg", cap: "DAVID · 9 MO", cat: "TRANSFORMATION" },
  ];
  return (
    <section style={{ padding: "0 56px 96px", background: mid.bg }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: 0, lineHeight: 0.95, letterSpacing: "-0.015em" }}>
          On the floor.
        </h2>
        <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.18em", paddingBottom: 6 }}>
          {tiles.length} PHOTOS · CLICK TO ENLARGE
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
        {filters.map((f) => (
          <button key={f} onClick={() => setActive(f)} style={{
            background: active === f ? mid.green : "transparent",
            color: active === f ? mid.greenInk : mid.cream,
            border: active === f ? "none" : `1px solid ${mid.line}`,
            padding: "10px 16px", borderRadius: 2, cursor: "pointer",
            fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 11, letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}>{f}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {tiles.map((t, i) => {
          const dim = active !== "ALL" && t.cat !== active;
          return (
            <div key={t.tag} style={{
              position: "relative", cursor: "pointer",
              border: `1px solid ${mid.line}`, borderRadius: 4, overflow: "hidden",
              opacity: dim ? 0.25 : 1, transition: "opacity .25s",
            }}>
              <MidStripe label={t.tag} ratio="3/4" tone={i % 2 === 0 ? mid.surface : mid.surfaceHi} angle={i % 2 === 0 ? 45 : -45} />
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0,
                padding: "48px 16px 14px",
                background: "linear-gradient(to top, rgba(11,26,42,0.95), transparent)",
                fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 14, letterSpacing: "0.12em",
                color: mid.cream, textTransform: "uppercase",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ width: 5, height: 5, background: mid.greenHi }} />
                {t.cap}
              </div>
              <div style={{
                position: "absolute", top: 12, right: 12,
                fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em",
                background: "rgba(11,26,42,0.7)", padding: "4px 8px", borderRadius: 2,
              }}>{String(i + 1).padStart(2, "0")}/{tiles.length}</div>
              <div style={{
                position: "absolute", top: 12, left: 12,
                fontFamily: MONO, fontSize: 9, color: mid.greenHi, letterSpacing: "0.18em",
                background: "rgba(11,26,42,0.85)", padding: "4px 8px",
                border: `1px solid ${mid.greenHi}`,
              }}>{t.cat}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Transformations() {
  const cases = [
    {
      name: "MARCUS RIVERA", age: "38", tier: "ONLINE", dur: "14 MONTHS", side: "left",
      paras: [
        "Marcus came in after three programs that all stalled out by month two. Travel-heavy job, two kids, no time for nonsense — and tired of paying for plans he couldn't run.",
        "We started small. Three days a week, a movement screen, a real progression on the main lifts. The first eight weeks were unglamorous. He kept showing up.",
        "Fourteen months later he's still on it. The work is heavier, the diet sustainable, and the recovery framework actually fits his schedule. The number that matters is the consistency, not the deadlift.",
      ],
      numbers: [
        { v: "22 LBS", l: "DOWN" },
        { v: "+120", l: "DEADLIFT LBS" },
        { v: "0", l: "INJURIES" },
      ],
      quote: "I'd done three programs before this one. They all faded by month two. With Trent it stuck — because he actually pays attention.",
    },
    {
      name: "JEN OKAFOR", age: "34", tier: "IN-PERSON", dur: "6 MONTHS", side: "right",
      paras: [
        "Jen came back six years off training, postpartum, with a back that flared every time she tried to run. The brief was simple — be able to chase her kids around the yard again.",
        "We started with movement screen findings and worked under bodyweight for the first month. No barbell yet. The program built around walking, glute activation, single-leg work.",
        "By month six she's running short intervals, lifting twice a week, and the back hasn't gone out once. Six months is a small number, but the trend line is what we care about.",
      ],
      numbers: [
        { v: "0", l: "BACK FLARES" },
        { v: "3X / WK", l: "TRAINING" },
        { v: "5K", l: "PERSONAL BEST" },
      ],
      quote: "Trent built me back into the gym after 6 years off. No drama, no transformation reel — just steady work that fit my actual week.",
    },
    {
      name: "DAVID PARK", age: "42", tier: "ONLINE + NUTRITION", dur: "9 MONTHS", side: "left",
      paras: [
        "David came in lean but underpowered. Triathlon background, never lifted seriously, wanted to add strength without losing his run economy.",
        "We blocked the year into strength accumulation through winter, hypertrophy carryover into spring, then a maintenance + run-volume push through summer. Nutrition layered in at month three.",
        "Nine months in, he's added clean strength to his deadlift and squat without losing a step on the run. The story isn't the lift PRs — it's that he kept paying after the trial.",
      ],
      numbers: [
        { v: "+95", l: "SQUAT LBS" },
        { v: "-1:12", l: "10K PACE" },
        { v: "0", l: "BURNOUT WKS" },
      ],
      quote: "Trent calls me out, in a good way. Programming is real. First coach I've actually kept paying after the trial.",
    },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
        <div>
          <MidEyebrow no="05" title="CASE STUDIES" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 64, color: mid.cream, margin: "6px 0 0", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            Three clients,<br />
            <span style={{ color: mid.greenHi }}>three lanes.</span>
          </h2>
        </div>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamDim, maxWidth: 320, lineHeight: 1.55, paddingBottom: 6 }}>
          Names and numbers used with permission. Photos placeholder until each client clears the final swap.
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {cases.map((c, idx) => {
          const photoLeft = c.side === "left";
          const slug = c.name.toLowerCase().replace(" ", "_");
          const photoCol = (
            <div style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                <div style={{ position: "relative" }}>
                  <MidStripe label={`${slug}_before.jpg`} ratio="4/5" angle={45} />
                  <div style={{ position: "absolute", top: 10, left: 10, fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.18em", background: "rgba(11,26,42,0.85)", padding: "4px 8px" }}>BEFORE</div>
                </div>
                <div style={{ position: "relative" }}>
                  <MidStripe label={`${slug}_after.jpg`} ratio="4/5" angle={-45} tone={mid.surfaceHi} />
                  <div style={{ position: "absolute", top: 10, left: 10, fontFamily: MONO, fontSize: 10, color: mid.greenHi, letterSpacing: "0.18em", background: "rgba(11,26,42,0.85)", padding: "4px 8px", border: `1px solid ${mid.greenHi}` }}>AFTER · {c.dur}</div>
                </div>
              </div>
            </div>
          );
          const textCol = (
            <div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", marginBottom: 12, display: "flex", gap: 14 }}>
                <span>CASE 0{idx + 1}</span>
                <span style={{ color: mid.creamSoft }}>·</span>
                <span style={{ color: mid.royal }}>{c.tier}</span>
                <span style={{ color: mid.creamSoft }}>·</span>
                <span style={{ color: mid.creamSoft }}>{c.dur}</span>
              </div>
              <h3 style={{ fontFamily: ARCHIVO, fontSize: 48, color: mid.cream, lineHeight: 0.95, letterSpacing: "-0.015em", margin: 0 }}>
                {c.name}<span style={{ color: mid.creamSoft, fontSize: 24, marginLeft: 12, letterSpacing: "0" }}>· {c.age}</span>
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
                {c.paras.map((p, i) => (
                  <p key={i} style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: i === 0 ? mid.cream : mid.creamDim, lineHeight: 1.65, margin: 0 }}>{p}</p>
                ))}
              </div>
              <div style={{ display: "flex", gap: 0, marginTop: 28, border: `1px solid ${mid.line}`, background: mid.surface }}>
                {c.numbers.map((n, i) => (
                  <div key={n.l} style={{
                    flex: 1, padding: "16px 18px",
                    borderLeft: i > 0 ? `1px solid ${mid.line}` : "none",
                  }}>
                    <div style={{ fontFamily: ARCHIVO, fontSize: 28, color: mid.greenHi, lineHeight: 1, letterSpacing: "-0.01em" }}>{n.v}</div>
                    <div style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em", marginTop: 6 }}>{n.l}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24, padding: "20px 24px", background: mid.bg, borderLeft: `3px solid ${mid.green}` }}>
                <div style={{ fontFamily: ARCHIVO, fontSize: 18, color: mid.cream, lineHeight: 1.45, letterSpacing: "-0.005em" }}>
                  &ldquo;{c.quote}&rdquo;
                </div>
              </div>
            </div>
          );
          return (
            <div key={c.name} style={{
              background: mid.surface, border: `1px solid ${mid.line}`,
              padding: "40px 40px",
              display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48,
            }}>
              {photoLeft ? (<><div>{photoCol}</div><div>{textCol}</div></>) : (<><div>{textCol}</div><div>{photoCol}</div></>)}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TestimonialsGrid() {
  const items = [
    { stars: 5, body: "I'd done three programs before this one. They all faded by month two. With Trent it stuck — because he actually pays attention. I'm 38, down 22 lbs, and I deadlifted 405 last Tuesday.", name: "Marcus Rivera", role: "ONLINE · 14 MO" },
    { stars: 5, body: "Trent built me back into the gym after 6 years off. Six months in and I can run after my kids without my back tightening up. That's the whole story. No drama, no transformation reel — just steady work that fit my actual week.", name: "Jen Okafor", role: "IN-PERSON · 6 MO" },
    { stars: 5, body: "Trent calls me out, in a good way. Programming is real. He moves things around when work gets brutal and doesn't make a thing of it. First coach I've actually kept paying after the trial.", name: "David Park", role: "ONLINE + NUTRITION · 9 MO" },
    { stars: 5, body: "The check-ins are honest. If I'm slacking he says so, in two sentences, and we adjust. I needed that more than another program.", name: "Ana Brennan", role: "ONLINE · 11 MO" },
    { stars: 5, body: "I came in afraid of barbells. A year later I pull 245 cleanly. Nobody tried to sell me a transformation — they just kept correcting my hip hinge.", name: "Priya Shankar", role: "IN-PERSON · 12 MO" },
    { stars: 5, body: "I travel three weeks out of four. Trent programs around hotel gyms without it ever feeling like a downgrade. The work just keeps moving forward.", name: "Sam Whitford", role: "ONLINE · 8 MO" },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40 }}>
        <div>
          <MidEyebrow no="06" title="WHAT PEOPLE SAY" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "6px 0 0", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            Six people.<br />
            <span style={{ color: mid.greenHi }}>One coach.</span>
          </h2>
        </div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.18em", paddingBottom: 6 }}>
          ALL 5★ · UNEDITED EXCERPTS
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {items.map((q, i) => (
          <div key={i} style={{
            background: mid.surface, border: `1px solid ${mid.line}`,
            padding: "28px 28px", display: "flex", flexDirection: "column", gap: 18,
          }}>
            <div style={{ display: "flex", gap: 5 }}>
              {Array.from({ length: q.stars }).map((_, n) => (
                <svg key={n} width="16" height="16" viewBox="0 0 18 18" fill={mid.greenHi} aria-hidden><path d="M9 1l2.47 5.01L17 6.83l-4 3.9.94 5.5L9 13.63l-4.94 2.6L5 10.73 1 6.83l5.53-.82L9 1z" /></svg>
              ))}
            </div>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.cream, lineHeight: 1.55, margin: 0, flex: 1 }}>
              &ldquo;{q.body}&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: `1px solid ${mid.lineSoft}`, paddingTop: 16, marginTop: "auto" }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, background: mid.surfaceHi, border: `1px solid ${mid.line}` }} />
              <div>
                <div style={{ fontFamily: ARCHIVO, fontSize: 14, color: mid.cream, letterSpacing: "0" }}>{q.name}</div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em", marginTop: 2 }}>{q.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LongView() {
  return (
    <section style={{ padding: "128px 56px", background: mid.bgDeep, borderTop: `1px solid ${mid.line}`, borderBottom: `1px solid ${mid.line}`, position: "relative", overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="res-longview" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="22" stroke={mid.greenHi} strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#res-longview)" />
      </svg>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
          <span style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.32em" }}>THE LONG VIEW</span>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
        </div>
        <BarbellStamp size={140} color={mid.greenHi} bg={mid.bgDeep} />
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 96, color: mid.cream, letterSpacing: "-0.02em", lineHeight: 0.92, margin: 0 }}>
          TRENT BUILT <span style={{ color: mid.greenHi }}>COMPOUND.</span>
        </h2>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, maxWidth: 620, lineHeight: 1.6, margin: 0 }}>
          The numbers above happened over months, not weeks. Outcomes compound when you keep showing up — and a coach who actually adjusts the plan is what makes that possible. The 14-month average tenure is the result, not the marketing.
        </div>
      </div>
    </section>
  );
}

function ResultsCTA() {
  return (
    <section style={{ padding: "128px 56px", background: mid.bg, borderTop: `1px solid ${mid.line}`, borderBottom: `1px solid ${mid.line}`, position: "relative", overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="res-cta" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="22" stroke={mid.greenHi} strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#res-cta)" />
      </svg>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
          <span style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.32em" }}>YOUR TURN</span>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
        </div>
        <BarbellStamp size={120} color={mid.greenHi} bg={mid.bg} />
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 96, color: mid.cream, letterSpacing: "-0.02em", lineHeight: 0.92, margin: 0 }}>
          30 MINUTES.<br />
          <span style={{ color: mid.greenHi }}>NO PRESSURE.</span>
        </h2>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 16, color: mid.creamDim, maxWidth: 540, lineHeight: 1.6, margin: 0 }}>
          Free call. Honest read on whether we&apos;re a fit. If not, I&apos;ll point you somewhere better.
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Link href="/book" style={{ background: mid.green, color: mid.greenInk, border: "none", padding: "18px 28px", fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 14, letterSpacing: "0.10em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            Book a Free Consultation
            <span style={{ width: 24, height: 1, background: mid.greenInk }} />
            <span>→</span>
          </Link>
          <Link href="/services" style={{ background: "transparent", color: mid.cream, border: `1px solid ${mid.creamSoft}`, padding: "18px 28px", fontFamily: ARCHIVO_R, fontWeight: 600, fontSize: 14, letterSpacing: "0.10em", textTransform: "uppercase", borderRadius: 2, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center" }}>See Services</Link>
        </div>
      </div>
    </section>
  );
}

export function ResultsPage() {
  return (
    <>
      <ResultsHeader />
      <ResultsStats />
      <MidDivider no="05" />
      <ResultsGallery />
      <MidDivider no="06" />
      <Transformations />
      <MidDivider no="07" />
      <TestimonialsGrid />
      <LongView />
      <ResultsCTA />
    </>
  );
}
