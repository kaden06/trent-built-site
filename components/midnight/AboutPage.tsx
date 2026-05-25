import Image from "next/image";
import Link from "next/link";
import BarbellStamp from "@/components/BarbellStamp";
import { MidEyebrow, MidStripe, MidDivider } from "./atoms";
import { mid, ARCHIVO, ARCHIVO_R, MONO } from "./palette";

function AboutHeader() {
  const stats = [
    { n: "08", l: "YEARS COACHING", hi: false },
    { n: "200+", l: "CLIENTS COACHED", hi: true },
    { n: "CO", l: "BASED IN", hi: false },
  ];
  return (
    <section style={{ padding: "88px 56px 96px", position: "relative", background: mid.bg }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="aboutgrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0v48" stroke={mid.cream} strokeWidth="1" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aboutgrid)" />
      </svg>
      <MidEyebrow no="02" title="ABOUT — TRENT" />
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 72, alignItems: "center", position: "relative" }}>
        <div>
          <h1 style={{ fontFamily: ARCHIVO, fontSize: 96, lineHeight: 0.95, letterSpacing: "-0.02em", margin: 0, color: mid.cream }}>
            Coaching that meets you{" "}
            <span style={{ color: mid.greenHi }}>where you are.</span>
          </h1>
          <p style={{ fontFamily: ARCHIVO_R, fontSize: 18, lineHeight: 1.55, color: mid.creamDim, maxWidth: 560, marginTop: 32 }}>
            Eight years of in-person and online coaching for adults who&apos;ve already tried the apps, the trends, and the 6-week challenges. Run by Trent — born in Texas, based in Colorado, programmed around your actual week, paid attention to.
          </p>
          <div style={{ display: "flex", gap: 0, marginTop: 48 }}>
            {stats.map((s, i) => (
              <div key={s.l} style={{
                flex: 1, padding: "22px 24px",
                background: s.hi ? mid.surface : "transparent",
                border: `1px solid ${mid.line}`,
                borderLeft: i > 0 ? "none" : `1px solid ${mid.line}`,
                position: "relative",
              }}>
                {s.hi && <div style={{ position: "absolute", top: -1, left: -1, right: -1, height: 3, background: mid.green }} />}
                <div style={{ position: "absolute", top: 8, right: 8, fontFamily: MONO, fontSize: 9, color: mid.creamSoft, letterSpacing: "0.1em" }}>0{i + 1}</div>
                <div style={{ fontFamily: ARCHIVO, fontSize: 42, color: s.hi ? mid.greenHi : mid.cream, lineHeight: 1, letterSpacing: "-0.005em" }}>{s.n}</div>
                <div style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em", marginTop: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: "-14px -14px 18px 18px", border: `1px solid ${mid.royal}`, borderRadius: 4 }} />
          <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 4, overflow: "hidden", background: mid.surface }}>
            <Image src="/trent/trent-portrait.jpg" alt="Trent — head coach" fill priority sizes="(min-width: 1024px) 40vw, 100vw" style={{ objectFit: "cover" }} />
          </div>
          <div style={{ position: "absolute", bottom: -2, left: -2, background: mid.bg, padding: "12px 16px 12px 12px", border: `1px solid ${mid.green}`, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 8, height: 8, background: mid.greenHi }} />
            <div style={{ fontFamily: MONO, fontSize: 11, color: mid.cream, letterSpacing: "0.06em" }}>EST · 2017 · COLORADO</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStory() {
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "grid", gridTemplateColumns: "0.4fr 1fr", gap: 72, alignItems: "flex-start" }}>
        <div>
          <MidEyebrow no="03" title="THE STORY" />
          <div style={{ fontFamily: ARCHIVO, fontSize: 40, color: mid.cream, lineHeight: 0.95, letterSpacing: "-0.015em", marginTop: 8 }}>
            Eight years.<br />
            <span style={{ color: mid.greenHi }}>One job.</span>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 680 }}>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.cream, lineHeight: 1.7, margin: 0 }}>
              I&apos;ve spent the last eight years in commercial gyms, private studios, and on video calls. Started in 2017, kept showing up. Same answer every time: most people don&apos;t need a new program. They need a coach who actually pays attention and adjusts as life moves.
            </p>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, lineHeight: 1.7, margin: 0 }}>
              I don&apos;t do transformations in 30 days. I don&apos;t sell supplement stacks. I don&apos;t post deadlift PRs every week to make you feel behind. Most of what I do is unglamorous: I read your check-ins on Sunday night and decide what gets changed for Monday.
            </p>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, lineHeight: 1.7, margin: 0 }}>
              The people I work best with have already tried the apps, the trends, the 6-week challenges. They know they don&apos;t need motivation — they need a program that survives a Tuesday with a sick kid and a Wednesday with a 7am flight.
            </p>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 17, color: mid.creamDim, lineHeight: 1.7, margin: 0 }}>
              I run a small roster on purpose. About forty clients at a time, in-person and online. When I take you on, I&apos;m going to know your numbers, your week, and what&apos;s actually getting in the way.
            </p>
          </div>
          <div style={{ marginTop: 40, padding: "28px 32px", background: mid.surface, borderLeft: `3px solid ${mid.green}`, position: "relative", maxWidth: 680 }}>
            <div style={{ fontFamily: ARCHIVO, fontSize: 26, color: mid.cream, lineHeight: 1.35, letterSpacing: "-0.005em" }}>
              &ldquo;The right plan you&apos;ll actually run beats the perfect plan you won&apos;t.&rdquo;
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.16em", marginTop: 14 }}>— TRENT</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMethod() {
  const cards = [
    { n: "01", label: "MOVEMENT FIRST", desc: "We start with a movement screen, not a workout. If your ankles don't dorsiflex, we fix that before we load. The boring assessments are the difference between a year of progress and a year of small injuries." },
    { n: "02", label: "PROGRAMMING THAT ADJUSTS", desc: "Custom 4-week blocks built around your real schedule — your travel, your sleep, your work load. When a week falls apart, we adjust the next one. No pretending the plan was perfect when it wasn't." },
    { n: "03", label: "HONEST FEEDBACK", desc: "Form reviews within 24 hours, on tape. If you're cheating reps, I'll tell you. If you're undersold on yourself, I'll tell you that too. The check-ins are not therapy — they're a coach's read." },
    { n: "04", label: "CONSISTENCY OVER INTENSITY", desc: "Showing up three days a week for two years beats showing up six days a week for two months. We program for the version of you that exists, not the one that doesn't." },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <MidEyebrow no="04" title="THE METHOD" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, marginTop: 8, alignItems: "flex-end", marginBottom: 56 }}>
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 80, color: mid.cream, margin: 0, lineHeight: 0.92, letterSpacing: "-0.02em" }}>
          HOW I ACTUALLY<br />
          <span style={{ color: mid.greenHi }}>COACH.</span>
        </h2>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.creamDim, lineHeight: 1.65, maxWidth: 420, paddingBottom: 8 }}>
          Four principles that hold across every tier — in-person, online, nutrition. The expression changes; the work doesn&apos;t.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
        {cards.map((c, i) => (
          <div key={c.n} style={{
            background: mid.surface,
            border: `1px solid ${mid.line}`,
            borderLeft: i % 2 === 1 ? "none" : `1px solid ${mid.line}`,
            borderTop: i >= 2 ? "none" : `1px solid ${mid.line}`,
            padding: "36px 32px",
          }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 16 }}>
              <span style={{ fontFamily: ARCHIVO, fontSize: 36, color: mid.greenHi, lineHeight: 1, letterSpacing: "-0.01em" }}>{c.n}</span>
              <span style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.005em" }}>{c.label}</span>
            </div>
            <p style={{ fontFamily: ARCHIVO_R, fontSize: 15, color: mid.creamDim, lineHeight: 1.65, margin: 0, maxWidth: 480 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutCerts() {
  const certs = [
    { name: "NASM-CPT", issuer: "National Academy of Sports Medicine", year: "2017", desc: "Certified Personal Trainer — foundational scope of practice, assessment, and program design." },
    { name: "Precision Nutrition L1", issuer: "Precision Nutrition", year: "2019", desc: "Nutrition coaching certification focused on habit-based change, not crash diets." },
    { name: "FMS Certified", issuer: "Functional Movement Systems", year: "2020", desc: "Functional Movement Screen — assessment protocol for movement quality before load." },
    { name: "CPR / AED", issuer: "American Red Cross", year: "2024", desc: "Current. Renewed annually. Required for in-person sessions." },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bgDeep }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
        <div>
          <MidEyebrow no="05" title="CERTIFICATIONS" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 64, color: mid.cream, margin: 0, lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            Paper, current.<br />
            <span style={{ color: mid.greenHi }}>And maintained.</span>
          </h2>
        </div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.18em", paddingBottom: 6 }}>
          04 ACTIVE · ALL RENEWED 2024–2026
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {certs.map((c) => {
          const slug = c.name.replace(/\W/g, "");
          return (
            <div key={c.name} style={{
              background: mid.surface, border: `1px solid ${mid.royal}`,
              padding: "28px 28px",
              display: "grid", gridTemplateColumns: "88px 1fr auto", gap: 24, alignItems: "center",
            }}>
              <div style={{ width: 88, height: 88, background: mid.bg, position: "relative", overflow: "hidden", border: `1px solid ${mid.line}` }}>
                <svg width="100%" height="100%" style={{ opacity: 0.5 }} aria-hidden>
                  <defs>
                    <pattern id={`cert-${slug}`} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="10" stroke={mid.surfaceHi} strokeWidth="4" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#cert-${slug})`} />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: MONO, fontSize: 9, color: mid.creamSoft, letterSpacing: "0.12em", textAlign: "center", padding: 6 }}>
                  [ logo<br />placeholder ]
                </div>
              </div>
              <div>
                <div style={{ fontFamily: ARCHIVO, fontSize: 22, color: mid.cream, letterSpacing: "-0.005em" }}>{c.name}</div>
                <div style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.14em", marginTop: 4 }}>{c.issuer.toUpperCase()}</div>
                <p style={{ fontFamily: ARCHIVO_R, fontSize: 13, color: mid.creamDim, lineHeight: 1.6, margin: "10px 0 0" }}>{c.desc}</p>
              </div>
              <div style={{ fontFamily: ARCHIVO, fontSize: 24, color: mid.cream, letterSpacing: "-0.005em", textAlign: "right", borderLeft: `1px solid ${mid.line}`, paddingLeft: 20, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                {c.year}
                <span style={{ fontFamily: MONO, fontSize: 10, color: mid.creamSoft, letterSpacing: "0.14em", marginTop: 4 }}>EARNED</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AboutDay() {
  const tiles = [
    { time: "06:00", label: "FIRST SESSION", tag: "first_session_floor.jpg" },
    { time: "11:30", label: "PROGRAMMING BLOCK", tag: "programming_block.jpg" },
    { time: "16:00", label: "FORM REVIEWS · TAPE", tag: "form_review_screens.jpg" },
  ];
  return (
    <section style={{ padding: "96px 56px", background: mid.bg }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
        <div>
          <MidEyebrow no="06" title="A DAY IN THE GYM" />
          <h2 style={{ fontFamily: ARCHIVO, fontSize: 64, color: mid.cream, margin: 0, lineHeight: 0.95, letterSpacing: "-0.015em" }}>
            What the work<br />
            <span style={{ color: mid.greenHi }}>actually looks like.</span>
          </h2>
        </div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: mid.creamSoft, letterSpacing: "0.18em", paddingBottom: 6 }}>
          06:00 — 18:00 · MON–SAT · MT
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {tiles.map((t, i) => (
          <div key={t.tag} style={{ position: "relative", border: `1px solid ${mid.line}`, borderRadius: 4, overflow: "hidden" }}>
            <MidStripe label={t.tag} ratio="4/5" tone={i % 2 === 0 ? mid.surface : mid.surfaceHi} angle={i % 2 === 0 ? 45 : -45} />
            <div style={{ position: "absolute", top: 14, left: 14, background: mid.bg, color: mid.greenHi, fontFamily: MONO, fontSize: 12, letterSpacing: "0.18em", padding: "6px 10px", border: `1px solid ${mid.greenHi}` }}>
              {t.time}
            </div>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "56px 18px 16px", background: "linear-gradient(to top, rgba(11,26,42,0.95), transparent)", fontFamily: ARCHIVO, fontSize: 22, letterSpacing: "-0.005em", color: mid.cream, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 5, height: 5, background: mid.greenHi }} />
              {t.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section style={{ padding: "128px 56px", background: mid.bgDeep, borderTop: `1px solid ${mid.line}`, borderBottom: `1px solid ${mid.line}`, position: "relative", overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.06, pointerEvents: "none" }} aria-hidden>
        <defs>
          <pattern id="aboutcta" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="22" stroke={mid.greenHi} strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aboutcta)" />
      </svg>
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
          <span style={{ fontFamily: MONO, fontSize: 11, color: mid.greenHi, letterSpacing: "0.32em" }}>YOUR MOVE</span>
          <div style={{ width: 56, height: 1, background: mid.greenHi }} />
        </div>
        <BarbellStamp size={120} color={mid.greenHi} bg={mid.bgDeep} />
        <h2 style={{ fontFamily: ARCHIVO, fontSize: 96, color: mid.cream, letterSpacing: "-0.02em", lineHeight: 0.92, margin: 0 }}>
          PICK THE LANE.<br />
          <span style={{ color: mid.greenHi }}>SHOW UP EITHER WAY.</span>
        </h2>
        <div style={{ fontFamily: ARCHIVO_R, fontSize: 16, color: mid.creamDim, maxWidth: 540, lineHeight: 1.6, margin: 0 }}>
          Three tiers, month-to-month. No contracts. Book a free consultation — 30 minutes, no pressure, honest read.
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

export function AboutPage() {
  return (
    <>
      <AboutHeader />
      <MidDivider no="03" />
      <AboutStory />
      <MidDivider no="04" />
      <AboutMethod />
      <MidDivider no="05" />
      <AboutCerts />
      <MidDivider no="06" />
      <AboutDay />
      <AboutCTA />
    </>
  );
}
