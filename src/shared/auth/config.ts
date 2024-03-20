import { type NextAuthOptions } from "next-auth";

import { SpotifyProvider } from "./providers/spotify";

/**
 * Configuration for `next-auth` package.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const nextAuthConfig: NextAuthOptions = {
  debug: process.env.NODE_ENV === "development",

  providers: [SpotifyProvider],

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
} satisfies NextAuthOptions;
