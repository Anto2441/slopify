import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./Image";

const meta = {
  args: {
    src: "https://picsum.photos/600/600",
    alt: "",
    width: 600,
    height: 600,
  },
  component: Image,
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
