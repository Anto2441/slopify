import { Button, IconButton } from "@/shared/ui";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export function NavBar() {
  return (
    <div className="flex items-center justify-between rounded-t-lg px-5 py-4">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <IconButton
              icon={
                <ChevronLeftIcon
                  className="size-6 text-neutral-400"
                  aria-hidden="true"
                />
              }
            />
          </li>
          <li>
            <IconButton
              icon={
                <ChevronRightIcon
                  className="size-6 text-neutral-400"
                  aria-hidden="true"
                />
              }
            />
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center md:divide-x md:divide-neutral-400">
          <li className="hidden md:mr-4 md:list-item">
            <ul className="flex -space-x-1">
              <li>
                <Button className="p-2 text-neutral-400">Premium</Button>
              </li>
              <li>
                <Button className="p-2 text-neutral-400">Assistance</Button>
              </li>
              <li>
                <Button className="p-2 text-neutral-400">Télécharger</Button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex items-center">
              <li>
                <Button className="px-8 text-neutral-400">
                  S&apos;inscrire
                </Button>
              </li>
              <li>
                <Button className="px-8 py-3" variant="secondary">
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
