// Memento: Permite capturar y externalizar el estado interno de un objeto.

class Memento {
	constructor(state) {
		this.state = state;
	}

	getState() {
		return this.state;
	}
}

class Originator {
	constructor() {
		this.state = "";
	}

	setState(state) {
		console.log(`Originator: Setting state to ${state}`);
		this.state = state;
	}

	saveState() {
		console.log("Originator: Saving to Memento.");
		return new Memento(this.state);
	}

	restoreState(memento) {
		this.state = memento.getState();
		console.log(
			`Originator: State after restoring from Memento: ${this.state}`
		);
	}
}

class Caretaker {
	constructor() {
		this.mementos = [];
	}

	addMemento(memento) {
		this.mementos.push(memento);
	}

	getMemento(index) {
		return this.mementos[index];
	}
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State1");
originator.setState("State2");
caretaker.addMemento(originator.saveState());

originator.setState("State3");
caretaker.addMemento(originator.saveState());

originator.setState("State4");

originator.restoreState(caretaker.getMemento(1)); // Originator: State after restoring from Memento: State3
originator.restoreState(caretaker.getMemento(0)); // Originator: State after restoring from Memento: State2
