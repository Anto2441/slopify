import { getServerSession } from "@/shared/auth/next";

/**
 * 🦉 We export it as `auth` to be compatible with future version of `next-auth`.
 *
 * @see https://authjs.dev/guides/upgrade-to-v5#authenticating-server-side
 */
export const auth = getServerSession;
