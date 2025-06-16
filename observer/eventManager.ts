// EventManager: Publisher
class EventManager {
  private listeners: { [event: string]: Function[] } = {};

  subscribe(event: string, listener: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  unsubscribe(event: string, listener: Function) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(l => l !== listener);
  }

  notify(event: string, data?: any) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(listener => listener(data));
  }
}

// Editor: Concrete Subject
class Editor {
  public events: EventManager;
  private title: string;

  constructor() {
    this.events = new EventManager();
    this.title = "Untitled";
  }

  openFile(fileName: string) {
    this.title = fileName;
    this.events.notify("fileOpened", fileName);
  }

  saveFile() {
    this.events.notify("fileSaved", this.title);
  }
}

// Observer Interface
interface FileEventListener {
  update(filename: string): void;
}

// LoggingListener: Concrete Observer
class LoggingListener implements FileEventListener {
  private logPath: string;
  private message: string;

  constructor(logPath: string, message: string) {
    this.logPath = logPath;
    this.message = message;
  }

  update(filename: string): void {
    console.log(`[Log: ${this.logPath}] ${this.message} - ${filename}`);
    // En app real: append a file here
  }
}

// EmailAlertListener: Concrete Observer
class EmailAlertListener implements FileEventListener {
  private email: string;
  private message: string;

  constructor(email: string) {
    this.email = email;
    this.message = "File has been opened or saved";
  }

  update(filename: string): void {
    console.log(
      `Email to ${this.email}: ${this.message} - ${filename}`
    );
    // En app real: send email
  }
}

// App: Configura el sistema
class Apk {
  run() {
    const editor = new Editor();

    const logger = new LoggingListener("log.txt", "Action occurred on file");
    const emailAlert = new EmailAlertListener("user@example.com");

    editor.events.subscribe("fileOpened", logger.update.bind(logger));
    editor.events.subscribe("fileSaved", emailAlert.update.bind(emailAlert));

    editor.openFile("demo.txt");
    editor.saveFile();
  }
}

// Ejecutamos
const observerApp = new Apk();
observerApp.run();
