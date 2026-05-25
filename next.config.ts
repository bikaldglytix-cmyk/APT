const nextConfig = {
  reactStrictMode: true,

  experimental: {
    turbo: false
  },

  webpack: (config) => {
    // 🔥 CRITICAL: prevents worker/thread explosion
    config.parallelism = 1;

    config.optimization = {
      ...config.optimization,
      minimize: true
    };

    return config;
  }
};

module.exports = nextConfig;