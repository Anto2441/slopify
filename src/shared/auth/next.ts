import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession as nextAuthGetServerSession } from "next-auth/next";

import { nextAuthConfig } from "./config";

/**
 * This function is re-exported this way in order to pass the correct config
 * automatically, and avoid having to pass it each time we're using it.
 *
 * 🦉 This export takes precedence over the wildcard export at the bottom of the file.
 *
 * @see https://next-auth.js.org/configuration/nextjs#getserversession
 */
export const getServerSession = (
  ...args: [NextApiRequest, NextApiResponse] | []
) => {
  return nextAuthGetServerSession(...args, nextAuthConfig);
};

export * from "next-auth/next";
