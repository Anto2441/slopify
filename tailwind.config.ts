import { type Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],

  theme: {
    extend: {
      borderRadius: {
        "corner-radius-smaller": "var(--corner-radius-smaller)",
        "corner-radius-base": "var(--corner-radius-base)",
        "corner-radius-larger": "var(--corner-radius-larger)",
        "corner-radius-larger-2": "var(--corner-radius-larger-2)",
        "corner-radius-larger-3": "var(--corner-radius-larger-3)",
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
        "text-size-smaller-2": "var(--text-size-smaller-2)",
        "text-size-smaller": "var(--text-size-smaller)",
        "text-size-base": "var(--text-size-base)",
        "text-size-larger": "var(--text-size-larger)",
        "text-size-larger-2": "var(--text-size-larger-2)",
        "text-size-larger-3": "var(--text-size-larger-3)",
        "text-size-larger-4": "var(--text-size-larger-4)",
        "text-size-larger-5": "var(--text-size-larger-5)",
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
