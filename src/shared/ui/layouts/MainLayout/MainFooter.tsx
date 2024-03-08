import { HiBolt, HiCamera, HiLightBulb } from "react-icons/hi2";

import { IconButton } from "../../inputs";
import { Link } from "../../navigation";

export function MainFooter() {
  return (
    <div className="flex flex-col px-spacing-looser-3 pb-spacing-looser-4 pt-spacing-tighter-2">
      <div className="flex flex-wrap justify-between pt-spacing-looser-4">
        <div className="mb-spacing-looser-3 grid gap-spacing-tighter space-y-spacing-base md:mb-0 md:grid-cols-3 md:space-y-0">
          <nav>
            <p className="font-bold">Société</p>
            <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2">
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Offres d&apos;emploi
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  For the record
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Communautés</p>
            <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2">
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Espace artistes
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Développeurs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Campagnes publicitaires
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Investisseurs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Fournisseurs
                </Link>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Liens utiles</p>
            <ul className="mt-spacing-tighter-2 flex flex-col space-y-spacing-tighter-2">
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  underline="hover"
                  target="_blank"
                  variant="muted"
                >
                  Appli mobile gratuite
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="space-x-spacing-base">
          <IconButton variant="tinted">
            <HiCamera />
          </IconButton>

          <IconButton variant="tinted">
            <HiBolt />
          </IconButton>

          <IconButton variant="tinted">
            <HiLightBulb />
          </IconButton>
        </div>
      </div>

      <hr className="my-spacing-looser-2 h-px border-0 bg-white/10" />

      <span className="text-sm text-text-subdued">© 2024 Slopify YZ</span>
    </div>
  );
}
