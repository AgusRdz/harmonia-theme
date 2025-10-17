## [1.5.7] - 2025-10-17

🎨 UI Alignment & Syntax Coverage Expansion

This release focuses on consistency and completeness - extending the refinements from Harmonia Dark across all core variants, ensuring every theme now provides a uniform experience in advanced editor states and inline components.

### Added

- ✨ Extended UI support
  - Added missing definitions for banner, inlineChat, notebook, mergeEditor, and testing elements across all variants.
  - Improved color consistency for warning and info states.
  - Added subtle hover and background cues with proper transparency for less visual noise.
- 🧩 Token coverage alignment
  - Expanded tokenColors for advanced syntax scopes such as:
- Keyword punctuation
  - Built-in & primitive types
  - Language variables (this, super, arguments)
  - Object literal keys and decorators
  - Regex patterns and escapes
- All values adapted per variant to preserve the personality and tonal hierarchy of each theme.

### Improved

- Unified contrast balance for highlights and warnings.
- Ensured semantic parity between dark and light environments.

### [1.5.6] - 2025-10-16

🎨 Menu & Search Highlight Enhancements

A small refinement release focused on improving contrast, clarity, and consistency across interactive elements.

### Updated

- Find & Replace highlights now use softer accent tones for better visual flow.
- Menu and dropdown panels received balanced backgrounds and clearer selection states.
- Text link colors adjusted for improved readability and hover distinction.
- Quick input and picker groups refined to align with overall palette harmony.

Subtle polish release - reinforcing visual comfort and consistency without altering theme identity.

## [1.5.5] - 2025-10-15

🎯 Noise-free Folding

A small but meaningful update focused on preserving visual flow across all Harmonia Core themes.

### Updated

- editor.foldBackground → #00000000 (transparent) in all variants (Dark, Noir, Light, Aurora, Paper White, OLED True Black, Dark High Contrast).
- Removes the highlighted strip on folded lines.
- Reduces visual noise and keeps a clean, uniform editor texture.
- Keeps folding icons and controls fully visible in the gutter.

## [1.5.4] - 2025-10-14

🩶 Status Bar Alignment & Visual Integrity

A focused refinement ensuring status bar consistency across all Harmonia variants.
This update standardizes tones, contrast, and behavior under every editor state - restoring full visual harmony across dark, light, and high-contrast environments.

### Updated

- Unified Status Bar System:
  - Adjusted statusBar.background and related tokens for consistent depth and tone balance.
  - Ensured seamless color continuity across debug, noFolder, and remote contexts.
  - Improved statusBar.foreground to maintain clarity under all light conditions.
- Cross-variant consistency:
  - Normalized brightness and contrast across all themes:
    - Dark / Noir / OLED now share cohesive neutral depth levels.
    - Aurora / Light / Paper White refined for subtler separation without glare.
    - High Contrast retains accessibility edge while matching overall tone logic.

## [1.5.3] - 2025-10-13

🧩 Interface & Visual Cohesion Enhancements

A refinement-focused update improving menu components, settings controls, and text inputs across all Harmonia variants.
This release deepens consistency between panels and interactive UI elements - enhancing usability without altering the soul of each theme.

### Updated

- Global interface adjustments:
  - Added missing visual tokens for dropdowns, checkboxes, and settings inputs.
  - Unified color balance across dropdown._, checkbox._, and settings.\* properties.
  - Improved structural hierarchy and subtle depth across elevated surfaces.
- Input and placeholder consistency:
  - Refined input.background and input.border for cleaner contrast.
  - Adjusted placeholder tones (input.placeholderForeground) for better readability in all modes.
- Settings UI refinements:
  - Added consistent backgrounds and borders for settings dropdowns and text inputs.
  - Calibrated descriptionForeground and headerForeground for clarity in preferences panels.
- Improved link visibility and indicators:
  - Unified textLink.foreground and textLink.activeForeground across all variants.
  - Adjusted settings.modifiedItemIndicator tones to match each palette’s accent color.

### Theme Highlights

- Dark / Noir: deeper contrast tuning for inputs and dropdowns with reduced noise and improved edge clarity.
- Aurora: smoother transitions within cool-toned UI elements for a calmer appearance.
- Light / Paper White: increased legibility in bright environments, refined border contrast.
- OLED True Black: enhanced separation of interactive components while preserving absolute black energy efficiency.
- Dark High Contrast: maximized clarity in all controls and text fields, preserving chromatic harmony.

## [1.5.2] - 2025-10-10

🎨 Visual Refinement & Readability Improvements

A focused maintenance release refining internal UI components across all Harmonia variants - enhancing legibility, contrast balance, and interface depth without altering each theme's personality.

### Updated

- Global Adjustments
- Tuned quickInput family:
  - Balanced background brightness for better separation from editor panels.
  - Improved text and icon contrast inside the command palette.
- Enhanced input components:
  - Adjusted background and border tones for clearer field outlines.
  - Refined placeholder text color for optimal readability under all modes.
- Unified sideBar and sectionHeader tones:
  - Slightly lighter backgrounds for smoother depth perception.
  - Better alignment between editor and sidebar contrast levels.
- Improved scmGraph and ghost text visibility:
  - editorGhostText.foreground now softer and more readable.
  - Adjusted scmGraph.historyItemRefColor for visual balance.

## [1.5.1] - 2025-10-07

### Updated

- ✨ Minor refinements across the suite for **contrast and consistency**.
- 🌌 Subtle tone adjustments in _Dark_ and _Noir_ to maintain distinct identities.
- 🪶 Final alignment of **token colors** across all themes for uniform hierarchy and legibility.

### Notes

With this release, the **Harmonia core collection** is now considered complete.
Future updates will focus on **accessibility, performance, and fine-tuning** - not on introducing new variants.

> Harmonia 1.5 marks the completion of its visual philosophy:
> seven cohesive themes built for comfort, focus, and balance - across every light and dark environment.

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
