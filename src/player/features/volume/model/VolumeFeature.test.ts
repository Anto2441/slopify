import { describe, expect, test } from "vitest";

import { Player } from "@/player/entities/player";
import { InMemoryAudioManager } from "@/player/lib/audio-manager";
import { scaleVolumeToUnitRange } from "../utils/ScaleVolume";
import { VolumeFeature } from "./VolumeFeature";

describe("SeekFeature", () => {
  test("should change the volume", () => {
    const currentTime = 10;
    const currentVolume = 0.5;
    const songDuration = 260;
    const volumePosition = 70;
    const expectedVolume = 0.7;

    const player = new Player({
      audioManager: new InMemoryAudioManager(
        currentTime,
        currentVolume,
        songDuration,
        false,
      ),
    });
    const volumeFeature = new VolumeFeature({ player });

    expect(player.currentVolume).toBe(0.5);

    volumeFeature.execute(volumePosition);

    expect(scaleVolumeToUnitRange(player.currentVolume)).toBe(expectedVolume);
  });
});
