// Visitor: Permite definir nuevas operaciones sin cambiar las clases de los elementos.

interface Visitor {
	visitConcreteElementA(element: ConcreteElementA): void;
	visitConcreteElementB(element: ConcreteElementB): void;
}

class ConcreteVisitor1 implements Visitor {
	public visitConcreteElementA(element: ConcreteElementA): void {
		console.log(`ConcreteVisitor1: ${element.operationA()}`);
	}

	public visitConcreteElementB(element: ConcreteElementB): void {
		console.log(`ConcreteVisitor1: ${element.operationB()}`);
	}
}

class ConcreteVisitor2 implements Visitor {
	public visitConcreteElementA(element: ConcreteElementA): void {
		console.log(`ConcreteVisitor2: ${element.operationA()}`);
	}

	public visitConcreteElementB(element: ConcreteElementB): void {
		console.log(`ConcreteVisitor2: ${element.operationB()}`);
	}
}

interface Element {
	accept(visitor: Visitor): void;
}

class ConcreteElementA implements Element {
	public accept(visitor: Visitor): void {
		visitor.visitConcreteElementA(this);
	}

	public operationA(): string {
		return "ConcreteElementA";
	}
}

class ConcreteElementB implements Element {
	public accept(visitor: Visitor): void {
		visitor.visitConcreteElementB(this);
	}

	public operationB(): string {
		return "ConcreteElementB";
	}
}

const elements: Element[] = [new ConcreteElementA(), new ConcreteElementB()];

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
