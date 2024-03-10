import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

const meta = {
  args: {
    children: (
      <>
        <TooltipTrigger>Hover me</TooltipTrigger>

        <TooltipContent>Hey! I&apos;m a tooltip!</TooltipContent>
      </>
    ),
  },
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
