import type { Meta, StoryObj } from "@storybook/react";
import { HiPlay } from "react-icons/hi2";

import { IconButton } from "./IconButton";

const meta = {
  args: { children: <HiPlay />, tooltip: "Play song" },
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
