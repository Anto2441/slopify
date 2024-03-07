import {
  HiHome,
  HiMagnifyingGlass,
  HiOutlineGlobeAlt,
  HiPlus,
  HiRectangleStack,
} from "react-icons/hi2";

import { SlopifyLogo } from "../../data-display";
import { Button, IconButton } from "../../inputs";
import { Paper } from "../../surfaces";

export function SideBar() {
  return (
    <nav className="flex h-full w-[345px] shrink-0 flex-col">
      <Paper className="shrink-0 px-spacing-looser pb-spacing-base pt-spacing-looser">
        <SlopifyLogo />

        <ul className="mt-spacing-looser space-y-spacing-base text-text-subdued">
          <li>
            <a
              href="#"
              className="inline-flex items-center space-x-spacing-base font-bold transition-colors duration-200 hover:text-text-base"
            >
              <HiHome className="text-[1.5em]" />

              <span>Accueil</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex items-center space-x-spacing-base font-bold transition-colors duration-200 hover:text-text-base"
            >
              <HiMagnifyingGlass className="text-[1.5em]" />

              <span>Rechercher</span>
            </a>
          </li>
        </ul>
      </Paper>

      <Paper className="mt-2 flex grow flex-col overflow-hidden pt-spacing-base">
        <header className="mb-spacing-looser flex justify-between px-spacing-tighter">
          <a
            href="#"
            className="inline-flex items-center space-x-spacing-tighter font-bold text-text-subdued transition-colors duration-200 hover:text-text-base"
          >
            <HiRectangleStack className="text-[1.5em]" />

            <span>Bibliothèque</span>
          </a>

          <IconButton
            icon={<HiPlus className="text-[1.5em] text-text-subdued" />}
          />
        </header>

        <div className="grow space-y-spacing-looser overflow-scroll">
          <Paper className="px-spacing-base py-spacing-base" variant="elevated">
            <span className="block font-bold">
              Créez votre première playlist
            </span>

            <span className=" mt-spacing-tighter-2 block text-sm">
              C&apos;est simple nous allons vous aider
            </span>

            <Button className="mt-spacing-looser" variant="inverted-light">
              Créer une playlist
            </Button>
          </Paper>

          <Paper className="px-spacing-base py-spacing-base" variant="elevated">
            <span className="block font-bold">
              Cherchons quelques podcasts auxquels vous abonner
            </span>

            <span className="mt-spacing-tighter-2 block text-sm">
              Nous vous transmettrons des informations sur les nouveaux épisodes
            </span>

            <Button className="mt-spacing-looser" variant="inverted-light">
              Parcourir les podcasts
            </Button>
          </Paper>
        </div>

        <footer className="p-spacing-looser">
          <div className="mb-spacing-looser flex flex-wrap gap-spacing-tighter text-xs text-text-subdued">
            <a href="#">Légal</a>

            <a href="#">Centre de sécurité et de confidentialité</a>

            <a href="#">Protection des données</a>

            <a href="#">Paramètre des cookies</a>

            <a href="#">À propos des pubs</a>

            <a href="#">Accessibilité</a>

            <a href="#">Cookies</a>
          </div>

          <Button variant="outlined">
            <HiOutlineGlobeAlt /> Français
          </Button>
        </footer>
      </Paper>
    </nav>
  );
}
