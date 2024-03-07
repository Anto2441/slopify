import type { Meta, StoryObj } from "@storybook/react";
import { CardList } from "./CardList";

const meta = {
  component: CardList,
} satisfies Meta<typeof CardList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
