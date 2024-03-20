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

import { IconButton } from "@/shared/ui";

import { MainDetails } from "@/shared/ui/data-display/MainDetails/MainDetails";
import { Seekbar } from "./SeekBar";
import { VolumeBar } from "./VolumeBar";

/**
 * Renders the Player component.
 */
export function Player() {
  return (
    <div className="flex items-center justify-between overflow-hidden">
      <div className="flex shrink-0 items-center">
        <MainDetails
          artist="artist"
          picture="https://picsum.photos/300/300"
          pictureTopRounded
          pictureHeight={56}
          pictureWidth={56}
          title="Song title"
        />
        <div>
          <IconButton size="small" tooltip="Save to your library">
            <HiOutlineHeart />
          </IconButton>
        </div>
      </div>

      <div className="flex w-[40%] max-w-[722px] shrink-0 flex-col items-center">
        <div>
          <IconButton tooltip="Random" size="small">
            <IoShuffle />
          </IconButton>

          <IconButton tooltip="Previous" size="small">
            <MdSkipPrevious />
          </IconButton>

          <IconButton tooltip="Play" size="small" variant="inverted-light">
            <HiPlay />
          </IconButton>

          <IconButton tooltip="Next" size="small">
            <MdSkipNext />
          </IconButton>

          <IconButton tooltip="Repeat" size="small">
            <PiRepeat />
          </IconButton>
        </div>
        <Seekbar />
      </div>

      <div className="flex w-[30%] min-w-[180px] justify-end">
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
    </div>
  );
}
