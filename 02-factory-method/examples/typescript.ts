// Factory Method: Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.

abstract class Product {
	abstract operation(): string;
}

class ConcreteProductA extends Product {
	operation(): string {
		return "ConcreteProductA Operation";
	}
}

class ConcreteProductB extends Product {
	operation(): string {
		return "ConcreteProductB Operation";
	}
}

abstract class Creator {
	public abstract factoryMethod(): Product;

	public someOperation(): string {
		const product = this.factoryMethod();
		return `Creator: ${product.operation()}`;
	}
}

class ConcreteCreatorA extends Creator {
	public factoryMethod(): Product {
		return new ConcreteProductA();
	}
}

class ConcreteCreatorB extends Creator {
	public factoryMethod(): Product {
		return new ConcreteProductB();
	}
}

const creatorA = new ConcreteCreatorA();
const creatorB = new ConcreteCreatorB();

console.log(creatorA.someOperation()); // Creator: ConcreteProductA Operation
console.log(creatorB.someOperation()); // Creator: ConcreteProductB Operation
