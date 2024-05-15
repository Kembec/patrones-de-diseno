// Prototype: Permite crear nuevos objetos clonando una instancia existente.

interface Prototype {
	clone(): Prototype;
}

class ConcretePrototype implements Prototype {
	constructor(public data: string) {}

	clone(): Prototype {
		return new ConcretePrototype(this.data);
	}
}

const original = new ConcretePrototype("Prototype Data");
const clone = original.clone();

console.log(clone); // ConcretePrototype { data: 'Prototype Data' }
