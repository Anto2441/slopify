import type { Meta, StoryObj } from "@storybook/react";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";

import { Button } from "./Button";

const meta = {
  args: { children: <>Click me!</> },
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithIconBefore: Story = {
  render: function Render() {
    return (
      <Button variant="outlined">
        <HiOutlineArrowDownCircle /> Install App
      </Button>
    );
  },
};

export const WithIconAfter: Story = {
  render: function Render() {
    return (
      <Button variant="outlined">
        Install App <HiOutlineArrowDownCircle />
      </Button>
    );
  },
};
