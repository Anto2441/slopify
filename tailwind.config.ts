import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    colors: {
      accent: {
        50: "#f0fdf4",
        100: "#dbfde7",
        200: "#b9f9ce",
        300: "#82f3aa",
        400: "#45e37d",
        500: "#1ed760",
        600: "#11a847",
        700: "#11843b",
        800: "#136832",
        900: "#12552c",
        950: "#042f16",
        current: colors.current,
        transparent: colors.transparent,
      },

      danger: {
        50: "#fff1f2",
        100: "#ffe0e3",
        200: "#ffc6cc",
        300: "#ff9ea8",
        400: "#ff6675",
        500: "#fd364a",
        600: "#e91429",
        700: "#c60f21",
        800: "#a3111f",
        900: "#871520",
        950: "#4a050c",
        current: colors.current,
        transparent: colors.transparent,
      },

      info: {
        50: "#eef9ff",
        100: "#d8f2ff",
        200: "#bae7ff",
        300: "#8adbff",
        400: "#53c6ff",
        500: "#2ba7ff",
        600: "#148afc",
        700: "#0d72ea",
        800: "#125abb",
        900: "#154f93",
        950: "#123059",
        current: colors.current,
        transparent: colors.transparent,
      },

      neutral: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6a6a6a",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#121212",
        current: colors.current,
        transparent: colors.transparent,
      },

      success: {
        50: "#f0fdf4",
        100: "#dbfde7",
        200: "#b9f9ce",
        300: "#82f3aa",
        400: "#45e37d",
        500: "#1ed760",
        600: "#11a847",
        700: "#11843b",
        800: "#136832",
        900: "#12552c",
        950: "#042f16",
        current: colors.current,
        transparent: colors.transparent,
      },

      warning: {
        50: "#fff8eb",
        100: "#ffebc6",
        200: "#ffd588",
        300: "#ffba4a",
        400: "#ffa42b",
        500: "#f97b07",
        600: "#dd5602",
        700: "#b73806",
        800: "#942b0c",
        900: "#7a240d",
        950: "#461002",
        current: colors.current,
        transparent: colors.transparent,
      },

      black: colors.black,

      white: colors.white,
    },

    fontFamily: {
      sans: ["var(--font-figtree)"],
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};

export default config;
