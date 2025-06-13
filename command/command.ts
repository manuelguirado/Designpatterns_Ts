// INTERFACES Y CLASES BASE
abstract class Command {
    protected app: Application;
    protected editor: Editor;
    protected backup: string = "";

    constructor(app: Application, editor: Editor) {
        this.app = app;
        this.editor = editor;
    }

    saveBackup() {
        this.backup = this.editor.getContent();
    }

    undo() {
        this.editor.setContent(this.backup);
    }

    abstract execute(): void;
}

// EDITOR
class Editor {
    private content: string = "";
    private selection: string = "";

    getSelection(): string {
        return this.selection;
    }

    setSelection(text: string) {
        this.selection = text;
    }

    insertContent(newText: string) {
        this.content += newText;
    }

    deleteSelection() {
        this.content = this.content.replace(this.selection, "");
        this.selection = "";
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string) {
        this.content = content;
    }

    replaceSelection(newText: string) {
        this.content = this.content.replace(this.selection, newText);
        this.selection = newText;
    }
}

// COMANDOS CONCRETOS
class CopyCommand extends Command {
    execute() {
        const selection = this.editor.getSelection();
        this.app.setClipboard(selection);
        console.log("Copied:", selection);
    }
}

class PasteCommand extends Command {
    execute() {
        this.saveBackup();
        const clipboard = this.app.getClipboard();
        this.editor.insertContent(clipboard);
        this.app.addCommand(this);
        console.log("Pasted:", clipboard);
    }
}

class CutCommand extends Command {
    execute() {
        this.saveBackup();
        const selection = this.editor.getSelection();
        this.app.setClipboard(selection);
        this.editor.deleteSelection();
        this.app.addCommand(this);
        console.log("Cut:", selection);
    }
}

class DeleteCommand extends Command {
    execute() {
        this.saveBackup();
        this.editor.deleteSelection();
        this.app.addCommand(this);
        console.log("Deleted selection");
    }
}

class HistoryCommand extends Command {
    execute() {
        console.log("Command history:");
        this.app.showHistory();
    }
}

// APLICACIÓN PRINCIPAL
class Application {
    private clipboard: string = "";
    private editor: Editor;
    private history: Command[] = [];

    constructor() {
        this.editor = new Editor();
    }

    setClipboard(text: string) {
        this.clipboard = text;
    }

    getClipboard(): string {
        return this.clipboard;
    }

    addCommand(command: Command) {
        this.history.push(command);
    }

    showHistory() {
        this.history.forEach((cmd, index) => {
            console.log(`Command ${index + 1}: ${cmd.constructor.name}`);
        });
    }

    undo() {
        const command = this.history.pop();
        if (command) {
            command.undo();
            console.log("Undo:", command.constructor.name);
        } else {
            console.log("No commands to undo.");
        }
    }

    createUI() {
        // Simulamos el uso de comandos
        this.editor.setContent("Hola mundo");
        this.editor.setSelection("mundo");

        const copy = new CopyCommand(this, this.editor);
        const cut = new CutCommand(this, this.editor);
        const paste = new PasteCommand(this, this.editor);
        const del = new DeleteCommand(this, this.editor);
        const hist = new HistoryCommand(this, this.editor);

        copy.execute();   // copia "mundo"
        cut.execute();    // corta "mundo"
        paste.execute();  // pega "mundo"
        del.execute();    // borra "mundo"
        hist.execute();   // muestra el historial
        this.undo();      // deshace el delete
        this.undo();      // deshace el paste
    }
}

// USO
export {}; // Make this file a module to avoid global scope conflicts
const appInstance = new Application();
appInstance.createUI();
