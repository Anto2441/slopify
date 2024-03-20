import type { Meta, StoryObj } from "@storybook/react";

import { Selection } from "./Selection";

const meta = {
  args: {
    picture: "https://picsum.photos/300/300",
    title: "Jazzy Morning",
  },
  component: Selection,
} satisfies Meta<typeof Selection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
