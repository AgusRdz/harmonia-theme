## [v1.6.7] - 2026-02-02

🔍 Aurora List Selection Visibility Fix

Hot-fix release addressing insufficient contrast in Aurora's file tree selections.

### Fixed

- **Aurora List Selection**: Increased `list.activeSelectionBackground` and `list.hoverBackground` from `#1e1d2a` to `#24232f` to restore proper visibility of selected files in the tree view. The v1.6.5 brightness reduction went too far for Aurora, making selections nearly invisible against the `#1d1c28` background. The new value provides +7 RGB units of contrast while maintaining Aurora's soft, pastel aesthetic.

### Notes

All other theme variants (Dark, Noir, Moonlit, OLED, High Contrast, Light, Daybreak, Paper White) maintain proper selection contrast and require no changes.

## [v1.6.6] - 2026-01-30

🧭 Sidebar Border Definition

Added a subtle `sideBar.border` to all 9 theme variants, replacing the fully transparent value that made it difficult to visually identify the sidebar boundary.

### Added

- **Sidebar border** across all variants - a low-contrast edge that defines the sidebar limit without drawing attention:
  - **Dark** / **Moonlit** / **High Contrast**: `#2a2b3a` - cool blue-gray, +16 steps from `#1a1b26` / `#0B0C12` backgrounds.
  - **Noir**: `#231f2e` - warm violet-gray, consistent with Noir's tonal identity.
  - **Aurora**: `#2d2c3a` - slightly warmer neutral, matching Aurora's palette.
  - **OLED True Black**: `#1a1a1a` - minimal lift from pure black, preserving OLED efficiency.
  - **Light** / **Daybreak**: `#d4d6dc` - soft neutral gray, ~18 steps darker than `#eceef1`.
  - **Paper White**: `#e0e0e0` - gentle warm gray against the `#FFFFFF` background.

### Docs

- Added a **Customizable Properties** reference to the README listing the most common UI color keys you can override per theme (editor, sidebar, tabs, terminal, diffs, and more). Check the [Advanced Usage](README.md#-advanced-usage) section for details.

### Notes

All borders are designed as structural cues - visible enough to define layout boundaries, restrained enough to remain invisible during focused work.

## [v1.6.5] - 2025-12-21

🔧 Critical Brightness Fixes

Hot-fix release addressing excessive brightness in inactive states and list selections that slipped through in v1.6.4.

### Fixed

- **Inactive Line Highlight**: Set `editor.inactiveLineHighlightBackground` to extremely subtle `#FFFFFF02` instead of transparent (which caused fallback to bright defaults when editor loses focus).
- **List Selection Brightness** (Dark/Noir/Moonlit/Aurora): Reduced `list.activeSelectionBackground` and `list.hoverBackground` by 60-65% to eliminate harsh highlighting in file trees and terminal tabs.
- **OLED Selection Colors**: Further reduced selection brightness (`#2A4A6B` → `#1A2A3B`) and inactive selections (`#1A2A3B` → `#0F141A`) for optimal comfort on pure black displays.

### Impact

All dark themes now maintain truly subtle, fatigue-free highlighting in all states - active, inactive, focused, and unfocused.

## [v1.6.4] - 2025-12-21

🎨 Visual Harmony Refinement

A comprehensive normalization pass across all 9 Harmonia variants, ensuring consistent visual hierarchy, reduced fatigue, and enhanced semantic clarity. This release refines the balance between code emphasis and background elements - bringing every theme to a calm, professional baseline optimized for extended coding sessions.

### Improved

- **Keyword De-emphasis**: Reduced brightness across all variants (5-15% depending on theme) to prevent keyword dominance and restore balanced visual hierarchy.
- **Comment Tertiary Positioning**: Standardized comment luminance to ~45% (dark themes) and ~58% (light themes) for proper tertiary role without disappearing.
- **Selection Softening**: Reduced selection intensity by ~8% in dark variants and OLED to minimize visual interruption during text operations.
- **Highlighting Comfort**: Reduced brightness and saturation of all highlighting colors (selections, find matches, autocomplete) by 20-30% across all variants. Replaced harsh cyan with muted blues for significantly improved comfort during extended use.
- **Active Line Highlight**: Transformed from visible bar to subtle "veil-like" overlay using extreme alpha transparency (`#FFFFFF06` dark, `#00000005` light).
- **OLED Eye Strain Reduction**: Softened high-chroma colors on pure black backgrounds to reduce harsh contrast while maintaining true-black efficiency. Selection changed from harsh `#00BFFF` to muted `#2A4A6B`.
- **High Contrast Balance**: Corrected overbright elements (L≈90%) down to L≈75-80%, emphasizing strong background/foreground separation over saturation competition.
- **Aurora Pastel Normalization**: Applied aggressive luminance reduction (10%) across 6 tokens to eliminate visual noise from competing pastels.

### Fixed

- **Semantic Collapses**: Resolved 8 instances where different code elements shared identical colors (keyword=function, type=function, variable=parameter).
- **Variable Legibility** (Daybreak): Changed from semi-transparent `#54596268` to opaque `#4AB5B4` for proper readability on light backgrounds.
- **Hex Code Hygiene**: Normalized shorthand hex values (`#999` → `#999999`, `#888` → `#888888`) in Daybreak and Paper White for consistency.
- **OLED Invalid Hex Codes**: Fixed malformed 10-character hex codes caused by double-alpha concatenation (e.g., `#00BFFF28AA` → `#00BFFFAA`).
- **Inactive Panel Highlighting**: Removed solid white background in unfocused editor panels (`editor.inactiveLineHighlightBackground` now transparent).
- **Cross-Variant Consistency**: Unified semantic token behavior and visual relationships across all 9 themes while preserving each variant's unique personality.

## [v1.6.3] - 2025-11-27

### ✨ Introducing Harmonia Moonlit & Harmonia Daybreak

Two new blue-accented variants join the Harmonia family, designed with the same calm, balanced aesthetic and low-fatigue philosophy that define the project.

### Added

- **Harmonia Moonlit** - A serene dark-blue variant with cool tones and comfortable contrast, ideal for extended coding sessions.
- **Harmonia Daybreak** - A gentle light variant with soft sky-blue accents and neutral text balance, optimized for clarity in bright environments.

## [v1.6.2] - 2025-11-27

🎨 Unified Inline UI & Input Surface Consistency

A cross-theme refinement ensuring that inline interaction elements, particularly the MCP/Inline Chat container and editor-adjacent inputs, retain the same tonal logic across all Harmonia variants. This update eliminates inconsistencies where light or mixed surfaces appeared inside dark themes (and vice-versa), restoring the seamless aesthetic expected from Harmonia.

### Fixed

`input.background` is now aligned with each theme's primary surface palette, preventing unexpected bright blocks within dark environments and dark blocks within light environments.

Inline Chat and MCP task panels inherit the correct background tone for every variant, resolving contrast mismatches reported in Noir, Aurora, OLED, and Light.

## [v1.6.1] - 2025-10-22

🎨 Readability & Variable Contrast Polish

A focused refinement ensuring that PHP variables, object references, and imported namespaces maintain optimal visibility and tone harmony - especially within Light and Paper White environments.

### Fixed

- PHP variable sigils ($) now use a slightly darker neutral gray in bright themes (#5A6275) to prevent visual fading against light backgrounds.
- this/self references receive subtle blue tone adjustments for consistent contrast and semantic balance across all variants.
- Namespace and class paths retain distinct cool-blue tones for better structural clarity without introducing noise.

### Improved

- Enhanced tonal cohesion between keywords, types, and variables - maintaining Harmonia’s minimalist philosophy while improving code scanning comfort.
- Restored uniform syntax perception between dark and light environments.

## [v1.6.0] - 2025-10-22

🎯 Syntax Cohesion & Namespace Refinement

A precision-focused release ensuring syntax and token consistency across all variants.
This update completes the cross-theme standardization started in 1.5.x - refining PHP symbol behavior, namespace coloration, and scope alignment for easier long-term maintenance and full visual harmony.

### Updated

- Unified token scopes across all Harmonia variants (Dark, Noir, Aurora, OLED, Light, High Contrast, and Paper White).
- Standardized syntax handling for:
  - use statements - keyword isolated, namespace paths unified in tone.
  - class ... implements ... definitions - keyword emphasis restored, balanced interface highlighting.
  - Backslashes (\) - neutralized color for smoother namespace readability.
  - PHP variable sigil $ - now uses a neutral delimiter tone, harmonized across all variants.
  - this/self - retains italic contextual highlight for language-level clarity.
- Improved cross-theme parity - all variants now share a complete, non-redundant scope set for simpler synchronization and updates.

## [1.5.9] - 2025-10-17

Refined Diff & Overview Consistency

A minimal update aligning diff editor visuals across all Harmonia variants.
Subtle transparency adjustments improve focus and visual harmony while preserving each theme’s contrast identity.

### Updated

- Unified diffEditor._ and diffEditorGutter._ tones for balanced clarity.
- Reduced visual noise in added/removed regions with smoother transparency.
- Improved consistency across editorOverviewRuler in all variants.

## [1.5.8] - 2025-10-17

## Updated

- Restored visual neutrality:
  - scrollbar.shadow reverted to full transparency (#00000000) across all themes.
  - Removes the faint top shadow that appeared when scrolling editors, terminals, or panels.

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

A small but meaningful update focused on preserving visual flow across all Harmonia themes.

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
