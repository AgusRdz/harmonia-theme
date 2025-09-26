# Harmonia Theme

**Harmonia** is a carefully crafted theme suite for Visual Studio Code.
It now comes in four variants - Dark, Light, Noir, and the new High Contrast - all designed for long, focused coding sessions with soft, thoughtful visuals and semantic clarity.

---

## 🌗 Purpose

Harmonia was created for developers who want:

- Visual peace over visual noise
- Focused, low-glare interfaces in both light and dark modes
- Clear, consistent syntax highlighting
- A UI that supports your work instead of distracting from it

---

## 🎯 Features

- 🎨 **Cohesive color palettes** - expressive accents with balanced backgrounds
- 🧠 **Semantic clarity** - functions, variables, parameters, and keywords all distinct
- 💬 **Readable comments** - styled to fade gently but never disappear
- 📄 **Enhanced Markdown** - blockquotes, headers, inline code,
  separators styled for clarity
- 💻 **Terminal harmony** - ANSI colors tuned to match the theme
  mood
- 🧩 **Language-first design** - tuned for PHP, JS, JSON, Docker, configs, logs, and more

---

## 🎨 Color Philosophy

### Harmonia Dark

- `#1a1b26` - soft, deep background (never pure black)
- `#d0d0e0` - consistent, low-contrast foreground text
- Accents: `#c574dd`, `#88c6c3`, `#a3d9a5` --- expressive yet quiet
- Structure: `#5a5f7a` for dividers, quotes, and spacing

### Harmonia Light

- `#eceef1` - soft, light background (never pure white)
- `#2d2d2d` - clean, readable foreground text
- Accents: `#c574dd`, `#86c591`, `#83bde7` --- elegant without harshness
- Structure: `#c1c1c1` and `#c3c7ce` for subtle guides and dividers

### Harmonia Noir

- `#14121A` - rich violet-black background for deep focus
- `#d0d0e0` - soft, neutral foreground text
- Accents: `#b88ce8`, `#9fd6d1`, `#e0a96d` - sophisticated, moody
  tones
- Structure: `#4C4665` and `#2A2835` for subtle depth and guides

### Harmonia High Contrast (new in 1.2.0)

- `#0f0f0f` - stronger, pure background
- `#ffffff` - crisp, accessible foreground text
- Accents: `#ff4081`, `#00e5ff`, `#76ff03` - high-contrast, vivid highlights
- Structure: `#888888`, `#444444` - clear borders and guides

Harmonia High Contrast (new in 1.2.0)
• #0f0f0f - stronger, pure background
• #ffffff - crisp, accessible foreground text
• Accents: #ff4081, #00e5ff, #76ff03 - high-contrast, vivid highlights
• Structure: #888888, #444444 - clear borders and guides

Each variant is designed to reduce fatigue, keep code readable, and make
your editor feel like a calm workspace.

---

## ⚙️ Recommended Settings

```json
{
  "workbench.colorTheme": "Harmonia Dark",
  "editor.fontFamily": "'Monaspace Argon', 'Fira Code', 'MonoLisa', 'JetBrains Mono', 'DejaVu Sans Code', 'monospace'",
  "editor.fontLigatures": "'calt', 'ss01', 'ss02', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'cv01' 2, 'liga'",
  "editor.fontSize": 16,
  "editor.lineHeight": 0,
  "editor.cursorBlinking": true,
  "editor.renderWhitespace": "none",
  "editor.minimap.enabled": false,
  "terminal.integrated.fontFamily": "'Fira Code', monospace",
  "terminal.integrated.fontSize": 16
}
```

---

## 🎨 Advanced Usage

Harmonia works out of the box, but you can take advantage of VS Code's customization options to fine-tune your experience.

### Set Default Theme

```json
"workbench.colorTheme": "Harmonia Noir"
```

Always start VS Code with **Harmonia Noir**.
Change to "Harmonia Dark" or "Harmonia Light" as needed.

### Preferred Dark/Light Theme

```json
"workbench.preferredDarkColorTheme": "Harmonia Noir",
"workbench.preferredLightColorTheme": "Harmonia Light",
"window.autoDetectColorScheme": true
```

Automatically switch between Light and Dark variants based on your operating system theme.

### Theme-Specific Overrides

VS Code allows overriding colors per theme without editing the theme itself.
Official docs: [Customize a Color Theme](https://code.visualstudio.com/docs/configure/themes#_customize-a-color-theme)

```json
"workbench.colorCustomizations": {
  "[Harmonia Dark]": {
    "editor.background": "#1a1b26",
    "editor.foreground": "#d0d0e0"
  },
  "[Harmonia Light]": {
    "editor.background": "#eceef1",
    "editor.foreground": "#2d2d2d"
  },
  "[Harmonia Noir]": {
    "editor.background": "#14121A",
    "editor.foreground": "#d0d0e0"
  },
    "[Harmonia High Contrast]": {
    "editor.background": "#0f0f0f",
    "editor.foreground": "#ffffff"
  }
}
```

This example tweaks line numbers differently for each variant.
You can use the same method to adjust highlights, borders, or any UI color.

---

## 🔤 Recommended Fonts

Harmonia pairs well with these fonts, chosen for clarity and comfort
during long sessions:

| Font                 | Link                                                                     |
| -------------------- | ------------------------------------------------------------------------ |
| **Monaspace Argon**  | [monaspace.githubnext.com](https://monaspace.githubnext.com/)            |
| **Fira Code**        | [github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)         |
| **MonoLisa**         | [monolisa.dev](https://www.monolisa.dev/) _(the free version is enough)_ |
| **JetBrains Mono**   | [jetbrains.com/lp/mono](https://www.jetbrains.com/lp/mono/)              |
| **DejaVu Sans Code** | [dejavu-fonts.github.io](https://dejavu-fonts.github.io/)                |
| **monospace**        | _(System fallback - no installation needed)_                             |

---

## 🎨 Preview

### Harmonia Dark

![JS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/dark/1.png)
![PHP Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/dark/2.png)
![CSS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/dark/3.png)

### Harmonia Light

![JS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/light/1.png)
![PHP Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/light/2.png)
![CSS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/light/3.png)

### Harmonia Noir

![JS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/noir/1.png)
![PHP Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/noir/2.png)
![CSS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/noir/3.png)

### Harmonia Dark High Contrast

![JS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/dark-high-contrast/1.png)
![PHP Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/dark-high-contrast/2.png)
![CSS Example](https://raw.githubusercontent.com/AgusRdz/harmonia-theme/master/images/dark-high-contrast/3.png)

---

## License

Harmonia is released under the [MIT License](LICENSE.txt).
Use, modify, and share it freely.

> Feedback is always welcome! This started as a personal project for my
> own daily coding, and I'm happy to share it with anyone who finds it
> useful.
> Suggestions are appreciated - updates are not guaranteed, but the
> theme will continue to evolve with time.
