import type { Meta, StoryObj } from "@storybook/react";

import { SearchLink } from "./SearchLink";

const meta = {
  args: {
    children: "Search",
  },
  component: SearchLink,
} satisfies Meta<typeof SearchLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
