import { type Decorator } from "@storybook/react";

import { figtree } from "@/app/fonts";

import "@/app/globals.css";

export const WithTailwind: Decorator = (Story) => {
  return (
    <div
      className={`${figtree.variable} rounded-lg bg-background-base p-spacing-base font-sans text-color-base antialiased`}
    >
      <Story />
    </div>
  );
};
