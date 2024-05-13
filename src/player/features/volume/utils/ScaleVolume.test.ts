import { describe, expect, test } from "vitest";

import { scaleVolumeToUnitRange } from "./ScaleVolume";

describe("ScaleVolume", () => {
  test("can converts the volume to a range of 0.0 to 1.0", () => {
    expect(scaleVolumeToUnitRange(70)).toBe(0.7);
  });
});
