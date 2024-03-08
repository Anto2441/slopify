import { HiPlay } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";

import { Image } from "../../data-display";
import { IconButton } from "../../inputs";
import { Paper } from "../Paper/Paper";

export interface CardProps {
  /**
   * Whether or not to round the top corners of the image.
   */
  roundedPicture?: boolean;
}

/**
 * Renders a Card component with an image, title, and description.
 */
export function Card({ roundedPicture }: CardProps) {
  return (
    <div className="group p-spacing-looser">
      <Paper className="p-spacing-base" variant="tinted">
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
            variant="accent"
            className="absolute bottom-spacing-tighter-2 right-spacing-tighter-2 translate-y-spacing-tighter-2 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <HiPlay />
          </IconButton>
        </div>
        <div className="mt-spacing-base">
          <a href="#" className="font-bold text-text-base">
            Todays Top Hits
          </a>
          <span className="line-clamp-2 text-font-size-smaller font-semibold text-text-subdued">
            Tate McRae is on top of the Hottest 50!
          </span>
        </div>
      </Paper>
    </div>
  );
}
