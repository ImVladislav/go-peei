/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://peei.org.ua",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://peei.org.ua",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
