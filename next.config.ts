import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
}

const withVanillaExtract = createVanillaExtractPlugin()

export default withVanillaExtract(nextConfig)
