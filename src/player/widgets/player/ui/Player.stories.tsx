import type { Meta, StoryObj } from "@storybook/react";

import { Player } from "./Player";

const meta = {
  component: Player,
} satisfies Meta<typeof Player>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
