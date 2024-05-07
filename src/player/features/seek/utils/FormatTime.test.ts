import { describe, expect, test } from "vitest";

import { formatTime } from "./FormatTime";

describe("FormatTime", () => {
  test("can converts the duration in the format minutes:seconds", () => {
    expect(formatTime(34)).toBe("0:34");
  });
});
