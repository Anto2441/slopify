import { SlopifyLogo } from "../../data-display";

export function TopBar() {
  return (
    <div className="flex flex-row items-center py-spacing-looser-2 pl-spacing-looser-3">
      <SlopifyLogo size="large" />
    </div>
  );
}
