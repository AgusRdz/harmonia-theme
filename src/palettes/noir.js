/**
 * Harmonia Noir - Color Palette
 * Deep purple-tinted dark theme with warmer accents
 */

export const noir = {
  name: 'Harmonia Noir',
  type: 'dark',

  // Base colors - foundational layer system
  bg: {
    base: '#14121A', // Main background (deeper than Dark)
    elevated: '#181624', // Elevated surfaces
    elevated2: '#1A1823', // More elevated (debug toolbar, tabs)
    dropdown: '#121218', // Dropdowns, checkboxes
    input: '#14121A', // Input fields
    input2: '#1A1A26', // Settings inputs
    quick: '#1A1826' // Quick input title
  },

  fg: {
    base: '#d0d0e0', // Main text
    bright: '#e8e8f0', // Bright text (badges, active elements)
    brightest: '#E8E8F0', // Brightest text (foreground, headers)
    muted: '#777a96', // Muted text (inactive tabs, breadcrumbs)
    dim: '#4C4665', // Dimmed text (disabled)
    white: '#ffffff' // Pure white (active tab, menu selection)
  },

  // Accent & semantic colors
  accent: '#b88ce8', // Primary accent (lighter purple)
  accentAlt: '#A98BE6', // Button backgrounds
  accentHover: '#9D7DDC', // Button hover
  accentBadge: '#9a78cc', // Badge backgrounds

  error: '#E8848A', // Error states
  warning: '#E0A96D', // Warning states
  info: '#B8BDF0', // Info states
  success: '#A8E0D2', // Success states

  // Extended palette
  blue: '#7099CC', // Links, icons (softer)
  blueAlt: '#8bd4e9', // Alternative blue
  blueBright: '#8E95D9', // Bright blue (softer)
  blueLight: '#9278C0', // Light blue (softer)

  cyan: '#88c6c3', // Variables
  cyanBright: '#94E2D5', // Parameters, decorative
  cyanAlt: '#A8E0D2', // Alternative cyan (bright)

  green: '#9BCAD9', // Strings (more teal-tinted)
  greenBright: '#B3E6C0', // Bright green

  orange: '#e0a96d', // Numbers, constants, warnings
  orangeAlt: '#E1B37A', // Alternative orange (enums)

  purple: '#C2A0F5', // Keywords, accent (brighter)
  purpleBright: '#D7C0FF', // Bright purple
  purpleAlt: '#B99EF0', // Alternative purple (PHP keywords)

  red: '#ec7279', // Errors, deletion
  redBright: '#E8848A', // Bright red

  yellow: '#e0a96d', // Constants, warnings (same as orange)
  yellowBright: '#E1B37A', // Bright yellow

  // Neutrals
  typeColor: '#B8C2F2', // Types, classes, namespaces
  typeAlt: '#B8BDF0', // Alternative type color
  typeBlue: '#9CC0FF', // Blue-tinted types

  tag: '#dcbfa8', // HTML tags
  attribute: '#8CA9D5', // HTML/JSX attributes

  property: '#C8CEDA', // Object properties
  propertyDecl: '#D4DAE6', // Property declarations

  comment: '#8a909b', // Comments
  commentPunct: '#5a5f7a', // Comment punctuation

  // Borders & separators
  border: '#2a2840', // Primary borders
  borderAlt: '#5a5f7a', // Alternative borders (stronger)
  borderLight: '#2A2A38', // Light borders (checkboxes)
  borderSeparator: '#2A2835', // Menu separators

  // Selection & highlights
  selection: '#2B2440', // Editor selection (softer purple-tint)
  selectionInactive: '#221f31',
  listHover: '#2F294A',
  listActive: '#382F54',

  // Special states
  scrollbar: {
    bg: '#FFFFFF1A',
    hover: '#FFFFFF33',
    active: '#FFFFFF4D'
  },

  // Terminal ANSI colors
  ansi: {
    black: '#2a2b36',
    red: '#ec7279',
    green: '#9fd6d1',
    yellow: '#d4aa76',
    blue: '#7ea8e6',
    magenta: '#bba0f5',
    cyan: '#88c6c3',
    white: '#d0d0e0',
    brightBlack: '#5a5f7a',
    brightRed: '#ec8a8f',
    brightGreen: '#a8e0db',
    brightYellow: '#e3bb86',
    brightBlue: '#9cc7ff',
    brightMagenta: '#caa7f2',
    brightCyan: '#a3dee0',
    brightWhite: '#ffffff'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#FFFFFF06',
  lineHighlightBorder: '#00000000',
  lineNumber: '#4c4f68',
  lineNumberActive: '#D7C0FF',

  // Bracket highlighting
  bracket1: '#C2A0F5',
  bracket2: '#A8E0D2',
  bracket3: '#B3E6C0',
  bracket4: '#E8B3CF',
  bracket5: '#E1B37A',
  bracket6: '#9CC0FF',
  bracketMatchBg: '#3f3a58',
  bracketMatchBorder: '#5a5f7a',

  // Ghost text (inline suggestions)
  ghostText: '#C2C6D8',

  // Syntax token colors
  func: '#a0aee8',
  variable: '#88c6c3',
  constant: '#d39d62',
  keyword: '#a788de',

  // Operators
  operator: '#D0D0E0B3', // Semantic operator
  operatorToken: '#bfbdcc', // TextMate operator

  // Parameters
  parameter: '#A7DEAE', // Semantic parameter
  parameterToken: '#94E2D5', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#b0b0b0',
  regexBody: '#9bd4c7',
  regexEscape: '#a6dbb3',

  // Markdown
  markdownHeading: '#D9E0EE',
  markdownBold: '#caa7f2',
  markdownItalic: '#BAC2DE',
  markdownCode: '#A6E3A1',
  markdownQuote: '#94E2D5',

  // Language-specific
  thisSelf: '#7099CC',
  langVar: '#A8E0D2',
  phpUse: '#B99EF0',
  phpClass: '#B99EF0',
  phpVarSigil: '#E2E2E899',

  // Decorators & accessors
  decorator: '#9278C0',
  accessor: '#aeadb8',
  separator: '#C8CAD6',

  // Menu
  menuBg: '#211F2E',
  menuSelectionBg: '#2F2942',

  // Quick Input
  quickInputFocusBg: '#262130',
  quickInputFocusIcon: '#9278C0',

  // SCM Graph
  scmGraph1: '#b88ce8',
  scmGraph2: '#ef874b',
  scmGraph3: '#8bd4e9',
  scmGraph4: '#a3d9a5',
  scmGraph5: '#888ca0',
  scmHoverAdd: '#83b987',
  scmHoverDel: '#de7d84',
  scmRef: '#9278C0',
  scmRemoteRef: '#83b987',

  // Terminal (no findMatch/selection defined in noir theme, using defaults)
  terminalFindMatch: '#50467980',
  terminalFindMatchHighlight: '#50467940',
  terminalSelection: '#2B2440',

  // Settings
  settingsModified: '#8E95D9',

  // Sidebar
  sidebarHeader: '#CFC9E2',

  // Input
  inputFg: '#D0D0E0',
  inputPlaceholder: '#A59FBA',
  inlineParamFg: '#E0E0E0',

  // List
  listActiveFg: '#e0e0f0',
  listDeemphasized: '#888ca0',

  // Editor guides
  indentGuide: '#2c2f40',
  indentGuideActive: '#5a5f7a',
  whitespace: '#2a2c3a'
}
