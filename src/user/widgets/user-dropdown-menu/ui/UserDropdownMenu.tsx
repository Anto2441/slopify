import { Suspense } from "react";
import { GoLinkExternal } from "react-icons/go";

import { SignOutDropdownItem } from "@/auth/features/sign-out";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  Link,
} from "@/shared/ui/navigation";

import { MenuTrigger } from "./MenuTrigger";
import { UserFirstLetter } from "./UserFirstLetter";

interface UserDropdownMenuProps {
  /** The user. */
  user: {
    /** The user's name. */
    name?: string | null;
  };
}

/**
 * A component that displays a dropdown menu with user-related actions.
 */
export function UserDropdownMenu({ user }: UserDropdownMenuProps) {
  return (
    <DropdownMenu>
      <MenuTrigger>
        <Suspense>
          {user.name && <UserFirstLetter username={user.name} />}
        </Suspense>
      </MenuTrigger>

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

        <SignOutDropdownItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
