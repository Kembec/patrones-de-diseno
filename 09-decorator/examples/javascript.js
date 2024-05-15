// Decorator: Añade responsabilidades adicionales a un objeto de manera dinámica.

class Component {
	operation() {
		return "Component Operation";
	}
}

class Decorator extends Component {
	constructor(component) {
		super();
		this.component = component;
	}

	operation() {
		return this.component.operation();
	}
}

class ConcreteDecoratorA extends Decorator {
	operation() {
		return `ConcreteDecoratorA(${super.operation()})`;
	}
}

class ConcreteDecoratorB extends Decorator {
	operation() {
		return `ConcreteDecoratorB(${super.operation()})`;
	}
}

const component = new Component();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

console.log(decoratorB.operation()); // ConcreteDecoratorB(ConcreteDecoratorA(Component Operation))
