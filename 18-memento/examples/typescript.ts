// Memento: Permite capturar y externalizar el estado interno de un objeto.

class Memento {
	private state: string;

	constructor(state: string) {
		this.state = state;
	}

	public getState(): string {
		return this.state;
	}
}

class Originator {
	private state: string;

	public setState(state: string): void {
		console.log(`Originator: Setting state to ${state}`);
		this.state = state;
	}

	public saveState(): Memento {
		console.log("Originator: Saving to Memento.");
		return new Memento(this.state);
	}

	public restoreState(memento: Memento): void {
		this.state = memento.getState();
		console.log(
			`Originator: State after restoring from Memento: ${this.state}`
		);
	}
}

class Caretaker {
	private mementos: Memento[] = [];

	public addMemento(memento: Memento): void {
		this.mementos.push(memento);
	}

	public getMemento(index: number): Memento {
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
