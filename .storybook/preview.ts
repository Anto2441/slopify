import type { Preview } from "@storybook/react";

import { WithAuthSessionProvider, WithTailwind } from "./decorators";
import { theme } from "./theme";

const preview: Preview = {
  /**
   * In Storybook, the order of execution for an array of decorators is from right to left.
   *
   * This means that the decorator that appears last in the array will be executed first.
   * Each decorator in the array will wrap the previous decorator or the component itself.
   *
   * @example:
   *
   * ```ts
   * const decorators = [DecoratorA, DecoratorB, DecoratorC];
   *
   * * The output will be:
   * <DecoratorA>
   *   <DecoratorB>
   *     <DecoratorC>
   *       <Component />
   *     </DecoratorC>
   *   </DecoratorB>
   * </DecoratorA>
   * ```
   *
   * 🦉 We should always reflect the real implementation providers order
   */
  decorators: [WithAuthSessionProvider, WithTailwind],

  parameters: {
    actions: { argTypesRegex: "^on.*" },

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
