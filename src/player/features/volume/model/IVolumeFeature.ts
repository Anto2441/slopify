/**
 * The `IVolumeFeature` interface represents a feature that changes the
 * volume of the player.
 */
export interface IVolumeFeature {
  /**
   * Executes the logic to change the volume of the player.
   *   */
  execute(volume: number): void;
}
