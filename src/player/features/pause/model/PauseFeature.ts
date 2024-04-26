import type { IPlayer } from "../../../entities/player";
import type { IPauseFeature } from "./IPauseFeature";

interface PauseFeatureDeps {
  /** The player to pause. */
  player: IPlayer;
}

/**
 * The `PauseFeature` implements the `IPauseFeature` and provides the logic to pause the playback of a song.
 */
export class PauseFeature implements IPauseFeature {
  constructor(private readonly deps: PauseFeatureDeps) {}

  execute() {
    this.deps.player.pause();
  }
}
