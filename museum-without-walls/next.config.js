const path = "/museum-without-walls";

const csp = {
  "script-src": [],
  "style-src": [],
  "font-src": [],
};

module.exports = {
  reactStrictMode: true,
  basePath: path,
  trailingSlash: true,
  env: {
    basePath: path,
    CI: process.env.CI,
    vercelEnv: process.env.VERCEL_ENV,
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: path,
        basePath: false,
        permanent: true,
      },
    ];
  },
};
