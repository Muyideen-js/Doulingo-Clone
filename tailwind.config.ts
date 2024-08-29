import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
        },
        slate: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          500: '#64748b',
        },
      },
      spacing: {
        'px-10': '2.5rem',
        'py-3': '0.75rem',
      },
      borderRadius: {
        'xl': '1rem',
      },
      borderWidth: {
        '2': '2px',
        '4': '4px',
        'b-2': '2px',
        'b-4': '4px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".btn-default": {
          backgroundColor: "white",
          borderColor: "#e2e8f0",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          color: "#64748b",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#f1f5f9",
          },
          "&:active": {
            borderBottomWidth: "2px",
          },
        },
        ".btn-sidebar-outline": {
          backgroundColor: "rgb(14 165 233 / 0.15)",
          borderColor: "#7dd3fc ",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          color: "#0ea5e9",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "rgb(14 165 233 / 0.2);",
          },
          "&:active": {
            borderBottomWidth: "2px",
          },
        },
        ".btn-primary": {
          backgroundColor: "#38bdf8",
          borderColor: "#0ea5e9",
          color: "white",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          "&:active": {
            borderBottomWidth: "2px",
          },
        },
        ".btn-secondary": {
          backgroundColor: "#4ade80 ",
          borderColor: "#22c55e ",
          color: "white",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          "&:active": {
            borderBottomWidth: "2px",
          },
        },
        ".btn-danger": {
          backgroundColor: "#f43f5e ",
          borderColor: "#be123c  ",
          color: "white",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          "&:active": {
            borderBottomWidth: "2px",
          },
        },
        ".btn-super": {
          backgroundColor: "#6366f1",
          borderColor: "#4338ca",
          color: "white",
          borderWidth: "2px",
          borderBottomWidth: "4px",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          "&:active": {
            borderBottomWidth: "2px",
          },
        },

        ".btn-primary-outline": {
          backgroundColor: "white",
          color: "#0ea5e9",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
        },
        ".btn-danger-outline": {
          backgroundColor: "white",
          color: "#be123c",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
        },
        ".btn-gost": {
          backgroundColor: "transparent",
          color: "#64748b ",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
          "&:hover": {
          backgroundColor: "#e2e8f0",
          },
        },
        ".btn-super-outline": {
          backgroundColor: "white",
          color: "#4338ca ",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          paddingTop: "0.75rem",
          paddingBottom: "0.75rem",
          borderRadius: "1rem",
          fontWeight: "bold",
        },
      });
    },
  ],
};

export default config;
