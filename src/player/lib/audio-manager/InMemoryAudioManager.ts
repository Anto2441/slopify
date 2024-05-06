import { makeAutoObservable } from "mobx";

import { IAudioManager } from "./IAudioManager";

/**
 * The `InMemoryAudioManager` class is an implementation of the `IAudioManager` interface
 * that keeps track of whether an audio is currently playing or not in memory.
 *
 * @remarks
 * This implementation is not suitable for a production environment, as it keeps track of
 * the playback state in memory and does not persist it. It is meant to be used for
 * testing and quick prototyping purposes.
 */
export class InMemoryAudioManager implements IAudioManager {
  isPlaying = false;

  constructor() {
    makeAutoObservable(this);
  }

  pause() {
    this.isPlaying = false;
  }

  play() {
    this.isPlaying = true;
  }

  seek(): void {
    // Do nothing
  }
}