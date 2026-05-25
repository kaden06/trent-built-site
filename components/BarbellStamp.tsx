import { useId } from "react";

type Props = {
  size?: number;
  color?: string;
  bg?: string;
  className?: string;
};

// TRENT BUILT — locked Identity Round 1.6 stamp (Placement B, Barbell Through).
// Ported from Claude Design `identity/marks.jsx`. Single-color SVG that scales
// from 16px favicon to display size. Curved ring text drops at 64px, ring
// detail drops at 22px (solid-disc favicon fallback).
export default function BarbellStamp({
  size = 64,
  color = "#3FBE6B",
  bg = "transparent",
  className,
}: Props) {
  const id = useId();

  if (size < 22) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        className={className}
        style={{ display: "block" }}
        aria-hidden
      >
        <circle cx="32" cy="32" r="30" fill={color} />
        <text
          x="32"
          y="44"
          textAnchor="middle"
          fill={bg === "transparent" ? "#fff" : bg}
          fontFamily='"Archivo Black", sans-serif'
          fontSize="34"
        >
          T
        </text>
      </svg>
    );
  }

  const showRing = size >= 64;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      style={{ display: "block" }}
      aria-hidden
    >
      <defs>
        <path id={`top-${id}`} d="M 32 32 m -24 0 a 24 24 0 1 1 48 0" fill="none" />
        <path id={`bot-${id}`} d="M 32 32 m 24 0 a 24 24 0 1 1 -48 0" fill="none" />
      </defs>

      <circle cx="32" cy="32" r="30" fill="none" stroke={color} strokeWidth="2.5" />
      <circle cx="32" cy="32" r="21" fill="none" stroke={color} strokeWidth="1" />

      {showRing && (
        <>
          <text
            fill={color}
            fontFamily='"Oswald", sans-serif'
            fontWeight="700"
            fontSize="4.6"
            letterSpacing="0.9"
          >
            <textPath href={`#top-${id}`} startOffset="50%" textAnchor="middle">
              TRENT BUILT
            </textPath>
          </text>
          <text
            fill={color}
            fontFamily='"Oswald", sans-serif'
            fontWeight="700"
            fontSize="4"
            letterSpacing="0.35"
          >
            <textPath href={`#bot-${id}`} startOffset="50%" textAnchor="middle">
              TEXAS · 1975 · TEXAS
            </textPath>
          </text>
        </>
      )}

      <g>
        <rect x="14" y="31" width="36" height="2" fill={color} />
        <rect x="13.5" y="27" width="2.5" height="10" fill={color} />
        <rect x="48" y="27" width="2.5" height="10" fill={color} />
        <rect x="17" y="28.5" width="2" height="7" fill={color} />
        <rect x="45" y="28.5" width="2" height="7" fill={color} />
        <rect x="20.5" y="30.5" width="1.5" height="3" fill={color} />
        <rect x="42" y="30.5" width="1.5" height="3" fill={color} />
      </g>

      <text
        x="32"
        y="28"
        textAnchor="middle"
        fill={color}
        fontFamily='"Archivo Black", sans-serif'
        fontSize="17"
        letterSpacing="-0.4"
      >
        T
      </text>
      <text
        x="32"
        y="48"
        textAnchor="middle"
        fill={color}
        fontFamily='"Archivo Black", sans-serif'
        fontSize="17"
        letterSpacing="-0.4"
      >
        B
      </text>
    </svg>
  );
}
