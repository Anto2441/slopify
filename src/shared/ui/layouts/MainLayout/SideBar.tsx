import {
  GlobeAltIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import { Button, IconButton, Paper } from "@/shared/ui";

export function SideBar() {
  return (
    <nav className="flex h-full w-[345px] shrink-0 flex-col">
      <Paper className="shrink-0">
        <div className="flex pl-spacing-base font-bold text-text-base">
          <Image width={28} height={28} src="/logo.png" alt="Slopify logo" />

          <span className="ml-spacing-tighter-5">Slopify</span>
        </div>

        <ul className="mt-spacing-tighter space-y-spacing-base px-spacing-base py-spacing-tighter-2 text-text-subdued">
          <li>
            <a
              href="#"
              className="inline-flex items-center font-bold transition-colors duration-200 hover:text-text-base"
            >
              <HomeIcon className="size-6" />

              <span className="ml-spacing-base">Accueil</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex items-center font-bold transition-colors duration-200 hover:text-text-base"
            >
              <MagnifyingGlassIcon className="size-6" />

              <span className="ml-spacing-base">Rechercher</span>
            </a>
          </li>
        </ul>
      </Paper>

      <Paper className="mt-2 flex grow flex-col overflow-hidden pt-spacing-base">
        <header className="mb-spacing-looser flex justify-between px-spacing-tighter">
          <a
            href="#"
            className="inline-flex items-center font-bold text-text-subdued transition-colors duration-200 hover:text-text-base"
          >
            <RectangleStackIcon className="size-6" />

            <span className="ml-spacing-tighter">Bibliothèque</span>
          </a>

          <IconButton
            icon={<PlusIcon className="size-6 text-text-subdued" />}
          />
        </header>

        <div className="grow space-y-spacing-looser overflow-scroll">
          <Paper className="px-spacing-base py-spacing-base" elevation={2}>
            <span className="block font-bold">
              Créez votre première playlist
            </span>

            <span className=" mt-spacing-tighter-2 block text-sm">
              C&apos;est simple nous allons vous aider
            </span>

            <Button
              theme="inverted-light"
              className="mt-spacing-looser px-spacing-base py-spacing-tighter-4 text-sm"
            >
              Créer une playlist
            </Button>
          </Paper>

          <Paper className="px-spacing-base py-spacing-base" elevation={2}>
            <span className="block font-bold">
              Cherchons quelques podcasts auxquels vous abonner
            </span>

            <span className="mt-spacing-tighter-2 block text-sm">
              Nous vous transmettrons des informations sur les nouveaux épisodes
            </span>

            <Button
              theme="inverted-light"
              className="mt-spacing-looser px-spacing-base py-spacing-tighter-4 text-sm"
            >
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

          <Button
            className="flex flex-row-reverse items-center border border-essential-subdued p-spacing-base py-spacing-tighter-4 text-sm text-text-base"
            icon={<GlobeAltIcon className="mr-spacing-tighter-4 size-5" />}
          >
            Français
          </Button>
        </footer>
      </Paper>
    </nav>
  );
}
