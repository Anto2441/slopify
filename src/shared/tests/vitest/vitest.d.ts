/**
 * This TypeScript declaration file extends Vitest's built-in matchers with custom matchers.
 * It enables the use of additional assertions for more expressive tests when using Vitest as the test runner in a React environment.
 *
 * @see https://vitest.dev/guide/extending-matchers.html
 */

import { TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";
import type { Assertion, AsymmetricMatchersContaining } from "vitest";

/**
 * CustomMatchers interface extends the matchers from @testing-library/jest-dom
 * to be used with Vitest's expect function.
 *
 * @template R The expected return type of the matcher's assertion.
 */
interface CustomMatchers<R = unknown>
  extends TestingLibraryMatchers<
    ReturnType<typeof expect.stringContaining>,
    R
  > {}

/**
 * Augmenting Vitest's module with the custom matchers.
 */
declare module "vitest" {
  /**
   * Extends Vitest's Assertion interface with custom matchers for improved testing experience.
   *
   * @template T The type of the actual value being compared in the assertions.
   */
  interface Assertion<T = any> extends CustomMatchers<T> {}

  /**
   * Extends Vitest's AsymmetricMatchersContaining interface with custom matchers to allow
   * asymmetric matching in expectations.
   */
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
