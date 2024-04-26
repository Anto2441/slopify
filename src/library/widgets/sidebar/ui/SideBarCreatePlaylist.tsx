import { Button } from "@/shared/ui/inputs";
import { Paper } from "@/shared/ui/surfaces";

export function SideBarCreatePlaylist() {
  return (
    <div className="grow space-y-spacing-looser overflow-scroll">
      <Paper variant="elevated">
        <span className="block font-bold">Create your first playlist</span>

        <span className=" mt-spacing-tighter-2 block text-sm">
          It’s easy, we’ll help you
        </span>

        <Button className="mt-spacing-looser" variant="inverted-light">
          Create playlist
        </Button>
      </Paper>
    </div>
  );
}
