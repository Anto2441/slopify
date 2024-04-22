import { Skeleton } from "../../feedback";

/**
 * Renders a skeleton selection component with a skeleton image and a skeleton text.
 */
export function SelectionSkeleton() {
  return (
    <div className="flex items-center rounded-md bg-background-tinted-base">
      <Skeleton className="min-h-[56px] min-w-[56px]" />
      <Skeleton className="ml-spacing-tighter-2 mr-spacing-base h-graphic-size-decorative-base w-full rounded-full" />
    </div>
  );
}
