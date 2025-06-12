class Notifier {
  notify(message: string): void {
    console.log(`Notification: ${message}`);
  }
}

class NotifierDecorator extends Notifier {
  protected wrappee: Notifier;

  constructor(notifier: Notifier) {
    super();
    this.wrappee = notifier;
  }

  notify(message: string): void {
    this.wrappee.notify(message);
  }
}

class SMSDecorator extends NotifierDecorator {
  notify(message: string): void {
    super.notify(message);
    console.log(`SMS Notification: ${message}`);
  }
}

class EmailDecorator extends NotifierDecorator {
  notify(message: string): void {
    super.notify(message);
    console.log(`Email Notification: ${message}`);
  }
}

// Uso
const baseNotifier = new Notifier();
const smsNotifier = new SMSDecorator(baseNotifier);
const emailSmsNotifier = new EmailDecorator(smsNotifier);

emailSmsNotifier.notify("Hola!");
smsNotifier.notify("Hola!");