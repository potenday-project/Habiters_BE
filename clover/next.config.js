/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
const rewrites = async () => {
  return [
    {
      source: "/:path*",
      destination: "http://223.130.162.40:8080/users/:path*",
    },
  ];
};

// module.exports = nextConfig;
module.exports = { rewrites };

//http://223.130.162.40:8080/habits
