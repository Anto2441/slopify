import { Footer } from "./Footer";
import { TopBar } from "./TopBar";

interface TopBarCenteredCardLayoutProps {
  /** Content to be displayed at the center of the layout */
  children: React.ReactNode;
}

/**
 * A React component providing a full-screen layout with a fixed top bar, a central content card, and a footer.
 * It features a gradient background, suitable for pages needing a focused content area (like a login page).
 */
export function TopBarCenteredCardLayout({
  children,
}: TopBarCenteredCardLayoutProps) {
  return (
    <div className="flex h-full min-h-screen flex-col bg-background-base">
      <TopBar />

      <div className="grow bg-gradient-to-b from-white/10 to-black md:p-spacing-looser-2">
        <div className="m-auto rounded-lg bg-background-base px-8 pb-12 pt-16 md:max-w-2xl">
          {children}
        </div>
      </div>

      <Footer />
    </div>
  );
}
