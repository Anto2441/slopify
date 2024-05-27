import { describe, expect, test } from "vitest";

import { Player } from "../../../entities/player";
import { InMemoryAudioManager } from "../../../lib/audio-manager";
import { LoopFeature } from "./LoopFeature";

describe("LoopFeature", () => {
  test("should loop the song", () => {
    const player = new Player({ audioManager: new InMemoryAudioManager() });
    const loopFeature = new LoopFeature({ player });

    expect(player.isLooping).toBe(false);

    loopFeature.execute(true);

    expect(player.isLooping).toBe(true);

    loopFeature.execute(false);

    expect(player.isLooping).toBe(false);
  });
});
