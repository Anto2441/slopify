import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./Switch";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {
    checked: false,
    label: "Controlled switch field",
    onChange: () => {},
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultChecked: false,
    label: "Uncontrolled switch field",
    name: "setting",
    value: "enabled",
  },
};
