import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Switch } from "./Switch";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
  args: {
    checked: false,
  },
  argTypes: {
    onCheckedChange: fn(),
  },
};

export const Uncontrolled: Story = {
  args: {
    defaultChecked: false,
    id: "setting",
    name: "setting",
    value: "enabled",
  },
};
