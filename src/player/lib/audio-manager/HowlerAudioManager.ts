import { Howl } from "howler";
import { action, makeAutoObservable } from "mobx";
import { IAudioManager } from "./IAudioManager";

export class HowlerAudioManager implements IAudioManager {
  isPlaying = false;

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
      this.howl.unload();
    }

    this.howl = new Howl({
      src,

      html5: true,

      onplay: action(() => {
        this.isPlaying = true;
      }),

      onpause: action(() => {
        this.isPlaying = false;
      }),
    });

    this.howl.play();
  }
}
