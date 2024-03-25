import type { Meta, StoryObj } from "@storybook/react";
import { TbLetterA } from "react-icons/tb";

import { GoLinkExternal } from "react-icons/go";
import { IconButton } from "../../inputs/IconButton/IconButton";
import { Link } from "../Link/Link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropdownMenu";

const meta = {
  args: {
    children: (
      <div className="flex items-center justify-center">
        <DropdownMenuTrigger>
          <IconButton size="small" tooltip="Settings" variant="accent">
            <TbLetterA />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              href="#"
              className="flex w-full items-center justify-between gap-spacing-tighter"
            >
              Account
              <GoLinkExternal />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="#">Profile</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link
              href="#"
              className="flex w-full items-center justify-between gap-spacing-tighter"
            >
              Go to Premium
              <GoLinkExternal />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="#">Settings</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="#">Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    ),
  },
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
