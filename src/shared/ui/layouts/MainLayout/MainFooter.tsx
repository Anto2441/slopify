import { HiBolt, HiCamera, HiLightBulb } from "react-icons/hi2";

import { IconButton } from "@/shared/ui";

export function MainFooter() {
  return (
    <div className="flex flex-col px-spacing-looser-3 pb-spacing-looser-4 pt-spacing-tighter-2">
      <div className="flex flex-wrap justify-between pt-spacing-looser-4">
        <div className="mb-spacing-looser-3 grid gap-spacing-tighter space-y-spacing-base md:mb-0 md:grid-cols-3 md:space-y-0">
          <nav>
            <p className="font-bold">Société</p>
            <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2 text-text-subdued">
              <li>
                <a href="/">À propos</a>
              </li>
              <li>
                <a href="/">Offres d&apos;emploi</a>
              </li>
              <li>
                <a href="/">For the record</a>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Communautés</p>
            <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2 text-text-subdued">
              <li>
                <a href="/">Espace artistes</a>
              </li>
              <li>
                <a href="/">Développeurs</a>
              </li>
              <li>
                <a href="/">Campagnes publicitaires</a>
              </li>
              <li>
                <a href="/">Investisseurs</a>
              </li>
              <li>
                <a href="/">Fournisseurs</a>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Liens utiles</p>
            <ul className="mt-spacing-tighter-2 flex flex-col space-y-spacing-tighter-2 text-text-subdued">
              <li>
                <a href="/">Assistance</a>
              </li>
              <li>
                <a href="/">Appli mobile gratuite</a>
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
