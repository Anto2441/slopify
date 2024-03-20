import { Image, Link } from "@/shared/ui";

interface MainDetailsProps {
  artist: string;
  picture: string;
  pictureHeight: number;
  pictureTopRounded?: boolean;
  pictureWidth: number;
  title: string;
}

/**
 * Renders the main details of an album, including the artist, picture, picture dimensions, title, and picture styling.
 */
export function MainDetails({
  artist,
  picture,
  pictureHeight,
  pictureTopRounded,
  pictureWidth,
  title,
}: MainDetailsProps) {
  return (
    <div className="flex items-center ">
      <Image
        alt="album cover"
        className={`mr-spacing-tighter-2 ${pictureTopRounded ? "rounded-t-md" : "rounded-md"}`}
        src={picture}
        height={pictureHeight}
        width={pictureWidth}
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
          {artist}
        </Link>
      </div>
    </div>
  );
}
