# Harmonia Theme Guide

This document explains how the Harmonia VS Code theme is structured, what each setting does, and how scopes, hierarchies, and precedence work.
It serves as an internal reference for maintaining and extending the theme.

---

## 1. General Structure

- **`colors`** → Defines the VS Code **UI elements** (activity bar, sidebar, tabs, editor, terminal, etc.).
- **`tokenColors`** → Defines the **syntax highlighting** (keywords, strings, comments, tags, etc.).
- **`semanticHighlighting`** → Allows VS Code to use semantic analysis in addition to TextMate scopes.

---

## 2. Colors

Each key in the `colors` section affects a part of the **UI**, not the syntax.
Examples:

- `editor.background` → Background color of the code editor.
- `editor.foreground` → Default text color in the editor.
- `editorCursor.foreground` → Cursor color.
- `activityBar.background` → Background of the left activity bar.
- `statusBar.foreground` → Text color of the status bar.
- `terminal.ansiRed` → ANSI red color in the terminal.

👉 **Best practice:** keep all `colors` sorted alphabetically for easier editing.

---

## 3. Token Colors

Each block in `tokenColors` has:

- **name** → A descriptive label (e.g., `"Comment"`, `"HTML Tag Name"`).
- **scope** → One or more **TextMate scopes** that this style applies to.
- **settings** → The style configuration (e.g., `foreground`, `fontStyle`).

### Example

```json
{
  "name": "Comments",
  "scope": ["comment", "punctuation.definition.comment"],
  "settings": { "foreground": "#808890", "fontStyle": "italic" }
}
```

This makes all comments appear gray and italic.

---

## 4. Precedence & Hierarchy

VS Code applies theme rules in the following order:

1.  **Semantic Highlighting** (if enabled).
2.  **tokenColors** → scope-based rules.
3.  **editor.foreground** → global fallback.

If two rules target the same element:

- The **more specific scope** wins.
- If scopes have equal specificity, the **last rule defined** in the file takes precedence.

---

## 5. Common Scopes

Here are frequently used **TextMate scopes**:

### Comments

- `comment`
- `comment.line.double-slash`
- `punctuation.definition.comment`

### HTML / JSX Tags

- `entity.name.tag.html` → Native HTML tags (`div`, `span`).
- `entity.name.tag.jsx` → React JSX tags.
- `support.class.component.jsx` → Custom React components.
- `punctuation.definition.tag.html` → Angle brackets `< >`.

### Attributes & Values

- `entity.other.attribute-name` → Attribute names (`class`, `id`, etc.).
- `string.quoted.double.html` → Attribute values.
- `meta.attribute.class.html string.quoted` → Class strings (useful for Tailwind).

### Strings

- `string.quoted.single`
- `string.quoted.double`
- `punctuation.definition.string`

### Variables & Parameters

- `variable`
- `meta.definition.variable.name`
- `variable.parameter`
- `meta.function.parameter`

### Keywords & Operators

- `keyword.control` (e.g., `if`, `for`, `return`).
- `storage.type` (e.g., `class`, `function`).
- `keyword.operator` (e.g., `+`, `===`, `=>`).

### Markdown

- `markup.bold`
- `markup.italic`
- `markup.heading`
- `markup.inline.raw.markdown`

---

## 6. Practical Examples

- **Differentiate HTML vs JSX tags**
  - `entity.name.tag.html` → `<div>`
  - `entity.name.tag.jsx` → `<Button>`
- **Tailwind classes**
  - `string.quoted.double.html class` → `"bg-blue-500 p-4"`
- **Function names**
  - `entity.name.function` → `myFunction()`

---

## 7. Maintenance Tips

- Always give each token color rule a **descriptive `name`**.
- Keep `colors` **alphabetically ordered**.
- Group `tokenColors` by category: Comments, Tags, Attributes, Strings, Variables, Keywords, Markdown.
- When in doubt about a scope, open VS Code's **Developer: Inspect Editor Tokens and Scopes** command.

---

## 8. Resources

- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)
- [VS Code Extension Color Theme Reference](https://code.visualstudio.com/api/extension-guides/color-theme)
- [TextMate Scopes Reference](https://macromates.com/manual/en/language_grammars)

---
