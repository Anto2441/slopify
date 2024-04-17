import type { Meta, StoryObj } from "@storybook/react";

import { InlineMediaCard } from "./InlineMediaCard";

const meta = {
  args: {
    picture: "https://picsum.photos/300/300",
    pictureSize: 56,
    subtitle: "Artist",
    title: "Song title",
  },
  component: InlineMediaCard,
} satisfies Meta<typeof InlineMediaCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
