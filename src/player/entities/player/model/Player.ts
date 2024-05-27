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

  get currentTime() {
    return this.deps.audioManager.currentTime;
  }

  get currentVolume() {
    return this.deps.audioManager.currentVolume;
  }

  get duration() {
    return this.deps.audioManager.duration;
  }

  get isLooping() {
    return this.deps.audioManager.isLooping;
  }

  get isPlaying() {
    return this.deps.audioManager.isPlaying;
  }

  get progression() {
    return this.deps.audioManager.duration
      ? (this.deps.audioManager.currentTime / this.deps.audioManager.duration) *
          100
      : 0;
  }

  loop(repeat: boolean) {
    this.deps.audioManager.loop(repeat);
  }

  pause() {
    this.deps.audioManager.pause();
  }

  play(src: string) {
    this.deps.audioManager.play(src);
  }

  seek(position: number) {
    this.deps.audioManager.seek(position);
  }

  volume(volume: number) {
    this.deps.audioManager.volume(volume);
  }
}
