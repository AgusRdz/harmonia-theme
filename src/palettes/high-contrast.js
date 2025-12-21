/**
 * Harmonia Dark High Contrast - Color Palette
 * Enhanced contrast for improved accessibility with vivid colors
 */

export const highContrast = {
  name: 'Harmonia Dark High Contrast',
  type: 'dark',

  // Base colors - deeper backgrounds for more contrast
  bg: {
    base: '#0B0C12', // Main background (very dark)
    elevated: '#141414', // Elevated surfaces
    elevated2: '#14162A', // More elevated
    dropdown: '#0B0C12', // Dropdowns, checkboxes
    input: '#0B0C12', // Input fields
    input2: '#101324', // Settings inputs
    quick: '#101010' // Quick input title
  },

  fg: {
    base: '#ECECF4', // Main text (brighter)
    bright: '#F2F2FA', // Bright text
    brightest: '#FFFFFF', // Brightest text (pure white)
    muted: '#A0A5BC', // Muted text
    dim: '#9AA0B2', // Dimmed text
    white: '#FFFFFF' // Pure white
  },

  // Accent & semantic colors - more vivid
  accent: '#D08CFF', // Primary accent (vivid purple)
  accentAlt: '#C59BFF', // Button backgrounds
  accentHover: '#B888FF', // Button hover
  accentBadge: '#B574F2', // Badge backgrounds

  error: '#FF9AA6', // Error states (vivid)
  warning: '#FFC979', // Warning states (vivid)
  info: '#7AA8D9', // Info states (softer)
  success: '#9FF0D4', // Success states (vivid)

  // Extended palette - vivid, high-contrast colors
  blue: '#7AA8D9', // Links, icons (softer but still visible)
  blueAlt: '#86E1F0', // Alternative blue (cyan-blue)
  blueBright: '#8CB8E6', // Bright blue (softer)
  blueLight: '#6FA3D9', // Light blue (softer)

  cyan: '#79D4D2', // Variables (vivid cyan)
  cyanBright: '#B8F7F2', // Parameters (bright cyan)
  cyanAlt: '#8CE8E0', // Alternative cyan

  green: '#a0dec0', // Strings (vivid green)
  greenBright: '#C0F1C0', // Bright green

  orange: '#FFCC80', // Numbers, constants (vivid)
  orangeAlt: '#F0C894', // Alternative orange

  purple: '#E3B1FF', // Keywords (vivid purple)
  purpleBright: '#E7B7FF', // Bright purple
  purpleAlt: '#B99EF0', // Alternative purple

  red: '#FF7E8A', // Errors (vivid red)
  redBright: '#FFA1AA', // Bright red

  yellow: '#F0BE79', // Constants (vivid yellow)
  yellowBright: '#FFD793', // Bright yellow

  // Neutrals - enhanced contrast
  typeColor: '#B8BDF0', // Types, classes
  typeAlt: '#D3D7FF', // Alternative type color (brighter)
  typeBlue: '#9CC0FF', // Blue-tinted types

  tag: '#F0CF9A', // HTML tags (warm)
  attribute: '#A9C6FF', // HTML/JSX attributes (bright blue)

  property: '#E6EAF6', // Object properties (bright)
  propertyDecl: '#FFFFFF', // Property declarations (white)

  comment: '#959ba8', // Comments (brighter)
  commentPunct: '#7C82A3', // Comment punctuation

  // Borders & separators
  border: '#3A3D55', // Primary borders (more visible)
  borderAlt: '#7C82A3', // Alternative borders
  borderLight: '#1E2230', // Light borders
  borderSeparator: '#2A2A2A', // Menu separators

  // Selection & highlights
  selection: '#354270', // Editor selection (softer purple-blue)
  selectionInactive: '#33385e',
  listHover: '#343861',
  listActive: '#3A3E6B',

  // Special states
  scrollbar: {
    bg: '#FFFFFF26', // More visible scrollbar
    hover: '#FFFFFF4D',
    active: '#FFFFFF66'
  },

  // Terminal ANSI colors - vivid, high contrast
  ansi: {
    black: '#252735',
    red: '#FF7E8A',
    green: '#98E8B0',
    yellow: '#F0BE79',
    blue: '#74C0FF',
    magenta: '#D08CFF',
    cyan: '#79D4D2',
    white: '#ECECF4',
    brightBlack: '#7C82A3',
    brightRed: '#FFA1AA',
    brightGreen: '#C0F1C0',
    brightYellow: '#FFD793',
    brightBlue: '#A8D8FF',
    brightMagenta: '#E7B7FF',
    brightCyan: '#B6F2F5',
    brightWhite: '#FFFFFF'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#FFFFFF06',
  lineHighlightBorder: '#00000000',
  lineNumber: '#6F7392',
  lineNumberActive: '#FFD18F',

  // Bracket highlighting
  bracket1: '#7AA8D9',
  bracket2: '#C9D6FF',
  bracket3: '#8CE8E0',
  bracket4: '#A8FFCA',
  bracket5: '#E0A96D',
  bracket6: '#9FE7E0',
  bracketMatchBg: '#4C4B7F',
  bracketMatchBorder: '#7C82A3',

  // Ghost text (inline suggestions)
  ghostText: '#C0C8DA',

  // Syntax token colors
  func: '#6FA3D9',
  variable: '#79D4D2',
  constant: '#e6ba78',
  keyword: '#c296e8',

  // Operators
  operator: '#E6EAF6B3', // Semantic operator
  operatorToken: '#d0cee0', // TextMate operator

  // Parameters
  parameter: '#96ddd5', // Semantic parameter
  parameterToken: '#96ddd5', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#dcd9e8',
  regexBody: '#79D4D2',
  regexEscape: '#98E8B0',

  // Markdown
  markdownHeading: '#FFFFFF',
  markdownBold: '#E7B7FF',
  markdownItalic: '#D3D7FF',
  markdownCode: '#C0F1C0',
  markdownQuote: '#B6F2F5',

  // Language-specific
  thisSelf: '#7AA8D9',
  langVar: '#79D4D2',
  phpUse: '#B99EF0',
  phpClass: '#B99EF0',
  phpVarSigil: '#ECECF499',

  // Decorators & accessors
  decorator: '#7AA8D9',
  accessor: '#b8b6c8',
  separator: '#D8DAE6',

  // Menu
  menuBg: '#0B0C12',
  menuSelectionBg: '#1E2230',

  // Quick Input
  quickInputFocusBg: '#1E2230',
  quickInputFocusIcon: '#7AA8D9',

  // SCM Graph
  scmGraph1: '#D08CFF',
  scmGraph2: '#FF995E',
  scmGraph3: '#86E1F0',
  scmGraph4: '#89E5A3',
  scmGraph5: '#A3A8BC',
  scmHoverAdd: '#7AD796',
  scmHoverDel: '#F08E97',
  scmRef: '#7AA8D9',
  scmRemoteRef: '#7AD796',

  // Terminal
  terminalFindMatch: '#6B5DD0CC',
  terminalFindMatchHighlight: '#6B5DD080',
  terminalSelection: '#354270',

  // Settings
  settingsModified: '#FFB454',

  // Sidebar
  sidebarHeader: '#D7DDF0',

  // Input
  inputFg: '#E6EAF6',
  inputPlaceholder: '#A4AEC6',
  inlineParamFg: '#C9CFE8',

  // List
  listActiveFg: '#F2F2FA',
  listDeemphasized: '#A3A8BC',

  // Editor guides
  indentGuide: '#2c2f40',
  indentGuideActive: '#7C82A3',
  whitespace: '#31364A'
}
