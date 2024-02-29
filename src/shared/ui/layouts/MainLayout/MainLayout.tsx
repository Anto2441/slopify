import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col gap-2  p-2">
      <div className="flex h-full w-full flex-1 grow gap-2 ">
        <SideBar />
        <div className="w-full">
          <NavBar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
