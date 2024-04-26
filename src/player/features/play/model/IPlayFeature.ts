/**
 * The `IPauseFeature` interface represents a feature that plays the player.
 */
export interface IPlayFeature {
  /**
   * Executes the logic to play the playback of the player.
   */
  execute(src: string): void;
}
