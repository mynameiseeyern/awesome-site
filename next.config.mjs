/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Case-study images and the portrait are still served from Framer's CDN.
    // Run `npm run assets` to copy them into public/ and drop this block.
    remotePatterns: [{ protocol: "https", hostname: "framerusercontent.com" }],
  },
};

export default nextConfig;
