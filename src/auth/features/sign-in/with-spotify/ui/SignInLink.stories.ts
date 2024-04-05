import type { Meta, StoryObj } from "@storybook/react";

import { SignInLink } from "./SignInLink";

const meta = {
  args: {
    children: "Log in",
  },
  component: SignInLink,
} satisfies Meta<typeof SignInLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
