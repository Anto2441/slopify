import Image from "next/image";
import { IoMdPlay } from "react-icons/io";
import { twJoin } from "tailwind-merge";

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
            alt="card picture"
            className={twJoin(
              `rounded-border-radius-larger`,
              roundedPicture && `rounded-full`,
            )}
          />
          <IconButton
            className="theme-accent absolute bottom-spacing-tighter-2 right-spacing-tighter-2 translate-y-spacing-tighter-2 bg-background-base p-spacing-tighter opacity-0 transition-all duration-300 hover:scale-105 hover:bg-background-highlight group-hover:translate-y-0 group-hover:opacity-100"
            icon={
              <IoMdPlay className="size-4 text-text-base" aria-hidden="true" />
            }
          />
        </div>
        <div className="mt-spacing-base">
          <a href="" className="font-bold text-text-base">
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
