// Singleton: Garantiza que una clase tenga solo una instancia.

class Singleton {
	constructor() {
		if (Singleton.instance) {
			return Singleton.instance;
		}
		this.data = "Singleton Data";
		Singleton.instance = this;
	}

	getData() {
		return this.data;
	}
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
