/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['normanaranez.github.io']
  },
  env: {
    PUBLIC_URL: '/Portfolio/',
  },
  publicRuntimeConfig: {
    basePath: '/'
  },
  serverRuntimeConfig: {
    basePath: '/'
  }
}

module.exports = nextConfig
