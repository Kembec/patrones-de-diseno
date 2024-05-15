// Singleton: Garantiza que una clase tenga solo una instancia.

class Singleton {
	private static instance: Singleton;
	public data: string;

	private constructor() {
		this.data = "Singleton Data";
	}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}

	public getData(): string {
		return this.data;
	}
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
