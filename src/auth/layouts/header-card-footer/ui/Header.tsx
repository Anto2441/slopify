import { SlopifyLogo } from "@/shared/ui/data-display";

export function Header() {
  return (
    <header className="flex flex-row items-center py-spacing-looser-2 pl-spacing-looser-3">
      <SlopifyLogo size="large" />
    </header>
  );
}
