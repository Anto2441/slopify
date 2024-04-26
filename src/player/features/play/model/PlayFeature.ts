import { IPlayer } from "@/player/entities/player";

import type { IPlayFeature } from "./IPlayFeature";

interface PlayFeatureDeps {
  /** The player to pause. */
  player: IPlayer;
}

/**
 * The `PlayFeature` implements the `IPlayFeature` and provides the logic to play the playback of a song.
 */
export class PlayFeature implements IPlayFeature {
  constructor(private readonly deps: PlayFeatureDeps) {}

  execute(src: string) {
    this.deps.player.play(src);
  }
}
