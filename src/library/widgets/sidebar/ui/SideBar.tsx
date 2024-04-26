import { Suspense } from "react";
import {
  HiHome,
  HiMagnifyingGlass,
  HiPlus,
  HiRectangleStack,
} from "react-icons/hi2";

import { UserPlaylistsGrid } from "@/library/features/get-user-playlists/ui/UserPlaylistGrid";
import { getServerSession } from "@/shared/auth/next";
import { SlopifyLogo } from "@/shared/ui/data-display";
import { IconButton } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";
import { Paper } from "@/shared/ui/surfaces";
import { HomeLink } from "../../../routes/home";
import { SearchLink } from "../../../routes/search";
import { SideBarDropdown } from "./SideBarDropdown";
import { SideBarEmptyState } from "./SideBarEmptyState";

export async function SideBar() {
  const session = await getServerSession();

  return (
    <nav className="flex h-full w-[345px] shrink-0 flex-col">
      <Paper className="shrink-0 pb-spacing-base" padding="looser">
        <SlopifyLogo />

        <ul className="mt-spacing-looser space-y-spacing-base">
          <li>
            <HomeLink
              className="space-x-spacing-base font-bold transition-colors duration-200"
              variant="muted"
            >
              <HiHome className="text-[1.5em]" />

              <span>Home</span>
            </HomeLink>
          </li>

          <li>
            <SearchLink
              className="space-x-spacing-base font-bold transition-colors duration-200"
              variant="muted"
            >
              <HiMagnifyingGlass className="text-[1.5em]" />

              <span>Search</span>
            </SearchLink>
          </li>
        </ul>
      </Paper>

      <Paper className="mt-2 flex grow flex-col overflow-hidden pt-spacing-base">
        <header className="mb-spacing-looser flex justify-between pl-spacing-tighter pr-spacing-tighter-2">
          <Link
            href="#"
            className="space-x-spacing-tighter font-bold transition-colors duration-200"
            variant="muted"
          >
            <HiRectangleStack className="text-[1.5em]" />

            <span>Your Library</span>
          </Link>

          <IconButton
            size="small"
            tooltip="Create playlist or folder"
            variant="ghost"
          >
            <HiPlus />
          </IconButton>
        </header>

        {session && (
          <div className="grow space-y-spacing-tighter-4 overflow-scroll">
            <div className="mb-spacing-tighter-2 flex justify-between">
              <IconButton
                size="small"
                tooltip="Create playlist or folder"
                variant="ghost"
              >
                <HiMagnifyingGlass />
              </IconButton>

              <SideBarDropdown />
            </div>

            <Suspense fallback={<div>Loading user playlists...</div>}>
              {/* <UserPlaylistsCompact /> */}
              {/* <UserPlaylistsList /> */}
              <UserPlaylistsGrid />
            </Suspense>
          </div>
        )}

        {!session && <SideBarEmptyState />}
      </Paper>
    </nav>
  );
}
