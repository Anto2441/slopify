import { describe, expect, test } from "vitest";

import { scaleVolumeToUnitRange } from "./ScaleVolume";

describe("ScaleVolume", () => {
  test("can converts the duration in the format minutes:seconds", () => {
    expect(scaleVolumeToUnitRange(70)).toBe(0.7);
  });
});
