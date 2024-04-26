import { buttonVariants } from "@/shared/ui/inputs";
import { Link } from "@/shared/ui/navigation";
import { Paper } from "@/shared/ui/surfaces";

export function SideBarFollowPodcasts() {
  return (
    <Paper variant="elevated">
      <span className="block font-bold">
        Let’s find some podcasts to follow
      </span>

      <span className="mt-spacing-tighter-2 block text-sm">
        We’ll keep you updated on new episodes
      </span>

      <Link
        className={buttonVariants({
          className: "mt-spacing-looser",
          variant: "inverted-light",
          size: "medium",
        })}
        href="#"
      >
        Browse podcasts
      </Link>
    </Paper>
  );
}
