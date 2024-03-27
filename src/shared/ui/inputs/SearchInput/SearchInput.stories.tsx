import type { Meta, StoryObj } from "@storybook/react";

import { SearchInput } from "./SearchInput";

const meta = {
  args: {
    id: "search",
    placeholder: "Search in the library",
  },
  component: SearchInput,
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RoundedSearchInput: Story = {
  args: {
    id: "search",
    placeholder: "What would you like to watch or listen to?",
    rounded: "full",
    size: "large",
  },
};

export const SquaredSearchInput: Story = {
  args: {
    id: "search",
    placeholder: "Search in the library",
    rounded: "square",
    size: "small",
  },
};
