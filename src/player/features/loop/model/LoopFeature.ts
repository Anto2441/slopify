import type { IPlayer } from "../../../entities/player";
import type { ILoopFeature } from "./ILoopFeature";

interface LoopFeatureDeps {
  /** The player to loop. */
  player: IPlayer;
}

/**
 * The `LoopFeature` implements the `ILoopFeature` and provides the logic to repeat the song.
 */
export class LoopFeature implements ILoopFeature {
  constructor(private readonly deps: LoopFeatureDeps) {}

  execute(repeat: boolean) {
    this.deps.player.loop(repeat);
  }
}
