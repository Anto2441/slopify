import type { Meta, StoryObj } from "@storybook/react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import { SearchInput } from "./SearchInput";

const meta = {
  args: {
    icon: (
      <HiMagnifyingGlass
        className="size-5 text-color-subdued"
        aria-hidden="true"
      />
    ),
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
    icon: (
      <HiMagnifyingGlass
        className="size-5 text-color-subdued"
        aria-hidden="true"
      />
    ),
    id: "search",
    placeholder: "What would you like to watch or listen to?",
    rounded: "full",
  },
};

export const SquaredSearchInput: Story = {
  args: {
    icon: (
      <HiMagnifyingGlass
        className="size-5 text-color-subdued"
        aria-hidden="true"
      />
    ),
    id: "search",
    placeholder: "Search in the library",
    rounded: "square",
  },
};
