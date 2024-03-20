import NextAuth from "next-auth";

import { nextAuthConfig } from "./config";

export default NextAuth(nextAuthConfig);
