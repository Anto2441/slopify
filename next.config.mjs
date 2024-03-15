/**
 * TODO: be more restrictive!
 * @see https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
