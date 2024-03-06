import { type Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      borderRadius: {
        "border-radius-smaller": "var(--border-radius-smaller)",
        "border-radius-base": "var(--border-radius-base)",
        "border-radius-larger": "var(--border-radius-larger)",
        "border-radius-larger-2": "var(--border-radius-larger-2)",
        "border-radius-larger-3": "var(--border-radius-larger-3)",
      },

      borderWidth: {
        "border-width-hairline": "var(--border-width-hairline)",
        "border-width-thin": "var(--border-width-thin)",
        "border-width-thick": "var(--border-width-thick)",
        "border-width-thicker": "var(--border-width-thicker)",
        "border-width-focus": "var(--border-width-focus)",
      },

      colors: {
        "background-base": "var(--background-base)",
        "background-highlight": "var(--background-highlight)",
        "background-press": "var(--background-press)",
        "background-elevated-base": "var(--background-elevated-base)",
        "background-elevated-highlight": "var(--background-elevated-highlight)",
        "background-elevated-press": "var(--background-elevated-press)",
        "background-tinted-base": "var(--background-tinted-base)",
        "background-tinted-highlight": "var(--background-tinted-highlight)",
        "background-tinted-press": "var(--background-tinted-press)",

        "text-base": "var(--text-base)",
        "text-subdued": "var(--text-subdued)",
        "text-bright-accent": "var(--text-bright-accent)",
        "text-negative": "var(--text-negative)",
        "text-warning": "var(--text-warning)",
        "text-positive": "var(--text-positive)",
        "text-announcement": "var(--text-announcement)",

        "essential-base": "var(--essential-base)",
        "essential-subdued": "var(--essential-subdued)",
        "essential-bright-accent": "var(--essential-bright-accent)",
        "essential-negative": "var(--essential-negative)",
        "essential-warning": "var(--essential-warning)",
        "essential-positive": "var(--essential-positive)",
        "essential-announcement": "var(--essential-announcement)",

        "decorative-base": "var(--decorative-base)",
        "decorative-subdued": "var(--decorative-subdued)",
      },

      fontSize: {
        "font-size-smaller-2": "var(--font-size-smaller-2)",
        "font-size-smaller": "var(--font-size-smaller)",
        "font-size-base": "var(--font-size-base)",
        "font-size-larger": "var(--font-size-larger)",
        "font-size-larger-2": "var(--font-size-larger-2)",
        "font-size-larger-3": "var(--font-size-larger-3)",
        "font-size-larger-4": "var(--font-size-larger-4)",
        "font-size-larger-5": "var(--font-size-larger-5)",
      },

      ringOffsetWidth: {
        3: "3px",
      },

      spacing: {
        "control-size-smaller": "var(--control-size-smaller)",
        "control-size-base": "var(--control-size-base)",
        "control-size-larger": "var(--control-size-larger)",

        "graphic-size-decorative-smaller-2":
          "var(--graphic-size-decorative-smaller-2)",
        "graphic-size-decorative-smaller":
          "var(--graphic-size-decorative-smaller)",
        "graphic-size-decorative-base": "var(--graphic-size-decorative-base)",
        "graphic-size-decorative-larger":
          "var(--graphic-size-decorative-larger)",
        "graphic-size-decorative-larger-2":
          "var(--graphic-size-decorative-larger-2)",
        "graphic-size-decorative-larger-3":
          "var(--graphic-size-decorative-larger-3)",
        "graphic-size-decorative-larger-4":
          "var(--graphic-size-decorative-larger-4)",
        "graphic-size-decorative-larger-5":
          "var(--graphic-size-decorative-larger-5)",
        "graphic-size-informative-smaller-2":
          "var(--graphic-size-informative-smaller-2)",
        "graphic-size-informative-smaller":
          "var(--graphic-size-informative-smaller)",
        "graphic-size-informative-base": "var(--graphic-size-informative-base)",
        "graphic-size-informative-larger":
          "var(--graphic-size-informative-larger)",
        "graphic-size-informative-larger-2":
          "var(--graphic-size-informative-larger-2)",
        "graphic-size-informative-larger-3":
          "var(--graphic-size-informative-larger-3)",
        "graphic-size-informative-larger-4":
          "var(--graphic-size-informative-larger-4)",
        "graphic-size-informative-larger-5":
          "var(--graphic-size-informative-larger-5)",

        "layout-margin-tighter": "var(--layout-margin-tighter)",
        "layout-margin-base": "var(--layout-margin-base)",
        "layout-margin-looser": "var(--layout-margin-looser)",

        "spacing-tighter-5": "var(--spacing-tighter-5)",
        "spacing-tighter-4": "var(--spacing-tighter-4)",
        "spacing-tighter-3": "var(--spacing-tighter-3)",
        "spacing-tighter-2": "var(--spacing-tighter-2)",
        "spacing-tighter": "var(--spacing-tighter)",
        "spacing-base": "var(--spacing-base)",
        "spacing-looser": "var(--spacing-looser)",
        "spacing-looser-2": "var(--spacing-looser-2)",
        "spacing-looser-3": "var(--spacing-looser-3)",
        "spacing-looser-4": "var(--spacing-looser-4)",
        "spacing-looser-5": "var(--spacing-looser-5)",
        "spacing-looser-6": "var(--spacing-looser-6)",
      },
    },

    fontFamily: {
      sans: ["var(--font-figtree)"],
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
} satisfies Config;

export default config;
