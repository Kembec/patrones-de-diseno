// Bridge: Desacopla una abstracción de su implementación.

interface Implementation {
	operation(): string;
}

class ConcreteImplementationA implements Implementation {
	operation(): string {
		return "ImplementationA Operation";
	}
}

class ConcreteImplementationB implements Implementation {
	operation(): string {
		return "ImplementationB Operation";
	}
}

class Abstraction {
	protected implementation: Implementation;

	constructor(implementation: Implementation) {
		this.implementation = implementation;
	}

	operation(): string {
		return this.implementation.operation();
	}
}

const implementationA = new ConcreteImplementationA();
const abstractionA = new Abstraction(implementationA);

const implementationB = new ConcreteImplementationB();
const abstractionB = new Abstraction(implementationB);

console.log(abstractionA.operation()); // ImplementationA Operation
console.log(abstractionB.operation()); // ImplementationB Operation
