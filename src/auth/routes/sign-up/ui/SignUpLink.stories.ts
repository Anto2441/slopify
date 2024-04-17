import type { Meta, StoryObj } from "@storybook/react";

import { SignUpLink } from "./SignUpLink";

const meta = {
  args: {
    children: "Sign up",
  },
  component: SignUpLink,
} satisfies Meta<typeof SignUpLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
