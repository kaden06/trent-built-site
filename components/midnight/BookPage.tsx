"use client";

import { useRef, useState } from "react";
import { MidEyebrow, MidDivider } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

const DAYS = [
  { d: "MON", n: "02", slots: ["07:30", "12:00", "17:30"], dis: [false, false, false] },
  { d: "TUE", n: "03", slots: ["08:00", "12:30"], dis: [false, true] },
  { d: "WED", n: "04", slots: ["07:30", "17:30"], dis: [true, false] },
  { d: "THU", n: "05", slots: ["12:00", "17:30"], dis: [false, false] },
  { d: "FRI", n: "06", slots: ["07:30", "12:00"], dis: [false, false] },
  { d: "SAT", n: "07", slots: ["09:00", "11:00"], dis: [false, false] },
];

function slotLabel(sel: { dayIdx: number; slotIdx: number }) {
  const day = DAYS[sel.dayIdx];
  return `${day.d} JUN ${day.n} · ${day.slots[sel.slotIdx]} MT`;
}

function BookHeader() {
  return (
    <section style={{ padding: "96px 56px 80px", position: "relative", background: mid.bg }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="book-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" stroke={mid.cream} strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#book-grid)" />
      </svg>
      <MidEyebrow no="06" title="BOOK A CONSULTATION" />
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "flex-end", position: "relative" }}>
        <div>
          <h1 style={{ fontFamily: ARCHIVO, fontSize: 108, lineHeight: 0.92, letterSpacing: "-0.02em", margin: 0, color: mid.cream }}>
            30 MINUTES.<br />
            <span style={{ color: mid.greenHi }}>NO PRESSURE.</span>
          </h1>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 18, lineHeight: 1.6, color: mid.creamDim, marginTop: 28, maxWidth: 560 }}>
            Free call. We&apos;ll talk about where you are, what&apos;s worked, what hasn&apos;t, and whether we&apos;d actually be a good fit. If not, I&apos;ll point you somewhere better.
          </p>
        </div>
        <div style={{ background: mid.surface, border: `1px solid ${mid.green}`, padding: "28px 32px", position: "relative" }}>
          <div style={{ position: "absolute", top: -1, left: -1, right: -1, height: 3, background: mid.green }} />
          <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", marginBottom: 14 }}>AVAILABILITY · LIVE</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span style={{ fontFamily: ARCHIVO, fontSize: 84, color: mid.greenHi, lineHeight: 0.9, letterSpacing: "-0.02em" }}>03</span>
            <span style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.005em", lineHeight: 1.1 }}>slots open<br />this month</span>
          </div>
          <div style={{ height: 1, background: mid.line, margin: "20px 0" }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.14em" }}>
            <span>UPDATED · TUE 06:00 MT</span>
            <span style={{ color: mid.greenHi, display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 6, height: 6, background: mid.greenHi }} />
              LIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatToExpect() {
  const bullets = [
    { title: "A no-fluff look at your last six months", desc: "We'll walk your actual training history — what you ran, what stuck, what fell off and why." },
    { title: "An honest read on which tier fits your week", desc: "In-person, online, or nutrition — sometimes all three. Sometimes none of them. I'll say which." },
    { title: "A sample week of programming you can keep", desc: "Even if we don't end up working together, you walk away with a week of work that's actually yours." },
    { title: "Direct answer on availability, scheduling, price", desc: "No follow-up emails, no 'let me check.' You'll leave the call knowing if we're starting Monday or not." },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <MidEyebrow no="07" title="WHAT TO EXPECT" />
      <h2 style={{ fontFamily: ARCHIVO, fontSize: 64, color: mid.cream, margin: "6px 0 56px", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
        What you get<br />
        <span style={{ color: mid.greenHi }}>in 30 minutes.</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "28px 32px", display: "flex", gap: 20 }}>
            <div style={{
              width: 56, height: 56, flex: "0 0 56px",
              border: `1px solid ${mid.greenHi}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: MONO, fontSize: 14, color: mid.greenHi, letterSpacing: "0.08em",
            }}>0{i + 1}</div>
            <div>
              <div style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.005em", lineHeight: 1.2 }}>{b.title}</div>
              <p style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamDim, lineHeight: 1.65, margin: "10px 0 0" }}>{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

type Selected = { dayIdx: number; slotIdx: number } | null;

function WeekView({
  selected,
  onSelect,
}: {
  selected: Selected;
  onSelect: (sel: Selected) => void;
}) {
  const days = DAYS;
  return (
    <div style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "24px 24px 20px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
        <div style={{ fontFamily: ARCHIVO, fontSize: 20, color: mid.cream, letterSpacing: "-0.005em" }}>JUN 02 — JUN 07</div>
        <div style={{ display: "flex", gap: 6 }}>
          <button style={{ background: "transparent", border: `1px solid ${mid.line}`, color: mid.cream, width: 28, height: 28, fontFamily: MONO, fontSize: 14, cursor: "pointer" }} aria-label="Previous week">‹</button>
          <button style={{ background: "transparent", border: `1px solid ${mid.line}`, color: mid.cream, width: 28, height: 28, fontFamily: MONO, fontSize: 14, cursor: "pointer" }} aria-label="Next week">›</button>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8 }}>
        {days.map((day, di) => (
          <div key={day.d} style={{ background: mid.bg, border: `1px solid ${mid.line}`, padding: "12px 8px", display: "flex", flexDirection: "column", gap: 10, minHeight: 200 }}>
            <div style={{ textAlign: "center", borderBottom: `1px solid ${mid.lineSoft}`, paddingBottom: 8 }}>
              <div style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em" }}>{day.d}</div>
              <div style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.01em" }}>{day.n}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {day.slots.map((t, si) => {
                const isSel = !!selected && selected.dayIdx === di && selected.slotIdx === si;
                const isDis = day.dis[si];
                return (
                  <button
                    key={si}
                    onClick={() => !isDis && onSelect({ dayIdx: di, slotIdx: si })}
                    disabled={isDis}
                    style={{
                      background: isSel ? mid.green : (isDis ? "transparent" : mid.bg),
                      color: isSel ? mid.greenInk : (isDis ? mid.creamSoft : mid.cream),
                      border: isSel ? "none" : `1px solid ${isDis ? mid.lineSoft : mid.greenHi}`,
                      padding: "6px 0", textAlign: "center",
                      fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em",
                      cursor: isDis ? "not-allowed" : "pointer",
                      textDecoration: isDis ? "line-through" : "none",
                      opacity: isDis ? 0.5 : 1,
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em" }}>ALL TIMES MT · TRENT DOESN&apos;T TRAIN SUN</div>
        {selected ? (
          <div style={{ fontFamily: MONO, fontSize: 10, color: mid.greenHi, letterSpacing: "0.14em" }}>
            ✓ {days[selected.dayIdx].d} {days[selected.dayIdx].slots[selected.slotIdx]} SELECTED
          </div>
        ) : null}
      </div>
    </div>
  );
}

function CalendarSection({
  selected,
  onSelect,
}: {
  selected: Selected;
  onSelect: (sel: Selected) => void;
}) {
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <MidEyebrow no="08" title="PICK A TIME" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "flex-end", marginBottom: 32 }}>
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 64, color: mid.cream, margin: 0, lineHeight: 0.95, letterSpacing: "-0.015em" }}>
          This week,<br />
          <span style={{ color: mid.greenHi }}>Mon through Sat.</span>
        </h2>
        <p style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.creamDim, lineHeight: 1.6, margin: 0, maxWidth: 520 }}>
          Click a time chip to pick your slot. Greyed-out chips are already taken. I don&apos;t train Sundays. Use the arrows to look ahead. The intake form drops below once you pick.
        </p>
      </div>
      <WeekView selected={selected} onSelect={onSelect} />
    </section>
  );
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  goal: string;
  message: string;
};

function BookForm({ slotText }: { slotText: string }) {
  const goals = ["Weight Loss", "Muscle Gain", "Athletic Performance", "General Fitness"];
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", goal: "", message: "" });
  const [sent, setSent] = useState(false);

  const fields: { label: string; key: keyof Omit<FormState, "goal" | "message">; ph: string }[] = [
    { label: "Name", key: "name", ph: "Your name" },
    { label: "Email", key: "email", ph: "you@email.com" },
    { label: "Phone", key: "phone", ph: "(000) 000-0000" },
  ];

  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "flex-start" }}>
        <div>
          <MidEyebrow no="09" title="INTAKE FORM" />
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: mid.green, color: mid.greenInk,
            padding: "8px 14px", marginBottom: 18,
            fontFamily: MONO, fontSize: 11, letterSpacing: "0.16em",
          }}>
            <span style={{ width: 6, height: 6, background: mid.greenInk }} />
            BOOKING · {slotText}
          </div>
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "6px 0 0", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            Tell me<br />
            <span style={{ color: mid.greenHi }}>where you are.</span>
          </h2>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.creamDim, lineHeight: 1.6, marginTop: 22, maxWidth: 400 }}>
            Three fields, a goal, and whatever else you want me to know before the call. If you skip the message, that&apos;s fine — we&apos;ll get to it in person.
          </p>
          <div style={{ marginTop: 32, padding: "20px 24px", background: mid.surface, border: `1px solid ${mid.line}`, position: "relative", maxWidth: 400 }}>
            <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: 3, background: mid.greenHi }} />
            <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em", marginBottom: 8 }}>NO SALES CALL</div>
            <div style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream, lineHeight: 1.5 }}>
              If we&apos;re not a fit, I&apos;ll tell you on the call and point you somewhere better. Reply within 24h, always.
            </div>
          </div>
        </div>
        <div style={{ background: mid.surface, padding: "36px 36px 32px", border: `1px solid ${mid.royal}`, position: "relative", borderRadius: 2 }}>
          {sent ? (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <div style={{ width: 64, height: 64, margin: "0 auto 20px", borderRadius: 32, border: `2px solid ${mid.greenHi}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden><path d="M6 16l7 7 13-13" stroke={mid.greenHi} strokeWidth="3" strokeLinecap="round" /></svg>
              </div>
              <div style={{ fontFamily: ARCHIVO, fontSize: 28, color: mid.greenHi, letterSpacing: "-0.01em" }}>Booked.</div>
              <div style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.creamDim, marginTop: 12, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
                Reply within 24 hours. Check {form.email || "your inbox"} — confirmation and a short intake doc on the way.
              </div>
              <button
                onClick={() => setSent(false)}
                style={{ marginTop: 28, background: "transparent", color: mid.cream, border: `1px solid ${mid.creamSoft}`, padding: "12px 20px", fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2 }}
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, gap: 12, flexWrap: "wrap" }}>
                <div style={{ fontFamily: MONO, fontSize: 11, color: mid.royal, letterSpacing: "0.18em" }}>INTAKE FORM / NEW CLIENT</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.18em" }}>✓ {slotText}</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {fields.map((f) => (
                  <div key={f.key}>
                    <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.14em", marginBottom: 8 }}>{f.label.toUpperCase()}</div>
                    <input
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      placeholder={f.ph}
                      style={{
                        width: "100%", boxSizing: "border-box",
                        background: mid.bg, border: `1px solid ${mid.line}`, padding: "14px 16px",
                        fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream, outline: "none",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                ))}
                <div>
                  <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.14em", marginBottom: 8 }}>PRIMARY GOAL</div>
                  <div style={{ position: "relative" }}>
                    <select
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      style={{
                        width: "100%", appearance: "none", boxSizing: "border-box",
                        background: mid.bg, border: `1px solid ${mid.line}`, padding: "14px 16px",
                        fontFamily: ARCHIVO_R, fontSize: 14, color: form.goal ? mid.cream : mid.creamSoft, outline: "none",
                        borderRadius: 2, cursor: "pointer",
                      }}
                    >
                      <option value="">Select one…</option>
                      {goals.map((o) => (
                        <option key={o} value={o} style={{ color: "#111" }}>{o}</option>
                      ))}
                    </select>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ position: "absolute", right: 16, top: 22, pointerEvents: "none" }} aria-hidden>
                      <path d="M1 1l4 4 4-4" stroke={mid.creamSoft} strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 22 }}>
                <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.14em", marginBottom: 8 }}>MESSAGE <span style={{ color: mid.creamSoft, textTransform: "none" }}>· optional</span></div>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Anything I should know before the call — current routine, what's worked, what's not…"
                  style={{
                    width: "100%", boxSizing: "border-box",
                    background: mid.bg, border: `1px solid ${mid.line}`, padding: "14px 16px",
                    fontFamily: ARCHIVO_R, fontSize: 14, color: mid.cream,
                    minHeight: 110, resize: "vertical", outline: "none", borderRadius: 2,
                  }}
                />
              </div>
              <button
                onClick={() => setSent(true)}
                style={{
                  marginTop: 24, width: "100%",
                  background: mid.green, color: mid.greenInk, border: "none",
                  padding: "18px 0",
                  fontFamily: ARCHIVO_R, fontWeight: 700, fontSize: 15, letterSpacing: "0.12em",
                  textTransform: "uppercase", borderRadius: 2, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 14,
                }}
              >
                Send &amp; Book My Slot
                <span style={{ fontFamily: MONO, fontWeight: 400 }}>→</span>
              </button>
              <div style={{ marginTop: 14, fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.12em", textAlign: "center" }}>
                REPLY WITHIN 24H · NO SALES CALL
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function AfterBook() {
  const steps = [
    { n: "01", t: "Confirmation email", d: "Within minutes. Calendar invite + the call link." },
    { n: "02", t: "Short intake doc", d: "Five questions, ten minutes. Helps me show up prepared." },
    { n: "03", t: "First session scheduled", d: "After the call, if we're a fit. No follow-up required." },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <MidEyebrow no="10" title="AFTER YOU BOOK" />
      <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "6px 0 48px", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
        What happens<br />
        <span style={{ color: mid.greenHi }}>in the next 24 hours.</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {steps.map((s) => (
          <div key={s.n} style={{ background: mid.surface, border: `1px solid ${mid.line}`, padding: "28px 28px" }}>
            <div style={{ width: 44, height: 44, border: `1px solid ${mid.greenHi}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 14, color: mid.greenHi, letterSpacing: "0.08em", marginBottom: 18 }}>{s.n}</div>
            <div style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.005em" }}>{s.t}</div>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 14, color: mid.creamDim, lineHeight: 1.65, marginTop: 12 }}>{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BookFAQ() {
  const items = [
    { q: "How long is the consult?", a: "30 minutes. Sometimes a few minutes less if we both know fast it isn't a fit. I won't pad it." },
    { q: "What should I prepare?", a: "Nothing. If you want to be useful, jot down the last program you ran and how it ended. That's the only thing I'll ask twice." },
    { q: "Is the consult on Zoom or in person?", a: "Default is video. If you're local to Denver and want to come by the studio, just say so on the intake form — happy to do it in person." },
    { q: "Will you try to sell me?", a: "No. If we're a fit I'll tell you the price and we book. If we're not, I'll point you to a coach who fits better. There's no pressure script." },
    { q: "Can I reschedule?", a: "Yes — up to 12 hours before. After that, please give me a heads-up so the slot can open back up for someone else." },
  ];
  const [open, setOpen] = useState<number>(0);
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.6fr 1fr", gap: 64, alignItems: "flex-start" }}>
        <div>
          <MidEyebrow no="11" title="CONSULT FAQ" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 56, color: mid.cream, margin: "6px 0 0", lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            Quick answers<br />
            <span style={{ color: mid.greenHi }}>before you book.</span>
          </h2>
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
                }}
              >
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

export function BookPage() {
  const [selected, setSelected] = useState<Selected>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSelect = (sel: Selected) => {
    const isFirstPick = !selected;
    setSelected(sel);
    if (isFirstPick) {
      // Scroll the freshly-rendered form into view on the first selection.
      requestAnimationFrame(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  return (
    <>
      <BookHeader />
      <MidDivider no="07" />
      <WhatToExpect />
      <MidDivider no="08" />
      <CalendarSection selected={selected} onSelect={handleSelect} />
      {selected && (
        <div ref={formRef}>
          <MidDivider no="09" />
          <BookForm slotText={slotLabel(selected)} />
        </div>
      )}
      <MidDivider no="10" />
      <AfterBook />
      <MidDivider no="11" />
      <BookFAQ />
    </>
  );
}
