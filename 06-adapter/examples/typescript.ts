// Adapter: Permite que interfaces incompatibles trabajen juntas.

class OldSystem {
	oldMethod(): string {
		return "Old System Method";
	}
}

interface NewSystem {
	newMethod(): string;
}

class Adapter implements NewSystem {
	private oldSystem: OldSystem;

	constructor(oldSystem: OldSystem) {
		this.oldSystem = oldSystem;
	}

	newMethod(): string {
		return this.oldSystem.oldMethod();
	}
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);

console.log(adapter.newMethod()); // Old System Method
