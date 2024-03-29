import type { Meta, StoryObj } from "@storybook/react";

import { TopBarCenteredCardLayout } from "./TopBarCenteredCardLayout";

const meta = {
  args: {
    children: <h1 className="text-color-base">Log in to Spotify</h1>,
  },
  component: TopBarCenteredCardLayout,
} satisfies Meta<typeof TopBarCenteredCardLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
