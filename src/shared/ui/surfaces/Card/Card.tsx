import { HiPlay } from "react-icons/hi2";
import { twJoin } from "tailwind-merge";

import React from "react";
import { Image } from "../../data-display";
import { IconButton } from "../../inputs";
import { Paper } from "../Paper/Paper";

export interface CardProps {
  /** Whether the image should have a circular shape (true) or a square shape (false). Defaults to false. */
  roundedPicture?: boolean;
  /** The size (width and height) of the image in pixels. */
  pictureSize: number;
  /** The URL of the image to display. */
  pictureUrl: string;
  /** The subtitle of the card. */
  subtitle: string;
  /** The optionnal subtitle of the card. */
  subtitleBis?: string;
  /** The tooltip info of the card. */
  tooltip: string;
  /** The title of the card. */
  title: string | React.ReactNode;
  /** The subtitle of the card. */
  $subtitle?: React.ReactNode;
}

/**
 * Renders a Card component with an image, title, and description.
 */
export function Card({
  roundedPicture,
  pictureSize,
  pictureUrl,
  subtitle,
  subtitleBis,
  title,
  tooltip,
  $subtitle,
}: CardProps) {
  return (
    <Paper className="group max-w-max" variant="tinted">
      <div className="relative">
        <Image
          src={pictureUrl}
          width={pictureSize}
          height={pictureSize}
          alt=""
          className={twJoin(
            `rounded-border-radius-larger`,
            roundedPicture && `rounded-full`,
          )}
        />
        <IconButton
          className="absolute bottom-spacing-tighter-2 right-spacing-tighter-2 translate-y-spacing-tighter-2 opacity-0 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          size="large"
          tooltip={`Read: ${tooltip}`}
          variant="accent"
        >
          <HiPlay />
        </IconButton>
      </div>
      <div className="mt-spacing-base flex flex-col">
        <span className="truncate font-bold text-color-base">{title}</span>

        <div className="flex items-center gap-spacing-tighter-4">
          {React.Children.map($subtitle, (child, index) => {
            const $child =
              React.isValidElement(child) && React.cloneElement(child);

            if (index > 0) {
              return (
                <>
                  <p className="text-color-subdued">•</p>

                  {$child}
                </>
              );
            }

            return $child;
          })}
          {/* <Link
            href="#"
            className="line-clamp-2 text-font-size-smaller font-semibold"
            underline="hover"
            variant="muted"
          >
            {subtitle}
          </Link>
          {subtitleBis && (
            <>
              <p className="text-color-subdued">•</p>
              <p className="truncate text-font-size-smaller text-color-subdued">
                {subtitleBis}
              </p>
            </>
          )} */}
        </div>
      </div>
    </Paper>
  );
}
