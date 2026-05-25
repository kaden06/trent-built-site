import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lucky-green": {
          DEFAULT: "#00B140",
          50: "#E6F9EE",
          100: "#C2F0D4",
          200: "#85E1A9",
          300: "#48D27E",
          400: "#1FC95E",
          500: "#00B140",
          600: "#008E33",
          700: "#006B26",
          800: "#00471A",
          900: "#00240D",
        },
        "royal-blue": {
          DEFAULT: "#4169E1",
          50: "#E8EEFC",
          100: "#C7D4F7",
          200: "#90A9EF",
          300: "#587EE7",
          400: "#4169E1",
          500: "#2952D6",
          600: "#1F40AC",
          700: "#173082",
          800: "#0F2058",
          900: "#08102E",
        },
        // TRENT BUILT — Midnight Forest variant (Site Round 3)
        midnight: {
          DEFAULT: "#102236",
          deep: "#0B1A2A",
          surface: "#182D43",
          "surface-hi": "#1F3B57",
          "surface-pop": "#0F2D24",
          line: "#2A4762",
          "line-soft": "#1E3A53",
        },
        "trent-emerald": {
          DEFAULT: "#1F9D55",
          hi: "#3FBE6B",
          deep: "#155F35",
          dark: "#1F9D55",
          ink: "#06140C",
        },
        "trent-royal": {
          DEFAULT: "#3C6BF0",
          deep: "#1F3FAA",
        },
        cream: {
          DEFAULT: "#EFE8D8",
          dim: "#C7C2B5",
          soft: "#86919D",
        },
        ink: "#06140C",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        archivo: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
        "archivo-black": ["var(--font-archivo-black)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
