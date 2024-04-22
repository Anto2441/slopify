import { Skeleton } from "../../feedback";
import { Paper } from "../Paper/Paper";

/**
 * Renders a skeleton card component.
 */
export function CardSkeleton() {
  return (
    <Paper variant="tinted">
      <Skeleton className="min-h-[150px] rounded-md" />

      <div className="mt-spacing-base h-max flex-col">
        <Skeleton className="h-graphic-size-decorative-base w-full rounded-full" />
        <Skeleton className="mt-spacing-tighter-2 h-graphic-size-decorative-smaller w-1/2 rounded-full" />
      </div>
    </Paper>
  );
}
