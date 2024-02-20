interface TopBarCenteredCardLayoutProps {
  children: React.ReactNode;
  topBar: React.ReactNode;
}

export default function TopBarCenteredCardLayout({
  children,
  topBar,
}: TopBarCenteredCardLayoutProps) {
  return (
    <div className="top-bar-centered-card-layout flex flex-col h-full min-h-screen bg-gradient-to-b from-background-900 via-black to-black">
      <div className="top-bar bg-background-950 w-full text-white h-24">
        {topBar}
      </div>

      <div className="content grow m-8">
        <div className="card p-8 bg-background-950 rounded-lg max-w-3xl m-auto bg-gradient-to-b from-black to-background-950">
          {children}
        </div>
      </div>

      <div className="footer bg-background-950 p-8 text-white text-center">
        Footer
      </div>
    </div>
  );
}
