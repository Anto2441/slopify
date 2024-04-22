import type { Meta, StoryObj } from "@storybook/react";
import { SelectionSkeleton } from "./SelectionSkeleton";

const meta = {
  component: SelectionSkeleton,
} satisfies Meta<typeof SelectionSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
