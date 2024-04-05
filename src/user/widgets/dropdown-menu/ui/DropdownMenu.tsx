import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Link,
  DropdownMenu as SharedDropdownMenu,
} from "@/shared/ui/navigation";
import { GoLinkExternal } from "react-icons/go";
import { TbLetterA } from "react-icons/tb";
import { SignOutListItem } from "./SignOutListItem";

export function DropdownMenu() {
  return (
    <SharedDropdownMenu>
      <div className="flex items-center justify-center">
        <DropdownMenuTrigger asChild>
          {/* <IconButton size="small" tooltip="Settings" variant="accent">
            <TbLetterA />
          </IconButton> */}
          <button type="button">
            <TbLetterA />
          </button>
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

          <SignOutListItem />
        </DropdownMenuContent>
      </div>
    </SharedDropdownMenu>
  );
}
