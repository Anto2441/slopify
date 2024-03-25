import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { CiSettings } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { LuArrowDownCircle } from "react-icons/lu";
import { IconButton } from "../../inputs";
import { buttonVariants } from "../../inputs/Button/Button";
import { Link } from "../../navigation";

export function NavBarConnected() {
  return (
    <div className="flex items-center justify-between px-spacing-base">
      <nav>
        <ul className="flex space-x-spacing-tighter-3">
          <li>
            {/* TODO: replace with Link */}
            <IconButton
              disabled
              size="small"
              tooltip="Go back"
              variant="over-media"
            >
              <HiChevronLeft />
            </IconButton>
          </li>

          <li>
            {/* TODO: replace with Link */}
            <IconButton size="small" tooltip="Go forward" variant="over-media">
              <HiChevronRight />
            </IconButton>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex items-center gap-spacing-tighter-2">
          <li>
            <Link
              href="/"
              className={buttonVariants({
                size: "medium",
                variant: "inverted-light",
              })}
            >
              Discover Premium
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={buttonVariants({
                size: "medium",
                variant: "over-media",
              })}
            >
              <LuArrowDownCircle />
              Install app
            </Link>
          </li>
          <li>
            <Link href="/">
              <IconButton size="small" tooltip="news" variant="over-media">
                <GoBell />
              </IconButton>
            </Link>
          </li>
          {/* TODO: replace with DropdownMenu component when it's ready */}
          <li>
            <IconButton size="small" tooltip="User name" variant="accent">
              <CiSettings />
            </IconButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}
