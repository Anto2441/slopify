import { describe, expect, test } from "vitest";

import { Text } from "./Text";

describe("Text", () => {
  test("can get the character at a particular position", () => {
    expect(Text.getCharacterAtPosition("john wick", 1)).toBe("o");
  });

  test("can get the first character of a string", () => {
    expect(Text.getFirstCharacter("john wick")).toBe("j");
  });

  test("can uppercase a string", () => {
    expect(Text.upperCase("john wick")).toBe("JOHN WICK");
  });
});
