import { IconButton, Image, Link } from "@/shared/ui";
import { BiPlay } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi2";

/**
 * Renders a table row component.
 */
export function TableRow() {
  return (
    <div className="group flex items-center justify-between rounded-md px-spacing-base py-spacing-tighter-2 hover:bg-background-tinted-base">
      <div className="justify-cente min-w-[40px] items-center">
        <span className="self-center text-color-subdued group-hover:hidden">
          1
        </span>
        <span className="hidden group-hover:flex">
          <BiPlay size={24} />
        </span>
      </div>

      <div className="flex items-center">
        <Image
          className="mr-spacing-tighter-2 rounded-md"
          src="https://picsum.photos/300/300"
          alt="album cover"
          width={40}
          height={40}
        />
        <div className="mx-spacing-tighter-2 flex flex-col">
          <Link href="#" underline="hover">
            Song title
          </Link>
          <Link
            className="text-font-size-smaller text-color-subdued group-hover:text-color-base"
            href="#"
            underline="hover"
          >
            Artist
          </Link>
        </div>
      </div>

      <div className="text-font-size-smaller text-color-subdued group-hover:text-color-base">
        Paid Salvation
      </div>

      <div className="text-font-size-smaller text-color-subdued">
        28 juillet 2020
      </div>

      <div className="flex min-w-[120px] items-center justify-end">
        <span className="mr-spacing-base hidden group-hover:flex">
          <IconButton size="small" tooltip="Save to your library">
            <HiOutlineHeart />
          </IconButton>
        </span>
        <span className="text-font-size-smaller text-color-subdued">3:14</span>
        <IconButton
          size="small"
          className="ml-spacing-tighter hidden group-hover:flex"
          tooltip="More options"
        >
          <BsThreeDots />
        </IconButton>
      </div>
    </div>
  );
}
