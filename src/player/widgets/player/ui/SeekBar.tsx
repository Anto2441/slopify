import { Slider } from "@/shared/ui";

/**
 * Displays a seekbar for the currently playing track.
 */
export function Seekbar() {
  return (
    <div className="flex w-full justify-between">
      <span className="text-font-size-smaller-2 text-color-subdued">0:40</span>
      <Slider
        defaultValue={[33]}
        max={100}
        step={1}
        className="mx-spacing-tighter-2"
      />
      <span className="text-font-size-smaller-2 text-color-subdued">3:12</span>
    </div>
  );
}
