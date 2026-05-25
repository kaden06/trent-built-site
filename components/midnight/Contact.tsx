"use client";

import { useState } from "react";
import { MidEyebrow } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

const goals = ["Weight Loss", "Muscle Gain", "Athletic Performance", "General Fitness"];
const times = ["Morning", "Afternoon", "Evening"];

function MidField({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 11,
          color: mid.creamSoft,
          letterSpacing: "0.14em",
          marginBottom: 8,
        }}
      >
        {label.toUpperCase()}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          boxSizing: "border-box",
          background: mid.bg,
          border: `1px solid ${mid.line}`,
          padding: "14px 16px",
          fontFamily: ARCHIVO_R,
          fontSize: 14,
          color: mid.cream,
          outline: "none",
          borderRadius: 2,
        }}
      />
    </div>
  );
}

function MidSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: MONO,
          fontSize: 11,
          color: mid.creamSoft,
          letterSpacing: "0.14em",
          marginBottom: 8,
        }}
      >
        {label.toUpperCase()}
      </div>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%",
            appearance: "none",
            boxSizing: "border-box",
            background: mid.bg,
            border: `1px solid ${mid.line}`,
            padding: "14px 16px",
            fontFamily: ARCHIVO_R,
            fontSize: 14,
            color: value ? mid.cream : mid.creamSoft,
            outline: "none",
            borderRadius: 2,
            cursor: "pointer",
          }}
        >
          <option value="">Select one…</option>
          {options.map((o) => (
            <option key={o} value={o} style={{ color: "#111" }}>
              {o}
            </option>
          ))}
        </select>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          style={{ position: "absolute", right: 16, top: 22, pointerEvents: "none" }}
          aria-hidden
        >
          <path
            d="M1 1l4 4 4-4"
            stroke={mid.creamSoft}
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </div>
  );
}

export function MidContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    time: "Afternoon",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const bullets = [
    "A no-fluff look at your last six months of training",
    "An honest read on which tier would fit your week",
    "A sample week of programming you can keep — fit or not",
    "Direct answer on availability, scheduling, and price",
  ];

  return (
    <section id="book" style={{ padding: "96px 56px", background: mid.bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }}>
        <div>
          <MidEyebrow no="06" title="BOOK A CONSULTATION" />
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
            30 MINUTES.
            <br />
            <span style={{ color: mid.greenHi }}>NO PRESSURE.</span>
          </h2>
          <p
            style={{
              fontFamily: ARCHIVO_R,
              fontSize: 16,
              color: mid.creamDim,
              lineHeight: 1.6,
              marginTop: 24,
              maxWidth: 440,
            }}
          >
            We&apos;ll talk about where you are, what&apos;s worked, what hasn&apos;t, and
            whether we&apos;d actually be a good fit. If not, I&apos;ll point you somewhere
            better.
          </p>
          <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 14 }}>
            {bullets.map((b, i) => (
              <div key={b} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 22,
                    height: 22,
                    flex: "0 0 22px",
                    border: `1px solid ${mid.greenHi}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: MONO,
                    fontSize: 11,
                    color: mid.greenHi,
                    marginTop: 1,
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontFamily: ARCHIVO_R,
                    fontSize: 15,
                    color: mid.cream,
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 36,
              padding: "20px 24px",
              background: mid.surface,
              border: `1px solid ${mid.line}`,
              display: "flex",
              alignItems: "center",
              gap: 16,
              position: "relative",
              borderRadius: 2,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: 3,
                background: mid.greenHi,
              }}
            />
            <div
              style={{
                fontFamily: ARCHIVO,
                fontSize: 30,
                color: mid.greenHi,
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              03
            </div>
            <div>
              <div
                style={{
                  fontFamily: ARCHIVO_R,
                  fontSize: 14,
                  color: mid.cream,
                  fontWeight: 700,
                }}
              >
                Slots open this month
              </div>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: mid.creamSoft,
                  letterSpacing: "0.1em",
                  marginTop: 2,
                }}
              >
                UPDATED · TUE 06:00 ET
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: mid.surface,
            padding: "36px 36px 32px",
            border: `1px solid ${mid.royal}`,
            position: "relative",
            borderRadius: 2,
          }}
        >
          {sent ? (
            <div style={{ padding: "40px 0", textAlign: "center" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  margin: "0 auto 20px",
                  borderRadius: 32,
                  border: `2px solid ${mid.greenHi}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path
                    d="M6 16l7 7 13-13"
                    stroke={mid.greenHi}
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  fontFamily: ARCHIVO,
                  fontSize: 28,
                  color: mid.greenHi,
                  letterSpacing: "-0.01em",
                }}
              >
                Booked.
              </div>
              <div
                style={{
                  fontFamily: ARCHIVO_R,
                  fontSize: 15,
                  color: mid.creamDim,
                  marginTop: 12,
                  maxWidth: 360,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Reply within 24 hours. Check {form.email || "your inbox"} — confirmation and a
                short intake doc on the way.
              </div>
              <button
                onClick={() => setSent(false)}
                style={{
                  marginTop: 28,
                  background: "transparent",
                  color: mid.cream,
                  border: `1px solid ${mid.creamSoft}`,
                  padding: "12px 20px",
                  fontFamily: ARCHIVO_R,
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: 2,
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  color: mid.royal,
                  letterSpacing: "0.18em",
                  marginBottom: 24,
                }}
              >
                INTAKE FORM / NEW CLIENT
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <MidField
                  label="Name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <MidField
                  label="Email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
                <MidField
                  label="Phone"
                  placeholder="(000) 000-0000"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                />
                <MidSelect
                  label="Primary Goal"
                  options={goals}
                  value={form.goal}
                  onChange={(v) => setForm({ ...form, goal: v })}
                />
              </div>
              <div style={{ marginTop: 22 }}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: mid.creamSoft,
                    letterSpacing: "0.14em",
                    marginBottom: 12,
                  }}
                >
                  PREFERRED SCHEDULE
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  {times.map((t) => {
                    const active = form.time === t;
                    return (
                      <button
                        key={t}
                        onClick={() => setForm({ ...form, time: t })}
                        style={{
                          flex: 1,
                          padding: "12px 0",
                          textAlign: "center",
                          background: active ? mid.green : "transparent",
                          color: active ? mid.greenInk : mid.cream,
                          border: active ? "none" : `1px solid ${mid.line}`,
                          fontFamily: ARCHIVO_R,
                          fontWeight: 700,
                          fontSize: 13,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          cursor: "pointer",
                          borderRadius: 2,
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div style={{ marginTop: 22 }}>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    color: mid.creamSoft,
                    letterSpacing: "0.14em",
                    marginBottom: 8,
                  }}
                >
                  MESSAGE
                </div>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me what you've tried, what's worked, what's not working now…"
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    background: mid.bg,
                    border: `1px solid ${mid.line}`,
                    padding: "14px 16px",
                    fontFamily: ARCHIVO_R,
                    fontSize: 14,
                    color: mid.cream,
                    minHeight: 96,
                    resize: "vertical",
                    outline: "none",
                    borderRadius: 2,
                  }}
                />
              </div>
              <button
                onClick={() => setSent(true)}
                style={{
                  marginTop: 24,
                  width: "100%",
                  background: mid.green,
                  color: mid.greenInk,
                  border: "none",
                  padding: "18px 0",
                  fontFamily: ARCHIVO_R,
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderRadius: 2,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                }}
              >
                Send &amp; Book My Slot
                <span style={{ fontFamily: MONO, fontWeight: 400 }}>→</span>
              </button>
              <div
                style={{
                  marginTop: 14,
                  fontFamily: MONO,
                  fontSize: 10,
                  color: mid.creamSoft,
                  letterSpacing: "0.12em",
                  textAlign: "center",
                }}
              >
                REPLY WITHIN 24H · NO SALES CALL
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
