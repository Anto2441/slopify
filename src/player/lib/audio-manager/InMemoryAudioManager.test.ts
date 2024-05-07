import { beforeEach, describe, expect, test } from "vitest";

import type { IAudioManager } from "./IAudioManager";
import { InMemoryAudioManager } from "./InMemoryAudioManager";

describe("InMemoryAudioManager", () => {
  let audioManager: IAudioManager;

  beforeEach(() => {
    audioManager = new InMemoryAudioManager();
  });

  test("can play a song", () => {
    expect(audioManager.isPlaying).toBe(false);

    audioManager.play("https://www.example.com/path/to/song.mp3");

    expect(audioManager.isPlaying).toBe(true);
  });

  test("can pause a song", () => {
    audioManager.play("https://www.example.com/path/to/song.mp3");

    expect(audioManager.isPlaying).toBe(true);

    audioManager.pause();

    expect(audioManager.isPlaying).toBe(false);
  });

  test("can seek a song", () => {
    audioManager.play("https://www.example.com/path/to/song.mp3");

    expect(audioManager.currentTime).toBe(0);

    audioManager.seek(33);

    expect(audioManager.currentTime).toBe(33);
  });
});
