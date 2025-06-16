class editor {
  private text: string;
  private curx: number;
  private cury: number;
  private selectionWidth: number;

  constructor() {
    this.text = "";
    this.curx = 0;
    this.cury = 0;
    this.selectionWidth = 0;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public setCursor(x: number, y: number): void {
    this.curx = x;
    this.cury = y;
  }

  public setSelectionWidth(width: number): void {
    this.selectionWidth = width;
  }

  public createSnapshot(): snapshot {
    return new snapshot(this.text, this.curx, this.cury, this.selectionWidth);
  }
}

class snapshot {
  private text: string;
  private curx: number;
  private cury: number;
  private selectionWidth: number;

  constructor(
    text: string,
    curx: number,
    cury: number,
    selectionWidth: number
  ) {
    this.text = text;
    this.curx = curx;
    this.cury = cury;
    this.selectionWidth = selectionWidth;
  }

  restore(editor: editor) {
    editor.setText(this.text);
    editor.setCursor(this.curx, this.cury);
    editor.setSelectionWidth(this.selectionWidth);
    console.log(
      "Restored to snapshot:",
      this.text,
      this.curx,
      this.cury,
      this.selectionWidth
    );
  }
}

class command {
  private backup: snapshot;
  private editor: editor;

  constructor(editor: editor) {
    this.editor = editor;
    this.backup = this.editor.createSnapshot();
  }

  makeBackup() {
    this.backup = this.editor.createSnapshot();
  }

  undo() {
    if (this.backup != null) {
      this.backup.restore(this.editor);
    }
  }
}
const myEditor = new editor();
myEditor.setText("Hello, World!");
myEditor.setCursor(5, 0);
myEditor.setSelectionWidth(5);

const myCommand = new command(myEditor); // backup creado
myEditor.setText("New text");
myEditor.setCursor(2, 0);
myEditor.setSelectionWidth(3);

myCommand.undo(); // restaura el estado anterior
