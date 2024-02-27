import type { Preview } from "@storybook/react";

import { WithTailwind } from "./decorators";

const preview: Preview = {
  decorators: [WithTailwind],

  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,

        date: /Date$/i,
      },
    },

    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
