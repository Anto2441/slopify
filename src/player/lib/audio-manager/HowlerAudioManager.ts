import { Howl } from "howler";
import { action, makeAutoObservable } from "mobx";

import { IAudioManager } from "./IAudioManager";

export class HowlerAudioManager implements IAudioManager {
  isPlaying = false;

  duration = 0;

  currentTime = 0;

  currentVolume = 0;

  private requestTimeId: number | undefined = undefined;

  private howl?: Howl = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  pause() {
    this.howl?.pause();
  }

  play(src: string) {
    if (this.isPlaying) {
      return;
    }

    if (this.howl) {
      this.howl.play();
      return;
    }

    this.howl = new Howl({
      src,

      html5: true,

      volume: 0.2,

      onload: action(() => {
        this.duration = Number(this.howl?.duration().toFixed(0)) || 0;
      }),

      onplay: action(() => {
        this.isPlaying = true;

        this.requestCurrentTime();
      }),

      onpause: action(() => {
        this.isPlaying = false;

        this.cancelRequestCurrentTime();
      }),

      onend: action(() => {
        this.isPlaying = false;

        this.cancelRequestCurrentTime();
      }),

      onseek: action(() => {
        this.currentTime = this.getCurrentTime();
      }),

      onvolume: action(() => {
        const volume = this.howl?.volume();

        this.currentVolume = typeof volume === "number" ? volume : 0;
      }),
    });

    this.howl.play();
  }

  seek(position: number) {
    this.howl?.seek(position);
  }

  volume(volume: number) {
    this.howl?.volume(volume);
  }

  private getCurrentTime() {
    return Number(this.howl?.seek().toFixed(0)) || 0;
  }

  private cancelRequestCurrentTime() {
    if (this.requestTimeId) {
      cancelAnimationFrame(this.requestTimeId);
    }
  }

  private requestCurrentTime() {
    this.currentTime = this.getCurrentTime();

    this.requestTimeId = requestAnimationFrame(() => this.requestCurrentTime());
  }
}
