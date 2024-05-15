// Prototype: Permite crear nuevos objetos clonando una instancia existente.

class Prototype {
	constructor(data) {
		this.data = data;
	}

	clone() {
		return new Prototype(this.data);
	}
}

const original = new Prototype("Prototype Data");
const clone = original.clone();

console.log(clone.data); // Prototype Data
