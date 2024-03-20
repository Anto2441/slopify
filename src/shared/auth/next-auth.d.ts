import type { Session as NextAuthSession } from "next-auth";

declare module "next-auth" {
  /**
   * We're using the next-auth `session` callback. In it, we augment the `session` object
   * with the the `token.accessToken` property and make it available to the client.
   *
   * @see ./config.ts
   * @see https://next-auth.js.org/configuration/callbacks#session-callback
   */
  interface Session extends NextAuthSession {
    accessToken?: string;
  }
}
