import type { Meta, StoryObj } from "@storybook/react";

import { SignInWithSpotifyButton } from "./SignInWithSpotifyButton";

const meta = {
  args: {
    size: "large",
    variant: "outlined",
  },
  component: SignInWithSpotifyButton,
} satisfies Meta<typeof SignInWithSpotifyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
