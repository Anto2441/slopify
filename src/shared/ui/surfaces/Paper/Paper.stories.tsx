import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "./Paper";

const meta = {
  args: {
    children: "This is the paper component",
  },
  component: Paper,
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="bg-background-base p-spacing-base">
        <Paper {...args} />
      </div>
    );
  },
};
