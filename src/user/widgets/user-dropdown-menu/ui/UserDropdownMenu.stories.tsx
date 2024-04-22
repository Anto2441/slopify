import type { Meta, StoryObj } from "@storybook/react";

import { UserDropdownMenu } from "./UserDropdownMenu";

const meta = {
  args: {
    user: {
      name: "John Wick",
    },
  },
  component: UserDropdownMenu,
} satisfies Meta<typeof UserDropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
