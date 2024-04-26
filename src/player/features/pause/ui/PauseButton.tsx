"use client";

import { observer } from "mobx-react-lite";
import React from "react";
import { HiPause } from "react-icons/hi2";

import { IconButton } from "@/shared/ui/inputs";

import { usePlayer } from "../../../entities/player";
import { PauseFeature } from "../model/PauseFeature";

/**
 * Button to pause the player.
 */
export const PauseButton = observer(function PauseButton() {
  const player = usePlayer();

  const [pauseFeature] = React.useState(() => new PauseFeature({ player }));

  return (
    <IconButton
      tooltip="Pause"
      size="small"
      variant="inverted-light"
      onClick={() => pauseFeature.execute()}
    >
      <HiPause />
    </IconButton>
  );
});
