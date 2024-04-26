"use client";

import React from "react";

import { IPlayer } from "../model/IPlayer";
import { Player } from "../model/Player";
import { PlayerContext } from "../model/PlayerContext";

interface PlayerProviderProps {
  /** The children to render. */
  children: React.ReactNode;
  /** A player to provide. */
  player?: IPlayer;
}

/**
 * The PlayerProvider component provides the player to the children.
 */
export function PlayerProvider({
  children,
  player = new Player(),
}: PlayerProviderProps) {
  return (
    <PlayerContext.Provider value={player}>{children}</PlayerContext.Provider>
  );
}
