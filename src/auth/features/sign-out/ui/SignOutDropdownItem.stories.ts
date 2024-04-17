import type { Meta, StoryObj } from "@storybook/react";

import { SignOutDropdownItem } from "./SignOutDropdownItem";

const meta = {
  args: {
    variant: "inverted-light",
  },
  component: SignOutDropdownItem,
} satisfies Meta<typeof SignOutDropdownItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
