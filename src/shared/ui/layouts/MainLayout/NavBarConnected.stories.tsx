import type { Meta, StoryObj } from "@storybook/react";

import { NavBarConnected } from "./NavBarConnected";

const meta = {
  component: NavBarConnected,
} satisfies Meta<typeof NavBarConnected>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
