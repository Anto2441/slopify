"use client";

import React from "react";

import { usePlayer } from "@/player/entities/player";
import { Slider } from "@/shared/ui/inputs";
import { observer } from "mobx-react-lite";
import { SeekFeature } from "../model/SeekFeature";

export const Seekbar = observer(function Seekbar() {
  const player = usePlayer();
  const [seekFeature] = React.useState(() => new SeekFeature({ player }));

  return (
    <div className="flex w-full items-center justify-between">
      <span>Seeked: {player.currentTime}</span>
      <span className="text-font-size-smaller-2 text-color-subdued">0:00</span>
      {/* <ProgressBar value={progress} max={100} /> */}
      <Slider
        value={[player.progression]}
        onValueChange={([value]) => {
          console.log("value", value);
          seekFeature.execute(value);
        }}
      />
      <span className="text-font-size-smaller-2 text-color-subdued">
        {/* {formatTime(duration ?? 0)} */}
      </span>
    </div>
  );
});

// Helper function to format time in MM:SS format
// function formatTime(seconds: number): string {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = Math.floor(seconds % 60);
//   return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
// }
