// Factory Method: Define una interfaz para crear un objeto, pero permite a las subclases decidir qué clase instanciar.

class Product {
	operation() {
		return "Product Operation";
	}
}

class ConcreteProductA extends Product {
	operation() {
		return "ConcreteProductA Operation";
	}
}

class ConcreteProductB extends Product {
	operation() {
		return "ConcreteProductB Operation";
	}
}

class Creator {
	factoryMethod(type) {
		if (type === "A") {
			return new ConcreteProductA();
		} else if (type === "B") {
			return new ConcreteProductB();
		}
		return null;
	}
}

const creator = new Creator();
const productA = creator.factoryMethod("A");
const productB = creator.factoryMethod("B");

console.log(productA.operation()); // ConcreteProductA Operation
console.log(productB.operation()); // ConcreteProductB Operation
