// Visitor: Permite definir nuevas operaciones sin cambiar las clases de los elementos.

class Visitor {
	visitConcreteElementA(element) {}
	visitConcreteElementB(element) {}
}

class ConcreteVisitor1 extends Visitor {
	visitConcreteElementA(element) {
		console.log(`ConcreteVisitor1: ${element.operationA()}`);
	}

	visitConcreteElementB(element) {
		console.log(`ConcreteVisitor1: ${element.operationB()}`);
	}
}

class ConcreteVisitor2 extends Visitor {
	visitConcreteElementA(element) {
		console.log(`ConcreteVisitor2: ${element.operationA()}`);
	}

	visitConcreteElementB(element) {
		console.log(`ConcreteVisitor2: ${element.operationB()}`);
	}
}

class Element {
	accept(visitor) {}
}

class ConcreteElementA extends Element {
	accept(visitor) {
		visitor.visitConcreteElementA(this);
	}

	operationA() {
		return "ConcreteElementA";
	}
}

class ConcreteElementB extends Element {
	accept(visitor) {
		visitor.visitConcreteElementB(this);
	}

	operationB() {
		return "ConcreteElementB";
	}
}

const elements = [new ConcreteElementA(), new ConcreteElementB()];

const visitor1 = new ConcreteVisitor1();
const visitor2 = new ConcreteVisitor2();

elements.forEach((element) => {
	element.accept(visitor1);
	element.accept(visitor2);
});
// ConcreteVisitor1: ConcreteElementA
// ConcreteVisitor1: ConcreteElementB
// ConcreteVisitor2: ConcreteElementA
// ConcreteVisitor2: ConcreteElementB
