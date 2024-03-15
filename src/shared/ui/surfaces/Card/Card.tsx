import { HiPlay } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";

import { Image } from "../../data-display";
import { IconButton } from "../../inputs";
import { Link } from "../../navigation";
import { Paper } from "../Paper/Paper";

export interface CardProps {
  /**
   * Whether the image should be rounded.
   * @default false
   */
  roundedPicture?: boolean;
}

/**
 * Renders a Card component with an image, title, and description.
 */
export function Card({ roundedPicture }: CardProps) {
  return (
    <Paper className="group max-w-max" variant="tinted">
      <div className="relative">
        <Image
          src="https://picsum.photos/300/300"
          width={300}
          height={300}
          alt=""
          className={twJoin(
            `rounded-border-radius-larger`,
            roundedPicture && `rounded-full`,
          )}
        />
        <IconButton
          tooltip="Play Todays Top Hits"
          variant="accent"
          className="absolute bottom-spacing-tighter-2 right-spacing-tighter-2 translate-y-spacing-tighter-2 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <HiPlay />
        </IconButton>
      </div>
      <div className="mt-spacing-base flex flex-col">
        <span className="font-bold text-color-base">Todays Top Hits</span>
        <Link
          href="#"
          className="line-clamp-2 text-font-size-smaller font-semibold"
          underline="hover"
          variant="muted"
        >
          Tate McRae is on top of the Hottest 50!
        </Link>
      </div>
    </Paper>
  );
}
