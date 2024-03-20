import { Image, Link } from "@/shared/ui";

export interface InlineMediaCardProps {
  /** URL of the album cover picture. */
  picture: string;
  /** Height and widthof the album cover picture. */
  pictureSize: number;
  /** Whether the picture should have a rounded top or not. */
  pictureTopRounded?: boolean;
  /** Artist name of the album. */
  subtitle: string;
  /** Title of the album. */
  title: string;
}

/**
 * Renders the main details of an album, including the artist, picture, picture dimensions, title, and picture styling.
 */
export function InlineMediaCard({
  subtitle,
  picture,
  pictureSize,
  pictureTopRounded,
  title,
}: InlineMediaCardProps) {
  return (
    <div className="flex items-center ">
      <Image
        alt="cover"
        className={`mr-spacing-tighter-2 ${pictureTopRounded ? "rounded-t-md" : "rounded-md"}`}
        src={picture}
        height={pictureSize}
        width={pictureSize}
      />
      <div className="mx-spacing-tighter-2 flex flex-col">
        <Link className="text-font-size-smaller" href="#" underline="hover">
          {title}
        </Link>
        <Link
          className="text-font-size-smaller-2 text-color-subdued"
          href="#"
          underline="hover"
        >
          {subtitle}
        </Link>
      </div>
    </div>
  );
}
