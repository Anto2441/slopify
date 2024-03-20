"use client";

import { SessionProvider as NextAuthSessionProvider } from "@/shared/auth/react";

/**
 * Function that provides the `session` for the children components.
 *
 * 🦉 A `session` is an object that contains user's information after a successful authentication,
 * such as the user's ID, name, email, etc.
 *
 * @see https://next-auth.js.org/getting-started/client#sessionprovider
 */
export function SessionProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}
