import { defineConfig } from '@pandacss/dev'
import * as recipes from './src/recipes'

export default defineConfig({
  // Don't use base presets from PandaCSS.
  eject: true,
  // Whether to use css reset
  preflight: true,

  jsxFactory: 'fractal',
  jsxFramework: 'react',
  prefix: 'fractal',
  // The output directory for your css system
  outdir: 'styled-system',

  // Only import the base presets with useful resets and utilities.
  presets: ['@pandacss/preset-base'],

  // Produce a short hashed class name in production only.
  hash: process.env.NODE_ENV === 'production',
  minify: process.env.NODE_ENV === 'production',
  // Speed up build time in development only.
  optimize: process.env.NODE_ENV === 'production',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  theme: {
    extend: {
      recipes: {
        checkboxIndicator: recipes.checkboxIndicator,
        checkboxLabel: recipes.checkboxLabel,
        checkboxRoot: recipes.checkboxRoot,
      },
    },
  },
})
