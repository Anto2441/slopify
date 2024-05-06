import { Howl } from "howler";
import { action, makeAutoObservable } from "mobx";

import { IAudioManager } from "./IAudioManager";

export class HowlerAudioManager implements IAudioManager {
  isPlaying: boolean = false;
  duration: number | undefined = 0;
  currentTime = 0;

  private animationFrameId: number | undefined = undefined;

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

      volume: 0.1,

      onload: action(() => {
        this.duration = this.howl?.duration();
      }),

      onplay: action(() => {
        this.isPlaying = true;

        this.animationFrameId = requestAnimationFrame(() =>
          this.getCurrentTime(),
        );
        console.log("play", this.animationFrameId);
      }),

      onpause: action(() => {
        this.isPlaying = false;

        if (this.animationFrameId) {
          console.log("pause", this.animationFrameId);
          cancelAnimationFrame(this.animationFrameId);
        }
      }),

      // onseek: action(() => {
      //   console.log("onseek", this.getCurrentTime());
      //   this.currentTime = this.getCurrentTime();
      // }),
    });

    this.howl.play();
  }

  seek(position: number) {
    if (this.howl) {
      this.howl.seek(position);
      return position; // Return the seek position as the current playback time
    }
    return 0;
  }

  private getCurrentTime() {
    // if (this.howl) {
    //   return this.howl.seek();
    // }
    // return 0;

    console.log("getCurrentTime");

    this.currentTime = Number(this.howl?.seek().toFixed(0)) || 0;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationFrameId = requestAnimationFrame(() => this.getCurrentTime());
  }
}
