interface TopBarCenteredCardLayoutProps {
  children: React.ReactNode;
  topBar: React.ReactNode;
}

export default function TopBarCenteredCardLayout({
  children,
  topBar,
}: TopBarCenteredCardLayoutProps) {
  return (
    <div className="top-bar-centered-card-layout flex h-full min-h-screen flex-col bg-gradient-to-b from-background-900 via-black to-black">
      <div className="top-bar h-24 w-full bg-background-950 text-white">
        {topBar}
      </div>

      <div className="content m-8 grow">
        <div className="card m-auto max-w-3xl rounded-lg bg-background-950 bg-gradient-to-b from-black to-background-950 p-8">
          {children}
        </div>
      </div>

      <div className="footer bg-background-950 p-8 text-center text-white">
        Footer
      </div>
    </div>
  );
}
