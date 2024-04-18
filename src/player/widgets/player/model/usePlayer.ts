import React from "react";

import { Player } from "../../../../player/entities/player";

export function usePlayer() {
  const [player] = React.useState(() => new Player());

  return player;
}
