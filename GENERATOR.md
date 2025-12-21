# Harmonia Theme Generator

The Harmonia theme system uses a **build-based approach** to generate all 9 theme variants from a single source of truth. This eliminates manual JSON editing and makes maintenance dramatically easier.

## 🚀 Quick Start

### Build All Themes

```bash
npm run build
```

This generates all 9 theme files in the `themes/` directory in ~5ms.

### After Making Changes

1. Edit palette file (e.g., `src/palettes/dark.js`)
2. Run `npm run build`
3. All themes update automatically

## 📁 File Structure

```
harmonia-theme/
├── src/
│   ├── generator.js           # Build script
│   ├── tokens.js             # Token definitions (UI colors, syntax)
│   └── palettes/
│       ├── dark.js           # Dark theme colors
│       ├── noir.js           # Noir theme colors
│       ├── aurora.js         # Aurora theme colors
│       ├── moonlit.js        # Moonlit theme colors
│       ├── oled.js           # OLED theme colors
│       ├── high-contrast.js  # High Contrast theme colors
│       ├── light.js          # Light theme colors
│       ├── daybreak.js       # Daybreak theme colors
│       └── paper-white.js    # Paper White theme colors
└── themes/                    # Generated theme files (do not edit manually!)
    ├── harmonia-dark-color-theme.json
    └── ... (8 more)
```

## 🎨 How It Works

### 1. Palettes Define Colors

Each palette file (e.g., `src/palettes/dark.js`) defines semantic colors:

```javascript
export const dark = {
  name: 'Harmonia Dark',
  type: 'dark',

  // Backgrounds
  bg: {
    base: '#1a1b26',
    elevated: '#1e1f2a'
    // ...
  },

  // Semantic colors
  accent: '#c574dd',
  error: '#ec7279',
  warning: '#e0a96d'
  // ...
}
```

### 2. Tokens Map Palettes to VS Code

The `src/tokens.js` file defines how palette colors map to VS Code tokens:

```javascript
export function generateColors(p) {
  return {
    'activityBar.background': p.bg.base,
    'activityBar.foreground': p.fg.base,
    'debugConsole.errorForeground': p.error
    // ... 270+ tokens
  }
}
```

### 3. Generator Combines Them

The generator reads each palette, applies token mappings, and outputs JSON files:

```javascript
const theme = {
  name: palette.name,
  type: palette.type,
  colors: generateColors(palette),
  semanticTokenColors: generateSemanticTokenColors(palette),
  tokenColors: generateTokenColors(palette)
}
```

## 📝 Common Tasks

### Add a New Token to All Themes

**Example:** Add support for `inlineSuggest.background`

1. **Update `src/tokens.js`:**

```javascript
export function generateColors(p) {
  return {
    // ... existing tokens
    'inlineSuggest.background': p.bg.elevated,
    'inlineSuggest.foreground': p.fg.muted
  }
}
```

2. **Run build:**

```bash
npm run build
```

✅ **All 9 themes now have these tokens!**

### Change a Color Across All Themes

**Example:** Make warnings more orange

1. **Update `src/tokens.js` logic:**

```javascript
"debugConsole.warningForeground": p.orange,  // was p.warning
```

2. **Run build:**

```bash
npm run build
```

✅ **All 9 themes updated!**

### Customize One Theme

**Example:** Make Aurora's errors more pink

1. **Update `src/palettes/aurora.js`:**

```javascript
export const aurora = {
  // ...
  error: '#f7b3b8' // was '#f7a3a8'
}
```

2. **Run build:**

```bash
npm run build
```

✅ **Only Aurora theme updated!**

### Add a New Theme Variant

**Example:** Create "Harmonia Midnight"

1. **Create `src/palettes/midnight.js`:**

```javascript
export const midnight = {
  name: 'Harmonia Midnight',
  type: 'dark',

  bg: {
    base: '#0a0a12'
    // ... define all required colors
  },

  accent: '#6b8fff',
  error: '#ff6b8a'
  // ... copy structure from dark.js
}
```

2. **Import in `src/generator.js`:**

```javascript
import { midnight } from './palettes/midnight.js'

const palettes = [
  dark,
  noir,
  aurora,
  moonlit,
  oled,
  highContrast,
  light,
  daybreak,
  paperWhite,
  midnight // Add here
]
```

3. **Add filename mapping:**

```javascript
function getOutputFilename(palette) {
  const nameMap = {
    // ... existing
    'Harmonia Midnight': 'harmonia-midnight-color-theme.json'
  }
}
```

4. **Update `package.json` contributes:**

```json
{
  "label": "Harmonia Midnight",
  "uiTheme": "vs-dark",
  "path": "./themes/harmonia-midnight-color-theme.json"
}
```

5. **Run build:**

```bash
npm run build
```

✅ **New theme variant created!**

## 🔍 Understanding Palettes

Each palette must define these semantic color groups:

### Required Properties

```javascript
{
  name: 'Theme Name',
  type: 'dark' | 'light',

  // Backgrounds (layered system)
  bg: { base, elevated, elevated2, dropdown, input, input2, quick },

  // Foregrounds
  fg: { base, bright, brightest, muted, dim, white },

  // Core semantic colors
  accent, error, warning, info, success,

  // Extended palette
  blue, cyan, green, orange, purple, red, yellow (+ variants),

  // Syntax colors
  type, tag, attribute, property, comment, keyword, func, variable, constant,

  // UI element colors
  border, selection, scrollbar: { bg, hover, active },

  // ANSI terminal colors
  ansi: { black, red, green, yellow, blue, magenta, cyan, white, bright* },

  // And ~40 more specialized colors...
}
```

**Tip:** Copy an existing palette file and modify colors rather than creating from scratch.

## 🎯 Best Practices

### ✅ DO

- **Edit palette files** (`src/palettes/*.js`) to change colors
- **Edit `src/tokens.js`** to add/modify VS Code token mappings
- **Run `npm run build`** after any change
- **Test in VS Code** by reloading the window (`Cmd+R` / `Ctrl+R`)

### ❌ DON'T

- **Don't edit theme JSON files** in `themes/` directory directly (they're generated)
- **Don't commit** both source and generated files with different changes
- **Don't skip running** `npm run build` before testing

## 🔧 Troubleshooting

### Build fails with "Cannot find module"

Make sure you're using Node.js v14+ (ES modules support):

```bash
node --version  # Should be v14.0.0 or higher
```

### Theme doesn't update in VS Code

1. Run `npm run build` to regenerate
2. Reload VS Code window: `Cmd+R` (Mac) or `Ctrl+R` (Windows/Linux)
3. Check `themes/` directory has updated timestamps

### Missing token in generated theme

1. Check if the palette has the required color property
2. Check if `src/tokens.js` maps it correctly
3. Run `npm run build` again

## 📊 Benefits of This System

| Before (Manual)         | After (Generated)                  |
| ----------------------- | ---------------------------------- |
| Edit 9 JSON files       | Edit 1 palette file                |
| ~10 minutes             | ~2 seconds + build                 |
| Easy to make mistakes   | Type-safe and consistent           |
| Hard to find/replace    | Change once, propagates everywhere |
| Difficult to add themes | Copy palette file, run build       |
| No validation           | Catches errors at build time       |

## 🚢 Publishing Workflow

When ready to publish a new version:

```bash
# 1. Make your changes to src/palettes/*.js or src/tokens.js

# 2. Build all themes
npm run build

# 3. Test in VS Code
# (Reload window to see changes)

# 4. Commit both source and generated files
git add src/ themes/
git commit -m "Update theme colors"

# 5. Bump version and publish
npm version patch  # or minor/major
vsce publish
```

## 💡 Advanced Usage

### Custom Token Logic

You can add conditional logic in `src/tokens.js`:

```javascript
"editor.background": p.type === 'dark' ? p.bg.base : "#ffffff",
"scrollbar.background": p.type === 'dark' ? "#FFFFFF1A" : "#0000000D",
```

### Shared Color Utilities

Create a `src/utils.js` for color manipulation:

```javascript
export function withOpacity(hex, opacity) {
  return (
    hex +
    Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0')
  )
}
```

Then use in tokens:

```javascript
import { withOpacity } from './utils.js';

"editor.selectionBackground": withOpacity(p.accent, 0.3),
```

---
