import { Slider } from "@/shared/ui/inputs";

/**
 * The VolumeBar component is a slider that allows the user to adjust the volume of the player.
 */
export function VolumeBar() {
  return <Slider defaultValue={[33]} max={100} step={1} />;
}
