import { GoBell } from "react-icons/go";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { LuArrowDownCircle } from "react-icons/lu";

import { SignInLink } from "@/auth/routes/sign-in";
import { SignUpLink } from "@/auth/routes/sign-up";
import { getServerSession } from "@/shared/auth/next";
import { buttonVariants, IconButton } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";
import { UserDropdownMenu } from "@/user/widgets/user-dropdown-menu";

export async function TopBar() {
  const session = await getServerSession();

  return (
    <header className="flex items-center justify-between px-spacing-base py-spacing-tighter-2">
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
        {session && (
          <ul className="flex items-center gap-spacing-tighter-2">
            <li>
              <Link
                href="#"
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
                href="#"
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
              <Link href="#">
                <IconButton size="small" tooltip="news" variant="over-media">
                  <GoBell />
                </IconButton>
              </Link>
            </li>

            <li>{session.user && <UserDropdownMenu user={session.user} />}</li>
          </ul>
        )}

        {!session && (
          <ul className="flex items-center">
            <li>
              <SignUpLink className={buttonVariants({ size: "large" })}>
                Sign up
              </SignUpLink>
            </li>

            <li>
              <SignInLink
                className={buttonVariants({
                  size: "large",
                  variant: "inverted-light",
                })}
              >
                Log in
              </SignInLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
