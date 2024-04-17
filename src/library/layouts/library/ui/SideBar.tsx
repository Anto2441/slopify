import {
  HiHome,
  HiMagnifyingGlass,
  HiOutlineGlobeAlt,
  HiPlus,
  HiRectangleStack,
} from "react-icons/hi2";

import { SlopifyLogo } from "@/shared/ui/data-display";
import { Button, buttonVariants, IconButton } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";
import { Paper } from "@/shared/ui/surfaces";

import { HomeLink } from "../../../routes/home";
import { SearchLink } from "../../../routes/search";

export function SideBar() {
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

        <div className="grow space-y-spacing-looser overflow-scroll">
          <Paper variant="elevated">
            <span className="block font-bold">Create your first playlist</span>

            <span className=" mt-spacing-tighter-2 block text-sm">
              It’s easy, we’ll help you
            </span>

            <Button className="mt-spacing-looser" variant="inverted-light">
              Create playlist
            </Button>
          </Paper>

          <Paper variant="elevated">
            <span className="block font-bold">
              Let’s find some podcasts to follow
            </span>

            <span className="mt-spacing-tighter-2 block text-sm">
              We’ll keep you updated on new episodes
            </span>

            <Link
              className={buttonVariants({
                className: "mt-spacing-looser",
                variant: "inverted-light",
                size: "medium",
              })}
              href="#"
            >
              Browse podcasts
            </Link>
          </Paper>
        </div>

        <footer className="p-spacing-looser">
          <div className="mb-spacing-looser flex flex-wrap gap-spacing-tighter text-xs text-color-subdued">
            <Link href="#" underline="hover" target="_blank">
              Legal
            </Link>

            <Link href="#" underline="hover" target="_blank">
              Safety & Privacy Center
            </Link>

            <Link href="#" underline="hover" target="_blank">
              Privacy Policy
            </Link>

            <Link href="#" underline="hover" target="_blank">
              Cookies settings
            </Link>

            <Link href="#" underline="hover" target="_blank">
              About ads
            </Link>

            <Link href="#" underline="hover" target="_blank">
              Accessibility
            </Link>

            <Link href="#" underline="hover" target="_blank">
              Cookies
            </Link>
          </div>

          <Button variant="outlined">
            <HiOutlineGlobeAlt /> English
          </Button>
        </footer>
      </Paper>
    </nav>
  );
}
