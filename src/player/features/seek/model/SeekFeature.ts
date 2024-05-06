import { IPlayer } from "@/player/entities/player";

import type { ISeekFeature } from "./ISeekFeature";

interface PlayFeatureDeps {
  /** The player to seek. */
  player: IPlayer;
}
export class SeekFeature implements ISeekFeature {
  constructor(private readonly deps: PlayFeatureDeps) {}

  execute(progression: number) {
    this.deps.player.seek(progression);
  }
}
