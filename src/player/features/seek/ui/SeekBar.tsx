"use client";

import { observer } from "mobx-react-lite";
import React from "react";

import { usePlayer } from "@/player/entities/player";
import { Slider } from "@/shared/ui/inputs";
import { SeekFeature } from "../model/SeekFeature";
import { formatTime } from "../utils/FormatTime";

export const Seekbar = observer(function Seekbar() {
  const player = usePlayer();
  const [seekFeature] = React.useState(() => new SeekFeature({ player }));

  return (
    <div className="flex w-full items-center justify-between">
      <span className="text-font-size-smaller-2 text-color-subdued">
        {formatTime(player.currentTime ?? 0)}
      </span>
      <Slider
        value={[player.progression]}
        onValueChange={([progress]) => seekFeature.execute(progress)}
        className="mx-spacing-tighter-2"
      />
      <span className="text-font-size-smaller-2 text-color-subdued">
        {formatTime(player.duration ?? 0)}
      </span>
    </div>
  );
});
