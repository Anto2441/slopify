import { HiOutlineGlobeAlt } from "react-icons/hi2";

import { Button } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";

export function SideBarFooter() {
  return (
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
  );
}
