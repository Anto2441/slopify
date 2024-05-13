export function scaleVolumeToUnitRange(volumeValue: number) {
  // Ensure the volumeValue is within the range of 0 to 100
  const clampedVolume = Math.min(100, Math.max(0, volumeValue));
  // Transform the volume to a range of 0.0 to 1.0
  return clampedVolume / 100;
}

/**
 * Converts a volume value in the range of 0.0 to 1.0 to a percentage value in the range of 0 to 100. */
export function convertVolumeToPercentage(volumeValue: number): number {
  return volumeValue * 100;
}
