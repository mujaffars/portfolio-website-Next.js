/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.ctfassets.net'],
        unoptimized: true,
    },
    output: 'export',
    basePath: '/portfolio-website-next.js/out',
};

export default nextConfig;
