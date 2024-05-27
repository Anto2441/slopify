/**
 * The `ILoopFeature` interface represents a feature that repeats the song.
 */
export interface ILoopFeature {
  /**
   * Executes the logic to repeat the song.
   */
  execute(repeat: boolean): void;
}
