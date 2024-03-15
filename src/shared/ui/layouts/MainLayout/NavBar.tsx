import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { IconButton } from "../../inputs";
import { buttonVariants } from "../../inputs/Button/Button";
import { Link } from "../../navigation";

export function NavBar() {
  return (
    <div className="flex items-center justify-between px-spacing-base">
      <nav>
        <ul className="flex space-x-spacing-tighter-2">
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
        <ul className="flex items-center md:divide-x md:divide-decorative-base">
          <li className="hidden md:mr-spacing-base md:list-item">
            <ul className="flex">
              <li>
                <Link
                  href="#"
                  className={buttonVariants({
                    size: "large",
                    className:
                      "px-spacing-tighter-3 py-spacing-tighter tracking-widest",
                  })}
                >
                  Premium
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={buttonVariants({
                    size: "large",
                    className:
                      "px-spacing-tighter-3 py-spacing-tighter tracking-widest",
                  })}
                >
                  Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={buttonVariants({
                    size: "large",
                    className:
                      "px-spacing-tighter-3 py-spacing-tighter tracking-widest",
                  })}
                >
                  Télécharger
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex items-center">
              <li>
                <Link href="#" className={buttonVariants({ size: "large" })}>
                  S&apos;inscrire
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className={buttonVariants({
                    size: "large",
                    variant: "inverted-light",
                  })}
                >
                  Se connecter
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
