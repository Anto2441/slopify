"use client";

import React from "react";
import { HiBars3, HiListBullet } from "react-icons/hi2";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/navigation";
import { MdOutlineGridView } from "react-icons/md";

export function SideBarDropdown() {
  const [display, setDisplay] = React.useState("compact");

  return (
    <DropdownMenu>
      <div className="flex items-center justify-center">
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-spacing-tighter-4 text-color-subdued"
          >
            <span>Latest</span>
            <HiBars3 />
          </button>
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

          <DropdownMenuRadioGroup value={display} onValueChange={setDisplay}>
            <DropdownMenuRadioItem value="compact">
              <div className="flex ">
                <HiBars3 size={18} />
                <span className="pl-spacing-tighter-2">Compact</span>
              </div>
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="list" data-state="checked">
              <div className="flex">
                <HiListBullet size={18} />
                <span className="pl-spacing-tighter-2">List</span>
              </div>
            </DropdownMenuRadioItem>

            <DropdownMenuRadioItem value="grid">
              <div className="flex">
                <MdOutlineGridView size={18} />
                <span className="pl-spacing-tighter-2">Grid</span>
              </div>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
