import Image from "next/image";

export default function TopBar() {
  return (
    <div className="flex flex-row items-center py-8 pl-12">
      <Image width={40} height={40} src="/logo.png" alt="Slopify logo" />
      <span className="ml-1 text-2xl font-semibold text-white">Slopify</span>
    </div>
  );
}
