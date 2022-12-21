/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodburl:
      "mongodb+srv://nikhil:nikhil@cluster0.d3n8whj.mongodb.net/sweetmeet?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
