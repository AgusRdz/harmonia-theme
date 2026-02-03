/**
 * Harmonia Aurora - Color Palette
 * Softer, pastel-inspired dark theme with pink/purple accents
 */

export const aurora = {
  name: 'Harmonia Aurora',
  type: 'dark',

  // Base colors - foundational layer system
  bg: {
    base: '#1d1c28', // Main background
    elevated: '#1B1A27', // Elevated surfaces
    elevated2: '#1F1E2C', // More elevated (debug toolbar, tabs)
    dropdown: '#0F1618', // Dropdowns, checkboxes
    input: '#1d1c28', // Input fields
    input2: '#142022', // Settings inputs
    quick: '#191828' // Quick input title
  },

  fg: {
    base: '#e6e6f0', // Main text
    bright: '#E8E8F0', // Bright text (badges, active elements)
    brightest: '#E3F2F2', // Brightest text (foreground, headers)
    muted: '#a8a9c6', // Muted text (inactive tabs, breadcrumbs)
    dim: '#5D5A7A', // Dimmed text (disabled)
    white: '#ffffff' // Pure white (active tab, menu selection)
  },

  // Accent & semantic colors
  accent: '#E8A2C8', // Primary accent (pink)
  accentAlt: '#b7a0ff', // Button backgrounds (purple)
  accentHover: '#a48be0', // Button hover
  accentBadge: '#c39ed8', // Badge backgrounds

  error: '#f7a3a8', // Error states (softer red)
  warning: '#f9d79f', // Warning states (soft yellow)
  info: '#a5d8f7', // Info states (soft blue)
  success: '#b0e3c5', // Success states (soft green)

  // Extended palette
  blue: '#6FA3D9', // Links, icons (softer)
  blueAlt: '#85BFDB', // Alternative blue (softer)
  blueBright: '#8FC4E0', // Bright blue (softer)
  blueLight: '#85BFDB', // Light blue (softer)

  cyan: '#84bfc0', // Variables (soft cyan)
  cyanBright: '#88ccc8', // Parameters
  cyanAlt: '#9fdde3', // Alternative cyan

  green: '#9dd5b8', // Strings (soft green)
  greenBright: '#c1eed3', // Bright green

  orange: '#f9d79f', // Numbers, constants (soft orange/yellow)
  orangeAlt: '#ffe6b3', // Alternative orange (bright)

  purple: '#b7a0ff', // Keywords (soft purple)
  purpleBright: '#f0b4d6', // Bright purple/pink
  purpleAlt: '#B99EF0', // Alternative purple

  red: '#f7a3a8', // Errors (soft red)
  redBright: '#f5b2b7', // Bright red

  yellow: '#f9d79f', // Constants, warnings
  yellowBright: '#ffe6b3', // Bright yellow

  // Neutrals
  typeColor: '#6EAADB', // Types, classes (blue-tinted)
  typeAlt: '#6EAADB', // Alternative type color
  typeBlue: '#9CC0FF', // Blue-tinted types

  tag: '#f7a3a8', // HTML tags (pink)
  attribute: '#e8a2c8', // HTML/JSX attributes (pink)

  property: '#8FAED8', // Object properties (blue-gray)
  propertyDecl: '#9BB8E2', // Property declarations

  comment: '#8a909b', // Comments
  commentPunct: '#5a5f7a', // Comment punctuation

  // Borders & separators
  border: '#2c2c3c', // Primary borders
  borderAlt: '#5a5f7a', // Alternative borders
  borderLight: '#1D2A2D', // Light borders (checkboxes)
  borderSeparator: '#26243A', // Menu separators
  sidebarBorder: '#2d2c3a', // Sidebar border

  // Selection & highlights
  selection: '#2F2E45', // Editor selection (softer purple-tint)
  selectionInactive: '#272636',
  listHover: '#24232f', // Subtle but visible
  listActive: '#24232f', // Subtle but visible

  // Special states
  scrollbar: {
    bg: '#FFFFFF1A',
    hover: '#FFFFFF33',
    active: '#FFFFFF4D'
  },

  // Terminal ANSI colors
  ansi: {
    black: '#2e2f3a',
    red: '#f7a3a8',
    green: '#b0e3c5',
    yellow: '#f9d79f',
    blue: '#a5d8f7',
    magenta: '#e8a2c8',
    cyan: '#9fdde3',
    white: '#e8e8f0',
    brightBlack: '#575a74',
    brightRed: '#f5b2b7',
    brightGreen: '#c1eed3',
    brightYellow: '#ffe6b3',
    brightBlue: '#b8e3fb',
    brightMagenta: '#f0b4d6',
    brightCyan: '#b4e9ed',
    brightWhite: '#ffffff'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#FFFFFF06',
  lineHighlightBorder: '#00000000',
  lineNumber: '#575a74',
  lineNumberActive: '#F0B8DA',

  // Bracket highlighting
  bracket1: '#85BFDB',
  bracket2: '#E8A2C8',
  bracket3: '#9FDDE3',
  bracket4: '#B0E3C5',
  bracket5: '#F9D79F',
  bracket6: '#B7A0FF',
  bracketMatchBg: '#433d5c',
  bracketMatchBorder: '#5a5f7a',

  // Ghost text (inline suggestions)
  ghostText: '#BAC7E5',

  // Syntax token colors
  func: '#6FA3D9',
  variable: '#8cccd2',
  constant: '#e6c58a',
  keyword: '#9e8aeb',

  // Operators
  operator: '#C8D0E0B3', // Semantic operator
  operatorToken: '#c0bdd0', // TextMate operator

  // Parameters
  parameter: '#a0dce0', // Semantic parameter
  parameterToken: '#a0dce0', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#c5b4d1',
  regexBody: '#98cce3',
  regexEscape: '#a3d7b8',

  // Markdown
  markdownHeading: '#e8e8f0',
  markdownBold: '#f7a3a8',
  markdownItalic: '#b0e3c5',
  markdownCode: '#a5d8f7',
  markdownQuote: '#9fdde3',

  // Language-specific
  thisSelf: '#6FA3D9',
  langVar: '#B0E3C5',
  phpUse: '#B99EF0',
  phpClass: '#B99EF0',
  phpVarSigil: '#E2E2E899',

  // Decorators & accessors
  decorator: '#6FA3D9',
  accessor: '#afacb8',
  separator: '#C8CAD6',

  // Menu
  menuBg: '#222238',
  menuSelectionBg: '#2E303E',

  // Quick Input
  quickInputFocusBg: '#202534',
  quickInputFocusIcon: '#85BFDB',

  // SCM Graph
  scmGraph1: '#b7a0ff',
  scmGraph2: '#f0b4d6',
  scmGraph3: '#85BFDB',
  scmGraph4: '#b0e3c5',
  scmGraph5: '#a8a9c6',
  scmHoverAdd: '#b9e9cf',
  scmHoverDel: '#f5b2b7',
  scmRef: '#85BFDB',
  scmRemoteRef: '#b9e9cf',

  // Terminal (no selection defined in aurora theme, using default)
  terminalFindMatch: '#b7a0ff66',
  terminalFindMatchHighlight: '#b7a0ff33',
  terminalSelection: '#2F2E45',

  // Settings
  settingsModified: '#6FA3D9',

  // Sidebar
  sidebarHeader: '#D5D9EE',

  // Input
  inputFg: '#E8E8F0',
  inputPlaceholder: '#9EABC2',
  inlineParamFg: '#BFCCE5',

  // List
  listActiveFg: '#ffffff',
  listDeemphasized: '#a8a9c6',

  // Editor guides
  indentGuide: '#2c2f40',
  indentGuideActive: '#5a5f7a',
  whitespace: '#37384a'
}
