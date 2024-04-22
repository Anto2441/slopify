import type { Meta, StoryObj } from "@storybook/react";

import { CardSkeleton } from "./CardSkeleton";

const meta = {
  component: CardSkeleton,
} satisfies Meta<typeof CardSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
