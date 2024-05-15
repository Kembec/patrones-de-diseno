// Command: Encapsula una solicitud como un objeto.

class Command {
	execute() {}
}

class Receiver {
	action() {
		return "Receiver Action";
	}
}

class ConcreteCommand extends Command {
	constructor(receiver) {
		super();
		this.receiver = receiver;
	}

	execute() {
		return this.receiver.action();
	}
}

class Invoker {
	setCommand(command) {
		this.command = command;
	}

	executeCommand() {
		return this.command.execute();
	}
}

const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
const invoker = new Invoker();

invoker.setCommand(command);
console.log(invoker.executeCommand()); // Receiver Action
