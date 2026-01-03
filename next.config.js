/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");

// Configure the PWA plugin (first call) and pass Next config separately.
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  disable: process.env.NODE_ENV === "development", // avoid SW in dev
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withPWA(nextConfig);
