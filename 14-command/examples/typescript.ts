// Command: Encapsula una solicitud como un objeto.

interface Command {
	execute(): string;
}

class Receiver {
	public action(): string {
		return "Receiver Action";
	}
}

class ConcreteCommand implements Command {
	private receiver: Receiver;

	constructor(receiver: Receiver) {
		this.receiver = receiver;
	}

	public execute(): string {
		return this.receiver.action();
	}
}

class Invoker {
	private command: Command;

	public setCommand(command: Command): void {
		this.command = command;
	}

	public executeCommand(): string {
		return this.command.execute();
	}
}

const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
const invoker = new Invoker();

invoker.setCommand(command);
console.log(invoker.executeCommand()); // Receiver Action
