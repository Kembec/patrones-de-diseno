// Composite: Permite tratar objetos individuales y composiciones de objetos de manera uniforme.

abstract class Component {
	abstract operation(): string;
}

class Leaf extends Component {
	operation(): string {
		return "Leaf Operation";
	}
}

class Composite extends Component {
	private children: Component[] = [];

	add(child: Component): void {
		this.children.push(child);
	}

	operation(): string {
		return this.children.map((child) => child.operation()).join(", ");
	}
}

const leaf1 = new Leaf();
const leaf2 = new Leaf();
const composite = new Composite();

composite.add(leaf1);
composite.add(leaf2);

console.log(composite.operation()); // Leaf Operation, Leaf Operation
