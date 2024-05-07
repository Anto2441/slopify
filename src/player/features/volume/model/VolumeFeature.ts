import { IPlayer } from "@/player/entities/player";

import type { IVolumeFeature } from "./IVolumeFeature";

interface VolumeFeatureDeps {
  player: IPlayer;
}

export class VolumeFeature implements IVolumeFeature {
  constructor(private readonly deps: VolumeFeatureDeps) {}

  execute(volume: number) {
    this.deps.player.volume(volume);
  }
}
