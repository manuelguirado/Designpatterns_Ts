interface Mediator {
  notify(sender: MediatorComponent, event: string): void;
}

class MediatorComponent {
  protected dialog: Mediator;
  protected label: string;

  constructor(dialog: Mediator, label: string = "") {
    this.dialog = dialog;
    this.label = label;
  }

  onClick(callback: () => void): void {
    callback(); // Simula un click
  }

  isChecked(): boolean {
    return false; // Por defecto
  }

  keypress(): void {
    console.log("Key pressed");
  }

  getValue(): string {
    return "";
  }

  setValue(value: string): void {
    // Implementado en subclases
  }

  show(): void {
    console.log(`${this.label} is shown`);
  }

  hide(): void {
    console.log(`${this.label} is hidden`);
  }
}

class Checkbox extends MediatorComponent {
  private checked: boolean = false;
  isChecked(): boolean {
    return this.checked;
  }

  setChecked(value: boolean): void {
    this.checked = value;
    this.dialog.notify(this, "checked");
  }
}

class TextBox extends MediatorComponent {
  private value: string;

  constructor(dialog: Mediator, label: string = "") {
    super(dialog, label);
    this.value = "";
  }

  getValue(): string {
    return this.value;
  }

  setValue(value: string): void {
    this.value = value;
  }
}


class DialogButton extends MediatorComponent {
  constructor(dialog: Mediator, label: string = "") {
    super(dialog, label);
  }

  onClick(callback: () => void): void {
    callback(); // Simula el click
  }
}

class AuthenticationDialog implements Mediator {
  private title: string;
  private loginOrRegister: Checkbox;
  private registrationUserName: TextBox;
  private registrationPassword: TextBox;
  private registrationEmail: TextBox;
  private okbtn: DialogButton;
  private cancelbtn: DialogButton;

  constructor() {
    this.title = "Authentication";
    this.loginOrRegister = new Checkbox(this, "Login/Register");
    this.registrationUserName = new TextBox(this, "Username");
    this.registrationPassword = new TextBox(this, "Password");
    this.registrationEmail = new TextBox(this, "Email");
    this.okbtn = new DialogButton(this, "OK");
    this.cancelbtn = new DialogButton(this, "Cancel");

    this.okbtn.onClick(() => this.notify(this.okbtn, "click"));
    this.cancelbtn.onClick(() => this.notify(this.cancelbtn, "click"));
  }

  notify(sender: MediatorComponent, event: string): void {
    if (sender === this.loginOrRegister && event === "checked") {
      if (this.loginOrRegister.isChecked()) {
        this.title = "Register";
        this.registrationUserName.show();
        this.registrationPassword.show();
        this.registrationEmail.show();
      } else {
        this.title = "Login";
        this.registrationUserName.hide();
        this.registrationPassword.hide();
        this.registrationEmail.hide();
      }
      console.log(`Title updated: ${this.title}`);
    }

    if (sender === this.okbtn && event === "click") {
      if (this.loginOrRegister.isChecked()) {
        console.log(
          "Registering user with Username: " +
            this.registrationUserName.getValue() +
            ", Password: " +
            this.registrationPassword.getValue() +
            ", Email: " +
            this.registrationEmail.getValue()
        );
      } else {
        console.log(
          "Logging in with Username: " +
            this.registrationUserName.getValue() +
            ", Password: " +
            this.registrationPassword.getValue()
        );
      }
    } else if (sender === this.cancelbtn && event === "click") {
      console.log("Authentication cancelled");
    }
  }
}

// Ejemplo de uso
const authDialog = new AuthenticationDialog();

// Simular cambios de estado
authDialog["loginOrRegister"].setChecked(true); // Cambia a modo registro
authDialog["registrationUserName"].setValue("juan");
authDialog["registrationPassword"].setValue("1234");
authDialog["registrationEmail"].setValue("juan@example.com");
authDialog["okbtn"].onClick(() => authDialog.notify(authDialog["okbtn"], "click"));
