"use client";

import { observer } from "mobx-react-lite";
import React from "react";

import { usePlayer } from "@/player/entities/player";
import { Slider } from "@/shared/ui/inputs";
import { VolumeFeature } from "../model/VolumeFeature";
import { convertVolumeToPercentage } from "../utils/ScaleVolume";

/**
 * The VolumeBar component is a slider that allows the user to adjust the volume of the player.
 */
export const VolumeBar = observer(function VolumeBar() {
  const player = usePlayer();
  const [volumeFeature] = React.useState(() => new VolumeFeature({ player }));

  return (
    <Slider
      value={[convertVolumeToPercentage(player.currentVolume)]}
      onValueChange={([volume]) => {
        volumeFeature.execute(volume);
      }}
    />
  );
});
