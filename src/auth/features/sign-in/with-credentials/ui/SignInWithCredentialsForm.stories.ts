import type { Meta, StoryObj } from "@storybook/react";

import { SignInWithCredentialsForm } from "./SignInWithCredentialsForm";

const meta = {
  component: SignInWithCredentialsForm,
} satisfies Meta<typeof SignInWithCredentialsForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
