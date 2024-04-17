import type { Meta, StoryObj } from "@storybook/react";

import { SignUpPrompt } from "./SignUpPrompt";

const meta = {
  component: SignUpPrompt,
} satisfies Meta<typeof SignUpPrompt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
