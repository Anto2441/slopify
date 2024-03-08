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
            <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2 text-text-subdued">
              <li>
                <Link href="/">À propos</Link>
              </li>
              <li>
                <Link href="/">Offres d&apos;emploi</Link>
              </li>
              <li>
                <Link href="/">For the record</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Communautés</p>
            <ul className="mt-spacing-tighter-2 flex w-9/12 flex-col space-y-spacing-tighter-2 text-text-subdued">
              <li>
                <Link href="/">Espace artistes</Link>
              </li>
              <li>
                <Link href="/">Développeurs</Link>
              </li>
              <li>
                <Link href="/">Campagnes publicitaires</Link>
              </li>
              <li>
                <Link href="/">Investisseurs</Link>
              </li>
              <li>
                <Link href="/">Fournisseurs</Link>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Liens utiles</p>
            <ul className="mt-spacing-tighter-2 flex flex-col space-y-spacing-tighter-2 text-text-subdued">
              <li>
                <Link href="/">Assistance</Link>
              </li>
              <li>
                <Link href="/">Appli mobile gratuite</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-4">
          <div>
            <IconButton
              className="bg-background-elevated-base p-spacing-tighter hover:bg-white/40"
              icon={
                <HiCamera
                  className="size-5 text-text-base"
                  aria-hidden="true"
                />
              }
            />
          </div>
          <div>
            <IconButton
              className="bg-background-elevated-base p-spacing-tighter hover:bg-white/40"
              icon={
                <HiBolt className="size-5 text-text-base" aria-hidden="true" />
              }
            />
          </div>
          <div>
            <IconButton
              className="bg-background-elevated-base p-spacing-tighter hover:bg-white/40"
              icon={
                <HiLightBulb
                  className="size-5 text-text-base"
                  aria-hidden="true"
                />
              }
            />
          </div>
        </div>
      </div>

      <hr className="my-spacing-looser-2 h-px border-0 bg-white/10" />

      <span className="text-sm text-text-subdued">© 2024 Slopify YZ</span>
    </div>
  );
}
