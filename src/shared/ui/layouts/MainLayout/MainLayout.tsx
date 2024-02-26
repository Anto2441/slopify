import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <h1>Default Layout</h1>
      <NavBar />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
}
