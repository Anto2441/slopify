import type { Meta, StoryObj } from "@storybook/react";
import { HiPlay } from "react-icons/hi2";

import { IconButton } from "./IconButton";

const meta = {
  args: { children: <HiPlay />, tooltip: "Play song" },
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

type IconButtonProps = React.ComponentProps<typeof IconButton>;

const iconVariants: IconButtonProps["variant"][] = [
  "accent",
  "ghost",
  "inverted-dark",
  "inverted-light",
  "over-media",
  "text",
  "tinted",
];

const iconSizes: IconButtonProps["size"][] = [
  "small",
  "medium",
  "large",
  "xlarge",
];

export const Default: Story = {
  render: function Render() {
    return (
      <div className="space-y-spacing-base">
        {iconVariants.map((variant) => {
          return (
            <div className="space-x-spacing-tighter-2" key={variant}>
              {iconSizes.map((size) => {
                return (
                  <IconButton
                    key={size}
                    size={size}
                    tooltip={`${variant} - ${size}`}
                    variant={variant}
                  >
                    <HiPlay />
                  </IconButton>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  },
};
