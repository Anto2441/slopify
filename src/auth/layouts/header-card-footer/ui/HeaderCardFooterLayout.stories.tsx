import type { Meta, StoryObj } from "@storybook/react";

import { HeaderCardFooterLayout } from "./HeaderCardFooterLayout";

const meta = {
  args: {
    children: <h1 className="text-color-base">Log in to Spotify</h1>,
  },
  component: HeaderCardFooterLayout,
} satisfies Meta<typeof HeaderCardFooterLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
