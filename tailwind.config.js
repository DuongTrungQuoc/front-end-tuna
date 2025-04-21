/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        banner: "url(./yellowfin.jpg)",
      },
      colors: {
        primaryBg: {
          default: "#131314",
          sideBar: "#1e1f20",
        },
        ocean: {
          50: "#E8F7FC",
          100: "#D1EFF9",
          200: "#5EC3E6",
          300: "#0077B6",
          400: "#006699",
          500: "#005F73",
          600: "#004D66",
          700: "#003D4D",
          800: "#002B33",
          900: "#001F26",
        },
        primary: {
          blue: "#25408f",
          orange: "#e64b37",
          whitegray: "#ffffff",
        },
      },
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        26: "26px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      boxShadow: {
        md: "6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
      },
      keyframes: {
        "fish-swim": {
          "0%": { transform: "translateX(-100%) scaleX(1)" },
          "49%": { transform: "translateX(100%) scaleX(1)" },
          "50%": { transform: "translateX(100%) scaleX(-1)" },
          "99%": { transform: "translateX(-100%) scaleX(-1)" },
          "100%": { transform: "translateX(-100%) scaleX(1)" },
        },
        "water-wave": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "fish-swim": "fish-swim 8s infinite linear",
        "water-wave": "water-wave 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
