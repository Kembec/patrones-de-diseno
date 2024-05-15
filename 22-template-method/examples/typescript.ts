// Template Method: Define el esqueleto de un algoritmo en una operación.

abstract class AbstractClass {
	public templateMethod(): void {
		this.baseOperation1();
		this.requiredOperation1();
		this.baseOperation2();
		this.requiredOperation2();
	}

	protected baseOperation1(): void {
		console.log("AbstractClass says: I am doing the bulk of the work");
	}

	protected baseOperation2(): void {
		console.log(
			"AbstractClass says: But I let subclasses override some operations"
		);
	}

	protected abstract requiredOperation1(): void;
	protected abstract requiredOperation2(): void;
}

class ConcreteClass1 extends AbstractClass {
	protected requiredOperation1(): void {
		console.log("ConcreteClass1 says: Implemented Operation1");
	}

	protected requiredOperation2(): void {
		console.log("ConcreteClass1 says: Implemented Operation2");
	}
}

class ConcreteClass2 extends AbstractClass {
	protected requiredOperation1(): void {
		console.log("ConcreteClass2 says: Implemented Operation1");
	}

	protected requiredOperation2(): void {
		console.log("ConcreteClass2 says: Implemented Operation2 differently");
	}
}

const concreteClass1 = new ConcreteClass1();
const concreteClass2 = new ConcreteClass2();

concreteClass1.templateMethod();
// AbstractClass says: I am doing the bulk of the work
// ConcreteClass1 says: Implemented Operation1
// AbstractClass says: But I let subclasses override some operations
// ConcreteClass1 says: Implemented Operation2

concreteClass2.templateMethod();
// AbstractClass says: I am doing the bulk of the work
// ConcreteClass2 says: Implemented Operation1
// AbstractClass says: But I let subclasses override some operations
// ConcreteClass2 says: Implemented Operation2 differently
