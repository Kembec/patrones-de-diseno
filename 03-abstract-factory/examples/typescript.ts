// Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados.

interface AbstractProductA {
	operationA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
	operationA(): string {
		return "ProductA1 Operation";
	}
}

class ConcreteProductA2 implements AbstractProductA {
	operationA(): string {
		return "ProductA2 Operation";
	}
}

interface AbstractProductB {
	operationB(): string;
}

class ConcreteProductB1 implements AbstractProductB {
	operationB(): string {
		return "ProductB1 Operation";
	}
}

class ConcreteProductB2 implements AbstractProductB {
	operationB(): string {
		return "ProductB2 Operation";
	}
}

interface AbstractFactory {
	createProductA(): AbstractProductA;
	createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
	createProductA(): AbstractProductA {
		return new ConcreteProductA1();
	}

	createProductB(): AbstractProductB {
		return new ConcreteProductB1();
	}
}

class ConcreteFactory2 implements AbstractFactory {
	createProductA(): AbstractProductA {
		return new ConcreteProductA2();
	}

	createProductB(): AbstractProductB {
		return new ConcreteProductB2();
	}
}

const factory1 = new ConcreteFactory1();
const factory2 = new ConcreteFactory2();

const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

console.log(productA1.operationA()); // ProductA1 Operation
console.log(productB1.operationB()); // ProductB1 Operation
console.log(productA2.operationA()); // ProductA2 Operation
console.log(productB2.operationB()); // ProductB2 Operation
