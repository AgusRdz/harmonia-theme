/**
 * Harmonia Light - Color Palette
 * Professional light theme with purple accents
 */

export const light = {
  name: 'Harmonia Light',
  type: 'light',

  // Base colors - light backgrounds
  bg: {
    base: '#eceef1', // Main background
    elevated: '#F4F6F9', // Elevated surfaces
    elevated2: '#E2E4E7', // More elevated (tabs)
    dropdown: '#FAFBFF', // Dropdowns, checkboxes
    input: '#eceef1', // Input fields
    input2: '#FFFFFF', // Settings inputs
    quick: '#EDEFF3' // Quick input title
  },

  fg: {
    base: '#2d2d2d', // Main text
    bright: '#1C2033', // Bright text (headers)
    brightest: '#222435', // Brightest text
    muted: '#7a7f89', // Muted text (inactive tabs)
    dim: '#9AA1AE', // Dimmed text (disabled)
    white: '#3a3a3a' // Active elements
  },

  // Accent & semantic colors
  accent: '#4A6FB8', // Primary accent (blue-purple, softer)
  accentAlt: '#C9A7EA', // Button backgrounds (light purple)
  accentHover: '#B895E1', // Button hover
  accentBadge: '#b678d6', // Badge backgrounds

  error: '#EC7279', // Error states
  warning: '#B26A00', // Warning states
  info: '#3574A3', // Info states
  success: '#7EBF87', // Success states

  // Extended palette
  blue: '#4A6FB8', // Links, functions (slightly softer)
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

  purple: '#A454CB', // Keywords (purple)
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

  comment: '#707680', // Comments
  commentPunct: '#808890', // Comment punctuation

  // Borders & separators
  border: '#d0d3d6', // Primary borders
  borderAlt: '#B4B8C2', // Alternative borders
  borderLight: '#D5DBE9', // Light borders
  borderSeparator: '#D9DEE8', // Menu separators

  // Selection & highlights
  selection: '#D5DBE6', // Editor selection (slightly softer)
  selectionInactive: '#e3e8f0',
  listHover: '#e8e3f2',
  listActive: '#dad3e8',

  // Special states - inverted opacity for light themes
  scrollbar: {
    bg: '#0000000D', // Inverted from dark (light semi-transparent black)
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
    brightWhite: '#3A3A3A'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#00000005',
  lineHighlightBorder: '#00000000',
  lineNumber: '#7a7f89',
  lineNumberActive: '#6476C2',

  // Bracket highlighting
  bracket1: '#4A6FB8',
  bracket2: '#A454CB',
  bracket3: '#4AB5B4',
  bracket4: '#7EBF87',
  bracket5: '#D4AB74',
  bracket6: '#4A6FB8',
  bracketMatchBg: '#D5DBE6',
  bracketMatchBorder: '#B4B8C2',

  // Ghost text (inline suggestions)
  ghostText: '#727A8C',

  // Syntax token colors
  func: '#4A6FB8',
  variable: '#4AB5B4',
  constant: '#D4AB74',
  keyword: '#A454CB',

  // Operators
  operator: '#3B3F48B3', // Semantic operator
  operatorToken: '#72767e', // TextMate operator

  // Parameters
  parameter: '#489DAC', // Semantic parameter
  parameterToken: '#489DAC', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#999',
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
  accessor: '#888',
  separator: '#707580',

  // Menu
  menuBg: '#F4F6F9',
  menuSelectionBg: '#E2E6F0',

  // Quick Input
  quickInputFocusBg: '#E2E6F0',
  quickInputFocusIcon: '#3574A3',

  // SCM Graph
  scmGraph1: '#A454CB',
  scmGraph2: '#D4AB74',
  scmGraph3: '#4A6FB8',
  scmGraph4: '#7EBF87',
  scmGraph5: '#9AA1AE',
  scmHoverAdd: '#7EBF87',
  scmHoverDel: '#EC7279',
  scmRef: '#3574A3',
  scmRemoteRef: '#7EBF87',

  // Terminal
  terminalFindMatch: '#CFE8FC66',
  terminalFindMatchHighlight: '#CFE8FC33',
  terminalSelection: '#D5DBE6',

  // Settings
  settingsModified: '#B06AB3',

  // Sidebar
  sidebarHeader: '#40485A',

  // Input
  inputFg: '#1A1A1A',
  inputPlaceholder: '#6E7681',
  inlineParamFg: '#5E6670',

  // List
  listActiveFg: '#1F2435',
  listDeemphasized: '#888ca0',

  // Editor guides
  indentGuide: '#e5e5e5',
  indentGuideActive: '#B4B8C2',
  whitespace: '#ddd'
}
