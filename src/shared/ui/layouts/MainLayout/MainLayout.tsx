import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-full grow">
        <SideBar />
        <div>
          <NavBar />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
