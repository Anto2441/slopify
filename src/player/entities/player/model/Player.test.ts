import { beforeEach, describe, expect, test, vi } from "vitest";

import {
  InMemoryAudioManager,
  type IAudioManager,
} from "../../../lib/audio-manager";
import type { IPlayer } from "./IPlayer";
import { Player } from "./Player";

describe("Player", () => {
  let player: IPlayer;
  let audioManager: IAudioManager;

  beforeEach(() => {
    audioManager = new InMemoryAudioManager();

    player = new Player({ audioManager });
  });

  test("can play a song", () => {
    const spyAudioManagerPlay = vi.spyOn(audioManager, "play");

    expect(player.isPlaying).toBe(false);

    player.play("https://www.example.com/path/to/song.mp3");

    expect(player.isPlaying).toBe(true);

    expect(spyAudioManagerPlay).toBeCalledTimes(1);
    expect(spyAudioManagerPlay).toBeCalledWith(
      "https://www.example.com/path/to/song.mp3",
    );
  });

  test("can pause a song", () => {
    const spyAudioManagerPause = vi.spyOn(audioManager, "play");

    player.play("https://www.example.com/path/to/song.mp3");

    expect(player.isPlaying).toBe(true);

    player.pause();

    expect(player.isPlaying).toBe(false);

    expect(spyAudioManagerPause).toBeCalledTimes(1);
  });
});
