const vscode = require('vscode')
const path = require('path')
const fs = require('fs')

function activate(context) {
  const previousVersion = context.globalState.get('harmonia.previousVersion')

  const packageJsonPath = path.join(context.extensionPath, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))
  const currentVersion = packageJson.version

  const [currMajor] = currentVersion.split('.').map(Number)
  const [prevMajor] = (previousVersion || '').split('.').map(Number)

  if (!previousVersion) {
    vscode.window.showInformationMessage(
      'Thanks for installing Harmonia ✨ Happy coding!'
    )
  } else if (previousVersion !== currentVersion) {
    const message =
      prevMajor !== undefined && currMajor > prevMajor
        ? `Harmonia has been upgraded to v${currentVersion} with major changes. Reload to apply the latest updates?`
        : `Harmonia has been updated to v${currentVersion}. Reload to apply the latest changes?`

    vscode.window
      .showInformationMessage(message, 'Reload Window')
      .then((selection) => {
        if (selection === 'Reload Window') {
          vscode.commands.executeCommand('workbench.action.reloadWindow')
        }
      })
  }

  context.globalState.update('harmonia.previousVersion', currentVersion)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
}
