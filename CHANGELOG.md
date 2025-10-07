## [1.5.0] - 2025-10-07

### Added

- 🌈 **Harmonia Aurora**: a vibrant, pastel-inspired theme with soft contrast and fluid hues.
  - Designed for visual comfort with a modern, lively palette.
  - Balanced saturation - colorful but not overwhelming.
  - Ideal for creative sessions, UI work, or long coding days.

### Improved

- ⚙️ **Status bar consistency** across all themes - prominent items now adapt to each palette.
- 🎨 **Semantic highlighting** enabled for all themes for more precise and meaningful syntax colorization.

## [1.4.0] - 2025-10-07

### Added

- 📄 **Harmonia Paper White** - a new light variant crafted for maximum clarity and natural readability.
  - Clean, near-white background with gentle gray balance.
  - Strong yet calm accents for HTML/JSX tags, functions, and keywords.
  - Designed for long coding sessions, offering print-like contrast and reduced visual fatigue.

## [1.3.0] - 2025-09-29

### Added

- 🌌 Harmonia OLED True Black: a new dark variant with pure black backgrounds for OLED panels.
  - Designed for maximum energy efficiency on OLED displays.
  - Crisp contrast while keeping accents comfortable for long sessions.

## [1.2.0] - 2025-09-26

### Added

- 🌓 **Harmonia Dark High Contrast**: a new dark variant with stronger contrasts, designed for accessibility and maximum readability.
  - Stronger borders, sharper contrasts, and vivid accents for **maximum readability**.
  - Accessibility-driven design for users who prefer **bold distinctions** in syntax.
  - Ideal for long sessions where eye strain or visual clarity is critical.

### Removed

- Removed the install/update notification script.

## [1.1.0] - 2025-09-25

### Added

- 🖤 **Harmonia Noir**: a new dark variant with violet/blue sophistication and deeper contrast.
  - Extended JSX/TSX coverage with dedicated token colors for **tags, angle brackets, and children text**.
  - New `THEME_GUIDE.md` guide (developer reference) to explain theme scopes, settings, and hierarchy.

### Improved

- 🎨 **Light Variant**:
  - Enhanced distinction between **HTML tags** and **text content** in JSX/HTML.
  - Adjusted **attribute values** and **Tailwind classes** for better readability.
  - Refined **bracket matching** and selection highlights for clearer focus.
- 🌑 **Dark Variant**:
  - Improved consistency of **JSX/TSX elements** with distinct coloring for tags, brackets, and text nodes.
  - Balanced colors for **component tags** and **HTML attributes** to avoid blending.
  - Fine-tuned **terminal findMatch highlight** transparency for better usability.
- General consistency pass across **light, dark, and noir** to ensure smoother hierarchy and syntax clarity.

---

## [1.0.7] - 2025-08-15

### Added

- Italic font style for control keywords (`if`, `for`, `import`, `switch`, etc.) and operators to improve code readability.

### Improved

- Expanded scope coverage for better syntax consistency across languages.

## [1.0.6] - 2025-08-15

### Improved

- 🎨 Adjusted Git branch and user labels in the terminal for better visibility in Harmonia Light.
- 🧊 Softened `editor.background`, `terminal.background`, and `sideBar.background` for a less intrusive visual experience.
- 🎛️ Refined ANSI color tones (e.g., Blue, BrightGreen) to improve terminal contrast and balance.

### Fixed

- 🚫 Removed intrusive focus outlines from inputs, panels, and tab headers.
- 🛠️ Fixed selection outlines in Git panels like `CHANGES` and `GRAPH`.
- 🧹 Removed the purple background from the "Remote Window" button for better theme consistency.

## [1.0.5] - 2025-08-14

### Added

- New tokenColors for missing scopes like `diffEditor`, `markup`, and `editor.selectionForeground`.
- Added missing UI colors: `editor.lineHighlightBorder`, `editorGroup.border`, `scrollbar.shadow`, and more.
- Initial `extension.js` to show update/install messages.

### Improved

- Better contrast and harmony across both dark and light themes.
- Adjusted terminal and Git decorations to match theme aesthetics.
- Enhanced visibility for sidebar and file tree elements in both variants.

### Fixed

- `.vscodeignore` adjustments to ensure correct packaging.

### [1.0.4] - 2025-08-14

- 🌤️ Softened background and highlight tones in Harmonia Light for better comfort
- 🎯 Improved sidebar, terminal, and editor tone consistency
- ✏️ Tweaked selection and bracket highlight colors to reduce visual distraction
- 🧠 Updated README with revised light theme color philosophy

### [1.0.3] - 2025-08-13

- 🔧 Updated preview image references for marketplace and repo

### [1.0.2] - 2025-08-13

- ✨ Added support for HTML syntax highlighting

### [1.0.1] - 2025-08-13

- 📖 Updated README with font and editor setting recommendations

### [1.0.0] - 2025-08-13

- 🎉 Initial release of Harmonia theme
- Included both dark and light variants
- Designed with soft tones and visual consistency to reduce fatigue
