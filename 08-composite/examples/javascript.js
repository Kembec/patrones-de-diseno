// Composite: Permite tratar objetos individuales y composiciones de objetos de manera uniforme.

class Component {
	operation() {}
}

class Leaf extends Component {
	operation() {
		return "Leaf Operation";
	}
}

class Composite extends Component {
	constructor() {
		super();
		this.children = [];
	}

	add(child) {
		this.children.push(child);
	}

	operation() {
		return this.children.map((child) => child.operation()).join(", ");
	}
}

const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();

composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation()); // Leaf Operation, Leaf Operation
