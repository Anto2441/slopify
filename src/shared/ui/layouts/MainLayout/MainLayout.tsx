import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <NavBar />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
}
