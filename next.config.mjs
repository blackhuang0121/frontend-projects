/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// next.config.js
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'live.staticflickr.com',
            },
        ],
    },
}
