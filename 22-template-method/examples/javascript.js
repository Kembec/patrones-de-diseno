// Template Method: Define el esqueleto de un algoritmo en una operación.

class AbstractClass {
	templateMethod() {
		this.baseOperation1();
		this.requiredOperation1();
		this.baseOperation2();
		this.requiredOperation2();
	}

	baseOperation1() {
		console.log("AbstractClass says: I am doing the bulk of the work");
	}

	baseOperation2() {
		console.log(
			"AbstractClass says: But I let subclasses override some operations"
		);
	}

	requiredOperation1() {}
	requiredOperation2() {}
}

class ConcreteClass1 extends AbstractClass {
	requiredOperation1() {
		console.log("ConcreteClass1 says: Implemented Operation1");
	}

	requiredOperation2() {
		console.log("ConcreteClass1 says: Implemented Operation2");
	}
}

class ConcreteClass2 extends AbstractClass {
	requiredOperation1() {
		console.log("ConcreteClass2 says: Implemented Operation1");
	}

	requiredOperation2() {
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
