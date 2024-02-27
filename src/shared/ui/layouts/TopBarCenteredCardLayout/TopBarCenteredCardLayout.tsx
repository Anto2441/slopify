import { TopBar } from "./TopBar";
import { Footer } from "./Footer";

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
    <div className="top-bar-centered-card-layout flex h-full min-h-screen flex-col">
      <div className="top-bar bg-neutral-950">
        <TopBar />
      </div>

      <div className="content grow bg-gradient-to-b from-white/10 from-0% to-black md:p-8">
        <div className="card m-auto max-w-3xl rounded-lg bg-neutral-950 px-8 pb-12 pt-16">
          {children}
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
