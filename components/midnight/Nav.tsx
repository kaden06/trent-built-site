import Link from "next/link";
import BarbellStamp from "@/components/BarbellStamp";
import { MidWordmark } from "./atoms";
import { mid, ARCHIVO_R } from "./palette";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
];

export function MidNav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 5,
        background: "rgba(16,34,54,0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: `1px solid ${mid.line}`,
        padding: "14px 56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 16, textDecoration: "none" }}>
        <BarbellStamp size={36} color={mid.greenHi} bg={mid.bg} />
        <div style={{ width: 1, height: 36, background: mid.line }} />
        <MidWordmark size={13} />
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontFamily: ARCHIVO_R,
              fontWeight: 600,
              fontSize: 13,
              color: mid.creamDim,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/book"
          style={{
            background: mid.green,
            color: mid.greenInk,
            border: "none",
            padding: "12px 22px",
            fontFamily: ARCHIVO_R,
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            borderRadius: 2,
            cursor: "pointer",
            whiteSpace: "nowrap",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
