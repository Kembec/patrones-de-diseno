// Bridge: Desacopla una abstracción de su implementación.

class Abstraction {
	constructor(implementation) {
		this.implementation = implementation;
	}

	operation() {
		return this.implementation.operation();
	}
}

class ImplementationA {
	operation() {
		return "ImplementationA Operation";
	}
}

class ImplementationB {
	operation() {
		return "ImplementationB Operation";
	}
}

const implementationA = new ImplementationA();
const abstractionA = new Abstraction(implementationA);

const implementationB = new ImplementationB();
const abstractionB = new Abstraction(implementationB);

console.log(abstractionA.operation()); // ImplementationA Operation
console.log(abstractionB.operation()); // ImplementationB Operation
