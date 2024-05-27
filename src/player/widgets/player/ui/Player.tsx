import { CgMiniPlayer, CgPlayButtonR } from "react-icons/cg";
import {
  HiOutlineHeart,
  HiOutlineQueueList,
  HiOutlineSpeakerWave,
} from "react-icons/hi2";
import { IoShuffle } from "react-icons/io5";
import { LuMonitorSpeaker } from "react-icons/lu";
import {
  MdOutlineOpenInFull,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { TbMicrophone2 } from "react-icons/tb";

import { IconButton } from "@/shared/ui/inputs";
import { InlineMediaCard } from "@/shared/ui/surfaces";

import { LoopButton } from "../../../features/loop/ui/LoopButton";
import { Seekbar } from "../../../features/seek/ui/SeekBar";
import { VolumeBar } from "../../../features/volume/ui/VolumeBar";
import { PlayPauseButton } from "./PlayPauseButton";

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

          <PlayPauseButton src="https://p.scdn.co/mp3-preview/ecc6383aac4b3f4240ae699324573e61c39e6aaf?cid=cfe923b2d660439caf2b557b21f31221" />

          <IconButton tooltip="Next">
            <MdSkipNext />
          </IconButton>

          <LoopButton />
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
