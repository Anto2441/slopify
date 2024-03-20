import { HiPlay } from "react-icons/hi2";

import { IconButton } from "../../inputs/IconButton/IconButton";
import { Image } from "../Image/Image";

export interface SelectionProps {
  /**The URL of the image to display.*/
  picture: string;
  /**The title of the selection.*/
  title: string;
}
/**
 * Renders a selection component with a picture, title, and a play button.
 */
export function Selection({ picture, title }: SelectionProps) {
  return (
    <div className="group relative flex items-center rounded-border-radius-base bg-background-tinted-base hover:bg-background-tinted-highlight">
      <Image
        className="mr-spacing-tighter-2 rounded-l-border-radius-base"
        src={picture}
        alt="album cover"
        width={48}
        height={48}
      />
      <p className="text-font-size-smaller font-bold">{title}</p>
      <IconButton
        className="absolute right-spacing-tighter-2 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        size="small"
        tooltip="Play"
        variant="accent"
      >
        <HiPlay />
      </IconButton>
    </div>
  );
}
