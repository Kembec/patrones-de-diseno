// Facade: Proporciona una interfaz simplificada a un conjunto complejo de interfaces en un subsistema.

class SubsystemA {
	operationA(): string {
		return "SubsystemA Operation";
	}
}

class SubsystemB {
	operationB(): string {
		return "SubsystemB Operation";
	}
}

class Facade {
	private subsystemA: SubsystemA;
	private subsystemB: SubsystemB;

	constructor() {
		this.subsystemA = new SubsystemA();
		this.subsystemB = new SubsystemB();
	}

	operation(): string {
		return `${this.subsystemA.operationA()}, ${this.subsystemB.operationB()}`;
	}
}

const facade = new Facade();
console.log(facade.operation()); // SubsystemA Operation, SubsystemB Operation
