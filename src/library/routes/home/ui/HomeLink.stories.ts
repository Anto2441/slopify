import type { Meta, StoryObj } from "@storybook/react";

import { HomeLink } from "./HomeLink";

const meta = {
  args: {
    children: "Home",
  },
  component: HomeLink,
} satisfies Meta<typeof HomeLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
