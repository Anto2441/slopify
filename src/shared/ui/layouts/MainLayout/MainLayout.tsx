import { Paper } from "../../surfaces";
import { MainFooter } from "./MainFooter";
import { SideBar } from "./SideBar";

interface MainLayoutProps {
  children: React.ReactNode;
  footer: React.ReactNode;
  navBar: React.ReactNode;
}

export function MainLayout({ children, footer, navBar }: MainLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col gap-spacing-tighter-2 p-spacing-tighter-2">
      <div className="flex grow gap-spacing-tighter-2 overflow-hidden">
        <SideBar />

        <Paper className="relative w-full overflow-y-scroll" padding="none">
          {navBar}

          {children}

          <MainFooter />
        </Paper>
      </div>

      {footer}
    </div>
  );
}
