import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // ⚠️ It must be declared AFTER @storybook/addon-essentials
    "@storybook/addon-interactions",
  ],

  docs: {
    autodocs: true,
  },

  features: {
    experimentalRSC: true,
  },

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
};

export default config;
