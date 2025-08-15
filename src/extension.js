const vscode = require('vscode')

function activate(context) {
  const previousVersion = context.globalState.get('harmonia.previousVersion')
  const currentVersion = require('../package.json').version

  if (previousVersion) {
    vscode.window.showInformationMessage(
      `Harmonia has been updated to version ${currentVersion}`
    )
  } else {
    vscode.window.showInformationMessage(
      'Thanks for installing Harmonia ✨ Happy coding!'
    )
  }

  context.globalState.update('harmonia.previousVersion', currentVersion)
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
}
