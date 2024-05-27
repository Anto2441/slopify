"use client";
import { observer } from "mobx-react-lite";
import React from "react";
import { PiRepeat } from "react-icons/pi";

import { usePlayer } from "@/player/entities/player";
import { IconButton } from "@/shared/ui/inputs";
import { LoopFeature } from "../model/LoopFeature";

export const LoopButton = observer(function LoopButton() {
  const player = usePlayer();
  const [loopFeature] = React.useState(() => new LoopFeature({ player }));

  const handleClick = () => {
    const newRepeatingState = !player.isLooping;
    loopFeature.execute(newRepeatingState);
  };

  return (
    <IconButton tooltip="Repeat" size="small" onClick={handleClick}>
      <PiRepeat
        className={
          player.isLooping ? "text-color-bright-accent" : "text-color-subdued"
        }
      />
    </IconButton>
  );
});
