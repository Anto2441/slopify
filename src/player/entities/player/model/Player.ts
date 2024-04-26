import { makeAutoObservable } from "mobx";

import { AudioManager, type IAudioManager } from "../../../lib/audio-manager";
import type { IPlayer } from "./IPlayer";

export interface PlayerDeps {
  /** Audio manager used to play audio */
  audioManager: IAudioManager;
}

/**
 * Player entity
 */
export class Player implements IPlayer {
  constructor(
    private readonly deps: Readonly<PlayerDeps> = {
      audioManager: new AudioManager(),
    },
  ) {
    makeAutoObservable(this);
  }

  get isPlaying() {
    return this.deps.audioManager.isPlaying;
  }

  pause() {
    this.deps.audioManager.pause();
  }

  play(src: string) {
    this.deps.audioManager.play(src);
  }
}
