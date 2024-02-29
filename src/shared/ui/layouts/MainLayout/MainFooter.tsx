import { IconButton } from "@/shared/ui";
import { CameraIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { LightBulbIcon } from "@heroicons/react/24/outline";

export function MainFooter() {
  return (
    <div className="flex flex-col px-8 pb-10 pt-2">
      <div className="flex flex-wrap justify-between pt-10">
        <div className="mb-8 grid gap-3 space-y-4 md:mb-0 md:grid-cols-3 md:space-y-0">
          <nav>
            <p className="font-bold">Société</p>
            <ul className="mt-2 flex w-9/12 flex-col space-y-2 text-neutral-300">
              <li>
                <a href="/">À propos</a>
              </li>
              <li>
                <a href="/">Offres d'emploi</a>
              </li>
              <li>
                <a href="/">For the record</a>
              </li>
            </ul>
          </nav>

          <nav>
            <p className="font-bold">Communautés</p>
            <ul className="mt-2 flex w-9/12 flex-col space-y-2 text-neutral-300">
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
            <ul className="mt-2 flex flex-col space-y-2 text-neutral-300">
              <li>
                <a href="/">Assistance</a>
              </li>
              <li>
                <a href="/">Appli mobile gratuite</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-4">
          <div>
            <IconButton
              className="bg-neutral-900 p-2.5"
              icon={
                <CameraIcon className="size-5 text-white" aria-hidden="true" />
              }
            />
          </div>
          <div>
            <IconButton
              className="bg-neutral-900 p-2.5"
              icon={
                <BoltIcon className="size-5 text-white " aria-hidden="true" />
              }
            />
          </div>
          <div>
            <IconButton
              className="bg-neutral-900 p-2.5"
              icon={
                <LightBulbIcon
                  className="size-5 text-white"
                  aria-hidden="true"
                />
              }
            />
          </div>
        </div>
      </div>
      <hr className="my-8 h-px border-0 bg-neutral-900"></hr>
      <span className="text-sm font-semibold text-neutral-400">
        © 2024 Slopify YZ
      </span>
    </div>
  );
}
