import type { Meta, StoryObj } from "@storybook/react";

import { MainDetails } from "./MainDetails";

const meta = {
  args: {
    artist: "Artist",
    picture: "https://picsum.photos/300/300",
    pictureHeight: 56,
    pictureTopRounded: false,
    pictureWidth: 56,
    title: "Song title",
  },
  component: MainDetails,
} satisfies Meta<typeof MainDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
