/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
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
          200: "#5EC3E6", // Ocean nhẹ
          300: "#0077B6", // Ocean trung bình
          500: "#005F73", // Ocean đậm
          700: "#003D4D", // Ocean rất đậm
          900: "#001F26", // Ocean đen
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
    },
  },
  plugins: [],
};
