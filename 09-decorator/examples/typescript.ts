// Decorator: Añade responsabilidades adicionales a un objeto de manera dinámica.

abstract class Component {
	abstract operation(): string;
}

class ConcreteComponent extends Component {
	operation(): string {
		return "ConcreteComponent Operation";
	}
}

abstract class Decorator extends Component {
	protected component: Component;

	constructor(component: Component) {
		super();
		this.component = component;
	}

	operation(): string {
		return this.component.operation();
	}
}

class ConcreteDecoratorA extends Decorator {
	operation(): string {
		return `ConcreteDecoratorA(${super.operation()})`;
	}
}

class ConcreteDecoratorB extends Decorator {
	operation(): string {
		return `ConcreteDecoratorB(${super.operation()})`;
	}
}

const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);

console.log(decoratorB.operation()); // ConcreteDecoratorB(ConcreteDecoratorA(ConcreteComponent Operation))
