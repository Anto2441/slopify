import { IPlayer } from "@/player/entities/player";

import type { ISeekFeature } from "./ISeekFeature";

interface PlayFeatureDeps {
  /** The player to seek. */
  player: IPlayer;
}

export class SeekFeature implements ISeekFeature {
  constructor(private readonly deps: PlayFeatureDeps) {}

  execute(progress: number) {
    const position = (progress / 100) * (this.deps.player.duration || 0);

    this.deps.player.seek(position);
  }
}
