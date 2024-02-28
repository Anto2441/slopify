import Image from "next/image";
import { Button, IconButton, Paper } from "@/shared/ui";
import { HomeIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export function SideBar() {
  return (
    <nav className="flex h-full w-[345px] shrink-0 flex-col p-2">
      <Paper className="shrink-0 px-6 py-5">
        <div className="flex font-bold text-white">
          <Image width={28} height={28} src="/logo.png" alt="Slopify logo" />
          <p className="ml-0.5">Slopify</p>
        </div>

        <ul className="mt-5 space-y-5">
          <li>
            <a href="" className="flex items-center">
              <HomeIcon
                className="size-6 text-neutral-300"
                aria-hidden="true"
              />
              <p className="ml-4 font-bold text-neutral-300">Accueil</p>
            </a>
          </li>
          <li>
            <a href="" className="flex items-center">
              <MagnifyingGlassIcon
                className="size-6 text-neutral-300"
                aria-hidden="true"
              />
              <p className="ml-4 font-bold text-neutral-300">Rechercher</p>
            </a>
          </li>
        </ul>
      </Paper>

      <Paper className="mt-2 flex grow flex-col overflow-hidden pt-4">
        <header className="flex justify-between px-6 pb-2">
          <a href="" className="flex items-center">
            <RectangleStackIcon
              className="size-6 text-neutral-300"
              aria-hidden="true"
            />
            <p className="ml-4 font-bold text-neutral-300">Bibliothèque</p>
          </a>
          <IconButton
            icon={
              <PlusIcon
                className="size-6 text-neutral-400"
                aria-hidden="true"
              />
            }
          />
        </header>

        <div className="grow overflow-scroll">
          <Paper elevation={2} className="mx-2 my-4 p-4">
            <span className="block font-bold">
              Créez votre première playlist
            </span>
            <span className=" mt-1 block text-sm">
              C&apos;est simple nous allons vous aider
            </span>
            <Button variant="secondary" className="mt-4 px-4 text-sm">
              Créer une playlist
            </Button>
          </Paper>

          <Paper elevation={2} className="mx-2 mt-6 p-4">
            <span className="block font-bold">
              Cherchons quelques podcasts auxquels vous abonner
            </span>
            <span className=" mt-1 block text-sm">
              Nous vous transmettrons des informations sur les nouveaux épisodes
            </span>
            <Button variant="secondary" className="mt-4 px-4 text-sm">
              Parcourir les podcasts
            </Button>
          </Paper>
        </div>
      </Paper>

      <footer className="shrink-0 rounded-b-lg bg-neutral-950 pb-8">
        <div className="shrink-0 p-6">
          <div className="flex-wrap">
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              Légal
            </a>
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              Centre de sécurité et de confidentialité
            </a>
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              Protection des données
            </a>
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              Paramètre des cookies
            </a>
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              À propos des pubs
            </a>
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              Accessibilité
            </a>
            <a href="" className="mr-4 text-xs font-semibold text-neutral-300">
              Cookies
            </a>
          </div>
        </div>

        <Button
          className="ml-4 flex flex-row-reverse items-center border px-3 py-1 text-sm text-white"
          icon={
            <GlobeAltIcon
              className="mr-1 size-5 text-white"
              aria-hidden="true"
            />
          }
        >
          Français
        </Button>
      </footer>
    </nav>
  );
}
