const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

const config = {
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
}

module.exports = withPWA(config)
