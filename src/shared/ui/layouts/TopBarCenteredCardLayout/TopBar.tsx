import Image from "next/image";

export function TopBar() {
  return (
    <div className="flex flex-row items-center py-spacing-looser-2 pl-spacing-looser-3">
      <Image width={40} height={40} src="/logo.png" alt="Slopify logo" />

      <span className="ml-spacing-tighter-4 text-font-size-larger font-bold text-text-base">
        Slopify
      </span>
    </div>
  );
}
