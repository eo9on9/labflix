import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['image.tmdb.org'],
  },
}

const withVanillaExtract = createVanillaExtractPlugin()

export default withVanillaExtract(nextConfig)
