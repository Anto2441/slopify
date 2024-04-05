import type { Meta, StoryObj } from "@storybook/react";

import { SignUpBanner } from "./SignUpBanner";

const meta = {
  component: SignUpBanner,
} satisfies Meta<typeof SignUpBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
