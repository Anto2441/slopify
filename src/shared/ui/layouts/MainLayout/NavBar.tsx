import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

import { Button, IconButton } from "@/shared/ui";

export function NavBar() {
  return (
    <div className="flex items-center justify-between px-spacing-looser">
      <nav>
        <ul className="flex space-x-spacing-tighter-2">
          <li>
            {/* TODO: replace with Link */}
            <IconButton disabled size="small" variant="over-media">
              <HiChevronLeft />
            </IconButton>
          </li>

          <li>
            {/* TODO: replace with Link */}
            <IconButton size="small" variant="over-media">
              <HiChevronRight />
            </IconButton>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center md:divide-x md:divide-decorative-base">
          <li className="hidden md:mr-spacing-base md:list-item">
            <ul className="flex">
              <li>
                {/* TODO: replace with Link */}
                <Button
                  className="px-spacing-tighter-3 py-spacing-tighter tracking-widest"
                  size="large"
                >
                  Premium
                </Button>
              </li>
              <li>
                {/* TODO: replace with Link */}
                <Button
                  className="px-spacing-tighter-3 py-spacing-tighter tracking-widest"
                  size="large"
                >
                  Assistance
                </Button>
              </li>
              <li>
                {/* TODO: replace with Link */}
                <Button
                  className="px-spacing-tighter-3 py-spacing-tighter tracking-widest"
                  size="large"
                >
                  Télécharger
                </Button>
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex items-center">
              <li>
                {/* TODO: replace with Link */}
                <Button size="large">S&apos;inscrire</Button>
              </li>

              <li>
                {/* TODO: replace with Link */}
                <Button variant="inverted-light" size="large">
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
