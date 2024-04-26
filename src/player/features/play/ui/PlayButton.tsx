"use client";

import { observer } from "mobx-react-lite";
import React from "react";
import { HiPlay } from "react-icons/hi2";

import { IconButton } from "@/shared/ui/inputs";

import { usePlayer } from "../../../entities/player";
import { PlayFeature } from "../model/PlayFeature";

interface PlayButtonProps {
  /** The source of the song to play. */
  src: string;
}

/**
 * Button to play the player.
 */
export const PlayButton = observer(function PlayButton({
  src,
}: PlayButtonProps) {
  const player = usePlayer();

  const [playFeature] = React.useState(() => new PlayFeature({ player }));

  return (
    <IconButton
      size="small"
      tooltip="Play"
      variant="inverted-light"
      onClick={() => playFeature.execute(src)}
    >
      <HiPlay />
    </IconButton>
  );
});
