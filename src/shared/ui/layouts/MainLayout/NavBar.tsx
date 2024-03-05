import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Button, IconButton } from "@/shared/ui";

export function NavBar() {
  return (
    <div className="flex items-center justify-between px-spacing-looser">
      <nav>
        <ul className="flex space-x-spacing-looser">
          <li>
            <IconButton icon={<ChevronLeftIcon className="size-6" />} />
          </li>
          <li>
            <IconButton icon={<ChevronRightIcon className="size-6" />} />
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center md:divide-x md:divide-white">
          <li className="hidden md:mr-spacing-base md:list-item">
            <ul className="flex">
              <li>
                <Button className="px-spacing-tighter-3 py-spacing-tighter tracking-widest">
                  Premium
                </Button>
              </li>
              <li>
                <Button className="px-spacing-tighter-3 py-spacing-tighter tracking-widest">
                  Assistance
                </Button>
              </li>
              <li>
                <Button className="px-spacing-tighter-3 py-spacing-tighter tracking-widest">
                  Télécharger
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex items-center">
              <li>
                <Button className="px-spacing-looser-2 py-spacing-tighter">
                  S&apos;inscrire
                </Button>
              </li>
              <li>
                <Button
                  className="min-h-spacing-looser-3 px-spacing-looser py-spacing-tighter"
                  theme="inverted-light"
                >
                  Se connecter
                </Button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
