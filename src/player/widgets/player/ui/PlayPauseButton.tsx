"use client";

import { observer } from "mobx-react-lite";

import { usePlayer } from "../../../entities/player";
import { PauseButton } from "../../../features/pause";
import { PlayButton } from "../../../features/play";

interface PlayPauseButtonProps {
  /** The source of the song to play. */
  src: string;
}

/**
 * Button that toggles between play and pause states of the player.
 *
 * TODO: Not sure its the correct place to put it.
 * Would be great to have it in features instead but features cannot import from each other.
 */
export const PlayPauseButton = observer(function PlayPauseButton({
  src,
}: PlayPauseButtonProps) {
  const player = usePlayer();

  return player.isPlaying ? <PauseButton /> : <PlayButton src={src} />;
});
