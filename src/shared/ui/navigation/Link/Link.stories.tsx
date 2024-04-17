import type { Meta, StoryObj } from "@storybook/react";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";

import { buttonVariants } from "../../inputs";

import { Link } from "./Link";

const meta = {
  args: {
    href: "/",
    children: "Click me to go to home",
  },
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AsButton: Story = {
  args: {
    className: buttonVariants({ variant: "accent" }),
  },
};

export const WithIconBefore: Story = {
  args: {
    children: (
      <>
        <HiOutlineArrowDownCircle />
        Click me
      </>
    ),
  },
};
