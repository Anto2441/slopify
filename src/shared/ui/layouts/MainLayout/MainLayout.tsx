import { Paper } from "../../surfaces";
import { Footer } from "./Footer";
import { MainFooter } from "./MainFooter";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col gap-spacing-tighter-2 p-spacing-tighter-2">
      <div className="flex grow gap-spacing-tighter-2 overflow-hidden">
        <SideBar />

        <Paper className="relative w-full overflow-y-scroll" padding="none">
          <NavBar />

          {children}

          <MainFooter />
        </Paper>
      </div>

      <Footer />
    </div>
  );
}
