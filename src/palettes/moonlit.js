/**
 * Harmonia Moonlit - Color Palette
 * Blue-focused dark theme with cool tones and blue keywords
 */

export const moonlit = {
  name: 'Harmonia Moonlit',
  type: 'dark',

  // Base colors - foundational layer system
  bg: {
    base: '#1a1b26', // Main background (same as Dark)
    elevated: '#1E1F2A', // Elevated surfaces
    elevated2: '#21222E', // More elevated (debug toolbar, tabs)
    dropdown: '#0F1220', // Dropdowns, checkboxes
    input: '#1a1b26', // Input fields
    input2: '#151826', // Settings inputs
    quick: '#15182B' // Quick input title
  },

  fg: {
    base: '#d0d0e0', // Main text
    bright: '#e6e6f0', // Bright text
    brightest: '#E6EAF6', // Brightest text
    muted: '#777a96', // Muted text
    dim: '#5A5F7A', // Dimmed text
    white: '#ffffff' // Pure white
  },

  // Accent & semantic colors
  accent: '#6F8FCC', // Primary accent (blue instead of purple, softer)
  accentAlt: '#b7a0ff', // Button backgrounds
  accentHover: '#a48be0', // Button hover
  accentBadge: '#c39ed8', // Badge backgrounds

  error: '#EC7279', // Error states
  warning: '#F9D79F', // Warning states
  info: '#A5D8F7', // Info states
  success: '#A3D9A5', // Success states

  // Extended palette
  blue: '#5B8FC7', // Functions, Keywords (softer blue)
  blueAlt: '#6EBBDD', // Alternative blue
  blueBright: '#6F8FCC', // Bright blue (accent, softer)
  blueLight: '#85A8D9', // Light blue (softer)

  cyan: '#C8D0E0', // Variables (neutral)
  cyanBright: '#94E2D5', // Parameters (teal)
  cyanAlt: '#6EBBDD', // Alternative cyan

  green: '#a3d9a5', // Strings
  greenBright: '#b6e3b4', // Bright green

  orange: '#e0a96d', // Numbers, constants
  orangeAlt: '#E1B37A', // Alternative orange

  purple: '#5B8FC7', // Keywords (BLUE, not purple!)
  purpleBright: '#d995ed', // Bright purple (terminal)
  purpleAlt: '#B99EF0', // Alternative purple

  red: '#ec7279', // Errors
  redBright: '#ec8a8f', // Bright red

  yellow: '#e0a96d', // Constants
  yellowBright: '#f0c685', // Bright yellow

  // Neutrals
  typeColor: '#6F8FCC', // Types, classes (blue, softer)
  typeAlt: '#7099CC', // Alternative type color (softer)
  typeBlue: '#7099CC', // Blue-tinted types (softer)

  tag: '#6F8FCC', // HTML tags (blue, softer)
  attribute: '#8CA9D5', // HTML/JSX attributes

  property: '#C8D0E0', // Object properties
  propertyDecl: '#D0D6E8', // Property declarations

  comment: '#8a909b', // Comments
  commentPunct: '#5a5f7a', // Comment punctuation

  // Borders & separators
  border: '#2c2e40', // Primary borders
  borderAlt: '#5a5f7a', // Alternative borders
  borderLight: '#202438', // Light borders
  borderSeparator: '#2A2E45', // Menu separators
  sidebarBorder: '#2a2b3a', // Sidebar border

  // Selection & highlights
  selection: '#283650', // Editor selection (softer blue-tint)
  selectionInactive: '#252736',
  listHover: '#1f2130', // Much darker, more subtle
  listActive: '#1f2130', // Much darker, more subtle

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
    blue: '#5B8FC7',
    magenta: '#c574dd',
    cyan: '#6EBBDD',
    white: '#d0d0e0',
    brightBlack: '#5a5f7a',
    brightRed: '#ec8a8f',
    brightGreen: '#b6e3b4',
    brightYellow: '#f0c685',
    brightBlue: '#6F8FCC',
    brightMagenta: '#d995ed',
    brightCyan: '#8BD4E9',
    brightWhite: '#ffffff'
  },

  // Editor line highlighting & line numbers
  lineHighlight: '#FFFFFF06',
  lineHighlightBorder: '#00000000',
  lineNumber: '#4c4f68',
  lineNumberActive: '#B9C3FF',

  // Bracket highlighting
  bracket1: '#6F8FCC',
  bracket2: '#c574dd',
  bracket3: '#6EBBDD',
  bracket4: '#A3D9A5',
  bracket5: '#E0A96D',
  bracket6: '#B8BDF0',
  bracketMatchBg: '#444769',
  bracketMatchBorder: '#5a5f7a',

  // Ghost text (inline suggestions)
  ghostText: '#C5CBE3',

  // Syntax token colors
  func: '#5B8FC7',
  variable: '#b0b8d0',
  constant: '#e0a96d',
  keyword: '#5B8FC7',

  // Operators
  operator: '#D0D0E0B3', // Semantic operator
  operatorToken: '#a8a8b8', // TextMate operator

  // Parameters
  parameter: '#94E2D5', // Semantic parameter (teal)
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
  thisSelf: '#6F8FCC',
  langVar: '#C8D0E0',
  phpUse: '#B99EF0',
  phpClass: '#B99EF0',
  phpVarSigil: '#E2E2E899',

  // Decorators & accessors
  decorator: '#6F8FCC',
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
  settingsModified: '#6F8FCC',

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
