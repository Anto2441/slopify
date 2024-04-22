import type { Meta, StoryObj } from "@storybook/react";
import { InlineMediaCardSkeleton } from "./InlineMediaCardSkeleton";

const meta = {
  component: InlineMediaCardSkeleton,
} satisfies Meta<typeof InlineMediaCardSkeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
