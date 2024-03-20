import type { Metadata } from "next";

import { AuthSessionProvider } from "@/auth/providers/session-provider";

import { figtree } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Slopify App",
  description: "Spotify clone app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} bg-black font-sans text-color-base antialiased`}
      >
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
