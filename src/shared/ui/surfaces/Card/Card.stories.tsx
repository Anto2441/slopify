import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  args: {
    pictureUrl: "https://picsum.photos/300/300",
    pictureSize: 300,
    subtitle: "Tate McRae is on top of the Hottest 50!",
    title: "Todays Top Hits",
    tooltip: "Read: Todays Top Hits",
  },
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
