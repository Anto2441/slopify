import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta = {
  args: {
    children: "Label",
    htmlFor: "input-id",
  },
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
