// Adapter: Permite que interfaces incompatibles trabajen juntas.

class OldSystem {
	oldMethod() {
		return "Old System Method";
	}
}

class NewSystem {
	newMethod() {
		return "New System Method";
	}
}

class Adapter {
	constructor(oldSystem) {
		this.oldSystem = oldSystem;
	}

	newMethod() {
		return this.oldSystem.oldMethod();
	}
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);

console.log(adapter.newMethod()); // Old System Method
