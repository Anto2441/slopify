interface TopBarCenteredCardLayoutProps {
  /** Content to be displayed at the center of the layout */
  children: React.ReactNode;
  /** Content to be displayed at the top of the layout */
  topBar: React.ReactNode;
  /** Content to be displayed at the bottom of the layout */
  footer: React.ReactNode;
}

/**
 * A React component providing a full-screen layout with a fixed top bar, a central content card, and a footer.
 * It features a gradient background, suitable for pages needing a focused content area (like a login page).
 */
export default function TopBarCenteredCardLayout({
  children,
  footer,
  topBar,
}: TopBarCenteredCardLayoutProps) {
  return (
    <div className="top-bar-centered-card-layout flex h-full min-h-screen flex-col bg-gradient-to-b from-background-900 via-black to-black">
      <div className="top-bar bg-background-950">{topBar}</div>

      <div className="content m-8 grow">
        <div className="card m-auto max-w-3xl rounded-lg bg-background-950 bg-gradient-to-b from-black to-background-950 px-8 pb-10 pt-16">
          {children}
        </div>
      </div>

      <div className="footer bg-background-950">{footer}</div>
    </div>
  );
}
