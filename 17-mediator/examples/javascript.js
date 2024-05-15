// Mediator: Define un objeto que encapsula cómo interactúan un conjunto de objetos.

class Mediator {
	notify(sender, event) {}
}

class ConcreteMediator extends Mediator {
	constructor(component1, component2) {
		super();
		this.component1 = component1;
		this.component2 = component2;

		this.component1.setMediator(this);
		this.component2.setMediator(this);
	}

	notify(sender, event) {
		if (event === "A") {
			console.log("Mediator reacts on A and triggers following operations:");
			this.component2.doC();
		}

		if (event === "D") {
			console.log("Mediator reacts on D and triggers following operations:");
			this.component1.doB();
		}
	}
}

class BaseComponent {
	constructor(mediator = null) {
		this.mediator = mediator;
	}

	setMediator(mediator) {
		this.mediator = mediator;
	}
}

class Component1 extends BaseComponent {
	doA() {
		console.log("Component 1 does A.");
		this.mediator.notify(this, "A");
	}

	doB() {
		console.log("Component 1 does B.");
	}
}

class Component2 extends BaseComponent {
	doC() {
		console.log("Component 2 does C.");
	}

	doD() {
		console.log("Component 2 does D.");
		this.mediator.notify(this, "D");
	}
}

const component1 = new Component1();
const component2 = new Component2();
const mediator = new ConcreteMediator(component1, component2);

component1.doA(); // Component 1 does A. \n Mediator reacts on A and triggers following operations: \n Component 2 does C.
component2.doD(); // Component 2 does D. \n Mediator reacts on D and triggers following operations: \n Component 1 does B.
