import { Suspense } from "react";

import { Paper } from "@/shared/ui/surfaces";

import { ExternalLinks } from "./ExternalLinks";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";

interface LibraryLayoutProps {
  /**
   * The main content of the layout.
   */
  children: React.ReactNode;
}

/**
 * A React component providing the layout for the library.
 */
export function LibraryLayout({ children }: LibraryLayoutProps) {
  return (
    <div className="flex h-screen min-h-[600px] w-screen min-w-[800px] flex-col gap-spacing-tighter-2 p-spacing-tighter-2">
      <div className="flex grow gap-spacing-tighter-2 overflow-hidden">
        <SideBar />

        <Paper className="relative w-full overflow-y-scroll" padding="none">
          <TopBar />

          {children}

          <ExternalLinks />
        </Paper>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
