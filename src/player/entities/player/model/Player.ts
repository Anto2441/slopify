import { action, computed, makeObservable } from "mobx";

import { AudioManager, type IAudioManager } from "../../../lib/audio-manager";
import type { IPlayer } from "./IPlayer";

interface PlayerDeps {
  audioManager: IAudioManager;
}

export class Player implements IPlayer {
  constructor(
    private readonly deps: Readonly<PlayerDeps> = {
      audioManager: new AudioManager(),
    },
  ) {
    makeObservable(this, {
      isPlaying: computed,
      pause: action,
      play: action,
    });
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
