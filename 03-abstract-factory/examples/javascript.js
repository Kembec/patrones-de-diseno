// Abstract Factory: Proporciona una interfaz para crear familias de objetos relacionados.

class ProductA1 {
	operation() {
		return "ProductA1 Operation";
	}
}

class ProductA2 {
	operation() {
		return "ProductA2 Operation";
	}
}

class ProductB1 {
	operation() {
		return "ProductB1 Operation";
	}
}

class ProductB2 {
	operation() {
		return "ProductB2 Operation";
	}
}

class AbstractFactory {
	createProductA() {}
	createProductB() {}
}

class ConcreteFactory1 extends AbstractFactory {
	createProductA() {
		return new ProductA1();
	}
	createProductB() {
		return new ProductB1();
	}
}

class ConcreteFactory2 extends AbstractFactory {
	createProductA() {
		return new ProductA2();
	}
	createProductB() {
		return new ProductB2();
	}
}

const factory1 = new ConcreteFactory1();
const factory2 = new ConcreteFactory2();

const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

console.log(productA1.operation()); // ProductA1 Operation
console.log(productB1.operation()); // ProductB1 Operation
console.log(productA2.operation()); // ProductA2 Operation
console.log(productB2.operation()); // ProductB2 Operation
