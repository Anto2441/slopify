import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {
    checked: false,
    description: "I'm controlled",
    label: "Controlled switch",
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultChecked: false,
    description: "I'm uncontrolled",
    label: "Uncontrolled switch",
    name: "setting",
    value: "enabled",
  },
};
