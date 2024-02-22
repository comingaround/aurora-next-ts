/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/aurora-next-ts",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
