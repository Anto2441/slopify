import type { Meta, StoryObj } from "@storybook/react";

import { SlopifyLogo } from "./SlopifyLogo";

const meta = {
  component: SlopifyLogo,
} satisfies Meta<typeof SlopifyLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
