import type { Meta, StoryObj } from "@storybook/react";
import { HiBars3, HiListBullet } from "react-icons/hi2";
import { MdOutlineGridView } from "react-icons/md";
import { TbLetterA } from "react-icons/tb";

import { GoLinkExternal } from "react-icons/go";
import { Button } from "../../inputs";
import { IconButton } from "../../inputs/IconButton/IconButton";
import { Link } from "../Link/Link";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
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

        <DropdownMenuContent className="min-w-[12.25rem]">
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

export const SideBarDropdownMenu: Story = {
  args: {
    children: (
      <div className="flex items-center justify-center">
        <DropdownMenuTrigger>
          <Button>
            <span>Latest</span>
            <HiBars3 />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Sort by</DropdownMenuLabel>

          <DropdownMenuItem checked hasCheckbox>
            <span>Latest</span>
            <DropdownMenuCheckboxItem checked />
          </DropdownMenuItem>

          <DropdownMenuItem hasCheckbox>
            <span>Recently added</span>
            <DropdownMenuCheckboxItem />
          </DropdownMenuItem>

          <DropdownMenuItem hasCheckbox>
            <span>Alphabetical order</span>
            <DropdownMenuCheckboxItem />
          </DropdownMenuItem>

          <DropdownMenuItem hasCheckbox>
            <span>Creator</span>
            <DropdownMenuCheckboxItem />
          </DropdownMenuItem>

          <DropdownMenuSeparator className="my-spacing-tighter-4" />

          <DropdownMenuLabel>Display mode</DropdownMenuLabel>

          <DropdownMenuItem checked hasCheckbox inset>
            <div className="flex">
              <HiBars3 size={18} />
              <span className="pl-spacing-tighter-2">Compact</span>
            </div>
            <DropdownMenuCheckboxItem checked />
          </DropdownMenuItem>

          <DropdownMenuItem hasCheckbox inset>
            <div className="flex">
              <HiListBullet size={18} />
              <span className="pl-spacing-tighter-2">List</span>
            </div>
            <DropdownMenuCheckboxItem />
          </DropdownMenuItem>

          <DropdownMenuItem hasCheckbox inset>
            <div className="flex">
              <MdOutlineGridView size={18} />
              <span className="pl-spacing-tighter-2">Grid</span>
            </div>
            <DropdownMenuCheckboxItem />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    ),
  },
};
