"use client";

import React from "react";

import { PlayerContext } from "./PlayerContext";

/**
 * Retrieve the player entity from the PlayerContext.
 *
 * This hook must be used within a PlayerProvider.
 */
export function usePlayer() {
  const player = React.useContext(PlayerContext);

  if (!player) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }

  return player;
}
