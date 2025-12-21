/**
 * Harmonia Dark - Color Palette
 * Reference theme for the dark variant family
 */

export const dark = {
  name: 'Harmonia Dark',
  type: 'dark',

  // Base colors - foundational layer system
  bg: {
    base: '#1a1b26', // Main background
    elevated: '#1e1f2a', // Elevated surfaces (hover widgets, suggestions)
    elevated2: '#21222e', // More elevated (debug toolbar, tabs)
    dropdown: '#0F1220', // Dropdowns, checkboxes
    input: '#1d1c28', // Input fields
    input2: '#151826', // Settings inputs
    quick: '#15182B' // Quick input title
  },

  fg: {
    base: '#d0d0e0', // Main text
    bright: '#e6e6f0', // Bright text (badges, active elements)
    brightest: '#E6EAF6', // Brightest text (foreground, headers)
    muted: '#777a96', // Muted text (inactive tabs, breadcrumbs)
    dim: '#5A5F7A', // Dimmed text (disabled)
    white: '#ffffff' // Pure white (active tab, menu selection)
  },

  // Accent & semantic colors
  accent: '#c574dd', // Primary accent (purple)
  accentAlt: '#9b6ebf', // Button backgrounds
  accentHover: '#8e5eb2', // Button hover
  accentBadge: '#8656a8', // Badge backgrounds

  error: '#ec7279', // Error states
  warning: '#e0a96d', // Warning states
  info: '#6ebddb', // Info states
  success: '#a3d9a5', // Success states

  // Extended palette
  blue: '#7099CC', // Links, icons, highlights (softer)
  blueAlt: '#6ebddb', // Alternative blue (terminal)
  blueBright: '#8FADD9', // Bright blue (active links, softer)
  blueLight: '#85A8D9', // Light blue (focus icons, softer)

  cyan: '#88c6c3', // Variables
  cyanBright: '#94E2D5', // Parameters, decorative
  cyanAlt: '#88c6c3', // Alternative cyan

  green: '#a3d9a5', // Strings, success
  greenBright: '#b6e3b4', // Bright green (terminal)

  orange: '#e0a96d', // Numbers, constants, warnings
  orangeAlt: '#E1B37A', // Alternative orange (enums)

  purple: '#c574dd', // Keywords, accent
  purpleBright: '#d995ed', // Bright purple (terminal)
  purpleAlt: '#B99EF0', // Alternative purple (PHP keywords)

  red: '#ec7279', // Errors, deletion
  redBright: '#ec8a8f', // Bright red (terminal)

  yellow: '#e0a96d', // Constants, warnings (same as orange)
  yellowBright: '#f0c685', // Bright yellow (terminal)

  // Neutrals
  typeColor: '#b8bdf0', // Types, classes, namespaces
  typeAlt: '#B8BDF0', // Alternative type color
  typeBlue: '#9CC0FF', // Blue-tinted types

  tag: '#dcbfa8', // HTML tags
  attribute: '#8CA9D5', // HTML/JSX attributes

  property: '#C8D0E0', // Object properties
  propertyDecl: '#D0D6E8', // Property declarations

  comment: '#8a909b', // Comments
  commentPunct: '#5a5f7a', // Comment punctuation

  // Borders & separators
  border: '#2c2e40', // Primary borders
  borderAlt: '#5a5f7a', // Alternative borders (stronger)
  borderLight: '#202438', // Light borders (checkboxes)
  borderSeparator: '#2A2E45', // Menu separators

  // Selection & highlights
  selection: '#283650', // Editor selection (softer)
  selectionInactive: '#252736',
  listHover: '#393b58',
  listActive: '#353753',

  // Special states
  scrollbar: {
    bg: '#FFFFFF1A',
    hover: '#FFFFFF33',
    active: '#FFFFFF4D'
  },

  // Terminal ANSI colors
  ansi: {
    black: '#2e2f3a',
    red: '#ec7279',
    green: '#a3d9a5',
    yellow: '#e0a96d',
    blue: '#6ebddb',
    magenta: '#c574dd',
    cyan: '#88c6c3',
    white: '#d0d0e0',
    brightBlack: '#5a5f7a',
    brightRed: '#ec8a8f',
    brightGreen: '#b6e3b4',
    brightYellow: '#f0c685',
    brightBlue: '#8bd4e9',
    brightMagenta: '#d995ed',
    brightCyan: '#a3dee0',
    brightWhite: '#ffffff'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#FFFFFF06',
  lineHighlightBorder: '#00000000',
  lineNumber: '#4c4f68',
  lineNumberActive: '#B9C3FF',

  // Bracket highlighting
  bracket1: '#7099CC',
  bracket2: '#c574dd',
  bracket3: '#88c6c3',
  bracket4: '#a3d9a5',
  bracket5: '#e0a96d',
  bracket6: '#B8BDF0',
  bracketMatchBg: '#444769',
  bracketMatchBorder: '#5a5f7a',

  // Ghost text (inline suggestions)
  ghostText: '#C5CBE3',

  // Syntax token colors
  func: '#7099CC',
  variable: '#88c6c3',
  constant: '#d39d62',
  keyword: '#b165c5',

  // Operators
  operator: '#D0D0E0B3', // Semantic operator
  operatorToken: '#a8a8b8', // TextMate operator

  // Parameters
  parameter: '#94E2D5', // Semantic parameter
  parameterToken: '#94E2D5', // TextMate parameter

  // HTML/Markup
  htmlBracket: '#b0b0b0',
  regexBody: '#89ccc9',
  regexEscape: '#9ad3a0',

  // Markdown
  markdownHeading: '#D9E0EE',
  markdownBold: '#CBA6F7',
  markdownItalic: '#BAC2DE',
  markdownCode: '#A6E3A1',
  markdownQuote: '#94E2D5',

  // Language-specific
  thisSelf: '#7099CC',
  langVar: '#88c6c3',
  phpUse: '#B99EF0',
  phpClass: '#B99EF0',
  phpVarSigil: '#E2E2E899',

  // Decorators & accessors
  decorator: '#7099CC',
  accessor: '#999',
  separator: '#C8CAD6',

  // Menu
  menuBg: '#212338',
  menuSelectionBg: '#2E3350',

  // Quick Input
  quickInputFocusBg: '#222238',
  quickInputFocusIcon: '#85A8D9',

  // SCM Graph
  scmGraph1: '#bb7dd9',
  scmGraph2: '#ef874b',
  scmGraph3: '#8bd4e9',
  scmGraph4: '#a3d9a5',
  scmGraph5: '#888ca0',
  scmHoverAdd: '#83b987',
  scmHoverDel: '#de7d84',
  scmRef: '#85A8D9',
  scmRemoteRef: '#83b987',

  // Terminal
  terminalFindMatch: '#50467980',
  terminalFindMatchHighlight: '#50467940',
  terminalSelection: '#283650',

  // Settings
  settingsModified: '#7099CC',

  // Sidebar
  sidebarHeader: '#D6D7EA',

  // Input
  inputFg: '#E6E6F2',
  inputPlaceholder: '#A9A9C2',
  inlineParamFg: '#C9CFE8',

  // List
  listActiveFg: '#e0e0f0',
  listDeemphasized: '#888ca0',

  // Editor guides
  indentGuide: '#2c2f40',
  indentGuideActive: '#5a5f7a',
  whitespace: '#2e3140'
}
