/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'PhysK Registry',
    description: 'Physk\'s registry for kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://physk.github.io/kasm-registry/',
    contactUrl: 'n/a',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
