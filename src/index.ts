import { commands, ExtensionContext, window, workspace } from 'coc.nvim';
import convertWord from './convert';

export async function activate(context: ExtensionContext): Promise<void> {
  window.showMessage(`coc-caseconvert works!`);
  context.subscriptions.push(
    commands.registerCommand('coc-caseconvert.searchMultiCase', async () => {
      let { nvim } = workspace;
      let word = await nvim.eval('expand("<cword>")');
      const allCases = convertWord(word);
      const picks = await window.showPickerDialog(allCases, "pick cases to search")
      window.showMessage(picks?.toString() || "")
      const picksString = picks?.join("|")
      if (picksString) {
        const command = `CocSearch --regexp (${picksString})`;
        window.showMessage('search: ' + command);
        nvim.command(command);
      } else {
        window.showErrorMessage("pick at least a word")
      }
    })
  );
}
