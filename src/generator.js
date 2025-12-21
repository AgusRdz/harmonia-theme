#!/usr/bin/env node

/**
 * Harmonia Theme Generator
 * Generates all 9 theme JSON files from palettes and token definitions
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Get current directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = join(__dirname, '..')

// Import token generators
import {
  generateColors,
  generateSemanticTokenColors,
  generateTokenColors
} from './tokens.js'

// Import all palettes
import { dark } from './palettes/dark.js'
import { noir } from './palettes/noir.js'
import { aurora } from './palettes/aurora.js'
import { moonlit } from './palettes/moonlit.js'
import { oled } from './palettes/oled.js'
import { highContrast } from './palettes/high-contrast.js'
import { light } from './palettes/light.js'
import { daybreak } from './palettes/daybreak.js'
import { paperWhite } from './palettes/paper-white.js'

/**
 * Generate a complete theme object from a palette
 * @param {Object} palette - Color palette
 * @returns {Object} Complete theme JSON object
 */
function generateTheme(palette) {
  return {
    $schema: 'vscode://schemas/color-theme',
    name: palette.name,
    type: palette.type,
    semanticHighlighting: true,
    colors: generateColors(palette),
    semanticTokenColors: generateSemanticTokenColors(palette),
    tokenColors: generateTokenColors(palette)
  }
}

/**
 * Get output filename for a palette
 * @param {Object} palette - Color palette
 * @returns {string} Output filename
 */
function getOutputFilename(palette) {
  const nameMap = {
    'Harmonia Dark': 'harmonia-dark-color-theme.json',
    'Harmonia Noir': 'harmonia-noir-color-theme.json',
    'Harmonia Aurora': 'harmonia-aurora-color-theme.json',
    'Harmonia Moonlit': 'harmonia-moonlit-color-theme.json',
    'Harmonia OLED True Black': 'harmonia-oled-true-black-color-theme.json',
    'Harmonia Dark High Contrast':
      'harmonia-dark-high-contrast-color-theme.json',
    'Harmonia Light': 'harmonia-light-color-theme.json',
    'Harmonia Daybreak': 'harmonia-daybreak-color-theme.json',
    'Harmonia Paper White': 'harmonia-paper-white-color-theme.json'
  }
  return nameMap[palette.name]
}

/**
 * Write theme to file with pretty formatting
 * @param {Object} theme - Theme object
 * @param {string} filename - Output filename
 */
function writeTheme(theme, filename) {
  const themesDir = join(rootDir, 'themes')

  // Ensure themes directory exists
  try {
    mkdirSync(themesDir, { recursive: true })
  } catch (err) {
    // Directory already exists
  }

  const outputPath = join(themesDir, filename)
  const jsonContent = JSON.stringify(theme, null, 2)

  writeFileSync(outputPath, jsonContent + '\n', 'utf8')

  return outputPath
}

/**
 * Main generator function
 */
function generateAllThemes() {
  const palettes = [
    dark,
    noir,
    aurora,
    moonlit,
    oled,
    highContrast,
    light,
    daybreak,
    paperWhite
  ]

  console.log('🎨 Harmonia Theme Generator')
  console.log('━'.repeat(50))
  console.log()

  const startTime = Date.now()
  let successCount = 0
  let errorCount = 0

  for (const palette of palettes) {
    try {
      const theme = generateTheme(palette)
      const filename = getOutputFilename(palette)
      const outputPath = writeTheme(theme, filename)

      console.log(`✓ ${palette.name.padEnd(30)} → ${filename}`)
      successCount++
    } catch (error) {
      console.error(`✗ ${palette.name.padEnd(30)} → Error: ${error.message}`)
      errorCount++
    }
  }

  const duration = Date.now() - startTime

  console.log()
  console.log('━'.repeat(50))
  console.log(`✓ Generated ${successCount} themes in ${duration}ms`)

  if (errorCount > 0) {
    console.log(`✗ ${errorCount} errors`)
    process.exit(1)
  }

  console.log()
  console.log('All themes successfully generated!')
  console.log('Location: themes/')
}

// Run generator
generateAllThemes()
