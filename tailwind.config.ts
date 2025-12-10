/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#D8F3DC", // Beige
        input: "#D8F3DC",
        ring: "#40916C", // Olive
        background: "#FFFFFF",
        foreground: "#1B4332", // Dark Green
        primary: {
          DEFAULT: "#1B4332",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#40916C",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#D8F3DC",
          foreground: "#1B4332",
        },
        accent: {
          DEFAULT: "#74C69D", // Mint
          foreground: "#1B4332",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#1B4332",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1B4332",
        },
        "forest-green": "#1B4332",
        "leaf-green": "#40916C",
        cream: "#FFFFFF",
        "warm-beige": "#D8F3DC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        script: ["Pacifico", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "border-shine": {
          "0%": { backgroundPosition: "-1000% 0" },
          "100%": { backgroundPosition: "1000% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.8s ease-out forwards",
        shimmer: "shimmer 3s linear infinite", // Restored to 3s to match video
        marquee: "marquee 60s linear infinite",
        "border-shine": "border-shine 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};