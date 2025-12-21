/**
 * Harmonia Paper White - Color Palette
 * Ultra-minimal light theme with pure white background
 * Optimized for maximum simplicity and paper-like appearance
 */

export const paperWhite = {
  name: 'Harmonia Paper White',
  type: 'light',

  // Base colors - pure white backgrounds
  bg: {
    base: '#FFFFFF', // Pure white background
    elevated: '#F3F5FA', // Elevated surfaces (very subtle)
    elevated2: '#F8F8F8', // More elevated (tabs)
    dropdown: '#FFFFFF', // Dropdowns, checkboxes
    input: '#FFFFFF', // Input fields
    input2: '#FFFFFF', // Settings inputs
    quick: '#F0F0F3' // Quick input title
  },

  fg: {
    base: '#1A1A1A', // Main text (very dark gray)
    bright: '#1E2030', // Bright text (headers)
    brightest: '#23252C', // Brightest text
    muted: '#555555', // Muted text (inactive tabs)
    dim: '#9AA1AE', // Dimmed text (disabled)
    white: '#1A1A1A' // Active elements (dark on white)
  },

  // Accent & semantic colors
  accent: '#4A6FB8', // Primary accent (softer blue)
  accentAlt: '#E0E0E0', // Button backgrounds (subtle gray)
  accentHover: '#D5D5D5', // Button hover
  accentBadge: '#888888', // Badge backgrounds

  error: '#EC7279', // Error states
  warning: '#B26A00', // Warning states
  info: '#3574A3', // Info states
  success: '#2E7D32', // Success states (darker green)

  // Extended palette
  blue: '#4A6FB8', // Links, functions (softer)
  blueAlt: '#6EAADB', // Alternative blue
  blueBright: '#8CA9D5', // Bright blue (terminal)
  blueLight: '#3574A3', // Light blue

  cyan: '#4AB5B4', // Variables
  cyanBright: '#489DAC', // Parameters
  cyanAlt: '#4AB5B4', // Alternative cyan

  green: '#2F7C61', // Strings
  greenBright: '#8FD0A0', // Bright green (terminal)

  orange: '#D4AB74', // Numbers, constants
  orangeAlt: '#D4AB74', // Alternative orange

  purple: '#9650c0', // Keywords (purple)
  purpleBright: '#B678D6', // Bright purple (terminal)
  purpleAlt: '#B99EF0', // Alternative purple

  red: '#EC7279', // Errors
  redBright: '#F19196', // Bright red (terminal)

  yellow: '#D4AB74', // Constants
  yellowBright: '#DCBFA8', // Bright yellow (terminal)

  // Neutrals
  typeColor: '#5B6DBD', // Types, classes (softer)
  typeAlt: '#5B6DBD', // Alternative type color (softer)
  typeBlue: '#7099CC', // Blue-tinted types (softer)

  tag: '#4A6FB8', // HTML tags (blue, softer)
  attribute: '#3574A3', // HTML/JSX attributes

  property: '#3B3F48', // Object properties
  propertyDecl: '#4A4F62', // Property declarations

  comment: '#707680', // Comments (neutral gray)
  commentPunct: '#888888', // Comment punctuation

  // Borders & separators
  border: '#E0E0E0', // Primary borders (subtle)
  borderAlt: '#9AA1AE', // Alternative borders
  borderLight: '#D9DEE8', // Light borders
  borderSeparator: '#D9DEE8', // Menu separators

  // Selection & highlights
  selection: '#E0E7F0', // Editor selection (softer, less blue)
  selectionInactive: '#F2F2F2',
  listHover: '#F0F8FF',
  listActive: '#E8F0FF',

  // Special states - inverted opacity for light themes
  scrollbar: {
    bg: '#0000000D', // Very subtle scrollbar
    hover: '#00000019',
    active: '#00000033'
  },

  // Terminal ANSI colors
  ansi: {
    black: '#9FA6B2',
    red: '#EC7279',
    green: '#7EBF87',
    yellow: '#D4AB74',
    blue: '#6EAADB',
    magenta: '#A454CB',
    cyan: '#4AB5B4',
    white: '#2D2D2D',
    brightBlack: '#808890',
    brightRed: '#F19196',
    brightGreen: '#8FD0A0',
    brightYellow: '#DCBFA8',
    brightBlue: '#8CA9D5',
    brightMagenta: '#B678D6',
    brightCyan: '#489DAC',
    brightWhite: '#000000'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#00000005',
  lineHighlightBorder: '#00000000',
  lineNumber: '#A9AEB6',
  lineNumberActive: '#6B86C7',

  // Bracket highlighting
  bracket1: '#4A6FB8',
  bracket2: '#A454CB',
  bracket3: '#4AB5B4',
  bracket4: '#7EBF87',
  bracket5: '#D4AB74',
  bracket6: '#4A6FB8',
  bracketMatchBg: '#E8ECF2',
  bracketMatchBorder: '#9AA1AE',

  // Ghost text (inline suggestions)
  ghostText: '#727A8C',

  // Syntax token colors
  func: '#4A6FB8',
  variable: '#4AB5B4',
  constant: '#D4AB74',
  keyword: '#9650c0',

  // Operators
  operator: '#3B3F48B3', // Semantic operator
  operatorToken: '#72767e', // TextMate operator

  // Parameters
  parameter: '#489DAC', // Semantic parameter
  parameterToken: '#489DAC', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#999999',
  regexBody: '#4AB5B4',
  regexEscape: '#7EBF87',

  // Markdown
  markdownHeading: '#1A1A1A',
  markdownBold: '#A454CB',
  markdownItalic: '#808890',
  markdownCode: '#2F7C61',
  markdownQuote: '#4AB5B4',

  // Language-specific
  thisSelf: '#4A6FB8',
  langVar: '#4AB5B4',
  phpUse: '#9D74C2',
  phpClass: '#9D74C2',
  phpVarSigil: '#4AB5B499',

  // Decorators & accessors
  decorator: '#6EAADB',
  accessor: '#888888',
  separator: '#707580',

  // Menu
  menuBg: '#FFFFFF',
  menuSelectionBg: '#F0F0F3',

  // Quick Input
  quickInputFocusBg: '#E6ECF7',
  quickInputFocusIcon: '#3574A3',

  // SCM Graph
  scmGraph1: '#7B3FBF',
  scmGraph2: '#B35B26',
  scmGraph3: '#2C5DB0',
  scmGraph4: '#2E7D32',
  scmGraph5: '#9AA1AE',
  scmHoverAdd: '#2E7D32',
  scmHoverDel: '#C2410C',
  scmRef: '#3574A3',
  scmRemoteRef: '#2E7D32',

  // Terminal
  terminalFindMatch: '#CFE8FC66',
  terminalFindMatchHighlight: '#CFE8FC33',
  terminalSelection: '#E0E7F0',

  // Settings
  settingsModified: '#B06AB3',

  // Sidebar
  sidebarHeader: '#40485A',

  // Input
  inputFg: '#1A1A1A',
  inputPlaceholder: '#6E7681',
  inlineParamFg: '#5E6670',

  // List
  listActiveFg: '#000000',
  listDeemphasized: '#888CA0',

  // Editor guides
  indentGuide: '#e5e5e5',
  indentGuideActive: '#9AA1AE',
  whitespace: '#E2E6EC'
}
