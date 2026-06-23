/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: this file previously had a second `module.exports` that silently
  // overwrote the real config. Everything is consolidated here now.
  reactStrictMode: false, // preserve current runtime behavior (was effectively off)
  poweredByHeader: false,
  compress: true, // gzip/brotli on the Next server
  images: {
    // serve the smallest modern format the browser supports
    formats: ["image/avif", "image/webp"],
    // cache optimized images aggressively
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        // long-lived immutable caching for static media in /public
        source: "/:path*(jpg|jpeg|png|gif|svg|webp|avif|ico|woff|woff2|ttf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
