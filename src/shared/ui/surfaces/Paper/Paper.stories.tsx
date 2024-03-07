import type { Meta, StoryObj } from "@storybook/react";

import { Paper } from "./Paper";

const meta = {
  args: { children: <>Click me!</> },
  argTypes: {
    variant: {
      options: ["flat", "tinted", "elevated"],
      control: { type: "select" },
    },
  },
  component: Paper,
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <div className="bg-background-base p-spacing-base">
        <Paper {...args}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          doloremque facilis natus harum minima, sequi exercitationem. Eum,
          natus!
        </Paper>
      </div>
    );
  },
};
