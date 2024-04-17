import { CgMiniPlayer, CgPlayButtonR } from "react-icons/cg";
import {
  HiOutlineHeart,
  HiOutlineQueueList,
  HiOutlineSpeakerWave,
  HiPlay,
} from "react-icons/hi2";
import { IoShuffle } from "react-icons/io5";
import { LuMonitorSpeaker } from "react-icons/lu";
import {
  MdOutlineOpenInFull,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { PiRepeat } from "react-icons/pi";
import { TbMicrophone2 } from "react-icons/tb";

import { IconButton } from "@/shared/ui/inputs";
import { InlineMediaCard } from "@/shared/ui/surfaces";

import { Seekbar } from "./SeekBar";
import { VolumeBar } from "./VolumeBar";

/**
 * Renders the Player component.
 */
export function Player() {
  return (
    <footer className="flex items-center justify-between gap-spacing-base">
      <div className="flex flex-1 items-center">
        <InlineMediaCard
          picture="https://picsum.photos/300/300"
          pictureSize={56}
          subtitle="artist"
          title="Song title"
        />

        <IconButton size="small" tooltip="Save to your library">
          <HiOutlineHeart />
        </IconButton>
      </div>

      <div className="flex flex-1 flex-col items-center">
        <div>
          <IconButton tooltip="Random" size="small">
            <IoShuffle />
          </IconButton>

          <IconButton tooltip="Previous">
            <MdSkipPrevious />
          </IconButton>

          <IconButton tooltip="Play" size="small" variant="inverted-light">
            <HiPlay />
          </IconButton>

          <IconButton tooltip="Next">
            <MdSkipNext />
          </IconButton>

          <IconButton tooltip="Repeat" size="small">
            <PiRepeat />
          </IconButton>
        </div>

        <Seekbar />
      </div>

      <div className="flex flex-1 justify-end">
        <IconButton tooltip="Now playing view" size="small">
          <CgPlayButtonR />
        </IconButton>

        <IconButton tooltip="Lyrics" size="small">
          <TbMicrophone2 />
        </IconButton>

        <IconButton tooltip="Queue" size="small">
          <HiOutlineQueueList />
        </IconButton>

        <IconButton tooltip="Connect to a device" size="small">
          <LuMonitorSpeaker />
        </IconButton>

        <div className="flex w-28">
          <IconButton tooltip="Mute" size="small">
            <HiOutlineSpeakerWave />
          </IconButton>

          <VolumeBar />
        </div>

        <IconButton tooltip="Open mini player" size="small">
          <CgMiniPlayer />
        </IconButton>

        <IconButton tooltip="Fullscreen" size="small">
          <MdOutlineOpenInFull />
        </IconButton>
      </div>
    </footer>
  );
}
