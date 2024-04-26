"use client";

import React from "react";

import type { IPlayer } from "./IPlayer";

/**
 * Context for the Player entity.
 *
 * The Player context is used to provide access to the IPlayer interface to its consumers.
 * This allows components to access and interact with the Player entity.
 */
export const PlayerContext = React.createContext<IPlayer | undefined>(
  undefined,
);
