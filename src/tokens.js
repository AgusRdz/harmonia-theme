/**
 * Harmonia Theme Token Definitions
 * Functions that generate theme tokens from color palettes
 */

/**
 * Generate VS Code UI color tokens from a palette
 * @param {Object} p - Color palette
 * @returns {Object} VS Code color tokens
 */
export function generateColors(p) {
  return {
    // Activity Bar
    'activityBar.background': p.bg.base,
    'activityBar.border': '#00000000',
    'activityBar.foreground': p.type === 'dark' ? p.fg.base : p.fg.white,
    'activityBarBadge.background': p.accent,
    'activityBarBadge.foreground': p.type === 'dark' ? p.bg.base : '#ffffff',

    // Badge
    'badge.background': p.accentBadge,
    'badge.foreground': p.type === 'dark' ? p.fg.bright : '#ffffff',

    // Banner
    'banner.background': p.bg.elevated2,
    'banner.foreground': p.fg.brightest,
    'banner.iconForeground': p.blue,

    // Breadcrumb
    'breadcrumb.background': p.type === 'dark' ? p.bg.elevated : p.bg.base,
    'breadcrumb.focusForeground': p.typeColor,
    'breadcrumb.foreground': p.fg.muted,

    // Button
    'button.background': p.accentAlt,
    'button.border': '#00000000',
    'button.foreground': p.type === 'dark' ? '#ffffff' : '#2e3440',
    'button.hoverBackground': p.accentHover,

    // Checkbox
    'checkbox.background': p.bg.dropdown,
    'checkbox.border': p.borderLight,
    'checkbox.foreground': p.fg.brightest,

    // Description
    descriptionForeground: p.type === 'dark' ? '#A9B3CC' : p.fg.muted,

    // Diff Editor
    'diffEditor.border': p.borderAlt,
    'diffEditor.diagonalFill': p.type === 'dark' ? '#ffffff10' : '#00000010',
    'diffEditor.insertedLineBackground':
      p.success + (p.type === 'dark' ? '10' : '1F'),
    'diffEditor.insertedTextBackground':
      p.success + (p.type === 'dark' ? '16' : '20'),
    'diffEditor.insertedTextBorder': '#00000000',
    'diffEditor.removedLineBackground':
      p.error + (p.type === 'dark' ? '10' : '1F'),
    'diffEditor.removedTextBackground':
      p.error + (p.type === 'dark' ? '16' : '20'),
    'diffEditor.removedTextBorder': '#00000000',
    'diffEditorGutter.insertedLineBackground': p.success + '22',
    'diffEditorGutter.removedLineBackground': p.error + '22',

    // Disabled
    disabledForeground: p.fg.dim,

    // Dropdown
    'dropdown.background': p.bg.dropdown,
    'dropdown.border': p.borderLight,
    'dropdown.foreground': p.fg.brightest,
    'dropdown.listBackground': p.bg.dropdown,

    // Debug UI
    'debugToolBar.background': p.bg.elevated2,
    'debugToolBar.border': p.border,
    'debugConsole.errorForeground': p.error,
    'debugConsole.warningForeground': p.warning,
    'debugConsole.infoForeground': p.info,
    'debugConsole.sourceForeground': p.blue,
    'debugConsoleInputIcon.foreground': p.accent,
    'debugIcon.breakpointForeground': p.error,
    'debugIcon.breakpointDisabledForeground': p.fg.dim,
    'debugIcon.breakpointUnverifiedForeground': p.warning,
    'debugIcon.startForeground': p.success,
    'debugIcon.pauseForeground': p.warning,
    'debugIcon.stopForeground': p.error,
    'debugIcon.disconnectForeground': p.error,
    'debugIcon.restartForeground': p.accent,
    'debugIcon.stepOverForeground': p.blue,
    'debugIcon.stepIntoForeground': p.blue,
    'debugIcon.stepOutForeground': p.blue,
    'debugIcon.continueForeground': p.success,
    'debugIcon.stepBackForeground': p.cyan,
    'debugExceptionWidget.background': p.bg.elevated2,
    'debugExceptionWidget.border': p.error,
    'debugTokenExpression.name': p.accent,
    'debugTokenExpression.value': p.fg.base,
    'debugTokenExpression.string': p.green,
    'debugTokenExpression.boolean': p.warning,
    'debugTokenExpression.number': p.warning,
    'debugTokenExpression.error': p.error,
    'debugView.exceptionLabelForeground': '#ffffff',
    'debugView.exceptionLabelBackground': p.error + '80',
    'debugView.stateLabelForeground':
      p.type === 'dark' ? p.fg.bright : '#ffffff',
    'debugView.stateLabelBackground':
      p.type === 'dark' ? p.accent + '80' : p.accent + 'CC',
    'debugView.valueChangedHighlight': p.warning + '80',

    // Editor
    'editor.background': p.bg.base,
    'editor.findMatchBackground': p.blue + '66',
    'editor.findMatchHighlightBackground': p.blue + '40',
    'editor.focusedStackFrameHighlightBackground': '#00000000',
    'editor.foldBackground': '#00000000',
    'editor.foreground': p.fg.base,
    'editor.inactiveSelectionBackground': p.selectionInactive + 'AA',
    'editor.lineHighlightBackground': p.lineHighlight,
    'editor.lineHighlightBorder': p.lineHighlightBorder || '#00000000',
    'editor.linkedEditingBackground':
      p.type === 'dark' ? p.info + '22' : p.accent + '22',
    'editor.rangeHighlightBackground': p.bg.elevated2 + '66',
    'editor.selectionBackground': p.selection,
    'editor.selectionForeground': p.type === 'dark' ? '#ffffff' : undefined,
    'editor.inactiveLineHighlightBackground': '#00000000',
    'editor.selectionHighlightBackground':
      p.selection + (p.type === 'dark' ? '66' : '70'),
    'editor.wordHighlightBackground':
      p.blue + (p.type === 'dark' ? '26' : '1F'),
    'editor.wordHighlightStrongBackground': p.blue + '33',

    // Editor Bracket Matching
    'editorBracketMatch.background': p.bracketMatchBg,
    'editorBracketMatch.border': p.bracketMatchBorder,

    // Editor Bracket Highlighting
    'editorBracketHighlight.foreground1': p.bracket1,
    'editorBracketHighlight.foreground2': p.bracket2,
    'editorBracketHighlight.foreground3': p.bracket3,
    'editorBracketHighlight.foreground4': p.bracket4,
    'editorBracketHighlight.foreground5': p.bracket5,
    'editorBracketHighlight.foreground6': p.bracket6,
    'editorBracketHighlight.unexpectedBracket.foreground': p.error,

    // Editor Cursor & Ghost Text
    'editorCursor.foreground': p.fg.base,
    'editorGhostText.foreground': p.ghostText,

    // Editor Group
    'editorGroup.border': p.border,
    'editorGroupHeader.noTabsBackground': p.bg.elevated2,
    'editorGroupHeader.tabsBackground': p.bg.elevated2,

    // Editor Gutter
    'editorGutter.addedBackground': p.success,
    'editorGutter.background': p.bg.base,
    'editorGutter.commentRangeForeground': p.cyanBright,
    'editorGutter.deletedBackground': p.error,
    'editorGutter.modifiedBackground': p.info,

    // Editor Hover Widget
    'editorHoverWidget.background': p.bg.elevated,
    'editorHoverWidget.border': p.border,

    // Editor Indent Guide
    'editorIndentGuide.activeBackground1': p.indentGuideActive || p.borderAlt,
    'editorIndentGuide.background1': p.indentGuide,

    // Editor Info/Warning
    'editorInfo.foreground': p.info,
    'editorWarning.foreground': p.warning,

    // Editor Line Number
    'editorLineNumber.activeForeground': p.lineNumberActive,
    'editorLineNumber.foreground': p.lineNumber,

    // Editor Overview Ruler
    'editorOverviewRuler.addedForeground': p.success + '40',
    'editorOverviewRuler.deletedForeground': p.error + '40',
    'editorOverviewRuler.modifiedForeground': p.info + '40',

    // Editor Whitespace
    'editorWhitespace.foreground': p.whitespace,

    // Editor Suggest Widget
    'editorSuggestWidget.background': p.bg.elevated,
    'editorSuggestWidget.border': p.border,
    'editorSuggestWidget.foreground': p.type === 'dark' ? '#C8D0E0' : '#3B3F48',
    'editorSuggestWidget.highlightForeground': p.fg.bright,
    'editorSuggestWidget.selectedBackground': p.border,

    // Focus Border
    focusBorder: '#00000000',
    foreground: p.fg.brightest,

    // Git Decoration
    'gitDecoration.addedResourceForeground': p.success,
    'gitDecoration.conflictingResourceForeground': p.warning,
    'gitDecoration.deletedResourceForeground': p.error,
    'gitDecoration.ignoredResourceForeground': p.fg.dim,
    'gitDecoration.modifiedResourceForeground': p.accent,
    'gitDecoration.renamedResourceForeground': p.info,
    'gitDecoration.submoduleResourceForeground': p.cyanBright,
    'gitDecoration.untrackedResourceForeground': p.success,

    // Inline Chat
    'inlineChat.background': p.bg.elevated,
    'inlineChat.border': p.border,
    'inlineChatInput.background': p.bg.elevated2,

    // Inline Parameters
    'inlineparameters.annotationBackground': p.borderLight,
    'inlineparameters.annotationForeground': p.inlineParamFg,

    // Input
    'input.background': p.bg.input,
    'input.border': p.border,
    'input.foreground': p.inputFg,
    'input.placeholderForeground': p.inputPlaceholder,

    // List
    'list.activeSelectionBackground': p.listActive,
    'list.activeSelectionForeground': p.listActiveFg,
    'list.deemphasizedForeground':
      p.type === 'dark' ? '#888ca0' : p.listDeemphasized,
    'list.focusAndSelectionOutline': '#00000000',
    'list.focusOutline': '#00000000',
    'list.hoverBackground': p.listHover,
    'list.inactiveSelectionBackground': p.selectionInactive,
    'list.inactiveSelectionForeground': p.fg.base,
    'list.warningForeground': p.warning,

    // Menu
    'menu.background': p.menuBg,
    'menu.foreground': p.fg.bright,
    'menu.selectionBackground': p.menuSelectionBg,
    'menu.selectionForeground': p.fg.white,
    'menu.separatorBackground': p.borderSeparator,

    // Minimap
    'minimap.background': p.bg.base,
    'minimap.selectionHighlight': p.selection + '80',

    // Merge Editor
    'mergeEditor.change.background': p.info + '22',
    'mergeEditor.change.word.background': p.info + '33',

    // Notebook
    'notebook.cellBorderColor': p.borderSeparator,
    'notebook.cellEditorBackground': p.bg.base,
    'notebook.cellHoverBackground': p.border,
    'notebook.focusedCellBackground': p.bg.elevated2,

    // Notifications
    'notificationsWarningIcon.foreground': p.warning,

    // Panel
    'panel.background': p.bg.base,
    'panel.border': p.border,
    'panelTitle.activeBorder': p.accent,
    'panelTitle.activeForeground': p.fg.bright,
    'panelTitle.inactiveForeground': p.fg.muted,

    // Peek View
    'peekView.border': p.borderAlt,
    'peekViewEditor.background': p.bg.base,
    'peekViewResult.background': p.bg.elevated2,
    'peekViewTitle.background': p.bg.elevated2,

    // Picker Group
    'pickerGroup.border': p.borderSeparator,
    'pickerGroup.foreground': p.blue,

    // Problems
    'problemsWarningIcon.foreground': p.warning,

    // Quick Input
    'quickInput.background': p.bg.base,
    'quickInput.foreground': p.fg.bright,
    'quickInputList.focusBackground': p.quickInputFocusBg,
    'quickInputList.focusForeground': p.fg.white,
    'quickInputList.focusIconForeground': p.quickInputFocusIcon,
    'quickInputTitle.background': p.bg.quick,

    // SCM Graph
    'scmGraph.foreground1': p.scmGraph1,
    'scmGraph.foreground2': p.scmGraph2,
    'scmGraph.foreground3': p.scmGraph3,
    'scmGraph.foreground4': p.scmGraph4,
    'scmGraph.foreground5': p.scmGraph5,
    'scmGraph.historyItemBaseRefColor': p.info,
    'scmGraph.historyItemHoverAdditionsForeground': p.scmHoverAdd,
    'scmGraph.historyItemHoverDefaultLabelBackground': p.border,
    'scmGraph.historyItemHoverDefaultLabelForeground': p.fg.bright,
    'scmGraph.historyItemHoverDeletionsForeground': p.scmHoverDel,
    'scmGraph.historyItemHoverLabelForeground': p.bg.base,
    'scmGraph.historyItemRefColor': p.scmRef,
    'scmGraph.historyItemRemoteRefColor': p.scmRemoteRef,

    // Scrollbar
    'scrollbar.shadow': '#00000000',
    'scrollbarSlider.activeBackground': p.scrollbar.active,
    'scrollbarSlider.background': p.scrollbar.bg,
    'scrollbarSlider.hoverBackground': p.scrollbar.hover,

    // Settings
    'settings.checkboxBackground': p.bg.dropdown,
    'settings.checkboxBorder': p.borderLight,
    'settings.checkboxForeground': p.fg.brightest,
    'settings.dropdownBackground': p.bg.dropdown,
    'settings.dropdownBorder': p.borderLight,
    'settings.dropdownForeground': p.fg.brightest,
    'settings.headerForeground': p.fg.brightest,
    'settings.modifiedItemIndicator': p.settingsModified,
    'settings.textInputBackground': p.bg.input2,
    'settings.textInputBorder': p.borderLight,
    'settings.textInputForeground': p.fg.brightest,

    // Sidebar
    'sideBar.background': p.bg.base,
    'sideBar.border': '#00000000',
    'sideBar.foreground': p.fg.base,
    'sideBarSectionHeader.background': p.bg.base,
    'sideBarSectionHeader.border': p.bg.base,
    'sideBarSectionHeader.foreground': p.sidebarHeader,

    // Status Bar
    'statusBar.background': p.bg.base,
    'statusBar.debuggingBackground': p.bg.base,
    'statusBar.debuggingForeground': p.fg.base,
    'statusBar.foreground': p.fg.base,
    'statusBar.noFolderBackground': p.bg.base,
    'statusBar.noFolderForeground': p.fg.base,
    'statusBarItem.errorBackground': p.error,
    'statusBarItem.prominentBackground': p.listActive,
    'statusBarItem.prominentHoverBackground': p.listHover,
    'statusBarItem.remoteBackground': p.bg.base,
    'statusBarItem.remoteForeground': p.fg.bright,
    'statusBarItem.warningBackground': p.warning,

    // Tab
    'tab.activeBackground': p.bg.base,
    'tab.activeForeground': p.fg.white,
    'tab.activeBorderTop': p.accent,
    'tab.border': p.border,
    'tab.inactiveBackground': p.bg.elevated2,
    'tab.inactiveForeground': p.fg.muted,
    'tab.unfocusedHoverBackground': p.border,

    // Terminal
    'terminal.ansiBlack': p.ansi.black,
    'terminal.ansiBlue': p.ansi.blue,
    'terminal.ansiBrightBlack': p.ansi.brightBlack,
    'terminal.ansiBrightBlue': p.ansi.brightBlue,
    'terminal.ansiBrightCyan': p.ansi.brightCyan,
    'terminal.ansiBrightGreen': p.ansi.brightGreen,
    'terminal.ansiBrightMagenta': p.ansi.brightMagenta,
    'terminal.ansiBrightRed': p.ansi.brightRed,
    'terminal.ansiBrightWhite': p.ansi.brightWhite,
    'terminal.ansiBrightYellow': p.ansi.brightYellow,
    'terminal.ansiCyan': p.ansi.cyan,
    'terminal.ansiGreen': p.ansi.green,
    'terminal.ansiMagenta': p.ansi.magenta,
    'terminal.ansiRed': p.ansi.red,
    'terminal.ansiWhite': p.ansi.white,
    'terminal.ansiYellow': p.ansi.yellow,
    'terminal.background': p.bg.base,
    'terminal.border': p.border,
    'terminal.findMatchBackground': p.terminalFindMatch,
    'terminal.findMatchHighlightBackground': p.terminalFindMatchHighlight,
    'terminal.foreground': p.fg.base,
    'terminal.hoverHighlightBackground': p.border,
    'terminal.selectionBackground': p.terminalSelection,
    'terminal.tab.activeBorder': p.accent,
    'terminalCursor.foreground': p.fg.base,

    // Testing
    'testing.iconFailed': p.error,
    'testing.iconPassed': p.success,
    'testing.runAction': p.info,

    // Text Link
    'textLink.activeForeground': p.blueBright,
    'textLink.foreground': p.blue,

    // Title Bar
    'titleBar.activeBackground': p.bg.base
  }
}

/**
 * Generate semantic token colors from a palette
 * @param {Object} p - Color palette
 * @returns {Object} Semantic token mappings
 */
export function generateSemanticTokenColors(p) {
  return {
    class: p.typeColor,
    decorator: p.blue,
    enumMember: p.orangeAlt,
    function: p.typeColor,
    interface: p.typeColor,
    method: p.typeColor,
    namespace: p.typeColor,
    operator: p.operator,
    parameter: p.parameter,
    property: p.property,
    'property.declaration': p.propertyDecl,
    regexp: p.regexBody,
    type: p.typeColor,
    'variable.readonly': p.orangeAlt
  }
}

/**
 * Generate TextMate token colors from a palette
 * @param {Object} p - Color palette
 * @returns {Array} TextMate token color rules
 */
export function generateTokenColors(p) {
  return [
    {
      name: 'Comments',
      scope: [
        'comment',
        'comment.block',
        'comment.line',
        'comment.line.double-slash'
      ],
      settings: { fontStyle: 'italic', foreground: p.comment }
    },
    {
      name: 'Comment Punctuation',
      scope: ['punctuation.definition.comment'],
      settings: { fontStyle: 'italic', foreground: p.commentPunct }
    },
    {
      name: 'HTML Angle Brackets',
      scope: ['punctuation.definition.tag', 'punctuation.definition.tag.html'],
      settings: { foreground: p.htmlBracket }
    },
    {
      name: 'JSX/TSX Angle Brackets',
      scope: [
        'punctuation.definition.tag.jsx',
        'punctuation.definition.tag.tsx'
      ],
      settings: { foreground: p.htmlBracket }
    },
    {
      name: 'HTML Tag Name',
      scope: ['entity.name.tag', 'support.class.component.html'],
      settings: { foreground: p.tag }
    },
    {
      name: 'JSX/TSX Tag Name',
      scope: ['entity.name.tag.jsx', 'entity.name.tag.tsx'],
      settings: { foreground: p.tag }
    },
    {
      name: 'Component Tag (JSX/TSX/Vue)',
      scope: [
        'support.class.component',
        'support.class.component.jsx',
        'support.class.component.tsx',
        'support.class.component.vue'
      ],
      settings: { foreground: p.typeColor }
    },
    {
      name: 'HTML/JSX/Vue Attributes',
      scope: [
        'entity.other.attribute-name',
        'entity.other.attribute-name.html',
        'entity.other.attribute-name.jsx',
        'entity.other.attribute-name.tsx',
        'entity.other.attribute-name.vue',
        'meta.directive.vue'
      ],
      settings: { foreground: p.attribute }
    },
    {
      name: 'Tailwind Utility Classes',
      scope: [
        'string.quoted.double.html class',
        'string.quoted.single.html class'
      ],
      settings: { foreground: p.green }
    },
    {
      name: 'Attribute Values (HTML/JSX/Vue)',
      scope: [
        'string.quoted.double.html',
        'string.quoted.single.html',
        'string.quoted.double.jsx',
        'string.quoted.single.jsx',
        'string.quoted.double.tsx',
        'string.quoted.single.tsx',
        'string.quoted.double.vue',
        'string.quoted.single.vue'
      ],
      settings: { foreground: p.green }
    },
    {
      name: 'HTML Text Content',
      scope: ['text.html.basic', 'text.html.derivative'],
      settings: { foreground: p.fg.base }
    },
    {
      name: 'JSX/TSX Text (Children)',
      scope: [
        'meta.jsx.children',
        'source.jsx meta.jsx.children',
        'source.js meta.jsx.children',
        'source.tsx meta.jsx.children',
        'meta.tag.inline.jsx meta.jsx.children',
        'meta.tag.block.jsx meta.jsx.children',
        'meta.tag.inline.tsx meta.jsx.children',
        'meta.tag.block.tsx meta.jsx.children'
      ],
      settings: { foreground: p.fg.base }
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: p.func }
    },
    {
      name: 'Namespaces / Types / Classes',
      scope: [
        'entity.name.namespace',
        'entity.name.type',
        'meta.use',
        'support.class'
      ],
      settings: { foreground: p.typeColor }
    },
    {
      name: 'Strings (Generic)',
      scope: ['punctuation.definition.string', 'string'],
      settings: { foreground: p.green }
    },
    {
      name: 'Variables',
      scope: [
        'meta.definition.variable.name',
        'variable',
        'support.variable',
        'variable.other.php'
      ],
      settings: { foreground: p.variable }
    },
    {
      name: 'Parameters',
      scope: ['meta.function.parameter', 'variable.parameter'],
      settings: { foreground: p.parameterToken }
    },
    {
      name: 'Constants / Language / Character',
      scope: ['constant.numeric', 'constant.language', 'constant.character'],
      settings: { foreground: p.constant }
    },
    {
      name: 'Keywords & Storage',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: p.keyword }
    },
    {
      name: 'Italicized Keywords & Operators',
      scope: [
        'entity.name.method',
        'keyword.control.conditional',
        'keyword.control.flow',
        'keyword.control.loop',
        'keyword.control.import',
        'keyword.control.export',
        'keyword.control.default',
        'keyword.control.from',
        'keyword.control.switch',
        'keyword.operator.expression.delete',
        'keyword.operator.expression.in',
        'keyword.operator.expression.of',
        'keyword.operator.new',
        'keyword.operator.sizeof',
        'storage'
      ],
      settings: { fontStyle: 'italic' }
    },
    {
      name: 'Markdown: Heading',
      scope: ['markup.heading'],
      settings: { fontStyle: 'bold', foreground: p.markdownHeading }
    },
    {
      name: 'Markdown: Bold',
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold', foreground: p.markdownBold }
    },
    {
      name: 'Markdown: Italic',
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic', foreground: p.markdownItalic }
    },
    {
      name: 'Markdown: Inline Code',
      scope: ['markup.inline.raw.markdown'],
      settings: { fontStyle: 'italic', foreground: p.markdownCode }
    },
    {
      name: 'Markdown: Block Quote',
      scope: ['markup.quote.markdown'],
      settings: { fontStyle: 'italic', foreground: p.markdownQuote }
    },
    {
      name: 'Markdown: Inserted',
      scope: ['markup.inserted'],
      settings: { foreground: p.green }
    },
    {
      name: 'Markdown: Changed',
      scope: ['markup.changed'],
      settings: { foreground: p.warning }
    },
    {
      name: 'Markdown: Deleted',
      scope: ['markup.deleted'],
      settings: { foreground: p.error }
    },
    {
      name: 'Markdown: Separator',
      scope: ['meta.separator.markdown'],
      settings: { foreground: p.fg.dim }
    },
    {
      name: 'Invalid / Illegal',
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: p.error }
    },
    {
      name: 'Keyword punctuation (align with Keywords)',
      scope: [
        'punctuation.definition.keyword',
        'keyword.operator.expression.instanceof',
        'keyword.operator.expression.typeof',
        'keyword.operator.expression.delete'
      ],
      settings: { foreground: p.keyword }
    },
    {
      name: 'Built-in / primitive types (align with Types/Namespaces)',
      scope: [
        'support.type.builtin',
        'support.type.primitive',
        'support.type.primitive.ts'
      ],
      settings: { foreground: p.typeColor }
    },
    {
      name: 'Language variables (this, super, arguments)',
      scope: [
        'variable.language',
        'variable.language.this',
        'variable.language.super',
        'variable.language.arguments'
      ],
      settings: { foreground: p.langVar }
    },
    {
      name: 'Object literal keys (align with HTML/JSX attributes)',
      scope: [
        'meta.object-literal.key',
        'meta.object-literal.key entity.name',
        'meta.objectliteral.key',
        'meta.object-literal.key string.unquoted'
      ],
      settings: { foreground: p.attribute }
    },
    {
      name: 'Decorators / Annotations',
      scope: [
        'meta.decorator',
        'storage.type.annotation',
        'punctuation.decorator'
      ],
      settings: { foreground: p.decorator }
    },
    {
      name: 'Object / JSON Property Names',
      scope: [
        'meta.object-literal.key',
        'support.type.property-name',
        'meta.mapping.key'
      ],
      settings: { foreground: p.property }
    },
    {
      name: 'Accessor dot & separators',
      scope: ['punctuation.accessor', 'punctuation.separator.dot'],
      settings: { foreground: p.accessor }
    },
    {
      name: 'Operators (light touch)',
      scope: [
        'keyword.operator',
        'keyword.operator.arithmetic',
        'keyword.operator.logical',
        'keyword.operator.comparison',
        'keyword.operator.assignment'
      ],
      settings: { foreground: p.operatorToken }
    },
    {
      name: 'Regex (pattern body)',
      scope: [
        'string.regexp',
        'constant.other.character-class.set.regexp',
        'punctuation.definition.group.regexp'
      ],
      settings: { foreground: p.regexBody }
    },
    {
      name: 'Regex escapes',
      scope: [
        'constant.character.escape',
        'constant.character.escape.backslash.regexp',
        'constant.regexp'
      ],
      settings: { foreground: p.regexEscape }
    },
    {
      name: 'this/self',
      scope: ['variable.language.this', 'variable.language.self'],
      settings: { fontStyle: 'italic', foreground: p.thisSelf }
    },
    {
      name: 'PHP use keyword',
      scope: [
        'keyword.other.use',
        'keyword.other.namespace.use',
        'keyword.other.use.php'
      ],
      settings: { foreground: p.phpUse }
    },
    {
      name: 'Class and implements keywords',
      scope: [
        'keyword.declaration.class',
        'storage.type.class',
        'keyword.declaration.interface',
        'keyword.other.implements',
        'storage.modifier.implements'
      ],
      settings: { foreground: p.phpClass }
    },
    {
      name: 'Type and namespace identifiers',
      scope: [
        'entity.name.type',
        'entity.name.type.class',
        'entity.name.type.interface',
        'entity.other.inherited-class',
        'support.class',
        'support.type',
        'entity.name.namespace',
        'support.other.namespace'
      ],
      settings: { foreground: p.typeBlue }
    },
    {
      name: 'Namespace and punctuation separators',
      scope: [
        'punctuation.separator.namespace',
        'punctuation.accessor',
        'punctuation.separator',
        'punctuation.separator.inheritance'
      ],
      settings: { foreground: p.separator }
    },
    {
      name: 'PHP variable sigil matches variable color',
      scope: [
        'punctuation.definition.variable.php',
        'variable.other.php punctuation.definition.variable'
      ],
      settings: { foreground: p.phpVarSigil }
    }
  ]
}
