/**
 * The `ISeekFeature` interface represents a feature that seeks
 * the playback of the player.
 */
export interface ISeekFeature {
  /**
   * Executes the logic to seek the playback of the player.
   */
  execute(progression: number): void;
}
