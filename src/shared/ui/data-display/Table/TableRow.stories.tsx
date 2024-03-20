import type { Meta, StoryObj } from "@storybook/react";

import { TableRow } from "./TableRow";

const meta = {
  component: TableRow,
} satisfies Meta<typeof TableRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
