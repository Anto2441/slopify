import { describe, expect, test } from "vitest";

import { Player } from "../../../entities/player";
import { InMemoryAudioManager } from "../../../lib/audio-manager";
import { PauseFeature } from "./PauseFeature";

describe("PauseFeature", () => {
  test("should pause the song", () => {
    const player = new Player({ audioManager: new InMemoryAudioManager() });
    const pauseFeature = new PauseFeature({ player });

    expect(player.isPlaying).toBe(false);

    player.play("https://www.example.com/path/to/song.mp3");

    expect(player.isPlaying).toBe(true);

    pauseFeature.execute();

    expect(player.isPlaying).toBe(false);
  });
});
