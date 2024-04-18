import { HiBolt, HiCamera, HiLightBulb } from "react-icons/hi2";

import { IconButton } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";

/**
 * Component displaying external links.
 */
export function ExternalLinks() {
  return (
    <footer className="flex flex-col px-spacing-looser pb-spacing-looser-4 pt-spacing-looser-5">
      <div className="grid w-full gap-spacing-tighter space-y-spacing-base lg:mb-0 lg:mr-spacing-looser lg:grid-cols-4 lg:space-y-0">
        <nav>
          <p className="font-bold">Company</p>
          <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2">
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                About
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                For the Record
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <p className="font-bold">Communities</p>
          <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2">
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                For Artists
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Developpers
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Advertising
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Investors
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Vendors
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <p className="font-bold">Useful links</p>
          <ul className="mt-spacing-tighter-2 flex flex-col space-y-spacing-tighter-2">
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Support
              </Link>
            </li>
            <li>
              <Link href="#" underline="hover" target="_blank" variant="muted">
                Free Mobile App
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex space-x-spacing-base lg:justify-end">
            <li>
              <IconButton tooltip="Instagram" variant="tinted">
                <HiCamera />
              </IconButton>
            </li>

            <li>
              <IconButton tooltip="Twitter" variant="tinted">
                <HiBolt />
              </IconButton>
            </li>

            <li>
              <IconButton tooltip="Facebook" variant="tinted">
                <HiLightBulb />
              </IconButton>
            </li>
          </ul>
        </nav>
      </div>

      <hr className="my-spacing-looser-3 h-px border-0 bg-white/10" />

      <span className="text-sm text-color-subdued">© 2024 Slopify YZ</span>
    </footer>
  );
}
