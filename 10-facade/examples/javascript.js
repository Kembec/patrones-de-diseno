// Facade: Proporciona una interfaz simplificada a un conjunto complejo de interfaces en un subsistema.

class SubsystemA {
	operationA() {
		return "SubsystemA Operation";
	}
}

class SubsystemB {
	operationB() {
		return "SubsystemB Operation";
	}
}

class Facade {
	constructor() {
		this.subsystemA = new SubsystemA();
		this.subsystemB = new SubsystemB();
	}

	operation() {
		return `${this.subsystemA.operationA()}, ${this.subsystemB.operationB()}`;
	}
}

const facade = new Facade();
console.log(facade.operation()); // SubsystemA Operation, SubsystemB Operation
