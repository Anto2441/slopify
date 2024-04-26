import { describe, expect, test } from "vitest";

import { Player } from "../../../entities/player";
import { InMemoryAudioManager } from "../../../lib/audio-manager";
import { PlayFeature } from "./PlayFeature";

describe("PlayFeature", () => {
  test("should play the song", () => {
    const player = new Player({ audioManager: new InMemoryAudioManager() });
    const playFeature = new PlayFeature({ player });

    expect(player.isPlaying).toBe(false);

    playFeature.execute("https://www.example.com/path/to/song.mp3");

    expect(player.isPlaying).toBe(true);
  });
});
