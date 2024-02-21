import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],

  docs: {
    autodocs: true,
  },

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  /**
   * This function is the webpack final configuration step, where it resolves aliases for the paths.
   * It modifies the webpack configuration to include aliases for easier imports.
   *
   * @see {@link https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config}
   *
   * @param {object} config - The webpack configuration object.
   * @return {object} The updated webpack configuration object with resolved aliases.
   */
  webpackFinal: async (config) => {
    config.resolve ??= {};

    config.resolve.alias ??= {};

    config.resolve.alias["@"] = path.resolve(__dirname, "../src");

    return config;
  },
};

export default config;
