import type { Preview } from "@storybook/react";

import { WithTailwind } from "./decorators";
import { theme } from "./theme";

const preview: Preview = {
  decorators: [WithTailwind],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    backgrounds: { disable: true },

    controls: {
      matchers: {
        color: /(background|color)$/i,

        date: /Date$/i,
      },
    },

    docs: { theme },

    nextjs: { appDirectory: true },
  },
};

export default preview;
