import type { JWT as NextAuthJWT } from "next-auth";

declare module "next-auth/jwt" {
  /**
   * We're using the next-auth `jwt` callback. In it, we augment the `token` object
   * with the `account.access_token` property and make it available in the session callback.
   *
   * @see ./config.ts
   * @see https://next-auth.js.org/configuration/callbacks#jwt-callback
   */
  interface JWT extends NextAuthJWT {
    accessToken?: string;
  }
}
