import { defineConfig } from '@pandacss/dev'
import fractalPreset from '@snowball-tech/fractal/dist/fractal-panda.preset'

export default defineConfig({
  // Don't use default theme from PandaCSS.
  eject: true,
  // Only import the base presets with useful resets and utilities.
  presets: [fractalPreset],

  emitPackage: true,
  outdir: '@snowball-tech/fractal-panda',

  // Produce short hashed classes names in production.
  hash: process.env.NODE_ENV === 'production',
  // Speed up build time in development mode.
  optimize: process.env.NODE_ENV === 'production',
  minify: process.env.NODE_ENV === 'production',

  // Where to look for your css declarations
  include: [
    './node_modules/@snowball-tech/fractal/dist/fractal.buildinfo.json',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  exclude: [],

  prefix: 'fractal',
  jsxFactory: 'fractal',
  jsxFramework: 'react',
})
