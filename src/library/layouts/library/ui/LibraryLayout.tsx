import { Suspense } from "react";

import { Paper } from "@/shared/ui/surfaces";

import { PlayerProvider } from "@/player/entities/player";

import { ExternalLinks } from "./ExternalLinks";
import { Footer } from "./Footer";
import { SideBar } from "./SideBar";
import { TopBar } from "./TopBar";

interface LibraryLayoutProps {
  /**
   * The layout page content.
   */
  children: React.ReactNode;
}

/**
 * The library layout.
 *
 * It provides the PlayerProvider, which is useful for maintaining a single source
 * of truth for the player state across the entire layout.
 */
export const LibraryLayout = function LibraryLayout({
  children,
}: LibraryLayoutProps) {
  return (
    <PlayerProvider>
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
    </PlayerProvider>
  );
};
