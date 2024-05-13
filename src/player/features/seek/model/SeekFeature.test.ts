import { describe, expect, test } from "vitest";

import { Player } from "@/player/entities/player";
import { InMemoryAudioManager } from "@/player/lib/audio-manager";
import { SeekFeature } from "./SeekFeature";

// TODO: improve setup
describe("SeekFeature", () => {
  test("should seek the song", () => {
    const currentTime = 10;
    const currentVolume = 0.5;
    const songDuration = 260;
    const seekPosition = 33;
    const expectedTime = 85.8;

    const player = new Player({
      audioManager: new InMemoryAudioManager(
        currentTime,
        currentVolume,
        songDuration,
        false,
      ),
    });
    const seekFeature = new SeekFeature({ player });

    expect(player.currentTime).toBe(10);

    seekFeature.execute(seekPosition);

    expect(player.currentTime).toBe(expectedTime);
  });
});
