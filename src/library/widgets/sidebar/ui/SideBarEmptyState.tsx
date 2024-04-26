import { SideBarCreatePlaylist } from "./SideBarCreatePlaylist";
import { SideBarFollowPodcasts } from "./SideBarFollowPodcasts";
import { SideBarFooter } from "./SideBarFooter";

export function SideBarEmptyState() {
  return (
    <>
      <div className="grow space-y-spacing-looser overflow-scroll">
        <SideBarCreatePlaylist />
        <SideBarFollowPodcasts />
      </div>
      <SideBarFooter />
    </>
  );
}
