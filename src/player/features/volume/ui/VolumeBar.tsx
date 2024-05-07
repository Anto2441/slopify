"use client";

import { observer } from "mobx-react-lite";
import React from "react";

import { usePlayer } from "@/player/entities/player";
import { Slider } from "@/shared/ui/inputs";
import { VolumeFeature } from "../model/VolumeFeature";
import { scaleVolumeToUnitRange } from "../utils/ScaleVolume";

/**
 * The VolumeBar component is a slider that allows the user to adjust the volume of the player.
 */
export const VolumeBar = observer(function VolumeBar() {
  const player = usePlayer();
  const [volumeFeature] = React.useState(() => new VolumeFeature({ player }));
  const defaultVolume = 25;

  return (
    <Slider
      defaultValue={[defaultVolume]}
      onValueChange={([volume]) => {
        volumeFeature.execute(scaleVolumeToUnitRange(volume));
      }}
    />
  );
});
