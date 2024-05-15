// State: Permite a un objeto alterar su comportamiento cuando cambia su estado interno.

class Context {
	private state: State;

	constructor(state: State) {
		this.transitionTo(state);
	}

	public transitionTo(state: State): void {
		console.log(`Context: Transition to ${state.constructor.name}.`);
		this.state = state;
		this.state.setContext(this);
	}

	public request1(): void {
		this.state.handle1();
	}

	public request2(): void {
		this.state.handle2();
	}
}

abstract class State {
	protected context: Context;

	public setContext(context: Context): void {
		this.context = context;
	}

	public abstract handle1(): void;
	public abstract handle2(): void;
}

class ConcreteStateA extends State {
	public handle1(): void {
		console.log("ConcreteStateA handles request1.");
		this.context.transitionTo(new ConcreteStateB());
	}

	public handle2(): void {
		console.log("ConcreteStateA handles request2.");
	}
}

class ConcreteStateB extends State {
	public handle1(): void {
		console.log("ConcreteStateB handles request1.");
	}

	public handle2(): void {
		console.log("ConcreteStateB handles request2.");
		this.context.transitionTo(new ConcreteStateA());
	}
}

const context = new Context(new ConcreteStateA());
context.request1(); // ConcreteStateA handles request1. \n Context: Transition to ConcreteStateB.
context.request2(); // ConcreteStateB handles request2. \n Context: Transition to ConcreteStateA.
