import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Slopify App',
  description: 'Spotify clone app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
