import { Skeleton } from "../../feedback";

/**
 * Renders a skeleton version of an inline media card.
 */
export function InlineMediaCardSkeleton() {
  return (
    <div className="flex items-center">
      <div>
        <Skeleton className="min-h-[56px] min-w-[56px] rounded-md" />
      </div>
      <div className="ml-spacing-tighter w-full flex-col">
        <Skeleton className="h-graphic-size-decorative-smaller rounded-md" />
        <Skeleton className="mt-spacing-tighter-3 h-graphic-size-decorative-smaller-2 w-4/5 rounded-full" />
      </div>
    </div>
  );
}
