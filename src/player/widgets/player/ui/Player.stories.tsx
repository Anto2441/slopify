import type { Meta, StoryObj } from "@storybook/react";

import { PlayerProvider } from "../../../entities/player";
import { Player } from "./Player";

const meta = {
  component: Player,
  decorators: [
    (Story) => (
      <PlayerProvider>
        <Story />
      </PlayerProvider>
    ),
  ],
} satisfies Meta<typeof Player>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
