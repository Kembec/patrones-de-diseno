// Flyweight: Reduce la cantidad de objetos creados compartiendo objetos existentes.

class Flyweight {
	constructor(sharedState) {
		this.sharedState = sharedState;
	}

	operation(uniqueState) {
		console.log(`Flyweight: Shared ${this.sharedState}, Unique ${uniqueState}`);
	}
}

class FlyweightFactory {
	constructor() {
		this.flyweights = {};
	}

	getFlyweight(sharedState) {
		if (!this.flyweights[sharedState]) {
			this.flyweights[sharedState] = new Flyweight(sharedState);
		}
		return this.flyweights[sharedState];
	}
}

const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight("SharedState1");
flyweight1.operation("UniqueState1");

const flyweight2 = factory.getFlyweight("SharedState1");
flyweight2.operation("UniqueState2");

console.log(flyweight1 === flyweight2); // true
