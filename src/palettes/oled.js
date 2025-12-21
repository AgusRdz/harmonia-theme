/**
 * Harmonia OLED - Color Palette
 * Pure black background optimized for OLED displays with vibrant accents
 */

export const oled = {
  name: 'Harmonia OLED True Black',
  type: 'dark',

  // Base colors - true black for OLED
  bg: {
    base: '#000000', // Pure black background
    elevated: '#0B0C10', // Elevated surfaces
    elevated2: '#0A0B0E', // More elevated
    dropdown: '#000000', // Dropdowns, checkboxes
    input: '#000000', // Input fields
    input2: '#0A0D18', // Settings inputs
    quick: '#050508' // Quick input title
  },

  fg: {
    base: '#E2E2E8', // Main text (brighter for contrast)
    bright: '#E6E6F0', // Bright text
    brightest: '#E8ECF8', // Brightest text
    muted: '#7B8094', // Muted text
    dim: '#5A5F7A', // Dimmed text
    white: '#ffffff' // Pure white
  },

  // Accent & semantic colors
  accent: '#B99EF0', // Primary accent (purple)
  accentAlt: '#C59BFF', // Button backgrounds
  accentHover: '#B888FF', // Button hover
  accentBadge: '#B574F2', // Badge backgrounds

  error: '#E8848A', // Error states
  warning: '#E1B37A', // Warning states
  info: '#5B9BD5', // Info states (softer)
  success: '#A7DEAE', // Success states

  // Extended palette
  blue: '#5B9BD5', // Links, icons (softer, less luminous)
  blueAlt: '#5FA8BD', // Alternative blue (softer)
  blueBright: '#7099CC', // Bright blue (softer)
  blueLight: '#6BA3D4', // Light blue (softer)

  cyan: '#96D7D4', // Variables (cyan)
  cyanBright: '#A7DEAE', // Parameters (greenish cyan)
  cyanAlt: '#96D7D4', // Alternative cyan

  green: '#98d1b8', // Strings (soft green)
  greenBright: '#BEE9C3', // Bright green

  orange: '#E1B37A', // Numbers, constants
  orangeAlt: '#E1B37A', // Alternative orange

  purple: '#B99EF0', // Keywords (purple)
  purpleBright: '#D7BDF8', // Bright purple
  purpleAlt: '#B99EF0', // Alternative purple

  red: '#E8848A', // Errors
  redBright: '#F0A2A6', // Bright red

  yellow: '#E1B37A', // Constants
  yellowBright: '#F0C894', // Bright yellow

  // Neutrals
  typeColor: '#B8BDF0', // Types, classes
  typeAlt: '#B8BDF0', // Alternative type color
  typeBlue: '#9CC0FF', // Blue-tinted types

  tag: '#D9C2A6', // HTML tags (warm tan)
  attribute: '#8FAED8', // HTML/JSX attributes

  property: '#C8C8D2', // Object properties
  propertyDecl: '#D0D0E0', // Property declarations

  comment: '#8a909b', // Comments
  commentPunct: '#5A5F7A', // Comment punctuation

  // Borders & separators
  border: '#0A0B0E', // Primary borders (very dark)
  borderAlt: '#7C82A3', // Alternative borders
  borderLight: '#1B1F2E', // Light borders
  borderSeparator: '#0A0B0E', // Menu separators

  // Selection & highlights
  selection: '#2A4A6B', // Editor selection (muted blue, much softer)
  selectionInactive: '#1A2A3B',
  listHover: '#0C0D12',
  listActive: '#0C0D12',

  // Special states
  scrollbar: {
    bg: '#FFFFFF1A',
    hover: '#FFFFFF33',
    active: '#FFFFFF4D'
  },

  // Terminal ANSI colors
  ansi: {
    black: '#111218',
    red: '#E8848A',
    green: '#A7DEAE',
    yellow: '#E1B37A',
    blue: '#7AA2F7',
    magenta: '#C5A6F2',
    cyan: '#96D7D4',
    white: '#D6D6DE',
    brightBlack: '#5A5F7A',
    brightRed: '#F0A2A6',
    brightGreen: '#BEE9C3',
    brightYellow: '#F0C894',
    brightBlue: '#9CC0FF',
    brightMagenta: '#D7BDF8',
    brightCyan: '#B3E4E1',
    brightWhite: '#FFFFFF'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#FFFFFF06',
  lineHighlightBorder: '#00000000',
  lineNumber: '#4C4F68',
  lineNumberActive: '#E1B37A',

  // Bracket highlighting
  bracket1: '#5B9BD5',
  bracket2: '#B99EF0',
  bracket3: '#96D7D4',
  bracket4: '#A7DEAE',
  bracket5: '#E1B37A',
  bracket6: '#B8BDF0',
  bracketMatchBg: '#26283A',
  bracketMatchBorder: '#5A5F7A',

  // Ghost text (inline suggestions)
  ghostText: '#C6CBDB',

  // Syntax token colors
  func: '#5B9BD5',
  variable: '#88c5c2',
  constant: '#E1B37A',
  keyword: '#a68edb',

  // Operators
  operator: '#D0D0E0B3', // Semantic operator
  operatorToken: '#bbb9c8', // TextMate operator

  // Parameters
  parameter: '#A7DEAE', // Semantic parameter
  parameterToken: '#A7DEAE', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#b3b3bb',
  regexBody: '#96D7D4',
  regexEscape: '#A7DEAE',

  // Markdown
  markdownHeading: '#E8ECF8',
  markdownBold: '#D7BDF8',
  markdownItalic: '#C8C8D2',
  markdownCode: '#A7DEAE',
  markdownQuote: '#96D7D4',

  // Language-specific
  thisSelf: '#5B9BD5',
  langVar: '#96D7D4',
  phpUse: '#B99EF0',
  phpClass: '#B99EF0',
  phpVarSigil: '#E2E2E899',

  // Decorators & accessors
  decorator: '#5B9BD5',
  accessor: '#a8a6b3',
  separator: '#C8CAD6',

  // Menu
  menuBg: '#000000',
  menuSelectionBg: '#14141A',

  // Quick Input
  quickInputFocusBg: '#14141A',
  quickInputFocusIcon: '#5FA8BD',

  // SCM Graph
  scmGraph1: '#B99EF0',
  scmGraph2: '#E1B37A',
  scmGraph3: '#5B9BD5',
  scmGraph4: '#A7DEAE',
  scmGraph5: '#888CA0',
  scmHoverAdd: '#9FE2B1',
  scmHoverDel: '#F09A9F',
  scmRef: '#5FA8BD',
  scmRemoteRef: '#9FE2B1',

  // Terminal
  terminalFindMatch: '#B99EF080',
  terminalFindMatchHighlight: '#B99EF040',
  terminalSelection: '#2A4A6B66',

  // Settings
  settingsModified: '#5B9BD5',

  // Sidebar
  sidebarHeader: '#D6D6E4',

  // Input
  inputFg: '#E2E2E8',
  inputPlaceholder: '#A8A8B8',
  inlineParamFg: '#D0D0E0',

  // List
  listActiveFg: '#E6E6F0',
  listDeemphasized: '#888CA0',

  // Editor guides
  indentGuide: '#2c2f40',
  indentGuideActive: '#7C82A3',
  whitespace: '#161821'
}
