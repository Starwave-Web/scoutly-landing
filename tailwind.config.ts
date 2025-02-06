import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg":
          "linear-gradient(to bottom right, #D2F5F5 2%, #29C7C7 35%, #141D42 100%)",
        "about-us-bg": "url('/images/about_us.png')",
      },
      colors: {
        "primary-blue": "#141D42",
        "secondary-blue": "#29C7C7",
        "btn-hover": "#38AFAF",
        "btn-active": "#2C9F9F",
        "primary-grey": "#6C6C72",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        btn: [
          "15px",
          {
            fontWeight: "600",
            lineHeight: "30px",
            letterSpacing: "0px",
          },
        ],
        navigation: [
          "14px",
          {
            fontWeight: "600",
            lineHeight: "18.2px",
            letterSpacing: "0px",
          },
        ],
        h1: [
          "40px",
          {
            fontWeight: "800",
            lineHeight: "52px",
            letterSpacing: "0px",
          },
        ],
        "h1-mobile": [
          "24px",
          {
            fontWeight: "800",
            lineHeight: "32px",
            letterSpacing: "0px",
          },
        ],
        h2: [
          "25px",
          {
            fontWeight: "600",
            lineHeight: "37.5px",
            letterSpacing: "0px",
          },
        ],
        "h2-mobile": [
          "18px",
          {
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0px",
          },
        ],
        "section-name": [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "30px",
            letterSpacing: "0px",
          },
        ],
        "about-card-title": [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "30px",
            letterSpacing: "0px",
          },
        ],
        "about-card-description": [
          "15px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0px",
          },
        ],
        "for-card-title": [
          "25px",
          {
            fontWeight: "400",
            lineHeight: "37.5px",
            letterSpacing: "0px",
          },
        ],
        "for-card-description": [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "0px",
          },
        ],
        description: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0px",
          },
        ],
        "footer-sub-title": [
          "25px",
          {
            fontWeight: "600",
            lineHeight: "37.5px",
            letterSpacing: "0px",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
