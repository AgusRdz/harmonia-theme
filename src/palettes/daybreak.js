/**
 * Harmonia Daybreak - Color Palette
 * Light theme with blue-focused syntax highlighting
 * Features blue keywords (like Moonlit) in a light context
 */

export const daybreak = {
  name: 'Harmonia Daybreak',
  type: 'light',

  // Base colors - light backgrounds
  bg: {
    base: '#eceef1', // Main background
    elevated: '#F4F5F8', // Elevated surfaces
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
  accent: '#4A7EC7', // Primary accent (blue, softer)
  accentAlt: '#C9A7EA', // Button backgrounds (light purple)
  accentHover: '#B895E1', // Button hover
  accentBadge: '#b678d6', // Badge backgrounds

  error: '#EC7279', // Error states
  warning: '#B26A00', // Warning states
  info: '#3574A3', // Info states
  success: '#7EBF87', // Success states

  // Extended palette
  blue: '#4A7EC7', // Functions, Keywords (softer blue)
  blueAlt: '#6EAADB', // Alternative blue
  blueBright: '#5B8FC7', // Bright blue (terminal, softer)
  blueLight: '#3574A3', // Light blue

  cyan: '#54596268', // Variables (neutral gray with alpha)
  cyanBright: '#3B3F48', // Parameters (neutral)
  cyanAlt: '#6EAADB', // Alternative cyan

  green: '#2F7C61', // Strings
  greenBright: '#8FD0A0', // Bright green (terminal)

  orange: '#D4AB74', // Numbers, constants
  orangeAlt: '#D4AB74', // Alternative orange

  purple: '#4A7EC7', // Keywords (BLUE, not purple!)
  purpleBright: '#B678D6', // Bright purple (terminal)
  purpleAlt: '#4A7EC7', // Alternative (still blue)

  red: '#EC7279', // Errors
  redBright: '#F19196', // Bright red (terminal)

  yellow: '#D4AB74', // Constants
  yellowBright: '#DCBFA8', // Bright yellow (terminal)

  // Neutrals
  typeColor: '#5B7ED9', // Types, classes (blue, softer)
  typeAlt: '#7099CC', // Alternative type color (softer)
  typeBlue: '#7099CC', // Blue-tinted types (softer)

  tag: '#4A7EC7', // HTML tags (blue, softer)
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
  sidebarBorder: '#d4d6dc', // Sidebar border

  // Selection & highlights
  selection: '#D5DBE6', // Editor selection (softer)
  selectionInactive: '#e3e8f0',
  listHover: '#E9EEF8',
  listActive: '#DDE3F4',

  // Special states - inverted opacity for light themes
  scrollbar: {
    bg: '#0000000D', // Light semi-transparent black
    hover: '#00000019',
    active: '#00000033'
  },

  // Terminal ANSI colors
  ansi: {
    black: '#9FA6B2',
    red: '#EC7279',
    green: '#7EBF87',
    yellow: '#D4AB74',
    blue: '#4A7EC7',
    magenta: '#A454CB',
    cyan: '#6EAADB',
    white: '#3A3A3A',
    brightBlack: '#808890',
    brightRed: '#F19196',
    brightGreen: '#8FD0A0',
    brightYellow: '#DCBFA8',
    brightBlue: '#5B8FC7',
    brightMagenta: '#B678D6',
    brightCyan: '#8CA9D5',
    brightWhite: '#3A3A3A'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#00000005',
  lineHighlightBorder: '#00000000',
  lineNumber: '#7a7f89',
  lineNumberActive: '#6B78C9',

  // Bracket highlighting
  bracket1: '#4A7EC7',
  bracket2: '#A454CB',
  bracket3: '#6EAADB',
  bracket4: '#7EBF87',
  bracket5: '#D4AB74',
  bracket6: '#4A7EC7',
  bracketMatchBg: '#D5DBE6',
  bracketMatchBorder: '#B4B8C2',

  // Ghost text (inline suggestions)
  ghostText: '#7A849E',

  // Syntax token colors
  func: '#4A7EC7',
  variable: '#4AB5B4',
  constant: '#D4AB74',
  keyword: '#5B7ED9',

  // Operators
  operator: '#3B3F48B3', // Semantic operator
  operatorToken: '#72767e', // TextMate operator

  // Parameters
  parameter: '#489DAC', // Semantic parameter (neutral)
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
  thisSelf: '#4A7EC7',
  langVar: '#3B3F48',
  phpUse: '#9D74C2',
  phpClass: '#9D74C2',
  phpVarSigil: '#3B3F4899',

  // Decorators & accessors
  decorator: '#6EAADB',
  accessor: '#888888',
  separator: '#707580',

  // Menu
  menuBg: '#F4F5F8',
  menuSelectionBg: '#E2E6F0',

  // Quick Input
  quickInputFocusBg: '#DDE3F4',
  quickInputFocusIcon: '#6EAADB',

  // SCM Graph
  scmGraph1: '#7aa2f7',
  scmGraph2: '#88c6c3',
  scmGraph3: '#a3d9a5',
  scmGraph4: '#c574dd',
  scmGraph5: '#5a5f7a',
  scmHoverAdd: '#7ebf87',
  scmHoverDel: '#d76585',
  scmRef: '#6EAADB',
  scmRemoteRef: '#7ebf87',

  // Terminal
  terminalFindMatch: '#CFE8FC66',
  terminalFindMatchHighlight: '#CFE8FC33',
  terminalSelection: '#D5DBE6',

  // Settings
  settingsModified: '#7B5CE6',

  // Sidebar
  sidebarHeader: '#3A4054',

  // Input
  inputFg: '#1A1A1A',
  inputPlaceholder: '#6D7485',
  inlineParamFg: '#5E6670',

  // List
  listActiveFg: '#1F2435',
  listDeemphasized: '#888ca0',

  // Editor guides
  indentGuide: '#e5e5e5',
  indentGuideActive: '#B4B8C2',
  whitespace: '#c3c7ce'
}
