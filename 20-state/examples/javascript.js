// State: Permite a un objeto alterar su comportamiento cuando cambia su estado interno.

class Context {
	constructor(state) {
		this.transitionTo(state);
	}

	transitionTo(state) {
		console.log(`Context: Transition to ${state.constructor.name}.`);
		this.state = state;
		this.state.setContext(this);
	}

	request1() {
		this.state.handle1();
	}

	request2() {
		this.state.handle2();
	}
}

class State {
	setContext(context) {
		this.context = context;
	}

	handle1() {}
	handle2() {}
}

class ConcreteStateA extends State {
	handle1() {
		console.log("ConcreteStateA handles request1.");
		this.context.transitionTo(new ConcreteStateB());
	}

	handle2() {
		console.log("ConcreteStateA handles request2.");
	}
}

class ConcreteStateB extends State {
	handle1() {
		console.log("ConcreteStateB handles request1.");
	}

	handle2() {
		console.log("ConcreteStateB handles request2.");
		this.context.transitionTo(new ConcreteStateA());
	}
}

const context = new Context(new ConcreteStateA());
context.request1(); // ConcreteStateA handles request1. \n Context: Transition to ConcreteStateB.
context.request2(); // ConcreteStateB handles request2. \n Context: Transition to ConcreteStateA.
