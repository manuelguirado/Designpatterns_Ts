
interface componentWithContextualHelp {
    showHelp: () => void;
}
abstract class Component implements componentWithContextualHelp {
    private helpText: string;
    protected container?: container;
    protected constructor(helpText: string, container?: container) {
        this.helpText = helpText;
        this.container = container;
    }
    showHelp(){
        if (this.helpText) {
            console.info("Help text for this component:", this.helpText);
        } else {
            console.warn("No help text available for this component.");
        }
    }
    
  
}
abstract class container extends Component {
    protected children: Component[] = [];
    constructor(helpText: string, container?: container) {
        super(helpText, container);
    }
    addChild(child: Component) {
        this.children.push(child);
      
    }
    showHelp() {
        super.showHelp();
        this.children.forEach(child => child.showHelp());
    }
}
class Button extends Component {
    onClick(arg0: () => void) {
        throw new Error("Method not implemented.");
    }
    click() {
        throw new Error("Method not implemented.");
    }
    constructor(helpText: string, container: container) {
        super(helpText, container);
    }
}
class dialog extends container {
    constructor(helpText: string, container?: container) {
        super(helpText, container);
    }
}
class dialogButton extends Button {
    constructor(helpText: string, container: container) {
        super(helpText, container);
    }
}
class HelpApplication {
    copy(arg0: any) {
        throw new Error("Method not implemented.");
    }
    getClipboard(): any {
        throw new Error("Method not implemented.");
    }
    showHistory() {
        throw new Error("Method not implemented.");
    }
    createUI() {
        const mainContainer = new dialog("Main dialog help text" );
        const button1 = new Button("Button 1 help text", mainContainer);
        const button2 = new Button("Button 2 help text", mainContainer);
        const subDialog = new dialog("Sub dialog help text", mainContainer);
        const subButton = new dialogButton("Sub dialog button help text", subDialog);

        mainContainer.addChild(button1);
        mainContainer.addChild(button2);
        mainContainer.addChild(subDialog);
        subDialog.addChild(subButton);

        return mainContainer;
    }
    showHelp() {
        const ui = this.createUI();
        ui.showHelp();
    }
}
// Example usage
const chainApp = new HelpApplication();
chainApp.showHelp();  