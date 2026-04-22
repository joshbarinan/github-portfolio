const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/github-portfolio" : "",
  assetPrefix: isProd ? "/github-portfolio/" : "",
};

export default nextConfig;