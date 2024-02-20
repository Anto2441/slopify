import type { Meta, StoryObj } from "@storybook/react";

import TopBarCenteredCardLayout from "./TopBarCenteredCardLayout";

const meta = {
  args: {
    children: <h1 className="text-white">Log in to Spotify</h1>,
    topBar: <div className="text-white">Slopify</div>,
  },
  component: TopBarCenteredCardLayout,
} satisfies Meta<typeof TopBarCenteredCardLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
