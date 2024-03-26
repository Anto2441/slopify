import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta = {
  args: {
    className:
      "block min-h-control-size-base w-full rounded-border-radius-base border border-essential-subdued bg-background-base py-spacing-tighter-2 font-semibold shadow-essential-base placeholder:text-color-subdued hover:border-essential-base focus:border-essential-base focus:border-white focus:ring-white",
  },
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
