/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vercel.com']
  },
  env: {
    githubPagePath: 'Portfolio/'
  }
}

module.exports = nextConfig
