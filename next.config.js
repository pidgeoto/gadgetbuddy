/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === "TerserPlugin") {
          minimizer.options.terserOptions.compress = {
            ...minimizer.options.terserOptions.compress,
            drop_console: true,
          };
        }
      });
    }

    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    YOUTUBE_USERNAME: "Abhinay",
    YOUTUBE_PASSWORD: "mobiles@32",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "beta.32mobiles.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
